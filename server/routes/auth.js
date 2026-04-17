import express from 'express'
import jwt from 'jsonwebtoken'
import Driver from '../models/Driver.js'
import { protect } from '../middleware/auth.js'

const router = express.Router()

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE || '30d',
  })
}

router.post('/register', async (req, res) => {
  try {
    const { name, phone, email, password } = req.body

    if (!name || !phone || !password) {
      return res.status(400).json({ success: false, message: 'Name, phone and password are required' })
    }

    const existing = await Driver.findOne({ phone })
    if (existing) {
      return res.status(400).json({ success: false, message: 'Phone number already registered' })
    }

    const driver = await Driver.create({ name, phone, email, password })

    const token = generateToken(driver._id)

    res.status(201).json({
      success: true,
      message: 'Account created successfully',
      token,
      driver: {
        id: driver._id,
        name: driver.name,
        phone: driver.phone,
        email: driver.email,
        kycStatus: driver.kycStatus,
        isActive: driver.isActive,
      },
    })
  } catch (err) {
    res.status(500).json({ success: false, message: err.message })
  }
})

router.post('/login', async (req, res) => {
  try {
    const { phone, password } = req.body

    if (!phone || !password) {
      return res.status(400).json({ success: false, message: 'Phone and password are required' })
    }

    const driver = await Driver.findOne({ phone }).select('+password')
    if (!driver) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' })
    }

    const isMatch = await driver.matchPassword(password)
    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' })
    }

    const token = generateToken(driver._id)

    res.json({
      success: true,
      message: 'Login successful',
      token,
      driver: {
        id: driver._id,
        name: driver.name,
        phone: driver.phone,
        email: driver.email,
        kycStatus: driver.kycStatus,
        clientId: driver.clientId,
        isActive: driver.isActive,
        totalEarnings: driver.totalEarnings,
        totalDeliveries: driver.totalDeliveries,
        rating: driver.rating,
      },
    })
  } catch (err) {
    res.status(500).json({ success: false, message: err.message })
  }
})

router.get('/me', protect, async (req, res) => {
  try {
    const driver = await Driver.findById(req.driver._id).populate('assignedScooter')
    res.json({ success: true, driver })
  } catch (err) {
    res.status(500).json({ success: false, message: err.message })
  }
})

router.put('/kyc', protect, async (req, res) => {
  try {
    const { aadhaarNumber, panNumber, accountNumber, ifscCode, bankName } = req.body

    const driver = await Driver.findByIdAndUpdate(
      req.driver._id,
      {
        aadhaarNumber,
        panNumber,
        bankAccount: { accountNumber, ifscCode, bankName },
        kycStatus: 'submitted',
      },
      { new: true }
    )

    res.json({ success: true, message: 'KYC submitted successfully', driver })
  } catch (err) {
    res.status(500).json({ success: false, message: err.message })
  }
})

export default router

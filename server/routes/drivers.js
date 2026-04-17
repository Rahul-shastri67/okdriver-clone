import express from 'express'
import Driver from '../models/Driver.js'
import Scooter from '../models/Scooter.js'
import { protect } from '../middleware/auth.js'

const router = express.Router()

router.get('/profile', protect, async (req, res) => {
  try {
    const driver = await Driver.findById(req.driver._id).populate('assignedScooter')
    res.json({ success: true, driver })
  } catch (err) {
    res.status(500).json({ success: false, message: err.message })
  }
})

router.put('/profile', protect, async (req, res) => {
  try {
    const { name, email } = req.body
    const driver = await Driver.findByIdAndUpdate(
      req.driver._id,
      { name, email },
      { new: true, runValidators: true }
    )
    res.json({ success: true, message: 'Profile updated', driver })
  } catch (err) {
    res.status(500).json({ success: false, message: err.message })
  }
})

router.post('/select-scooter/:scooterId', protect, async (req, res) => {
  try {
    const driver = await Driver.findById(req.driver._id)

    if (driver.kycStatus !== 'verified') {
      return res.status(403).json({ success: false, message: 'Complete KYC verification before selecting a scooter' })
    }

    const scooter = await Scooter.findById(req.params.scooterId)
    if (!scooter) {
      return res.status(404).json({ success: false, message: 'Scooter not found' })
    }

    if (!scooter.isAvailable) {
      return res.status(400).json({ success: false, message: 'This scooter is already assigned' })
    }

    if (driver.assignedScooter) {
      await Scooter.findByIdAndUpdate(driver.assignedScooter, { isAvailable: true, assignedTo: null })
    }

    await Scooter.findByIdAndUpdate(req.params.scooterId, {
      isAvailable: false,
      assignedTo: driver._id,
    })

    driver.assignedScooter = scooter._id
    await driver.save()

    res.json({ success: true, message: 'Scooter selected successfully', scooter })
  } catch (err) {
    res.status(500).json({ success: false, message: err.message })
  }
})

router.get('/earnings', protect, async (req, res) => {
  try {
    const driver = await Driver.findById(req.driver._id).select('totalEarnings totalDeliveries rating isActive clientId')
    res.json({ success: true, data: driver })
  } catch (err) {
    res.status(500).json({ success: false, message: err.message })
  }
})

router.put('/activate', protect, async (req, res) => {
  try {
    const driver = await Driver.findById(req.driver._id)

    if (driver.kycStatus !== 'verified') {
      return res.status(403).json({ success: false, message: 'KYC must be verified to activate your account' })
    }

    if (!driver.assignedScooter) {
      return res.status(400).json({ success: false, message: 'Select a scooter before activating' })
    }

    const clientId = `RP-${Date.now().toString(36).toUpperCase()}`
    driver.isActive = true
    driver.clientId = clientId
    await driver.save()

    res.json({ success: true, message: 'Account activated! Start earning now.', clientId })
  } catch (err) {
    res.status(500).json({ success: false, message: err.message })
  }
})

router.get('/', async (req, res) => {
  try {
    const { page = 1, limit = 20 } = req.query
    const drivers = await Driver.find()
      .select('-__v')
      .populate('assignedScooter', 'name model batteryType')
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .sort({ createdAt: -1 })

    const total = await Driver.countDocuments()
    res.json({ success: true, total, page: Number(page), drivers })
  } catch (err) {
    res.status(500).json({ success: false, message: err.message })
  }
})

export default router

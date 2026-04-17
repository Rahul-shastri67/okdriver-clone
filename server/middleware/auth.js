import jwt from 'jsonwebtoken'
import Driver from '../models/Driver.js'

export const protect = async (req, res, next) => {
  let token

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1]
  }

  if (!token) {
    return res.status(401).json({ success: false, message: 'Not authorized, no token provided' })
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.driver = await Driver.findById(decoded.id)
    if (!req.driver) {
      return res.status(401).json({ success: false, message: 'Driver not found' })
    }
    next()
  } catch (err) {
    return res.status(401).json({ success: false, message: 'Token is invalid or expired' })
  }
}

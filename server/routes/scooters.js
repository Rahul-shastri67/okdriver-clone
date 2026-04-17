import express from 'express'
import Scooter from '../models/Scooter.js'
import { protect } from '../middleware/auth.js'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const { batteryType, sector, available } = req.query

    const filter = {}
    if (batteryType) filter.batteryType = batteryType
    if (sector && sector !== 'All') filter.sector = sector
    if (available !== undefined) filter.isAvailable = available === 'true'

    const scooters = await Scooter.find(filter)
      .populate('assignedTo', 'name phone')
      .sort({ createdAt: -1 })

    res.json({ success: true, count: scooters.length, scooters })
  } catch (err) {
    res.status(500).json({ success: false, message: err.message })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const scooter = await Scooter.findById(req.params.id).populate('assignedTo', 'name phone')
    if (!scooter) {
      return res.status(404).json({ success: false, message: 'Scooter not found' })
    }
    res.json({ success: true, scooter })
  } catch (err) {
    res.status(500).json({ success: false, message: err.message })
  }
})

router.post('/', async (req, res) => {
  try {
    const scooter = await Scooter.create(req.body)
    res.status(201).json({ success: true, scooter })
  } catch (err) {
    res.status(500).json({ success: false, message: err.message })
  }
})

router.post('/seed', async (req, res) => {
  try {
    await Scooter.deleteMany({})

    const seedData = [
      { name: 'NYX (A)', model: 'NYX-A-2024', batteryType: 'Charging', rangeKm: 120, topSpeedKmh: 60, joiningRentalMin: 2000, joiningRentalMax: 2500, evRating: '50 EV', sector: 'Sector-46', isAvailable: true },
      { name: 'NYX (A)', model: 'NYX-A-2024', batteryType: 'Charging', rangeKm: 120, topSpeedKmh: 60, joiningRentalMin: 2000, joiningRentalMax: 2500, evRating: '50 EV', sector: 'Sector-62', isAvailable: true },
      { name: 'NYX (B)', model: 'NYX-B-2024', batteryType: 'Swapping', rangeKm: 100, topSpeedKmh: 55, joiningRentalMin: 1800, joiningRentalMax: 2200, evRating: '50 EV', sector: 'Sector-46', isAvailable: true },
      { name: 'NYX (B)', model: 'NYX-B-2024', batteryType: 'Swapping', rangeKm: 100, topSpeedKmh: 55, joiningRentalMin: 1800, joiningRentalMax: 2200, evRating: '50 EV', sector: 'Sector-18', isAvailable: true },
      { name: 'NYX Pro', model: 'NYX-PRO-2024', batteryType: 'Charging', rangeKm: 150, topSpeedKmh: 70, joiningRentalMin: 2500, joiningRentalMax: 3000, evRating: '75 EV', sector: 'Sector-62', isAvailable: true },
      { name: 'NYX Pro', model: 'NYX-PRO-2024', batteryType: 'Swapping', rangeKm: 140, topSpeedKmh: 70, joiningRentalMin: 2200, joiningRentalMax: 2800, evRating: '75 EV', sector: 'Sector-18', isAvailable: true },
    ]

    const scooters = await Scooter.insertMany(seedData)
    res.json({ success: true, message: `${scooters.length} scooters seeded`, scooters })
  } catch (err) {
    res.status(500).json({ success: false, message: err.message })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const scooter = await Scooter.findByIdAndDelete(req.params.id)
    if (!scooter) {
      return res.status(404).json({ success: false, message: 'Scooter not found' })
    }
    res.json({ success: true, message: 'Scooter deleted' })
  } catch (err) {
    res.status(500).json({ success: false, message: err.message })
  }
})

export default router

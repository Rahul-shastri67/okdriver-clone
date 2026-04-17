import mongoose from 'mongoose'

const scooterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Scooter name is required'],
    trim: true,
  },
  model: {
    type: String,
    required: true,
  },
  batteryType: {
    type: String,
    enum: ['Charging', 'Swapping'],
    required: true,
  },
  rangeKm: {
    type: Number,
    required: true,
  },
  topSpeedKmh: {
    type: Number,
    required: true,
  },
  joiningRentalMin: {
    type: Number,
    required: true,
  },
  joiningRentalMax: {
    type: Number,
    required: true,
  },
  evRating: {
    type: String,
    default: '50 EV',
  },
  imageUrl: {
    type: String,
    default: '',
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
  sector: {
    type: String,
    default: 'All',
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Driver',
    default: null,
  },
}, { timestamps: true })

export default mongoose.model('Scooter', scooterSchema)

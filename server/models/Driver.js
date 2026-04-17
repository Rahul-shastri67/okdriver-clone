import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const driverSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    unique: true,
    match: [/^[6-9]\d{9}$/, 'Enter a valid Indian mobile number'],
  },
  email: {
    type: String,
    unique: true,
    sparse: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    select: false,
  },
  kycStatus: {
    type: String,
    enum: ['pending', 'submitted', 'verified', 'rejected'],
    default: 'pending',
  },
  aadhaarNumber: {
    type: String,
    select: false,
  },
  panNumber: {
    type: String,
    select: false,
  },
  bankAccount: {
    accountNumber: { type: String, select: false },
    ifscCode: { type: String, select: false },
    bankName: String,
  },
  assignedScooter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Scooter',
    default: null,
  },
  clientId: {
    type: String,
    unique: true,
    sparse: true,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  totalEarnings: {
    type: Number,
    default: 0,
  },
  totalDeliveries: {
    type: Number,
    default: 0,
  },
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5,
  },
}, { timestamps: true })

driverSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next()
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
  next()
})

driverSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password)
}

export default mongoose.model('Driver', driverSchema)

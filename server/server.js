import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import authRoutes from './routes/auth.js';
import driverRoutes from './routes/drivers.js';
import scooterRoutes from './routes/scooters.js';

dotenv.config();

const app = express();

// CORS Configuration
const allowedOrigins = [
  'http://localhost:5173',
  'https://okdriver-clone.vercel.app',
];

app.use(
  cors({
    origin: (origin, callback) => {
      // Postman/server-to-server requests
      if (!origin) return callback(null, true);

      // Localhost & production domain
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      // Allow all Vercel preview deployments
      if (origin.endsWith('.vercel.app')) {
        return callback(null, true);
      }

      return callback(new Error(`CORS blocked: ${origin}`));
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected — RiderPulse DB ready'))
  .catch((err) => console.error('❌ DB connection failed:', err));

app.get('/', (req, res) => {
  res.send('🚀 RiderPulse Backend is Live');
});

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'RiderPulse API is running',
  });
});

app.use('/api/auth', authRoutes);
app.use('/api/drivers', driverRoutes);
app.use('/api/scooters', scooterRoutes);

app.use((err, req, res, next) => {
  const status = err.statusCode || 500;

  res.status(status).json({
    success: false,
    message: err.message || 'Internal Server Error',
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 RiderPulse Server running on port ${PORT}`);
});
# ⚡ RiderPulse

**Drive. Earn. Repeat.**

A modern MERN stack web platform for EV delivery riders — built to mirror the OKDriver app experience with Zypp-inspired design language.

---

## 🗂️ Project Structure

```
riderpulse/
├── client/                  # React + Vite frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Stats.jsx
│   │   │   ├── HowItWorks.jsx
│   │   │   ├── Features.jsx
│   │   │   └── Footer.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   └── tailwind.config.js
│
├── server/                  # Express + MongoDB backend
│   ├── models/
│   │   ├── Driver.js
│   │   └── Scooter.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── drivers.js
│   │   └── scooters.js
│   ├── middleware/
│   │   └── auth.js
│   ├── server.js
│   └── .env.example
│
├── package.json             # Root scripts (concurrently)
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- MongoDB running locally (or MongoDB Atlas URI)

### 1. Clone & Install

```bash
git clone <your-repo-url>
cd riderpulse
npm run install:all
```

### 2. Configure Environment

```bash
cd server
cp .env.example .env
```

Edit `server/.env`:
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/riderpulse
JWT_SECRET=change_this_to_a_long_random_secret
JWT_EXPIRE=30d
NODE_ENV=development
```

### 3. Run Development Servers

```bash
# From root — starts both client (3000) and server (5000)
npm run dev
```

Or run separately:
```bash
npm run client    # React on http://localhost:3000
npm run server    # Express on http://localhost:5000
```

---

## 🌐 API Endpoints

### Auth
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register a new rider |
| POST | `/api/auth/login` | Login with phone + password |
| GET | `/api/auth/me` | Get current driver (protected) |
| PUT | `/api/auth/kyc` | Submit KYC details (protected) |

### Drivers
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/drivers/profile` | Get driver profile (protected) |
| PUT | `/api/drivers/profile` | Update profile (protected) |
| POST | `/api/drivers/select-scooter/:id` | Select a scooter (protected) |
| GET | `/api/drivers/earnings` | Get earning stats (protected) |
| PUT | `/api/drivers/activate` | Activate client ID (protected) |

### Scooters
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/scooters` | List all scooters (filter: batteryType, sector, available) |
| GET | `/api/scooters/:id` | Get single scooter |
| POST | `/api/scooters` | Add new scooter |
| POST | `/api/scooters/seed` | Seed sample scooters (dev only) |
| DELETE | `/api/scooters/:id` | Delete a scooter |

### Example Requests

**Register**
```json
POST /api/auth/register
{
  "name": "Rahul Kumar",
  "phone": "9876543210",
  "password": "securepass123"
}
```

**Login**
```json
POST /api/auth/login
{
  "phone": "9876543210",
  "password": "securepass123"
}
```

**Filter Scooters**
```
GET /api/scooters?batteryType=Charging&available=true
```

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Brand Green | `#2ECC71` |
| Dark | `#111111` |
| Fonts | Syne (headings) + DM Sans (body) |
| Border Radius | `16–40px` (cards, phones) |
| Animation | CSS keyframes + hover transitions |

---

## 🛡️ Auth Flow

```
Register → JWT Token → Protected Routes
KYC Submit → Admin Verify → Scooter Select → Activate → Earn
```

---

## 📱 Screens Implemented

- [x] Hero (login/register phone mockup)
- [x] Stats bar
- [x] How It Works — Step 1 (KYC, phone: login screen)
- [x] How It Works — Step 2 (Scooter selection, battery filter popup)
- [x] Features grid
- [x] Navbar (sticky, blur on scroll)
- [x] Footer

---

## 🏗️ Tech Stack

| Layer | Tech |
|-------|------|
| Frontend | React 18, Vite, Tailwind CSS |
| Backend | Node.js, Express 4 |
| Database | MongoDB, Mongoose |
| Auth | JWT, bcryptjs |
| Dev | concurrently, nodemon |

---

*An ISO 27001:2022 Certified Platform · #MISSION ZERO EMISSION*

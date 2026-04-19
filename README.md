# ⚡ RiderPulse

> **Drive. Earn. Repeat.**
> A modern MERN stack platform empowering EV delivery riders — inspired by the seamless experience of OKDriver and the clean design language of Zypp.

---

## 🚀 Overview

RiderPulse is a full-stack web platform designed to streamline onboarding, vehicle allocation, and earnings tracking for EV delivery riders. Built with scalability and real-world usability in mind, it replicates production-grade workflows including KYC, authentication, and scooter assignment.

---

## ✨ Key Features

* 🔐 Secure authentication with JWT
* 🧾 KYC submission & verification workflow
* 🛵 Smart scooter selection with filters
* 📊 Earnings tracking system
* 📱 Mobile-first responsive UI
* ⚡ Fast and optimized with Vite + Tailwind
* 🧠 Real-world inspired rider lifecycle

---

## 🗂️ Project Structure

```
riderpulse/
├── client/                  # React + Vite frontend
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   └── tailwind.config.js
│
├── server/                  # Express + MongoDB backend
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── server.js
│   └── .env.example
│
├── package.json             # Root scripts
└── README.md
```

---

## ⚙️ Getting Started

### 📌 Prerequisites

* Node.js (v18+)
* MongoDB (local or Atlas)

---

### 1️⃣ Clone Repository

```bash
git clone <your-repo-url>
cd riderpulse
npm run install:all
```

---

### 2️⃣ Setup Environment

```bash
cd server
cp .env.example .env
```

Update `.env`:

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/riderpulse
JWT_SECRET=your_super_secure_secret
JWT_EXPIRE=30d
NODE_ENV=development
```

---

### 3️⃣ Run Development Servers

```bash
npm run dev
```

Or separately:

```bash
npm run client   # http://localhost:3000
npm run server   # http://localhost:5000
```

---

## 🌐 API Overview

### 🔐 Auth Routes

* `POST /api/auth/register` → Register rider
* `POST /api/auth/login` → Login
* `GET /api/auth/me` → Get current user
* `PUT /api/auth/kyc` → Submit KYC

### 👤 Driver Routes

* `GET /api/drivers/profile`
* `PUT /api/drivers/profile`
* `POST /api/drivers/select-scooter/:id`
* `GET /api/drivers/earnings`
* `PUT /api/drivers/activate`

### 🛵 Scooter Routes

* `GET /api/scooters`
* `GET /api/scooters/:id`
* `POST /api/scooters`
* `POST /api/scooters/seed` *(dev only)*
* `DELETE /api/scooters/:id`

---

## 📦 Sample Request

```json
POST /api/auth/register
{
  "name": "Rahul Kumar",
  "phone": "9876543210",
  "password": "securepass123"
}
```

---

## 🎨 Design System

| Element       | Value                              |
| ------------- | ---------------------------------- |
| Primary Color | #2ECC71                            |
| Background    | #111111                            |
| Fonts         | Syne + DM Sans                     |
| UI Style      | Rounded, modern, mobile-first      |
| Animations    | Smooth transitions + hover effects |

---

## 🔄 Rider Flow

```
Register → Login → KYC → Verification → Scooter Selection → Activation → Earnings
```

---

## 📱 UI Highlights

* Hero section with phone mockup
* Interactive “How It Works” steps
* Scooter selection UI with filters
* Sticky navbar with blur effect
* Clean feature grid & footer

---

## 🏗️ Tech Stack

| Layer          | Technology                   |
| -------------- | ---------------------------- |
| Frontend       | React 18, Vite, Tailwind CSS |
| Backend        | Node.js, Express             |
| Database       | MongoDB, Mongoose            |
| Authentication | JWT, bcryptjs                |
| Dev Tools      | concurrently, nodemon        |

---

## 🚀 Future Enhancements

* 📲 Real-time order assignment system
* 📍 Live GPS tracking for riders
* 💰 Payment & wallet integration
* 📊 Advanced analytics dashboard
* 🔔 Push notifications

---

## 🤝 Contributing

Contributions are welcome!
Feel free to fork the repo and submit a pull request.

---

## 📄 License

This project is licensed under the MIT License.

---

## 💡 Author

**Rahul Shastri**
Building scalable MERN applications 🚀

---

> *Empowering EV riders with smarter tools · #MissionZeroEmission*

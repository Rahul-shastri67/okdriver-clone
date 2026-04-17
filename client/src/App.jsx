import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Stats from './components/Stats'
import Features from './components/Features'
import Footer from './components/Footer'

function HomePage() {
  return (
    <main>
      <Navbar />
      <section id="home"><Hero /></section>
      <Stats />
      <section id="how-it-works"><HowItWorks /></section>
      <section id="features"><Features /></section>
      <Footer />
    </main>
  )
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

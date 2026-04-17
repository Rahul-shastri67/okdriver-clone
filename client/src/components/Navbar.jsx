import { useState, useEffect } from 'react'
import { Zap, LogOut, User, Menu, X } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import AuthModal from './AuthModal'

const navLinks = [
  { label: 'How It Works', href: 'how-it-works' },
  { label: 'Features', href: 'features' },
  { label: 'Scooters', href: 'how-it-works' },
  { label: 'About', href: 'home' },
]

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [modal, setModal] = useState({ open: false, mode: 'login' })
  const [menuOpen, setMenuOpen] = useState(false)
  const { driver, logout } = useAuth()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const openModal = (mode) => { setModal({ open: true, mode }); setMenuOpen(false) }
  const closeModal = () => setModal(m => ({ ...m, open: false }))

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.6)',
        backdropFilter: 'blur(14px)',
        boxShadow: scrolled ? '0 1px 20px rgba(0,0,0,0.08)' : 'none',
        transition: 'all 0.3s ease',
        padding: '0 5vw',
      }}>
        <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '70px', maxWidth: '1280px', margin: '0 auto' }}>

          <button
            onClick={() => scrollTo('home')}
            style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
          >
            <div style={{ width: '34px', height: '34px', background: '#2ECC71', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Zap size={18} color="white" fill="white" />
            </div>
            <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.2rem', color: '#111', letterSpacing: '-0.5px' }}>
              Rider<span style={{ color: '#2ECC71' }}>Pulse</span>
            </span>
          </button>

          <ul style={{ display: 'flex', listStyle: 'none', gap: '8px', margin: 0, padding: 0 }}>
            {navLinks.map(link => (
              <li key={link.label}>
                <button
                  onClick={() => scrollTo(link.href)}
                  style={{
                    fontFamily: 'DM Sans, sans-serif', fontSize: '0.88rem', fontWeight: 500,
                    color: '#444', background: 'none', border: 'none', cursor: 'pointer',
                    padding: '8px 14px', borderRadius: '8px', transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#2ECC71'; e.currentTarget.style.background = 'rgba(46,204,113,0.07)' }}
                  onMouseLeave={e => { e.currentTarget.style.color = '#444'; e.currentTarget.style.background = 'none' }}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            {driver ? (
              <>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px', background: '#f0fdf4', borderRadius: '50px', border: '1.5px solid #bbf7d0' }}>
                  <User size={15} color="#2ECC71" />
                  <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem', fontWeight: 600, color: '#111' }}>
                    {driver.name?.split(' ')[0]}
                  </span>
                </div>
                <button
                  onClick={logout}
                  style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'none', border: '1.5px solid #e5e7eb', borderRadius: '50px', padding: '8px 16px', cursor: 'pointer', fontFamily: 'DM Sans, sans-serif', fontSize: '0.875rem', fontWeight: 600, color: '#6b7280', transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#ef4444'; e.currentTarget.style.color = '#ef4444' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = '#e5e7eb'; e.currentTarget.style.color = '#6b7280' }}
                >
                  <LogOut size={14} /> Log out
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => openModal('login')}
                  style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.875rem', fontWeight: 600, color: '#111', background: 'none', border: 'none', cursor: 'pointer', padding: '8px 16px', borderRadius: '8px', transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#2ECC71'; e.currentTarget.style.background = 'rgba(46,204,113,0.07)' }}
                  onMouseLeave={e => { e.currentTarget.style.color = '#111'; e.currentTarget.style.background = 'none' }}
                >
                  Log In
                </button>
                <button
                  onClick={() => openModal('register')}
                  style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.875rem', fontWeight: 700, color: 'white', background: '#2ECC71', border: 'none', cursor: 'pointer', padding: '10px 22px', borderRadius: '50px', transition: 'all 0.2s', boxShadow: '0 4px 14px rgba(46,204,113,0.3)' }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#27ae60'; e.currentTarget.style.transform = 'translateY(-1px)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#2ECC71'; e.currentTarget.style.transform = 'translateY(0)' }}
                >
                  Create Account
                </button>
              </>
            )}
          </div>
        </nav>
      </header>

      <AuthModal isOpen={modal.open} onClose={closeModal} defaultMode={modal.mode} />
    </>
  )
}

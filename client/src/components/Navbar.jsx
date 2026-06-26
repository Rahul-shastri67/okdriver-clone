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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const { driver, logout } = useAuth()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    const onResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('scroll', onScroll)
    window.addEventListener('resize', onResize)
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onResize) }
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const openModal = (mode) => { setModal({ open: true, mode }); setMenuOpen(false) }
  const closeModal = () => setModal(m => ({ ...m, open: false }))
  const handleNavClick = (href) => { scrollTo(href); setMenuOpen(false) }

  return (
    <>
      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
        background: (scrolled || menuOpen) ? 'rgba(255,255,255,0.98)' : 'rgba(255,255,255,0.6)',
        backdropFilter: 'blur(14px)',
        boxShadow: scrolled ? '0 1px 20px rgba(0,0,0,0.08)' : 'none',
        transition: 'background 0.3s, box-shadow 0.3s',
      }}>
        <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px', maxWidth: '1280px', margin: '0 auto', padding: '0 20px' }}>

          <button onClick={() => scrollTo('home')} style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'none', border: 'none', cursor: 'pointer', padding: 0, flexShrink: 0 }}>
            <div style={{ width: '32px', height: '32px', background: '#2ECC71', borderRadius: '9px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Zap size={16} color="white" fill="white" />
            </div>
            <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.1rem', color: '#111', letterSpacing: '-0.5px' }}>
              Rider<span style={{ color: '#2ECC71' }}>Pulse</span>
            </span>
          </button>

          {!isMobile && (
            <ul style={{ display: 'flex', listStyle: 'none', gap: '4px', margin: 0, padding: 0 }}>
              {navLinks.map(link => (
                <li key={link.label}>
                  <button onClick={() => handleNavClick(link.href)}
                    style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.88rem', fontWeight: 500, color: '#444', background: 'none', border: 'none', cursor: 'pointer', padding: '8px 14px', borderRadius: '8px', transition: 'all 0.2s' }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#2ECC71'; e.currentTarget.style.background = 'rgba(46,204,113,0.08)' }}
                    onMouseLeave={e => { e.currentTarget.style.color = '#444'; e.currentTarget.style.background = 'none' }}>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          )}

          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            {!isMobile && (
              driver ? (
                <>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '7px', padding: '7px 14px', background: '#f0fdf4', borderRadius: '50px', border: '1.5px solid #bbf7d0' }}>
                    <User size={14} color="#2ECC71" />
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.83rem', fontWeight: 600, color: '#111' }}>{driver.name?.split(' ')[0]}</span>
                  </div>
                  <button onClick={logout}
                    style={{ display: 'flex', alignItems: 'center', gap: '5px', background: 'none', border: '1.5px solid #e5e7eb', borderRadius: '50px', padding: '7px 14px', cursor: 'pointer', fontFamily: 'DM Sans, sans-serif', fontSize: '0.83rem', fontWeight: 600, color: '#6b7280', transition: 'all 0.2s' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = '#ef4444'; e.currentTarget.style.color = '#ef4444' }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = '#e5e7eb'; e.currentTarget.style.color = '#6b7280' }}>
                    <LogOut size={13} /> Log out
                  </button>
                </>
              ) : (
                <>
                  <button onClick={() => openModal('login')}
                    style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.875rem', fontWeight: 600, color: '#111', background: 'none', border: 'none', cursor: 'pointer', padding: '8px 14px', borderRadius: '8px', transition: 'all 0.2s' }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#2ECC71'; e.currentTarget.style.background = 'rgba(46,204,113,0.08)' }}
                    onMouseLeave={e => { e.currentTarget.style.color = '#111'; e.currentTarget.style.background = 'none' }}>
                    Log In
                  </button>
                  <button onClick={() => openModal('register')}
                    style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.875rem', fontWeight: 700, color: 'white', background: '#2ECC71', border: 'none', cursor: 'pointer', padding: '9px 20px', borderRadius: '50px', transition: 'all 0.2s', boxShadow: '0 4px 14px rgba(46,204,113,0.28)' }}
                    onMouseEnter={e => { e.currentTarget.style.background = '#27ae60' }}
                    onMouseLeave={e => { e.currentTarget.style.background = '#2ECC71' }}>
                    Create Account
                  </button>
                </>
              )
            )}

            {isMobile && (
              <button onClick={() => setMenuOpen(o => !o)}
                style={{ width: '40px', height: '40px', background: menuOpen ? 'rgba(46,204,113,0.1)' : '#f3f4f6', border: 'none', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#111', transition: 'all 0.2s' }}>
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            )}
          </div>
        </nav>

        {isMobile && menuOpen && (
          <div style={{ background: 'white', borderTop: '1px solid #f0f0f0', padding: '16px 20px 24px', animation: 'slideDown 0.2s ease' }}>
            <ul style={{ listStyle: 'none', margin: '0 0 20px', padding: 0, display: 'flex', flexDirection: 'column', gap: '2px' }}>
              {navLinks.map(link => (
                <li key={link.label}>
                  <button onClick={() => handleNavClick(link.href)}
                    style={{ width: '100%', textAlign: 'left', fontFamily: 'DM Sans, sans-serif', fontSize: '1rem', fontWeight: 500, color: '#333', background: 'none', border: 'none', cursor: 'pointer', padding: '12px 16px', borderRadius: '10px', transition: 'all 0.15s' }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(46,204,113,0.07)'; e.currentTarget.style.color = '#2ECC71' }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.color = '#333' }}>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>

            {driver ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 16px', background: '#f0fdf4', borderRadius: '12px', border: '1.5px solid #bbf7d0' }}>
                  <User size={16} color="#2ECC71" />
                  <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.9rem', fontWeight: 600, color: '#111' }}>{driver.name}</span>
                </div>
                <button onClick={() => { logout(); setMenuOpen(false) }}
                  style={{ width: '100%', padding: '12px', background: '#fff1f2', border: '1.5px solid #fecdd3', borderRadius: '12px', fontFamily: 'DM Sans, sans-serif', fontSize: '0.9rem', fontWeight: 600, color: '#e11d48', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                  <LogOut size={15} /> Log Out
                </button>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <button onClick={() => openModal('login')}
                  style={{ width: '100%', padding: '13px', background: 'white', border: '1.5px solid #e5e7eb', borderRadius: '12px', fontFamily: 'DM Sans, sans-serif', fontSize: '0.95rem', fontWeight: 600, color: '#111', cursor: 'pointer' }}>
                  Log In
                </button>
                <button onClick={() => openModal('register')}
                  style={{ width: '100%', padding: '13px', background: '#2ECC71', border: 'none', borderRadius: '12px', fontFamily: 'DM Sans, sans-serif', fontSize: '0.95rem', fontWeight: 700, color: 'white', cursor: 'pointer', boxShadow: '0 4px 14px rgba(46,204,113,0.3)' }}>
                  Create Account
                </button>
              </div>
            )}
          </div>
        )}
      </header>

      <AuthModal isOpen={modal.open} onClose={closeModal} defaultMode={modal.mode} />
    </>
  )
}

import { useState } from 'react'
import { ArrowRight, Star, Users, TrendingUp } from 'lucide-react'
import AuthModal from './AuthModal'
import { useAuth } from '../context/AuthContext'

export default function Hero() {
  const [modal, setModal] = useState({ open: false, mode: 'register' })
  const { driver } = useAuth()
  return (
  <>
    <section
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f0fdf8 0%, #ffffff 50%, #e8faf2 100%)',
        display: 'flex',
        alignItems: 'center',
        padding: '100px 5vw 60px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '-80px',
          right: '-80px',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(46,204,113,0.12) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1280px', margin: '0 auto', width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
        <div style={{ animationDelay: '0s' }} className="animate-fadeUp">
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(46,204,113,0.1)',
              border: '1px solid rgba(46,204,113,0.25)',
              borderRadius: '50px',
              padding: '6px 16px',
              marginBottom: '24px',
            }}
          >
            <span style={{ width: '6px', height: '6px', background: 'var(--green)', borderRadius: '50%', display: 'inline-block' }} />
            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--green)', fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.5px' }}>
              #MISSION ZERO EMISSION
            </span>
          </div>

          <h1 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', fontWeight: 800, lineHeight: 1.1, color: 'var(--dark)', marginBottom: '20px', letterSpacing: '-1px' }}>
            Last Mile<br />
            <span style={{ color: 'var(--green)' }}>Deliveries</span><br />
            That Pay More
          </h1>

          <p style={{ fontSize: '1.05rem', color: 'var(--gray)', lineHeight: 1.7, marginBottom: '36px', fontFamily: 'DM Sans, sans-serif', maxWidth: '420px' }}>
            Maximize your earning by delivering more orders on EV scooters. Join India's fastest-growing green delivery network.
          </p>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <button
              onClick={() => setModal({ open: true, mode: 'register' })}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: 'var(--green)', color: 'white', border: 'none',
                padding: '14px 28px', borderRadius: '50px', cursor: 'pointer',
                fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '0.95rem',
                transition: 'all 0.25s', boxShadow: '0 8px 28px rgba(46,204,113,0.35)',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 36px rgba(46,204,113,0.45)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(46,204,113,0.35)' }}
            >
              Create Account <ArrowRight size={16} />
            </button>
            <button
              onClick={() => setModal({ open: true, mode: 'login' })}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: 'white', color: 'var(--dark)', border: '1.5px solid #e5e7eb',
                padding: '14px 28px', borderRadius: '50px', cursor: 'pointer',
                fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: '0.95rem',
                transition: 'all 0.25s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--green)'; e.currentTarget.style.color = 'var(--green)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#e5e7eb'; e.currentTarget.style.color = 'var(--dark)' }}
            >
              Log In
            </button>
          </div>

          <div style={{ display: 'flex', gap: '32px', marginTop: '48px', paddingTop: '32px', borderTop: '1px solid #f0f0f0' }}>
            {[
              { icon: <Users size={18} />, value: '50K+', label: 'Active Riders' },
              { icon: <TrendingUp size={18} />, value: '₹35K', label: 'Avg Monthly' },
              { icon: <Star size={18} fill="currentColor" />, value: '4.9★', label: 'App Rating' },
            ].map(stat => (
              <div key={stat.label} style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <span style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.3rem', fontWeight: 700, color: 'var(--dark)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ color: 'var(--green)' }}>{stat.icon}</span> {stat.value}
                </span>
                <span style={{ fontSize: '0.78rem', color: 'var(--gray)', fontFamily: 'DM Sans, sans-serif' }}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
          <div
            className="animate-float"
            style={{
              width: '280px',
              height: '560px',
              background: 'linear-gradient(170deg, #1a1a2e 0%, #16213e 100%)',
              borderRadius: '40px',
              padding: '12px',
              boxShadow: '0 40px 100px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.1)',
              position: 'relative',
            }}
          >
            <div style={{ width: '100%', height: '100%', background: 'linear-gradient(145deg, #1a3c2e, #0d2618)', borderRadius: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '20px', padding: '24px', overflow: 'hidden', position: 'relative' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(circle at 70% 30%, rgba(46,204,113,0.15) 0%, transparent 60%)' }} />

              <div style={{ width: '64px', height: '64px', background: 'var(--green)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1 }}>
                <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.1rem', color: 'white' }}>RP</span>
              </div>

              <div style={{ textAlign: 'center', zIndex: 1 }}>
                <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, color: 'white', fontSize: '1rem', marginBottom: '6px' }}>Last Mile Deliveries</div>
                <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.75rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.5 }}>Maximize your Earning by delivering more orders</div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%', zIndex: 1 }}>
                <button style={{ width: '100%', padding: '12px', background: 'var(--green)', border: 'none', borderRadius: '10px', fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: '0.85rem', color: 'white', cursor: 'pointer' }}>
                  Log In
                </button>
                <button style={{ width: '100%', padding: '12px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '10px', fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: '0.85rem', color: 'white', cursor: 'pointer' }}>
                  Create Account
                </button>
              </div>

              <div style={{ position: 'absolute', bottom: '16px', left: '16px', right: '16px', textAlign: 'center', zIndex: 1 }}>
                <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '0.7rem', fontWeight: 700, color: 'var(--green)', letterSpacing: '2px' }}>#MISSION ZERO EMISSION</div>
                <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.6rem', color: 'rgba(255,255,255,0.4)', marginTop: '4px' }}>An ISO 27001:2022 Certified Company</div>
              </div>
            </div>
          </div>

          <div
            style={{
              position: 'absolute',
              right: '-10px',
              top: '40px',
              width: '120px',
              height: '240px',
              background: 'linear-gradient(170deg, #0f2d1f 0%, #0a1f15 100%)',
              borderRadius: '26px',
              padding: '8px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
              opacity: 0.8,
            }}
          >
            <div style={{ width: '100%', height: '100%', background: 'linear-gradient(145deg, #1a3c2e, #0d2618)', borderRadius: '20px', display: 'flex', flexDirection: 'column', padding: '12px', gap: '8px' }}>
              <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.5rem', fontWeight: 600, color: 'rgba(255,255,255,0.6)' }}>Scooter Selection</div>
              {[1,2,3].map(i => (
                <div key={i} style={{ display: 'flex', gap: '6px', alignItems: 'center', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', padding: '6px' }}>
                  <div style={{ width: '24px', height: '20px', background: 'rgba(46,204,113,0.3)', borderRadius: '4px' }} />
                  <div>
                    <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.45rem', color: 'white', fontWeight: 600 }}>NYX (A)</div>
                    <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.4rem', color: 'var(--green)' }}>50 EV · Charging</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    <AuthModal isOpen={modal.open} onClose={() => setModal(m => ({ ...m, open: false }))} defaultMode={modal.mode} />
  </>
  )
}

import { useState, useEffect } from 'react'
import { X, Eye, EyeOff, Loader2, CheckCircle } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

const inputStyle = {
  width: '100%',
  padding: '12px 14px',
  border: '1.5px solid #e5e7eb',
  borderRadius: '10px',
  fontFamily: 'DM Sans, sans-serif',
  fontSize: '0.9rem',
  color: '#111',
  outline: 'none',
  background: '#fafafa',
  transition: 'border-color 0.2s',
}

function Input({ label, type = 'text', value, onChange, placeholder, error, showToggle, onToggle, showPw }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
      <label style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.8rem', fontWeight: 600, color: '#374151' }}>
        {label}
      </label>
      <div style={{ position: 'relative' }}>
        <input
          type={showToggle ? (showPw ? 'text' : 'password') : type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          style={{ ...inputStyle, borderColor: error ? '#ef4444' : '#e5e7eb', paddingRight: showToggle ? '44px' : '14px' }}
          onFocus={e => e.target.style.borderColor = error ? '#ef4444' : '#2ECC71'}
          onBlur={e => e.target.style.borderColor = error ? '#ef4444' : '#e5e7eb'}
        />
        {showToggle && (
          <button
            type="button"
            onClick={onToggle}
            style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#9ca3af', padding: 0, display: 'flex' }}
          >
            {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        )}
      </div>
      {error && <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.75rem', color: '#ef4444' }}>{error}</span>}
    </div>
  )
}

export default function AuthModal({ isOpen, onClose, defaultMode = 'login' }) {
  const [mode, setMode] = useState(defaultMode)
  const [showPw, setShowPw] = useState(false)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [apiError, setApiError] = useState('')

  const [form, setForm] = useState({ name: '', phone: '', password: '' })
  const [errors, setErrors] = useState({})

  const { login, register } = useAuth()

  useEffect(() => {
    setMode(defaultMode)
    setForm({ name: '', phone: '', password: '' })
    setErrors({})
    setApiError('')
    setSuccess(false)
  }, [defaultMode, isOpen])

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const set = (field) => (e) => {
    setForm(p => ({ ...p, [field]: e.target.value }))
    setErrors(p => ({ ...p, [field]: '' }))
    setApiError('')
  }

  const validate = () => {
    const e = {}
    if (mode === 'register' && !form.name.trim()) e.name = 'Name required'
    if (!form.phone.match(/^[6-9]\d{9}$/)) e.phone = 'Enter valid 10-digit mobile number'
    if (form.password.length < 6) e.password = 'Min 6 characters'
    return e
  }

  const handleSubmit = async () => {
    const e = validate()
    if (Object.keys(e).length) { setErrors(e); return }

    setLoading(true)
    setApiError('')
    try {
      if (mode === 'login') {
        await login(form.phone, form.password)
      } else {
        await register(form.name, form.phone, form.password)
      }
      setSuccess(true)
      setTimeout(() => { onClose(); setSuccess(false) }, 1400)
    } catch (err) {
      setApiError(err.response?.data?.message || 'Something went wrong. Try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleKey = (e) => { if (e.key === 'Enter') handleSubmit() }

  if (!isOpen) return null

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(0,0,0,0.45)',
        backdropFilter: 'blur(6px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '20px',
        animation: 'fadeIn 0.18s ease',
      }}
    >
      <style>{`
        @keyframes fadeIn { from { opacity:0 } to { opacity:1 } }
        @keyframes slideUp { from { opacity:0; transform:translateY(24px) } to { opacity:1; transform:translateY(0) } }
      `}</style>

      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: 'white',
          borderRadius: '24px',
          padding: '36px 32px',
          width: '100%',
          maxWidth: '420px',
          boxShadow: '0 32px 80px rgba(0,0,0,0.18)',
          animation: 'slideUp 0.22s ease',
          position: 'relative',
        }}
      >
        <button
          onClick={onClose}
          style={{ position: 'absolute', top: '18px', right: '18px', background: '#f3f4f6', border: 'none', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#6b7280' }}
        >
          <X size={16} />
        </button>

        {success ? (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <CheckCircle size={52} color="#2ECC71" style={{ margin: '0 auto 14px' }} />
            <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.3rem', color: '#111', marginBottom: '6px' }}>
              {mode === 'login' ? 'Welcome back!' : 'Account created!'}
            </h3>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.875rem', color: '#6b7280' }}>Taking you in...</p>
          </div>
        ) : (
          <>
            <div style={{ marginBottom: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <div style={{ width: '28px', height: '28px', background: '#2ECC71', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '0.7rem', color: 'white' }}>RP</span>
                </div>
                <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1rem', color: '#111' }}>
                  Rider<span style={{ color: '#2ECC71' }}>Pulse</span>
                </span>
              </div>
              <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.5rem', color: '#111', marginBottom: '4px' }}>
                {mode === 'login' ? 'Welcome back' : 'Create account'}
              </h2>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.875rem', color: '#6b7280' }}>
                {mode === 'login' ? 'Log in to your rider account' : 'Join India\'s green delivery network'}
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }} onKeyDown={handleKey}>
              {mode === 'register' && (
                <Input label="Full Name" value={form.name} onChange={set('name')} placeholder="Rahul Kumar" error={errors.name} />
              )}
              <Input label="Mobile Number" type="tel" value={form.phone} onChange={set('phone')} placeholder="9876543210" error={errors.phone} />
              <Input label="Password" value={form.password} onChange={set('password')} placeholder="Min 6 characters" error={errors.password} showToggle onToggle={() => setShowPw(p => !p)} showPw={showPw} />
            </div>

            {apiError && (
              <div style={{ marginTop: '14px', padding: '10px 14px', background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '10px', fontFamily: 'DM Sans, sans-serif', fontSize: '0.82rem', color: '#dc2626' }}>
                {apiError}
              </div>
            )}

            <button
              onClick={handleSubmit}
              disabled={loading}
              style={{
                width: '100%', marginTop: '22px', padding: '13px',
                background: loading ? '#86efac' : '#2ECC71',
                border: 'none', borderRadius: '12px',
                fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '0.95rem',
                color: 'white', cursor: loading ? 'not-allowed' : 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                transition: 'background 0.2s, transform 0.15s',
                transform: loading ? 'none' : undefined,
              }}
              onMouseEnter={e => { if (!loading) e.currentTarget.style.background = '#27ae60' }}
              onMouseLeave={e => { if (!loading) e.currentTarget.style.background = '#2ECC71' }}
            >
              {loading && <Loader2 size={16} style={{ animation: 'spin 0.8s linear infinite' }} />}
              {loading ? 'Please wait...' : mode === 'login' ? 'Log In' : 'Create Account'}
            </button>
            <style>{`@keyframes spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }`}</style>

            <div style={{ textAlign: 'center', marginTop: '18px', fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem', color: '#6b7280' }}>
              {mode === 'login' ? (
                <>New to RiderPulse?{' '}
                  <button onClick={() => { setMode('register'); setErrors({}); setApiError('') }}
                    style={{ background: 'none', border: 'none', color: '#2ECC71', fontWeight: 700, cursor: 'pointer', fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem' }}>
                    Create account
                  </button>
                </>
              ) : (
                <>Already have an account?{' '}
                  <button onClick={() => { setMode('login'); setErrors({}); setApiError('') }}
                    style={{ background: 'none', border: 'none', color: '#2ECC71', fontWeight: 700, cursor: 'pointer', fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem' }}>
                    Log in
                  </button>
                </>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

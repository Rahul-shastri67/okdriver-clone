import { useState } from 'react'
import { CheckCircle, Bike, DollarSign } from 'lucide-react'

const steps = [
  {
    id: 1,
    icon: <CheckCircle size={22} />,
    title: 'Complete Your KYC',
    desc: 'Add your personal details like Aadhaar, PAN, and Bank details!',
  },
  {
    id: 2,
    icon: <Bike size={22} />,
    title: 'Choose Your Scooter',
    desc: 'Select your scooter like swappable battery scooter',
  },
  {
    id: 3,
    icon: <DollarSign size={22} />,
    title: 'Start Earning',
    desc: 'Activate your client ID and begin deliveries to earn more!',
  },
]

function PhoneLogin() {
  return (
    <div style={{ width: '100%', height: '100%', background: 'linear-gradient(145deg, #1a3c2e, #0d2618)', borderRadius: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '18px', padding: '28px 20px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, right: 0, width: '60%', height: '60%', background: 'radial-gradient(circle, rgba(46,204,113,0.12) 0%, transparent 70%)', borderRadius: '50%' }} />
      <div style={{ width: '56px', height: '56px', background: 'var(--green)', borderRadius: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1 }}>
        <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1rem', color: 'white' }}>RP</span>
      </div>
      <div style={{ textAlign: 'center', zIndex: 1 }}>
        <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, color: 'white', fontSize: '0.9rem', marginBottom: '5px' }}>Last Mile Deliveries</div>
        <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.68rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>Maximize your Earning by<br />delivering more orders</div>
      </div>
      <div style={{ width: '100%', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '9px' }}>
        <button style={{ width: '100%', padding: '11px', background: 'var(--green)', border: 'none', borderRadius: '9px', fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: '0.8rem', color: 'white', cursor: 'pointer' }}>Log In</button>
        <button style={{ width: '100%', padding: '11px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '9px', fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: '0.8rem', color: 'white', cursor: 'pointer' }}>Create Account</button>
      </div>
      <div style={{ position: 'absolute', bottom: '16px', textAlign: 'center', zIndex: 1 }}>
        <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '0.6rem', fontWeight: 700, color: 'var(--green)', letterSpacing: '1.5px' }}>#MISSION ZERO EMISSION</div>
        <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.55rem', color: 'rgba(255,255,255,0.35)', marginTop: '3px' }}>An ISO 27001:2022 Certified Company</div>
      </div>
    </div>
  )
}

function PhoneScooterSelection() {
  const scooterOptions = [
    { name: 'NYX (A)', badge: '50 EV', type: 'Charging', rental: '₹2000-2500' },
    { name: 'NYX (A)', badge: '50 EV', type: 'Charging', rental: '₹2000-2500' },
    { name: 'NYX (A)', badge: '50 EV', type: 'Swapping', rental: '₹2000-2500' },
    { name: 'NYX (A)', badge: '50 EV', type: 'Swapping', rental: '₹2000-2500' },
  ]
  return (
    <div style={{ width: '100%', height: '100%', background: 'linear-gradient(145deg, #1a1a2e, #12122a)', borderRadius: '30px', display: 'flex', flexDirection: 'column', padding: '18px 14px', gap: '10px', overflow: 'hidden' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, color: 'white', fontSize: '0.8rem' }}>Scooter Selection</span>
        <span style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ width: '8px', height: '1px', background: 'rgba(255,255,255,0.5)', display: 'block' }} />
        </span>
      </div>
      <div style={{ display: 'flex', gap: '6px', marginBottom: '4px' }}>
        {['All Filter', 'Speed', 'Battery'].map((f, i) => (
          <button key={f} style={{ padding: '4px 8px', borderRadius: '20px', background: i === 0 ? 'var(--green)' : 'rgba(255,255,255,0.07)', border: 'none', fontFamily: 'DM Sans, sans-serif', fontSize: '0.55rem', fontWeight: 600, color: i === 0 ? 'white' : 'rgba(255,255,255,0.45)', cursor: 'pointer' }}>{f}</button>
        ))}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '7px', overflow: 'hidden' }}>
        {scooterOptions.map((s, i) => (
          <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'center', background: 'rgba(255,255,255,0.04)', borderRadius: '10px', padding: '8px 10px', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div style={{ width: '38px', height: '32px', background: 'linear-gradient(135deg, #2ECC71, #27ae60)', borderRadius: '6px', flexShrink: 0 }} />
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.65rem', fontWeight: 700, color: 'white' }}>{s.name}</span>
                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.55rem', fontWeight: 600, background: 'rgba(46,204,113,0.15)', color: 'var(--green)', padding: '1px 5px', borderRadius: '4px' }}>{s.badge}</span>
              </div>
              <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.55rem', color: 'rgba(255,255,255,0.4)', marginTop: '2px' }}>{s.type} · Speed</div>
              <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.55rem', color: 'rgba(255,255,255,0.3)', marginTop: '1px' }}>Joining Rental {s.rental}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function BatteryFilterPopup() {
  return (
    <div style={{ position: 'absolute', bottom: '80px', left: '50%', transform: 'translateX(-50%)', width: '140px', background: 'white', borderRadius: '14px', padding: '16px', boxShadow: '0 20px 60px rgba(0,0,0,0.15)', zIndex: 10 }}>
      <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.65rem', color: 'var(--dark)', marginBottom: '4px', textAlign: 'center' }}>Battery Type Filter</div>
      <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.55rem', color: 'var(--gray)', textAlign: 'center', marginBottom: '10px' }}>Select Scooter Battery Type According To Your Need!</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <button style={{ padding: '7px', background: 'var(--green)', border: 'none', borderRadius: '7px', fontFamily: 'DM Sans, sans-serif', fontSize: '0.6rem', fontWeight: 600, color: 'white', cursor: 'pointer' }}>Charging</button>
        <button style={{ padding: '7px', background: 'rgba(46,204,113,0.1)', border: '1px solid rgba(46,204,113,0.2)', borderRadius: '7px', fontFamily: 'DM Sans, sans-serif', fontSize: '0.6rem', fontWeight: 600, color: 'var(--green)', cursor: 'pointer' }}>Swapping</button>
      </div>
    </div>
  )
}

function StepItem({ step, active }) {
  return (
    <div
      className={active ? '' : 'step-inactive'}
      style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', padding: '6px 0', transition: 'all 0.3s' }}
    >
      <div
        className="step-icon"
        style={{
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          border: `2px solid ${active ? 'var(--green)' : '#d1d5db'}`,
          background: active ? 'rgba(46,204,113,0.08)' : '#f3f4f6',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          color: active ? 'var(--green)' : '#c8d0d8',
          transition: 'all 0.3s',
        }}
      >
        {step.icon}
      </div>
      <div>
        <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1rem', color: active ? 'var(--dark)' : '#b0b8bf', marginBottom: '4px', transition: 'color 0.3s' }}>
          {step.title}
        </h3>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem', color: active ? 'var(--gray)' : '#c8d0d8', lineHeight: 1.5, transition: 'color 0.3s' }}>
          {step.desc}
        </p>
      </div>
    </div>
  )
}

function HowItWorksBlock({ activeStep, phoneContent, showBatteryPopup, label }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center', maxWidth: '1280px', margin: '0 auto', width: '100%' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
        {steps.map((step, i) => (
          <div key={step.id}>
            <StepItem step={step} active={step.id === activeStep} />
            {i < steps.length - 1 && (
              <div style={{ marginLeft: '21px', width: '2px', height: '20px', background: step.id < activeStep ? 'var(--green)' : '#e5e7eb', marginTop: '4px', borderRadius: '1px', transition: 'background 0.3s' }} />
            )}
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
        <svg width="80" height="60" style={{ position: 'absolute', left: '-60px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', zIndex: 1 }}>
          <path d="M 10 30 Q 40 10 70 30" stroke="var(--green)" strokeWidth="2" fill="none" strokeDasharray="5 4" />
          <polygon points="70,25 75,32 65,33" fill="var(--green)" />
        </svg>

        <div
          style={{
            width: '240px',
            height: '480px',
            background: 'linear-gradient(170deg, #1a1a2e 0%, #16213e 100%)',
            borderRadius: '36px',
            padding: '10px',
            boxShadow: '0 30px 80px rgba(0,0,0,0.2), 0 0 0 1px rgba(255,255,255,0.08)',
            position: 'relative',
          }}
          className="phone-glow"
        >
          <div style={{ position: 'absolute', top: '16px', left: '50%', transform: 'translateX(-50%)', width: '60px', height: '6px', background: 'rgba(255,255,255,0.15)', borderRadius: '3px' }} />
          <div style={{ width: '100%', height: '100%', borderRadius: '28px', overflow: 'hidden', marginTop: '0' }}>
            {phoneContent}
          </div>
          {showBatteryPopup && <BatteryFilterPopup />}
        </div>
      </div>
    </div>
  )
}

export default function HowItWorks() {
  const [hovered, setHovered] = useState(null)

  return (
    <section style={{ background: 'var(--bg-soft)', padding: '100px 5vw' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.8rem', fontWeight: 600, color: 'var(--green)', letterSpacing: '2px', textTransform: 'uppercase' }}>Simple Process</span>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', color: 'var(--dark)', marginTop: '10px', letterSpacing: '-0.5px' }}>
            How It Works
          </h2>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '1rem', color: 'var(--gray)', marginTop: '12px', maxWidth: '420px', margin: '12px auto 0' }}>
            Three steps to get you on the road and earning within days.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
          <div
            style={{ background: 'white', borderRadius: '28px', padding: '56px 48px', boxShadow: '0 4px 32px rgba(0,0,0,0.05)', border: '1px solid #f0f0f0', transition: 'box-shadow 0.3s', cursor: 'default' }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 12px 48px rgba(46,204,113,0.1)'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = '0 4px 32px rgba(0,0,0,0.05)'}
          >
            <HowItWorksBlock
              activeStep={1}
              phoneContent={<PhoneLogin />}
              showBatteryPopup={false}
            />
          </div>

          <div
            style={{ background: 'white', borderRadius: '28px', padding: '56px 48px', boxShadow: '0 4px 32px rgba(0,0,0,0.05)', border: '1px solid #f0f0f0', transition: 'box-shadow 0.3s', cursor: 'default' }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 12px 48px rgba(46,204,113,0.1)'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = '0 4px 32px rgba(0,0,0,0.05)'}
          >
            <HowItWorksBlock
              activeStep={2}
              phoneContent={<PhoneScooterSelection />}
              showBatteryPopup={true}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

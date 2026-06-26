import { CheckCircle, Bike, DollarSign } from 'lucide-react'

const steps = [
  { id: 1, icon: <CheckCircle size={20} />, title: 'Complete Your KYC', desc: 'Add your personal details like Aadhaar, PAN, and Bank details!' },
  { id: 2, icon: <Bike size={20} />, title: 'Choose Your Scooter', desc: 'Select your scooter like swappable battery scooter' },
  { id: 3, icon: <DollarSign size={20} />, title: 'Start Earning', desc: 'Activate your client ID and begin deliveries to earn more!' },
]

function StepList({ activeStep }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {steps.map((step, i) => {
        const active = step.id === activeStep
        return (
          <div key={step.id}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '50%', border: `2px solid ${active ? '#2ECC71' : '#d1d5db'}`, background: active ? 'rgba(46,204,113,0.08)' : '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: active ? '#2ECC71' : '#c8d0d8', transition: 'all 0.3s' }}>
                {step.icon}
              </div>
              <div>
                <h3 style={{ fontFamily: 'Syne,sans-serif', fontWeight: 700, fontSize: '0.98rem', color: active ? '#111' : '#b0b8bf', marginBottom: '4px', transition: 'color 0.3s' }}>{step.title}</h3>
                <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.83rem', color: active ? '#6b7280' : '#c8d0d8', lineHeight: 1.5, transition: 'color 0.3s' }}>{step.desc}</p>
              </div>
            </div>
            {i < steps.length - 1 && (
              <div style={{ marginLeft: '20px', width: '2px', height: '16px', background: step.id < activeStep ? '#2ECC71' : '#e5e7eb', marginTop: '4px', borderRadius: '1px' }} />
            )}
          </div>
        )
      })}
    </div>
  )
}

function PhoneLogin() {
  return (
    <div style={{ width: '100%', height: '100%', background: 'linear-gradient(145deg,#1a3c2e,#0d2618)', borderRadius: '28px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '16px', padding: '24px 18px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, right: 0, width: '60%', height: '60%', background: 'radial-gradient(circle,rgba(46,204,113,0.12) 0%,transparent 70%)', borderRadius: '50%' }} />
      <div style={{ width: '52px', height: '52px', background: '#2ECC71', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1 }}>
        <span style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: '0.9rem', color: 'white' }}>RP</span>
      </div>
      <div style={{ textAlign: 'center', zIndex: 1 }}>
        <div style={{ fontFamily: 'Syne,sans-serif', fontWeight: 700, color: 'white', fontSize: '0.82rem', marginBottom: '4px' }}>Last Mile Deliveries</div>
        <div style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.65rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.4 }}>Maximize your Earning by delivering more orders</div>
      </div>
      <div style={{ width: '100%', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <button style={{ width: '100%', padding: '10px', background: '#2ECC71', border: 'none', borderRadius: '8px', fontFamily: 'DM Sans,sans-serif', fontWeight: 600, fontSize: '0.78rem', color: 'white', cursor: 'pointer' }}>Log In</button>
        <button style={{ width: '100%', padding: '10px', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '8px', fontFamily: 'DM Sans,sans-serif', fontWeight: 600, fontSize: '0.78rem', color: 'white', cursor: 'pointer' }}>Create Account</button>
      </div>
      <div style={{ position: 'absolute', bottom: '12px', textAlign: 'center', zIndex: 1 }}>
        <div style={{ fontFamily: 'Syne,sans-serif', fontSize: '0.55rem', fontWeight: 700, color: '#2ECC71', letterSpacing: '1.5px' }}>#MISSION ZERO EMISSION</div>
        <div style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.5rem', color: 'rgba(255,255,255,0.3)', marginTop: '2px' }}>An ISO 27001:2022 Certified Company</div>
      </div>
    </div>
  )
}

function PhoneScooter() {
  const list = [
    { name: 'NYX (A)', type: 'Charging', rental: '₹2000-2500' },
    { name: 'NYX (A)', type: 'Charging', rental: '₹2000-2500' },
    { name: 'NYX (A)', type: 'Swapping', rental: '₹2000-2500' },
    { name: 'NYX (A)', type: 'Swapping', rental: '₹2000-2500' },
  ]
  return (
    <div style={{ width: '100%', height: '100%', background: 'linear-gradient(145deg,#1a1a2e,#12122a)', borderRadius: '28px', display: 'flex', flexDirection: 'column', padding: '16px 12px', gap: '8px', overflow: 'hidden' }}>
      <div style={{ fontFamily: 'Syne,sans-serif', fontWeight: 700, color: 'white', fontSize: '0.75rem' }}>Scooter Selection</div>
      <div style={{ display: 'flex', gap: '5px', marginBottom: '2px' }}>
        {['All Filter', 'Speed', 'Battery'].map((f, i) => (
          <button key={f} style={{ padding: '3px 7px', borderRadius: '20px', background: i === 0 ? '#2ECC71' : 'rgba(255,255,255,0.07)', border: 'none', fontFamily: 'DM Sans,sans-serif', fontSize: '0.5rem', fontWeight: 600, color: i === 0 ? 'white' : 'rgba(255,255,255,0.4)', cursor: 'pointer' }}>{f}</button>
        ))}
      </div>
      {list.map((s, i) => (
        <div key={i} style={{ display: 'flex', gap: '7px', alignItems: 'center', background: 'rgba(255,255,255,0.04)', borderRadius: '8px', padding: '7px 8px', border: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ width: '34px', height: '28px', background: 'linear-gradient(135deg,#2ECC71,#27ae60)', borderRadius: '5px', flexShrink: 0 }} />
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.6rem', fontWeight: 700, color: 'white' }}>{s.name}</span>
              <span style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.5rem', fontWeight: 600, background: 'rgba(46,204,113,0.15)', color: '#2ECC71', padding: '1px 4px', borderRadius: '3px' }}>50 EV</span>
            </div>
            <div style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.5rem', color: 'rgba(255,255,255,0.38)', marginTop: '1px' }}>{s.type} · Speed</div>
            <div style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.48rem', color: 'rgba(255,255,255,0.28)', marginTop: '1px' }}>Joining Rental {s.rental}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

function BatteryPopup() {
  return (
    <div style={{ position: 'absolute', bottom: '70px', left: '50%', transform: 'translateX(-50%)', width: '130px', background: 'white', borderRadius: '12px', padding: '14px', boxShadow: '0 16px 48px rgba(0,0,0,0.14)', zIndex: 10 }}>
      <div style={{ fontFamily: 'Syne,sans-serif', fontWeight: 700, fontSize: '0.6rem', color: '#111', marginBottom: '3px', textAlign: 'center' }}>Battery Type Filter</div>
      <div style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.52rem', color: '#6b7280', textAlign: 'center', marginBottom: '9px' }}>Select Scooter Battery Type According To Your Need!</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
        <button style={{ padding: '6px', background: '#2ECC71', border: 'none', borderRadius: '6px', fontFamily: 'DM Sans,sans-serif', fontSize: '0.56rem', fontWeight: 600, color: 'white', cursor: 'pointer' }}>Charging</button>
        <button style={{ padding: '6px', background: 'rgba(46,204,113,0.08)', border: '1px solid rgba(46,204,113,0.2)', borderRadius: '6px', fontFamily: 'DM Sans,sans-serif', fontSize: '0.56rem', fontWeight: 600, color: '#2ECC71', cursor: 'pointer' }}>Swapping</button>
      </div>
    </div>
  )
}

function Block({ activeStep, phoneContent, showPopup }) {
  return (
    <div style={{ background: 'white', borderRadius: '24px', padding: 'clamp(24px,4vw,52px)', boxShadow: '0 4px 32px rgba(0,0,0,0.05)', border: '1px solid #f0f0f0', transition: 'box-shadow 0.3s' }}
      onMouseEnter={e => e.currentTarget.style.boxShadow = '0 12px 48px rgba(46,204,113,0.1)'}
      onMouseLeave={e => e.currentTarget.style.boxShadow = '0 4px 32px rgba(0,0,0,0.05)'}>
      <style>{`.hiw-block-grid{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center}@media(max-width:767px){.hiw-block-grid{grid-template-columns:1fr !important;gap:28px !important}.hiw-phone-col{display:none !important}}`}</style>
      <div className="hiw-block-grid">
        <StepList activeStep={activeStep} />
        <div className="hiw-phone-col" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
          <svg width="70" height="50" style={{ position: 'absolute', left: '-52px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
            <path d="M 8 25 Q 35 8 62 25" stroke="#2ECC71" strokeWidth="1.8" fill="none" strokeDasharray="5 4" />
            <polygon points="62,20 67,27 57,28" fill="#2ECC71" />
          </svg>
          <div style={{ width: '210px', height: '420px', background: 'linear-gradient(170deg,#1a1a2e,#16213e)', borderRadius: '32px', padding: '9px', boxShadow: '0 24px 64px rgba(0,0,0,0.18), 0 0 0 1px rgba(255,255,255,0.07)', position: 'relative', filter: 'drop-shadow(0 16px 48px rgba(46,204,113,0.25))' }}>
            <div style={{ width: '100%', height: '100%', borderRadius: '25px', overflow: 'hidden' }}>{phoneContent}</div>
            {showPopup && <BatteryPopup />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function HowItWorks() {
  return (
    <section style={{ background: '#f8fffe', padding: 'clamp(60px,8vw,100px) 5vw' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.78rem', fontWeight: 600, color: '#2ECC71', letterSpacing: '2px', textTransform: 'uppercase' }}>Simple Process</span>
          <h2 style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: 'clamp(1.7rem,3.5vw,2.8rem)', color: '#111', marginTop: '10px', letterSpacing: '-0.5px' }}>How It Works</h2>
          <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.95rem', color: '#6b7280', marginTop: '10px', maxWidth: '380px', margin: '10px auto 0' }}>Three steps to get you on the road and earning within days.</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          <Block activeStep={1} phoneContent={<PhoneLogin />} showPopup={false} />
          <Block activeStep={2} phoneContent={<PhoneScooter />} showPopup={true} />
        </div>
      </div>
    </section>
  )
}

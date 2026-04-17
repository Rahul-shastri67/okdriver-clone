import { Shield, Battery, MapPin, Headphones, BarChart2, Clock } from 'lucide-react'

const features = [
  { icon: <Battery size={24} />, title: 'Zero Fuel Cost', desc: 'Ride on electricity. Save thousands every month on fuel.' },
  { icon: <BarChart2 size={24} />, title: 'Live Earnings Dashboard', desc: 'Track every rupee you earn in real-time from the app.' },
  { icon: <MapPin size={24} />, title: 'Optimized Routes', desc: 'Smart routing to complete more deliveries per hour.' },
  { icon: <Shield size={24} />, title: 'Full Insurance Cover', desc: "Ride with peace of mind. We've got you covered." },
  { icon: <Headphones size={24} />, title: '24/7 Support', desc: 'Our team is always ready to help you on the road.' },
  { icon: <Clock size={24} />, title: 'Flexible Hours', desc: 'Choose your own schedule. Morning, evening, or both.' },
]

export default function Features() {
  return (
    <section style={{ background: 'white', padding: '100px 5vw' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.8rem', fontWeight: 600, color: 'var(--green)', letterSpacing: '2px', textTransform: 'uppercase' }}>Why RiderPulse</span>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', color: 'var(--dark)', marginTop: '10px', letterSpacing: '-0.5px' }}>
            Built for Riders, by Riders
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          {features.map((f, i) => (
            <div
              key={i}
              style={{
                padding: '32px 28px',
                borderRadius: '20px',
                border: '1.5px solid #f0f0f0',
                background: 'white',
                transition: 'all 0.3s',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--green)'
                e.currentTarget.style.background = 'rgba(46,204,113,0.02)'
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 16px 40px rgba(46,204,113,0.12)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '#f0f0f0'
                e.currentTarget.style.background = 'white'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(46,204,113,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--green)', marginBottom: '18px' }}>
                {f.icon}
              </div>
              <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.05rem', color: 'var(--dark)', marginBottom: '8px' }}>{f.title}</h3>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.875rem', color: 'var(--gray)', lineHeight: 1.6 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

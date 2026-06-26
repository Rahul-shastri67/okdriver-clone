import { Shield, Battery, MapPin, Headphones, BarChart2, Clock } from 'lucide-react'

const features = [
  { icon: <Battery size={22} />, title: 'Zero Fuel Cost', desc: 'Ride on electricity. Save thousands every month on fuel.' },
  { icon: <BarChart2 size={22} />, title: 'Live Earnings Dashboard', desc: 'Track every rupee you earn in real-time from the app.' },
  { icon: <MapPin size={22} />, title: 'Optimized Routes', desc: 'Smart routing to complete more deliveries per hour.' },
  { icon: <Shield size={22} />, title: 'Full Insurance Cover', desc: "Ride with peace of mind. We've got you covered." },
  { icon: <Headphones size={22} />, title: '24/7 Support', desc: 'Our team is always ready to help you on the road.' },
  { icon: <Clock size={22} />, title: 'Flexible Hours', desc: 'Choose your own schedule. Morning, evening, or both.' },
]

export default function Features() {
  return (
    <section style={{ background: 'white', padding: 'clamp(60px,8vw,100px) 5vw' }}>
      <style>{`.feat-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}@media(max-width:767px){.feat-grid{grid-template-columns:1fr !important}}@media(min-width:768px) and (max-width:1023px){.feat-grid{grid-template-columns:repeat(2,1fr) !important}}`}</style>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '52px' }}>
          <span style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.78rem', fontWeight: 600, color: '#2ECC71', letterSpacing: '2px', textTransform: 'uppercase' }}>Why RiderPulse</span>
          <h2 style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: 'clamp(1.7rem,3.5vw,2.8rem)', color: '#111', marginTop: '10px', letterSpacing: '-0.5px' }}>Built for Riders, by Riders</h2>
        </div>
        <div className="feat-grid">
          {features.map((f, i) => (
            <div key={i}
              style={{ padding: '28px 24px', borderRadius: '18px', border: '1.5px solid #f0f0f0', background: 'white', transition: 'all 0.3s', cursor: 'default' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#2ECC71'; e.currentTarget.style.background = 'rgba(46,204,113,0.02)'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(46,204,113,0.12)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#f0f0f0'; e.currentTarget.style.background = 'white'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(46,204,113,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2ECC71', marginBottom: '16px' }}>{f.icon}</div>
              <h3 style={{ fontFamily: 'Syne,sans-serif', fontWeight: 700, fontSize: '1rem', color: '#111', marginBottom: '7px' }}>{f.title}</h3>
              <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.85rem', color: '#6b7280', lineHeight: 1.6 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Stats() {
  const stats = [
    { value: '50,000+', label: 'Registered Riders' },
    { value: '₹35,000', label: 'Avg Monthly Earning' },
    { value: '200+', label: 'Cities Covered' },
    { value: '99.8%', label: 'On-Time Delivery' },
  ]

  return (
    <section style={{ background: '#111111', padding: '52px 5vw' }}>
      <style>{`
        .stats-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 14px; max-width: 1280px; margin: 0 auto; }
        @media (max-width: 767px) { .stats-grid { grid-template-columns: repeat(2,1fr) !important; } }
      `}</style>
      <div className="stats-grid">
        {stats.map((s, i) => (
          <div key={i}
            style={{ textAlign: 'center', padding: '28px 16px', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px', background: 'rgba(255,255,255,0.02)', transition: 'border-color 0.2s, background 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(46,204,113,0.3)'; e.currentTarget.style.background = 'rgba(46,204,113,0.04)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)' }}>
            <div style={{ fontFamily: 'Syne,sans-serif', fontSize: 'clamp(1.4rem,3vw,2rem)', fontWeight: 800, color: '#2ECC71', marginBottom: '6px' }}>{s.value}</div>
            <div style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.82rem', color: 'rgba(255,255,255,0.4)' }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

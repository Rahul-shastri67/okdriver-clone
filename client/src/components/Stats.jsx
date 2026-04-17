export default function Stats() {
  const stats = [
    { value: '50,000+', label: 'Registered Riders' },
    { value: '₹35,000', label: 'Avg Monthly Earning' },
    { value: '200+', label: 'Cities Covered' },
    { value: '99.8%', label: 'On-Time Delivery' },
  ]

  return (
    <section style={{ background: 'var(--dark)', padding: '60px 5vw' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
        {stats.map((s, i) => (
          <div
            key={i}
            style={{
              textAlign: 'center',
              padding: '32px 20px',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: '16px',
              background: 'rgba(255,255,255,0.02)',
              transition: 'border-color 0.2s, background 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(46,204,113,0.3)'; e.currentTarget.style.background = 'rgba(46,204,113,0.04)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)' }}
          >
            <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '2rem', fontWeight: 800, color: 'var(--green)', marginBottom: '8px' }}>{s.value}</div>
            <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem', color: 'rgba(255,255,255,0.45)', fontWeight: 400 }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

import { Zap, Instagram, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--dark)', padding: '60px 5vw 32px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '48px', paddingBottom: '48px', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <div style={{ width: '32px', height: '32px', background: 'var(--green)', borderRadius: '9px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Zap size={16} color="white" fill="white" />
              </div>
              <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.1rem', color: 'white' }}>
                Rider<span style={{ color: 'var(--green)' }}>Pulse</span>
              </span>
            </div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, maxWidth: '260px' }}>
              Empowering India's last-mile delivery riders with clean, green, and profitable EV solutions.
            </p>
            <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
              {[<Instagram size={16} />, <Twitter size={16} />, <Linkedin size={16} />].map((icon, i) => (
                <a key={i} href="#" style={{ width: '34px', height: '34px', background: 'rgba(255,255,255,0.07)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.4)', textDecoration: 'none', transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'var(--green)'; e.currentTarget.style.color = 'white' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.color = 'rgba(255,255,255,0.4)' }}>
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {[
            { heading: 'Company', links: ['About Us', 'Careers', 'Blog', 'Press'] },
            { heading: 'Riders', links: ['How It Works', 'Earnings', 'Scooters', 'App Download'] },
            { heading: 'Legal', links: ['Privacy Policy', 'Terms of Service', 'KYC Policy', 'Contact'] },
          ].map(col => (
            <div key={col.heading}>
              <h4 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.85rem', color: 'white', marginBottom: '16px', letterSpacing: '0.5px' }}>{col.heading}</h4>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {col.links.map(link => (
                  <li key={link}>
                    <a href="#" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem', color: 'rgba(255,255,255,0.38)', textDecoration: 'none', transition: 'color 0.2s' }}
                      onMouseEnter={e => e.target.style.color = 'var(--green)'}
                      onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.38)'}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.78rem', color: 'rgba(255,255,255,0.25)' }}>
            © 2024 RiderPulse. All rights reserved.
          </span>
          <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.75rem', color: 'rgba(255,255,255,0.2)', letterSpacing: '1px' }}>
            AN ISO 27001:2022 CERTIFIED COMPANY
          </span>
        </div>
      </div>
    </footer>
  )
}

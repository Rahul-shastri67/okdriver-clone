import { Zap, Instagram, Twitter, Linkedin, Mail, Phone } from 'lucide-react'

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const footerColumns = [
  {
    heading: 'Company',
    links: [
      { label: 'About Us', action: () => scrollTo('home') },
      { label: 'Careers', href: 'https://okdriver.in', external: true },
      { label: 'Blog', href: 'https://okdriver.in', external: true },
      { label: 'Press', href: 'https://okdriver.in', external: true },
    ],
  },
  {
    heading: 'Riders',
    links: [
      { label: 'How It Works', action: () => scrollTo('how-it-works') },
      { label: 'Features', action: () => scrollTo('features') },
      { label: 'Scooters', action: () => scrollTo('how-it-works') },
      { label: 'Download App', href: 'https://play.google.com/store/apps/details?id=app.dash.okDriver', external: true },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy Policy', href: 'https://okdriver.in', external: true },
      { label: 'Terms of Service', href: 'https://okdriver.in', external: true },
      { label: 'KYC Policy', href: 'https://okdriver.in', external: true },
      { label: 'Contact Us', href: 'mailto:support@riderpulse.in', external: true },
    ],
  },
]

const socials = [
  { icon: <Instagram size={15} />, href: 'https://instagram.com' },
  { icon: <Twitter size={15} />, href: 'https://twitter.com' },
  { icon: <Linkedin size={15} />, href: 'https://linkedin.com' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#111111', padding: 'clamp(48px,6vw,64px) 5vw 28px' }}>
      <style>{`.footer-grid{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:40px}.footer-cols{display:grid;grid-template-columns:repeat(3,1fr);gap:32px}@media(max-width:767px){.footer-grid{grid-template-columns:1fr !important;gap:36px !important}.footer-cols{grid-template-columns:1fr !important;gap:28px !important}}`}</style>

      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div className="footer-grid" style={{ paddingBottom: '40px', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>

          <div>
            <button onClick={() => scrollTo('home')} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
              <div style={{ width: '30px', height: '30px', background: '#2ECC71', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Zap size={14} color="white" fill="white" />
              </div>
              <span style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: '1.05rem', color: 'white' }}>
                Rider<span style={{ color: '#2ECC71' }}>Pulse</span>
              </span>
            </button>

            <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.83rem', color: 'rgba(255,255,255,0.35)', lineHeight: 1.65, maxWidth: '230px', marginBottom: '18px' }}>
              Empowering India's last-mile delivery riders with clean, green EV solutions.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '7px', marginBottom: '18px' }}>
              <a href="mailto:support@riderpulse.in"
                style={{ display: 'flex', alignItems: 'center', gap: '7px', fontFamily: 'DM Sans,sans-serif', fontSize: '0.78rem', color: 'rgba(255,255,255,0.32)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#2ECC71'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.32)'}>
                <Mail size={12} /> support@riderpulse.in
              </a>
              <a href="tel:+911800000000"
                style={{ display: 'flex', alignItems: 'center', gap: '7px', fontFamily: 'DM Sans,sans-serif', fontSize: '0.78rem', color: 'rgba(255,255,255,0.32)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#2ECC71'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.32)'}>
                <Phone size={12} /> 1800-000-0000 (Toll Free)
              </a>
            </div>

            <div style={{ display: 'flex', gap: '9px' }}>
              {socials.map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                  style={{ width: '32px', height: '32px', background: 'rgba(255,255,255,0.07)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.38)', textDecoration: 'none', transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#2ECC71'; e.currentTarget.style.color = 'white' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.color = 'rgba(255,255,255,0.38)' }}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-cols" style={{ gridColumn: 'span 3' }}>
            {footerColumns.map(col => (
              <div key={col.heading}>
                <h4 style={{ fontFamily: 'Syne,sans-serif', fontWeight: 700, fontSize: '0.82rem', color: 'white', marginBottom: '16px', letterSpacing: '0.4px' }}>{col.heading}</h4>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {col.links.map(link => (
                    <li key={link.label}>
                      {link.action ? (
                        <button onClick={link.action}
                          style={{ background: 'none', border: 'none', padding: 0, fontFamily: 'DM Sans,sans-serif', fontSize: '0.83rem', color: 'rgba(255,255,255,0.35)', cursor: 'pointer', transition: 'color 0.2s', textAlign: 'left' }}
                          onMouseEnter={e => e.currentTarget.style.color = '#2ECC71'}
                          onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.35)'}>
                          {link.label}
                        </button>
                      ) : (
                        <a href={link.href} target={link.external ? '_blank' : undefined} rel={link.external ? 'noopener noreferrer' : undefined}
                          style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.83rem', color: 'rgba(255,255,255,0.35)', textDecoration: 'none', transition: 'color 0.2s' }}
                          onMouseEnter={e => e.currentTarget.style.color = '#2ECC71'}
                          onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.35)'}>
                          {link.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div style={{ paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
          <span style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.76rem', color: 'rgba(255,255,255,0.2)' }}>
            © {new Date().getFullYear()} RiderPulse. All rights reserved.
          </span>
          <span style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.7rem', color: 'rgba(255,255,255,0.16)', letterSpacing: '0.8px' }}>
            ISO 27001:2022 · #MISSION ZERO EMISSION
          </span>
        </div>
      </div>
    </footer>
  )
}

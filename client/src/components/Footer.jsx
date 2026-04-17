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
  { icon: <Instagram size={16} />, href: 'https://instagram.com' },
  { icon: <Twitter size={16} />, href: 'https://twitter.com' },
  { icon: <Linkedin size={16} />, href: 'https://linkedin.com' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#111111', padding: '64px 5vw 32px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '48px', paddingBottom: '48px', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>

          <div>
            <button
              onClick={() => scrollTo('home')}
              style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            >
              <div style={{ width: '32px', height: '32px', background: '#2ECC71', borderRadius: '9px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Zap size={16} color="white" fill="white" />
              </div>
              <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.1rem', color: 'white' }}>
                Rider<span style={{ color: '#2ECC71' }}>Pulse</span>
              </span>
            </button>

            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem', color: 'rgba(255,255,255,0.38)', lineHeight: 1.7, maxWidth: '240px', marginBottom: '20px' }}>
              Empowering India's last-mile delivery riders with clean, green, and profitable EV solutions.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
              <a href="mailto:support@riderpulse.in" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'DM Sans, sans-serif', fontSize: '0.8rem', color: 'rgba(255,255,255,0.35)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#2ECC71'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.35)'}>
                <Mail size={13} /> support@riderpulse.in
              </a>
              <a href="tel:+911800000000" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'DM Sans, sans-serif', fontSize: '0.8rem', color: 'rgba(255,255,255,0.35)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#2ECC71'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.35)'}>
                <Phone size={13} /> 1800-000-0000 (Toll Free)
              </a>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              {socials.map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                  style={{ width: '34px', height: '34px', background: 'rgba(255,255,255,0.07)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.4)', textDecoration: 'none', transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#2ECC71'; e.currentTarget.style.color = 'white' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.color = 'rgba(255,255,255,0.4)' }}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {footerColumns.map(col => (
            <div key={col.heading}>
              <h4 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.85rem', color: 'white', marginBottom: '18px', letterSpacing: '0.5px' }}>
                {col.heading}
              </h4>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '11px' }}>
                {col.links.map(link => (
                  <li key={link.label}>
                    {link.action ? (
                      <button
                        onClick={link.action}
                        style={{ background: 'none', border: 'none', padding: 0, fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem', color: 'rgba(255,255,255,0.38)', cursor: 'pointer', transition: 'color 0.2s', textAlign: 'left' }}
                        onMouseEnter={e => e.currentTarget.style.color = '#2ECC71'}
                        onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.38)'}
                      >
                        {link.label}
                      </button>
                    ) : (
                      <a
                        href={link.href}
                        target={link.external ? '_blank' : undefined}
                        rel={link.external ? 'noopener noreferrer' : undefined}
                        style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem', color: 'rgba(255,255,255,0.38)', textDecoration: 'none', transition: 'color 0.2s' }}
                        onMouseEnter={e => e.currentTarget.style.color = '#2ECC71'}
                        onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.38)'}
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.78rem', color: 'rgba(255,255,255,0.22)' }}>
            © {new Date().getFullYear()} RiderPulse. All rights reserved.
          </span>
          <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.72rem', color: 'rgba(255,255,255,0.18)', letterSpacing: '1px' }}>
            AN ISO 27001:2022 CERTIFIED COMPANY · #MISSION ZERO EMISSION
          </span>
        </div>
      </div>
    </footer>
  )
}


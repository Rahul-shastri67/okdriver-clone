import { useState } from 'react'
import { ArrowRight, Star, Users, TrendingUp } from 'lucide-react'
import AuthModal from './AuthModal'

export default function Hero() {
  const [modal, setModal] = useState({ open: false, mode: 'register' })

  return (
    <>
      <style>{`
        .hero-section { min-height: 100vh; background: linear-gradient(135deg,#f0fdf8 0%,#fff 50%,#e8faf2 100%); display:flex; align-items:center; padding: 100px 5vw 60px; position:relative; overflow:hidden; }
        .hero-grid { max-width:1280px; margin:0 auto; width:100%; display:grid; grid-template-columns:1fr 1fr; gap:80px; align-items:center; }
        .hero-phone-col { display:flex; justify-content:center; align-items:center; position:relative; }
        @media (max-width:767px) {
          .hero-section { padding: 88px 20px 48px !important; }
          .hero-grid { grid-template-columns:1fr !important; gap:36px !important; text-align:center; }
          .hero-phone-col { display:none !important; }
          .hero-badge { margin: 0 auto 18px !important; }
          .hero-desc { margin: 0 auto 28px !important; max-width:100% !important; }
          .hero-btns { justify-content:center !important; }
          .hero-stats { justify-content:center !important; }
        }
        @media (min-width:768px) and (max-width:1023px) {
          .hero-grid { gap:40px !important; }
          .hero-section { padding:96px 5vw 56px !important; }
        }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
      `}</style>

      <section className="hero-section">
        <div style={{ position:'absolute', top:'-80px', right:'-80px', width:'500px', height:'500px', background:'radial-gradient(circle,rgba(46,204,113,0.12) 0%,transparent 70%)', borderRadius:'50%', pointerEvents:'none' }} />

        <div className="hero-grid">
          <div>
            <div className="hero-badge" style={{ display:'inline-flex', alignItems:'center', gap:'8px', background:'rgba(46,204,113,0.1)', border:'1px solid rgba(46,204,113,0.25)', borderRadius:'50px', padding:'6px 16px', marginBottom:'22px' }}>
              <span style={{ width:'6px', height:'6px', background:'#2ECC71', borderRadius:'50%' }} />
              <span style={{ fontSize:'0.78rem', fontWeight:600, color:'#2ECC71', fontFamily:'DM Sans,sans-serif', letterSpacing:'0.5px' }}>#MISSION ZERO EMISSION</span>
            </div>

            <h1 style={{ fontFamily:'Syne,sans-serif', fontSize:'clamp(2rem,5vw,3.8rem)', fontWeight:800, lineHeight:1.1, color:'#111', marginBottom:'18px', letterSpacing:'-1px' }}>
              Last Mile<br /><span style={{ color:'#2ECC71' }}>Deliveries</span><br />That Pay More
            </h1>

            <p className="hero-desc" style={{ fontSize:'1rem', color:'#6b7280', lineHeight:1.7, marginBottom:'32px', fontFamily:'DM Sans,sans-serif', maxWidth:'420px' }}>
              Maximize your earning by delivering more orders on EV scooters. Join India's fastest-growing green delivery network.
            </p>

            <div className="hero-btns" style={{ display:'flex', gap:'12px', flexWrap:'wrap' }}>
              <button onClick={() => setModal({ open:true, mode:'register' })}
                style={{ display:'inline-flex', alignItems:'center', gap:'8px', background:'#2ECC71', color:'white', border:'none', padding:'14px 28px', borderRadius:'50px', cursor:'pointer', fontFamily:'DM Sans,sans-serif', fontWeight:700, fontSize:'0.95rem', boxShadow:'0 8px 28px rgba(46,204,113,0.35)', transition:'all 0.25s' }}
                onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 12px 36px rgba(46,204,113,0.45)' }}
                onMouseLeave={e=>{ e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 8px 28px rgba(46,204,113,0.35)' }}>
                Create Account <ArrowRight size={16} />
              </button>
              <button onClick={() => setModal({ open:true, mode:'login' })}
                style={{ display:'inline-flex', alignItems:'center', gap:'8px', background:'white', color:'#111', border:'1.5px solid #e5e7eb', padding:'14px 28px', borderRadius:'50px', cursor:'pointer', fontFamily:'DM Sans,sans-serif', fontWeight:600, fontSize:'0.95rem', transition:'all 0.25s' }}
                onMouseEnter={e=>{ e.currentTarget.style.borderColor='#2ECC71'; e.currentTarget.style.color='#2ECC71' }}
                onMouseLeave={e=>{ e.currentTarget.style.borderColor='#e5e7eb'; e.currentTarget.style.color='#111' }}>
                Log In
              </button>
            </div>

            <div className="hero-stats" style={{ display:'flex', gap:'28px', marginTop:'40px', paddingTop:'28px', borderTop:'1px solid #f0f0f0', flexWrap:'wrap' }}>
              {[
                { icon:<Users size={15}/>, value:'50K+', label:'Active Riders' },
                { icon:<TrendingUp size={15}/>, value:'₹35K', label:'Avg Monthly' },
                { icon:<Star size={15} fill="currentColor"/>, value:'4.9★', label:'App Rating' },
              ].map(s => (
                <div key={s.label}>
                  <div style={{ fontFamily:'Syne,sans-serif', fontSize:'1.2rem', fontWeight:700, color:'#111', display:'flex', alignItems:'center', gap:'5px' }}>
                    <span style={{ color:'#2ECC71' }}>{s.icon}</span> {s.value}
                  </div>
                  <div style={{ fontSize:'0.74rem', color:'#9ca3af', fontFamily:'DM Sans,sans-serif' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-phone-col">
            <div style={{ width:'260px', height:'520px', background:'linear-gradient(170deg,#1a1a2e 0%,#16213e 100%)', borderRadius:'40px', padding:'10px', boxShadow:'0 40px 100px rgba(0,0,0,0.25)', animation:'float 4s ease-in-out infinite' }}>
              <div style={{ width:'100%', height:'100%', background:'linear-gradient(145deg,#1a3c2e,#0d2618)', borderRadius:'32px', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:'18px', padding:'28px 20px', overflow:'hidden', position:'relative' }}>
                <div style={{ position:'absolute', top:0, left:0, right:0, bottom:0, background:'radial-gradient(circle at 70% 30%,rgba(46,204,113,0.15) 0%,transparent 60%)' }} />
                <div style={{ width:'58px', height:'58px', background:'#2ECC71', borderRadius:'18px', display:'flex', alignItems:'center', justifyContent:'center', zIndex:1 }}>
                  <span style={{ fontFamily:'Syne,sans-serif', fontWeight:800, fontSize:'1rem', color:'white' }}>RP</span>
                </div>
                <div style={{ textAlign:'center', zIndex:1 }}>
                  <div style={{ fontFamily:'Syne,sans-serif', fontWeight:700, color:'white', fontSize:'0.9rem', marginBottom:'5px' }}>Last Mile Deliveries</div>
                  <div style={{ fontFamily:'DM Sans,sans-serif', fontSize:'0.7rem', color:'rgba(255,255,255,0.5)', lineHeight:1.5 }}>Maximize your Earning by delivering more orders</div>
                </div>
                <div style={{ display:'flex', flexDirection:'column', gap:'9px', width:'100%', zIndex:1 }}>
                  <button style={{ width:'100%', padding:'11px', background:'#2ECC71', border:'none', borderRadius:'9px', fontFamily:'DM Sans,sans-serif', fontWeight:600, fontSize:'0.82rem', color:'white', cursor:'pointer' }}>Log In</button>
                  <button style={{ width:'100%', padding:'11px', background:'rgba(255,255,255,0.08)', border:'1px solid rgba(255,255,255,0.14)', borderRadius:'9px', fontFamily:'DM Sans,sans-serif', fontWeight:600, fontSize:'0.82rem', color:'white', cursor:'pointer' }}>Create Account</button>
                </div>
                <div style={{ position:'absolute', bottom:'14px', textAlign:'center', zIndex:1 }}>
                  <div style={{ fontFamily:'Syne,sans-serif', fontSize:'0.58rem', fontWeight:700, color:'#2ECC71', letterSpacing:'1.5px' }}>#MISSION ZERO EMISSION</div>
                  <div style={{ fontFamily:'DM Sans,sans-serif', fontSize:'0.52rem', color:'rgba(255,255,255,0.32)', marginTop:'3px' }}>An ISO 27001:2022 Certified Company</div>
                </div>
              </div>
            </div>

            <div style={{ position:'absolute', right:'-10px', top:'40px', width:'108px', height:'218px', background:'linear-gradient(170deg,#0f2d1f,#0a1f15)', borderRadius:'24px', padding:'7px', boxShadow:'0 20px 60px rgba(0,0,0,0.2)', opacity:0.85 }}>
              <div style={{ width:'100%', height:'100%', background:'linear-gradient(145deg,#1a3c2e,#0d2618)', borderRadius:'18px', display:'flex', flexDirection:'column', padding:'10px', gap:'6px' }}>
                <div style={{ fontFamily:'DM Sans,sans-serif', fontSize:'0.48rem', fontWeight:600, color:'rgba(255,255,255,0.5)', marginBottom:'2px' }}>Scooter Selection</div>
                {[1,2,3].map(i=>(
                  <div key={i} style={{ display:'flex', gap:'5px', alignItems:'center', background:'rgba(255,255,255,0.05)', borderRadius:'7px', padding:'5px' }}>
                    <div style={{ width:'22px', height:'17px', background:'rgba(46,204,113,0.3)', borderRadius:'4px', flexShrink:0 }} />
                    <div>
                      <div style={{ fontFamily:'DM Sans,sans-serif', fontSize:'0.44rem', color:'white', fontWeight:600 }}>NYX (A)</div>
                      <div style={{ fontFamily:'DM Sans,sans-serif', fontSize:'0.38rem', color:'#2ECC71' }}>50 EV · Charging</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <AuthModal isOpen={modal.open} onClose={()=>setModal(m=>({...m,open:false}))} defaultMode={modal.mode} />
    </>
  )
}

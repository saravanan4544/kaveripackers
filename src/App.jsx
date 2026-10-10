import { useState } from 'react'
import './App.css'
import './spacing.css'

const phone = '919384254680'
const navItems = [['Home', 'home'], ['Services', 'services'], ['About', 'about'], ['Contact', 'contact']]
const services = [
  ['01', 'Home relocation', 'End-to-end support for apartments, villas and family homes.'],
  ['02', 'Office moving', 'A more organised way to relocate your workspace and equipment.'],
  ['03', 'Packing services', 'Practical packing assistance for everyday items and fragile belongings.'],
  ['04', 'Loading & delivery', 'Coordinated handling from collection point to your new doorstep.'],
  ['05', 'Furniture handling', 'Extra care for larger furniture and delicate pieces.'],
  ['06', 'Intercity moves', 'Move between cities across Tamil Nadu and India with a clear plan.'],
]

function Action({ href, children, kind = 'primary', onClick }) {
  const className = `action ${kind}`
  return href ? <a className={className} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{children}<b>→</b></a> : <button className={className} onClick={onClick}>{children}<b>→</b></button>
}

function Header({ page, setPage }) {
  const [menu, setMenu] = useState(false)
  const go = (view) => { setPage(view); setMenu(false); window.scrollTo({ top: 0, behavior: 'smooth' }) }
  return <><div className="utility"><div className="shell"><span>Local, Tamil Nadu & all-India moving support</span><a href={`tel:+${phone}`}>Call +91 93842 54680</a></div></div>
    <header><div className="shell navigation"><button className="logo" onClick={() => go('home')} aria-label="Kaveri Packers and Movers home"><img src="/assets/kaveri-logo.jpeg" alt="Kaveri Packers and Movers" /></button><button className="hamburger" onClick={() => setMenu(!menu)} aria-label="Toggle navigation"><i></i><i></i></button>
      <nav className={menu ? 'open' : ''}>{navItems.map(([label, view]) => <button className={page === view ? 'current' : ''} onClick={() => go(view)} key={view}>{label}</button>)}<button onClick={() => go('contact')} className="header-cta">Get a quote</button></nav></div></header></>
}

function SectionIntro({ eyebrow, title, text, children }) {
  return <div className="section-intro"><div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2></div>{text && <div className="intro-right"><p>{text}</p>{children}</div>}</div>
}

function ServiceCards({ link = false }) {
  return <div className="service-cards">{services.map(([number, title, text]) => <article key={title}><span className="service-count">{number}</span><div className="card-arrow">↗</div><h3>{title}</h3><p>{text}</p>{link ? <a href={`tel:+${phone}`}>Call about this service <b>→</b></a> : null}</article>)}</div>
}

function Steps() {
  return <section className="steps"><div className="shell"><SectionIntro eyebrow="The moving process" title={<>A calm way to<br /><em>get moving.</em></>} text="We keep the first steps simple, so your move feels clear before any boxes are packed." />
    <div className="step-grid"><div><b>01</b><h3>Tell us your route</h3><p>Share the pickup, destination, date and what you need to move.</p></div><div><b>02</b><h3>Plan the details</h3><p>We discuss the practical packing and handling requirements.</p></div><div><b>03</b><h3>Move with purpose</h3><p>Your relocation is carried out with attention from start to finish.</p></div></div></div></section>
}

function Faqs() {
  const questions = [
    ['What services does Kaveri Packers and Movers provide?', 'We support home shifting, office relocation, packing, loading, unloading, furniture handling and domestic moving.'],
    ['Do you handle local and outstation moves?', 'Yes. Share your pickup point, destination and preferred date so we can discuss the right plan for your move.'],
    ['How do I request a quotation?', 'Call us or complete the quote form with the locations and a short description of your moving needs.'],
    ['Can you help with fragile items and furniture?', 'Yes. Mention any furniture, glassware or sensitive belongings when you contact us so we can plan the handling carefully.'],
  ]
  return <section className="faq"><div className="shell faq-grid"><div><span className="eyebrow">Need to know</span><h2>Answers before<br /><em>moving day.</em></h2><p>Every relocation is different. These answers cover the most common first questions.</p><Action href={`tel:+${phone}`} kind="outline-dark">Call us directly</Action></div><div className="faq-list">{questions.map(([question, answer], index) => <details open={index === 0} key={question}><summary>{question}<b>+</b></summary><p>{answer}</p></details>)}</div></div></section>
}

function Home({ setPage }) {
  return <main>
    <section className="hero-new"><div className="shell hero-layout"><div className="hero-copy"><span className="eyebrow">Kaveri Packers & Movers · Local & all-India moves</span><h1>Moving made <em>more certain.</em></h1><p>Professional packing and moving support for homes, offices and intercity relocations—planned around the things you care about.</p><div className="hero-actions"><Action href={`tel:+${phone}`}>Call for a free quote</Action><Action href="#quote" kind="outline">View contact details</Action></div><div className="hero-points"><span>✓ Home & office moves</span><span>✓ Packing assistance</span><span>✓ Across India</span></div></div><div className="hero-visual"><img src="/assets/packing-hero-tamil-v3.png" alt="Tamil Nadu moving crew carefully packing a sofa for a home relocation" /><div className="visual-note"><b>Care first.</b><span>Move next.</span></div></div></div></section>
    <section className="proof"><div className="shell proof-grid"><p>Relocation support designed around <strong>careful packing, clear planning and a smooth handover.</strong></p><div><span>01</span><small>One clear plan</small></div><div><span>02</span><small>Focused handling</small></div><div><span>03</span><small>Doorstep delivery</small></div></div></section>
    <section className="section services"><div className="shell"><SectionIntro eyebrow="Our services" title={<>Relocation, shaped<br />around <em>your needs.</em></>} text="From a single home move to a complete workspace relocation, choose support that fits the journey ahead."><Action onClick={() => setPage('services')} kind="text">View all services</Action></SectionIntro><ServiceCards /></div></section>
    <section className="brand-story"><div className="shell story-layout"><div className="story-logo"><img src="/assets/kaveri-logo.jpeg" alt="Kaveri Packers and Movers logo" /></div><div><span className="eyebrow">A better moving experience</span><h2>Every box has a story.<br /><em>We help carry it forward.</em></h2><p>Moving is about more than changing an address. It is about beginning the next part of your life with a team that helps make the process feel considered, organised and personal.</p><Action onClick={() => setPage('about')} kind="outline-dark">About Kaveri</Action></div></div></section>
    <Steps />
    <section className="section coverage-new"><div className="shell coverage-layout"><div className="coverage-copy"><span className="eyebrow">Service coverage</span><h2>Across Tamil Nadu<br /><em>and all of India.</em></h2><p>We help coordinate local, state and domestic relocations. Speak with our team about your route, access requirements and moving date.</p><ul><li><b>Local moves</b><span>Nearby cities and neighbourhoods</span></li><li><b>Intercity moves</b><span>Across Tamil Nadu & India</span></li><li><b>Business moves</b><span>Offices, workspaces & equipment</span></li></ul><Action onClick={() => setPage('contact')}>Plan your move</Action></div><div className="coverage-photo"><img src="/assets/packing-hero-tamil-v3.png" alt="Tamil moving crew packing furniture for relocation" /></div></div></section>
    <section className="truck-section"><div className="shell truck-layout"><div className="truck-image"><img src="/assets/packing-loading-banner-v1.png" alt="Tamil Nadu moving crew loading boxes and wrapped furniture into a truck" /></div><div><span className="eyebrow">Loading & delivery</span><h2>From your door<br /><em>to the next one.</em></h2><p>Our moving service is designed to connect the whole journey: packing at pickup, careful loading, practical transport and focused delivery at your destination.</p><div className="truck-points"><div><b>01</b><span>Planned pickup and loading</span></div><div><b>02</b><span>Furniture and carton handling</span></div><div><b>03</b><span>Delivery coordination</span></div></div><Action href={`tel:+${phone}`}>Call for moving support</Action></div></div></section>
    <section className="move-advice"><div className="shell"><SectionIntro eyebrow="Packing tips" title={<>A few things to<br /><em>prepare before moving.</em></>} text="A well-prepared move saves time on the day. These simple checks help you get ready for pickup and delivery." /><div className="advice-grid"><article><span>Before packing</span><h3>Sort room by room</h3><p>Keep essential items, documents and day-to-day belongings separate from the boxes that will travel.</p></article><article><span>For fragile items</span><h3>Tell us in advance</h3><p>Let our team know about glass, electronics, artwork or heavy furniture so the right handling can be planned.</p></article><article><span>At delivery</span><h3>Keep access clear</h3><p>Share building access, floor details and the delivery contact before moving day to help the process run smoothly.</p></article></div></div></section>
    <section className="seo-content"><div className="shell seo-content-grid"><div><span className="eyebrow">Packers and movers services</span><h2>Planning a local or long-distance <em>move?</em></h2><p>Kaveri Packers and Movers supports home shifting, office relocation, packing, loading, unloading and intercity moving requirements across Tamil Nadu and India. Whether you are relocating a few essential items, a complete household or a workspace, our team helps you plan the practical details.</p><p>For a clearer quotation conversation, keep your pickup address, delivery address, approximate moving date, building access details and a short list of major items ready before calling.</p><Action href={`tel:+${phone}`}>Call for a quotation</Action></div><div className="seo-areas"><span>Moving services we support</span><ul><li>Home shifting and apartment relocation</li><li>Office and commercial relocation</li><li>Packing, loading and unloading assistance</li><li>Furniture and fragile-item handling</li><li>Local, intercity and domestic moving</li></ul><div className="area-tags"><b>Tamil Nadu</b><b>Madurai</b><b>Melur</b><b>All-India moves</b></div></div></div></section>
    <Faqs />
    <section className="final-cta" id="quote"><div className="shell call-panel"><div><span className="eyebrow">Start your move</span><h2>Ready to make<br />your next move?</h2><p>Call Kaveri Packers and Movers to discuss your pickup, destination and moving date.</p></div><a className="call-number" href={`tel:+${phone}`}><small>Call for a quotation</small><strong>+91 93842 54680</strong><span>Speak to our team →</span></a></div></section>
  </main>
}

function Services() { return <main><PageBanner eyebrow="Services" title={<>Moving support for<br /><em>every next step.</em></>} text="Explore home, office, packing and domestic moving services across Tamil Nadu and India." image="services" /><section className="section"><div className="shell"><SectionIntro eyebrow="What we offer" title={<>Practical services.<br /><em>Personal attention.</em></>} text="Tell us about your moving requirements and we will help you choose the right starting point."/><ServiceCards link /></div></section><Steps /><section className="section contact-strip"><div className="shell strip-layout"><div><span className="eyebrow">Not sure what you need?</span><h2>Let’s talk through<br /><em>your move.</em></h2></div><Action href={`tel:+${phone}`}>Call our team</Action></div></section></main> }

function PageBanner({ eyebrow, title, text, image }) { return <section className={`page-banner ${image}`}><div className="shell"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{text}</p></div></section> }

function About() { return <main><PageBanner eyebrow="About Kaveri" title={<>A moving team that<br /><em>puts care first.</em></>} text="Based in Melur, Madurai, Kaveri Packers and Movers helps customers make relocation feel more manageable." image="about" /><section className="section"><div className="shell about-layout"><div className="about-photo"><img src="/assets/packing-loading-banner-v1.png" alt="Moving crew loading carefully packed household items into a truck" /></div><div><span className="eyebrow">Our approach</span><h2>Clear details.<br /><em>Considered handling.</em></h2><p>We know a move carries your day-to-day life, important belongings and future plans. Our approach is to keep the experience clear, organised and attentive.</p><p>Whether you are moving a home, workplace or a few important items, we begin with the route and requirements, then help you move forward with confidence.</p><Action href={`tel:+${phone}`}>Call our team</Action></div></div></section><section className="principles"><div className="shell"><SectionIntro eyebrow="What matters" title={<>Our moving<br /><em>principles.</em></>} /><div className="principle-grid"><article><b>01</b><h3>Listen first</h3><p>Every plan starts by understanding your route, timing and belongings.</p></article><article><b>02</b><h3>Keep it clear</h3><p>Simple coordination helps the important moving details stay on track.</p></article><article><b>03</b><h3>Handle with care</h3><p>We bring extra attention to the belongings that matter to you.</p></article></div></div></section></main> }

function Contact() { return <main><PageBanner eyebrow="Contact us" title={<>Let’s make your<br /><em>move feel simpler.</em></>} text="Reach out for home shifting, office moving, packing or domestic relocation support." image="contact" /><section className="section"><div className="shell contact-layout-new"><div><span className="eyebrow">Kaveri Packers & Movers</span><h2>Speak with<br /><em>our team.</em></h2><div className="contact-item"><small>Call us</small><a href={`tel:+${phone}`}>+91 93842 54680</a></div><div className="contact-item"><small>Email us</small><a href="mailto:kaveripackersandmoversml@gmail.com">kaveripackersandmoversml@gmail.com</a></div><div className="contact-item"><small>Visit us</small><span>New No. 82, Old No. 25E, Kasthuribai Nagar 1st Street, Melur, Madurai, Tamil Nadu – 625106</span></div></div><div className="quote-card call-card"><span className="eyebrow">Need a quotation?</span><h3>Call us to<br />plan your move.</h3><p>Share your moving locations and preferred date directly with our team.</p><a href={`tel:+${phone}`}>+91 93842 54680 <b>→</b></a></div></div></section></main> }

function Footer({ setPage }) { return <footer><div className="shell footer-top"><div><img src="/assets/kaveri-logo.jpeg" alt="Kaveri Packers and Movers" /><p>Careful packing. Smooth moving.<br />Melur, Madurai, Tamil Nadu.</p></div><div><span>Explore</span>{navItems.slice(0, 3).map(([label, view]) => <button onClick={() => { setPage(view); window.scrollTo(0, 0) }} key={view}>{label}</button>)}</div><div><span>Contact</span><a href={`tel:+${phone}`}>+91 93842 54680</a><a href="mailto:kaveripackersandmoversml@gmail.com">kaveripackersandmoversml@gmail.com</a></div><div className="footer-address"><span>Address</span><p>New No. 82, Old No. 25E,<br />Kasthuribai Nagar 1st Street,<br />Melur, Madurai, Tamil Nadu – 625106</p></div></div><div className="shell footer-bottom">© {new Date().getFullYear()} Kaveri Packers and Movers <span>Madurai · Tamil Nadu · India</span></div></footer> }

function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(true)
  if (!isOpen) return null
  return <div className="welcome-backdrop" role="dialog" aria-modal="true" aria-labelledby="welcome-title"><div className="welcome-popup"><button className="popup-close" onClick={() => setIsOpen(false)} aria-label="Close popup">×</button><span className="eyebrow">Kaveri Packers & Movers</span><h2 id="welcome-title">Planning<br /><em>a move?</em></h2><p>Call our team for local, Tamil Nadu or all-India home shifting, office relocation and packing support.</p><a href={`tel:+${phone}`} className="popup-call"><small>Call for a quotation</small><strong>+91 93842 54680</strong></a><button className="popup-later" onClick={() => setIsOpen(false)}>I’ll explore the site first</button></div></div>
}

export default function App() {
  const [page, setPage] = useState('home')
  const Page = { home: Home, services: Services, about: About, contact: Contact }[page]
  return <><Header page={page} setPage={setPage} /><Page setPage={setPage} /><WelcomePopup /><a className="quick-chat" href={`tel:+${phone}`}>Call us <b>↗</b></a><Footer setPage={setPage} /></>
}

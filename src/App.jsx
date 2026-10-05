import { motion } from 'framer-motion'

const services = [
  {
    title: 'Solar marketing & lead generation',
    text: 'Campaigns, demand generation, and digital funnels that turn interest into booked solar consultations.',
    accent: '01',
  },
  {
    title: 'Residential & commercial installation',
    text: 'End-to-end solar rooftop and power-system installation designed for performance, reliability, and long-term savings.',
    accent: '02',
  },
  {
    title: 'Import/export & supply chain support',
    text: 'Strategic sourcing and logistics for clean-energy hardware, panels, batteries, and project-ready equipment.',
    accent: '03',
  },
  {
    title: 'General contracting & project delivery',
    text: 'Skilled site coordination, civil and electrical execution, and turnkey project management for solar deployment.',
    accent: '04',
  },
]

const stats = [
  { label: 'Solar projects delivered', value: '180+' },
  { label: 'MW installed', value: '42 MW' },
  { label: 'Client retention', value: '94%' },
  { label: 'Avg. savings unlocked', value: '31%' },
]

const process = [
  'Energy audit and feasibility review',
  'Design, procurement, and financing strategy',
  'Installation, commissioning, and quality checks',
  'Performance tracking and optimization',
]

function LogoMark() {
  return (
    <motion.div
      className="brand-mark"
      initial={{ rotate: -12, scale: 0.9, opacity: 0.7 }}
      animate={{ rotate: 0, scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 120 120" role="img">
        <defs>
          <linearGradient id="sunGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffe799" />
            <stop offset="45%" stopColor="#f9b93d" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>
        </defs>
        <circle cx="58" cy="42" r="22" fill="url(#sunGlow)" />
        <path d="M18 84h62c11 0 20-9 20-20v-2H44c-13 0-24 11-24 24v2Z" fill="#0a2232" />
        <path d="M38 18h48v20H38zm-8 28h64v18H30zm-6 28h76v16H24z" fill="#0d2f3d" opacity="0.96" />
        <path d="M55 20l10 18-12 6-8-10-3 12-9-7 8-10-12-9 17-1 8-10 1 11Z" fill="#fff4b8" opacity="0.8" />
      </svg>
    </motion.div>
  )
}

function App() {
  return (
    <div className="solar-page" id="top">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="ELHAI Enterprise home">
          <LogoMark />
          <span className="brand-text">
            <strong>ELHAI</strong>
            <span>ENTERPRISE</span>
          </span>
        </a>

        <nav className="main-nav" aria-label="Main navigation">
          <a href="#solutions">Solutions</a>
          <a href="#process">Process</a>
          <a href="#contact">Let’s talk</a>
        </nav>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-backdrop" />
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <p className="eyebrow">Clean power. Smarter growth.</p>
            <h1>
              Solar marketing, installations,<br />
              and energy systems that <span>move business forward.</span>
            </h1>
            <p className="lead">
              ELHAI Enterprise helps homes, businesses, and project developers unlock dependable renewable energy through strategy, deployment, and performance-focused execution.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#contact">Book a consultation</a>
              <a className="secondary-button" href="#solutions">Explore services</a>
            </div>

            <div className="hero-trust" aria-label="Trust indicators">
              <span>Residential</span>
              <span>Commercial</span>
              <span>Industrial</span>
            </div>
          </motion.div>

          <motion.div
            className="hero-panel"
            initial={{ opacity: 0, x: 36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
          >
            <div className="panel-card main-card">
              <div className="mini-label">Project pipeline</div>
              <div className="panel-value">7.4 GW</div>
              <div className="panel-bar">
                <span />
              </div>
              <div className="panel-meta">
                <span>Energy growth</span>
                <strong>+28%</strong>
              </div>
            </div>

            <div className="panel-card floating-card">
              <div className="mini-label">Current focus</div>
              <strong>Solar + storage</strong>
              <p>Rooftop systems, commercial arrays, and hybrid energy solutions.</p>
            </div>
          </motion.div>
        </section>

        <section className="stats-section" aria-label="Performance stats">
          {stats.map((stat) => (
            <div className="stat-box" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </section>

        <section className="services-section section-shell" id="solutions">
          <div className="section-heading">
            <p className="eyebrow eyebrow-dark">What we do</p>
            <h2>Built for solar growth at every stage.</h2>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <motion.article
                className="service-card"
                key={service.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
              >
                <span className="service-number">{service.accent}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="about-section section-shell" id="about">
          <div className="about-visual">
            <img
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80"
              alt="Solar panels on a modern rooftop"
            />
            <div className="visual-badge">
              <span>Reliable energy</span>
              <strong>Cleaner future</strong>
            </div>
          </div>

          <div className="about-copy">
            <p className="eyebrow eyebrow-dark">Why ELHAI</p>
            <h2>From strategy to sunlight, we connect the full solar journey.</h2>
            <p>
              Whether you are a homeowner looking for better energy independence or a growing business needing consistent power and stronger sustainability messaging, we blend practical project delivery with market-ready visibility.
            </p>
            <ul>
              <li>Turnkey solar project support</li>
              <li>Lead generation and brand positioning</li>
              <li>Import/export coordination for energy equipment</li>
              <li>General contracting and site execution</li>
            </ul>
          </div>
        </section>

        <section className="process-section section-shell" id="process">
          <div className="section-heading narrow">
            <p className="eyebrow eyebrow-dark">Our process</p>
            <h2>Simple, structured, and result-driven.</h2>
          </div>

          <div className="process-grid">
            {process.map((step, index) => (
              <motion.div
                className="process-step"
                key={step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.09 }}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{step}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="cta-section" id="contact">
          <div className="cta-inner">
            <div>
              <p className="eyebrow">Ready to build with solar?</p>
              <h2>Let’s power your next project with clean energy and smarter execution.</h2>
            </div>
            <a href="mailto:hello@elhaienterprise.com" className="primary-button">hello@elhaienterprise.com</a>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App

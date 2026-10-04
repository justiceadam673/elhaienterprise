const capabilities = [
  {
    number: '01',
    title: 'Find the signal.',
    description:
      'We uncover where AI can make a meaningful difference, then shape a roadmap your people can actually use.',
    tag: 'STRATEGY & DISCOVERY',
  },
  {
    number: '02',
    title: 'Build with purpose.',
    description:
      'From intelligent workflows to custom tools, we make practical technology that fits the way your business works.',
    tag: 'AI & AUTOMATION',
  },
  {
    number: '03',
    title: 'Make it stick.',
    description:
      'We bring your teams along, measure what changes, and keep improving long after the first launch.',
    tag: 'ENABLEMENT & GROWTH',
  },
]

function ArrowIcon() {
  return <span className="arrow-icon" aria-hidden="true">↗</span>
}

function App() {
  return (
    <main id="top">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="ELHAI Enterprise home">
          <span className="wordmark-symbol" aria-hidden="true"><i /><i /><i /></span>
          <span>ELHAI<span className="wordmark-light">ENTERPRISE</span></span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#approach">Approach</a>
          <a href="#capabilities">Capabilities</a>
          <a className="nav-contact" href="#contact">Let’s talk <ArrowIcon /></a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <img
          className="hero-image"
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2400&q=88"
          alt="Sunlit, modern workspace ready for a team to collaborate"
        />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow hero-eyebrow"><span className="eyebrow-dot" /> HUMAN THINKING. MACHINE POTENTIAL.</p>
          <h1 id="hero-title">Enterprise AI<br />that moves <em>work</em><br />forward.</h1>
          <div className="hero-bottom">
            <p>We help ambitious teams turn emerging technology into clearer decisions, better experiences, and work that matters.</p>
            <a className="circle-link" href="#capabilities" aria-label="Explore our capabilities"><ArrowIcon /></a>
          </div>
        </div>
        <div className="hero-caption"><span>01 / 03</span><span>INTELLIGENCE, IN OPERATION</span></div>
      </section>

      <section className="intro section-pad" id="approach">
        <p className="eyebrow section-eyebrow">A BETTER KIND OF PROGRESS</p>
        <div className="intro-copy">
          <h2>Technology should feel like <span>a new beginning.</span></h2>
          <div className="intro-aside">
            <p>Not another layer of complexity. A clearer way to think, make, and move. We pair human insight with useful AI to help your business get there.</p>
            <a className="text-link" href="#capabilities">How we help <ArrowIcon /></a>
          </div>
        </div>
        <div className="ticker" aria-label="Think clearly. Build boldly. Move forward.">
          <div className="ticker-track" aria-hidden="true">
            <span>THINK CLEARLY <b>✳</b> BUILD BOLDLY <b>✳</b> MOVE FORWARD <b>✳</b>&nbsp;</span>
            <span>THINK CLEARLY <b>✳</b> BUILD BOLDLY <b>✳</b> MOVE FORWARD <b>✳</b>&nbsp;</span>
          </div>
        </div>
      </section>

      <section className="capabilities section-pad" id="capabilities">
        <div className="capabilities-heading">
          <p className="eyebrow section-eyebrow">FROM FIRST QUESTION TO WHAT’S NEXT</p>
          <h2>Make the complex<br /><span>feel possible.</span></h2>
        </div>
        <div className="capability-list">
          {capabilities.map((capability) => (
            <article className="capability" key={capability.number}>
              <span className="capability-number">{capability.number}</span>
              <div className="capability-main">
                <p className="capability-tag">{capability.tag}</p>
                <h3>{capability.title}</h3>
              </div>
              <p className="capability-description">{capability.description}</p>
              <ArrowIcon />
            </article>
          ))}
        </div>
      </section>

      <section className="feature" aria-labelledby="feature-title">
        <div className="feature-image-wrap">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=88"
            alt="Colleagues sharing ideas around a table"
            loading="lazy"
          />
          <span className="image-note">GOOD IDEAS GET BETTER TOGETHER</span>
        </div>
        <div className="feature-copy">
          <p className="eyebrow">PEOPLE FIRST, ALWAYS</p>
          <h2 id="feature-title">Built around<br />the people<br />doing the <em>work.</em></h2>
          <p>Real transformation starts with listening. We bring your team into the process early, make the unfamiliar feel approachable, and build things people are glad to use.</p>
          <a className="feature-link" href="#contact">Meet your next possibility <ArrowIcon /></a>
          <span className="feature-index">ELHAI / 2025</span>
        </div>
      </section>

      <footer className="contact section-pad" id="contact">
        <div className="contact-topline">
          <span className="eyebrow">A GOOD PLACE TO START</span>
          <span className="contact-mark" aria-hidden="true">✳</span>
        </div>
        <h2>Ready for work<br />to feel <em>different?</em></h2>
        <div className="contact-bottom">
          <p>Let’s find the useful idea hiding in plain sight.</p>
          <a className="contact-button" href="mailto:hello@elhaienterprise.com">Start a conversation <ArrowIcon /></a>
        </div>
        <div className="footer-meta">
          <a className="wordmark footer-wordmark" href="#top">
            <span className="wordmark-symbol" aria-hidden="true"><i /><i /><i /></span>
            <span>ELHAI<span className="wordmark-light">ENTERPRISE</span></span>
          </a>
          <span>HUMAN THINKING. MACHINE POTENTIAL.</span>
          <span>© ELHAI ENTERPRISE 2025</span>
        </div>
      </footer>
    </main>
  )
}

export default App

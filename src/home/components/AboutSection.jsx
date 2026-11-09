import { Code2, Layers3, Music2, Piano } from 'lucide-react'
import { Link } from 'react-router'
import { ROUTES } from '../../shared/routing/routes.js'
import { ABOUT_INTERESTS } from '../constants/about.js'

const INTEREST_ICONS = {
  architecture: Layers3,
  learning: Code2,
}


function AboutSection() {
  return (
    <section className="home-section about-section" id="about">
      <div className="home-section__heading">
        <div className="section-label">07 / ABOUT</div>
        <h2>A software enthusiast first.</h2>
        <p>
          I like understanding the whole path from an idea to a working product — the interface people use,
          the backend behind it, the data underneath, and the small engineering decisions in between.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-copy">
          <p>
            My projects have taken me through full-stack development, backend architecture, Android, APIs,
            authentication, deployment, synchronization, testing, and a growing collection of frameworks and
            ecosystems. I tend to enjoy the parts where product thinking and technical structure meet.
          </p>
          <p>
            I am especially drawn to clean boundaries, useful abstractions, and software that stays pleasant to
            work on after the first version is finished.
          </p>
        </div>

        <div className="about-interests" aria-label="Software interests">
          {ABOUT_INTERESTS.map(({ id, title, description }) => {
            const Icon = INTEREST_ICONS[id]

            return (
              <article className="about-interest" key={title}>
                <Icon aria-hidden="true" size={18} strokeWidth={1.8} />
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>

      <div className="about-beyond">
        <div className="about-beyond__icons" aria-hidden="true">
          <Piano size={18} strokeWidth={1.8} />
          <Music2 size={18} strokeWidth={1.8} />
        </div>
        <div>
          <span className="about-beyond__eyebrow">Beyond code</span>
          <p>
            I also play piano and compose music. There is more to me than software, so I keep a small corner of
            this portfolio for that too.
          </p>
        </div>
        <Link className="text-link about-beyond__link" to={ROUTES.more}>
          Beyond code →
        </Link>
      </div>
    </section>
  )
}

export default AboutSection

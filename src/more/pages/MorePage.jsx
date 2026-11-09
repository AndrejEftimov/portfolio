import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router'
import { assetPath } from '../../shared/constants/assets.js'
import InterestPanel from '../components/InterestPanel.jsx'
import { BEYOND_INTERESTS, MORE_PAGE } from '../constants/interests.js'
import { ROUTES } from '../../shared/routing/routes.js'

function MorePage() {
  return (
    <div className="content-page beyond-page">
      <section className="beyond-hero" aria-labelledby="beyond-page-title">
        <div className="beyond-hero__copy">
          <div className="section-label">{MORE_PAGE.eyebrow}</div>
          <h1 id="beyond-page-title">{MORE_PAGE.title}</h1>
          <p>{MORE_PAGE.intro}</p>

          <div className="beyond-hero__topics" aria-label="Beyond code topics">
            {BEYOND_INTERESTS.map((interest) => (
              <span key={interest.id}>{interest.label}</span>
            ))}
          </div>
        </div>

        <figure className="beyond-hero__visual">
          <div className="beyond-hero__image-wrap">
            <img
              alt="Andrej Eftimov playing a grand piano"
              className="beyond-hero__image"
              decoding="async"
              fetchPriority="high"
              height="1600"
              src={assetPath('images/beyond-code/andrej-piano.webp')}
              width="1066"
            />
            <div className="beyond-hero__trace" aria-hidden="true" />
          </div>
          <figcaption>Piano / composition / music.</figcaption>
        </figure>
      </section>

      <section className="beyond-interests" aria-label="Interests beyond software">
        <div className="beyond-interests__intro">
          <span className="section-label">EXPLORE / EXPAND</span>
          <p>Three interests, kept compact until you want the longer version.</p>
        </div>

        <div className="beyond-interests__list">
          {BEYOND_INTERESTS.map((interest) => (
            <InterestPanel interest={interest} key={interest.id} />
          ))}
        </div>
      </section>

      <section className="beyond-cta" aria-labelledby="beyond-cta-title">
        <div>
          <span className="section-label">BACK TO THE PROFESSIONAL SIDE</span>
          <h2 id="beyond-cta-title">Still here for the software.</h2>
          <p>If the projects or anything here sparked a conversation, I am always happy to connect.</p>
        </div>

        <Link className="button button--secondary" to={ROUTES.contact}>
          Say hello
          <ArrowUpRight aria-hidden="true" size={17} />
        </Link>
      </section>
    </div>
  )
}

export default MorePage

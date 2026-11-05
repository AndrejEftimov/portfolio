import { ArrowDownRight, MapPin } from 'lucide-react'
import { Link } from 'react-router'
import { APP } from '../../shared/constants/app.js'
import { assetPath } from '../../shared/constants/assets.js'
import { HOME_SECTION_IDS, ROUTES } from '../../shared/routing/routes.js'
import { HERO_DISCIPLINES } from '../constants/hero.js'
import HeroTerminal from './HeroTerminal.jsx'

function HeroSection() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__content">
        <div className="section-label">HELLO / WELCOME</div>

        <h1 id="hero-title" className="hero__title">
          Hi, I&apos;m <span>Andrej.</span>
        </h1>

        <p className="hero__lead">
          I like building software that feels useful, thoughtful, and enjoyable to work on.
        </p>

        <p className="hero__role">
          <span>{APP.role}</span>
          {HERO_DISCIPLINES.map((discipline) => (
            <span key={discipline} className="hero__role-group">
              <span aria-hidden="true">·</span>
              <span>{discipline}</span>
            </span>
          ))}
        </p>

        <div className="hero__actions">
          <Link className="button button--primary" to={ROUTES.projects}>
            Explore my work
            <ArrowDownRight size={17} aria-hidden="true" />
          </Link>

          <Link
            className="button button--secondary"
            to={ROUTES.homeSection(HOME_SECTION_IDS.about)}
          >
            About me
          </Link>
        </div>

        <div className="hero__location">
          <MapPin size={15} aria-hidden="true" />
          <span>{APP.location}</span>
        </div>
      </div>

      <div className="hero__visual" aria-label="Profile photo area">
        <div className="hero-portrait">
          <div className="hero-portrait__glow" aria-hidden="true" />
          <div className="hero-portrait__frame">
            <img
              alt="Andrej Eftimov outdoors at sunset"
              className="hero-portrait__image"
              decoding="async"
              fetchPriority="high"
              height="1333"
              width="1000"
              src={assetPath('images/profile/andrej-eftimov.webp')}
            />
          </div>
        </div>

        <HeroTerminal />
      </div>
    </section>
  )
}

export default HeroSection

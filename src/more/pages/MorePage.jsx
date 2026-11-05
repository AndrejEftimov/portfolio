import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router'
import { MORE_PAGE, MUSIC_INTERESTS } from '../constants/interests.js'
import { ROUTES } from '../../shared/routing/routes.js'

function MorePage() {
  return (
    <div className="content-page more-page">
      <section className="content-page__hero">
        <div className="section-label">{MORE_PAGE.eyebrow}</div>
        <h1>{MORE_PAGE.title}</h1>
        <p>{MORE_PAGE.intro}</p>
      </section>

      <section className="more-page__music" aria-labelledby="music-title">
        <div className="content-page__section-heading">
          <div className="section-label">MUSIC / OFF THE CLOCK</div>
          <h2 id="music-title">The musical side.</h2>
          <p>
            Piano and composing are the two hobbies I most naturally come back to when I am not building software.
          </p>
        </div>

        <div className="more-page__interest-list">
          {MUSIC_INTERESTS.map((interest, index) => (
            <article className="more-page__interest" key={interest.id}>
              <div className="more-page__interest-index">0{index + 1}</div>
              <div>
                <div className="section-label">{interest.eyebrow}</div>
                <h3>{interest.title}</h3>
                <p>{interest.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="more-page__note" aria-labelledby="more-note-title">
        <div>
          <div className="section-label">BEYOND THE KEYBOARD</div>
          <h2 id="more-note-title">A different kind of making.</h2>
          <p>{MORE_PAGE.note}</p>
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

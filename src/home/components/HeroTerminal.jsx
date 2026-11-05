import { HERO_FOCUS_ITEMS } from '../constants/hero.js'

function HeroTerminal() {
  return (
    <div className="hero-terminal" aria-label="Current developer focus">
      <div className="hero-terminal__bar" aria-hidden="true">
        <span />
        <span />
        <span />
        <span className="hero-terminal__title">andrej@portfolio:~</span>
      </div>

      <div className="hero-terminal__body">
        {HERO_FOCUS_ITEMS.map(({ key, value }) => (
          <div className="hero-terminal__line" key={key}>
            <span className="hero-terminal__prompt">&gt;</span>
            <span className="hero-terminal__key">{key}</span>
            <span className="hero-terminal__value">{value}</span>
          </div>
        ))}

        <div className="hero-terminal__line" aria-hidden="true">
          <span className="hero-terminal__prompt">&gt;</span>
          <span className="hero-terminal__cursor" />
        </div>
      </div>
    </div>
  )
}

export default HeroTerminal

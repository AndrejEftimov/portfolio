import { ArrowUpRight, ChevronDown, Cpu, Music2, Plane } from 'lucide-react'

const INTEREST_ICONS = {
  music: Music2,
  travel: Plane,
  technology: Cpu,
}

function InterestPanel({ interest }) {
  const Icon = INTEREST_ICONS[interest.id]

  return (
    <details className={`beyond-interest beyond-interest--${interest.id}`}>
      <summary className="beyond-interest__summary">
        <span className="beyond-interest__index" aria-hidden="true">{interest.order}</span>

        <span className="beyond-interest__identity">
          <span className="beyond-interest__icon" aria-hidden="true">
            <Icon size={18} strokeWidth={1.8} />
          </span>
          <span className="beyond-interest__label">{interest.label}</span>
        </span>

        <span className="beyond-interest__preview">{interest.summary}</span>

        <span className="beyond-interest__toggle" aria-hidden="true">
          <ChevronDown size={18} />
        </span>
      </summary>

      <div className="beyond-interest__body">
        <div className="beyond-interest__copy">
          <span className="section-label">{interest.label.toUpperCase()} / OFF THE CLOCK</span>
          <h2>{interest.title}</h2>

          {interest.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          {interest.tags && (
            <div className="beyond-interest__tags" aria-label="Music styles">
              {interest.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          )}

          {interest.link && (
            <a
              className="beyond-interest__link"
              href={interest.link.href}
              rel="noopener noreferrer"
              target="_blank"
            >
              {interest.link.label}
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          )}
        </div>

        {interest.id === 'music' && (
          <div className="beyond-interest__music-mark" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        )}
      </div>
    </details>
  )
}

export default InterestPanel

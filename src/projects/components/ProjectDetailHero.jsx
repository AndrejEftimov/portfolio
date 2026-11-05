import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router'
import { ROUTES } from '../../shared/routing/routes.js'

function ProjectDetailHero({ project, details }) {
  const links = Object.values(details.links ?? {})
  const hasImage = Boolean(details.heroImage)
  const imageModeClass = details.heroImageMode ? ` project-detail-hero__visual--${details.heroImageMode}` : ''

  return (
    <header className="project-detail-hero">
      <Link className="project-detail-hero__back" to={ROUTES.projects}>
        <ArrowLeft aria-hidden="true" size={17} />
        All projects
      </Link>

      <div className="project-detail-hero__layout">
        <div className="project-detail-hero__content">
          <div className="project-detail-hero__meta">
            <span className="section-label">{project.type}</span>
            <span className={`status-pill status-pill--${project.status.tone}`}>
              <span className="status-pill__dot" aria-hidden="true" />
              {project.status.label}
            </span>
          </div>

          <h1>{project.name}</h1>
          <p className="project-detail-hero__tagline">{details.tagline}</p>

          <div className="project-detail-hero__tags" aria-label="Project tags">
            {project.tags.map((tag) => (
              <span key={tag.id}>{tag.label}</span>
            ))}
          </div>

          {links.length > 0 && (
            <div className="project-detail-hero__actions">
              {links.map((link, index) => (
                <a
                  className={`button ${index === 0 ? 'button--primary' : 'button--secondary'}`}
                  href={link.href}
                  key={link.href}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {link.label}
                  <ArrowUpRight aria-hidden="true" size={17} />
                </a>
              ))}
            </div>
          )}
        </div>

        <div
          className={`project-detail-hero__visual project-detail-hero__visual--${project.slug}${imageModeClass}${hasImage ? ' project-detail-hero__visual--image' : ''}`}
          aria-label={hasImage ? details.heroImageAlt : `${project.name} technical visual`}
        >
          {hasImage ? (
            <img
              alt={details.heroImageAlt}
              className="project-detail-hero__image"
              decoding="async"
              fetchPriority="high"
              height={details.heroImageHeight}
              src={details.heroImage}
              width={details.heroImageWidth}
            />
          ) : (
            <>
              <div className="project-detail-hero__visual-grid" aria-hidden="true" />
              <span className="project-detail-hero__visual-order">{project.order ?? 'PROJECT'}</span>
              <strong>{project.shortName ?? project.name}</strong>
              <span>Technical project overview</span>
            </>
          )}
        </div>
      </div>
    </header>
  )
}

export default ProjectDetailHero

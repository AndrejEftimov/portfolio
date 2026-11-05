import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router'
import { ROUTES } from '../../shared/routing/routes.js'

function ProjectCatalogItem({ project, index, flagship = false }) {
  const number = String(index + 1).padStart(2, '0')

  return (
    <article
      className={`project-catalog-item${flagship ? ' project-catalog-item--flagship' : ''}`}
      id={`project-${project.slug}`}
    >
      <div className="project-catalog-item__index" aria-hidden="true">{number}</div>

      <div className="project-catalog-item__main">
        <div className="project-catalog-item__heading">
          <div>
            <span className="project-catalog-item__type">{project.type}</span>
            <h2>{project.name}</h2>
          </div>

          <span className={`status-pill status-pill--${project.status.tone}`}>
            <span className="status-pill__dot" aria-hidden="true" />
            {project.status.label}
          </span>
        </div>

        <p>{project.summary}</p>

        <div className="project-catalog-item__meta">
          <div className="project-catalog-item__badges" aria-label={`${project.name} metadata`}>
            {project.tags.map((tag) => (
              <span key={tag.id}>{tag.label}</span>
            ))}
          </div>

          <div className="project-catalog-item__stack" aria-label={`${project.name} technologies`}>
            {project.technologies.map((technology) => (
              <code key={technology}>{technology}</code>
            ))}
          </div>
        </div>
      </div>

      <Link
        className="project-catalog-item__link"
        to={ROUTES.project(project.slug)}
        aria-label={`Explore ${project.name}`}
      >
        <span>Explore</span>
        <ArrowUpRight size={18} aria-hidden="true" />
      </Link>
    </article>
  )
}

export default ProjectCatalogItem

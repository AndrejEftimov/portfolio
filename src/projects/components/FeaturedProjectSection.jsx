import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router'
import { ROUTES } from '../../shared/routing/routes.js'
import ProjectVisual from './ProjectVisual.jsx'

function FeaturedProjectSection({ project, index }) {
  const isReversed = index % 2 === 1

  return (
    <article className={`featured-project${project.emphasis === 'primary' ? ' featured-project--flagship' : ''}`}>
      <div className={`featured-project__layout${isReversed ? ' featured-project__layout--reversed' : ''}`}>
        <ProjectVisual project={project} side={isReversed ? 'right' : 'left'} />

        <div className="featured-project__content">
          <div className="featured-project__topline">
            <span className="section-label">{project.order} / {project.type.toUpperCase()}</span>
            <span className={`status-pill status-pill--${project.status.tone}`}>
              <span className="status-pill__dot" aria-hidden="true" />
              {project.status.label}
            </span>
          </div>

          <h3>{project.name}</h3>
          <p className="featured-project__summary">{project.summary}</p>

          <div className="featured-project__stack" aria-label={`${project.name} technologies`}>
            {project.technologies.map((technology) => (
              <code key={technology}>{technology}</code>
            ))}
          </div>

          <Link className="featured-project__link" to={ROUTES.project(project.slug)}>
            Explore project
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  )
}

export default FeaturedProjectSection

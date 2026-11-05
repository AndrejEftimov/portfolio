import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Link } from 'react-router'
import { ROUTES } from '../../shared/routing/routes.js'

function ProjectDetailNavigation({ previousProject, nextProject }) {
  if (!previousProject && !nextProject) {
    return null
  }

  return (
    <nav className="project-detail-navigation" aria-label="Project navigation">
      {previousProject ? (
        <Link to={ROUTES.project(previousProject.slug)}>
          <ArrowLeft aria-hidden="true" size={18} />
          <span>
            <small>Previous project</small>
            <strong>{previousProject.name}</strong>
          </span>
        </Link>
      ) : <span />}

      {nextProject && (
        <Link className="project-detail-navigation__next" to={ROUTES.project(nextProject.slug)}>
          <span>
            <small>Next project</small>
            <strong>{nextProject.name}</strong>
          </span>
          <ArrowRight aria-hidden="true" size={18} />
        </Link>
      )}
    </nav>
  )
}

export default ProjectDetailNavigation

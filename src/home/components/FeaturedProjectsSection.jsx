import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router'
import FeaturedProjectSection from '../../projects/components/FeaturedProjectSection.jsx'
import { FEATURED_PROJECTS, OTHER_PROJECTS } from '../../projects/constants/projects.js'
import { ROUTES } from '../../shared/routing/routes.js'

const SPOTLIGHT_COUNT = 3

function FeaturedProjectsSection() {
  const spotlightProjects = FEATURED_PROJECTS.slice(0, SPOTLIGHT_COUNT)
  const compactProjects = [...FEATURED_PROJECTS.slice(SPOTLIGHT_COUNT), ...OTHER_PROJECTS]

  return (
    <section className="featured-work" id="projects" aria-labelledby="featured-work-title">
      <div className="featured-work__intro">
        <div>
          <div className="section-label">01 / FEATURED WORK</div>
          <h2 id="featured-work-title">Selected work, with the strongest evidence first.</h2>
        </div>

        <p>
          MyCircle and MTJ lead the story, followed by one more substantial project. The rest stays easy to scan without competing for the same visual weight.
        </p>
      </div>

      <div className="featured-work__projects">
        {spotlightProjects.map((project, index) => (
          <FeaturedProjectSection project={project} index={index} key={project.slug} />
        ))}
      </div>

      <div className="featured-work__more" aria-label="More selected projects">
        <div className="featured-work__more-heading">
          <span className="section-label">MORE PROJECTS</span>
          <span>Smaller snapshots, same project depth.</span>
        </div>

        <div className="featured-work__more-list">
          {compactProjects.map((project) => (
            <Link className="featured-work__more-item" key={project.slug} to={ROUTES.project(project.slug)}>
              <div>
                <span className={`status-dot status-dot--${project.status.tone}`} aria-hidden="true" />
                <strong>{project.name}</strong>
                <span>{project.type}</span>
              </div>
              <div className="featured-work__more-stack" aria-label={`${project.name} technologies`}>
                {project.technologies.slice(0, 3).map((technology) => (
                  <code key={technology}>{technology}</code>
                ))}
              </div>
              <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          ))}
        </div>
      </div>

      <Link className="featured-work__all" to={ROUTES.projects}>
        Browse the full project index
        <ArrowRight size={17} aria-hidden="true" />
      </Link>
    </section>
  )
}

export default FeaturedProjectsSection

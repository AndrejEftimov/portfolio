import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router'
import FeaturedProjectSection from '../../projects/components/FeaturedProjectSection.jsx'
import { FEATURED_PROJECTS } from '../../projects/constants/projects.js'
import { ROUTES } from '../../shared/routing/routes.js'

function FeaturedProjectsSection() {
  return (
    <section className="featured-work" id="projects" aria-labelledby="featured-work-title">
      <div className="featured-work__intro">
        <div>
          <div className="section-label">01 / FEATURED WORK</div>
          <h2 id="featured-work-title">A few things I&apos;ve been building.</h2>
        </div>

        <p>
          MyCircle and MTJ lead the story, with selected work across .NET, Django, React, and integration-heavy projects following behind.
        </p>
      </div>

      <div className="featured-work__projects">
        {FEATURED_PROJECTS.map((project, index) => (
          <FeaturedProjectSection project={project} index={index} key={project.slug} />
        ))}
      </div>

      <Link className="featured-work__all" to={ROUTES.projects}>
        See all projects
        <ArrowRight size={17} aria-hidden="true" />
      </Link>
    </section>
  )
}

export default FeaturedProjectsSection

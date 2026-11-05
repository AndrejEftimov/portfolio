import { ArrowDown } from 'lucide-react'
import ProjectCatalogItem from '../components/ProjectCatalogItem.jsx'
import { FEATURED_PROJECTS, OTHER_PROJECTS, PROJECTS } from '../constants/projects.js'
import { handleSamePageAnchor } from '../../shared/utils/scroll.js'

const FLAGSHIP_COUNT = 2

function ProjectsPage() {
  const flagshipProjects = FEATURED_PROJECTS.slice(0, FLAGSHIP_COUNT)
  const selectedProjects = [...FEATURED_PROJECTS.slice(FLAGSHIP_COUNT), ...OTHER_PROJECTS]

  return (
    <div className="projects-page">
      <section className="projects-page__hero" aria-labelledby="projects-page-title">
        <div>
          <div className="section-label">02 / PROJECTS</div>
          <h1 id="projects-page-title">The work, in one place.</h1>
        </div>

        <div className="projects-page__intro">
          <p>
            A curated look at the projects that best represent what I&apos;ve been building across full-stack, Android, .NET, Django, and backend-focused work.
          </p>

          <a
            className="projects-page__jump"
            href="#project-jump-list"
            onClick={(event) => handleSamePageAnchor(event, '#project-jump-list')}
          >
            Jump to a project
            <ArrowDown size={16} aria-hidden="true" />
          </a>
        </div>
      </section>
      <nav className="projects-page__project-jump" id="project-jump-list" aria-label="Jump to a project">
        <span className="projects-page__project-jump-label">PROJECT INDEX</span>
        <div className="projects-page__project-jump-items">
          {PROJECTS.map((project, index) => (
            <a
              key={project.slug}
              href={`#project-${project.slug}`}
              onClick={(event) => handleSamePageAnchor(event, `#project-${project.slug}`)}
            >
              <span aria-hidden="true">{project.order ?? String(index + 1).padStart(2, '0')}</span>
              {project.name}
            </a>
          ))}
        </div>
      </nav>

      <section className="projects-page__group" aria-labelledby="flagship-projects-title">
        <div className="projects-page__group-heading">
          <span className="section-label">FLAGSHIP</span>
          <h2 id="flagship-projects-title">The two that lead the story.</h2>
          <p>MyCircle and MTJ are the strongest snapshots of my current work and engineering interests.</p>
        </div>

        <div className="project-catalog project-catalog--flagship">
          {flagshipProjects.map((project, index) => (
            <ProjectCatalogItem
              key={project.slug}
              project={project}
              index={index}
              flagship
            />
          ))}
        </div>
      </section>

      <section className="projects-page__group" id="project-index" aria-labelledby="selected-projects-title">
        <div className="projects-page__group-heading projects-page__group-heading--compact">
          <span className="section-label">SELECTED WORK</span>
          <h2 id="selected-projects-title">More things I&apos;ve built and explored.</h2>
        </div>

        <div className="project-catalog">
          {selectedProjects.map((project, index) => (
            <ProjectCatalogItem
              key={project.slug}
              project={project}
              index={index + flagshipProjects.length}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default ProjectsPage

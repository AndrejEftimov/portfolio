import ProjectCatalogItem from '../components/ProjectCatalogItem.jsx'
import { FEATURED_PROJECTS, OTHER_PROJECTS } from '../constants/projects.js'

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
            A compact project index spanning full-stack, Android, .NET, Django, integrations, and backend-focused work. Start with the flagships, then scan the rest.
          </p>
        </div>
      </section>

      <section className="projects-page__group" aria-labelledby="flagship-projects-title">
        <div className="projects-page__group-heading">
          <span className="section-label">FLAGSHIP</span>
          <h2 id="flagship-projects-title">The two that lead the story.</h2>
          <p>MyCircle and MTJ are the strongest snapshots of my current work and engineering interests.</p>
        </div>

        <div className="project-catalog project-catalog--flagship">
          {flagshipProjects.map((project, index) => (
            <ProjectCatalogItem key={project.slug} project={project} index={index} flagship />
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

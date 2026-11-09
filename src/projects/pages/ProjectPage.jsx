import { useParams } from 'react-router'
import ProjectArchitectureSection from '../components/ProjectArchitectureSection.jsx'
import ProjectDetailHero from '../components/ProjectDetailHero.jsx'
import ProjectDetailNavigation from '../components/ProjectDetailNavigation.jsx'
import ProjectFeaturesSection from '../components/ProjectFeaturesSection.jsx'
import ProjectGallerySection from '../components/ProjectGallerySection.jsx'
import ProjectHighlightsSection from '../components/ProjectHighlightsSection.jsx'
import ProjectOverviewSection from '../components/ProjectOverviewSection.jsx'
import ProjectStackSection from '../components/ProjectStackSection.jsx'
import { getProjectDetails } from '../constants/projectDetails.js'
import { PROJECTS, getProjectBySlug } from '../constants/projects.js'
import NotFoundPage from '../../shared/routing/NotFoundPage.jsx'

function ProjectPage() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)
  const details = getProjectDetails(slug)

  if (!project) {
    return <NotFoundPage />
  }

  if (!details) {
    return (
      <article className="page-shell project-detail project-detail--pending">
        <ProjectDetailHero
          project={project}
          details={{
            tagline: project.summary,
            links: {},
          }}
        />

        <section className="project-detail-pending">
          <span className="section-label">PROJECT OVERVIEW</span>
          <h2>About this project.</h2>
          <p>{project.summary}</p>
        </section>
      </article>
    )
  }

  const projectIndex = PROJECTS.findIndex((item) => item.slug === project.slug)
  const previousProject = projectIndex > 0 ? PROJECTS[projectIndex - 1] : null
  const nextProject = projectIndex < PROJECTS.length - 1 ? PROJECTS[projectIndex + 1] : null

  return (
    <article className="page-shell project-detail">
      <ProjectDetailHero details={details} project={project} />
      <ProjectOverviewSection overview={details.overview} />
      <ProjectGallerySection gallery={details.gallery} projectName={project.name} />
      <ProjectFeaturesSection features={details.features} />
      <ProjectArchitectureSection architecture={details.architecture} />
      <ProjectHighlightsSection highlights={details.highlights} />
      <ProjectStackSection technologies={project.technologies} />
      <ProjectDetailNavigation nextProject={nextProject} previousProject={previousProject} />
    </article>
  )
}

export default ProjectPage

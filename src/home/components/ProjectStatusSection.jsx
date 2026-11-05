import { PROJECTS } from '../../projects/constants/projects.js'

function ProjectStatusSection() {
  return (
    <section className="home-section status-section" id="status">
      <div className="home-section__heading home-section__heading--compact">
        <div className="section-label">08 / NOW</div>
        <h2>What is happening with the projects?</h2>
        <p>A quick snapshot of what is deployed, complete, still growing, or mainly there to help me learn.</p>
      </div>

      <div className="status-list" role="list">
        {PROJECTS.map((project) => (
          <div className="status-row" key={project.slug} role="listitem">
            <div className="status-row__project">
              <span className={`status-dot status-dot--${project.status.tone}`} aria-hidden="true" />
              <div>
                <strong>{project.shortName || project.name}</strong>
                <span>{project.type}</span>
              </div>
            </div>

            <div className="status-row__meta">
              <span className={`status-badge status-badge--${project.status.tone}`}>{project.status.label}</span>
              {project.tags?.[0] && <span className="status-note">{project.tags[0].label}</span>}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProjectStatusSection

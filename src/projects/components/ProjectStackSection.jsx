function ProjectStackSection({ technologies }) {
  return (
    <section className="project-detail-section project-detail-stack">
      <div className="project-detail-section__heading">
        <span className="section-label">06 / STACK</span>
        <h2>Built with.</h2>
      </div>

      <div className="project-detail-stack__items">
        {technologies.map((technology) => (
          <code key={technology}>{technology}</code>
        ))}
      </div>
    </section>
  )
}

export default ProjectStackSection

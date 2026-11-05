function ProjectOverviewSection({ overview }) {
  return (
    <section className="project-detail-section project-detail-overview">
      <div className="project-detail-section__heading">
        <span className="section-label">01 / OVERVIEW</span>
        <h2>The short version.</h2>
      </div>

      <div className="project-detail-overview__copy">
        {overview.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  )
}

export default ProjectOverviewSection

function ProjectArchitectureSection({ architecture }) {
  return (
    <section className="project-detail-section project-detail-architecture">
      <div className="project-detail-section__heading">
        <span className="section-label">03 / UNDER THE HOOD</span>
        <h2>How the pieces fit together.</h2>
      </div>

      <div className="project-detail-architecture__list">
        {architecture.map((item) => (
          <div className="project-detail-architecture__item" key={item.label}>
            <span>{item.label}</span>
            <p>{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProjectArchitectureSection

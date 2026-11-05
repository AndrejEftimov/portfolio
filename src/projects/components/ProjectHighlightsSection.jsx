function ProjectHighlightsSection({ highlights }) {
  return (
    <section className="project-detail-section">
      <div className="project-detail-section__heading">
        <span className="section-label">04 / THE INTERESTING BITS</span>
        <h2>The parts I’d happily talk about.</h2>
        <p>These are the engineering decisions and problem areas that made the project more than a basic CRUD application.</p>
      </div>

      <div className="project-detail-highlights">
        {highlights.map((highlight) => (
          <article className="project-detail-highlight" key={highlight.title}>
            <span>{highlight.eyebrow}</span>
            <h3>{highlight.title}</h3>
            <p>{highlight.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProjectHighlightsSection

function ProjectFeaturesSection({ features }) {
  return (
    <section className="project-detail-section">
      <div className="project-detail-section__heading">
        <span className="section-label">02 / WHAT IT DOES</span>
        <h2>Useful things first.</h2>
        <p>A quick product-level view before getting into the engineering underneath it.</p>
      </div>

      <div className="project-detail-feature-list">
        {features.map((feature, index) => (
          <article className="project-detail-feature" key={feature.title}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProjectFeaturesSection

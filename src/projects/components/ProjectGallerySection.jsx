function ProjectGallerySection({ gallery, projectName }) {
  const hasRealImages = gallery.some((item) => item.src)

  return (
    <section className="project-detail-section">
      <div className="project-detail-section__heading">
        <span className="section-label">05 / SCREENSHOTS</span>
        <h2>{hasRealImages ? 'A look around.' : 'Visual notes.'}</h2>
        <p>
          {hasRealImages
            ? `A small, curated look at ${projectName} rather than a full product tour.`
            : `A lightweight visual summary of ${projectName}'s main product surfaces and engineering areas.`}
        </p>
      </div>

      <div className="project-detail-gallery">
        {gallery.map((item) => (
          <figure
            className={`project-detail-gallery__item project-detail-gallery__item--${item.variant}${item.src ? ' project-detail-gallery__item--image' : ''}`}
            key={item.id}
          >
            {item.src ? (
              <div className="project-detail-gallery__media">
                <img
                  alt={item.alt}
                  decoding="async"
                  height={item.height}
                  loading="lazy"
                  src={item.src}
                  width={item.width}
                />
              </div>
            ) : (
              <div className="project-detail-gallery__placeholder">
                <span>{projectName}</span>
                <strong>{item.label}</strong>
              </div>
            )}
            <figcaption>
              <strong>{item.label}</strong>
              <span>{item.caption}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

export default ProjectGallerySection

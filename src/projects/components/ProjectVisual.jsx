function ProjectVisual({ project, side }) {
  const hasImage = Boolean(project.featuredImage)
  const modeClass = project.featuredImageMode ? ` project-visual--${project.featuredImageMode}` : ''

  return (
    <div
      className={`project-visual project-visual--${project.slug} project-visual--${side}${modeClass}`}
      aria-label={project.visualLabel}
    >
      <div className="project-visual__chrome" aria-hidden="true">
        <span />
        <span />
        <span />
        <span className="project-visual__path">/{project.slug}</span>
      </div>

      <div className={`project-visual__canvas${hasImage ? ' project-visual__canvas--image' : ''}`}>
        {hasImage ? (
          <img
            alt={project.visualLabel}
            className="project-visual__image"
            decoding="async"
            height={project.featuredImageHeight}
            loading="lazy"
            src={project.featuredImage}
            width={project.featuredImageWidth}
          />
        ) : (
          <>
            <div className="project-visual__grid" aria-hidden="true" />
            <div className="project-visual__mark">{project.shortName ?? project.name}</div>
            <div className="project-visual__caption">Technical profile</div>
          </>
        )}
      </div>
    </div>
  )
}

export default ProjectVisual

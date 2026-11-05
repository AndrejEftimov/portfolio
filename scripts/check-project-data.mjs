import { PROJECTS } from '../src/projects/constants/projects.js'
import { PROJECT_DETAILS } from '../src/projects/constants/projectDetails.js'
import { PROJECT_STATUSES } from '../src/projects/constants/projectStatuses.js'
import { PROJECT_TAGS } from '../src/projects/constants/projectTags.js'

const statusIds = new Set(Object.values(PROJECT_STATUSES).map((status) => status.id))
const tagIds = new Set(Object.values(PROJECT_TAGS).map((tag) => tag.id))
const slugs = new Set()
const errors = []

function hasValidImageDimensions(width, height) {
  return Number.isInteger(width) && width > 0 && Number.isInteger(height) && height > 0
}

for (const project of PROJECTS) {
  if (slugs.has(project.slug)) {
    errors.push(`Duplicate project slug: ${project.slug}`)
  }
  slugs.add(project.slug)

  if (!statusIds.has(project.status?.id)) {
    errors.push(`${project.slug}: invalid or missing status`)
  }

  if (!project.tags?.length) {
    errors.push(`${project.slug}: at least one project tag is required`)
  }

  for (const tag of project.tags ?? []) {
    if (!tagIds.has(tag?.id)) {
      errors.push(`${project.slug}: invalid project tag ${tag?.id ?? '<missing>'}`)
    }
  }

  if (project.featuredImage && !hasValidImageDimensions(project.featuredImageWidth, project.featuredImageHeight)) {
    errors.push(`${project.slug}: featured image requires positive integer width/height metadata`)
  }

  const details = PROJECT_DETAILS[project.slug]
  if (!details) {
    errors.push(`${project.slug}: missing project-detail content`)
    continue
  }

  if (details.heroImage) {
    if (!details.heroImageAlt?.trim()) {
      errors.push(`${project.slug}: hero image is missing alt text`)
    }

    if (!hasValidImageDimensions(details.heroImageWidth, details.heroImageHeight)) {
      errors.push(`${project.slug}: hero image requires positive integer width/height metadata`)
    }
  }

  for (const galleryItem of details.gallery ?? []) {
    if (!galleryItem.src) continue

    if (!galleryItem.alt?.trim()) {
      errors.push(`${project.slug}/${galleryItem.id}: screenshot is missing alt text`)
    }

    if (!hasValidImageDimensions(galleryItem.width, galleryItem.height)) {
      errors.push(`${project.slug}/${galleryItem.id}: screenshot requires positive integer width/height metadata`)
    }
  }

  for (const link of Object.values(details.links ?? {})) {
    if (!link.href?.startsWith('https://')) {
      errors.push(`${project.slug}: external project links must use HTTPS`)
    }
  }
}

if (errors.length > 0) {
  console.error('Project-data check failed:\n')
  console.error(errors.map((error) => `- ${error}`).join('\n'))
  process.exit(1)
}

console.log(`Project-data check passed for ${PROJECTS.length} projects.`)

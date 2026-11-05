export const ROUTES = Object.freeze({
  home: '/',
  projects: '/projects',
  projectPattern: '/projects/:slug',
  project: (slug) => `/projects/${slug}`,
  more: '/more',
  contact: '/contact',
  homeSection: (sectionId) => Object.freeze({ pathname: '/', hash: `#${sectionId}` }),
})

export const HOME_SECTION_IDS = Object.freeze({
  projects: 'projects',
  about: 'about',
  status: 'status',
  skills: 'skills',
  education: 'education',
})

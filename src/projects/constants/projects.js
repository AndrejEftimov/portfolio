import { assetPath } from '../../shared/constants/assets.js'
import { PROJECT_STATUSES } from './projectStatuses.js'
import { PROJECT_TAGS } from './projectTags.js'

export const FEATURED_PROJECTS = Object.freeze([
  Object.freeze({
    slug: 'mycircle',
    order: '01',
    name: 'MyCircle',
    type: 'Full-stack application',
    summary: 'A production-deployed full-stack project centered on staying organized and connected through useful everyday features.',
    status: PROJECT_STATUSES.DEPLOYED,
    tags: Object.freeze([PROJECT_TAGS.FLAGSHIP, PROJECT_TAGS.PRODUCTION_DEPLOYED]),
    technologies: Object.freeze(['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker']),
    highlights: Object.freeze(['Authentication flows', 'Tasks & events', 'Invitations & RSVPs']),
    emphasis: 'primary',
    visualLabel: 'MyCircle dashboard preview',
    featuredImage: assetPath('images/projects/mycircle/dashboard.webp'),
    featuredImageWidth: 1600,
    featuredImageHeight: 774,
  }),
  Object.freeze({
    slug: 'mtj',
    order: '02',
    name: 'Mood Tracker & Journal',
    shortName: 'MTJ',
    type: 'Android application',
    summary: 'A substantial Android app for mood tracking and journaling, now being refactored toward a cleaner feature-first architecture and stronger synchronization boundaries.',
    status: PROJECT_STATUSES.IN_DEVELOPMENT,
    tags: Object.freeze([PROJECT_TAGS.FLAGSHIP, PROJECT_TAGS.ACTIVE_REFACTOR]),
    technologies: Object.freeze(['Android', 'Java', 'Room', 'Supabase', 'Hilt']),
    highlights: Object.freeze(['Offline-first direction', 'Synchronization architecture', 'Feature-first refactor']),
    emphasis: 'primary',
    visualLabel: 'Mood Tracker & Journal home screen',
    featuredImage: assetPath('images/projects/mtj/home.webp'),
    featuredImageWidth: 875,
    featuredImageHeight: 1798,
    featuredImageMode: 'mobile',
  }),
  Object.freeze({
    slug: 'twitterclone',
    order: '03',
    name: 'TwitterClone',
    type: '.NET Core project',
    summary: 'A university-built ASP.NET Core MVC social platform exploring relational modeling, Identity, and the server-rendered .NET web stack.',
    status: PROJECT_STATUSES.COMPLETE,
    tags: Object.freeze([PROJECT_TAGS.DOT_NET, PROJECT_TAGS.UNIVERSITY_PROJECT]),
    technologies: Object.freeze(['C#', 'ASP.NET Core MVC', 'EF Core', 'SQL Server']),
    highlights: Object.freeze(['Backend development', '.NET ecosystem', 'Application architecture']),
    emphasis: 'secondary',
    visualLabel: '.NET project preview',
  }),
  Object.freeze({
    slug: 'coderev',
    order: '04',
    name: 'CodeRev',
    type: 'Code-review scheduler',
    summary: 'An internal review-slot scheduler with a Django backend and React frontend, built around clear domain rules and deliberate correctness guarantees.',
    status: PROJECT_STATUSES.MVP_COMPLETE,
    tags: Object.freeze([PROJECT_TAGS.BACKEND_TESTS_107, PROJECT_TAGS.MVP]),
    technologies: Object.freeze(['Django', 'PostgreSQL', 'React', 'JavaScript', 'Vite', 'Tailwind CSS']),
    highlights: Object.freeze(['Service-layer rules', 'Concurrency guarantees', 'Public booking flow']),
    emphasis: 'secondary',
    visualLabel: 'CodeRev landing page preview',
    featuredImage: assetPath('images/projects/coderev/landing.webp'),
    featuredImageWidth: 1600,
    featuredImageHeight: 773,
  }),
  Object.freeze({
    slug: 'orbiter',
    order: '05',
    name: 'Orbiter',
    type: 'Personal command center',
    summary: 'A Django-based personal command center exploring calendars, external integrations, development activity, and useful day-to-day signals.',
    status: PROJECT_STATUSES.IN_DEVELOPMENT,
    tags: Object.freeze([PROJECT_TAGS.LEARNING_PROJECT, PROJECT_TAGS.INTEGRATIONS]),
    technologies: Object.freeze(['Django', 'PostgreSQL', 'Tailwind CSS', 'JavaScript']),
    highlights: Object.freeze(['Google Calendar OAuth', 'Native calendar', 'Integration boundaries']),
    emphasis: 'secondary',
    visualLabel: 'Command-center preview',
  }),
])

export const OTHER_PROJECTS = Object.freeze([
  Object.freeze({
    slug: 'nefy',
    name: 'Nefy',
    type: 'ASP.NET Core learning project',
    summary: 'An ongoing C# and ASP.NET Core project focused on servers, sections, channels, messages, identity, and authorization.',
    status: PROJECT_STATUSES.IN_DEVELOPMENT,
    tags: Object.freeze([PROJECT_TAGS.LEARNING_PROJECT]),
    technologies: Object.freeze(['C#', 'ASP.NET Core', 'PostgreSQL', 'EF Core']),
  }),
])

export const PROJECTS = Object.freeze([...FEATURED_PROJECTS, ...OTHER_PROJECTS])

export function getProjectBySlug(slug) {
  return PROJECTS.find((project) => project.slug === slug)
}

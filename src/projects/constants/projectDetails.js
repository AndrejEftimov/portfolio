import { assetPath } from '../../shared/constants/assets.js'

export const PROJECT_DETAILS = Object.freeze({
  mycircle: Object.freeze({
    tagline: 'A daily planner and lightweight social organizer built to keep everyday tasks, plans, and shared events in one place.',
    overview: Object.freeze([
      'MyCircle is a full-stack web application centered on everyday organization and small-group coordination. It brings personal tasks, plans with friends, and shared events into one experience without trying to become a heavy productivity suite.',
      'It is also one of my strongest end-to-end projects: the work spans frontend product design, backend architecture, authentication, relational data, production deployment, background jobs, and the less glamorous reliability details that make a real application hold together.',
    ]),
    features: Object.freeze([
      Object.freeze({
        title: 'Account lifecycle',
        description: 'Registration, email verification and resend, login, session restoration, refresh/logout, password reset and change, plus recovery paths for expired links.',
      }),
      Object.freeze({
        title: 'Daily planning',
        description: 'Task creation and completion, date/time handling, planning views, and supporting statistics such as streak-oriented progress.',
      }),
      Object.freeze({
        title: 'Social events',
        description: 'Event creation, attendee management, invitation links, RSVP behavior, and persistent event images for shared plans.',
      }),
      Object.freeze({
        title: 'Profiles & preferences',
        description: 'User profiles, preferences, statistics, and role-aware foundations that support a more personalized application experience.',
      }),
    ]),
    architecture: Object.freeze([
      Object.freeze({
        label: 'Frontend',
        value: 'React 19 · TypeScript · Vite 7 · Tailwind CSS v4 · React Router',
      }),
      Object.freeze({
        label: 'Backend',
        value: 'Node.js · Express 5 · TypeScript · feature-oriented controllers, services, and repositories',
      }),
      Object.freeze({
        label: 'Persistence',
        value: 'PostgreSQL · Prisma ORM · explicit migrations and relational constraints',
      }),
      Object.freeze({
        label: 'Production',
        value: 'Docker Compose · Nginx · Cloudflare-backed public deployment · persistent volumes',
      }),
    ]),
    highlights: Object.freeze([
      Object.freeze({
        eyebrow: 'AUTHENTICATION',
        title: 'A complete account flow, not just login.',
        description: 'Authentication covers registration through recovery: verified email flows, session refresh, logout, password-reset behavior, rate-limited boundaries, and hashed verification/reset/refresh tokens rather than treating auth as a single endpoint.',
      }),
      Object.freeze({
        eyebrow: 'CORRECTNESS',
        title: 'Server-aware listing behavior with regression coverage.',
        description: 'A reusable listing system supports sorting and filtering while preserving authoritative server membership and ordering. The backend listing isolation suite reached 48/48 passing checks alongside frontend listing tests.',
      }),
      Object.freeze({
        eyebrow: 'PRODUCTION',
        title: 'Deployed as an actual multi-service application.',
        description: 'The production setup separates PostgreSQL, backend, and Nginx-served frontend services with health-aware Docker Compose behavior, persistent storage, and a verified public request path.',
      }),
      Object.freeze({
        eyebrow: 'BACKGROUND WORK',
        title: 'Scheduled statistics without bloating request paths.',
        description: 'Statistics listeners and daily UTC-midnight jobs keep derived application data updated outside normal request handling, keeping those responsibilities explicit and isolated.',
      }),
    ]),
    heroImage: assetPath('images/projects/mycircle/dashboard.webp'),
    heroImageAlt: 'MyCircle dashboard in dark mode',
    heroImageWidth: 1600,
    heroImageHeight: 774,
    gallery: Object.freeze([
      Object.freeze({
        id: 'dashboard',
        label: 'Dashboard',
        caption: 'A calm overview of tasks and upcoming events.',
        variant: 'wide',
        src: assetPath('images/projects/mycircle/dashboard.webp'),
        width: 1600,
        height: 774,
        alt: 'MyCircle home dashboard in dark mode',
      }),
      Object.freeze({
        id: 'tasks',
        label: 'Tasks',
        caption: 'Daily task browsing, completion, sorting, and editing.',
        variant: 'standard',
        src: assetPath('images/projects/mycircle/tasks.webp'),
        width: 1600,
        height: 774,
        alt: 'MyCircle tasks page in dark mode',
      }),
      Object.freeze({
        id: 'events',
        label: 'Events',
        caption: 'Date-range browsing and shared-event presentation.',
        variant: 'standard',
        src: assetPath('images/projects/mycircle/events.webp'),
        width: 1600,
        height: 774,
        alt: 'MyCircle events page in dark mode',
      }),
    ]),
    links: Object.freeze({}),
  }),

  mtj: Object.freeze({
    tagline: 'A native Android mood tracker and journal that is growing into a cleaner offline-first, feature-oriented application.',
    overview: Object.freeze([
      'Mood Tracker & Journal is a substantial Android application for recording moods, writing journal entries, reviewing patterns, and keeping personal wellbeing data useful over time.',
      'The project is especially important to me because it is not standing still: I am actively refactoring an older codebase toward clearer feature boundaries, a stronger repository/data-source model, and a synchronization design where local data remains authoritative.',
    ]),
    features: Object.freeze([
      Object.freeze({
        title: 'Mood tracking',
        description: 'Create, edit, browse, filter, and sort mood logs while keeping the experience focused on quick day-to-day use.',
      }),
      Object.freeze({
        title: 'Journaling',
        description: 'Write and manage journal entries alongside mood data so reflection and mood history can live in the same application.',
      }),
      Object.freeze({
        title: 'Insights',
        description: 'Review mood history and trends through dedicated insight-oriented screens rather than treating logs as isolated records.',
      }),
      Object.freeze({
        title: 'Personal settings',
        description: 'Profiles, preferences, reminders, and notification-related behavior support a more personal long-term experience.',
      }),
    ]),
    architecture: Object.freeze([
      Object.freeze({
        label: 'Application',
        value: 'Android · Java · feature-oriented packages · ViewModels · Hilt dependency injection',
      }),
      Object.freeze({
        label: 'Local data',
        value: 'Room database as the single source of truth, with DAOs and focused local data sources',
      }),
      Object.freeze({
        label: 'Remote data',
        value: 'Supabase-backed remote data sources kept separate from repository and UI responsibilities',
      }),
      Object.freeze({
        label: 'Synchronization',
        value: 'Trigger layer → SyncCoordinator → feature sync services → entity sync handlers → repositories/data sources',
      }),
    ]),
    highlights: Object.freeze([
      Object.freeze({
        eyebrow: 'REFACTORING',
        title: 'Modernizing a real codebase without throwing it away.',
        description: 'The refactor is deliberately incremental: old fragments and ViewModels are retained until their replacements are verified, behavior is preserved, and each feature slice is moved toward clearer ownership instead of doing a broad rewrite.',
      }),
      Object.freeze({
        eyebrow: 'LOCAL FIRST',
        title: 'Room owns the truth.',
        description: 'The target architecture treats Room as the application source of truth. Repositories coordinate local and remote data while the UI reads from stable local state instead of depending directly on network availability.',
      }),
      Object.freeze({
        eyebrow: 'SYNC',
        title: 'Synchronization responsibilities are intentionally layered.',
        description: 'The synchronization pipeline separates Android triggers, cross-feature coordination, feature workflows, entity-level synchronization, persistence/network access, and conflict handling so each layer has one clear job.',
      }),
      Object.freeze({
        eyebrow: 'VERIFICATION',
        title: 'Refactor work is being backed by focused tests.',
        description: 'DAO and repository instrumentation tests were introduced around the mood feature while build, lint, and Android test commands remain part of the verification loop as the architecture changes.',
      }),
    ]),
    heroImage: assetPath('images/projects/mtj/home.webp'),
    heroImageAlt: 'Mood Tracker & Journal home screen',
    heroImageWidth: 875,
    heroImageHeight: 1798,
    heroImageMode: 'mobile',
    gallery: Object.freeze([
      Object.freeze({
        id: 'home',
        label: 'Home',
        caption: 'The main navigation hub for mood, journal, and insight flows.',
        variant: 'mobile',
        src: assetPath('images/projects/mtj/home.webp'),
        width: 875,
        height: 1798,
        alt: 'Mood Tracker & Journal home screen',
      }),
      Object.freeze({
        id: 'moods',
        label: 'Moods',
        caption: 'Mood history and day-to-day tracking.',
        variant: 'mobile',
        src: assetPath('images/projects/mtj/moods.webp'),
        width: 448,
        height: 921,
        alt: 'Mood Tracker & Journal moods screen',
      }),
      Object.freeze({
        id: 'journals',
        label: 'Journals',
        caption: 'Personal journal entries alongside mood data.',
        variant: 'mobile',
        src: assetPath('images/projects/mtj/journals.webp'),
        width: 582,
        height: 1197,
        alt: 'Mood Tracker & Journal journals screen',
      }),
      Object.freeze({
        id: 'insights',
        label: 'Insights',
        caption: 'Statistics and trend-oriented reflection.',
        variant: 'mobile',
        src: assetPath('images/projects/mtj/insights.webp'),
        width: 560,
        height: 1150,
        alt: 'Mood Tracker & Journal insights screen',
      }),
    ]),
    links: Object.freeze({}),
  }),

  twitterclone: Object.freeze({
    tagline: 'A server-side social platform project built with ASP.NET Core MVC to explore relational modeling and the .NET web stack.',
    overview: Object.freeze([
      'TwitterClone is a 2022 university project from a server-side web application development course. It recreates the core shape of a social network through an ASP.NET Core MVC application rather than a client-heavy SPA.',
      'The project is one of the clearest examples of my C#/.NET work: it combines MVC controllers and views, ASP.NET Core Identity, Entity Framework Core, SQL Server, and a relational model with several user-to-user and user-to-content relationships.',
    ]),
    features: Object.freeze([
      Object.freeze({
        title: 'Posts & replies',
        description: 'Users can create social content and reply to existing posts through server-rendered MVC workflows.',
      }),
      Object.freeze({
        title: 'Likes & follows',
        description: 'Social relationships include likes and follower/following behavior modeled through relational data.',
      }),
      Object.freeze({
        title: 'Lists',
        description: 'Users can work with lists, list memberships, and list followers as additional social organization features.',
      }),
      Object.freeze({
        title: 'Search & user flows',
        description: 'Dedicated controller areas cover posts, users, followings, lists, and search rather than concentrating the application into one controller.',
      }),
    ]),
    architecture: Object.freeze([
      Object.freeze({
        label: 'Web stack',
        value: 'C# · ASP.NET Core MVC · .NET 6 · server-rendered views',
      }),
      Object.freeze({
        label: 'Persistence',
        value: 'Entity Framework Core · SQL Server · migrations · LINQ-based data access',
      }),
      Object.freeze({
        label: 'Identity',
        value: 'ASP.NET Core Identity for authenticated user accounts',
      }),
      Object.freeze({
        label: 'Domain model',
        value: 'Posts, replies, users, likes, followers, lists, memberships, and list followers with explicit relational mappings',
      }),
    ]),
    highlights: Object.freeze([
      Object.freeze({
        eyebrow: 'RELATIONAL MODELING',
        title: 'Social features made the data model the interesting part.',
        description: 'Followers, likes, replies, and list memberships require more than simple one-table CRUD. The project models those relationships explicitly through EF Core and configures relationship/delete behavior deliberately.',
      }),
      Object.freeze({
        eyebrow: 'MVC',
        title: 'A complete server-side web application.',
        description: 'The application uses ASP.NET Core MVC controllers and views for the full request/response flow, which made it a practical foundation for understanding server-side routing, model binding, persistence, and rendering in .NET.',
      }),
      Object.freeze({
        eyebrow: 'IDENTITY',
        title: 'Authentication is part of the application model.',
        description: 'ASP.NET Core Identity provides the authenticated-user foundation that the social features depend on, rather than treating users as anonymous records.',
      }),
      Object.freeze({
        eyebrow: 'FOUNDATION',
        title: 'An early project that still represents useful .NET fundamentals.',
        description: 'Although it began as university work, TwitterClone remains a useful portfolio piece because it demonstrates practical C#, OOP, MVC, EF Core, LINQ, SQL Server, and relational application design in one project.',
      }),
    ]),
    gallery: Object.freeze([
      Object.freeze({ id: 'feed', label: 'Social feed', caption: 'Server-rendered post and reply experience', variant: 'wide' }),
      Object.freeze({ id: 'profiles', label: 'Users & followings', caption: 'User-oriented social flows', variant: 'standard' }),
      Object.freeze({ id: 'lists', label: 'Lists', caption: 'List memberships and social organization', variant: 'standard' }),
    ]),
    links: Object.freeze({
      github: Object.freeze({ label: 'View repository', href: 'https://github.com/AndrejEftimov/TwitterClone' }),
    }),
  }),

  coderev: Object.freeze({
    tagline: 'A focused code-review scheduling tool built around clear booking rules, concurrency guarantees, and a polished host/public workflow.',
    overview: Object.freeze([
      'CodeRev is an internal team code-review scheduler: a host creates review slots, and developers book an available slot with the topic they want reviewed.',
      'The product scope is intentionally small, which made it a good place to focus on architecture quality, API boundaries, database correctness, testing, and a clean frontend rather than hiding behind feature volume.',
    ]),
    features: Object.freeze([
      Object.freeze({
        title: 'Host scheduling',
        description: 'Hosts can list, create, and delete review slots with explicit duration and date/time rules.',
      }),
      Object.freeze({
        title: 'Public booking',
        description: 'Developers can book an available review slot without entering a host-only workflow.',
      }),
      Object.freeze({
        title: 'Clear conflict behavior',
        description: 'The API distinguishes invalid, gone, missing, and already-booked states instead of flattening them into generic failures.',
      }),
      Object.freeze({
        title: 'Responsive frontend',
        description: 'Landing, host, public booking, create-slot, pagination, and light/dark experiences share one compact visual system.',
      }),
    ]),
    architecture: Object.freeze([
      Object.freeze({
        label: 'Backend',
        value: 'Python · Django · service layer · custom QuerySets · focused API boundaries',
      }),
      Object.freeze({
        label: 'Database',
        value: 'PostgreSQL · service-level overlap checks plus a database exclusion constraint as the final guarantee',
      }),
      Object.freeze({
        label: 'Frontend',
        value: 'React · JavaScript · Vite · Tailwind CSS v4 · feature-oriented structure',
      }),
      Object.freeze({
        label: 'Verification',
        value: '107 backend tests passing at the finalized MVP checkpoint, plus frontend lint/build verification',
      }),
    ]),
    highlights: Object.freeze([
      Object.freeze({
        eyebrow: 'CONCURRENCY',
        title: 'Overlap protection exists at two layers.',
        description: 'A service-level overlap check gives useful application behavior, while a PostgreSQL exclusion constraint remains the final correctness guarantee when concurrent requests race.',
      }),
      Object.freeze({
        eyebrow: 'BOUNDARIES',
        title: 'Host and public responsibilities stay visibly separate.',
        description: 'Host endpoints own slot management while public booking has its own narrow endpoint and error model, keeping permissions and behavior easy to reason about.',
      }),
      Object.freeze({
        eyebrow: 'SHARED LOGIC',
        title: 'Cross-feature utilities live outside the scheduling domain.',
        description: 'Generic time, validation, pagination, and CSRF helpers were extracted into shared/core areas rather than leaving reusable behavior buried inside the scheduling feature.',
      }),
      Object.freeze({
        eyebrow: 'TESTING',
        title: 'The project finished with a strong regression safety net.',
        description: 'The backend test suite grew incrementally to 107 passing tests, covering the domain rules and API behavior that matter most to the booking workflow.',
      }),
    ]),
    heroImage: assetPath('images/projects/coderev/landing.webp'),
    heroImageAlt: 'CodeRev landing page in light mode',
    heroImageWidth: 1600,
    heroImageHeight: 773,
    gallery: Object.freeze([
      Object.freeze({
        id: 'landing',
        label: 'Landing',
        caption: 'Product introduction and the two primary workflows.',
        variant: 'wide',
        src: assetPath('images/projects/coderev/landing.webp'),
        width: 1600,
        height: 773,
        alt: 'CodeRev landing page in light mode',
      }),
      Object.freeze({
        id: 'public',
        label: 'Public slots',
        caption: 'Developer-facing availability and booking states.',
        variant: 'standard',
        src: assetPath('images/projects/coderev/public-slots.webp'),
        width: 1600,
        height: 773,
        alt: 'CodeRev public slots page in dark mode',
      }),
      Object.freeze({
        id: 'host-dark',
        label: 'Host workspace',
        caption: 'Review-slot management and booking details in dark mode.',
        variant: 'standard',
        src: assetPath('images/projects/coderev/host-dark.webp'),
        width: 1600,
        height: 773,
        alt: 'CodeRev host workspace in dark mode',
      }),
      Object.freeze({
        id: 'host-light',
        label: 'Theme support',
        caption: 'The same host workflow in the light theme.',
        variant: 'wide',
        src: assetPath('images/projects/coderev/host-light.webp'),
        width: 1600,
        height: 773,
        alt: 'CodeRev host workspace in light mode',
      }),
    ]),
    links: Object.freeze({}),
  }),

  orbiter: Object.freeze({
    tagline: 'A personal command center for bringing schedule, development activity, and useful service signals into one calm dashboard.',
    overview: Object.freeze([
      'Orbiter is a private personal command center built with Django. Its goal is simple: open one place and quickly understand what is coming up, what needs attention, what I have been working on, and whether important personal services are healthy.',
      'The current implementation is centered on the calendar vertical slice and Google Calendar integration, with GitHub activity and MyCircle health designed as additional product pillars rather than unrelated widgets.',
    ]),
    features: Object.freeze([
      Object.freeze({
        title: 'Native calendar',
        description: 'Create, edit, delete, and browse local events with validation and safe return navigation.',
      }),
      Object.freeze({
        title: 'Google Calendar',
        description: 'Read-only Google Calendar OAuth integration brings external schedule data into the same product direction.',
      }),
      Object.freeze({
        title: 'Next up',
        description: 'The dashboard prioritizes an immediate “Next Up / Right Now” view before showing broader upcoming information.',
      }),
      Object.freeze({
        title: 'Integration-ready dashboard',
        description: 'GitHub activity and MyCircle health are planned as domain-owned sections within the fixed command-center composition.',
      }),
    ]),
    architecture: Object.freeze([
      Object.freeze({
        label: 'Application',
        value: 'Python · Django modular monolith · PostgreSQL · Django Templates',
      }),
      Object.freeze({
        label: 'Frontend',
        value: 'Tailwind CSS v4 · vanilla JavaScript · shared semantic theme and component CSS',
      }),
      Object.freeze({
        label: 'Integrations',
        value: 'Top-level integrations/google provider boundary with calendar-domain orchestration kept inside Calendars',
      }),
      Object.freeze({
        label: 'Calendar model',
        value: 'Native CRUD plus a planned local mirror of read-only external events with source/provider identity kept distinct',
      }),
    ]),
    highlights: Object.freeze([
      Object.freeze({
        eyebrow: 'PRODUCT SHAPE',
        title: 'A command center, not a generic widget builder.',
        description: 'The dashboard is deliberately opinionated and fixed. Domain areas own their content while the dashboard owns composition, which keeps the product focused on useful synthesis instead of customization infrastructure.',
      }),
      Object.freeze({
        eyebrow: 'INTEGRATIONS',
        title: 'Google code is separated from calendar-domain behavior.',
        description: 'Reusable Google OAuth and provider concerns live under a top-level integration boundary, while the Calendars domain remains responsible for mapping provider data into Orbiter behavior and persistence.',
      }),
      Object.freeze({
        eyebrow: 'CALENDAR',
        title: 'Native calendar behavior is already a complete vertical slice.',
        description: 'Event CRUD, UUID-based lookup, validation, a full event list, dashboard composition, source-ready presentation, and safe reusable return navigation were completed and manually verified before expanding the external integration.',
      }),
      Object.freeze({
        eyebrow: 'SCOPE',
        title: 'Infrastructure is added only when a real requirement earns it.',
        description: 'The project deliberately avoids microservices, a generic automation engine, and premature Celery/Redis adoption. The next mechanism is chosen from the actual synchronization requirements rather than from architectural fashion.',
      }),
    ]),
    gallery: Object.freeze([
      Object.freeze({ id: 'dashboard', label: 'Command center', caption: 'Next-up and upcoming schedule composition', variant: 'wide' }),
      Object.freeze({ id: 'calendar', label: 'Calendar', caption: 'Native event browsing and management', variant: 'standard' }),
      Object.freeze({ id: 'landing', label: 'Landing', caption: 'A lightweight introduction to the product pillars', variant: 'standard' }),
    ]),
    links: Object.freeze({}),
  }),

  nefy: Object.freeze({
    tagline: 'A C# and ASP.NET Core learning project for exploring identity, authorization, relational modeling, and a Discord-like communication domain.',
    overview: Object.freeze([
      'Nefy is an ongoing ASP.NET Core learning project built around a communication model of servers, sections, channels, and messages. The goal is to deepen my .NET backend skills through a product domain with real relationships and authorization requirements.',
      'It is intentionally presented as a learning project rather than a finished product. The current work has focused on the foundation: PostgreSQL/EF Core connectivity, ASP.NET Core Identity, authentication and authorization setup, and preparing the first domain model and migration.',
    ]),
    features: Object.freeze([
      Object.freeze({
        title: 'Server hierarchy',
        description: 'The product model is designed around servers containing sections and channels, which will eventually own message flows.',
      }),
      Object.freeze({
        title: 'Private/invite direction',
        description: 'Private access and invite-oriented behavior are part of the intended first-version product scope.',
      }),
      Object.freeze({
        title: 'Identity foundation',
        description: 'ASP.NET Core Identity is integrated so authentication, authorization, and roles can become first-class product rules.',
      }),
      Object.freeze({
        title: 'Database foundation',
        description: 'PostgreSQL and EF Core are connected and verified, with migrations forming the next step as domain entities are introduced.',
      }),
    ]),
    architecture: Object.freeze([
      Object.freeze({
        label: 'Backend',
        value: 'ASP.NET Core 8 · C# · Identity · authorization',
      }),
      Object.freeze({
        label: 'Persistence',
        value: 'PostgreSQL · Entity Framework Core · user-secrets based local connection configuration',
      }),
      Object.freeze({
        label: 'Frontend direction',
        value: 'Vite-based frontend planned alongside the ASP.NET Core backend',
      }),
      Object.freeze({
        label: 'Current checkpoint',
        value: 'Identity integrated; first domain model and migration are the next implementation milestone',
      }),
    ]),
    highlights: Object.freeze([
      Object.freeze({
        eyebrow: 'LEARNING',
        title: 'The project is intentionally being used to learn the .NET ecosystem properly.',
        description: 'Rather than hiding behind a tiny demo, Nefy uses a real product domain to practice EF Core, Identity, authorization, relational modeling, and application structure together.',
      }),
      Object.freeze({
        eyebrow: 'IDENTITY',
        title: 'Authentication and authorization are part of the foundation.',
        description: 'Identity is being introduced before the communication domain grows, so future server/channel permissions can build on an explicit security model instead of being bolted on afterward.',
      }),
      Object.freeze({
        eyebrow: 'PERSISTENCE',
        title: 'The database path is already verified.',
        description: 'PostgreSQL connectivity through EF Core is configured using local secret management, with a database-check endpoint used to verify the environment before domain modeling proceeds.',
      }),
      Object.freeze({
        eyebrow: 'SCOPE',
        title: 'Small first version, expandable domain.',
        description: 'The initial scope stays focused on servers, sections, channels, messages, private/invite behavior, and roles so the architecture can grow from a coherent base rather than starting with too many collaboration features.',
      }),
    ]),
    gallery: Object.freeze([
      Object.freeze({ id: 'foundation', label: 'Foundation', caption: 'ASP.NET Core and Identity setup', variant: 'wide' }),
      Object.freeze({ id: 'domain', label: 'Domain direction', caption: 'Servers, sections, channels, and messages', variant: 'standard' }),
      Object.freeze({ id: 'database', label: 'Persistence', caption: 'PostgreSQL and EF Core foundation', variant: 'standard' }),
    ]),
    links: Object.freeze({}),
  }),
})

export function getProjectDetails(slug) {
  return PROJECT_DETAILS[slug]
}

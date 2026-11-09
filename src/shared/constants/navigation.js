import { ROUTES } from '../routing/routes.js'

export const NAV_ITEMS = Object.freeze([
  Object.freeze({ label: 'Home', to: ROUTES.home, end: true }),
  Object.freeze({ label: 'Projects', to: ROUTES.projects }),
  Object.freeze({ label: 'Beyond Code', to: ROUTES.more }),
  Object.freeze({ label: 'Contact', to: ROUTES.contact }),
])

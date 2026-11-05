import { Link } from 'react-router'
import { ROUTES } from './routes.js'

function NotFoundPage() {
  return (
    <section className="page-placeholder">
      <div className="section-label">404 / NOT FOUND</div>
      <h1>This page wandered off.</h1>
      <p>The route does not exist, but the portfolio is still right where you left it.</p>
      <Link className="text-link" to={ROUTES.home}>Back home →</Link>
    </section>
  )
}

export default NotFoundPage

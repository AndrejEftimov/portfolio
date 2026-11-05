import { ArrowUpRight, Code2, Contact, Mail } from 'lucide-react'
import { Link } from 'react-router'
import { ROUTES } from '../../shared/routing/routes.js'

function ContactPreviewSection() {
  return (
    <section className="home-section contact-preview" aria-labelledby="contact-preview-title">
      <div>
        <div className="section-label">11 / SAY HELLO</div>
        <h2 id="contact-preview-title">Let&apos;s talk.</h2>
        <p>
          Whether it is a software role, an interesting project, or just a good technical conversation, I am
          always happy to connect.
        </p>
      </div>

      <div className="contact-preview__actions">
        <Link className="button button--primary" to={ROUTES.contact}>
          Contact me
          <ArrowUpRight aria-hidden="true" size={17} />
        </Link>

        <div className="contact-preview__channels" aria-label="Contact channels available on the contact page">
          <span><Code2 aria-hidden="true" size={16} /> GitHub</span>
          <span><Contact aria-hidden="true" size={16} /> LinkedIn</span>
          <span><Mail aria-hidden="true" size={16} /> Email</span>
        </div>
      </div>
    </section>
  )
}

export default ContactPreviewSection

import { ArrowUpRight, Code2, Contact, Mail, MapPin } from 'lucide-react'
import { APP } from '../../shared/constants/app.js'
import { CONTACT_CHANNELS, CONTACT_PAGE } from '../constants/contact.js'

const CHANNEL_ICONS = {
  github: Code2,
  linkedin: Contact,
  email: Mail,
}

function ContactPage() {
  return (
    <div className="content-page contact-page">
      <section className="content-page__hero contact-page__hero">
        <div className="section-label">{CONTACT_PAGE.eyebrow}</div>
        <h1>{CONTACT_PAGE.title}</h1>
        <p>{CONTACT_PAGE.intro}</p>
      </section>

      <section className="contact-page__channels" aria-labelledby="contact-channels-title">
        <div className="content-page__section-heading">
          <div className="section-label">DIRECT / SIMPLE</div>
          <h2 id="contact-channels-title">Find me here.</h2>
          <p>{CONTACT_PAGE.note}</p>
        </div>

        <div className="contact-page__channel-list">
          {CONTACT_CHANNELS.map((channel) => {
            const Icon = CHANNEL_ICONS[channel.id]

            return (
              <a
                className="contact-channel"
                href={channel.href}
                key={channel.id}
                rel={channel.external ? 'noopener noreferrer' : undefined}
                target={channel.external ? '_blank' : undefined}
              >
                <Icon aria-hidden="true" size={18} />
                <div>
                  <span>{channel.label}</span>
                  <strong>{channel.value}</strong>
                </div>
                <ArrowUpRight aria-hidden="true" className="contact-channel__arrow" size={17} />
              </a>
            )
          })}
        </div>
      </section>

      <section className="contact-page__location" aria-label="Location">
        <MapPin aria-hidden="true" size={19} />
        <div>
          <span>Based in</span>
          <strong>{APP.location}</strong>
        </div>
      </section>
    </div>
  )
}

export default ContactPage

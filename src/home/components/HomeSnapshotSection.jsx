import { GraduationCap } from 'lucide-react'
import { PROJECTS } from '../../projects/constants/projects.js'
import { EDUCATION } from '../constants/education.js'
import { SKILL_GROUPS } from '../constants/skills.js'

function HomeSnapshotSection() {
  return (
    <section className="home-section home-snapshot" aria-labelledby="home-snapshot-title">
      <div className="home-snapshot__heading">
        <div className="section-label">08 / SNAPSHOT</div>
        <h2 id="home-snapshot-title">What I work with, and where things stand.</h2>
      </div>

      <div className="home-snapshot__grid">
        <section className="home-snapshot__panel" id="status" aria-labelledby="snapshot-status-title">
          <div className="home-snapshot__panel-heading">
            <span className="section-label">PROJECT STATUS</span>
            <h3 id="snapshot-status-title">Current work</h3>
          </div>

          <div className="home-snapshot__status-list" role="list">
            {PROJECTS.map((project) => (
              <div className="home-snapshot__status-row" key={project.slug} role="listitem">
                <span className={`status-dot status-dot--${project.status.tone}`} aria-hidden="true" />
                <strong>{project.shortName || project.name}</strong>
                <span>{project.status.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="home-snapshot__panel" id="skills" aria-labelledby="snapshot-skills-title">
          <div className="home-snapshot__panel-heading">
            <span className="section-label">MAIN STACK</span>
            <h3 id="snapshot-skills-title">Tools I build with</h3>
          </div>

          <div className="home-snapshot__skills">
            {SKILL_GROUPS.map((group) => (
              <div className="home-snapshot__skill-row" key={group.label}>
                <strong>{group.label}</strong>
                <span>{group.items.join(' · ')}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="home-snapshot__education" id="education" aria-labelledby="snapshot-education-title">
          <div className="home-snapshot__education-icon" aria-hidden="true">
            <GraduationCap size={20} strokeWidth={1.8} />
          </div>
          <div>
            <span className="section-label">EDUCATION</span>
            <h3 id="snapshot-education-title">{EDUCATION.degree}</h3>
            <p>{EDUCATION.university} · {EDUCATION.faculty}</p>
          </div>
        </section>
      </div>
    </section>
  )
}

export default HomeSnapshotSection

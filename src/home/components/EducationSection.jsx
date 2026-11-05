import { GraduationCap } from 'lucide-react'
import { EDUCATION } from '../constants/education.js'

function EducationSection() {
  return (
    <section className="home-section education-section" id="education">
      <div className="home-section__heading home-section__heading--compact">
        <div className="section-label">10 / EDUCATION</div>
        <h2>The foundation behind the projects.</h2>
      </div>

      <div className="education-entry">
        <div className="education-entry__icon" aria-hidden="true">
          <GraduationCap size={22} strokeWidth={1.8} />
        </div>
        <div>
          <span className="education-entry__meta">{EDUCATION.university}</span>
          <h3>{EDUCATION.degree}</h3>
          <p>{EDUCATION.faculty}</p>
        </div>
      </div>
    </section>
  )
}

export default EducationSection

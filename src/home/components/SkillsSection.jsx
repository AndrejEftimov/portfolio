import { SKILL_GROUPS } from '../constants/skills.js'

function SkillsSection() {
  return (
    <section className="home-section skills-section" id="skills">
      <div className="home-section__heading">
        <div className="section-label">09 / MAIN STACK</div>
        <h2>Tools I actually build with.</h2>
        <p>
          A compact view of the technologies that show up across my projects. No percentage bars — the projects
          themselves do a better job of showing where each tool fits.
        </p>
      </div>

      <div className="skills-grid">
        {SKILL_GROUPS.map((group) => (
          <article className="skill-group" key={group.label}>
            <h3>{group.label}</h3>
            <div className="skill-group__items">
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <p className="skills-note">
        I am still learning, experimenting, and adding new tools when a project gives me a good reason to.
      </p>
    </section>
  )
}

export default SkillsSection

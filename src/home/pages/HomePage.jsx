import AboutSection from '../components/AboutSection.jsx'
import ContactPreviewSection from '../components/ContactPreviewSection.jsx'
import EducationSection from '../components/EducationSection.jsx'
import FeaturedProjectsSection from '../components/FeaturedProjectsSection.jsx'
import HeroSection from '../components/HeroSection.jsx'
import ProjectStatusSection from '../components/ProjectStatusSection.jsx'
import SkillsSection from '../components/SkillsSection.jsx'

function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProjectsSection />
      <AboutSection />
      <ProjectStatusSection />
      <SkillsSection />
      <EducationSection />
      <ContactPreviewSection />
    </>
  )
}

export default HomePage

import AboutSection from '../components/AboutSection.jsx'
import ContactPreviewSection from '../components/ContactPreviewSection.jsx'
import FeaturedProjectsSection from '../components/FeaturedProjectsSection.jsx'
import HeroSection from '../components/HeroSection.jsx'
import HomeSnapshotSection from '../components/HomeSnapshotSection.jsx'

function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProjectsSection />
      <AboutSection />
      <HomeSnapshotSection />
      <ContactPreviewSection />
    </>
  )
}

export default HomePage

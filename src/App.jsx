import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'
import ContactSection from './components/ContactSection'
import AboutSection from './components/AboutSection'
import ExperienceSection from './components/ExperienceSection'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1d23] to-[#24262d] text-white font-sans">
      <Navbar />
      <main className="flex flex-col gap-24 pt-24">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  )
}
export default App
import { CaseStudyModal } from './components/case-study/CaseStudyModal'
import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { About } from './components/sections/About'
import { Hero } from './components/sections/Hero'
import { Process } from './components/sections/Process'
import { SakugaChapters } from './components/sections/SakugaChapters'
import { SkillsMatrix } from './components/sections/SkillsMatrix'
import { Work } from './components/sections/Work'
import { projects } from './data/projects'
import { useHashCaseStudy } from './hooks/useHashCaseStudy'

export default function App() {
  const { slug, close } = useHashCaseStudy()
  const activeProject = projects.find((project) => project.slug === slug) ?? null

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SakugaChapters />
        <Work />
        <SkillsMatrix />
        <Process />
        <About />
      </main>
      <Footer />
      <CaseStudyModal project={activeProject} onClose={close} />
    </>
  )
}

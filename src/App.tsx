import './styles/App.scss'
import IntroOverlay from './components/IntroOverlay'
import CoverPage from './components/CoverPage'
import ProjectList from './components/ProjectList'
import Footer from './components/Footer'
import useAnimations from './hooks/useAnimations'
import { useRef } from 'react'

function App (): JSX.Element {
  const { animationCompleted, coverCompleted } = useAnimations()
  const projectsRef = useRef<HTMLDivElement>(null)

  const scrollToProjects = (): void => {
    if (projectsRef.current != null) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <div className='coverPage'>
        {!animationCompleted && <IntroOverlay />}
        <CoverPage scrollToProjects={scrollToProjects} />
      </div>
      {coverCompleted && (
        <>
          <div ref={projectsRef} />
          <ProjectList />
          <Footer />
        </>
      )}
    </>
  )
}

export default App

import './styles/App.scss'
import IntroOverlay from './components/IntroOverlay'
import { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import CoverPage from './components/CoverPage'
import ProjectList from './components/ProjectList'

function App () {
  const [animationCompleted, setAnimationCompleted] = useState(false)

  const completeAnimation = () => {
    setAnimationCompleted(true)
  }

  useEffect(() => {
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)

    gsap.registerPlugin(ScrollTrigger)

    const homeAnimation = (animation) => {
      const tl = gsap.timeline()

      tl.to('body', { duration: 0, css: { visibility: 'visible' } })
        .from('.ball', {
          duration: 2,
          y: '-100vh',
          ease: 'bounce.out'
        })
        .to('.ball', {
          duration: 1,
          scale: 25,
          ease: 'power4.out',
          onComplete: animation
        })
        .from('.after-animation', {
          duration: 0.8,
          opacity: 0,
          ease: 'power4.out'
        })
        .from('.pfp-image', {
          duration: 0.5,
          y: 100,
          opacity: 0,
          ease: 'power3.out'
        })
        .from('.title', {
          duration: 0.8,
          y: 100,
          opacity: 0,
          delay: 0.2,
          ease: 'power4.out'
        })
        .from('.job-title', {
          duration: 0.8,
          y: 100,
          opacity: 0,
          ease: 'power4.out'
        })
        .from('.scroll-indicator', {
          duration: 0.5,
          y: 100,
          opacity: 0,
          ease: 'power3.out'
        })
    }

    homeAnimation(completeAnimation)
  }, [])

  return (
    <>
      <div className='coverPage'>
        {animationCompleted === false && <IntroOverlay />}
        <CoverPage />
      </div>
      <ProjectList />
    </>
  )
}

export default App

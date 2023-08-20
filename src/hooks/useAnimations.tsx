import { useState, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

interface AnimationReturn {
  animationCompleted: boolean
  coverCompleted: boolean
}

const useAnimations = (): AnimationReturn => {
  const [animationCompleted, setAnimationCompleted] = useState(false)
  const [coverCompleted, setCoverCompleted] = useState(false)

  const completeAnimation = (): void => {
    setAnimationCompleted(true)
  }

  const completeCover = (): void => {
    setCoverCompleted(true)
  }

  useEffect(() => {
    // Inner Page height for mobile devices
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)

    // GSAP Animation
    gsap.registerPlugin(ScrollTrigger)
    const tl = gsap.timeline()

    const homeAnimation = (ballEnded: GSAPCallback, allEnded: GSAPCallback): void => {
      tl.from('.ball', {
        duration: 2,
        y: '-100vh',
        ease: 'bounce.out'
      })
        .to('.ball', {
          duration: 1,
          scale: 30,
          ease: 'power3.out',
          onComplete: ballEnded
        })
        .from('.after-animation', {
          duration: 0.8,
          opacity: 0,
          ease: 'power4.out'
        })
        .from('.pfp-container', {
          duration: 0.5,
          y: 100,
          opacity: 0,
          ease: 'power3.out'
        }, '-=0.5')
        .from('.title', {
          duration: 0.8,
          y: 100,
          opacity: 0,
          delay: 0.2,
          ease: 'power4.out'
        }, '-=0.2')
        .from('.job-title', {
          duration: 0.8,
          y: 100,
          opacity: 0,
          ease: 'power4.out'
        }, '-=0.4')
        .from('.color-image', {
          duration: 0.5,
          opacity: 0,
          ease: 'power3.out',
          onComplete: allEnded
        })
        .from('.scroll-indicator', {
          duration: 0.5,
          y: 100,
          opacity: 0,
          ease: 'power3.out'
        }, '-=0.2')
    }

    homeAnimation(completeAnimation, completeCover)
  }, [])

  useEffect(() => {
    if (!coverCompleted) return
    const projects: Element[] = gsap.utils.toArray('.project')
    const mediaQuery = window.matchMedia('(min-width: 967px)')
    // Projects scroll animation
    if (mediaQuery.matches) {
      projects.forEach((project) => {
        const tlProject = gsap.timeline({
          scrollTrigger: {
            trigger: project,
            start: 'top center',
            end: 'center center'
          }
        })
        const projectImage = project.querySelector('img')
        const projectInfo = project.querySelector('.project-info')

        tlProject
          .from(projectImage, {
            x: -300,
            opacity: 0,
            duration: 0.5
          })
          .from(projectInfo, {
            x: 300,
            opacity: 0,
            duration: 0.5
          }, '-=0.4')
      })
    } else {
      // Mobile scroll animations
      projects.forEach((project) => {
        const tlProject = gsap.timeline({
          scrollTrigger: {
            trigger: project,
            start: 'top center',
            end: 'center center'
          }
        })
        const projectImage = project.querySelector('img')
        const projectInfo = project.querySelector('.project-info')

        tlProject
          .from(projectImage, {
            y: 100,
            opacity: 0
          })
          .from(projectInfo, {
            y: 100,
            opacity: 0
          })
      })
    }

    // Footer animation
    const tlFooter = gsap.timeline({
      scrollTrigger: {
        trigger: 'footer',
        start: 'top center',
        end: 'top top',
        scrub: true
      }
    })

    tlFooter
      .from('footer h2', {
        y: 100,
        opacity: 0,
        duration: 0.6
      })
      .from('footer .footer-links', {
        y: 100,
        opacity: 0,
        duration: 0.6
      })
  }, [coverCompleted])

  return { animationCompleted, coverCompleted }
}

export default useAnimations

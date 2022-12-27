import "./styles/App.scss";
import IntroOverlay from "./components/IntroOverlay";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { MdKeyboardArrowDown } from 'react-icons/md'

function App() {
  const [animationCompleted, setAnimationCompleted] = useState(false);

  const completeAnimation = () => {
    setAnimationCompleted(true);
  };

  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    gsap.registerPlugin(ScrollTrigger);

    const homeAnimation = (animation) => {
      let tl = gsap.timeline();

      tl.to("body", { duration: 0, css: { visibility: "visible" } })
        .from(".ball", {
          duration: 2,
          y: "-100vh",
          ease: "bounce.out",
        })
        .to(".ball", {
          duration: 1,
          scale: 25,
          ease: "power4.out",
          onComplete: animation,
        })
        .from(".after-animation", {
          duration: 0.8,
          opacity: 0,
          ease: "power4.out",
        })
        .from(".pfp-image", {
          duration: 0.5,
          y: 100,
          opacity: 0,
          ease: "power3.out",
        })
        .from(".title", {
          duration: 0.8,
          y: 100,
          opacity: 0,
          delay: 0.2,
          ease: "power4.out",
        })
        .from(".job-title", {
          duration: 0.8,
          y: 100,
          opacity: 0,
          ease: "power4.out",
        })
        .from(".scroll-indicator", {
          duration: 0.5,
          y: 100,
          opacity: 0,
          ease: "power3.out",
        });
    };

    homeAnimation(completeAnimation)

  }, []);

  return (
    <div className="container">
      {animationCompleted === false && <IntroOverlay />}
      <div className="after-animation">
        <nav>
          <div className="space-between">
            <div className="logo">NL</div>
            <ul className="nav-list">
              <li>
                <a href="https://drive.google.com/file/d/1vjLdRDYskwlU_6LOFNkzYgd2MPZVYC8x/view?usp=share_link" target="_blank">
                  Resume
                </a>
              </li>
              <li>
                <a href="https://github.com/noel-lopez" target="_blank" className="nav-icon">
                  <BsGithub />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/nlopezmo/" target="_blank" className="nav-icon">
                  <BsLinkedin />
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <main className="main">
          <div className="cta">
            <h1 className="title">
              I create <span className="playful">playful</span> experiences.
            </h1>
            <img
              src="/images/pfp.png"
              alt="My pfp"
              className="pfp-image"
            />
          </div>
          <h3 className="job-title">
            Noel Lopez / Software Developer
          </h3>
          <button className="scroll-indicator">
            <span>Projects</span>
            <MdKeyboardArrowDown />
          </button>
        </main>
      </div>
    </div>
  );
}

export default App;

import { useEffect, useRef, useState } from 'react'
import './Hero.css'
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaFigma } from 'react-icons/fa'
import { SiVite } from 'react-icons/si'

function Hero() {
  const videoContainerRef = useRef(null)
  const [isVideoVisible, setIsVideoVisible] = useState(true)

  useEffect(() => {
    const videoContainer = videoContainerRef.current

    if (!videoContainer) {
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsVideoVisible(entry.isIntersecting),
      { threshold: 0.35 },
    )

    observer.observe(videoContainer)

    return () => observer.disconnect()
  }, [])

  return (
    <main className="app-main">
      <section id="inicio" className="hero" aria-labelledby="hero-title">
        <div className="hero__grid">
          <div className="hero__left">
            <p className="hero__kicker">
              HOLA, SOY <span>RYAN RIVERA</span>
            </p>

            <h1 id="hero-title" className="hero__title">
              <span>Frontend</span>
              <span>Developer</span>
            </h1>

            <p className="hero__subtitle">&amp; UI/UX Designer</p>

            <div className="hero__actions" aria-label="Acciones principales">
              <a href="#proyectos" className="hero__button hero__button--primary">
                VER PROYECTOS <span aria-hidden="true">-&gt;</span>
              </a>
              <a href="#contacto" className="hero__button hero__button--ghost">
                CONTACTAME <span aria-hidden="true">/</span>
              </a>
            </div>

            <div className="hero__stack" aria-label="Tecnologias">
              <span title="React" className="icon--react"><FaReact /></span>
              <span title="JavaScript" className="icon--js"><FaJs /></span>
              <span title="Vite" className="icon--vite"><SiVite /></span>
              <span title="HTML5" className="icon--html"><FaHtml5 /></span>
              <span title="CSS3" className="icon--css"><FaCss3Alt /></span>
              <span title="Figma" className="icon--figma"><FaFigma /></span>
            </div>
          </div>
          <div className="hero__right">
            <aside className="hero__banner" aria-label="Momentos de mi experiencia profesional">
              <div className="hero__banner-bar" aria-hidden="true">
                <i>−</i>
                <i>+</i>
                <i>×</i>
              </div>
              <div ref={videoContainerRef} className="hero__banner-video">
                {isVideoVisible && (
                  <iframe
                    src="https://app.heygen.com/embeds/605aa1fa50e945b6aef7602efdbe60be"
                    title="Video de presentación de Ryan Rivera"
                    allow="encrypted-media; fullscreen"
                    allowFullScreen
                  />
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Hero
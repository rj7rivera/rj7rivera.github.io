import { useEffect, useRef, useState } from 'react'
import './Hero.css'

function Hero() {
  const videoContainerRef = useRef(null)
  const [isVideoMounted, setIsVideoMounted] = useState(false)

  // El iframe se monta la primera vez que entra en viewport y ya no se desmonta:
  // desmontarlo obligaba a recargar el embed completo en cada scroll de vuelta.
  useEffect(() => {
    const videoContainer = videoContainerRef.current

    if (!videoContainer) {
      return undefined
    }

    if (typeof IntersectionObserver === 'undefined') {
      setIsVideoMounted(true)
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVideoMounted(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' },
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
              <span className="hero__line">
                <span className="hero__line-inner">
                  HOLA, SOY <mark className="hero__kicker-mark">RYAN RIVERA</mark>
                </span>
              </span>
            </p>

            <h1 id="hero-title" className="hero__title">
              <span className="hero__line">
                <span className="hero__line-inner">Frontend</span>
              </span>
              <span className="hero__line">
                <span className="hero__line-inner">Developer</span>
              </span>
            </h1>

            <p className="hero__subtitle">
              <span className="hero__line">
                <span className="hero__line-inner">&amp; UI/UX Designer</span>
              </span>
            </p>

            <div className="hero__actions" aria-label="Acciones principales">
              <a href="#proyectos" className="hero__button hero__button--primary">
                <span className="hero__button-label">VER PROYECTOS</span>
                <span className="hero__button-arrow" aria-hidden="true">-&gt;</span>
              </a>
              <a href="#contacto" className="hero__button hero__button--ghost">
                <span className="hero__button-label">CONTACTAME</span>
                <span className="hero__button-arrow" aria-hidden="true">/</span>
              </a>
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
                {isVideoMounted && (
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

import { useEffect, useState } from 'react'
import './Hero.css'
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaFigma } from 'react-icons/fa'
import { SiVite } from 'react-icons/si'
import teachingPhoto from '../../assets/image/HERO/WhatsApp Image 2026-07-21 at 14.53.05.jpeg'
import sportsPhoto from '../../assets/image/HERO/WhatsApp Image 2026-07-21 at 14.53.04.jpeg'
import teamPhoto from '../../assets/image/HERO/WhatsApp Image 2026-07-21 at 14.53.06.jpeg'

import experiencePhotoTwo from '../../assets/image/HERO/2.jpeg'
import teamPhotoTwo from '../../assets/image/HERO/WhatsApp Image 2026-07-21 at 14.53.06 (1).jpeg'

const heroSlides = [
  { image: teachingPhoto, alt: 'Ryan impartiendo una clase', label: 'DOCENCIA' },
  { image: sportsPhoto, alt: 'Equipo deportivo con el que Ryan colaboró', label: 'EQUIPO CAMPEON UESG' },
  { image: teamPhoto, alt: 'Equipo de trabajo de Ryan', label: 'Banariego' },
  
  { image: experiencePhotoTwo, alt: 'Momento de la trayectoria profesional de Ryan', label: 'Familia' },
  { image: teamPhotoTwo, alt: 'Ryan junto a su equipo de trabajo', label: 'Familia' },
]

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % heroSlides.length)
    }, 2500)

    return () => window.clearTimeout(timeoutId)
  }, [activeSlide])

  const currentSlide = heroSlides[activeSlide]

  const showSlide = (index) => {
    setActiveSlide(index)
  }

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
              <div className="hero__banner-slider">
                <figure key={activeSlide} className="hero__banner-slide">
                  <img src={currentSlide.image} alt={currentSlide.alt} />
                  <figcaption>{currentSlide.label}</figcaption>
                </figure>
                <div className="hero__banner-dots" aria-label="Imagen actual">
                  {heroSlides.map((slide, index) => (
                    <button
                      key={`${slide.label}-${index}`}
                      type="button"
                      className={index === activeSlide ? 'is-active' : ''}
                      aria-label={`Mostrar ${slide.label.toLowerCase()}`}
                      aria-pressed={index === activeSlide}
                      onClick={() => showSlide(index)}
                    />
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Hero
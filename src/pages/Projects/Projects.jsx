import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { FiArrowLeft, FiArrowRight, FiArrowUpRight } from 'react-icons/fi'
import { projects } from './projectsData'
import './Projects.css'

function ProjectPreview({ type, image, imageVariant, title }) {
  if (image) {
    return (
      <div className={`project-preview project-preview--image ${imageVariant ? `project-preview--image-${imageVariant}` : ''}`}>
        <img src={image} alt={`Vista previa de ${title}`} />
      </div>
    )
  }

  if (type === 'inventory') {
    return (
      <div className="project-preview project-preview--inventory" aria-hidden="true">
        <aside><b>◈</b><span>Dashboard</span><span>Productos</span><span>Reportes</span></aside>
        <div className="preview-dashboard">
          <strong>Resumen</strong>
          <div className="preview-stats"><span>1,248<small>Productos</small></span><span>342<small>Movimientos</small></span><span className="is-alert">23<small>Stock bajo</small></span></div>
          <div className="preview-chart"><i /><i /><i /><i /><i /></div>
        </div>
      </div>
    )
  }

  if (type === 'sales') {
    return (
      <div className="project-preview project-preview--sales" aria-hidden="true">
        <aside><b>◉</b><span>⌂</span><span>□</span><span>◇</span></aside>
        <div className="preview-sales">
          <strong>Ventas</strong>
          <div className="preview-stats"><span>$1,250<small>Ventas hoy</small></span><span>18<small>Pedidos</small></span><span>2<small>Devoluciones</small></span></div>
          <p>Pedidos recientes</p><i /><i /><i />
        </div>
      </div>
    )
  }

  if (type === 'portfolio') {
    return (
      <div className="project-preview project-preview--portfolio" aria-hidden="true">
        <div className="preview-nav"><b>RR.</b><span>Inicio &nbsp; Sobre mí &nbsp; Proyectos</span></div>
        <strong>Frontend Developer<br />que construye <em>experiencias digitales.</em></strong>
        <p>Interfaces modernas, rápidas y accesibles.</p>
        <i className="preview-cube">◇</i>
      </div>
    )
  }

  if (type === 'enrollment') {
    return (
      <div className="project-preview project-preview--enrollment" aria-hidden="true">
        <aside><b>SG</b><span>Estudiantes</span><span>Paralelos</span><span>Reportes</span></aside>
        <div className="preview-enrollment">
          <div className="preview-enrollment__header"><strong>Matriculación</strong><span>2025 - 2026</span></div>
          <div className="preview-stats"><span>486<small>Estudiantes</small></span><span>18<small>Paralelos</small></span><span>32<small>Cupos libres</small></span></div>
          <p>Últimas matrículas</p>
          <i><span>María López</span><b>8vo A</b></i>
          <i><span>Daniel Ortiz</span><b>9no B</b></i>
          <i><span>Sofía Vera</span><b>10mo A</b></i>
        </div>
      </div>
    )
  }

  return (
    <div className="project-preview project-preview--cafe" aria-hidden="true">
      <div className="preview-nav"><b>☕ Café</b><span>Inicio &nbsp; Menú &nbsp; Contacto</span></div>
      <strong>Sabor auténtico,<br />experiencia única.</strong>
      <p>Una experiencia cálida en cada taza.</p>
      <i>☕</i>
    </div>
  )
}

function ProjectCard({ project, isDuplicate = false }) {
  return (
    <article className="project-card" aria-hidden={isDuplicate || undefined}>
      <div className="project-card__window">
        <span>&gt;_</span>
        <small>{project.fileName}</small>
        <div aria-hidden="true"><i>−</i><i>□</i><i>×</i></div>
      </div>
      <ProjectPreview
        type={project.preview}
        image={project.image}
        imageVariant={project.imageVariant}
        title={project.title}
      />
      <div className="project-card__body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul aria-label={`Tecnologías de ${project.title}`}>
          {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
        <a
          href={project.url}
          target={project.external ? '_blank' : undefined}
          rel={project.external ? 'noreferrer' : undefined}
          tabIndex={isDuplicate ? -1 : undefined}
        >
          Ver proyecto <FiArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </article>
  )
}

function Projects() {
  const [currentPosition, setCurrentPosition] = useState(projects.length)
  const [isPaused, setIsPaused] = useState(false)
  const [trackOffset, setTrackOffset] = useState(0)
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(false)
  const trackRef = useRef(null)

  useEffect(() => {
    if (isPaused) return undefined

    const intervalId = window.setInterval(() => {
      setCurrentPosition((position) => position + 1)
      // Ajusta este valor en milisegundos para cambiar la velocidad del banner.
    }, 3500)

    return () => window.clearInterval(intervalId)
  }, [isPaused])

  useLayoutEffect(() => {
    const updateTrackOffset = () => {
      const activeCard = trackRef.current?.querySelectorAll('.project-card')[currentPosition]
      setTrackOffset(activeCard?.offsetLeft ?? 0)
    }

    updateTrackOffset()
    window.addEventListener('resize', updateTrackOffset)

    return () => window.removeEventListener('resize', updateTrackOffset)
  }, [currentPosition])

  useEffect(() => {
    const animationFrame = window.requestAnimationFrame(() => setIsTransitionEnabled(true))
    return () => window.cancelAnimationFrame(animationFrame)
  }, [])

  const handleTrackTransitionEnd = (event) => {
    if (event.propertyName !== 'transform') return

    if (currentPosition >= projects.length * 2 || currentPosition < projects.length) {
      setIsTransitionEnabled(false)
      setCurrentPosition((position) => position >= projects.length * 2
        ? position - projects.length
        : position + projects.length)

      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => setIsTransitionEnabled(true))
      })
    }
  }

  const showPreviousProject = () => {
    setCurrentPosition((position) => position - 1)
  }

  const showNextProject = () => {
    setCurrentPosition((position) => position + 1)
  }

  const activeProject = currentPosition % projects.length

  return (
    <section id="proyectos" className="projects" aria-labelledby="projects-title">
      <div className="projects__inner">
        <header className="projects__header">
          <p className="projects__eyebrow"><span aria-hidden="true" /> 02  PROYECTOS</p>
          <h2 id="projects-title">PROYECTOS QUE CONVIERTEN<br />IDEAS EN <mark>SOLUCIONES</mark>.</h2>
          <div className="projects__rule" aria-hidden="true" />
          <p className="projects__intro">Selección de trabajos donde el código, el diseño y la experiencia se unen para resolver problemas reales.</p>
        </header>

        <div
          className="projects__carousel"
          aria-label="Carrusel de proyectos"
          onPointerEnter={() => setIsPaused(true)}
          onPointerLeave={() => setIsPaused(false)}
        >
          <div
            className={`projects__track ${isTransitionEnabled ? 'is-animated' : ''}`}
            ref={trackRef}
            style={{ transform: `translate3d(-${trackOffset}px, 0, 0)` }}
            onTransitionEnd={handleTrackTransitionEnd}
          >
            {projects.map((project) => (
              <ProjectCard project={project} isDuplicate key={`before-${project.id}`} />
            ))}
            {projects.map((project) => <ProjectCard project={project} key={project.id} />)}
            {projects.map((project) => (
              <ProjectCard project={project} isDuplicate key={`after-${project.id}`} />
            ))}
          </div>
        </div>

        <div className="projects__controls">
          <button type="button" onClick={showPreviousProject} aria-label="Mostrar proyecto anterior">
            <FiArrowLeft aria-hidden="true" />
          </button>
          <div className="projects__dots" aria-label="Seleccionar proyecto">
            {projects.map((project, projectIndex) => (
              <button
                type="button"
                className={projectIndex === activeProject ? 'is-active' : ''}
                onClick={() => setCurrentPosition(projects.length + projectIndex)}
                aria-label={`Mostrar ${project.title}`}
                aria-current={projectIndex === activeProject ? 'true' : undefined}
                key={project.id}
              />
            ))}
          </div>
          <button type="button" onClick={showNextProject} aria-label="Mostrar proyecto siguiente">
            <FiArrowRight aria-hidden="true" />
          </button>
        </div>

        <div className="projects__footer" aria-hidden="true"><span /><i /><b>+</b><b>+</b></div>
      </div>
    </section>
  )
}

export default Projects
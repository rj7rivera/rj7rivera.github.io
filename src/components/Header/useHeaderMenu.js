import { useEffect, useRef, useState } from 'react'
import { headerLinks } from './headerLinks'

// Centraliza la lógica del menú: enlace activo, cierre en móvil y bloqueo de scroll.
export function useHeaderMenu(defaultLink = 'inicio') {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState(defaultLink)
  // Tras un clic el scroll suave atraviesa secciones intermedias: se ignora el
  // spy durante ese trayecto para que el indicador no rebote entre enlaces.
  const lockUntilRef = useRef(0)

  useEffect(() => {
    const syncActiveLinkWithHash = () => {
      const nextHash = window.location.hash.replace('#', '')

      if (nextHash) {
        setActiveLink(nextHash)
      }
    }

    syncActiveLinkWithHash()
    window.addEventListener('hashchange', syncActiveLinkWithHash)

    return () => window.removeEventListener('hashchange', syncActiveLinkWithHash)
  }, [defaultLink])

  useEffect(() => {
    const sections = headerLinks
      .map(({ id }) => ({ id, element: document.getElementById(id) }))
      .filter(({ element }) => element)
    let animationFrame = 0

    const updateActiveLink = () => {
      animationFrame = 0
      if (Date.now() < lockUntilRef.current) return

      const marker = window.innerHeight * 0.45
      const currentSection = sections.find(({ element }) => {
        const bounds = element.getBoundingClientRect()
        return bounds.top <= marker && bounds.bottom > marker
      })

      if (currentSection) setActiveLink(currentSection.id)
    }

    const handleScroll = () => {
      if (!animationFrame) animationFrame = window.requestAnimationFrame(updateActiveLink)
    }

    updateActiveLink()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
      window.cancelAnimationFrame(animationFrame)
    }
  }, [])

  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleEscapeKey)

    return () => window.removeEventListener('keydown', handleEscapeKey)
  }, [])

  useEffect(() => {
    // Evita que el fondo se desplace cuando el menú móvil está abierto.
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const handleLinkClick = (id) => {
    lockUntilRef.current = Date.now() + 900
    setActiveLink(id)
    setIsMenuOpen(false)
  }

  return {
    activeLink,
    handleLinkClick,
    isMenuOpen,
    setIsMenuOpen,
  }
}

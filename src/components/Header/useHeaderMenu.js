import { useEffect, useState } from 'react'

// Centraliza la lógica del menú: enlace activo, cierre en móvil y bloqueo de scroll.
export function useHeaderMenu(defaultLink = 'inicio') {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState(defaultLink)
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const syncScrollState = () => setHasScrolled(window.scrollY > 24)

    syncScrollState()
    window.addEventListener('scroll', syncScrollState, { passive: true })

    return () => window.removeEventListener('scroll', syncScrollState)
  }, [])

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
    setActiveLink(id)
    setIsMenuOpen(false)
  }

  return {
    activeLink,
    handleLinkClick,
    isMenuOpen,
    setIsMenuOpen,
    hasScrolled,
  }
}
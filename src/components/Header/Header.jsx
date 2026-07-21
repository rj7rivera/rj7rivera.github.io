import { headerLinks } from './headerLinks'
import { useHeaderMenu } from './useHeaderMenu'
import './Header.css'

function Header() {
  const { activeLink, handleLinkClick, isMenuOpen, setIsMenuOpen, hasScrolled } = useHeaderMenu()

  return (
    <header className={`site-header ${hasScrolled ? 'is-scrolled' : ''}`} aria-label="Navegación principal">
      <nav className="header-nav" aria-label="Secciones del portafolio">
        <div className="header-slot header-slot--logo" aria-hidden="true" />

        {/* Botón hamburguesa visible solo en pantallas pequeñas. */}
        <button
          type="button"
          className="menu-toggle"
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-controls="primary-navigation"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
        >
          <span />
          <span />
          <span />
        </button>

        {/* Barra flotante con efecto glassmorphism. */}
        <div className={`nav-shell ${isMenuOpen ? 'is-open' : ''}`}>
          <ul id="primary-navigation" className="nav-list">
            {headerLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={activeLink === link.id ? 'is-active' : ''}
                  aria-current={activeLink === link.id ? 'page' : undefined}
                  onClick={() => handleLinkClick(link.id)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="header-slot header-slot--action" aria-hidden="true" />
      </nav>
    </header>
  )
}

export default Header
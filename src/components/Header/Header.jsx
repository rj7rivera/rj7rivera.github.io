import { headerLinks } from './headerLinks'
import { useHeaderMenu } from './useHeaderMenu'
import Logo from '../../assets/icono/logo.png'
import inicioIcon from '../../assets/icono/inicio.png'
import sobreMiIcon from '../../assets/icono/sobre_mi.png'
import proyectosIcon from '../../assets/icono/proyecto.png'
import experienciaIcon from '../../assets/icono/experiencia.png'
import contactoIcon from '../../assets/icono/contacto.png'
import './Header.css'

const headerIcons = {
  inicio: inicioIcon,
  'sobre-mi': sobreMiIcon,
  proyectos: proyectosIcon,
  experiencia: experienciaIcon,
  contacto: contactoIcon,
}

function Header() {
  const { activeLink, handleLinkClick, isMenuOpen, setIsMenuOpen, hasScrolled } = useHeaderMenu()

  return (
    <header className={`site-header ${hasScrolled ? 'is-scrolled' : ''}`} aria-label="Navegación principal">
      <nav className="header-nav" aria-label="Secciones del portafolio">
        <a className="header-brand" href="#inicio" aria-label="Ir al inicio" onClick={() => handleLinkClick('inicio')}>
          <img src={Logo} alt="" />
        </a>

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
                  <img src={headerIcons[link.id]} alt="" />
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
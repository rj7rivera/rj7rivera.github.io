import {
  FiCode,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiMessageCircle,
  FiPhone,
  FiUsers,
} from 'react-icons/fi'
import './Footer.css'

const technologies = ['JavaScript', 'React', 'HTML5', 'CSS3', 'Git & GitHub', 'UI/UX']

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main">
        <section className="footer__brand" aria-label="Ryan Rivera">
          <h2>RYAN <mark>RIVERA</mark></h2>
          <p className="footer__role">DESARROLLADOR FRONTEND</p>
          <p className="footer__description">Creo soluciones digitales modernas, intuitivas y eficientes que convierten ideas en experiencias reales.</p>
          <a className="footer__cta" href="#contacto">&gt;_ HABLEMOS DE TU PROYECTO</a>
        </section>

        <section className="footer__group" aria-labelledby="footer-tech-title">
          <h3 id="footer-tech-title"><FiCode aria-hidden="true" /> Tecnologías</h3>
          <ul>
            {technologies.map((technology) => <li key={technology}>{technology}</li>)}
          </ul>
        </section>

        <address className="footer__group footer__contact">
          <h3><FiMail aria-hidden="true" /> Contacto</h3>
          <a href="mailto:ryan1095.jimenez@gmail.com"><FiMail aria-hidden="true" />ryan1095.jimenez@gmail.com</a>
          <a href="tel:+593969580879"><FiPhone aria-hidden="true" />+593 96 958 0879</a>
          <p><FiMapPin aria-hidden="true" />Durán, Guayas - Ecuador</p>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><FiLinkedin aria-hidden="true" />Ryan Rivera Jimenez</a>
        </address>

        <section className="footer__group footer__connect" aria-labelledby="footer-connect-title">
          <h3 id="footer-connect-title"><FiUsers aria-hidden="true" /> Conectemos</h3>
          <p>Hablemos sobre cómo podemos trabajar juntos y crear soluciones que generen impacto.</p>
          <div className="footer__socials">
            <a href="https://github.com/rj7rivera" target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub aria-hidden="true" /></a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin aria-hidden="true" /></a>
            <a href="mailto:ryan1095.jimenez@gmail.com" aria-label="Correo electrónico"><FiMail aria-hidden="true" /></a>
            <a href="https://wa.me/593969580879" target="_blank" rel="noreferrer" aria-label="WhatsApp"><FiMessageCircle aria-hidden="true" /></a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><FiInstagram aria-hidden="true" /></a>
          </div>
        </section>
      </div>

      <div className="footer__wordmark" aria-hidden="true">RYAN RIVERA</div>
    </footer>
  )
}

export default Footer
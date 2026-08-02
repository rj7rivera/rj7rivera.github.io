import './AboutMe.css'
import profileImage from '../../assets/image/SOBRE MI.png'
import IconoFormacion from '../../assets/image/icono-seccion_sobre mi/IconoFormacion.png'
import IconoEspecializacion from '../../assets/image/icono-seccion_sobre mi/IconoEspecializacion.png'
import IconoEnfoque from '../../assets/image/icono-seccion_sobre mi/IconoEnfoque.png'
import ProfileScreen from '../../components/ProfileScreen/ProfileScreen'
import { FiMail } from 'react-icons/fi'


function AboutMe() {
  return (
    <section id="sobre-mi" className="about">
      <div className="about__frame">
        <div className="about__header">
          <span className="about__number">01 </span>
          <h2 className="about__section-title">SOBRE MÍ</h2>
        </div>

        <div className="about__container">
          <div className="about__left">
            <div className="about__photo-container">
              <div className="about__code" aria-hidden="true">
                <span>&lt;about&gt;</span>
                <p>creativity();</p>
                <p>passion();</p>
                <p>dedication();</p>
                <p>const success =</p>
                <strong>&quot;in progress&quot;;</strong>
                <span>&lt;/about&gt;</span>
              </div>

              <img src={profileImage} alt="Ryan Rivera - Desarrollador Frontend" className="about__photo" />
              <div className="profile-screen-wrapper">
                <ProfileScreen />
              </div>
            </div>
          </div>

          <div className="about__right">
            <h3 className="about__title">
              MÁS QUE CÓDIGO,<br />CREO <span className="highlight">EXPERIENCIAS</span>.
            </h3>

            <div className="about__title-underline" />

            <p className="about__description">
              Soy Ryan Rivera, Ingeniero en Computación e Informática y desarrollador frontend con pasion en <strong>React</strong> y diseño <strong>UI/UX</strong>.
            </p>

            <p className="about__description">
              Combino programación, diseño y resolución de problemas para crear interfaces modernas, rápidas, accesibles e intuitivas que resuelven problemas reales y ofrecen una excelente experiencia de usuario.
            </p>

            <div className="about__cards">
              <div className="about__card">
                <span className="about__card-number">01</span>
                <img
                  src={IconoFormacion}
                  alt=""
                  className="about__card-icon about__card-icon--formacion"
                />
                <p className="about__card-title">FORMACIÓN</p>
                <p className="about__card-description">Ingeniero en Computación e Informática.</p>
              </div>
              <div className="about__card">
                <span className="about__card-number">02</span>
                <img
                  src={IconoEspecializacion}
                  alt=""
                  className="about__card-icon about__card-icon--especializacion"
                />
                <p className="about__card-title">ESPECIALIZACIÓN</p>
                <p className="about__card-description">Máster en Diseño y Desarrollo de Interfaz Web.</p>
              </div>
              <div className="about__card">
                <span className="about__card-number">03</span>
                <img
                  src={IconoEnfoque}
                  alt=""
                  className="about__card-icon about__card-icon--enfoque"
                />
                <p className="about__card-title">ENFOQUE</p>
                <p className="about__card-description">Frontend Development + UI/UX Design.</p>
              </div>
            </div>

            <div className="about__cta-row">
              <a className="about__button" href="#contacto">
                SOLICITAR CV
                <FiMail aria-hidden="true" />
              </a>
              <p className="about__cta-copy">Conoce más sobre mi experiencia y los proyectos que he construido.</p>
            </div>
          </div>
        </div>

        <a className="about__next" href="#proyectos">
          <span aria-hidden="true">&gt;_</span>
          SIGUIENTE_SECCIÓN: <strong>PROYECTOS</strong>
          <i aria-hidden="true" />
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  )
}

export default AboutMe

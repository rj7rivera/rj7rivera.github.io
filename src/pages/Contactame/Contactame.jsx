import { useState } from 'react'
import { FiLinkedin, FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi'
import './Contactame.css'

function Contactame() {
	const [formStatus, setFormStatus] = useState('')

	const handleSubmit = (event) => {
		event.preventDefault()

		const formData = new FormData(event.currentTarget)
		const subject = `[Portafolio] ${formData.get('asunto')}`
		const body = [
			`Nombre: ${formData.get('nombre')}`,
			`Email: ${formData.get('email')}`,
			'',
			'Mensaje:',
			formData.get('mensaje'),
		].join('\n')

		window.location.href = `mailto:ryan1095.jimenez@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
		setFormStatus('Se abrió tu cliente de correo con el mensaje preparado para enviar.')
	}

	return (
		<section id="contacto" className="contactame" aria-labelledby="contactame-title">
			<div className="contactame__inner">
				<div className="contactame__intro">
					<p className="contactame__eyebrow">&gt;04  CONTACTO</p>
					<h2 id="contactame-title"><span>Hablemos</span><span>de tu <mark>proyecto</mark></span></h2>
					<p className="contactame__lead">¿Tienes una idea, proyecto o propuesta? Estoy listo para convertirlo en una <strong>solución digital real.</strong></p>

					<address className="contactame__details">
						<a href="mailto:ryan1095.jimenez@gmail.com"><FiMail aria-hidden="true" /><span><strong>Email</strong>ryan1095.jimenez@gmail.com</span></a>
						<a href="tel:+593969580879"><FiPhone aria-hidden="true" /><span><strong>Teléfono</strong>+593 96 958 0879</span></a>
						<p><FiMapPin aria-hidden="true" /><span><strong>Ubicación</strong>Durán, Guayas - Ecuador</span></p>
						<a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><FiLinkedin aria-hidden="true" /><span><strong>LinkedIn</strong>Ryan Rivera Jimenez</span></a>
					</address>

					<div className="contactame__availability"><strong>&gt; DISPONIBILIDAD</strong><p>Abierto a oportunidades y nuevos desafíos.<br /><b>¡Conversemos!</b></p></div>
				</div>

				<form className="contactame__form" onSubmit={handleSubmit}>
					<div className="contactame__window" aria-hidden="true"><span>&gt;_ ENVIAR_MENSAJE.EXE</span><i>−</i><i>□</i><i>×</i></div>
					<div className="contactame__fields">
						<label>Nombre<input type="text" name="nombre" placeholder="Tu nombre" required /></label>
						<label>Email<input type="email" name="email" placeholder="tu@email.com" required /></label>
						<label className="contactame__field--full">Asunto<input type="text" name="asunto" placeholder="¿De qué trata tu mensaje?" required /></label>
						<label className="contactame__field--full">Mensaje<textarea name="mensaje" placeholder="Cuéntame más sobre tu proyecto o idea..." required /></label>
					</div>
					<div className="contactame__form-footer">
						<button type="submit"><FiSend aria-hidden="true" /> ENVIAR MENSAJE</button>
						<p>Tu información está<br />segura conmigo.</p>
					</div>
					{formStatus && <p className="contactame__status" role="status">{formStatus}</p>}
				</form>
			</div>
		</section>
	)
}

export default Contactame
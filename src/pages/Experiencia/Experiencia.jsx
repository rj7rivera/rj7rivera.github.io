import './Experiencia.css'
import experienceBadge from '../../assets/image/experiencia/3c06c93b-abbb-47b0-a751-3f23afd8eaf7-Photoroom.png'
import avatarIdle from '../../assets/animacion1.png'
import avatarHover from '../../assets/animacion2.png'
import { FiBookOpen, FiCpu } from 'react-icons/fi'

const teachingAchievements = [
	['Metodologías activas', 'Implementación del enfoque pedagógico ERCA para dinamizar el aprendizaje y fomentar el pensamiento crítico.'],
	['Innovación educativa', 'Diseño de recursos didácticos y materiales digitales de apoyo.'],
	['Gestión tecnológica', 'Integración de herramientas y plataformas educativas en los procesos de enseñanza.'],
	['Planificación curricular', 'Elaboración de programas académicos alineados al currículo nacional.'],
	['Evaluación continua', 'Aplicación de procesos formativos y sumativos para acompañar el progreso académico.'],
	['Tutoría de curso', 'Promoción de convivencia positiva, autonomía y desarrollo de habilidades sociales.'],
]

const supportAchievements = [
	['Optimización logística', 'Coordinación de recepción y despacho de mercancía cumpliendo KPIs de tiempo de respuesta.'],
	['Control de inventarios y precisión', 'Auditorías, stock y disponibilidad crítica para reducir inconsistencias.'],
	['Eficiencia en picking', 'Preparación de pedidos y mejora continua de la productividad del área.'],
	['Administración digital (ERP)', 'Kardex, guías de remisión y control documental para garantizar trazabilidad.'],
	['Gestión documental y soporte TI', 'Digitalización, organización y acceso a datos clave para la toma de decisiones.'],
	['Continuidad operativa', 'Operación de montacargas y apoyo al flujo estratégico de mercancía.'],
]

function Experiencia() {
	return (
		<section
			id="experiencia"
			className="experiencia"
			aria-label="Experiencia profesional"
		>
			<div className="experiencia__avatar" tabIndex={0} role="img" aria-label="Caricatura de Ryan Rivera">
				<span className="experiencia__avatar-bar" aria-hidden="true">
					<b></b>
					<i className="experiencia__avatar-led" />
				</span>
				<span className="experiencia__avatar-stage" aria-hidden="true">
					<img className="experiencia__avatar-pose experiencia__avatar-pose--idle" src={avatarIdle} alt="" />
					<img className="experiencia__avatar-pose experiencia__avatar-pose--hover" src={avatarHover} alt="" />
				</span>
				<span className="experiencia__avatar-status" aria-hidden="true">RYAN </span>
			</div>
			<img className="experiencia__badge" src={experienceBadge} alt="" aria-hidden="true" />
			<div className="experiencia__content">
				<div className="experiencia__column experiencia__column--light">
					<p className="experiencia__eyebrow"><span>03</span> EXPERIENCIA</p>
					<article className="experience-card experience-card--teaching">
						<div className="experience-card__window" aria-hidden="true"><i>−</i><i>+</i><i>×</i></div>
						<header className="experience-card__header">
							<span className="experience-card__icon"><FiBookOpen aria-hidden="true" /></span>
							<div>
								<h2>Docencia</h2>
								<p>Unidad Educativa San Gabriel</p>
							</div>
						</header>
						<p className="experience-card__summary">
							Durante mi gestión en la Unidad Educativa San Gabriel, integré pedagogía activa y herramientas digitales para fortalecer el aprendizaje y las competencias analíticas y tecnológicas en secundaria y bachillerato.
						</p>
						<h3>Logros y responsabilidades clave</h3>
						<ol className="experience-card__teaching-list">
							{teachingAchievements.map(([title, description], index) => (
								<li key={title}>
									<span>{String(index + 1).padStart(2, '0')}</span>
									<p><strong>{title}:</strong> {description}</p>
								</li>
							))}
						</ol>
					</article>
				</div>

				<div className="experiencia__column experiencia__column--dark">
					<p className="experiencia__eyebrow"><span>03</span> EXPERIENCIA</p>
					<article className="experience-card experience-card--support">
						<div className="experience-card__window" aria-hidden="true"><i>−</i><i>+</i><i>×</i></div>
						<header className="experience-card__header">
							<span className="experience-card__icon"><FiCpu aria-hidden="true" /></span>
							<div>
								<h2>Soporte Técnico</h2>
								<p><strong>Banariego Cía. Ltda</strong> <i aria-hidden="true">•</i> </p>
							</div>
							<span className="experience-card__menu" aria-hidden="true">•••</span>
						</header>
						<p className="experience-card__summary">
							Gestioné operaciones logísticas, trazabilidad de activos y optimización de flujos de trabajo mediante ERP, control de inventarios y soporte técnico operativo.
						</p>
						<h3>Logros y responsabilidades clave</h3>
						<ol className="experience-card__support-list">
							{supportAchievements.map(([title, description], index) => (
								<li key={title}>
									<span>{String(index + 1).padStart(2, '0')}</span>
									<p><strong>{title}:</strong> {description}</p>
								</li>
							))}
						</ol>
					</article>
				</div>
			</div>
		</section>
 	)
}

export default Experiencia

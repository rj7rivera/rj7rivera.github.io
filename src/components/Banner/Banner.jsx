import './Banner.css'
import { FaFire } from 'react-icons/fa'

function Banner() {
  return (
    <div className="banner">
      <div className="banner__content">
        <FaFire className="banner__icon" aria-hidden="true" />
        <p className="banner__text">
          <strong></strong> La obsesión vence al talento siempre. Puedes tener todo el talento del mundo, pero ¿estás obsesionado
        </p>
      </div>
    </div>
  )
}

export default Banner

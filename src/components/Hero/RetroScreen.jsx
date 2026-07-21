function RetroScreen() {
  return (
    <svg viewBox="0 0 500 400" className="hero__screen" xmlns="http://www.w3.org/2000/svg">
      {/* Marco exterior gris */}
      <rect width="500" height="400" fill="#a8a8a8" rx="8" />
      
      {/* Borde oscuro interior */}
      <rect x="10" y="10" width="480" height="380" fill="#8b8b8b" rx="6" />
      
      {/* Área de pantalla */}
      <rect x="18" y="38" width="464" height="280" fill="#0a0f1a" rx="3" />
      
      {/* Efecto scanline en la pantalla */}
      <defs>
        <pattern id="scanlines" patternUnits="userSpaceOnUse" width="1" height="2">
          <line x1="0" y1="0" x2="1" y2="0" stroke="rgba(0,255,100,0.03)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect x="18" y="38" width="464" height="280" fill="url(#scanlines)" />
      
      {/* Bisel 3D */}
      <rect x="18" y="38" width="464" height="280" fill="none" stroke="#1a2a3a" strokeWidth="2" opacity="0.3" rx="3" />
      
      {/* Botones en la parte superior */}
      {/* Botón minimizar */}
      <g>
        <rect x="410" y="15" width="24" height="18" fill="#a8a8a8" stroke="#5a5a5a" strokeWidth="1" rx="2" />
        <rect x="413" y="18" width="6" height="3" fill="#5a5a5a" />
      </g>
      
      {/* Botón maximizar */}
      <g>
        <rect x="438" y="15" width="24" height="18" fill="#a8a8a8" stroke="#5a5a5a" strokeWidth="1" rx="2" />
        <rect x="441" y="18" width="9" height="9" fill="none" stroke="#5a5a5a" strokeWidth="1" />
      </g>
      
      {/* Botón cerrar */}
      <g>
        <rect x="466" y="15" width="24" height="18" fill="#c85a5a" stroke="#5a5a5a" strokeWidth="1" rx="2" />
        <text x="478" y="28" fontSize="14" fontWeight="bold" fill="#fff" textAnchor="middle">×</text>
      </g>
      
      {/* Controles inferiores */}
      {/* Play/Pause */}
      <g>
        <circle cx="40" cy="355" r="12" fill="#a8a8a8" stroke="#5a5a5a" strokeWidth="1" />
        <polygon points="37,350 37,360 45,355" fill="#5a5a5a" />
      </g>
      
      {/* Pausa */}
      <g>
        <circle cx="80" cy="355" r="12" fill="#a8a8a8" stroke="#5a5a5a" strokeWidth="1" />
        <rect x="75" y="350" width="3" height="10" fill="#5a5a5a" />
        <rect x="82" y="350" width="3" height="10" fill="#5a5a5a" />
      </g>
      
      {/* Slider de volumen/progreso */}
      <g>
        <rect x="110" y="352" width="290" height="6" fill="#5a5a5a" rx="3" />
        <circle cx="200" cy="355" r="8" fill="#a8a8a8" stroke="#5a5a5a" strokeWidth="1" />
      </g>
      
      {/* Parlante volumen */}
      <g>
        <rect x="420" y="345" width="15" height="20" fill="#a8a8a8" stroke="#5a5a5a" strokeWidth="1" rx="2" />
        <circle cx="428" cy="355" r="4" fill="#5a5a5a" />
      </g>
    </svg>
  )
}

export default RetroScreen

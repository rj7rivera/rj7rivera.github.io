function ProfileScreen() {
  return (
    <svg
      viewBox="0 0 240 145"
      className="profile-screen"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Terminal con el perfil profesional de Ryan Rivera"
    >
      <rect x="2" y="2" width="236" height="141" fill="#020602" stroke="#bfff25" strokeWidth="2" rx="5" />
      <path d="M2 24H238" stroke="#bfff25" strokeWidth="1.5" opacity="0.75" />

      <rect x="11" y="10" width="6" height="5" fill="#bfff25" rx="1" />
      <rect x="21" y="10" width="6" height="5" fill="#bfff25" rx="1" />
      <rect x="31" y="10" width="6" height="5" fill="#bfff25" rx="1" />

      <text x="14" y="42" fontSize="10" fontFamily="monospace" fill="#f4f7ef">
        RYAN_PROFILE.EXE
      </text>

      <text x="14" y="62" fontSize="9" fontFamily="monospace">
        <tspan fill="#bfff25">&gt;</tspan>
        <tspan fill="#f4f7ef"> STATUS: AVAILABLE</tspan>
      </text>

      <text x="14" y="80" fontSize="9" fontFamily="monospace">
        <tspan fill="#bfff25">&gt;</tspan>
        <tspan fill="#f4f7ef"> LOCATION: ECUADOR</tspan>
      </text>

      <text x="14" y="98" fontSize="9" fontFamily="monospace">
        <tspan fill="#bfff25">&gt;</tspan>
        <tspan fill="#f4f7ef"> ROLE: FRONTEND DEVELOPER</tspan>
      </text>

      <rect x="14" y="112" width="7" height="12" fill="#bfff25" className="profile-screen__cursor" />
    </svg>
  )
}

export default ProfileScreen

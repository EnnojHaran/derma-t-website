// Decorative line-art botanicals & shells that echo the pressed-flower /
// seashell collage aesthetic. Pure inline SVG — no external assets — tinted
// teal and softly floating in the corners of a section.

function Sprig({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 120"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M62 112 C60 84 58 54 72 18" />
      <path d="M60 92 C40 88 30 78 27 62 C48 64 60 76 60 92Z" />
      <path d="M64 72 C48 66 41 54 44 40 C60 46 66 58 64 72Z" />
      <path d="M68 52 C55 44 52 32 58 18 C71 26 74 40 68 52Z" />
      <path d="M70 40 C82 34 92 36 98 44 C86 50 76 48 70 40Z" />
    </svg>
  )
}

function Daisy({ className }) {
  const petals = [0, 72, 144, 216, 288]
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      {petals.map((deg) => (
        <ellipse
          key={deg}
          cx="50"
          cy="27"
          rx="9"
          ry="17"
          transform={`rotate(${deg} 50 50)`}
        />
      ))}
      <circle cx="50" cy="50" r="7" fill="currentColor" fillOpacity="0.25" />
    </svg>
  )
}

function Shell({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M50 82 C22 72 18 40 33 23 Q50 10 67 23 C82 40 78 72 50 82Z" />
      <path d="M50 82 L50 30" />
      <path d="M50 82 L34 34" />
      <path d="M50 82 L66 34" />
      <path d="M50 82 L22 48" />
      <path d="M50 82 L78 48" />
    </svg>
  )
}

function Orchid({ className }) {
  const petals = [30, 102, 174, 246, 318]
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      {petals.map((deg) => (
        <path
          key={deg}
          d="M50 50 C42 34 44 20 50 12 C56 20 58 34 50 50Z"
          transform={`rotate(${deg} 50 50)`}
        />
      ))}
      <circle cx="50" cy="50" r="5" fill="currentColor" fillOpacity="0.3" />
    </svg>
  )
}

export default function Botanicals() {
  return (
    <div className="botanicals" aria-hidden="true">
      <Sprig className="bot bot-tl" />
      <Daisy className="bot bot-tr" />
      <Orchid className="bot bot-bl" />
      <Shell className="bot bot-br" />
    </div>
  )
}

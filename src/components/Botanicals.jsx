// Decorative line-art collage — pressed botanicals, shells, starfish, tulips,
// a little sun & cloud — echoing the @projectdermat post aesthetic.
// Pure inline SVG (no external assets), tinted teal and softly floating.

const svgProps = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

function Sprig(p) {
  return (
    <svg {...p} viewBox="0 0 120 120" {...svgProps}>
      <path d="M62 112 C60 84 58 54 72 18" />
      <path d="M60 92 C40 88 30 78 27 62 C48 64 60 76 60 92Z" />
      <path d="M64 72 C48 66 41 54 44 40 C60 46 66 58 64 72Z" />
      <path d="M68 52 C55 44 52 32 58 18 C71 26 74 40 68 52Z" />
      <path d="M70 40 C82 34 92 36 98 44 C86 50 76 48 70 40Z" />
    </svg>
  )
}

function Daisy(p) {
  const petals = [0, 72, 144, 216, 288]
  return (
    <svg {...p} viewBox="0 0 100 100" {...svgProps}>
      {petals.map((d) => (
        <ellipse key={d} cx="50" cy="27" rx="9" ry="17" transform={`rotate(${d} 50 50)`} />
      ))}
      <circle cx="50" cy="50" r="7" fill="currentColor" fillOpacity="0.25" />
    </svg>
  )
}

function Orchid(p) {
  const petals = [30, 102, 174, 246, 318]
  return (
    <svg {...p} viewBox="0 0 100 100" {...svgProps}>
      {petals.map((d) => (
        <path
          key={d}
          d="M50 50 C42 34 44 20 50 12 C56 20 58 34 50 50Z"
          transform={`rotate(${d} 50 50)`}
        />
      ))}
      <circle cx="50" cy="50" r="5" fill="currentColor" fillOpacity="0.3" />
    </svg>
  )
}

function Shell(p) {
  return (
    <svg {...p} viewBox="0 0 100 100" {...svgProps}>
      <path d="M50 82 C22 72 18 40 33 23 Q50 10 67 23 C82 40 78 72 50 82Z" />
      <path d="M50 82 L50 30" />
      <path d="M50 82 L34 34" />
      <path d="M50 82 L66 34" />
      <path d="M50 82 L22 48" />
      <path d="M50 82 L78 48" />
    </svg>
  )
}

function Starfish(p) {
  return (
    <svg {...p} viewBox="0 0 100 100" {...svgProps}>
      <path d="M50 8 L61 38 L93 38 L67 58 L77 92 L50 71 L23 92 L33 58 L7 38 L39 38 Z" />
      <circle cx="50" cy="52" r="3" fill="currentColor" />
      <circle cx="50" cy="30" r="2" fill="currentColor" />
      <circle cx="42" cy="60" r="2" fill="currentColor" />
      <circle cx="58" cy="60" r="2" fill="currentColor" />
    </svg>
  )
}

function Tulip(p) {
  return (
    <svg {...p} viewBox="0 0 100 120" {...svgProps}>
      <path d="M50 116 C50 88 50 66 50 52" />
      <path d="M50 92 C34 90 26 80 26 66 C42 68 50 78 50 92Z" />
      <path d="M50 84 C66 82 74 72 74 58 C58 60 50 70 50 84Z" />
      <path d="M32 52 C30 30 40 18 50 46 C60 18 70 30 68 52 C60 62 40 62 32 52Z" />
      <path d="M50 46 L50 20" />
    </svg>
  )
}

function Sun(p) {
  const rays = [0, 45, 90, 135, 180, 225, 270, 315]
  return (
    <svg {...p} viewBox="0 0 100 100" {...svgProps}>
      <circle cx="50" cy="50" r="17" />
      {rays.map((d) => (
        <line key={d} x1="50" y1="24" x2="50" y2="14" transform={`rotate(${d} 50 50)`} />
      ))}
    </svg>
  )
}

function Cloud(p) {
  return (
    <svg {...p} viewBox="0 0 110 70" {...svgProps}>
      <path d="M26 60 C12 60 10 42 26 40 C26 24 48 22 52 36 C58 24 80 26 80 42 C96 40 98 60 84 60 Z" />
    </svg>
  )
}

function Sparkle(p) {
  return (
    <svg {...p} viewBox="0 0 100 100" fill="currentColor" stroke="none">
      <path d="M50 8 C54 40 60 46 92 50 C60 54 54 60 50 92 C46 60 40 54 8 50 C40 46 46 40 50 8Z" />
    </svg>
  )
}

// Layouts. Each item: [Component, style]. Positions/size/rotation/opacity are
// inline so the same shapes can be re-arranged per placement.
const b = (Comp, style) => ({ Comp, style })

const LAYOUTS = {
  full: [
    b(Sprig,    { top: '-2%',  left: '-1%',  width: 128, '--r': '-8deg' }),
    b(Tulip,    { top: '46%',  left: '-2%',  width: 82,  '--r': '9deg',  opacity: 0.22, color: 'var(--teal-bright)', animationDelay: '1.3s' }),
    b(Cloud,    { bottom: '12%', left: '3%', width: 92,  '--r': '0deg',  opacity: 0.22, color: 'var(--teal-light)',  animationDelay: '1.7s' }),
    b(Sparkle,  { top: '34%',  left: '6%',   width: 24,  opacity: 0.35, animationDelay: '0.5s' }),
    b(Shell,    { top: '-4%',  right: '2%',  width: 116, '--r': '14deg', color: 'var(--teal-bright)', animationDelay: '0.6s' }),
    b(Starfish, { top: '12%',  right: '13%', width: 78,  '--r': '-6deg', color: 'var(--teal-light)',  opacity: 0.26, animationDelay: '1.9s' }),
    b(Sun,      { top: '5%',   right: '30%', width: 58,  opacity: 0.2,  animationDelay: '2.3s' }),
    b(Orchid,   { bottom: '4%', right: '2%', width: 118, '--r': '18deg', animationDelay: '1s' }),
    b(Daisy,    { bottom: '2%', right: '19%', width: 92, '--r': '-10deg', color: 'var(--teal-light)', opacity: 0.26, animationDelay: '2.1s' }),
    b(Sparkle,  { bottom: '22%', right: '34%', width: 20, opacity: 0.3, animationDelay: '1.4s' }),
  ],
  banner: [
    b(Sprig,    { top: '-16%', left: '0%',   width: 96,  '--r': '-8deg' }),
    b(Shell,    { top: '-12%', right: '2%',  width: 92,  '--r': '14deg', color: 'var(--teal-bright)', animationDelay: '0.6s' }),
    b(Starfish, { top: '26%',  right: '11%', width: 60,  '--r': '-6deg', color: 'var(--teal-light)',  opacity: 0.24, animationDelay: '1.3s' }),
    b(Daisy,    { bottom: '-14%', left: '5%', width: 80, '--r': '6deg',  animationDelay: '0.9s' }),
    b(Orchid,   { bottom: '-12%', right: '5%', width: 88, '--r': '16deg', color: 'var(--teal-light)', opacity: 0.26, animationDelay: '1.6s' }),
    b(Sparkle,  { top: '20%',  left: '8%',   width: 20,  opacity: 0.32, animationDelay: '0.4s' }),
  ],
}

export default function Botanicals({ variant = 'full' }) {
  const pieces = LAYOUTS[variant] ?? LAYOUTS.full
  return (
    <div className="botanicals" aria-hidden="true">
      {pieces.map(({ Comp, style }, i) => (
        <Comp key={i} className="bot" style={style} />
      ))}
    </div>
  )
}

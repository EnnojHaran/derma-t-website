// Hand-drawn line icons matching the botanical illustration style used
// throughout the site (currentColor stroke, no fill, round joins).
// Kept intentionally simple/geometric rather than pulling in an icon library.

const p = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function GraduationCap(props) {
  return (
    <svg viewBox="0 0 24 24" {...p} {...props}>
      <path d="M2 8.5 12 4l10 4.5-10 4.5L2 8.5Z" />
      <path d="M6.5 10.6v4.6c0 1.3 2.5 3 5.5 3s5.5-1.7 5.5-3v-4.6" />
      <path d="M21 8.5v6" />
    </svg>
  )
}

export function Sprout(props) {
  return (
    <svg viewBox="0 0 24 24" {...p} {...props}>
      <path d="M12 21v-9" />
      <path d="M12 12C12 7.5 9 5 4.5 5 4.5 9.5 7.5 12 12 12Z" />
      <path d="M12 9c0-3.5 2.4-5.6 6-5.6.3 3.9-2 6.2-6 6.2" />
    </svg>
  )
}

export function Handshake(props) {
  return (
    <svg viewBox="0 0 24 24" {...p} {...props}>
      <path d="m3 11 4.2-4.2a2 2 0 0 1 2.7-.1L12 8" />
      <path d="M21 11l-4.2-4.2a2 2 0 0 0-2.7-.1L12 8l-2.5 2.4a1.6 1.6 0 0 0 2.2 2.3L13 11.5" />
      <path d="m9.5 12.6 2.3 2.2a1.6 1.6 0 0 0 2.2-2.3" />
      <path d="M3 11v6M21 11v6" />
      <path d="M6 15.5 8.3 18a2 2 0 0 0 2.8 0" />
    </svg>
  )
}

export function Users(props) {
  return (
    <svg viewBox="0 0 24 24" {...p} {...props}>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5" />
      <path d="M16 6.4c1.5.4 2.6 1.7 2.6 3.2 0 1.5-1.1 2.8-2.6 3.2" />
      <path d="M15 14c2.5.3 4.5 2.2 4.5 4.8" />
    </svg>
  )
}

export function BookOpen(props) {
  return (
    <svg viewBox="0 0 24 24" {...p} {...props}>
      <path d="M12 6.5c-1.8-1.3-4.2-2-6.8-1.7-.5.05-.9.5-.9 1v11.7c0 .6.5 1 1.1.9 2.3-.3 4.4.3 6.1 1.6" />
      <path d="M12 6.5c1.8-1.3 4.2-2 6.8-1.7.5.05.9.5.9 1v11.7c0 .6-.5 1-1.1.9-2.3-.3-4.4.3-6.1 1.6" />
      <path d="M12 6.5v12.5" />
    </svg>
  )
}

export function Lightbulb(props) {
  return (
    <svg viewBox="0 0 24 24" {...p} {...props}>
      <path d="M9 18h6" />
      <path d="M10 21h4" />
      <path d="M12 3a6 6 0 0 0-3.4 10.9c.6.45.9 1.1.9 1.8v.3h5v-.3c0-.7.3-1.35.9-1.8A6 6 0 0 0 12 3Z" />
    </svg>
  )
}

export function Mic(props) {
  return (
    <svg viewBox="0 0 24 24" {...p} {...props}>
      <rect x="9" y="2.5" width="6" height="11" rx="3" />
      <path d="M5.5 11a6.5 6.5 0 0 0 13 0" />
      <path d="M12 17.5V21M9 21h6" />
    </svg>
  )
}

export function Gift(props) {
  return (
    <svg viewBox="0 0 24 24" {...p} {...props}>
      <rect x="3.5" y="9" width="17" height="4" rx="0.8" />
      <path d="M5 13v7.2c0 .4.35.8.8.8h12.4c.45 0 .8-.4.8-.8V13" />
      <path d="M12 9v12" />
      <path d="M12 9C9.5 9 8 7.6 8 6a2.2 2.2 0 0 1 4 0Z" />
      <path d="M12 9c2.5 0 4-1.4 4-3a2.2 2.2 0 0 0-4 0Z" />
    </svg>
  )
}

export function MessageCircle(props) {
  return (
    <svg viewBox="0 0 24 24" {...p} {...props}>
      <path d="M4 12a8 8 0 1 1 3.3 6.4L4 20l1.3-3.6A7.96 7.96 0 0 1 4 12Z" />
      <path d="M8.5 11.5h7M8.5 14.2h4.5" />
    </svg>
  )
}

export function Coins(props) {
  return (
    <svg viewBox="0 0 24 24" {...p} {...props}>
      <ellipse cx="9" cy="7" rx="5.5" ry="3" />
      <path d="M3.5 7v5c0 1.7 2.5 3 5.5 3s5.5-1.3 5.5-3V7" />
      <path d="M3.5 12v5c0 1.7 2.5 3 5.5 3 2 0 3.7-.6 4.6-1.5" />
      <ellipse cx="16" cy="14" rx="4.5" ry="2.4" />
      <path d="M11.5 14v3.4c0 1.3 2 2.4 4.5 2.4s4.5-1.1 4.5-2.4V14" />
    </svg>
  )
}

export function SunIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...p} {...props}>
      <circle cx="12" cy="12" r="4.2" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((d) => (
        <line
          key={d}
          x1="12"
          y1="2.5"
          x2="12"
          y2="4.8"
          transform={`rotate(${d} 12 12)`}
        />
      ))}
    </svg>
  )
}

export function HeartPulse(props) {
  return (
    <svg viewBox="0 0 24 24" {...p} {...props}>
      <path d="M12 20.2C6.5 16.3 3 12.9 3 9a4.6 4.6 0 0 1 8-3.1A4.6 4.6 0 0 1 19 9c0 .5-.06 1-.18 1.4" />
      <path d="M14.5 14h1.7l1.1-2 1.6 4 1.1-2H21" />
      <path d="M12 20.2c1.9-1.4 3.6-2.7 5-4" />
    </svg>
  )
}

export function Mail(props) {
  return (
    <svg viewBox="0 0 24 24" {...p} {...props}>
      <rect x="3" y="5.5" width="18" height="13" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  )
}

export function Instagram(props) {
  return (
    <svg viewBox="0 0 24 24" {...p} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.3" cy="6.7" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function Target(props) {
  return (
    <svg viewBox="0 0 24 24" {...p} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function MapPin(props) {
  return (
    <svg viewBox="0 0 24 24" {...p} {...props}>
      <path d="M12 21.5C8.5 17.6 6 14.1 6 10.5a6 6 0 0 1 12 0c0 3.6-2.5 7.1-6 11Z" />
      <circle cx="12" cy="10.3" r="2.1" />
    </svg>
  )
}

export function Check(props) {
  return (
    <svg viewBox="0 0 24 24" {...p} {...props}>
      <path d="M4.5 12.5 9.5 17.5 19.5 6.5" />
    </svg>
  )
}

export const icons = {
  graduationCap: GraduationCap,
  sprout: Sprout,
  handshake: Handshake,
  users: Users,
  bookOpen: BookOpen,
  lightbulb: Lightbulb,
  mic: Mic,
  gift: Gift,
  messageCircle: MessageCircle,
  coins: Coins,
  sun: SunIcon,
  heartPulse: HeartPulse,
  mail: Mail,
  instagram: Instagram,
  target: Target,
  mapPin: MapPin,
}

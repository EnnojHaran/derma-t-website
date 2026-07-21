// The signature Derma-T heading: a flowing script accent word paired with a
// bold serif title (e.g. "your skin" / "SMOKE AFFECTS").

export default function DisplayHeading({ accent, title, as = 'h1', className = '' }) {
  const Tag = as
  return (
    <Tag className={`display-heading ${className}`}>
      {accent && <span className="dh-accent">{accent}</span>}
      <span className="dh-main">{title}</span>
    </Tag>
  )
}

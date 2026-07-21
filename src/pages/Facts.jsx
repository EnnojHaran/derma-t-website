import { useState } from 'react'
import PageHero from '../components/PageHero'
import { facts } from '../data/content'

function FactCard({ title, text }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <button
      type="button"
      className={`fact-card${flipped ? ' flipped' : ''}`}
      onClick={() => setFlipped((f) => !f)}
      aria-pressed={flipped}
    >
      <div className="fact-front">
        <h3>{title}</h3>
        <p>Click to reveal</p>
      </div>
      <div className="fact-back">
        <p>{text}</p>
      </div>
    </button>
  )
}

export default function Facts() {
  return (
    <div className="route-page">
      <PageHero
        accent="did you know?"
        title="Fun Skin Facts"
        subtitle="Click each card to learn something new!"
      />

      <section className="content-section">
        <div className="container">
          <div className="facts-grid">
            {facts.map((f) => (
              <FactCard key={f.title} title={f.title} text={f.text} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

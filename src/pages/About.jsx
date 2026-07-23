import PageHero from '../components/PageHero'
import { Check, icons } from '../components/Icons'
import { values, pillars } from '../data/content'

export default function About() {
  return (
    <div className="route-page">
      <PageHero
        accent="get to know"
        title="About Derma-T"
        subtitle="Our mission, vision, and values"
      />

      <section className="content-section">
        <div className="container">
          <div className="content-grid">
            <div className="purpose-block">
              <h2>Our Purpose</h2>
              <p>
                Derma-T is a student-led nonprofit advancing skin health
                education, hygiene, and dermatology awareness on campus and
                beyond Kingston.
              </p>
              <p>
                We believe that accessible, evidence-based skin health
                information should be available to everyone. Our mission is to
                create a community of informed, compassionate leaders who
                champion inclusive skin health.
              </p>
            </div>
            <div className="content-block">
              <h2>Our Values</h2>
              <div className="content-list">
                {values.map((v) => (
                  <div className="list-item" key={v.name}>
                    <Check className="list-item-check" />
                    <span>
                      <strong>{v.name}</strong>: {v.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pillars-section">
            <h2>Our Three Pillars</h2>
            <div className="pillar-sequence">
              {pillars.map((p, i) => {
                const Icon = icons[p.icon]
                return (
                  <div className="pillar-step" key={p.title}>
                    <span className="pillar-number">{String(i + 1).padStart(2, '0')}</span>
                    <Icon className="pillar-icon" />
                    <h3>{p.title}</h3>
                    <p>{p.text}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

import PageHero from '../components/PageHero'
import { activities } from '../data/content'

export default function Activities() {
  return (
    <div className="route-page">
      <PageHero
        accent="what we do"
        title="Our Activities"
        subtitle="Making a real difference in skin health"
      />

      <section className="content-section">
        <div className="container">
          <div className="activities-grid">
            {activities.map((a) => (
              <div className="activity-card" key={a.title}>
                <div className="activity-icon">{a.icon}</div>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

import PageHero from '../components/PageHero'
import { icons } from '../components/Icons'
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
          <div className="activity-list">
            {activities.map((a, i) => {
              const Icon = icons[a.icon]
              return (
                <div
                  className={`activity-row${i % 2 ? ' reverse' : ''}`}
                  key={a.title}
                >
                  <div className="activity-row-icon">
                    <Icon />
                  </div>
                  <div className="activity-row-body">
                    <h3>{a.title}</h3>
                    <p>{a.text}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

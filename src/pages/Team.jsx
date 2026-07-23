import { useNavigate } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { roles } from '../data/content'

export default function Team() {
  const navigate = useNavigate()

  return (
    <div className="route-page">
      <PageHero
        accent="meet the"
        title="Our Team"
        subtitle="Meet the leaders driving Derma-T forward"
      />

      <section className="content-section">
        <div className="container">
          <div className="team-list">
            {roles.map((r) => (
              <div className="team-row" key={r.title}>
                <h3 className="team-row-title">{r.title}</h3>
                <span className="role-count">
                  {r.count === 1 ? '1 seat' : `${r.count} seats`}
                </span>
                <p>{r.text}</p>
              </div>
            ))}
          </div>

          <section className="team-call content-section">
            <h2>Join Our Team</h2>
            <p>
              We&apos;re always looking for passionate student leaders to join
              us. Whether you have experience or are eager to learn, there&apos;s
              a role for you in Derma-T.
            </p>
            <button
              className="btn btn-primary btn-large"
              onClick={() => navigate('/contact')}
            >
              Express Interest
            </button>
          </section>
        </div>
      </section>
    </div>
  )
}

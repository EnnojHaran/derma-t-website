import Botanicals from './Botanicals'
import DisplayHeading from './DisplayHeading'

export default function PageHero({ accent, title, subtitle }) {
  return (
    <section className="page-hero">
      <Botanicals />
      <div className="container">
        <DisplayHeading accent={accent} title={title} />
        <p>{subtitle}</p>
      </div>
    </section>
  )
}

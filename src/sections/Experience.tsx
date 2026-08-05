import { SectionTitle } from '../components/SectionTitle'
import { experiences, honors } from '../data/portfolio'

export function Experience() {
  return (
    <section id="experience" className="section section--experience">
      <SectionTitle index="04" eyebrow="Experience" title="把研究目标，推进到工程结果。" />
      <div className="experience-layout">
        <div className="experience-list">
          {experiences.map((item) => (
            <article key={`${item.organization}-${item.period}`}>
              <div className="experience-list__period">{item.period}</div>
              <div>
                <p className="experience-list__organization">{item.organization}</p>
                <h3>{item.role}</h3>
                <p>{item.summary}</p>
                {item.result ? <p className="experience-list__result">{item.result}</p> : null}
              </div>
            </article>
          ))}
        </div>
        <aside className="honors">
          <span>SELECTED HONORS</span>
          <ul>
            {honors.map((honor) => (
              <li key={honor}>{honor}</li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  )
}

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { SectionTitle } from '../components/SectionTitle'
import { skillGroups } from '../data/portfolio'

export function Capabilities() {
  const [selected, setSelected] = useState(skillGroups[0].id)
  const active = skillGroups.find((group) => group.id === selected) ?? skillGroups[0]

  return (
    <section id="capabilities" className="section section--capabilities">
      <SectionTitle
        index="02"
        eyebrow="Capabilities"
        title="能力，需要项目证据。"
        intro="点击能力方向，查看它在真实项目中的落点。"
        inverted
      />
      <div className="capability-grid">
        <div className="capability-list" role="tablist" aria-label="能力方向">
          {skillGroups.map((group) => (
            <button
              key={group.id}
              role="tab"
              aria-selected={selected === group.id}
              aria-controls="capability-panel"
              className={selected === group.id ? 'is-active' : ''}
              onClick={() => setSelected(group.id)}
            >
              <span>{group.index}</span>
              <strong>{group.title}</strong>
              <ArrowRight aria-hidden="true" />
            </button>
          ))}
        </div>
        <div id="capability-panel" className="capability-panel" role="tabpanel" tabIndex={0}>
          <span className="capability-panel__index">{active.index}</span>
          <p className="capability-panel__summary">{active.summary}</p>
          <div className="capability-panel__tech">
            {active.technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
          <div className="capability-panel__evidence">
            <span>PROJECT EVIDENCE</span>
            {active.evidence.map((evidence) => (
              <p key={evidence}>{evidence}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

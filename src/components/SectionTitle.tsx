type SectionTitleProps = {
  index: string
  eyebrow: string
  title: string
  intro?: string
  inverted?: boolean
}

export function SectionTitle({ index, eyebrow, title, intro, inverted = false }: SectionTitleProps) {
  return (
    <header className={`section-title ${inverted ? 'section-title--inverted' : ''}`}>
      <div className="section-title__meta">
        <span>{index}</span>
        <span>{eyebrow}</span>
      </div>
      <div className="section-title__body">
        <h2>{title}</h2>
        {intro ? <p>{intro}</p> : null}
      </div>
    </header>
  )
}

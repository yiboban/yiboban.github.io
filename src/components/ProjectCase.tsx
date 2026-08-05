import { ArrowUpRight, GitFork } from 'lucide-react'
import type { Project } from '../types/portfolio'

export function ProjectCase({ project }: { project: Project }) {
  return (
    <article id={project.id} className={`project-case project-case--${project.tone}`}>
      <div className="project-case__header">
        <span className="project-case__number">{project.number}</span>
        <p>{project.eyebrow}</p>
        <span className="project-case__status">{project.status}</span>
      </div>
      <div className="project-case__grid">
        <div className="project-case__copy">
          <h3>{project.name}</h3>
          <p className="project-case__statement">{project.statement}</p>
          <div className="project-case__details">
            <div>
              <span>Problem</span>
              <p>{project.problem}</p>
            </div>
            <div>
              <span>My work</span>
              <p>{project.role}</p>
            </div>
          </div>
          <ul className="project-case__highlights">
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
          <div className="project-case__stack" aria-label="技术栈">
            {project.stack.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
          <a className="text-link" href={project.repository} target="_blank" rel="noreferrer">
            <GitFork aria-hidden="true" />
            查看仓库
            <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
        <a
          className="project-case__visual"
          href={project.repository}
          target="_blank"
          rel="noreferrer"
          aria-label={`在 GitHub 查看 ${project.name}`}
        >
          <div className="browser-bar" aria-hidden="true">
            <span />
            <span />
            <span />
            <p>github.com/yiboban/{project.name}</p>
          </div>
          <img src={project.image} alt={project.imageAlt} loading="lazy" />
          <span className="visual-link" aria-hidden="true">
            Explore <ArrowUpRight />
          </span>
        </a>
      </div>
    </article>
  )
}

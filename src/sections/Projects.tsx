import { ProjectCase } from '../components/ProjectCase'
import { SectionTitle } from '../components/SectionTitle'
import { projects } from '../data/portfolio'

export function Projects() {
  return (
    <section id="projects" className="section section--projects">
      <SectionTitle
        index="03"
        eyebrow="Selected work"
        title="三个项目，三种把问题做实的方法。"
        intro="诊断工具、全栈练习系统、测试驱动学习脚手架。只呈现能够被仓库代码和验证记录支持的事实。"
      />
      <div className="project-list">
        {projects.map((project) => (
          <ProjectCase key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

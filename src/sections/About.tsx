import { ArrowUpRight } from 'lucide-react'
import { SectionTitle } from '../components/SectionTitle'

export function About() {
  return (
    <section id="about" className="section section--about">
      <SectionTitle index="01" eyebrow="About" title="在算法和工程之间，建立完整闭环。" />
      <div className="about-grid">
        <p className="about-grid__lead">
          我关注的不是孤立的模型指标，而是从<strong>数学机制、训练实现</strong>到<strong>诊断、评估与交付</strong>的完整路径。
        </p>
        <div className="about-grid__copy">
          <p>
            吉林大学物联网工程本科，专业排名 2/52；现拟入学西安交通大学软件工程硕士。实习期间围绕抗体结构生成模型完成 GRPO、奖励建模、LoRA 微调和训练工程化实践。
          </p>
          <p>
            个人项目延续同一条主线：TrainMedic 让训练问题留下证据，DLCode 让知识变成可运行练习，MyTransformer 把复杂组件拆成可验证的学习阶段。
          </p>
          <a className="text-link" href="#experience">
            继续了解经历 <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
        <div className="fact fact--rank">
          <span>02</span>
          <p>本科专业排名 / 52</p>
        </div>
        <div className="fact fact--projects">
          <span>03</span>
          <p>核心开源项目</p>
        </div>
        <div className="fact fact--focus">
          <span>AI</span>
          <p>PyTorch · Transformer · RL</p>
        </div>
      </div>
    </section>
  )
}

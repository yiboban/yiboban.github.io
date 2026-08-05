import { ArrowDownToLine, ArrowUpRight, FileText } from 'lucide-react'
import { SectionTitle } from '../components/SectionTitle'

export function Resume() {
  return (
    <section id="resume" className="section section--resume">
      <SectionTitle index="05" eyebrow="Resume" title="更多经历，浓缩在两页里。" inverted />
      <div className="resume-grid">
        <div className="resume-copy">
          <FileText aria-hidden="true" />
          <p>
            包含完整的教育背景、强化学习实习、项目细节与个人荣誉。网页版只保留最重要的线索，PDF 提供完整上下文。
          </p>
          <div className="resume-actions">
            <a className="button button--light" href="/resume/Ban-Yibo-Resume.pdf" target="_blank">
              在线查看 <ArrowUpRight aria-hidden="true" />
            </a>
            <a className="button button--outline-light" href="/resume/Ban-Yibo-Resume.pdf" download>
              下载 PDF <ArrowDownToLine aria-hidden="true" />
            </a>
          </div>
        </div>
        <a className="resume-preview" href="/resume/Ban-Yibo-Resume.pdf" target="_blank" aria-label="打开班一博的 PDF 简历">
          <img src="/images/resume-preview.webp" alt="班一博两页简历的第一页预览" loading="lazy" />
          <span>PDF / 2 PAGES</span>
        </a>
      </div>
    </section>
  )
}

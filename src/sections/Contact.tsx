import { ArrowUpRight, GitFork, Mail } from 'lucide-react'
import { profile } from '../data/portfolio'

export function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact__eyebrow">
        <span>06</span>
        <span>LET'S CONNECT</span>
      </div>
      <h2>
        有一个值得做实的
        <span>AI 问题？聊聊。</span>
      </h2>
      <p>对 AI 工程、训练系统或合作机会感兴趣，欢迎联系我。</p>
      <div className="contact__links">
        <a href={`mailto:${profile.email}`}>
          <Mail aria-hidden="true" />
          {profile.email}
          <ArrowUpRight aria-hidden="true" />
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer">
          <GitFork aria-hidden="true" />
          github.com/yiboban
          <ArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}

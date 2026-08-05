import { ArrowDown, ArrowUpRight, GitFork } from 'lucide-react'
import { profile } from '../data/portfolio'

export function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero__meta reveal">
        <p>AI ENGINEER / 2026</p>
        <p>{profile.identity}</p>
      </div>
      <div className="hero__title-wrap reveal reveal--delay">
        <h1 id="hero-title">
          把算法，做成
          <span>可运行的系统。</span>
        </h1>
        <div className="hero-orbit" aria-hidden="true">
          <span className="orbit orbit--one" />
          <span className="orbit orbit--two" />
          <span className="orbit__core">∑</span>
          <span className="orbit__label orbit__label--a">EVIDENCE</span>
          <span className="orbit__label orbit__label--b">ITERATE</span>
          <span className="orbit__label orbit__label--c">VERIFY</span>
        </div>
      </div>
      <div className="hero__lower reveal reveal--delay-2">
        <div className="hero__identity">
          <span className="hero__name">{profile.romanizedName}</span>
          <span>{profile.name}</span>
        </div>
        <div className="hero__intro">
          <p>{profile.intro}</p>
          <div className="hero__actions">
            <a className="button button--primary" href="#projects">
              查看项目 <ArrowDown aria-hidden="true" />
            </a>
            <a className="button button--ghost" href="/resume/Ban-Yibo-Resume.pdf" target="_blank">
              查看简历 <ArrowUpRight aria-hidden="true" />
            </a>
            <a className="icon-link" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <GitFork aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
      <a className="hero__scroll" href="#about">
        Scroll to explore <ArrowDown aria-hidden="true" />
      </a>
    </section>
  )
}

import { Header } from './components/Header'
import { About } from './sections/About'
import { Capabilities } from './sections/Capabilities'
import { Contact } from './sections/Contact'
import { Experience } from './sections/Experience'
import { Hero } from './sections/Hero'
import { Projects } from './sections/Projects'
import { Resume } from './sections/Resume'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        跳到主要内容
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Capabilities />
        <Projects />
        <Experience />
        <Resume />
        <Contact />
      </main>
      <footer className="footer">
        <p>© 2026 班一博</p>
        <p>Designed & built with intent.</p>
        <a href="https://github.com/yiboban/yiboban.github.io" target="_blank" rel="noreferrer">
          Source on GitHub ↗
        </a>
      </footer>
    </>
  )
}

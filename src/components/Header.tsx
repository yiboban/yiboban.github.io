import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  ['about', '关于'],
  ['capabilities', '能力'],
  ['projects', '项目'],
  ['experience', '经历'],
  ['resume', '简历'],
  ['contact', '联系'],
] as const

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const sections = ['home', ...navItems.map(([id]) => id)]
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section))
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-20% 0px -65% 0px', threshold: [0, 0.2, 0.6] },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="返回首页">
        <span className="brand__mark">BY</span>
        <span className="brand__name">班一博</span>
      </a>
      <nav className="desktop-nav" aria-label="主导航">
        {navItems.map(([id, label]) => (
          <a
            key={id}
            href={`#${id}`}
            className={active === id ? 'is-active' : ''}
            aria-current={active === id ? 'page' : undefined}
          >
            {label}
          </a>
        ))}
      </nav>
      <a className="availability" href="mailto:17550611968@163.com">
        <span aria-hidden="true" />
        Open to opportunities
      </a>
      <button
        className="menu-button"
        type="button"
        aria-label={menuOpen ? '关闭菜单' : '打开菜单'}
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        onClick={() => setMenuOpen((value) => !value)}
      >
        {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
      <div id="mobile-menu" className={`mobile-menu ${menuOpen ? 'is-open' : ''}`}>
        {navItems.map(([id, label], index) => (
          <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
            <span>0{index + 1}</span>
            {label}
          </a>
        ))}
      </div>
    </header>
  )
}

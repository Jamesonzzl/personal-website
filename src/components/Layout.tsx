import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { useSite } from '../state/SiteContext'

export function ScrollAndTitle() {
  const { pathname } = useLocation(); const { t } = useSite()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    const segment = pathname.split('/')[1] || 'home'
    const labels: Record<string, string> = { home: t.nav.home, about: t.nav.about, projects: t.nav.projects, experience: t.nav.experience, achievements: t.nav.achievements, contact: t.nav.contact, resume: t.nav.resume }
    document.title = `${labels[segment] || '404'} — Jameson`
  }, [pathname, t])
  return null
}

export function Layout() {
  const { t, language, setLanguage, theme, toggleTheme } = useSite()
  const [open, setOpen] = useState(false); const menuButton = useRef<HTMLButtonElement>(null)
  const nav = [['/', t.nav.home], ['/about', t.nav.about], ['/projects', t.nav.projects], ['/experience', t.nav.experience], ['/achievements', t.nav.achievements], ['/contact', t.nav.contact]]
  useEffect(() => { const key = (e: KeyboardEvent) => { if (e.key === 'Escape' && open) { setOpen(false); menuButton.current?.focus() } }; document.addEventListener('keydown', key); return () => document.removeEventListener('keydown', key) }, [open])
  return <div className="site-shell">
    <a className="skip-link" href="#main-content">{t.common.skip}</a>
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="wordmark" aria-label="Jameson — Home"><span>J</span> Jameson</Link>
        <nav className={`main-nav ${open ? 'is-open' : ''}`} id="main-navigation" aria-label="Primary navigation">
          {nav.map(([to, label]) => <NavLink key={to} to={to} end={to === '/'} onClick={() => setOpen(false)}>{label}</NavLink>)}
          <NavLink className="mobile-resume" to="/resume" onClick={() => setOpen(false)}>{t.nav.resume}</NavLink>
        </nav>
        <div className="header-tools">
          <div className="language-switcher" aria-label={t.common.language}>
            <button className={language === 'en' ? 'active' : ''} onClick={() => setLanguage('en')} aria-pressed={language === 'en'}>EN</button>
            <button className={language === 'zh' ? 'active' : ''} onClick={() => setLanguage('zh')} aria-pressed={language === 'zh'}>中文</button>
          </div>
          <button className="icon-button" onClick={toggleTheme} aria-label={t.common.theme} aria-pressed={theme === 'dark'}>{theme === 'light' ? <Moon /> : <Sun />}</button>
          <Link className="resume-link" to="/resume">{t.nav.resume}</Link>
          <button ref={menuButton} className="icon-button menu-button" onClick={() => setOpen(v => !v)} aria-expanded={open} aria-controls="main-navigation" aria-label={open ? t.common.close : t.common.menu}>{open ? <X /> : <Menu />}</button>
        </div>
      </div>
    </header>
    <main id="main-content" className="route-enter"><Outlet /></main>
    <footer className="site-footer"><div className="container footer-grid"><p>{t.footer.line}</p><p>© {new Date().getFullYear()} Jameson Zhou Ze Lin. {t.footer.rights}</p></div></footer>
  </div>
}

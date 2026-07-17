import { ArrowRight, Trophy } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ArrowLink, DiscMotif, FormatDate, Section } from '../components/UI'
import { useSite } from '../state/SiteContext'

export function HomePage() {
  const { t } = useSite(); const project = t.projects[0]
  return <>
    <section className="hero container">
      <div className="hero-copy"><p className="eyebrow">{t.home.eyebrow}</p><h1>Jameson</h1><p className="hero-statement">{t.home.hero}</p><p className="lede">{t.home.intro}</p><div className="button-row"><Link className="button primary" to="/projects">{t.common.viewProjects}<ArrowRight /></Link><Link className="button secondary" to="/about">{t.common.aboutMe}</Link></div></div>
      <div className="hero-art"><DiscMotif /><p className="art-caption">J / 01<br />{t.home.scroll}</p></div>
    </section>
    <Section className="featured-section"><div className="section-heading"><p className="eyebrow">01 · {t.home.selected}</p><h2>{project.title}</h2></div><div className="featured-project"><div className="project-art"><DiscMotif robot /></div><div className="featured-copy"><FormatDate value={project.date}/><p>{t.home.projectLead}</p><div className="tag-row">{project.categories.map(cat => <span key={cat}>{t.projectsPage.filters[cat as keyof typeof t.projectsPage.filters]}</span>)}</div><ArrowLink to="/projects/robotic-head">{t.common.learnMore}</ArrowLink></div></div></Section>
    <Section><div className="section-heading split"><p className="eyebrow">02 · Interests</p><h2>{t.home.interestsTitle}</h2></div><div className="interest-grid">{t.home.interests.map(([title, text], index) => <article className={`interest-card interest-${index}`} key={title}><span className="interest-index">0{index + 1}</span><div className="interest-symbol" aria-hidden="true"/><h3>{title}</h3><p>{text}</p></article>)}</div></Section>
    <Section><div className="section-heading split"><p className="eyebrow">03 · Recognition</p><h2>{t.home.achievements}</h2></div><div className="achievement-strip">{t.achievements.map((item, index) => <article key={item.title}><div className="medal"><Trophy aria-hidden="true"/><span>0{index+1}</span></div><div><p className="eyebrow">{item.date.length === 10 ? <FormatDate value={item.date}/> : item.date}</p><h3>{item.title}</h3></div></article>)}</div><ArrowLink to="/achievements">{t.nav.achievements}</ArrowLink></Section>
    <Section className="closing-cta"><p className="eyebrow">Next chapter</p><h2>{t.home.closeTitle}</h2><p>{t.home.closeText}</p><div className="button-row"><Link className="button primary" to="/projects">{t.common.viewProjects}</Link><Link className="button secondary inverse" to="/contact">{t.nav.contact}</Link></div></Section>
  </>
}

import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLink, DiscMotif, FormatDate, PageIntro, Section } from '../components/UI'
import { useSite } from '../state/SiteContext'

const categories = ['all', 'technology', 'design', 'teamwork', 'research'] as const

export function ProjectsPage() {
  const { t, language } = useSite(); const [query, setQuery] = useState(''); const [filter, setFilter] = useState<(typeof categories)[number]>('all')
  const results = useMemo(() => t.projects.filter(project => {
    const categoryMatch = filter === 'all' || project.categories.includes(filter)
    const haystack = [project.title, project.summary, project.role, project.contribution, ...project.tools, ...project.categories.map(c => t.projectsPage.filters[c as keyof typeof t.projectsPage.filters])].join(' ').normalize('NFKC').toLocaleLowerCase(language === 'zh' ? 'zh-CN' : 'en-US')
    return categoryMatch && haystack.includes(query.trim().normalize('NFKC').toLocaleLowerCase(language === 'zh' ? 'zh-CN' : 'en-US'))
  }), [filter, query, t, language])
  const reset = () => { setFilter('all'); setQuery('') }
  return <><PageIntro eyebrow={t.projectsPage.eyebrow} title={t.projectsPage.title} intro={t.projectsPage.intro}/><Section className="projects-section">
    <div className="project-tools"><label><span>{t.common.search}</span><div className="search-box"><Search aria-hidden="true"/><input value={query} onChange={e => setQuery(e.target.value)} type="search" placeholder={t.common.search}/></div></label><div className="filter-row" aria-label="Project filters">{categories.map(cat => <button key={cat} aria-pressed={filter === cat} onClick={() => setFilter(cat)}>{t.projectsPage.filters[cat]}</button>)}</div></div>
    <p className="results-count" aria-live="polite">{results.length} / {t.projects.length}</p>
    {results.length ? <div className="project-collection">{results.map(project => <article className="project-card" key={project.slug}><div className="project-card-art"><DiscMotif robot/></div><div className="project-card-copy"><p className="eyebrow"><FormatDate value={project.date}/></p><h2><Link to={`/projects/${project.slug}`}>{project.title}</Link></h2><p>{project.summary}</p><div className="tag-row">{project.categories.map(cat => <span key={cat}>{t.projectsPage.filters[cat as keyof typeof t.projectsPage.filters]}</span>)}</div><ArrowLink to={`/projects/${project.slug}`}>{t.common.learnMore}</ArrowLink></div></article>)}</div> : <div className="empty-state"><DiscMotif/><h2>{t.common.noResults}</h2><button className="button secondary" onClick={reset}>{t.common.clear}</button></div>}
  </Section></>
}

export function ProjectDetailPage() {
  const { slug } = useParams(); const { t } = useSite(); const project = t.projects.find(item => item.slug === slug)
  if (!project) return <PageIntro eyebrow="404" title={t.notFound.title} intro={t.notFound.text}/>
  return <><section className="project-hero container"><div><ArrowLink to="/projects">{t.common.back}</ArrowLink><p className="eyebrow">{t.projectDetail.eyebrow}</p><h1>{project.title}</h1><p className="lede">{project.summary}</p><p className="project-date"><FormatDate value={project.date}/></p></div><div className="project-art large"><DiscMotif robot/></div></section>
    <Section className="project-specs"><article className="span-two"><p className="eyebrow">01</p><h2>{t.projectDetail.overview}</h2><p>{project.summary}</p></article><article><p className="eyebrow">02</p><h2>{t.projectDetail.role}</h2><p>{project.role}</p></article><article><p className="eyebrow">03</p><h2>{t.projectDetail.contribution}</h2><p>{project.contribution}</p></article><article><p className="eyebrow">04</p><h2>{t.projectDetail.challenge}</h2><p>{project.challenge}</p></article><article><p className="eyebrow">05</p><h2>{t.projectDetail.process}</h2><p>{project.process}</p></article><article className="lesson-card"><p className="eyebrow">06</p><h2>{t.projectDetail.lesson}</h2><p>{project.lesson}</p></article><article><p className="eyebrow">07</p><h2>{t.projectDetail.tools}</h2><ul className="tool-list">{project.tools.map(tool => <li key={tool}>{tool}</li>)}</ul></article></Section>
  </>
}

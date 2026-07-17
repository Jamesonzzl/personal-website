import { PageIntro, Section } from '../components/UI'
import { useSite } from '../state/SiteContext'

export function ExperiencePage() {
  const { t } = useSite()
  return <><PageIntro eyebrow={t.experiencePage.eyebrow} title={t.experiencePage.title} intro={t.experiencePage.intro}/><Section><div className="timeline">{t.timeline.map((item, index) => <article key={item.title}><div className="timeline-mark"><span>{String(index + 1).padStart(2, '0')}</span></div><div className="timeline-meta"><p className="eyebrow">{item.label}</p><p>{item.date}</p></div><div className="timeline-copy"><h2>{item.title}</h2><p>{item.text}</p></div></article>)}</div></Section></>
}

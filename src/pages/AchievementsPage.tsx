import { Award } from 'lucide-react'
import { FormatDate, PageIntro, Section } from '../components/UI'
import { useSite } from '../state/SiteContext'

export function AchievementsPage() {
  const { t } = useSite()
  return <><PageIntro eyebrow={t.achievementsPage.eyebrow} title={t.achievementsPage.title} intro={t.achievementsPage.intro}/><Section><div className="achievement-grid">{t.achievements.map((item, index) => <article className="achievement-card" key={item.title}><div className="achievement-seal"><Award aria-hidden="true"/><span>0{index + 1}</span></div><p className="eyebrow">{item.date.length === 10 ? <FormatDate value={item.date}/> : item.date}</p><h2>{item.title}</h2><p>{item.detail}</p><span className="category-label">{item.category}</span></article>)}</div></Section><Section className="certificate-panel"><div className="achievement-seal muted"><Award aria-hidden="true"/></div><div><p className="eyebrow">Future additions</p><h2>{t.achievementsPage.certificates}</h2><p>{t.achievementsPage.certificateText}</p></div></Section></>
}

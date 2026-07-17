import { DiscMotif, PageIntro, Section } from '../components/UI'
import { useSite } from '../state/SiteContext'

export function AboutPage() {
  const { t } = useSite()
  return <><PageIntro eyebrow={t.about.eyebrow} title={t.about.title} intro={t.about.intro}/>
    <Section className="about-grid"><aside className="facts-card"><DiscMotif/><dl><div><dt>Name</dt><dd>{t.fullName}</dd></div><div><dt>School</dt><dd>BASIS Hangzhou</dd></div><div><dt>Location</dt><dd>{t.contact.location}</dd></div></dl></aside><div className="about-story"><article><p className="eyebrow">01</p><h2>{t.about.workTitle}</h2><p>{t.about.work}</p></article><article><p className="eyebrow">02</p><h2>{t.about.leadTitle}</h2><p>{t.about.lead}</p></article><article><p className="eyebrow">03</p><h2>{t.about.goalTitle}</h2><p>{t.about.goal}</p></article></div></Section>
    <Section><div className="section-heading split"><p className="eyebrow">04 · Capability</p><h2>{t.about.skills}</h2></div><div className="skills-grid">{t.skills.map(group => <article className="skill-card" key={group.title}><div><p className="eyebrow">{group.level}</p><h3>{group.title}</h3></div><ul>{group.items.map(item => <li key={item}>{item}</li>)}</ul></article>)}</div></Section>
    <Section className="beyond"><div><p className="eyebrow">05 · Life & culture</p><h2>{t.about.beyond}</h2></div><article><span className="round-icon ball"/><h3>{t.home.interests[0][0]}</h3><p>{t.about.basketball}</p></article><article><span className="round-icon vinyl"/><h3>{t.home.interests[1][0]}</h3><p>{t.about.vinyl}</p></article></Section>
  </>
}

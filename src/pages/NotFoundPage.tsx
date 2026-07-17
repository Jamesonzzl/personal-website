import { Link } from 'react-router-dom'
import { DiscMotif, PageIntro, Section } from '../components/UI'
import { useSite } from '../state/SiteContext'

export function NotFoundPage() { const { t } = useSite(); return <><PageIntro eyebrow={t.notFound.eyebrow} title={t.notFound.title} intro={t.notFound.text}/><Section className="not-found"><DiscMotif/><div className="button-row"><Link className="button primary" to="/">{t.nav.home}</Link><Link className="button secondary" to="/projects">{t.common.viewProjects}</Link></div></Section></> }

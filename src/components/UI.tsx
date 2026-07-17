import type { ReactNode } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useSite } from '../state/SiteContext'

export function PageIntro({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return <section className="page-intro container"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1>{intro && <p className="lede">{intro}</p>}</section>
}
export function ArrowLink({ to, children, className = '' }: { to: string; children: ReactNode; className?: string }) {
  return <Link to={to} className={`arrow-link ${className}`}>{children}<ArrowUpRight aria-hidden="true" /></Link>
}
export function FormatDate({ value }: { value: string }) {
  const { t } = useSite(); const date = new Date(`${value}T12:00:00`)
  return <time dateTime={value}>{new Intl.DateTimeFormat(t.locale, { year: 'numeric', month: 'long', day: 'numeric' }).format(date)}</time>
}
export function DiscMotif({ robot = false }: { robot?: boolean }) {
  return <div className={`disc-motif ${robot ? 'robot-motif' : ''}`} aria-hidden="true"><div className="grooves" /><div className="disc-label">J</div><div className="court-line line-one"/><div className="court-line line-two"/>{robot && <><div className="robot-head"><span /><span /></div><div className="scan-corner c1"/><div className="scan-corner c2"/></>}</div>
}
export function Section({ children, className = '' }: { children: ReactNode; className?: string }) { return <section className={`section container reveal ${className}`}>{children}</section> }

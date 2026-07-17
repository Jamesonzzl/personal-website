import { Check, Copy, Mail, MapPin } from 'lucide-react'
import { useState } from 'react'
import { PageIntro, Section } from '../components/UI'
import { useSite } from '../state/SiteContext'

export function ContactPage() {
  const { t } = useSite(); const [copied, setCopied] = useState(false)
  const copy = async () => { try { await navigator.clipboard.writeText(t.email); setCopied(true); window.setTimeout(() => setCopied(false), 2400) } catch { const area = document.createElement('textarea'); area.value = t.email; document.body.append(area); area.select(); document.execCommand('copy'); area.remove(); setCopied(true) } }
  return <><PageIntro eyebrow={t.contact.eyebrow} title={t.contact.title} intro={t.contact.intro}/><Section className="contact-layout"><div className="contact-email"><p className="eyebrow">Email</p><a href={`mailto:${t.email}`}>{t.email}</a><div className="button-row"><a className="button primary" href={`mailto:${t.email}`}><Mail aria-hidden="true"/>Email Jameson</a><button className="button secondary" onClick={copy}>{copied ? <Check aria-hidden="true"/> : <Copy aria-hidden="true"/>}{copied ? t.common.copied : t.common.copy}</button></div><p className="copy-status" aria-live="polite">{copied ? t.common.copied : ''}</p></div><aside><MapPin aria-hidden="true"/><h2>{t.contact.location}</h2><p>{t.contact.note}</p></aside></Section></>
}

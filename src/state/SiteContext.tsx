import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { content, type ContentPack } from '../locales/content'
import type { Language, Theme } from '../types/content'

type SiteState = { language: Language; setLanguage: (value: Language) => void; theme: Theme; toggleTheme: () => void; t: ContentPack }
const SiteContext = createContext<SiteState | null>(null)

function safeGet(key: string) { try { return localStorage.getItem(key) } catch { return null } }
function safeSet(key: string, value: string) { try { localStorage.setItem(key, value) } catch { /* preferences still work for this session */ } }

function initialLanguage(): Language {
  const saved = safeGet('jameson-language')
  if (saved === 'en' || saved === 'zh') return saved
  return navigator.language.toLowerCase().startsWith('zh') ? 'zh' : 'en'
}
function initialTheme(): Theme {
  const saved = safeGet('jameson-theme')
  if (saved === 'light' || saved === 'dark') return saved
  return matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function SiteProvider({ children }: { children: ReactNode }) {
  const [language, updateLanguage] = useState<Language>(initialLanguage)
  const [theme, setTheme] = useState<Theme>(initialTheme)
  useEffect(() => { document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en'; safeSet('jameson-language', language) }, [language])
  useEffect(() => { document.documentElement.dataset.theme = theme; safeSet('jameson-theme', theme); document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#191b18' : '#f4f0e6') }, [theme])
  const value = useMemo(() => ({ language, setLanguage: updateLanguage, theme, toggleTheme: () => setTheme(v => v === 'light' ? 'dark' : 'light'), t: content[language] }), [language, theme])
  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>
}

// The hook lives beside its provider to keep this small state system easy to edit.
// eslint-disable-next-line react-refresh/only-export-components
export function useSite() { const value = useContext(SiteContext); if (!value) throw new Error('useSite must be used within SiteProvider'); return value }

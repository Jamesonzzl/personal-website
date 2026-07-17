export type Language = 'en' | 'zh'
export type Theme = 'light' | 'dark'

export interface Project {
  slug: string
  title: string
  date: string
  categories: string[]
  summary: string
  role: string
  contribution: string
  challenge: string
  process: string
  lesson: string
  tools: string[]
}

export interface Achievement {
  title: string
  date: string
  category: 'basketball' | 'volleyball' | 'team'
  detail: string
}

export interface TimelineItem {
  label: string
  date: string
  title: string
  text: string
}

export interface SkillGroup {
  title: string
  level: string
  items: string[]
}

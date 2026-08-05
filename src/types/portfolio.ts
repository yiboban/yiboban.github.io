export type Project = {
  id: string
  number: string
  name: string
  eyebrow: string
  statement: string
  problem: string
  role: string
  highlights: string[]
  stack: string[]
  status: string
  repository: string
  image: string
  imageAlt: string
  tone: 'dark' | 'light' | 'blue'
}

export type SkillGroup = {
  id: string
  title: string
  index: string
  summary: string
  technologies: string[]
  evidence: string[]
}

export type Experience = {
  period: string
  organization: string
  role: string
  summary: string
  result?: string
}

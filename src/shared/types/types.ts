export interface NotionPost {
  id: string
  title: string
  date: string
  types: string[]
  files: string[]
  author: string
}

export interface NotionPostInfo {
  title: string
  date: string
  author: string
}

export interface Author {
  name: string
  role: string
  avatarUrl: string
}

export interface Content {
  type: "paragraph" | "link"
  content: string
}

export interface PostType {
  id: number
  author: Author
  publishedAt: Date
  content: Content[]
}

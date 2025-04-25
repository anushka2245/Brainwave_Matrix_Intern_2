export interface User {
  id: string
  name: string
  email: string
  avatar: string
  bio?: string
}

export interface Comment {
  id: string
  content: string
  createdAt: Date
  author: {
    id: string
    name: string
    avatar: string
  }
  likes: number
}

export interface Post {
  id: string
  title: string
  slug: string
  content: string
  excerpt: string
  coverImage?: string
  author: User
  publishedAt: Date
  updatedAt: Date
  categories: string[]
  status: "published" | "draft"
  views: number
  readingTime: number
  comments: Comment[]
}

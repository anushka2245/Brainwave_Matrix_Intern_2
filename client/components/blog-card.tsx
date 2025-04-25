import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { formatDate } from "@/lib/utils"
import type { Post } from "@/lib/types"

interface BlogCardProps {
  post: Post
  featured?: boolean
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className={`overflow-hidden h-full transition-all hover:shadow-md ${featured ? "border-primary/20" : ""}`}>
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={post.coverImage || `/placeholder.svg?height=400&width=600`}
            alt={post.title}
            fill
            className="object-cover transition-transform hover:scale-105"
          />
          {featured && (
            <div className="absolute top-2 right-2">
              <Badge variant="secondary">Featured</Badge>
            </div>
          )}
        </div>
        <CardHeader className="p-4 pb-0">
          <div className="space-y-1">
            <div className="flex items-center gap-1">
              {post.categories.map((category) => (
                <Badge key={category} variant="outline" className="text-xs">
                  {category}
                </Badge>
              ))}
            </div>
            <h3 className="font-semibold text-xl line-clamp-2">{post.title}</h3>
          </div>
        </CardHeader>
        <CardContent className="p-4 pt-2">
          <p className="text-muted-foreground text-sm line-clamp-3">{post.excerpt}</p>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
              <AvatarFallback>{post.author.name.charAt(0).toUpperCase()}</AvatarFallback>
            </Avatar>
            <span className="text-xs text-muted-foreground">{post.author.name}</span>
          </div>
          <span className="text-xs text-muted-foreground">{formatDate(post.publishedAt)}</span>
        </CardFooter>
      </Card>
    </Link>
  )
}

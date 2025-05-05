"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Edit, Trash2, Plus } from "lucide-react"

import { useAuth } from "@/hooks/use-auth"
import { useToast } from "@/hooks/use-toast"
import { getUserPosts } from "@/lib/data"
import { formatDate } from "@/lib/utils"
import type { Post } from "@/lib/types"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DashboardPage() {
  const { user, loading } = useAuth()
  const router = useRouter()
  const { toast } = useToast()

  const [posts, setPosts] = useState<Post[]>([])
  const [activeTab, setActiveTab] = useState<string>("published")

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login")
    }
  }, [user, loading, router])

  useEffect(() => {
    if (user) {
      const fetchPosts = async () => {
        try {
          const userPosts = await getUserPosts(user.id)
          setPosts(userPosts)
        } catch (error) {
          console.error(error)
        }
      }
      fetchPosts()
    }
  }, [user])

  const handleDeletePost = (postId: string) => {
    setPosts((prev) => prev.filter((post) => post.id !== postId))

    toast({
      title: "Post deleted",
      description: "Your post has been deleted successfully.",
    })
  }

  if (loading || !user) {
    return (
      <div className="container py-12 flex justify-center items-center min-h-[50vh]">
        <p>Loading...</p>
      </div>
    )
  }

  const publishedPosts = posts.filter((post) => post.status === "published")
  const draftPosts = posts.filter((post) => post.status === "draft")

  return (
    <div className="container py-12">
      {/* Top Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Manage your blog posts and account settings</p>
        </div>
        <Link href="/create">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Post
          </Button>
        </Link>
      </div>

      {/* Main Grid */}
      <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4">
        {/* Profile Card */}
        <div className="md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Profile</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm font-medium">Name</p>
                <p className="text-sm text-muted-foreground">{user.name}</p>
              </div>
              <div>
                <p className="text-sm font-medium">Email</p>
                <p className="text-sm text-muted-foreground">{user.email}</p>
              </div>
              <div>
                <p className="text-sm font-medium">Posts</p>
                <p className="text-sm text-muted-foreground">{posts.length}</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="w-full">
                Edit Profile
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Posts Section */}
        <div className="md:col-span-2 lg:col-span-3">
          <Tabs value={activeTab} onValueChange={setActiveTab} defaultValue="published">
            <TabsList className="mb-4">
              <TabsTrigger value="published">Published ({publishedPosts.length})</TabsTrigger>
              <TabsTrigger value="drafts">Drafts ({draftPosts.length})</TabsTrigger>
            </TabsList>

            {/* Published Posts */}
            <TabsContent value="published">
              {publishedPosts.length === 0 ? (
                <EmptyState message="No published posts" buttonText="Create your first post" />
              ) : (
                <PostList posts={publishedPosts} handleDeletePost={handleDeletePost} />
              )}
            </TabsContent>

            {/* Draft Posts */}
            <TabsContent value="drafts">
              {draftPosts.length === 0 ? (
                <EmptyState message="No draft posts" buttonText="Create a new post" />
              ) : (
                <PostList posts={draftPosts} handleDeletePost={handleDeletePost} />
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

// Helper Component for Empty State
function EmptyState({ message, buttonText }: { message: string; buttonText: string }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{message}</CardTitle>
        <CardDescription>Start writing your first blog post!</CardDescription>
      </CardHeader>
      <CardFooter>
        <Link href="/create">
          <Button>{buttonText}</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

// Helper Component for List of Posts
function PostList({ posts, handleDeletePost }: { posts: Post[]; handleDeletePost: (postId: string) => void }) {
  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <Card key={post.id}>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>
                  {post.status === "published" ? `Published on ${formatDate(post.publishedAt)}` : `Updated on ${formatDate(post.updatedAt)}`}
                </CardDescription>
              </div>
              <div className="flex gap-2">
                <Link href={`/edit/${post.id}`}>
                  <Button variant="outline" size="icon">
                    <Edit className="h-4 w-4" />
                  </Button>
                </Link>
                <Button variant="outline" size="icon" onClick={() => handleDeletePost(post.id)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
          </CardContent>
          <CardFooter className="flex justify-between">
            {post.status === "published" ? (
              <>
                <div className="text-sm text-muted-foreground">
                  {post.views} views • {post.comment} comments
                </div>
                <Link href={`/blog/${post.slug}`}>
                  <Button variant="ghost" size="sm">
                    View Post
                  </Button>
                </Link>
              </>
            ) : (
              <Link href={`/edit/${post.id}`}>
                <Button variant="ghost" size="sm">
                  Continue Editing
                </Button>
              </Link>
            )}
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

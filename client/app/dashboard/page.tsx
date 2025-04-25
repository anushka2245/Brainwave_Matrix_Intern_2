"use client"

import { useEffect, useState } from "react"
import { useAuth } from "@/hooks/use-auth"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { getUserPosts } from "@/lib/data"
import type { Post } from "@/lib/types"
import { formatDate } from "@/lib/utils"
import { Edit, Trash2, Plus } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function DashboardPage() {
  const { user, loading } = useAuth()
  const router = useRouter()
  const [posts, setPosts] = useState<Post[]>([])
  const [activeTab, setActiveTab] = useState("published")
  const { toast } = useToast()

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login")
    }
  }, [user, loading, router])

  useEffect(() => {
    if (user) {
      const fetchPosts = async () => {
        const userPosts = await getUserPosts(user.id)
        setPosts(userPosts)
      }
      fetchPosts()
    }
  }, [user])

  const handleDeletePost = (postId: string) => {
    // In a real app, this would call an API
    setPosts(posts.filter((post) => post.id !== postId))

    toast({
      title: "Post deleted",
      description: "Your post has been deleted successfully.",
    })
  }

  if (loading || !user) {
    return (
      <div className="container py-12">
        <div className="flex justify-center items-center min-h-[50vh]">
          <p>Loading...</p>
        </div>
      </div>
    )
  }

  const publishedPosts = posts.filter((post) => post.status === "published")
  const draftPosts = posts.filter((post) => post.status === "draft")

  return (
    <div className="container py-12">
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

      <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4">
        <div className="md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Profile</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
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
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="w-full">
                Edit Profile
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="md:col-span-2 lg:col-span-3">
          <Tabs defaultValue="published" onValueChange={setActiveTab}>
            <TabsList className="mb-4">
              <TabsTrigger value="published">Published ({publishedPosts.length})</TabsTrigger>
              <TabsTrigger value="drafts">Drafts ({draftPosts.length})</TabsTrigger>
            </TabsList>

            <TabsContent value="published">
              {publishedPosts.length === 0 ? (
                <Card>
                  <CardHeader>
                    <CardTitle>No published posts</CardTitle>
                    <CardDescription>You haven't published any posts yet.</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Link href="/create">
                      <Button>Create your first post</Button>
                    </Link>
                  </CardFooter>
                </Card>
              ) : (
                <div className="space-y-4">
                  {publishedPosts.map((post) => (
                    <Card key={post.id}>
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle>{post.title}</CardTitle>
                            <CardDescription>Published on {formatDate(post.publishedAt)}</CardDescription>
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
                        <div className="text-sm text-muted-foreground">
                          {post.views} views • {post.comments} comments
                        </div>
                        <Link href={`/blog/${post.slug}`}>
                          <Button variant="ghost" size="sm">
                            View Post
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>

            <TabsContent value="drafts">
              {draftPosts.length === 0 ? (
                <Card>
                  <CardHeader>
                    <CardTitle>No draft posts</CardTitle>
                    <CardDescription>You don't have any drafts saved.</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Link href="/create">
                      <Button>Create a new post</Button>
                    </Link>
                  </CardFooter>
                </Card>
              ) : (
                <div className="space-y-4">
                  {draftPosts.map((post) => (
                    <Card key={post.id}>
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle>{post.title}</CardTitle>
                            <CardDescription>Last updated on {formatDate(post.updatedAt)}</CardDescription>
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
                      <CardFooter>
                        <Link href={`/edit/${post.id}`}>
                          <Button>Continue Editing</Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

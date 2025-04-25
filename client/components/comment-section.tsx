"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { formatDate } from "@/lib/utils"
import { useAuth } from "@/hooks/use-auth"
import type { Comment } from "@/lib/types"
import { useToast } from "@/hooks/use-toast"
import { ThumbsUp, Reply, Flag } from "lucide-react"

interface CommentSectionProps {
  postId: string
  comments: Comment[]
}

export function CommentSection({ postId, comments: initialComments }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>(initialComments)
  const [newComment, setNewComment] = useState("")
  const { user } = useAuth()
  const { toast } = useToast()

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault()

    if (!newComment.trim()) return

    // In a real app, this would be an API call
    const comment: Comment = {
      id: `comment-${Date.now()}`,
      content: newComment,
      createdAt: new Date(),
      author: {
        id: user?.id || "anonymous",
        name: user?.name || "Anonymous",
        avatar: user?.avatar || "/placeholder.svg?height=40&width=40",
      },
      likes: 0,
    }

    setComments([comment, ...comments])
    setNewComment("")

    toast({
      title: "Comment added",
      description: "Your comment has been added successfully.",
    })
  }

  const handleLikeComment = (commentId: string) => {
    setComments(
      comments.map((comment) => (comment.id === commentId ? { ...comment, likes: comment.likes + 1 } : comment)),
    )
  }

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-6">Comments ({comments.length})</h2>

      {user ? (
        <form onSubmit={handleSubmitComment} className="mb-8">
          <div className="flex gap-4">
            <Avatar className="h-10 w-10">
              <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
              <AvatarFallback>{user.name.charAt(0).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-2">
              <Textarea
                placeholder="Add a comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="min-h-[100px]"
              />
              <div className="flex justify-end">
                <Button type="submit">Post Comment</Button>
              </div>
            </div>
          </div>
        </form>
      ) : (
        <div className="bg-muted p-4 rounded-lg mb-8 text-center">
          <p>
            Please{" "}
            <Button variant="link" className="p-0 h-auto" asChild>
              <a href="/login">sign in</a>
            </Button>{" "}
            to join the conversation.
          </p>
        </div>
      )}

      <div className="space-y-6">
        {comments.length === 0 ? (
          <p className="text-center text-muted-foreground py-8">
            No comments yet. Be the first to share your thoughts!
          </p>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className="flex gap-4">
              <Avatar className="h-10 w-10">
                <AvatarImage src={comment.author.avatar || "/placeholder.svg"} alt={comment.author.name} />
                <AvatarFallback>{comment.author.name.charAt(0).toUpperCase()}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium">{comment.author.name}</span>
                  <span className="text-xs text-muted-foreground">{formatDate(comment.createdAt)}</span>
                </div>
                <p className="text-sm mb-2">{comment.content}</p>
                <div className="flex gap-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 px-2 text-xs"
                    onClick={() => handleLikeComment(comment.id)}
                  >
                    <ThumbsUp className="h-3.5 w-3.5 mr-1" />
                    {comment.likes > 0 && comment.likes}
                    <span className="sr-only">Like</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 px-2 text-xs">
                    <Reply className="h-3.5 w-3.5 mr-1" />
                    Reply
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 px-2 text-xs ml-auto">
                    <Flag className="h-3.5 w-3.5 mr-1" />
                    Report
                  </Button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

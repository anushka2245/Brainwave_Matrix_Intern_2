"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"
import type { User } from "@/lib/types"
import { useRouter } from "next/navigation"
import { useToast } from "@/hooks/use-toast"

interface AuthContextType {
  user: User | null
  signIn: (email: string, password: string) => Promise<void>
  signUp: (name: string, email: string, password: string) => Promise<void>
  signOut: () => void
  loading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const { toast } = useToast()

  // Check if user is logged in on initial load
  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setLoading(false)
  }, [])

  const signIn = async (email: string, password: string) => {
    setLoading(true)
    try {
      // In a real app, this would be an API call
      // Simulating authentication for demo purposes
      const mockUser = {
        id: "1",
        name: "John Doe",
        email,
        avatar: "/placeholder.svg?height=40&width=40",
      }

      // Store user in localStorage for persistence
      localStorage.setItem("user", JSON.stringify(mockUser))
      setUser(mockUser)

      toast({
        title: "Signed in successfully",
        description: "Welcome back to BlogHub!",
      })

      router.push("/dashboard")
    } catch (error) {
      toast({
        title: "Sign in failed",
        description: "Please check your credentials and try again.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const signUp = async (name: string, email: string, password: string) => {
    setLoading(true)
    try {
      // In a real app, this would be an API call
      // Simulating registration for demo purposes
      const mockUser = {
        id: "1",
        name,
        email,
        avatar: "/placeholder.svg?height=40&width=40",
      }

      // Store user in localStorage for persistence
      localStorage.setItem("user", JSON.stringify(mockUser))
      setUser(mockUser)

      toast({
        title: "Account created successfully",
        description: "Welcome to BlogHub!",
      })

      router.push("/dashboard")
    } catch (error) {
      toast({
        title: "Sign up failed",
        description: "Please try again with different credentials.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const signOut = () => {
    localStorage.removeItem("user")
    setUser(null)
    router.push("/")

    toast({
      title: "Signed out successfully",
      description: "You have been signed out of your account.",
    })
  }

  return <AuthContext.Provider value={{ user, signIn, signUp, signOut, loading }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

import Link from "next/link"
import { PenSquare } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t py-6 md:py-0">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:h-24">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-2">
          <Link href="/" className="flex items-center gap-2">
            <PenSquare className="h-5 w-5" />
            <span className="font-semibold">BlogHub</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} BlogHub. All rights reserved.
          </p>
        </div>
        <nav className="flex items-center gap-4 text-sm">
          <Link href="/terms" className="text-muted-foreground transition-colors hover:text-foreground">
            Terms
          </Link>
          <Link href="/privacy" className="text-muted-foreground transition-colors hover:text-foreground">
            Privacy
          </Link>
          <Link href="/contact" className="text-muted-foreground transition-colors hover:text-foreground">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  )
}

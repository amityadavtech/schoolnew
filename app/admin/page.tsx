import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function AdminPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-serif font-bold mb-4">Admin Area Unavailable</h1>
          <p className="text-muted-foreground mb-6">The admin dashboard and server-side features have been disabled for this static build.</p>
          <Link href="/" className="text-primary underline font-semibold">Return to Home</Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}

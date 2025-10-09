"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AdminLogin } from "@/components/admin/admin-login"
import { GalleryAdmin } from "@/components/admin/gallery-admin"

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {!isAuthenticated ? (
          <AdminLogin onLogin={() => setIsAuthenticated(true)} />
        ) : (
          <GalleryAdmin onLogout={() => setIsAuthenticated(false)} />
        )}
      </main>
      <Footer />
    </div>
  )
}

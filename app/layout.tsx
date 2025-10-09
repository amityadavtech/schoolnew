import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "../globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ScrollToTopButton } from "@/components/ui/scroll-to-top-button"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Pinnacle Academy - Excellence in Education",
  description:
    "A premier educational institution committed to nurturing young minds and fostering academic excellence through innovative teaching methods and comprehensive development programs.",
  generator: "v0.app",
  keywords: "school, education, academy, learning, students, excellence, curriculum, admissions",
  authors: [{ name: "Pinnacle Academy" }],
  openGraph: {
    title: "Pinnacle Academy - Excellence in Education",
    description:
      "A premier educational institution committed to nurturing young minds and fostering academic excellence.",
    type: "website",
    locale: "en_US",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </Suspense>
        {/* Scroll to top button for mobile */}
        <ScrollToTopButton />
        <Analytics />
      </body>
    </html>
  )
}

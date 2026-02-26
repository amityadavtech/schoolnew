"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Moon, Sun, GraduationCap } from "lucide-react"
import { useTheme } from "next-themes"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Academics", href: "/academics" },
  { name: "Admissions", href: "/admissions" },
  { name: "Faculty", href: "/faculty" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
]

export function Navigation() {
  const pathname = usePathname()
  const { setTheme, theme } = useTheme()
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white/60 dark:bg-slate-900/60 backdrop-blur border-b border-gray-100 dark:border-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-md">
              <GraduationCap className="h-5 w-5" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="hidden sm:inline-block text-lg md:text-xl font-serif font-bold text-slate-900 dark:text-white">Aira Bal Vidya Mandir</span>
              <span className="hidden sm:block text-xs text-slate-500 dark:text-slate-400">Inter College</span>
              <span className="sm:hidden text-lg font-serif font-bold text-slate-900 dark:text-white">A.B.V.M.I.C</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "relative text-sm font-semibold transition-all duration-200 px-2 py-1 rounded-md hover:scale-105",
                  pathname === item.href
                    ? "text-blue-700 bg-blue-50/60 dark:bg-blue-900/30"
                    : "text-slate-700 dark:text-slate-300 hover:text-blue-600"
                )}
              >
                <span className="pointer-events-none">{item.name}</span>
                <span
                  aria-hidden
                  className={cn(
                    "absolute left-0 right-0 -bottom-2 h-0.5 rounded-full transition-all duration-300",
                    pathname === item.href ? "bg-gradient-to-r from-blue-600 to-indigo-600 h-1" : "bg-transparent"
                  )}
                />
              </Link>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="hidden md:inline-flex bg-transparent hover:bg-blue-50/40"
              aria-label="Toggle theme"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>

            <Button asChild className="hidden md:inline-flex bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md hover:scale-105 transition-transform">
              <Link href="/admissions" className="px-4 py-2">Apply Now</Link>
            </Button>

            {/* Mobile menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden bg-white/30 dark:bg-slate-800/30">
                  <Menu className="h-5 w-5 text-slate-700 dark:text-slate-200" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="w-full max-w-full sm:w-[90vw] sm:max-w-sm p-0 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl rounded-l-2xl shadow-2xl border-none overflow-hidden animate-in fade-in slide-in-from-right duration-300"
              >
                <div className="flex flex-col h-full">
                  {/* SheetContent already provides a close button at top right */}
                  <nav className="flex-1 flex flex-col gap-3 px-6 py-6 mt-8">
                    {navigation.map((item, idx) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "text-lg font-semibold rounded-xl px-4 py-3 transition-all duration-200 hover:bg-blue-50 hover:text-blue-700 focus:bg-blue-100 outline-none",
                          pathname === item.href ? "bg-blue-50 text-blue-700" : "text-slate-700 dark:text-slate-200",
                          `animate-in fade-in slide-in-from-right duration-300 delay-[${idx * 60}ms]`
                        )}
                        tabIndex={0}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                  <div className="px-6 pb-6 pt-2 border-t flex flex-col gap-2">
                    <Button
                      variant="ghost"
                      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                      className="w-full justify-start"
                    >
                      <Sun className="h-4 w-4 mr-2 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                      <Moon className="absolute h-4 w-4 ml-2 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                      Toggle theme
                    </Button>
                    <Button asChild className="w-full mt-1">
                      <Link href="/admissions" onClick={() => setIsOpen(false)}>
                        Apply Now
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

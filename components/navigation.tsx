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
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 overflow-x-hidden">
      <div className="container mx-auto px-4 overflow-x-hidden">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-primary" />
            {/* Abbreviated name on very small screens, full name from sm+ */}
            <span className="hidden sm:inline-block text-xl font-serif font-bold text-primary">Aira Bal Vidya Mandir Inter College</span>
            <span className="sm:hidden text-lg font-serif font-bold text-primary">A.B.V.M.I.C</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href ? "text-primary" : "text-muted-foreground",
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="hidden md:inline-flex"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            <Button asChild className="hidden md:inline-flex">
              <Link href="/admissions">Apply Now</Link>
            </Button>

            {/* Mobile menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="w-full max-w-full sm:w-[90vw] sm:max-w-sm p-0 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl rounded-l-2xl shadow-2xl border-none overflow-hidden animate-in fade-in slide-in-from-right duration-300"
              >
                <div className="flex flex-col h-full">
                  {/* SheetContent already provides a close button at top right */}
                  <nav className="flex-1 flex flex-col gap-2 px-6 py-6 mt-8">
                    {navigation.map((item, idx) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "text-lg font-semibold rounded-xl px-4 py-3 transition-all duration-200 hover:bg-primary/10 hover:text-primary focus:bg-primary/20 focus:text-primary outline-none",
                          pathname === item.href ? "bg-primary/10 text-primary" : "text-zinc-700 dark:text-zinc-200",
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

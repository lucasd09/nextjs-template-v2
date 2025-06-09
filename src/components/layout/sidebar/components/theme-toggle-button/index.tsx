"use client"

import { DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { uppercaseFirstLetter } from "@/lib/utils"
import { Moon, Sun, Laptop } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

const themes = ["light", "dark", "system"] as const

export function ThemeToggleButton() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch (next-themes recommended pattern)
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const getIcon = () => {
    switch (theme) {
      case "light":
        return <Sun className="size-4" />
      case "dark":
        return <Moon className="size-4" />
      case "system":
        return <Laptop className="size-4" />
    }
  }

  const handleToggle = (e: Event) => {
    e.preventDefault()
    const currentIndex = themes.indexOf(theme as (typeof themes)[number])
    const nextTheme = themes[(currentIndex + 1) % themes.length]

    setTheme(nextTheme)
  }

  return (
    <DropdownMenuItem onSelect={handleToggle} aria-label="Toggle theme">
      {getIcon()}
      {uppercaseFirstLetter(theme || 'light')} theme
    </DropdownMenuItem>
  )
}

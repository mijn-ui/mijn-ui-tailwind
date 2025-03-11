"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { FiMoon, FiSun } from "react-icons/fi"
import { cn } from "@/lib/utils"

/* -------------------------------------------------------------------------- */

const ThemeToggler = ({ className }: { className?: string }) => {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return

  if (resolvedTheme === "dark") {
    return (
      <button
        onClick={() => setTheme("light")}
        className={cn(
          "flex size-8 items-center justify-center text-muted-text transition duration-200 hover:text-secondary-text sm:size-10",
          className,
        )}>
        <FiSun />
      </button>
    )
  }
  if (resolvedTheme === "light") {
    return (
      <button
        onClick={() => setTheme("dark")}
        className={cn(
          "flex size-8 items-center justify-center text-muted-text transition duration-200 hover:text-secondary-text sm:size-10",
          className,
        )}>
        <FiMoon />
      </button>
    )
  }
}

export default ThemeToggler

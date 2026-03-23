"use client"

import { useEffect, useState } from "react"

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = scrollPx / winHeightPx
      const progress = scrolled * 100

      setScrollProgress(progress)
    }

    window.addEventListener("scroll", updateScrollProgress)
    updateScrollProgress() // Initial call

    return () => {
      window.removeEventListener("scroll", updateScrollProgress)
    }
  }, [])

  return (
    <div className="fixed top-16 left-0 w-full h-1.5 bg-muted/50 z-[9999] border-b border-border/30">
      <div
        className="h-full bg-secondary transition-all duration-150 ease-out shadow-sm"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  )
}

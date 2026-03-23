"use client"

import { useEffect, useRef } from "react"

// Intersection Observer hook for scroll animations
export function useScrollAnimation(threshold = 0.1) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("animate-in")
        }
      },
      { threshold },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold])

  return ref
}

// Staggered animation hook for multiple elements
export function useStaggeredAnimation(delay = 100) {
  const containerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const children = Array.from(container.children) as HTMLElement[]

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          children.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add("animate-in")
            }, index * delay)
          })
        }
      },
      { threshold: 0.1 },
    )

    observer.observe(container)
    return () => observer.disconnect()
  }, [delay])

  return containerRef
}

// Parallax scroll effect
export function useParallax(speed = 0.5) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const rate = scrolled * -speed
      element.style.transform = `translateY(${rate}px)`
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed])

  return ref
}

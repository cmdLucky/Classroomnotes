"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleLanguage = () => {
    setLanguage(language === "zh" ? "en" : "zh")
  }

  const navItems = [
    { href: "/", label: t("首頁", "Home") },
    { href: "/locations", label: t("探索地點", "Locations") },
    { href: "/activities", label: t("精彩活動", "Activities") },
    { href: "/stories", label: t("在地故事", "Stories") },
    { href: "/shop", label: t("文創商品", "Shop") },
    { href: "/about", label: t("關於我們", "About") },
    { href: "/contact", label: t("聯絡我們", "Contact") },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background border-b border-border shadow-lg" : "bg-background border-b border-border/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-3 hover-scale">
            <div className="relative w-12 h-12">
              <Image src="/me-go-out-logo.png" alt="ME GO OUT Logo" fill className="object-contain" priority />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-all duration-200 font-medium relative group"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center space-x-1 hover-scale"
            >
              <span className="text-sm">🌐</span>
              <span>{language === "zh" ? "EN" : "中"}</span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center space-x-1 hover-scale"
            >
              <span className="text-sm">🌐</span>
              <span>{language === "zh" ? "EN" : "中"}</span>
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="hover-scale">
              {isOpen ? <span className="text-lg">✕</span> : <span className="text-lg">☰</span>}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden slide-up">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-muted-foreground hover:text-primary transition-all duration-200 font-medium hover:bg-muted/50 rounded-md"
                  onClick={() => setIsOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

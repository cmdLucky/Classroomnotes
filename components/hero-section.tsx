"use client"

import { TypewriterText } from "./typewriter-text"
import { useScrollAnimation, useParallax } from "./scroll-animations"
import { useLanguage } from "@/contexts/language-context"

export function HeroSection() {
  const contentRef = useScrollAnimation(0.2)
  const backgroundRef = useParallax(0.3)
  const { t } = useLanguage()

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div ref={backgroundRef} className="absolute inset-0 z-0 parallax-slow">
        <div
          className="w-full h-full bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/beautiful-terraced-fields-and-traditional-village-.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            minHeight: "100vh",
            maxHeight: "100vh",
          }}
        />
        <div className="absolute inset-0 bg-black/40 font-mono mb-0" />
      </div>

      {/* Content with Scroll Animation */}
      <div
        ref={contentRef}
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto animate-in-stagger"
      >
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 text-balance min-h-[120px] flex items-center justify-center">
          <TypewriterText
            texts={[t("挖掘在地之美", "Discover Local Beauty"), t("守護鄉郊文脈", "Preserve Rural Heritage")]}
            speed={150}
            multiLine={true}
            className="text-center [&>span:last-child]:text-primary"
          />
        </h1>

        {/* Description */}
        <p className="text-xl sm:text-2xl text-white/90 mb-4 text-pretty max-w-2xl mx-auto">
          {t(
            "探索梅子林、谷埔、吉澳三個香港鄉郊文化遺產地點，體驗客家文化與自然生態的完美融合",
            "Explore Mui Tsz Lam, Kuk Po, and Kat O - three Hong Kong rural heritage sites, experiencing the perfect blend of Hakka culture and natural ecology",
          )}
        </p>

        <p className="text-lg text-white/80 max-w-xl mx-auto mb-6">
          {t("探索在地之美，守護鄉郊文脈", "Discover Local Beauty, Preserve Rural Heritage")}
        </p>

        <button
          onClick={scrollToNext}
          className="group flex flex-col items-center space-y-2 mx-auto transition-all duration-300 hover:scale-105"
        >
          <span className="text-white/90 text-base font-medium tracking-wide hover:text-white transition-colors">
            {t("了解更多", "Learn More")}
          </span>
          <svg
            className="w-6 h-6 text-white/80 group-hover:text-white animate-bounce transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </section>
  )
}

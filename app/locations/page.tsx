"use client"

import { Navigation } from "@/components/navigation"
import { LocationsMap } from "@/components/locations-map"
import { LocationsGrid } from "@/components/locations-grid"
import { useLanguage } from "@/contexts/language-context"

export default function LocationsPage() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Page Header */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">{t("探索地點", "Explore Locations")}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t(
              "深入了解梅子林、谷埔、吉澳三個香港鄉郊文化遺產地點，每個都承載著豐富的歷史文化和自然生態",
              "Discover Mui Tsz Lam, Kuk Po, and Kat O - three Hong Kong rural heritage sites, each bearing rich historical culture and natural ecology",
            )}
          </p>
        </div>
      </section>

      <LocationsMap />
      <LocationsGrid />
    </main>
  )
}

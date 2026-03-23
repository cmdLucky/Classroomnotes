"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useScrollAnimation, useStaggeredAnimation } from "./scroll-animations"
import { useLanguage } from "@/contexts/language-context"

const locations = [
  {
    id: "mui-tsz-lam",
    name: "梅子林",
    nameEn: "Mui Tsz Lam",
    description: "400年客家村落，梯田藝術復興",
    descriptionEn: "400-year-old Hakka village with terraced fields art revival",
    image: "/traditional-terraced-fields-with-art-installations.jpg",
    highlights: ["傳統建築", "藝術復興", "梯田景觀"],
    highlightsEn: ["Traditional Architecture", "Art Revival", "Terraced Fields"],
    duration: "半日遊",
    durationEn: "Half Day",
    difficulty: "輕鬆",
    difficultyEn: "Easy",
  },
  {
    id: "kuk-po",
    name: "谷埔",
    nameEn: "Kuk Po",
    description: "金黃蘆葦田，濕地生態天堂",
    descriptionEn: "Golden reed fields and wetland ecology paradise",
    image: "/golden-reed-fields-and-wetlands-in-hong-kong-count.jpg",
    highlights: ["啟才學校", "蘆葦田", "濕地生態"],
    highlightsEn: ["Kai Choi School", "Reed Fields", "Wetland Ecology"],
    duration: "半日遊",
    durationEn: "Half Day",
    difficulty: "中等",
    difficultyEn: "Moderate",
  },
  {
    id: "kat-o",
    name: "吉澳",
    nameEn: "Kat O",
    description: "4000年歷史，聯合國地質公園",
    descriptionEn: "4000 years of history, UNESCO Geopark",
    image: "/fishing-village-bay-with-traditional-boats-and-geo.jpg",
    highlights: ["文化徑", "天后廟", "地質奇觀"],
    highlightsEn: ["Heritage Trail", "Tin Hau Temple", "Geological Wonders"],
    duration: "全日遊",
    durationEn: "Full Day",
    difficulty: "輕鬆",
    difficultyEn: "Easy",
  },
]

export function FeaturedLocations() {
  const { t, language } = useLanguage()
  const sectionRef = useScrollAnimation(0.1)
  const cardsRef = useStaggeredAnimation(150)

  return (
    <section ref={sectionRef} className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30 animate-in-stagger">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 slide-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{t("精選地點", "Featured Locations")}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t(
              "探索三個獨特的香港鄉郊文化遺產地點，每個都有其獨特的歷史故事和自然美景",
              "Explore three unique Hong Kong rural heritage sites, each with its own historical stories and natural beauty",
            )}
          </p>
        </div>

        {/* Location Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location, index) => (
            <Card
              key={location.id}
              className="group overflow-hidden hover:shadow-xl transition-all duration-500 border-0 bg-card hover-lift animate-in-stagger"
            >
              <div className="relative overflow-hidden">
                <img
                  src={location.image || "/placeholder.svg"}
                  alt={location.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm hover-scale">
                    {language === "zh" ? location.duration : location.durationEn}
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Button size="lg" className="bg-white/90 text-foreground hover:bg-white backdrop-blur-sm hover-lift">
                    <span className="mr-2 text-lg">📍</span>
                    {t("探索地點", "Explore")}
                    <span className="ml-2 text-lg">→</span>
                  </Button>
                </div>
              </div>

              <CardContent className="p-4">
                <div className="mb-3">
                  <h3 className="text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                    {t(location.name, location.nameEn)}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-2">{t(location.nameEn, location.name)}</p>
                  <p className="text-muted-foreground">
                    {language === "zh" ? location.description : location.descriptionEn}
                  </p>
                </div>

                {/* Highlights */}
                <div className="mb-3">
                  <div className="flex flex-wrap gap-2">
                    {(language === "zh" ? location.highlights : location.highlightsEn).map((highlight, idx) => (
                      <span
                        key={highlight}
                        className="bg-secondary/20 text-secondary-foreground px-2 py-1 rounded-md text-xs hover:bg-primary/20 transition-all duration-200 hover-scale"
                        style={{ animationDelay: `${idx * 100}ms` }}
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Meta Info */}
                <div className="flex items-center justify-between mb-3 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1 hover:text-primary transition-colors duration-200">
                    <span className="text-sm">⏰</span>
                    <span>{language === "zh" ? location.duration : location.durationEn}</span>
                  </div>
                  <div className="flex items-center space-x-1 hover:text-primary transition-colors duration-200">
                    <span className="text-sm">👥</span>
                    <span>{language === "zh" ? location.difficulty : location.difficultyEn}</span>
                  </div>
                </div>

                <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 hover:shadow-lg hover-lift">
                  <span className="mr-2 text-lg">📍</span>
                  {t("了解更多", "Learn More")}
                  <span className="ml-2 text-lg group-hover:translate-x-1 transition-transform duration-200">→</span>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

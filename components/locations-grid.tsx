"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Users, Star, Camera } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

const locations = [
  {
    id: "mui-tsz-lam",
    name: "梅子林",
    nameEn: "Mui Tsz Lam",
    description: "400年客家村落，梯田藝術復興項目讓古老村落重現生機",
    descriptionEn: "A 400-year-old Hakka village revitalized through terraced field art projects",
    image: "/traditional-terraced-fields-with-art-installations.jpg",
    highlights: ["傳統建築", "藝術復興", "梯田景觀", "客家文化"],
    highlightsEn: ["Traditional Architecture", "Art Revival", "Terraced Fields", "Hakka Culture"],
    duration: "半日遊",
    durationEn: "Half Day",
    difficulty: "輕鬆",
    difficultyEn: "Easy",
    rating: 4.8,
    transportation: ["巴士", "小巴", "的士"],
    transportationEn: ["Bus", "Minibus", "Taxi"],
    bestTime: "春秋兩季",
    bestTimeEn: "Spring & Autumn",
    features: ["導賞團", "工作坊", "攝影點"],
  },
  {
    id: "kuk-po",
    name: "谷埔",
    nameEn: "Kuk Po",
    description: "金黃蘆葦田與濕地生態，400年客家村落的自然奇觀",
    descriptionEn: "Golden reed fields and wetland ecology in a 400-year-old Hakka village",
    image: "/golden-reed-fields-and-wetlands-in-hong-kong-count.jpg",
    highlights: ["啟才學校", "蘆葦田", "濕地生態", "候鳥觀察"],
    highlightsEn: ["Kai Choi School", "Reed Fields", "Wetland Ecology", "Bird Watching"],
    duration: "半日遊",
    durationEn: "Half Day",
    difficulty: "中等",
    difficultyEn: "Moderate",
    rating: 4.6,
    transportation: ["巴士", "步行"],
    transportationEn: ["Bus", "Hiking"],
    bestTime: "秋冬季節",
    bestTimeEn: "Autumn & Winter",
    features: ["生態導賞", "觀鳥活動", "歷史遺跡"],
  },
  {
    id: "kat-o",
    name: "吉澳",
    nameEn: "Kat O",
    description: "4000年歷史的漁村，聯合國教科文組織世界地質公園",
    descriptionEn: "A 4000-year-old fishing village within UNESCO Global Geopark",
    image: "/fishing-village-bay-with-traditional-boats-and-geo.jpg",
    highlights: ["文化徑", "天后廟", "地質奇觀", "漁村文化"],
    highlightsEn: ["Heritage Trail", "Tin Hau Temple", "Geological Wonders", "Fishing Culture"],
    duration: "全日遊",
    durationEn: "Full Day",
    difficulty: "輕鬆",
    difficultyEn: "Easy",
    rating: 4.9,
    transportation: ["渡輪"],
    transportationEn: ["Ferry"],
    bestTime: "全年適宜",
    bestTimeEn: "Year Round",
    features: ["文化徑", "地質導賞", "海鮮美食"],
  },
]

export function LocationsGrid() {
  const { t, language } = useLanguage()

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            {t("詳細地點資訊", "Detailed Location Information")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t(
              "深入了解每個地點的獨特魅力、交通資訊和最佳遊覽時間",
              "Learn about each location's unique charm, transportation info, and best visiting times",
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {locations.map((location) => (
            <Card key={location.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={location.image || "/placeholder.svg"}
                  alt={language === "zh" ? location.name : location.nameEn}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 flex items-center space-x-2">
                  <span className="bg-primary text-primary-foreground px-2 py-1 rounded-md text-xs font-medium">
                    {language === "zh" ? location.duration : location.durationEn}
                  </span>
                  <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md flex items-center space-x-1">
                    <Star className="w-3 h-3 text-yellow-500 fill-current" />
                    <span className="text-xs font-medium">{location.rating}</span>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <Camera className="w-5 h-5 text-white drop-shadow-lg" />
                </div>
              </div>

              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {language === "zh" ? location.name : location.nameEn}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {language === "zh" ? location.nameEn : location.name}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {language === "zh" ? location.description : location.descriptionEn}
                  </p>
                </div>

                {/* Highlights */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {(language === "zh" ? location.highlights : location.highlightsEn).slice(0, 3).map((highlight) => (
                      <span
                        key={highlight}
                        className="bg-secondary/20 text-secondary-foreground px-2 py-1 rounded-md text-xs"
                      >
                        {highlight}
                      </span>
                    ))}
                    {location.highlights.length > 3 && (
                      <span className="bg-muted text-muted-foreground px-2 py-1 rounded-md text-xs">
                        +{location.highlights.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Quick Info */}
                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{t("遊覽時間", "Duration")}</span>
                    </div>
                    <span className="font-medium">{language === "zh" ? location.duration : location.durationEn}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>{t("難度等級", "Difficulty")}</span>
                    </div>
                    <span className="font-medium">
                      {language === "zh" ? location.difficulty : location.difficultyEn}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{t("最佳時間", "Best Time")}</span>
                    </div>
                    <span className="font-medium">{language === "zh" ? location.bestTime : location.bestTimeEn}</span>
                  </div>
                </div>

                {/* Transportation */}
                <div className="mb-4">
                  <div className="text-xs text-muted-foreground mb-2">{t("交通方式", "Transportation")}</div>
                  <div className="flex flex-wrap gap-1">
                    {(language === "zh" ? location.transportation : location.transportationEn).map((transport) => (
                      <span
                        key={transport}
                        className="bg-accent/20 text-accent-foreground px-2 py-1 rounded-md text-xs"
                      >
                        {transport}
                      </span>
                    ))}
                  </div>
                </div>

                <Link href={`/locations/${location.id}`}>
                  <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <MapPin className="mr-2 w-4 h-4" />
                    {t(`探索 ${location.name}`, `Explore ${location.nameEn}`)}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

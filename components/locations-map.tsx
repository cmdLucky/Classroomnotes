"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Navigation, Clock, Users } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const locations = [
  {
    id: "mui-tsz-lam",
    name: "梅子林",
    nameEn: "Mui Tsz Lam",
    coordinates: { x: 45, y: 35 },
    description: "400年客家村落，梯田藝術復興",
    descriptionEn: "400-year-old Hakka village with terraced field art revival",
    travelTime: "1.5小時",
    travelTimeEn: "1.5 hours",
    difficulty: "輕鬆",
    difficultyEn: "Easy",
    image: "/traditional-terraced-fields-with-art-installations.jpg",
  },
  {
    id: "kuk-po",
    name: "谷埔",
    nameEn: "Kuk Po",
    coordinates: { x: 65, y: 25 },
    description: "金黃蘆葦田，濕地生態天堂",
    descriptionEn: "Golden reed fields, wetland ecological paradise",
    travelTime: "2小時",
    travelTimeEn: "2 hours",
    difficulty: "中等",
    difficultyEn: "Moderate",
    image: "/golden-reed-fields-and-wetlands-in-hong-kong-count.jpg",
  },
  {
    id: "kat-o",
    name: "吉澳",
    nameEn: "Kat O",
    coordinates: { x: 75, y: 45 },
    description: "4000年歷史，聯合國地質公園",
    descriptionEn: "4000 years of history, UNESCO Global Geopark",
    travelTime: "3小時",
    travelTimeEn: "3 hours",
    difficulty: "輕鬆",
    difficultyEn: "Easy",
    image: "/fishing-village-bay-with-traditional-boats-and-geo.jpg",
  },
]

export function LocationsMap() {
  const { t, language } = useLanguage()
  const [selectedLocation, setSelectedLocation] = useState(locations[0])

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Interactive Map */}
          <div className="relative">
            <div className="bg-gradient-to-br from-secondary/20 to-accent/20 rounded-2xl p-8 h-96 relative overflow-hidden">
              {/* Map Background */}
              <div className="absolute inset-0 opacity-10">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path d="M10,80 Q30,60 50,70 T90,50" stroke="currentColor" strokeWidth="0.5" fill="none" />
                  <path d="M20,90 Q40,70 60,80 T100,60" stroke="currentColor" strokeWidth="0.5" fill="none" />
                </svg>
              </div>

              {/* Location Markers */}
              {locations.map((location) => (
                <button
                  key={location.id}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                    selectedLocation.id === location.id ? "scale-125 z-10" : "scale-100 hover:scale-110"
                  }`}
                  style={{
                    left: `${location.coordinates.x}%`,
                    top: `${location.coordinates.y}%`,
                  }}
                  onClick={() => setSelectedLocation(location)}
                >
                  <div
                    className={`w-4 h-4 rounded-full border-2 border-white shadow-lg ${
                      selectedLocation.id === location.id ? "bg-primary" : "bg-secondary"
                    }`}
                  />
                  <div
                    className={`mt-2 px-2 py-1 rounded-md text-xs font-medium whitespace-nowrap ${
                      selectedLocation.id === location.id
                        ? "bg-primary text-primary-foreground"
                        : "bg-white/90 text-foreground"
                    }`}
                  >
                    {language === "zh" ? location.name : location.nameEn}
                  </div>
                </button>
              ))}

              {/* Map Legend */}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                <div className="text-xs font-medium text-foreground mb-2">{t("圖例", "Legend")}</div>
                <div className="flex items-center space-x-4 text-xs">
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>{t("當前選擇", "Selected")}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-secondary rounded-full" />
                    <span>{t("其他地點", "Others")}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Location Details */}
          <Card className="h-fit">
            <CardContent className="p-0">
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <img
                  src={selectedLocation.image || "/placeholder.svg"}
                  alt={language === "zh" ? selectedLocation.name : selectedLocation.nameEn}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {t("精選地點", "Featured Location")}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {language === "zh" ? selectedLocation.name : selectedLocation.nameEn}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {language === "zh" ? selectedLocation.nameEn : selectedLocation.name}
                </p>
                <p className="text-muted-foreground mb-6">
                  {language === "zh" ? selectedLocation.description : selectedLocation.descriptionEn}
                </p>

                {/* Travel Info */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-2 text-sm">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">{t("車程：", "Travel:")}</span>
                    <span className="font-medium">
                      {language === "zh" ? selectedLocation.travelTime : selectedLocation.travelTimeEn}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Users className="w-4 h-4 text-secondary" />
                    <span className="text-muted-foreground">{t("難度：", "Level:")}</span>
                    <span className="font-medium">
                      {language === "zh" ? selectedLocation.difficulty : selectedLocation.difficultyEn}
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="flex-1">
                    <MapPin className="mr-2 w-4 h-4" />
                    {t("詳細資訊", "Details")}
                  </Button>
                  <Button variant="outline" className="flex-1 bg-transparent">
                    <Navigation className="mr-2 w-4 h-4" />
                    {t("路線規劃", "Get Directions")}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

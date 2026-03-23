"use client"

import { Button } from "@/components/ui/button"
import { BookOpen, Users, Camera, Heart } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function StoriesHero() {
  const { t } = useLanguage()

  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">{t("在地故事", "Local Stories")}</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          {t(
            "聆聽鄉郊的聲音，記錄文化的傳承。透過真實的故事，感受梅子林、谷埔、吉澳三地的人文情懷與歷史底蘊",
            "Listen to the voices of the countryside and document cultural heritage. Through authentic stories, experience the humanistic spirit and historical depth of Mui Tsz Lam, Kuk Po, and Kat O",
          )}
        </p>

        {/* Story Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <Users className="w-8 h-8 text-primary mx-auto mb-2" />
            <div className="text-lg font-bold text-foreground">{t("人物訪談", "Interviews")}</div>
            <div className="text-sm text-muted-foreground">{t("25+ 故事", "25+ Stories")}</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <BookOpen className="w-8 h-8 text-secondary mx-auto mb-2" />
            <div className="text-lg font-bold text-foreground">{t("歷史追溯", "History")}</div>
            <div className="text-sm text-muted-foreground">{t("18+ 故事", "18+ Stories")}</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <Camera className="w-8 h-8 text-accent mx-auto mb-2" />
            <div className="text-lg font-bold text-foreground">{t("生態發現", "Ecology")}</div>
            <div className="text-sm text-muted-foreground">{t("22+ 故事", "22+ Stories")}</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <Heart className="w-8 h-8 text-orange-500 mx-auto mb-2" />
            <div className="text-lg font-bold text-foreground">{t("藝文創作", "Arts & Culture")}</div>
            <div className="text-sm text-muted-foreground">{t("15+ 故事", "15+ Stories")}</div>
          </div>
        </div>

        <Button size="lg" className="bg-primary hover:bg-primary/90">
          <BookOpen className="mr-2 w-5 h-5" />
          {t("開始閱讀", "Start Reading")}
        </Button>
      </div>
    </section>
  )
}

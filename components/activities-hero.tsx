import { Button } from "@/components/ui/button"
import { Calendar, Users, MapPin } from "lucide-react"

export function ActivitiesHero() {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">精彩活動</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          參與豐富多彩的文化體驗、生態導賞和教育活動，深度探索香港鄉郊文化遺產的魅力
        </p>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto mb-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <Calendar className="w-8 h-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">15+</div>
            <div className="text-sm text-muted-foreground">每月活動</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <Users className="w-8 h-8 text-secondary mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">500+</div>
            <div className="text-sm text-muted-foreground">參與人次</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <MapPin className="w-8 h-8 text-accent mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">3個</div>
            <div className="text-sm text-muted-foreground">活動地點</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            <Calendar className="mr-2 w-5 h-5" />
            查看活動日曆
          </Button>
          <Button variant="outline" size="lg">
            立即報名
          </Button>
        </div>
      </div>
    </section>
  )
}

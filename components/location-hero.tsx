import { Button } from "@/components/ui/button"
import { ArrowLeft, MapPin, Clock, Users, Star } from "lucide-react"
import Link from "next/link"

interface LocationHeroProps {
  data: {
    name: string
    nameEn: string
    subtitle: string
    heroImage: string
    practicalInfo: {
      duration: string
      difficulty: string
    }
  }
}

export function LocationHero({ data }: LocationHeroProps) {
  return (
    <section className="relative min-h-[70vh] flex items-end overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={data.heroImage || "/placeholder.svg"} alt={data.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      </div>

      {/* Back Button */}
      <div className="absolute top-20 left-4 sm:left-6 lg:left-8 z-20">
        <Link href="/locations">
          <Button variant="secondary" size="sm" className="bg-white/90 backdrop-blur-sm">
            <ArrowLeft className="mr-2 w-4 h-4" />
            返回地點列表
          </Button>
        </Link>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">{data.name}</h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-2">{data.nameEn}</p>
            <p className="text-lg text-white/80 mb-8">{data.subtitle}</p>

            {/* Quick Info */}
            <div className="flex flex-wrap items-center gap-6 mb-8">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Clock className="w-4 h-4 text-white" />
                <span className="text-white text-sm">{data.practicalInfo.duration}</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Users className="w-4 h-4 text-white" />
                <span className="text-white text-sm">{data.practicalInfo.difficulty}</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-white text-sm">推薦景點</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <MapPin className="mr-2 w-5 h-5" />
                開始探索
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 bg-transparent"
              >
                查看路線
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

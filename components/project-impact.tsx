import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, MapPin, Calendar } from "lucide-react"

export function ProjectImpact() {
  const stats = [
    {
      icon: MapPin,
      number: "3",
      label: "保育地點",
      labelEn: "Conservation Sites",
      description: "梅子林、谷埔、吉澳",
    },
    {
      icon: Users,
      number: "500+",
      label: "受惠村民",
      labelEn: "Benefited Villagers",
      description: "直接參與項目的本地居民",
    },
    {
      icon: Calendar,
      number: "50+",
      label: "文化活動",
      labelEn: "Cultural Activities",
      description: "每年舉辦的保育教育活動",
    },
    {
      icon: TrendingUp,
      number: "85%",
      label: "滿意度",
      labelEn: "Satisfaction Rate",
      description: "參與者對項目的滿意程度",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">項目成果</h2>
          <p className="text-xl text-muted-foreground mb-6">Project Impact</p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            自項目啟動以來，我們在文化保育、社區發展和教育推廣方面取得了顯著成果。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-2 hover:border-primary/20 transition-colors">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <h3 className="text-lg font-semibold text-foreground mb-1">{stat.label}</h3>
                <p className="text-sm text-muted-foreground mb-2">{stat.labelEn}</p>
                <p className="text-xs text-muted-foreground text-pretty">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

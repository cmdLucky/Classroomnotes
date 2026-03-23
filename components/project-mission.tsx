import { Card, CardContent } from "@/components/ui/card"
import { Heart, Leaf, Users, BookOpen } from "lucide-react"

export function ProjectMission() {
  const missions = [
    {
      icon: Heart,
      title: "文化傳承",
      subtitle: "Cultural Heritage",
      description: "保護和傳承香港鄉村地區的傳統文化、建築和生活方式",
      descriptionEn: "Protect and preserve traditional culture, architecture, and lifestyles of Hong Kong rural areas",
    },
    {
      icon: Leaf,
      title: "生態保育",
      subtitle: "Ecological Conservation",
      description: "維護鄉郊地區的自然生態環境和生物多樣性",
      descriptionEn: "Maintain natural ecological environments and biodiversity in rural areas",
    },
    {
      icon: Users,
      title: "社區參與",
      subtitle: "Community Engagement",
      description: "促進本地社區與外界的交流，創造可持續發展機會",
      descriptionEn:
        "Foster exchange between local communities and the outside world, creating sustainable development opportunities",
    },
    {
      icon: BookOpen,
      title: "教育推廣",
      subtitle: "Educational Outreach",
      description: "透過教育活動提高公眾對鄉村文化遺產的認識和重視",
      descriptionEn:
        "Raise public awareness and appreciation of rural cultural heritage through educational activities",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">我們的使命</h2>
          <p className="text-xl text-muted-foreground">Our Mission</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {missions.map((mission, index) => (
            <Card key={index} className="border-2 hover:border-primary/20 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <mission.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{mission.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{mission.subtitle}</p>
                <p className="text-sm text-muted-foreground mb-2 text-pretty">{mission.description}</p>
                <p className="text-xs text-muted-foreground/80 text-pretty">{mission.descriptionEn}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, MapPin, Leaf, Users } from "lucide-react"

interface LocationDetailsProps {
  data: {
    description: string
    history: string
    highlights: Array<{
      title: string
      description: string
    }>
  }
}

export function LocationDetails({ data }: LocationDetailsProps) {
  const icons = [BookOpen, MapPin, Leaf, Users]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Description */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">地點介紹</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">{data.description}</p>
            <h3 className="text-xl font-bold text-foreground mb-4">歷史背景</h3>
            <p className="text-muted-foreground leading-relaxed">{data.history}</p>
          </div>

          {/* Highlights */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">主要亮點</h2>
            <div className="space-y-4">
              {data.highlights.map((highlight, index) => {
                const Icon = icons[index % icons.length]
                return (
                  <Card key={index} className="border-0 bg-muted/30">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-foreground mb-2">{highlight.title}</h4>
                          <p className="text-muted-foreground">{highlight.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

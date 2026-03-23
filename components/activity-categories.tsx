import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Palette, Leaf, GraduationCap, Users, ArrowRight } from "lucide-react"

const categories = [
  {
    id: "cultural",
    title: "文化體驗",
    titleEn: "Cultural Experiences",
    description: "深度體驗客家文化，參與傳統手工藝製作，品嚐地道美食",
    icon: Palette,
    color: "bg-primary/10 text-primary",
    activities: ["客家風味體驗", "傳統手工藝", "文化導賞", "節慶活動"],
    image: "/traditional-terraced-fields-with-art-installations.jpg",
  },
  {
    id: "eco-tourism",
    title: "生態旅遊",
    titleEn: "Eco-Tourism",
    description: "探索豐富的自然生態，觀察候鳥遷徙，了解濕地保育",
    icon: Leaf,
    color: "bg-secondary/10 text-secondary",
    activities: ["觀鳥活動", "濕地導賞", "生態攝影", "自然教育"],
    image: "/golden-reed-fields-and-wetlands-in-hong-kong-count.jpg",
  },
  {
    id: "education",
    title: "教育活動",
    titleEn: "Educational Programs",
    description: "專為學校和團體設計的教育課程，寓教於樂的學習體驗",
    icon: GraduationCap,
    color: "bg-accent/10 text-accent",
    activities: ["研學旅行", "工作坊", "講座分享", "實地考察"],
    image: "/cuhk-professors-and-students-working-with-local-vi.jpg",
  },
  {
    id: "community",
    title: "社區參與",
    titleEn: "Community Participation",
    description: "與當地社區合作，參與保育工作，支持可持續發展",
    icon: Users,
    color: "bg-orange-100 text-orange-600",
    activities: ["義工服務", "保育工作", "社區建設", "文化交流"],
    image: "/beautiful-terraced-fields-and-traditional-village-.jpg",
  },
]

export function ActivityCategories() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">活動類別</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            我們提供多元化的活動體驗，滿足不同年齡層和興趣愛好者的需求
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <Card key={category.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute top-4 left-4">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center ${category.color.replace("text-", "bg-").replace("/10", "/20")} backdrop-blur-sm`}
                  >
                    <category.icon className="w-6 h-6" />
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-foreground mb-1">{category.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{category.titleEn}</p>
                  <p className="text-muted-foreground">{category.description}</p>
                </div>

                {/* Activity Types */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {category.activities.map((activity) => (
                      <span key={activity} className={`px-3 py-1 rounded-full text-xs font-medium ${category.color}`}>
                        {activity}
                      </span>
                    ))}
                  </div>
                </div>

                <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  探索{category.title}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

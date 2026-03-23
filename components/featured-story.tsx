import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, User, MapPin, ArrowRight } from "lucide-react"

const featuredStory = {
  id: "grandmother-lau-hakka-heritage",
  title: "劉婆婆的客家記憶",
  subtitle: "梅子林最後的守護者",
  excerpt:
    "八十歲的劉婆婆是梅子林村最年長的居民，她見證了村落從繁榮到衰落，再到藝術復興的完整歷程。透過她的回憶，我們得以窺見客家文化的深厚底蘊...",
  author: "陳文華",
  location: "梅子林",
  readTime: "8分鐘",
  publishDate: "2024-03-10",
  category: "人物訪談",
  image: "/beautiful-terraced-fields-and-traditional-village-.jpg",
  tags: ["客家文化", "口述歷史", "村落變遷", "文化傳承"],
}

export function FeaturedStory() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">精選故事</h2>
          <p className="text-muted-foreground">本月最受關注的深度報導</p>
        </div>

        <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 max-w-5xl mx-auto">
          <CardContent className="p-0">
            <div className="flex flex-col lg:flex-row">
              {/* Image */}
              <div className="lg:w-3/5 h-64 lg:h-96 relative">
                <img
                  src={featuredStory.image || "/placeholder.svg"}
                  alt={featuredStory.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    精選故事
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm text-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {featuredStory.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-2/5 p-8 flex flex-col justify-center">
                <div className="mb-4">
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">{featuredStory.title}</h3>
                  <p className="text-lg text-primary font-medium mb-4">{featuredStory.subtitle}</p>
                  <p className="text-muted-foreground leading-relaxed mb-6">{featuredStory.excerpt}</p>
                </div>

                {/* Meta Info */}
                <div className="space-y-3 mb-6 text-sm">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">作者：</span>
                    <span className="font-medium">{featuredStory.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">地點：</span>
                    <span className="font-medium">{featuredStory.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">閱讀時間：</span>
                    <span className="font-medium">{featuredStory.readTime}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {featuredStory.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-secondary/20 text-secondary-foreground px-2 py-1 rounded-md text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <Button className="w-full lg:w-auto">
                  閱讀完整故事
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

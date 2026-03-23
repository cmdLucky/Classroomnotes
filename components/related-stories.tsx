import { Card, CardContent } from "@/components/ui/card"
import { Clock, User, Eye } from "lucide-react"
import Link from "next/link"

const relatedStories = [
  {
    id: "hakka-cuisine-revival",
    title: "客家菜的復興之路",
    author: "李明華",
    readTime: "6分鐘",
    views: 1240,
    image: "/traditional-terraced-fields-with-art-installations.jpg",
    category: "藝文創作",
  },
  {
    id: "terraced-fields-art",
    title: "梯田上的藝術夢想",
    author: "陳藝術",
    readTime: "8分鐘",
    views: 1650,
    image: "/beautiful-terraced-fields-and-traditional-village-.jpg",
    category: "藝文創作",
  },
  {
    id: "village-elder-wisdom",
    title: "村中長者的智慧",
    author: "黃文化",
    readTime: "10分鐘",
    views: 980,
    image: "/cuhk-professors-and-students-working-with-local-vi.jpg",
    category: "人物訪談",
  },
]

interface RelatedStoriesProps {
  currentStoryId: string
}

export function RelatedStories({ currentStoryId }: RelatedStoriesProps) {
  const filteredStories = relatedStories.filter((story) => story.id !== currentStoryId)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">相關故事</h2>
          <p className="text-muted-foreground">您可能也會感興趣的其他故事</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStories.map((story) => (
            <Card key={story.id} className="group overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={story.image || "/placeholder.svg"}
                  alt={story.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-foreground px-2 py-1 rounded-md text-xs font-medium">
                    {story.category}
                  </span>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3 line-clamp-2">{story.title}</h3>

                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-1">
                    <User className="w-3 h-3" />
                    <span>{story.author}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{story.readTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="w-3 h-3" />
                      <span>{story.views}</span>
                    </div>
                  </div>
                </div>

                <Link href={`/stories/${story.id}`} className="text-primary hover:text-primary/80 text-sm font-medium">
                  閱讀更多 →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

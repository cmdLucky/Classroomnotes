"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, User, MapPin, Eye, Heart } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

const stories = [
  {
    id: "hakka-cuisine-revival",
    title: "客家菜的復興之路",
    excerpt: "從傳統到創新，梅子林的客家菜如何在現代社會中找到新的生命力",
    author: "李明華",
    location: "梅子林",
    category: "藝文創作",
    readTime: "6分鐘",
    publishDate: "2024-03-08",
    views: 1240,
    likes: 89,
    image: "/traditional-terraced-fields-with-art-installations.jpg",
    tags: ["客家菜", "美食文化", "創新傳承"],
  },
  {
    id: "wetland-ecosystem-study",
    title: "谷埔濕地的生態奇蹟",
    excerpt: "深入探索谷埔濕地的生物多樣性，了解這片土地如何成為候鳥的天堂",
    author: "張生態",
    location: "谷埔",
    category: "生態發現",
    readTime: "10分鐘",
    publishDate: "2024-03-05",
    views: 2150,
    likes: 156,
    image: "/golden-reed-fields-and-wetlands-in-hong-kong-count.jpg",
    tags: ["濕地生態", "候鳥遷徙", "環境保護"],
  },
  {
    id: "fishing-village-memories",
    title: "漁村歲月的記憶",
    excerpt: "吉澳老漁民的口述歷史，回憶那些與海為伴的美好時光",
    author: "王海文",
    location: "吉澳",
    category: "人物訪談",
    readTime: "12分鐘",
    publishDate: "2024-03-02",
    views: 1890,
    likes: 134,
    image: "/fishing-village-bay-with-traditional-boats-and-geo.jpg",
    tags: ["漁村文化", "口述歷史", "海洋生活"],
  },
  {
    id: "terraced-fields-art",
    title: "梯田上的藝術夢想",
    excerpt: "當代藝術家如何在古老的梯田中創作，為鄉村注入新的活力",
    author: "陳藝術",
    location: "梅子林",
    category: "藝文創作",
    readTime: "8分鐘",
    publishDate: "2024-02-28",
    views: 1650,
    likes: 112,
    image: "/beautiful-terraced-fields-and-traditional-village-.jpg",
    tags: ["當代藝術", "鄉村復興", "創意空間"],
  },
  {
    id: "geological-wonders",
    title: "地質公園的秘密",
    excerpt: "探索吉澳地質公園的形成歷史，了解4000年來的地質變化",
    author: "劉地質",
    location: "吉澳",
    category: "歷史追溯",
    readTime: "9分鐘",
    publishDate: "2024-02-25",
    views: 1420,
    likes: 98,
    image: "/fishing-village-bay-with-traditional-boats-and-geo.jpg",
    tags: ["地質科學", "自然歷史", "UNESCO"],
  },
  {
    id: "reed-field-seasons",
    title: "蘆葦田的四季變化",
    excerpt: "記錄谷埔蘆葦田一年四季的美麗變化，感受大自然的韻律",
    author: "黃攝影",
    location: "谷埔",
    category: "生態發現",
    readTime: "7分鐘",
    publishDate: "2024-02-22",
    views: 2340,
    likes: 187,
    image: "/golden-reed-fields-and-wetlands-in-hong-kong-count.jpg",
    tags: ["自然攝影", "季節變化", "生態美學"],
  },
]

const categoryColors = {
  人物訪談: "bg-primary/20 text-primary",
  歷史追溯: "bg-secondary/20 text-secondary",
  生態發現: "bg-accent/20 text-accent",
  藝文創作: "bg-orange-100 text-orange-600",
}

export function StoriesGrid() {
  const { t } = useLanguage()

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <Card key={story.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={story.image || "/placeholder.svg"}
                  alt={story.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      categoryColors[story.category as keyof typeof categoryColors]
                    }`}
                  >
                    {story.category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 flex items-center space-x-2">
                  <div className="bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-md flex items-center space-x-1 text-xs">
                    <Eye className="w-3 h-3" />
                    <span>{story.views}</span>
                  </div>
                  <div className="bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-md flex items-center space-x-1 text-xs">
                    <Heart className="w-3 h-3" />
                    <span>{story.likes}</span>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2">{story.title}</h3>
                  <p className="text-muted-foreground text-sm line-clamp-3">{story.excerpt}</p>
                </div>

                {/* Meta Info */}
                <div className="space-y-2 mb-4 text-xs text-muted-foreground">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <User className="w-3 h-3" />
                      <span>{story.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{story.readTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-3 h-3" />
                      <span>{story.location}</span>
                    </div>
                    <span>{new Date(story.publishDate).toLocaleDateString("zh-HK")}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {story.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="bg-muted text-muted-foreground px-2 py-1 rounded-md text-xs">
                        {tag}
                      </span>
                    ))}
                    {story.tags.length > 2 && (
                      <span className="bg-muted text-muted-foreground px-2 py-1 rounded-md text-xs">
                        +{story.tags.length - 2}
                      </span>
                    )}
                  </div>
                </div>

                <Link href={`/stories/${story.id}`}>
                  <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {t("閱讀故事", "Read Story")}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            {t("載入更多故事", "Load More Stories")}
          </Button>
        </div>
      </div>
    </section>
  )
}

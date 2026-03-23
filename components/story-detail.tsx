import { Button } from "@/components/ui/button"
import { ArrowLeft, Clock, User, MapPin, Eye, Heart, Share2, Bookmark } from "lucide-react"
import Link from "next/link"

interface StoryDetailProps {
  story: {
    title: string
    subtitle: string
    author: string
    location: string
    category: string
    readTime: string
    publishDate: string
    views: number
    likes: number
    image: string
    tags: string[]
    content: string
  }
}

const categoryColors = {
  人物訪談: "bg-primary/20 text-primary",
  歷史追溯: "bg-secondary/20 text-secondary",
  生態發現: "bg-accent/20 text-accent",
  藝文創作: "bg-orange-100 text-orange-600",
}

export function StoryDetail({ story }: StoryDetailProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={story.image || "/placeholder.svg"} alt={story.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        </div>

        {/* Back Button */}
        <div className="absolute top-20 left-4 sm:left-6 lg:left-8 z-20">
          <Link href="/stories">
            <Button variant="secondary" size="sm" className="bg-white/90 backdrop-blur-sm">
              <ArrowLeft className="mr-2 w-4 h-4" />
              返回故事列表
            </Button>
          </Link>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 pb-16">
          <div className="max-w-4xl mx-auto">
            <span
              className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${
                categoryColors[story.category as keyof typeof categoryColors]
              }`}
            >
              {story.category}
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 text-balance">{story.title}</h1>
            <p className="text-xl text-white/90 mb-8">{story.subtitle}</p>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-white/80 text-sm">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>{story.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>{story.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{story.readTime}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Eye className="w-4 h-4" />
                <span>{story.views.toLocaleString()}</span>
              </div>
              <span>{new Date(story.publishDate).toLocaleDateString("zh-HK")}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <article className="lg:col-span-3">
              <div
                className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-p:leading-relaxed"
                dangerouslySetInnerHTML={{ __html: story.content }}
              />

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-border">
                <div className="flex flex-wrap gap-2">
                  {story.tags.map((tag) => (
                    <span key={tag} className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Engagement */}
              <div className="mt-8 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Button variant="outline" size="sm">
                    <Heart className="mr-2 w-4 h-4" />
                    讚好 ({story.likes})
                  </Button>
                  <Button variant="outline" size="sm">
                    <Share2 className="mr-2 w-4 h-4" />
                    分享
                  </Button>
                </div>
                <Button variant="outline" size="sm">
                  <Bookmark className="mr-2 w-4 h-4" />
                  收藏
                </Button>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Author Info */}
                <div className="bg-muted/50 rounded-lg p-6">
                  <h3 className="font-bold text-foreground mb-3">關於作者</h3>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{story.author}</div>
                      <div className="text-sm text-muted-foreground">文化記者</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    專注於香港鄉郊文化保育報導，致力於記錄和傳承本土文化故事。
                  </p>
                </div>

                {/* Story Stats */}
                <div className="bg-muted/50 rounded-lg p-6">
                  <h3 className="font-bold text-foreground mb-4">故事數據</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">閱讀次數</span>
                      <span className="font-medium">{story.views.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">讚好數量</span>
                      <span className="font-medium">{story.likes}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">發布日期</span>
                      <span className="font-medium">{new Date(story.publishDate).toLocaleDateString("zh-HK")}</span>
                    </div>
                  </div>
                </div>

                {/* Newsletter */}
                <div className="bg-primary/10 rounded-lg p-6">
                  <h3 className="font-bold text-foreground mb-3">訂閱故事</h3>
                  <p className="text-sm text-muted-foreground mb-4">獲取最新的鄉郊文化故事和活動資訊</p>
                  <Button className="w-full" size="sm">
                    立即訂閱
                  </Button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}

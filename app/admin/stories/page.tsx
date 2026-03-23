"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, Search, BookOpen, Edit, Trash2, Eye } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export default function StoriesAdminPage() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    const auth = localStorage.getItem("adminAuth")
    if (auth !== "true") {
      router.push("/admin/login")
    } else {
      setIsAuthenticated(true)
    }
  }, [router])

  if (!isAuthenticated) return null

  const stories = [
    {
      id: "hakka-resilience",
      title: "堅韌的客家精神",
      titleEn: "The Resilient Hakka Spirit",
      category: "文化傳承",
      date: "2024-03-15",
      status: "published",
      views: 1234,
    },
    {
      id: "village-revival",
      title: "鄉村復興之路",
      titleEn: "Path to Rural Revival",
      category: "社區發展",
      date: "2024-03-10",
      status: "published",
      views: 890,
    },
    {
      id: "ecological-conservation",
      title: "生態保育實踐",
      titleEn: "Ecological Conservation in Action",
      category: "環境保護",
      date: "2024-03-05",
      status: "draft",
      views: 0,
    },
  ]

  const filteredStories = stories.filter(
    (story) =>
      story.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.titleEn.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">故事管理</h1>
          <p className="text-muted-foreground">Stories Management</p>
        </div>
        <Button asChild>
          <Link href="/admin/stories/new">
            <Plus className="w-4 h-4 mr-2" />
            新增故事
          </Link>
        </Button>
      </div>

      <Card className="p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="搜尋故事標題... Search stories..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-4">
          {filteredStories.map((story) => (
            <Card key={story.id} className="p-6 border-2 hover:border-primary/50 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <BookOpen className="w-5 h-5 text-primary" />
                    <div>
                      <h3 className="font-bold text-lg text-foreground">{story.title}</h3>
                      <p className="text-sm text-muted-foreground">{story.titleEn}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mt-3">
                    <Badge variant={story.status === "published" ? "default" : "secondary"}>
                      {story.status === "published" ? "已發布" : "草稿"}
                    </Badge>
                    <Badge variant="outline">{story.category}</Badge>
                    <span className="text-sm text-muted-foreground">{story.date}</span>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Eye className="w-4 h-4" />
                      {story.views}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <Link href={`/admin/stories/${story.id}/edit`}>
                      <Edit className="w-4 h-4 mr-1" />
                      編輯
                    </Link>
                  </Button>
                  <Button size="sm" variant="destructive">
                    <Trash2 className="w-4 h-4 mr-1" />
                    刪除
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>
    </div>
  )
}

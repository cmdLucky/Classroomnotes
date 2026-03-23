"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Save } from "lucide-react"
import Link from "next/link"

export default function NewEventPage() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const auth = localStorage.getItem("adminAuth")
    if (auth !== "true") {
      router.push("/admin/login")
    } else {
      setIsAuthenticated(true)
    }
  }, [router])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    // TODO: 實現創建活動的API調用
    setTimeout(() => {
      alert("活動創建成功！")
      router.push("/admin/events")
    }, 1000)
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/admin/events">
                <ArrowLeft className="w-4 h-4 mr-2" />
                返回
              </Link>
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-foreground">新增活動</h1>
              <p className="text-sm text-muted-foreground">Create New Event</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <form onSubmit={handleSubmit}>
          <Card className="p-6 border-2 border-border mb-6">
            <h2 className="text-xl font-bold text-foreground mb-6">基本信息</h2>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="title">活動名稱（中文）*</Label>
                  <Input id="title" type="text" placeholder="例如：客家美食論壇" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="titleEn">活動名稱（英文）*</Label>
                  <Input id="titleEn" type="text" placeholder="e.g., Hakka Food Forum" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="series">系列名稱（可選）</Label>
                <Input id="series" type="text" placeholder="例如：MeGoOut客家美食文化系列" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">活動類別*</Label>
                <Input id="category" type="text" placeholder="例如：美食文化 Food Culture" required />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="date">活動日期*</Label>
                  <Input id="date" type="date" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time">活動時間*</Label>
                  <Input id="time" type="text" placeholder="例如：11:00 - 13:30" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">活動地點（中文）*</Label>
                <Input id="location" type="text" placeholder="例如：香港中文大學鄭裕彤樓5樓" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="locationEn">活動地點（英文）*</Label>
                <Input id="locationEn" type="text" placeholder="e.g., 5/F, Cheng Yu Tung Building, CUHK" required />
              </div>
            </div>
          </Card>

          <Card className="p-6 border-2 border-border mb-6">
            <h2 className="text-xl font-bold text-foreground mb-6">活動詳情</h2>
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="description">活動描述（中文）</Label>
                <Textarea id="description" placeholder="請輸入活動的詳細描述..." rows={6} className="resize-none" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="descriptionEn">活動描述（英文）</Label>
                <Textarea
                  id="descriptionEn"
                  placeholder="Enter the event description in English..."
                  rows={6}
                  className="resize-none"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="highlights">活動亮點（用逗號分隔）</Label>
                <Input id="highlights" type="text" placeholder="例如：專業廚師分享,客家風味午餐,線上參與" />
              </div>
            </div>
          </Card>

          <Card className="p-6 border-2 border-border mb-6">
            <h2 className="text-xl font-bold text-foreground mb-6">報名設置</h2>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="maxCapacity">最大人數*</Label>
                  <Input id="maxCapacity" type="number" placeholder="50" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="price">活動費用</Label>
                  <Input id="price" type="text" placeholder="例如：成人 HK$160 | 小童 HK$80" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="priceEn">活動費用（英文）</Label>
                <Input id="priceEn" type="text" placeholder="e.g., Adults HK$160 | Children HK$80" />
              </div>
            </div>
          </Card>

          <Card className="p-6 border-2 border-border mb-6">
            <h2 className="text-xl font-bold text-foreground mb-6">活動海報</h2>
            <div className="space-y-2">
              <Label htmlFor="image">海報圖片 URL</Label>
              <Input id="image" type="url" placeholder="例如：/event-poster.png" />
              <p className="text-xs text-muted-foreground">請先上傳圖片到 /public 文件夾，然後填寫路徑</p>
            </div>
          </Card>

          <div className="flex gap-4">
            <Button type="submit" className="flex-1 bg-primary" disabled={loading}>
              <Save className="w-4 h-4 mr-2" />
              {loading ? "保存中..." : "保存活動"}
            </Button>
            <Button type="button" variant="outline" asChild className="flex-1 bg-transparent">
              <Link href="/admin/events">取消</Link>
            </Button>
          </div>
        </form>
      </main>
    </div>
  )
}

"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter, useParams } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Save } from "lucide-react"
import Link from "next/link"
import { getEventById, updateEvent, type Event } from "@/lib/events-data"

export default function EditEventPage() {
  const router = useRouter()
  const params = useParams()
  const eventId = params.id as string

  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [event, setEvent] = useState<Event | null>(null)
  const [formData, setFormData] = useState<Partial<Event>>({})

  useEffect(() => {
    const auth = localStorage.getItem("adminAuth")
    if (auth !== "true") {
      router.push("/admin/login")
      return
    }

    setIsAuthenticated(true)

    // Load event data
    const eventData = getEventById(eventId)
    if (!eventData) {
      alert("活動不存在")
      router.push("/admin/events")
      return
    }

    setEvent(eventData)
    setFormData(eventData)
  }, [router, eventId])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const success = updateEvent(eventId, formData)
    if (success) {
      alert("活動更新成功！")
      router.push("/admin/events")
    } else {
      alert("更新失敗")
    }
  }

  const handleChange = (field: keyof Event, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (!isAuthenticated || !event) {
    return null
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/admin/events">
                <ArrowLeft className="w-4 h-4 mr-2" />
                返回
              </Link>
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-foreground">編輯活動</h1>
              <p className="text-sm text-muted-foreground">Edit Event</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <form onSubmit={handleSubmit}>
          <Card className="p-6 space-y-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="title">活動標題（中文）*</Label>
                <Input
                  id="title"
                  value={formData.title || ""}
                  onChange={(e) => handleChange("title", e.target.value)}
                  required
                />
              </div>

              <div>
                <Label htmlFor="titleEn">活動標題（英文）*</Label>
                <Input
                  id="titleEn"
                  value={formData.titleEn || ""}
                  onChange={(e) => handleChange("titleEn", e.target.value)}
                  required
                />
              </div>

              <div>
                <Label htmlFor="series">系列名稱</Label>
                <Input
                  id="series"
                  value={formData.series || ""}
                  onChange={(e) => handleChange("series", e.target.value)}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="date">日期（中文）*</Label>
                  <Input
                    id="date"
                    value={formData.date || ""}
                    onChange={(e) => handleChange("date", e.target.value)}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="dateEn">日期（英文）*</Label>
                  <Input
                    id="dateEn"
                    value={formData.dateEn || ""}
                    onChange={(e) => handleChange("dateEn", e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="time">時間 *</Label>
                <Input
                  id="time"
                  value={formData.time || ""}
                  onChange={(e) => handleChange("time", e.target.value)}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="location">地點（中文）*</Label>
                  <Input
                    id="location"
                    value={formData.location || ""}
                    onChange={(e) => handleChange("location", e.target.value)}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="locationEn">地點（英文）*</Label>
                  <Input
                    id="locationEn"
                    value={formData.locationEn || ""}
                    onChange={(e) => handleChange("locationEn", e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="category">分類 *</Label>
                <Input
                  id="category"
                  value={formData.category || ""}
                  onChange={(e) => handleChange("category", e.target.value)}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="price">價格（中文）</Label>
                  <Input
                    id="price"
                    value={formData.price || ""}
                    onChange={(e) => handleChange("price", e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="priceEn">價格（英文）</Label>
                  <Input
                    id="priceEn"
                    value={formData.priceEn || ""}
                    onChange={(e) => handleChange("priceEn", e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="registrations">目前報名人數</Label>
                  <Input
                    id="registrations"
                    type="number"
                    value={formData.registrations || 0}
                    onChange={(e) => handleChange("registrations", Number.parseInt(e.target.value))}
                  />
                </div>

                <div>
                  <Label htmlFor="maxCapacity">最大容量</Label>
                  <Input
                    id="maxCapacity"
                    type="number"
                    value={formData.maxCapacity || 0}
                    onChange={(e) => handleChange("maxCapacity", Number.parseInt(e.target.value))}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="image">海報圖片路徑</Label>
                <Input
                  id="image"
                  value={formData.image || ""}
                  onChange={(e) => handleChange("image", e.target.value)}
                  placeholder="/path-to-image.png"
                />
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <Button type="submit" className="flex-1">
                <Save className="w-4 h-4 mr-2" />
                保存修改
              </Button>
              <Button type="button" variant="outline" onClick={() => router.back()}>
                取消
              </Button>
            </div>
          </Card>
        </form>
      </main>
    </div>
  )
}

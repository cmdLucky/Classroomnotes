"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, Search, Edit, Trash2 } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export default function LocationsAdminPage() {
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

  const locations = [
    {
      id: "mui-tsz-lam",
      name: "梅子林",
      nameEn: "Mui Tsz Lam",
      description: "400年客家村落，梯田藝術復興",
      image: "/beautiful-terraced-fields-and-traditional-village-.jpg",
      status: "active",
      difficulty: "半日遊",
    },
    {
      id: "kuk-po",
      name: "谷埔",
      nameEn: "Kuk Po",
      description: "金黃蘆葦田，濕地生態天堂",
      image: "/golden-reed-fields-and-wetlands-in-hong-kong-count.jpg",
      status: "active",
      difficulty: "半日遊",
    },
    {
      id: "kat-o",
      name: "吉澳",
      nameEn: "Kat O",
      description: "4000年歷史，聯合國地質公園",
      image: "/fishing-village-bay-with-traditional-boats-and-geo.jpg",
      status: "active",
      difficulty: "全日遊",
    },
  ]

  const filteredLocations = locations.filter(
    (location) =>
      location.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      location.nameEn.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">地點管理</h1>
          <p className="text-muted-foreground">Locations Management</p>
        </div>
        <Button asChild>
          <Link href="/admin/locations/new">
            <Plus className="w-4 h-4 mr-2" />
            新增地點
          </Link>
        </Button>
      </div>

      <Card className="p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="搜尋地點名稱... Search locations..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLocations.map((location) => (
            <Card key={location.id} className="overflow-hidden border-2 hover:border-primary/50 transition-colors">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={location.image || "/placeholder.svg"}
                  alt={location.name}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-3 left-3 bg-green-500">{location.difficulty}</Badge>
              </div>
              <div className="p-4">
                <div className="mb-3">
                  <h3 className="font-bold text-lg text-foreground">{location.name}</h3>
                  <p className="text-sm text-muted-foreground">{location.nameEn}</p>
                  <p className="text-sm text-foreground mt-2">{location.description}</p>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent" asChild>
                    <Link href={`/admin/locations/${location.id}/edit`}>
                      <Edit className="w-4 h-4 mr-1" />
                      編輯
                    </Link>
                  </Button>
                  <Button size="sm" variant="destructive" className="flex-1">
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

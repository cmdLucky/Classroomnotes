"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, MapPin, Users, Edit, Trash2, Plus, Search, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { getEvents, deleteEvent as deleteEventData, type Event } from "@/lib/events-data"

export default function AdminEventsPage() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [events, setEvents] = useState<Event[]>([])

  useEffect(() => {
    const auth = localStorage.getItem("adminAuth")
    if (auth !== "true") {
      router.push("/admin/login")
    } else {
      setIsAuthenticated(true)
      // Load events
      setEvents(getEvents())
    }

    // Listen for updates
    const handleUpdate = () => {
      setEvents(getEvents())
    }

    window.addEventListener("events-updated", handleUpdate)

    return () => {
      window.removeEventListener("events-updated", handleUpdate)
    }
  }, [router])

  if (!isAuthenticated) {
    return null
  }

  const filteredEvents = events.filter(
    (event) =>
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.titleEn.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const getStatusBadge = (status: Event["status"]) => {
    const badges = {
      upcoming: { text: "即將開始", color: "bg-blue-100 text-blue-700" },
      ongoing: { text: "進行中", color: "bg-green-100 text-green-700" },
      completed: { text: "已完成", color: "bg-gray-100 text-gray-700" },
    }
    return badges[status]
  }

  const handleDeleteEvent = (eventId: string) => {
    if (confirm("確定要刪除此活動嗎？")) {
      const success = deleteEventData(eventId)
      if (success) {
        setEvents(getEvents())
        alert("活動已刪除")
      } else {
        alert("刪除失敗")
      }
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/admin/dashboard">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  返回
                </Link>
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-foreground">活動管理</h1>
                <p className="text-sm text-muted-foreground">Events Management</p>
              </div>
            </div>
            <Button asChild className="bg-primary">
              <Link href="/admin/events/new">
                <Plus className="w-4 h-4 mr-2" />
                新增活動
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Bar */}
        <Card className="p-4 mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="搜索活動名稱..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </Card>

        {/* Events List */}
        <div className="space-y-4">
          {filteredEvents.map((event) => {
            const badge = getStatusBadge(event.status)
            const occupancyRate = (event.registrations / event.maxCapacity) * 100

            return (
              <Card key={event.id} className="p-6 border-2 border-border hover:border-primary/50 transition-colors">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1 space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-1">{event.title}</h3>
                        <p className="text-sm text-muted-foreground italic">{event.titleEn}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${badge.color}`}>{badge.text}</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span className="text-foreground">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span className="text-foreground">{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="w-4 h-4 text-primary" />
                        <span className="text-foreground">
                          {event.registrations} / {event.maxCapacity} 人
                        </span>
                      </div>
                    </div>

                    {/* Occupancy Bar */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">報名進度</span>
                        <span className="font-medium text-foreground">{occupancyRate.toFixed(0)}%</span>
                      </div>
                      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary transition-all duration-300"
                          style={{ width: `${occupancyRate}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex lg:flex-col gap-2">
                    <Button variant="outline" size="sm" className="flex-1 lg:flex-none bg-transparent" asChild>
                      <Link href={`/admin/events/${event.id}/edit`}>
                        <Edit className="w-4 h-4 mr-2" />
                        編輯
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 lg:flex-none text-destructive hover:bg-destructive hover:text-destructive-foreground bg-transparent"
                      onClick={() => handleDeleteEvent(event.id)}
                    >
                      <Trash2 className="w-4 h-4 mr-2" />
                      刪除
                    </Button>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        {filteredEvents.length === 0 && (
          <Card className="p-12 text-center">
            <Calendar className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">沒有找到活動</h3>
            <p className="text-muted-foreground mb-6">請嘗試其他搜索詞或新增活動</p>
            <Button asChild>
              <Link href="/admin/events/new">
                <Plus className="w-4 h-4 mr-2" />
                新增活動
              </Link>
            </Button>
          </Card>
        )}
      </main>
    </div>
  )
}

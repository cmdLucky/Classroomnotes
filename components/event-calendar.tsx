"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Calendar, Clock, MapPin, Users } from "lucide-react"

const events = [
  {
    id: 1,
    title: "梅子林客家文化工作坊",
    date: "2024-03-15",
    time: "09:00-16:00",
    location: "梅子林",
    category: "文化體驗",
    participants: 20,
    description: "學習傳統客家手工藝，體驗客家飲食文化",
    image: "/traditional-terraced-fields-with-art-installations.jpg",
  },
  {
    id: 2,
    title: "谷埔濕地生態導賞",
    date: "2024-03-18",
    time: "08:00-12:00",
    location: "谷埔",
    category: "生態旅遊",
    participants: 15,
    description: "專業導賞員帶領觀察候鳥和濕地生態",
    image: "/golden-reed-fields-and-wetlands-in-hong-kong-count.jpg",
  },
  {
    id: 3,
    title: "吉澳地質公園探索",
    date: "2024-03-22",
    time: "10:00-17:00",
    location: "吉澳",
    category: "教育活動",
    participants: 25,
    description: "了解地質構造，探索4000年歷史文化",
    image: "/fishing-village-bay-with-traditional-boats-and-geo.jpg",
  },
  {
    id: 4,
    title: "鄉郊保育研學營",
    date: "2024-03-25",
    time: "09:00-17:00",
    location: "梅子林",
    category: "教育活動",
    participants: 30,
    description: "學生專場，深度了解鄉郊保育工作",
    image: "/cuhk-professors-and-students-working-with-local-vi.jpg",
  },
  {
    id: 5,
    title: "Me-Go-Out客家美食文化&鄉村深度遊展覽，在中大約定你！",
    date: "2025-11-01",
    time: "11:30-14:30",
    location: "香港中文大學鄭裕彤樓5樓，The Gastronomy Club",
    category: "文化體驗",
    participants: 50,
    description:
      "籍著香港中文大學酒店及旅遊管理學院舉辦的「旅款科深度學習之旅2025」活動體驗日，Me-Go-Out團隊準備了精彩的資訊、活動和周邊禮品與大家見面！歡迎各學校師生齊齊參與，了解Me-Go-Out客家美食文化和鄉村深度遊接下來一系列有趣的活動。",
    image: "/megoout-cuhk-event-poster.png",
    contact: "項目經理 Heidi (Heidi.xu@cuhk.edu.hk)",
  },
]

const categories = [
  { name: "全部", color: "bg-muted" },
  { name: "文化體驗", color: "bg-primary/20 text-primary" },
  { name: "生態旅遊", color: "bg-secondary/20 text-secondary" },
  { name: "教育活動", color: "bg-accent/20 text-accent" },
]

export function EventCalendar() {
  const [selectedCategory, setSelectedCategory] = useState("全部")
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 10)) // November 2025

  const filteredEvents = events.filter((event) => selectedCategory === "全部" || event.category === selectedCategory)

  const monthNames = [
    "一月",
    "二月",
    "三月",
    "四月",
    "五月",
    "六月",
    "七月",
    "八月",
    "九月",
    "十月",
    "十一月",
    "十二月",
  ]

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))
  }

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">活動日曆</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            瀏覽即將舉行的活動，選擇您感興趣的文化體驗、生態導賞或教育活動
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <Button
              key={category.name}
              variant={selectedCategory === category.name ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category.name)}
              className={selectedCategory === category.name ? "" : category.color}
            >
              {category.name}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calendar Widget */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>
                    {currentMonth.getFullYear()}年 {monthNames[currentMonth.getMonth()]}
                  </span>
                </span>
                <div className="flex space-x-1">
                  <Button variant="ghost" size="sm" onClick={prevMonth}>
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" onClick={nextMonth}>
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-1 text-center text-sm">
                {["日", "一", "二", "三", "四", "五", "六"].map((day) => (
                  <div key={day} className="p-2 font-medium text-muted-foreground">
                    {day}
                  </div>
                ))}
                {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => {
                  const hasEvent = events.some((event) => {
                    const eventDate = new Date(event.date)
                    return eventDate.getDate() === day && eventDate.getMonth() === currentMonth.getMonth()
                  })
                  return (
                    <div
                      key={day}
                      className={`p-2 rounded-md cursor-pointer hover:bg-muted transition-colors ${
                        hasEvent ? "bg-primary/20 text-primary font-medium" : ""
                      }`}
                    >
                      {day}
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          {/* Events List */}
          <div className="lg:col-span-2 space-y-4">
            {filteredEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="flex flex-col sm:flex-row">
                    <div className="sm:w-48 h-32 sm:h-auto">
                      <img
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-lg font-bold text-foreground mb-1">{event.title}</h3>
                          <span className="inline-block bg-primary/20 text-primary px-2 py-1 rounded-md text-xs font-medium">
                            {event.category}
                          </span>
                        </div>
                        <div className="text-right text-sm text-muted-foreground">
                          <div className="font-medium">{new Date(event.date).getDate()}日</div>
                          <div>{monthNames[new Date(event.date).getMonth()]}</div>
                        </div>
                      </div>

                      <p className="text-muted-foreground text-sm mb-4">{event.description}</p>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-muted-foreground" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4 text-muted-foreground" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="w-4 h-4 text-muted-foreground" />
                          <span>限{event.participants}人</span>
                        </div>
                      </div>

                      {event.contact && <div className="mt-3 text-sm text-muted-foreground">聯絡：{event.contact}</div>}

                      <div className="mt-4 flex justify-between items-center">
                        <Button size="sm">了解詳情</Button>
                        <Button size="sm" variant="outline">
                          立即報名
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

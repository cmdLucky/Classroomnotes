import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Users, Star } from "lucide-react"

const upcomingEvents = [
  {
    id: 1,
    title: "春季梅子林藝術節",
    date: "2024-04-15",
    time: "10:00-17:00",
    location: "梅子林村",
    category: "文化體驗",
    featured: true,
    participants: 100,
    price: "免費",
    description: "結合傳統客家文化與當代藝術的盛大節慶活動，包括藝術展覽、工作坊、美食體驗等",
    highlights: ["藝術展覽", "客家美食", "傳統表演", "手工藝體驗"],
    image: "/traditional-terraced-fields-with-art-installations.jpg",
  },
  {
    id: 2,
    title: "谷埔觀鳥生態營",
    date: "2024-04-20",
    time: "06:00-12:00",
    location: "谷埔濕地",
    category: "生態旅遊",
    featured: true,
    participants: 25,
    price: "HK$150",
    description: "專業觀鳥導師帶領，在最佳時間觀察候鳥遷徙，學習濕地生態知識",
    highlights: ["專業導師", "觀鳥設備", "生態講解", "早餐提供"],
    image: "/golden-reed-fields-and-wetlands-in-hong-kong-count.jpg",
  },
  {
    id: 3,
    title: "吉澳地質探索之旅",
    date: "2024-04-25",
    time: "09:00-16:00",
    location: "吉澳島",
    category: "教育活動",
    featured: false,
    participants: 30,
    price: "HK$200",
    description: "深度探索聯合國地質公園，了解4000年歷史文化和獨特地質構造",
    highlights: ["地質導賞", "文化徑", "海鮮午餐", "渡輪接送"],
    image: "/fishing-village-bay-with-traditional-boats-and-geo.jpg",
  },
]

export function UpcomingEvents() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">即將舉行</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            不要錯過這些精彩的特色活動，立即報名參與難忘的鄉郊文化體驗
          </p>
        </div>

        <div className="space-y-8">
          {upcomingEvents.map((event, index) => (
            <Card
              key={event.id}
              className={`overflow-hidden hover:shadow-xl transition-all duration-300 ${
                event.featured ? "ring-2 ring-primary/20" : ""
              }`}
            >
              <CardContent className="p-0">
                <div className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                  {/* Image */}
                  <div className="lg:w-2/5 h-64 lg:h-auto relative">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    {event.featured && (
                      <div className="absolute top-4 left-4">
                        <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                          <Star className="w-4 h-4 fill-current" />
                          <span>精選活動</span>
                        </div>
                      </div>
                    )}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                      {event.price}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:w-3/5 p-8">
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
                          {event.category}
                        </span>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary">{new Date(event.date).getDate()}</div>
                          <div className="text-sm text-muted-foreground">
                            {new Date(event.date).toLocaleDateString("zh-HK", { month: "short" })}
                          </div>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-3">{event.title}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">{event.description}</p>
                    </div>

                    {/* Event Details */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 text-sm">
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

                    {/* Highlights */}
                    <div className="mb-6">
                      <div className="text-sm text-muted-foreground mb-2">活動亮點</div>
                      <div className="flex flex-wrap gap-2">
                        {event.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="bg-secondary/20 text-secondary-foreground px-2 py-1 rounded-md text-xs"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button size="lg" className="flex-1">
                        <Calendar className="mr-2 w-4 h-4" />
                        立即報名
                      </Button>
                      <Button variant="outline" size="lg" className="flex-1 bg-transparent">
                        了解詳情
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            查看所有活動
          </Button>
        </div>
      </div>
    </section>
  )
}

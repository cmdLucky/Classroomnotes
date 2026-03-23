import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Clock, MapPin, Users, DollarSign, CheckCircle } from "lucide-react"
import Link from "next/link"

interface EventDetailProps {
  event: {
    title: string
    subtitle: string
    date: string
    time: string
    location: string
    category: string
    price: string
    participants: number
    description: string
    highlights: string[]
    schedule: Array<{ time: string; activity: string }>
    requirements: string[]
    images: string[]
  }
}

export function EventDetail({ event }: EventDetailProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={event.images[0] || "/placeholder.svg"} alt={event.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        </div>

        {/* Back Button */}
        <div className="absolute top-20 left-4 sm:left-6 lg:left-8 z-20">
          <Link href="/activities">
            <Button variant="secondary" size="sm" className="bg-white/90 backdrop-blur-sm">
              <ArrowLeft className="mr-2 w-4 h-4" />
              返回活動列表
            </Button>
          </Link>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 pb-16">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <span className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium mb-4">
                {event.category}
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">{event.title}</h1>
              <p className="text-xl text-white/90 mb-8">{event.subtitle}</p>

              {/* Quick Info */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Calendar className="w-5 h-5 text-white mb-2" />
                  <div className="text-white text-sm">{new Date(event.date).toLocaleDateString("zh-HK")}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Clock className="w-5 h-5 text-white mb-2" />
                  <div className="text-white text-sm">{event.time}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <MapPin className="w-5 h-5 text-white mb-2" />
                  <div className="text-white text-sm">{event.location}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <DollarSign className="w-5 h-5 text-white mb-2" />
                  <div className="text-white text-sm">{event.price}</div>
                </div>
              </div>

              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Users className="mr-2 w-5 h-5" />
                立即報名 (限{event.participants}人)
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <Card>
                <CardHeader>
                  <CardTitle>活動介紹</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                </CardContent>
              </Card>

              {/* Schedule */}
              <Card>
                <CardHeader>
                  <CardTitle>活動流程</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {event.schedule.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-4 pb-4 border-b border-border last:border-b-0"
                      >
                        <div className="bg-primary/10 text-primary px-3 py-1 rounded-md text-sm font-medium min-w-fit">
                          {item.time}
                        </div>
                        <div className="flex-1">
                          <p className="text-foreground">{item.activity}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Requirements */}
              <Card>
                <CardHeader>
                  <CardTitle>參與須知</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {event.requirements.map((requirement, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Highlights */}
              <Card>
                <CardHeader>
                  <CardTitle>活動亮點</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {event.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-sm text-muted-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Registration */}
              <Card>
                <CardHeader>
                  <CardTitle>立即報名</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">{event.price}</div>
                    <div className="text-sm text-muted-foreground">每人費用</div>
                  </div>
                  <Button className="w-full" size="lg">
                    確認報名
                  </Button>
                  <div className="text-center text-sm text-muted-foreground">名額有限，先到先得</div>
                </CardContent>
              </Card>

              {/* Contact */}
              <Card>
                <CardHeader>
                  <CardTitle>聯絡資訊</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div>
                    <span className="font-medium">查詢電話：</span>
                    <span className="text-muted-foreground">+852 1234 5678</span>
                  </div>
                  <div>
                    <span className="font-medium">電子郵件：</span>
                    <span className="text-muted-foreground">info@cuhkccfs.hk</span>
                  </div>
                  <div>
                    <span className="font-medium">辦公時間：</span>
                    <span className="text-muted-foreground">週一至五 9:00-17:00</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

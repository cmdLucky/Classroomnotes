import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Users, Calendar, DollarSign, Bus, MapPin, Info, Lightbulb } from "lucide-react"

interface LocationPracticalInfoProps {
  data: {
    practicalInfo: {
      duration: string
      difficulty: string
      bestTime: string
      openingHours: string
      admission: string
      transportation: Array<{
        method: string
        details: string
      }>
      facilities: string[]
      tips: string[]
    }
  }
}

export function LocationPracticalInfo({ data }: LocationPracticalInfoProps) {
  const { practicalInfo } = data

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">實用資訊</h2>
          <p className="text-muted-foreground">計劃您的完美旅程，掌握所有必要的參觀資訊</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Basic Info */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Info className="w-5 h-5 text-primary" />
                  <span>基本資訊</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>遊覽時間</span>
                  </div>
                  <span className="font-medium">{practicalInfo.duration}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>難度等級</span>
                  </div>
                  <span className="font-medium">{practicalInfo.difficulty}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>最佳時間</span>
                  </div>
                  <span className="font-medium">{practicalInfo.bestTime}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>開放時間</span>
                  </div>
                  <span className="font-medium">{practicalInfo.openingHours}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <DollarSign className="w-4 h-4" />
                    <span>入場費用</span>
                  </div>
                  <span className="font-medium">{practicalInfo.admission}</span>
                </div>
              </CardContent>
            </Card>

            {/* Facilities */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-secondary" />
                  <span>設施服務</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {practicalInfo.facilities.map((facility) => (
                    <span
                      key={facility}
                      className="bg-secondary/20 text-secondary-foreground px-3 py-1 rounded-full text-sm"
                    >
                      {facility}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Transportation & Tips */}
          <div className="space-y-6">
            {/* Transportation */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Bus className="w-5 h-5 text-accent" />
                  <span>交通方式</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {practicalInfo.transportation.map((transport, index) => (
                  <div key={index} className="border-l-4 border-accent/30 pl-4">
                    <div className="font-medium text-foreground mb-1">{transport.method}</div>
                    <div className="text-sm text-muted-foreground">{transport.details}</div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Tips */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Lightbulb className="w-5 h-5 text-primary" />
                  <span>貼心提示</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {practicalInfo.tips.map((tip, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{tip}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

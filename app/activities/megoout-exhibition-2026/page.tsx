import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Calendar, Clock, MapPin, DollarSign, Leaf, Gift, Users, Gamepad2 } from "lucide-react"
import Link from "next/link"

export default function MeGoOutExhibitionPage() {
  console.log("[v0] MeGoOut Exhibition page loaded")

  return (
    <main className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      <Navigation />

      {/* Hero Section - Clean design without busy background */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="max-w-7xl mx-auto mb-8">
          <Link href="/activities">
            <Button variant="outline" size="sm">
              <ArrowLeft className="mr-2 w-4 h-4" />
              返回活動列表 / Back to Activities
            </Button>
          </Link>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-teal-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              文化展覽 / Cultural Exhibition
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              MeGoOut客家美食文化及鄉村深度遊展覽
            </h1>
            <p className="text-xl text-gray-600 mb-8">Hakka Food Culture and Rural Tour Exhibition</p>

            {/* Quick Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              <Card>
                <CardContent className="flex items-center gap-3 p-4">
                  <Calendar className="w-5 h-5 text-teal-500" />
                  <div className="text-left">
                    <div className="text-sm text-gray-500">日期 / Date</div>
                    <div className="font-medium">2026年1月17日</div>
                    <div className="text-xs text-gray-500">January 17, 2026</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-center gap-3 p-4">
                  <Clock className="w-5 h-5 text-teal-500" />
                  <div className="text-left">
                    <div className="text-sm text-gray-500">時間 / Time</div>
                    <div className="font-medium">12:30 - 18:00</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-center gap-3 p-4">
                  <MapPin className="w-5 h-5 text-teal-500" />
                  <div className="text-left">
                    <div className="text-sm text-gray-500">地點 / Venue</div>
                    <div className="font-medium text-sm">嶺南運動場A30</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-center gap-3 p-4">
                  <DollarSign className="w-5 h-5 text-teal-500" />
                  <div className="text-left">
                    <div className="text-sm text-gray-500">費用 / Price</div>
                    <div className="font-medium">免費入場</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Exhibition Poster */}
              <Card>
                <CardHeader>
                  <CardTitle>活動海報 / Event Poster</CardTitle>
                </CardHeader>
                <CardContent>
                  <img
                    src="/images/megoout-exhibition-2026.jpeg"
                    alt="MeGoOut Exhibition Poster"
                    className="w-full rounded-lg"
                  />
                </CardContent>
              </Card>

              {/* Description */}
              <Card>
                <CardHeader>
                  <CardTitle>活動介紹 / About</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    歡迎參加崇基學院七十週年嘉年華暨啟動禮！我們將在嶺南運動場A30攤位展示客家美食文化和鄉村深度遊的精彩內容。
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Welcome to join the 70th Anniversary Carnival of Chung Chi College! We will showcase Hakka food
                    culture and rural tour highlights at Booth A30 in Lingnan Stadium.
                  </p>
                  <div className="bg-teal-50 border-l-4 border-teal-500 p-4 rounded">
                    <p className="font-medium text-teal-900">無需報名，現場參與！</p>
                    <p className="text-sm text-teal-700">No registration required, walk-in participation!</p>
                  </div>
                </CardContent>
              </Card>

              {/* Schedule */}
              <Card>
                <CardHeader>
                  <CardTitle>活動流程 / Schedule</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { time: "12:30", activity: "展覽開始，歡迎參觀", en: "Exhibition opens" },
                      { time: "13:00", activity: "客家黃酒品嚐體驗", en: "Hakka rice wine tasting" },
                      { time: "14:00", activity: "三村深度遊介紹分享", en: "Three villages tour introduction" },
                      { time: "15:00", activity: "互動遊戲及義賣活動", en: "Interactive games & charity sale" },
                      { time: "16:00", activity: "繼續開放參觀", en: "Continues open for visit" },
                      { time: "18:00", activity: "展覽結束", en: "Exhibition ends" },
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-4 pb-4 border-b last:border-b-0">
                        <div className="bg-teal-100 text-teal-700 px-3 py-1 rounded-md text-sm font-medium min-w-fit">
                          {item.time}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-gray-900">{item.activity}</p>
                          <p className="text-sm text-gray-500">{item.en}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Highlights */}
              <Card>
                <CardHeader>
                  <CardTitle>活動亮點 / Highlights</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-yellow-100 p-2 rounded-lg">
                        <Leaf className="w-5 h-5 text-yellow-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">客家黃酒及美食體驗</p>
                        <p className="text-sm text-gray-500">Hakka Rice Wine & Food Tasting</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-green-100 p-2 rounded-lg">
                        <MapPin className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">三村特點及深度遊介紹</p>
                        <p className="text-sm text-gray-500">Three Villages Introduction</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-pink-100 p-2 rounded-lg">
                        <Gift className="w-5 h-5 text-pink-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">鄉村保育義賣活動</p>
                        <p className="text-sm text-gray-500">Conservation Charity Sale</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-blue-100 p-2 rounded-lg">
                        <Gamepad2 className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">攤位互動遊戲</p>
                        <p className="text-sm text-gray-500">Interactive Booth Games</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Location Details */}
              <Card>
                <CardHeader>
                  <CardTitle>地點詳情 / Location</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium text-gray-900">香港中文大學</p>
                    <p className="text-gray-600">The Chinese University of Hong Kong</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">嶺南運動場A30攤位</p>
                    <p className="text-gray-600">Lingnan Stadium Booth A30</p>
                  </div>
                  <div className="pt-3 border-t">
                    <p className="text-gray-600">崇基學院七十週年嘉年華</p>
                    <p className="text-gray-500 text-xs">Chung Chi College 70th Anniversary Carnival</p>
                  </div>
                </CardContent>
              </Card>

              {/* Products */}
              <Card>
                <CardHeader>
                  <CardTitle>義賣商品 / Products</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">MeGoOut系列T恤</span>
                    <Users className="w-4 h-4 text-gray-400" />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">系列毛巾</span>
                    <Users className="w-4 h-4 text-gray-400" />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">毛絨公仔</span>
                    <Users className="w-4 h-4 text-gray-400" />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">系列外套</span>
                    <Users className="w-4 h-4 text-gray-400" />
                  </div>
                  <p className="text-xs text-gray-500 pt-2 border-t">所有收益用於支持鄉村保育</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

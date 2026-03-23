"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Calendar, Clock, MapPin, Share2, DollarSign, Users, AlertCircle, Info } from "lucide-react"
import { useState } from "react"

export default function KatOTreasureHuntFeb8Page() {
  const [shareStatus, setShareStatus] = useState<string>("")

  const event = {
    title: "尋吉覓澳之「吉星高照」",
    titleEn: "Kat O Treasure Hunt: Lucky Stars Shining",
    series: "Me-Go-Out鄉村深度親子遊",
    date: "2026年2月8日",
    dateEn: "February 8, 2026",
    time: "9:30 - 15:00",
    location: "吉澳島 Kat O Island",
    meetingPoint: "沙頭角避風塘",
    meetingPointEn: "Sha Tau Kok Typhoon Shelter",
    image: "/images/kat-o-feb8-poster.jpeg",
    price: {
      adult: "HK$200",
      adultEarlyBird: "HK$160",
      child: "HK$100",
      childEarlyBird: "HK$80",
    },
    earlyBirdDeadline: "2026年1月31日",
    objectives: [
      "探索客家漁村文化，解讀吉澳這個祥和之島背後的智慧！",
      "探索生物多樣性，理解環境保育與可持續發展的理念！",
      "通過吉澳尋「吉」、SDG大作戰等親子遊戲，品嚐客家特色美食，推進親子關係與家庭教育！",
    ],
    includes: [
      "定制深度遊紀念品大禮包",
      "沙頭角-吉澳往返船票，團體保險",
      "在地導賞服務和活動體驗",
      "客家特色美食及飲品組合",
    ],
    detailedSchedule: [
      { time: "9:30", activity: "沙頭角避風塘集合前往吉澳" },
      { time: "10:00-14:00", activity: "在地導賞和活動體驗" },
      { time: "14:00-15:00", activity: "自由探索並根據項目完成情況頒發證書" },
      { time: "15:00", activity: "吉澳碼頭集合，乘船返回沙頭角" },
    ],
  }

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setShareStatus("鏈接已複製！")
      setTimeout(() => setShareStatus(""), 3000)
    } catch (err) {
      const textArea = document.createElement("textarea")
      textArea.value = window.location.href
      textArea.style.position = "fixed"
      textArea.style.left = "-999999px"
      document.body.appendChild(textArea)
      textArea.select()
      try {
        document.execCommand("copy")
        setShareStatus("鏈接已複製！")
      } catch (e) {
        setShareStatus("複製失敗，請手動複製")
      }
      document.body.removeChild(textArea)
      setTimeout(() => setShareStatus(""), 3000)
    }
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="pt-16 pb-12 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-block bg-secondary/10 text-secondary px-4 py-1.5 rounded-full text-sm font-medium mb-3">
              {event.series}
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3 text-balance">
              {event.title}
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground italic">{event.titleEn}</p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-10">
            {/* Event Poster */}
            <div className="lg:col-span-3">
              <Card className="overflow-hidden border-2 border-border shadow-lg hover:shadow-xl transition-shadow">
                <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-auto" />
              </Card>
            </div>

            <div className="lg:col-span-2 space-y-5">
              {/* Date & Time Card */}
              <Card className="p-5 border-2 border-border bg-muted/30">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">活動日期 Date</div>
                      <div className="text-lg font-bold text-foreground">{event.date}</div>
                      <div className="text-sm text-muted-foreground">{event.dateEn}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">活動時間 Time</div>
                      <div className="text-lg font-bold text-foreground">{event.time}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">集合地點 Meeting Point</div>
                      <div className="text-base font-bold text-foreground leading-snug">{event.meetingPoint}</div>
                      <div className="text-sm text-muted-foreground">{event.meetingPointEn}</div>
                      <div className="text-xs text-muted-foreground mt-2">目的地 Destination: {event.location}</div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Pricing Card */}
              <Card className="p-5 border-2 border-primary/30 bg-primary/5">
                <div className="flex items-center gap-2 mb-4">
                  <DollarSign className="w-5 h-5 text-primary" />
                  <h3 className="text-base font-bold text-foreground">收費 Pricing</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">成人 Adult</span>
                    <div className="text-right">
                      <div className="text-sm line-through text-muted-foreground">{event.price.adult}</div>
                      <div className="text-lg font-bold text-primary">{event.price.adultEarlyBird}</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">小童 Child</span>
                    <div className="text-right">
                      <div className="text-sm line-through text-muted-foreground">{event.price.child}</div>
                      <div className="text-lg font-bold text-primary">{event.price.childEarlyBird}</div>
                    </div>
                  </div>
                  <div className="pt-2 border-t border-border">
                    <p className="text-xs text-primary font-medium text-center">
                      早鳥優惠至{event.earlyBirdDeadline} Early Bird until Jan 31, 2026
                    </p>
                  </div>
                </div>
              </Card>

              <div className="pt-2">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-2 bg-background hover:bg-muted"
                  onClick={handleShare}
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  {shareStatus || "分享活動"}
                </Button>
              </div>
            </div>
          </div>

          {/* Event Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            {/* Objectives */}
            <Card className="p-6 border-2 border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">活動目標 Event Objectives</h3>
              <ul className="space-y-3">
                {event.objectives.map((obj, index) => (
                  <li key={index} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="text-primary font-bold flex-shrink-0">✓</span>
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Includes */}
            <Card className="p-6 border-2 border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">費用包含 Includes</h3>
              <ul className="space-y-3">
                {event.includes.map((item, index) => (
                  <li key={index} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="text-secondary font-bold flex-shrink-0">{index + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          {/* Schedule */}
          <Card className="p-6 border-2 border-border mb-10">
            <h3 className="text-xl font-bold text-foreground mb-6">行程概覽 Itinerary Overview</h3>
            <div className="space-y-4">
              {event.detailedSchedule.map((item, index) => (
                <div key={index} className="flex gap-4 items-start pb-4 border-b border-border last:border-0 last:pb-0">
                  <div className="bg-primary/10 text-primary px-3 py-1.5 rounded-md text-sm font-bold flex-shrink-0 min-w-[100px] text-center">
                    {item.time}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.activity}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Important Notes Section */}
          <Card className="p-6 border-2 border-orange-500/30 bg-orange-50/50 mb-10">
            <div className="flex items-center gap-2 mb-4">
              <AlertCircle className="w-6 h-6 text-orange-600" />
              <h3 className="text-xl font-bold text-foreground">注意事項 Important Notes</h3>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>名額有限，滿額即止</span>
              </li>
              <li className="flex gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>活動受有關條款約束，最終解釋權歸MeGoOut所有</span>
              </li>
              <li className="flex gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>本次活動為戶外行程，並將乘船前往目的地，請遵守安全指示</span>
              </li>
            </ul>
          </Card>

          {/* Registration CTA */}
          <Card className="p-8 border-2 border-primary/30 bg-primary/5 text-center">
            <Users className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-2">成功報名後將獲得詳細行程及注意事項</h3>
            <p className="text-muted-foreground mb-6">Detailed itinerary will be provided after registration</p>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">如有疑问，歡迎聯繫項目助理 Jacey</p>
              <p className="text-sm">
                <a href="tel:+85257311909" className="text-primary hover:underline font-medium">
                  +852-57311909
                </a>
                {" | "}
                <a href="mailto:jaceypan@cuhk.edu.hk" className="text-primary hover:underline font-medium">
                  jaceypan@cuhk.edu.hk
                </a>
              </p>
            </div>
          </Card>
        </div>
      </section>
    </main>
  )
}

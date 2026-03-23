"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Calendar, Clock, MapPin, Share2, Video, Copy } from "lucide-react"
import { useState } from "react"

export function FeaturedEvent() {
  const [shareStatus, setShareStatus] = useState<string>("")
  const [zoomCopyStatus, setZoomCopyStatus] = useState<string>("")

  const event = {
    title: "客家美食的「古早味」和「新食尚」",
    titleEn: 'The "Traditional Flavors" and "New Trends" of Hakka Cuisine',
    series: "MeGoOut客家美食文化系列午間論壇 第二場",
    date: "2026年1月9日",
    dateEn: "January 9, 2026",
    time: "11:00 - 13:30",
    timeNote: "（含客家風味自助午餐）",
    location: "香港中文大學鄭裕彤樓5樓",
    locationEn: "5/F, Cheng Yu Tung Building, CUHK",
    venue: "The Gastronomy Club",
    image: "/images/image.jpeg",
    zoomLink: "https://zoom.us/j/91918262905?pwd=megoout",
    zoomId: "919 1826 2905",
    zoomPassword: "megoout",
    speakers: [
      {
        name: "Prof. Lisa Wan",
        title: "Associate Professor, School of Hotel and Tourism Management, The Chinese University of Hong Kong",
        titleZh: "香港中文大學酒店及旅遊管理學院副教授",
        role: "(Moderator)",
        roleZh: "（論壇主持人）",
      },
      {
        name: "Chef Dicky CHAN",
        title: "Executive Chef, Hong Kong Disneyland Resort Hotel",
        titleZh: "香港迪士尼樂園度假區酒店行政總廚",
      },
      {
        name: "Chef Iven CHEUNG",
        title: "Retired Chef, The Peninsula Hong Kong, Hakka Indigenous Resident of Kat O",
        titleZh: "香港半島酒店榮休廚師，吉澳客家原居民",
      },
      {
        name: "Chef Bonnie SO",
        title: "Chef of Le Cordon Bleu, Hakka Indigenous Resident of Sai Kung",
        titleZh: "法國藍帶廚師，西貢客家原居民",
      },
    ],
  }

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setShareStatus("鏈接已複製！")
      setTimeout(() => setShareStatus(""), 3000)
    } catch (err) {
      console.error("複製失敗:", err)
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

  const handleCopyZoomLink = async () => {
    try {
      await navigator.clipboard.writeText(event.zoomLink)
      setZoomCopyStatus("已複製 Zoom 鏈接！")
      setTimeout(() => setZoomCopyStatus(""), 3000)
    } catch (err) {
      console.error("複製失敗:", err)
      const textArea = document.createElement("textarea")
      textArea.value = event.zoomLink
      textArea.style.position = "fixed"
      textArea.style.left = "-999999px"
      document.body.appendChild(textArea)
      textArea.select()
      try {
        document.execCommand("copy")
        setZoomCopyStatus("已複製 Zoom 鏈接！")
      } catch (e) {
        setZoomCopyStatus("複製失敗")
      }
      document.body.removeChild(textArea)
      setTimeout(() => setZoomCopyStatus(""), 3000)
    }
  }

  return (
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
                    <div className="text-sm text-muted-foreground">{event.timeNote}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">活動地點 Venue</div>
                    <div className="text-base font-bold text-foreground leading-snug">{event.venue}</div>
                    <div className="text-sm text-muted-foreground mt-0.5">{event.location}</div>
                    <div className="text-sm text-muted-foreground">{event.locationEn}</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Speakers Card */}
            <Card className="p-5 border-2 border-border bg-muted/30">
              <h3 className="text-base font-bold text-foreground mb-4">Speakers 演讲嘉宾</h3>
              <div className="space-y-3">
                {event.speakers.map((speaker, index) => (
                  <div key={index} className="text-sm">
                    <div className="font-semibold text-foreground">
                      {index + 1}. {speaker.name}
                      {speaker.role && (
                        <span className="text-muted-foreground ml-1">
                          {speaker.role}
                          {speaker.roleZh && ` ${speaker.roleZh}`}
                        </span>
                      )}
                    </div>
                    <div className="text-muted-foreground text-xs mt-0.5 leading-relaxed">{speaker.title}</div>
                    {speaker.titleZh && (
                      <div className="text-muted-foreground text-xs leading-relaxed">{speaker.titleZh}</div>
                    )}
                  </div>
                ))}
              </div>
            </Card>

            {/* Zoom link card */}
            <Card className="p-5 border-2 border-primary/30 bg-primary/5">
              <div className="flex items-center gap-2 mb-4">
                <Video className="w-5 h-5 text-primary" />
                <h3 className="text-base font-bold text-foreground">線上參與 Online Participation</h3>
              </div>
              <div className="space-y-3">
                <div className="text-sm">
                  <div className="text-muted-foreground text-xs mb-1">ZOOM ID:</div>
                  <div className="font-mono text-foreground font-semibold">{event.zoomId}</div>
                </div>
                <div className="text-sm">
                  <div className="text-muted-foreground text-xs mb-1">Password:</div>
                  <div className="font-mono text-foreground font-semibold">{event.zoomPassword}</div>
                </div>
                <Button
                  size="sm"
                  variant="default"
                  className="w-full bg-primary hover:bg-primary/90 mt-2"
                  onClick={handleCopyZoomLink}
                >
                  <Copy className="w-4 h-4 mr-2" />
                  {zoomCopyStatus || "複製 Zoom 鏈接"}
                </Button>
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

        <Card className="p-6 border-2 border-secondary/30 bg-secondary/5 max-w-4xl mx-auto">
          <p className="text-center text-foreground leading-relaxed text-base">
            <span className="font-bold text-secondary">現場名額有限，敬請提早報名登記</span>
            <br />
            <span className="text-sm text-muted-foreground mt-2 block">
              Limited seats available, early registration is recommended
            </span>
          </p>
        </Card>
      </div>
    </section>
  )
}

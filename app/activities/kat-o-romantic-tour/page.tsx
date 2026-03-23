"use client"

import { Navigation } from "@/components/navigation"
import { PartnerFooter } from "@/components/partner-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"
import { Calendar, Clock, MapPin, Heart, Users, Phone, Mail, ArrowLeft, Share2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function KatORomanticTourPage() {
  const { language } = useLanguage()
  const [shareStatus, setShareStatus] = useState<string>("")

  const t = (zh: string, en: string) => (language === "en" ? en : zh)

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setShareStatus(t("鏈接已複製！", "Link copied!"))
      setTimeout(() => setShareStatus(""), 3000)
    } catch (err) {
      setShareStatus(t("複製失敗", "Copy failed"))
      setTimeout(() => setShareStatus(""), 3000)
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-16 pb-12 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <Link href="/activities">
            <Button variant="ghost" className="mb-6 text-primary hover:text-primary/80 hover:bg-primary/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t("返回活動列表", "Back to Events")}
            </Button>
          </Link>

          <div className="text-center mb-10">
            <div className="inline-block bg-secondary/10 text-secondary px-4 py-1.5 rounded-full text-sm font-medium mb-3">
              {t("浪漫之旅 Romantic Tour", "Romantic Tour")}
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3 text-balance">
              {t("吉澳 - 浪漫遊", "Kat O - Romantic Tour")}
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground italic">Romantic</p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-10">
            {/* Event Poster */}
            <div className="lg:col-span-3">
              <Card className="overflow-hidden border-2 border-border shadow-lg hover:shadow-xl transition-shadow">
                <Image
                  src="/images/kat-o-romantic-tour.png"
                  alt={t("吉澳浪漫遊海報", "Kat O Romantic Tour Poster")}
                  width={600}
                  height={800}
                  className="w-full h-auto"
                />
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
                      <div className="text-lg font-bold text-foreground">
                        {t("2026年2月7日（星期六）", "February 7, 2026 (Saturday)")}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">活動時間 Time</div>
                      <div className="text-lg font-bold text-foreground">9:30 - 16:00</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">集合地點 Meeting Point</div>
                      <div className="text-base font-bold text-foreground leading-snug">
                        {t("沙頭角避風塘", "Sha Tau Kok Typhoon Shelter")}
                      </div>
                      <div className="text-xs text-muted-foreground mt-2">
                        {t("目的地 Destination: 吉澳島 Kat O Island", "Destination: Kat O Island")}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Heart className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">適合對象 Target Audience</div>
                      <div className="text-base font-bold text-foreground">
                        {t("情侶、夫妻、好友", "Couples, Partners, Friends")}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Description */}
              <Card className="p-5 border-2 border-border">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(
                    "在情人節前夕，與摯愛一起踏上吉澳島，享受一段浪漫的海島之旅。漫步於寧靜的鄉村小徑，品嚐客家特色美食，在美麗的自然風光中留下難忘的回憶。",
                    "Before Valentine's Day, embark on a romantic island journey to Kat O with your loved one. Stroll along peaceful village paths, savor Hakka cuisine, and create unforgettable memories amidst beautiful natural scenery."
                  )}
                </p>
              </Card>

              <div className="pt-2">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-2 bg-background hover:bg-muted"
                  onClick={handleShare}
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  {shareStatus || t("分享活動", "Share Event")}
                </Button>
              </div>
            </div>
          </div>

          {/* Highlights Section */}
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
            {t("活動亮點", "Event Highlights")}
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <Card className="border-2 border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Heart className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {t("浪漫海島漫步", "Romantic Island Stroll")}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t(
                    "漫步於寧靜的吉澳島，感受遠離繁囂的寧靜與浪漫",
                    "Walk through the peaceful Kat O Island, experience tranquility and romance away from the hustle"
                  )}
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Users className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {t("客家美食體驗", "Hakka Cuisine Experience")}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t(
                    "品嚐地道客家特色美食，與摯愛共享美味時光",
                    "Taste authentic Hakka specialties, share delicious moments with your loved one"
                  )}
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Calendar className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {t("情人節特別安排", "Valentine's Special")}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t(
                    "情人節前夕的特別活動，為您的愛情旅程增添甜蜜回憶",
                    "A special event before Valentine's Day, adding sweet memories to your love journey"
                  )}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Registration CTA */}
          <Card className="p-8 border-2 border-primary/30 bg-primary/5 text-center">
            <Users className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-2">
              {t("立即報名", "Register Now")}
            </h3>
            <p className="text-muted-foreground mb-6">
              {t(
                "掃描海報上的二維碼報名，或聯繫我們的項目經理了解更多詳情。",
                "Scan the QR code on the poster to register, or contact our project manager for more details."
              )}
            </p>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">{t("如有任何疑問，歡迎聯絡項目經理 Heidi", "For inquiries, please contact Project Manager Heidi")}</p>
              <p className="text-sm">
                <a href="tel:+85296747074" className="text-primary hover:underline font-medium">
                  +852 9674 7074
                </a>
                {" | "}
                <a href="mailto:Heidi.xu@cuhk.edu.hk" className="text-primary hover:underline font-medium">
                  Heidi.xu@cuhk.edu.hk
                </a>
              </p>
            </div>
          </Card>
        </div>
      </section>

      <PartnerFooter />
    </main>
  )
}

"use client"

import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, MapPin, Gift, ArrowLeft, Music, Users, Utensils, Ship } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import Navigation from "@/components/navigation"
import PartnerFooter from "@/components/partner-footer"

export default function TinHauFestivalPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/tin-hau-festival-poster.png"
            alt="MeGoOut Rural Food Carnival & Kat O Tin Hau Festival"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1 bg-primary/90 rounded-full text-sm font-medium mb-4">
            {t("節慶活動 Festival", "Festival Event")}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            {t("MeGoOut鄉村美食嘉年華", "MeGoOut Rural Food Carnival")}
            <br />
            {t("暨吉澳天后誕慶典", "& Kat O Tin Hau Festival")}
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            {t("MeGoOut Rural Food Carnival & Kat O Tin Hau Festival Celebration", "MeGoOut Rural Food Carnival & Kat O Tin Hau Festival Celebration")}
          </p>
        </div>
      </section>

      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <Link href="/activities">
          <Button variant="ghost" className="gap-2 text-secondary hover:text-primary">
            <ArrowLeft className="w-4 h-4" />
            {t("返回活動列表", "Back to Events")}
          </Button>
        </Link>
      </div>

      {/* Event Info Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-8">
              {/* Description */}
              <div className="bg-muted rounded-2xl p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  {t("活動簡介", "About This Event")}
                </h2>
                <div className="prose prose-lg text-secondary max-w-none space-y-4">
                  <p>
                    {t(
                      "「MeGoOut鄉村美食嘉年華暨吉澳天后誕慶典」是由環境及生態局轄下鄉郊保育辦公室資助、香港中文大學酒店及旅遊管理學院主辦的首場大型公眾活動，亦是MeGoOut文化復興項目的重點里程碑。",
                      "The 'MeGoOut Rural Food Carnival & Kat O Tin Hau Festival Celebration' is the first large-scale public event funded by the Countryside Conservation Office under the Environment and Ecology Bureau and organized by CUHK School of Hotel and Tourism Management. It is also a key milestone of the MeGoOut Cultural Revival Project."
                    )}
                  </p>
                  <p>
                    {t(
                      "活動選址於獲國家生態環境部評選為全國「美麗海灣優秀案例」的大鵬灣印洲塘水域之中——吉澳島，將鄉郊美食文化、傳統節慶與可持續社區旅遊三者深度結合。",
                      "The event is located on Kat O Island in the Yan Chau Tong waters of Mirs Bay, which was selected by the Ministry of Ecology and Environment as a national 'Beautiful Bay Outstanding Case'. It deeply integrates rural food culture, traditional festivals, and sustainable community tourism."
                    )}
                  </p>
                  <p>
                    {t(
                      "2026年5月9日適逢天后誕正日，吉澳村民將循百年傳統舉行隆重的天后巡遊慶典。嘉年華藉此難得契機，以「味道」為切入點，邀請公眾走進這座被譽為「大鵬明珠」的客家漁村，親身體驗香港鄉郊最鮮活的文化脈搏。",
                      "May 9, 2026 coincides with the Tin Hau Festival, when Kat O villagers will hold a grand Tin Hau parade following century-old traditions. The carnival takes this rare opportunity to invite the public to experience the most vibrant cultural pulse of Hong Kong's countryside through the lens of 'taste'."
                    )}
                  </p>
                </div>
              </div>

              {/* Schedule */}
              <div className="bg-muted rounded-2xl p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  {t("活動流程", "Event Schedule")}
                </h2>
                <div className="space-y-4">
                  {[
                    { time: "10:00", activity: t("活動開幕禮", "Opening Ceremony") },
                    { time: "10:30", activity: t("天后巡遊及抽炮儀式", "Tin Hau Parade & Firecracker Ceremony") },
                    { time: "11:00", activity: t("創意市集 及 Live Music", "Creative Market & Live Music") },
                    { time: "14:30", activity: t("客家廚王爭霸賽 及 主題導賞團", "Hakka Chef Competition & Themed Guided Tours") },
                    { time: "16:30", activity: t("活動閉幕", "Event Closing") },
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4 items-start">
                      <div className="w-20 flex-shrink-0">
                        <span className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
                          {item.time}
                        </span>
                      </div>
                      <div className="flex-1 bg-background p-4 rounded-lg">
                        <p className="text-foreground font-medium">{item.activity}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="bg-muted rounded-2xl p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  {t("活動亮點", "Event Highlights")}
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { icon: Users, title: t("天后巡遊", "Tin Hau Parade"), desc: t("百年傳統天后誕慶典巡遊", "Century-old traditional Tin Hau Festival parade") },
                    { icon: Music, title: t("創意市集", "Creative Market"), desc: t("現場音樂表演及特色攤位", "Live music and specialty booths") },
                    { icon: Utensils, title: t("廚王爭霸", "Chef Competition"), desc: t("客家廚王爭霸賽精彩對決", "Exciting Hakka Chef Competition") },
                    { icon: Ship, title: t("免費船票", "Free Ferry"), desc: t("掃碼報名即可獲得免費船票", "Scan QR code to get free ferry ticket") },
                  ].map((item, index) => (
                    <div key={index} className="bg-background p-4 rounded-xl flex gap-4 items-start">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{item.title}</h3>
                        <p className="text-sm text-secondary">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Event Details Card */}
              <div className="bg-muted rounded-2xl p-6 sticky top-24">
                <h3 className="text-lg font-bold text-foreground mb-4">
                  {t("活動資訊", "Event Details")}
                </h3>

                <div className="space-y-4">
                  <div className="flex gap-3">
                    <Calendar className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-secondary">{t("活動日期 Date", "Date")}</p>
                      <p className="font-semibold text-foreground">{t("2026年5月9日（星期六）", "May 9, 2026 (Saturday)")}</p>
                      <p className="text-sm text-secondary">{t("天后誕正日", "Tin Hau Festival Day")}</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-secondary">{t("活動時間 Time", "Time")}</p>
                      <p className="font-semibold text-foreground">10:00 - 17:00</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-secondary">{t("活動地點 Location", "Location")}</p>
                      <p className="font-semibold text-foreground">{t("吉澳島", "Kat O Island")}</p>
                      <p className="text-sm text-secondary">{t("大鵬灣印洲塘水域", "Yan Chau Tong, Mirs Bay")}</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Gift className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-secondary">{t("活動費用 Fee", "Fee")}</p>
                      <p className="font-semibold text-primary">{t("免費入場", "Free Admission")}</p>
                      <p className="text-sm text-secondary">{t("掃碼報名獲免費船票", "Free ferry ticket with registration")}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white" size="lg">
                    {t("立即報名 Register Now", "Register Now")}
                  </Button>
                  <p className="text-xs text-center text-secondary mt-2">
                    {t("掃描海報QR碼報名", "Scan QR code on poster to register")}
                  </p>
                </div>

                {/* Organizers */}
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm text-secondary mb-2">{t("主辦單位", "Organised by")}</p>
                  <p className="text-sm font-medium text-foreground">{t("香港中文大學酒店及旅遊管理學院", "CUHK School of Hotel & Tourism Management")}</p>
                  <p className="text-sm text-secondary mt-2">{t("資助", "Funded by")}</p>
                  <p className="text-sm font-medium text-foreground">{t("鄉郊保育辦公室", "Countryside Conservation Office")}</p>
                </div>

                {/* Social Media */}
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm text-secondary mb-2">{t("關注我們", "Follow Us")}</p>
                  <p className="text-sm font-medium text-foreground">CUHK-MeGoOut</p>
                  <p className="text-xs text-secondary">Instagram / Facebook / RedNote</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PartnerFooter />
    </div>
  )
}

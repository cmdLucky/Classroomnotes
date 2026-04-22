"use client"

import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, MapPin, Phone, Mail, ArrowLeft, Leaf, Waves, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"
import PartnerFooter from "@/components/partner-footer"
import { useLanguage } from "@/contexts/language-context"

export default function KatOSDGStudyTourPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-600 via-cyan-500 to-blue-600" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm mb-4">
            {t("鄉村SDG遊學團", "Rural SDG Study Tour")}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t("吉澳鄉村SDG遊學團", "Kat O Rural SDG Study Tour")}
          </h1>
          <p className="text-xl md:text-2xl text-white/90">
            {t("化身環保小使者，展開生態文化之旅", "Become an Eco Ambassador on an Ecological Cultural Journey")}
          </p>
        </div>
      </section>

      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <Link href="/activities">
          <Button variant="ghost" className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            {t("返回活動列表", "Back to Events")}
          </Button>
        </Link>
      </div>

      {/* Event Details */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: Poster */}
            <div className="space-y-6">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/sdg-study-tour-poster.png"
                  alt="SDG Study Tour Poster"
                  width={600}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Right: Info */}
            <div className="space-y-8">
              {/* Basic Info Card */}
              <div className="bg-muted rounded-2xl p-6 space-y-6">
                <h2 className="text-2xl font-bold text-foreground">
                  {t("活動資訊", "Event Information")}
                </h2>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{t("活動日期 Date", "Event Date")}</p>
                      <p className="font-semibold text-foreground">{t("2026年5月1日（星期五）", "May 1, 2026 (Friday)")}</p>
                      <p className="font-semibold text-foreground">{t("2026年5月9日（星期六）", "May 9, 2026 (Saturday)")}</p>
                      <p className="text-sm text-primary mt-1">
                        {t("(請選擇其中一個日期報名)", "(Please select one date to register)")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{t("活動時間 Time", "Event Time")}</p>
                      <p className="font-semibold text-foreground">9:30 - 15:00</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{t("活動地點 Location", "Location")}</p>
                      <p className="font-semibold text-foreground">{t("吉澳島 Kat O Island", "Kat O Island")}</p>
                      <p className="text-sm text-muted-foreground">{t("沙頭角避風塘集合出發", "Departure from Sha Tau Kok Typhoon Shelter")}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="bg-muted rounded-2xl p-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  {t("活動簡介", "About This Event")}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t(
                    "MeGoOut 特別推出「吉澳鄉村SDG遊學團」，參與者將化身環保小使者展開一場別具意義的生態文化之旅！一齊發掘吉澳隱藏的自然風光、珍貴歷史與獨特客家文化，邊玩邊學，用行動守護這片美麗島嶼！",
                    "MeGoOut presents the 'Kat O Rural SDG Study Tour', where participants become eco-ambassadors on a meaningful ecological and cultural journey! Discover Kat O's hidden natural beauty, precious history and unique Hakka culture while learning and taking action to protect this beautiful island!"
                  )}
                </p>
              </div>

              {/* Contact */}
              <div className="bg-teal-50 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-foreground mb-4">
                  {t("報名詳情請聯繫項目經理 Heidi", "Contact Project Manager Heidi for Registration")}
                </h3>
                <div className="space-y-3">
                  <a href="tel:+85296747074" className="flex items-center gap-3 text-teal-700 hover:text-teal-800">
                    <Phone className="w-5 h-5" />
                    <span>+852 9674 7074</span>
                  </a>
                  <a href="mailto:Heidi.xu@cuhk.edu.hk" className="flex items-center gap-3 text-teal-700 hover:text-teal-800">
                    <Mail className="w-5 h-5" />
                    <span>Heidi.xu@cuhk.edu.hk</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            {t("活動亮點", "Event Highlights")}
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-background rounded-2xl p-6 text-center shadow-sm">
              <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {t("吉澳鄉郊導賞", "Kat O Rural Guided Tour")}
              </h3>
              <p className="text-muted-foreground">
                {t("走進吉澳小島，認識在地生態、歷史與鄉郊文化", "Explore Kat O Island, learn about local ecology, history and rural culture")}
              </p>
            </div>

            <div className="bg-background rounded-2xl p-6 text-center shadow-sm">
              <div className="w-16 h-16 rounded-full bg-cyan-100 flex items-center justify-center mx-auto mb-4">
                <Waves className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {t("海岸淨灘行動", "Beach Cleanup Action")}
              </h3>
              <p className="text-muted-foreground">
                {t("身體力行守護海岸，實踐環保理念", "Take action to protect the coast and practice environmental concepts")}
              </p>
            </div>

            <div className="bg-background rounded-2xl p-6 text-center shadow-sm">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {t("客家環保袋設計", "Hakka Eco-bag Design")}
              </h3>
              <p className="text-muted-foreground">
                {t("結合客家文化元素，創作專屬環保袋", "Combine Hakka cultural elements to create your own eco-bag")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <PartnerFooter />
    </div>
  )
}

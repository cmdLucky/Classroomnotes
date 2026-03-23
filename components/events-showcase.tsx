"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Users, DollarSign, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { getEvents, type Event } from "@/lib/events-data"
import { useLanguage } from "@/contexts/language-context"

interface EventCard {
  id: string
  title: string
  titleEn: string
  series?: string
  date: string
  dateEn: string
  time: string
  location: string
  locationEn: string
  image: string
  category: string
  price?: string
  priceEn?: string
  highlights: string[]
}

export function EventsShowcase() {
  const { t, language } = useLanguage()
  const [events, setEvents] = useState<Event[]>([])

  useEffect(() => {
    // Load initial events
    setEvents(getEvents())

    // Listen for updates
    const handleUpdate = () => {
      setEvents(getEvents())
    }

    window.addEventListener("events-updated", handleUpdate)
    window.addEventListener("storage", handleUpdate)

    return () => {
      window.removeEventListener("events-updated", handleUpdate)
      window.removeEventListener("storage", handleUpdate)
    }
  }, [])

  return (
    <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
            {t("精彩活動", "Upcoming Events")}
          </h1>
          <p className="text-xl text-muted-foreground">{t("Upcoming Events & Activities", "精彩活動")}</p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {events.map((event) => (
            <Card
              key={event.id}
              className="overflow-hidden border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl group"
            >
              {/* Event Image */}
              <div className="relative h-64 sm:h-80 overflow-hidden bg-muted">
                <img
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {event.series && (
                  <div className="absolute top-4 left-4 bg-secondary text-secondary-foreground px-3 py-1.5 rounded-full text-xs font-medium shadow-lg">
                    {event.series}
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1.5 rounded-full text-xs font-medium shadow-lg">
                  {event.category}
                </div>
              </div>

              {/* Event Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2 text-balance group-hover:text-primary transition-colors">
                    {language === "zh" ? event.title : event.titleEn}
                  </h2>
                  <p className="text-sm text-muted-foreground italic">
                    {language === "zh" ? event.titleEn : event.title}
                  </p>
                </div>

                {/* Quick Info */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <div className="font-semibold text-foreground">
                        {language === "zh" ? event.date : event.dateEn}
                      </div>
                      <div className="text-muted-foreground">{language === "zh" ? event.dateEn : event.date}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <div className="font-semibold text-foreground">{event.time}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <div className="font-semibold text-foreground">
                        {language === "zh" ? event.location : event.locationEn}
                      </div>
                      <div className="text-muted-foreground">
                        {language === "zh" ? event.locationEn : event.location}
                      </div>
                    </div>
                  </div>

                  {event.price && (
                    <div className="flex items-start gap-3">
                      <DollarSign className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div className="text-sm">
                        <div className="font-semibold text-foreground">
                          {language === "zh" ? event.price : event.priceEn}
                        </div>
                        <div className="text-muted-foreground text-xs">
                          {language === "zh" ? event.priceEn : event.price}
                        </div>
                        <div className="text-xs text-primary font-medium mt-1">
                          {t("早鳥優惠 Early Bird Discount", "Early Bird Discount 早鳥優惠")}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {event.highlights.map((highlight, index) => (
                    <span
                      key={index}
                      className="text-xs bg-muted text-muted-foreground px-3 py-1 rounded-full border border-border"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <Link href={`/activities/${event.id}`} className="block pt-2">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group/btn transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]">
                    <span className="flex items-center justify-center gap-2">
                      {t("查看詳情 View Details", "View Details 查看詳情")}
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </span>
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <Card className="p-8 border-2 border-primary/30 bg-primary/5 text-center">
          <Users className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-foreground mb-2">
            {t("現場名額有限，敬請提早報名登記", "Limited seats available, early registration is recommended")}
          </h3>
          <p className="text-muted-foreground mb-6">
            {t("Limited seats available, early registration is recommended", "現場名額有限，敬請提早報名登記")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <p className="text-sm text-muted-foreground">
              {t("如有任何疑問，請聯絡項目經理 Heidi", "For inquiries, contact Heidi")} <br />
              {t("For inquiries, contact Heidi:", "如有任何疑問，請聯絡:")}{" "}
              <a href="mailto:Heidi.xu@cuhk.edu.hk" className="text-primary hover:underline">
                Heidi.xu@cuhk.edu.hk
              </a>{" "}
              |{" "}
              <a href="tel:+85296747074" className="text-primary hover:underline">
                +852 9674 7074
              </a>
            </p>
          </div>
        </Card>
      </div>
    </section>
  )
}

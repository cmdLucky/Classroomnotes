"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Users, Calendar } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function ContactInfo() {
  const { t, language } = useLanguage()

  const contactDetails = [
    {
      icon: MapPin,
      title: t("地址", "Address"),
      content: [
        t("香港中文大學", "The Chinese University of Hong Kong"),
        t("酒店與旅遊管理系", "School of Hotel and Tourism Management"),
        "Shatin, New Territories, Hong Kong",
      ],
    },
    {
      icon: Phone,
      title: t("電話", "Phone"),
      content: [
        t("總機", "Main Line") + ": +852 3943 6000",
        t("項目辦公室", "Project Office") + ": +852 3943 6001",
        t("緊急聯絡", "Emergency") + ": +852 9000 0000",
      ],
    },
    {
      icon: Mail,
      title: t("電郵", "Email"),
      content: ["heritage@cuhk.edu.hk", "info@ruralheritage.hk", "volunteer@ruralheritage.hk"],
    },
    {
      icon: Clock,
      title: t("辦公時間", "Office Hours"),
      content: [
        t("星期一至五: 9:00 - 17:30", "Monday - Friday: 9:00 - 17:30"),
        t("星期六: 9:00 - 13:00", "Saturday: 9:00 - 13:00"),
        t("星期日及公眾假期休息", "Closed on Sundays and Public Holidays"),
      ],
    },
  ]

  const quickActions = [
    {
      icon: Users,
      title: t("義工申請", "Volunteer Application"),
      description: t("加入我們的保育團隊", "Join our conservation team"),
    },
    {
      icon: Calendar,
      title: t("活動預約", "Event Booking"),
      description: t("預約參加文化活動", "Book cultural activities"),
    },
    {
      icon: MapPin,
      title: t("實地考察", "Site Visit"),
      description: t("安排到訪保育地點", "Arrange site visits"),
    },
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-foreground">{t("聯絡資訊", "Contact Information")}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {contactDetails.map((detail, index) => (
            <div key={index} className="flex gap-4">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <detail.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">{detail.title}</h3>
                {detail.content.map((line, lineIndex) => (
                  <p key={lineIndex} className="text-sm text-muted-foreground">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-foreground">{t("快速行動", "Quick Actions")}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {quickActions.map((action, index) => (
            <div
              key={index}
              className="flex gap-4 p-4 rounded-lg border hover:bg-muted/50 transition-colors cursor-pointer"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <action.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-foreground">{action.title}</h4>
                <p className="text-xs text-muted-foreground">{action.description}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}

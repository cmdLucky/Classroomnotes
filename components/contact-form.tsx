"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Send } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function ContactForm() {
  const { t, language } = useLanguage()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    language: "zh",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl text-foreground">{t("發送查詢", "Send Inquiry")}</CardTitle>
        <p className="text-muted-foreground">
          {t(
            "請填寫以下表格，我們會盡快回覆您的查詢。",
            "Please fill out the form below, and we will respond to your inquiry as soon as possible.",
          )}
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">{t("姓名", "Name")} *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder={t("請輸入您的姓名", "Enter your name")}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">{t("電郵", "Email")} *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="your.email@example.com"
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">{t("電話", "Phone")}</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                placeholder="+852 1234 5678"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="language">{t("語言偏好", "Language Preference")}</Label>
              <Select value={formData.language} onValueChange={(value) => handleChange("language", value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="zh">繁體中文</SelectItem>
                  <SelectItem value="en">English</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject">{t("主題", "Subject")} *</Label>
            <Select value={formData.subject} onValueChange={(value) => handleChange("subject", value)}>
              <SelectTrigger>
                <SelectValue placeholder={t("請選擇查詢主題", "Select inquiry topic")} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="general">{t("一般查詢", "General Inquiry")}</SelectItem>
                <SelectItem value="visit">{t("參觀預約", "Visit Booking")}</SelectItem>
                <SelectItem value="volunteer">{t("義工申請", "Volunteer Application")}</SelectItem>
                <SelectItem value="partnership">{t("合作機會", "Partnership")}</SelectItem>
                <SelectItem value="media">{t("媒體查詢", "Media Inquiry")}</SelectItem>
                <SelectItem value="research">{t("研究合作", "Research Collaboration")}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">{t("訊息", "Message")} *</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              placeholder={t("請詳細描述您的查詢內容...", "Please describe your inquiry in detail...")}
              rows={6}
              required
            />
          </div>

          <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
            <Send className="mr-2 h-5 w-5" />
            {t("發送查詢", "Send Inquiry")}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

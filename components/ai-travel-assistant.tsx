"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { X, Send, User, MapPin, Calendar, Info } from "lucide-react"
import Image from "next/image"

interface Message {
  id: string
  type: "user" | "assistant"
  content: string
  timestamp: Date
}

export function AITravelAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      type: "assistant",
      content:
        "您好！我是您的鄉村文化遺產旅遊助手。我可以幫您規劃到梅子林、谷埔或吉澳的行程，提供交通資訊、活動推薦和文化背景介紹。請問有什麼可以幫助您的嗎？\n\nHello! I'm your rural heritage travel assistant. I can help you plan trips to Mui Tsz Lam, Kuk Po, or Kat O, provide transportation info, activity recommendations, and cultural background. How can I assist you today?",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const quickActions = [
    {
      icon: MapPin,
      label: "推薦路線",
      labelEn: "Route Planning",
      action: "請推薦一日遊路線",
    },
    {
      icon: Calendar,
      label: "活動查詢",
      labelEn: "Activities",
      action: "有什麼文化活動推薦？",
    },
    {
      icon: Info,
      label: "交通資訊",
      labelEn: "Transportation",
      action: "如何前往這些地點？",
    },
  ]

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: content.trim(),
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "assistant",
        content: generateResponse(content),
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, assistantMessage])
      setIsTyping(false)
    }, 1500)
  }

  const generateResponse = (userInput: string): string => {
    const input = userInput.toLowerCase()

    if (input.includes("路線") || input.includes("route") || input.includes("plan")) {
      return `我為您推薦以下一日遊路線：

🌅 **上午 (9:00-12:00)**
- 從沙田出發，乘坐專線小巴前往梅子林
- 參觀復修後的客家村屋和梯田
- 體驗傳統農耕文化

🍽️ **中午 (12:00-14:00)**
- 在梅子林享用客家風味午餐
- 休息並欣賞山村風光

🌊 **下午 (14:00-17:00)**
- 前往谷埔或吉澳（二選一）
- 谷埔：探索紅樹林生態和傳統漁村
- 吉澳：參觀天后宮和品嚐海鮮

**交通提示：**
- 建議預約專線小巴或參加導賞團
- 穿著舒適的行山鞋
- 帶備防曬用品和充足飲水

需要更詳細的交通安排嗎？`
    }

    if (input.includes("活動") || input.includes("activity") || input.includes("event")) {
      return `本月推薦文化活動：

🎨 **藝術工作坊**
- 客家藍染體驗 (梅子林)
- 傳統漁網編織 (谷埔)
- 時間：每週六日 10:00-16:00

🌾 **生態導賞**
- 梯田生態系統探索
- 紅樹林觀鳥活動
- 時間：每週三、六 14:00-17:00

🏛️ **文化講座**
- 客家文化歷史分享
- 漁村生活故事
- 時間：每月第二個週日 15:00-17:00

📅 **特別節慶活動**
- 春季：客家山歌節
- 夏季：漁村文化節
- 秋季：豐收慶典

想了解特定活動的報名方式嗎？`
    }

    if (input.includes("交通") || input.includes("transport") || input.includes("如何前往")) {
      return `前往三個保育地點的交通資訊：

🚌 **梅子林 Mui Tsz Lam**
- 港鐵：大學站 → 轉乘專線小巴27號
- 巴士：沙田市中心 → 專線小巴27號
- 車程：約45分鐘
- 班次：每30分鐘一班

⛵ **谷埔 Kuk Po**
- 港鐵：大埔墟站 → 轉乘專線小巴20K
- 或：馬料水碼頭 → 街渡
- 車程：約1小時
- 注意：街渡需預約，受天氣影響

🛥️ **吉澳 Kat O**
- 馬料水碼頭 → 街渡直達
- 船程：約1.5小時
- 班次：週末及假日有定期班次
- 建議：提前查詢船期表

💡 **貼心提示**
- 建議參加導賞團，包含交通安排
- 自行前往請提前確認班次時間
- 準備現金支付交通費用

需要具體的時間表或預約資訊嗎？`
    }

    if (input.includes("梅子林") || input.includes("mui tsz lam")) {
      return `梅子林是一個充滿客家文化特色的山村：

🏘️ **歷史背景**
- 建於19世紀的客家村落
- 保存完整的傳統建築群
- 2015年開始復修保育工程

🌾 **主要景點**
- 復修客家村屋群
- 傳統梯田農業系統
- 石砌水渠和古井
- 風水林生態區

🎯 **推薦活動**
- 客家文化導賞 (2小時)
- 傳統農耕體驗
- 山村攝影之旅
- 客家美食品嚐

⏰ **最佳參觀時間**
- 春季：梯田翠綠，氣候宜人
- 秋季：收穫季節，金黃稻田

想了解更多關於客家文化的資訊嗎？`
    }

    // Default response
    return `感謝您的提問！我可以為您提供以下協助：

🗺️ **行程規劃** - 一日遊或多日遊路線推薦
🚌 **交通指南** - 詳細的前往方式和時間表
🎨 **活動推薦** - 文化體驗和生態導賞
🏛️ **文化介紹** - 三個保育地點的歷史背景
🍽️ **美食推薦** - 當地特色料理和餐廳

請告訴我您最感興趣的方面，我會為您提供更詳細的資訊！

Thank you for your question! I can help you with trip planning, transportation, activities, cultural background, and local cuisine recommendations. What would you like to know more about?`
  }

  const handleQuickAction = (action: string) => {
    handleSendMessage(action)
  }

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-primary hover:bg-primary/90 shadow-lg z-50 p-2"
          size="icon"
        >
          <Image
            src="/me-go-out-logo.png"
            alt="ME GO OUT Travel Assistant"
            width={32}
            height={32}
            className="rounded-full"
          />
        </Button>
      )}

      {/* Chat Interface */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-96 h-[600px] shadow-2xl z-50 flex flex-col">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3 bg-primary text-primary-foreground rounded-t-lg">
            <CardTitle className="text-lg font-semibold flex items-center gap-2">
              <Image src="/me-go-out-logo.png" alt="ME GO OUT" width={20} height={20} className="rounded-full" />
              旅遊助手 Travel Assistant
            </CardTitle>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="text-primary-foreground">
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>

          <CardContent className="flex-1 flex flex-col p-0">
            {/* Messages */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-3 ${message.type === "user" ? "justify-end" : "justify-start"}`}
                  >
                    {message.type === "assistant" && (
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 p-1">
                        <Image
                          src="/me-go-out-logo.png"
                          alt="ME GO OUT"
                          width={24}
                          height={24}
                          className="rounded-full"
                        />
                      </div>
                    )}
                    <div
                      className={`max-w-[80%] p-3 rounded-lg text-sm whitespace-pre-line ${
                        message.type === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {message.content}
                    </div>
                    {message.type === "user" && (
                      <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                        <User className="h-4 w-4 text-muted-foreground" />
                      </div>
                    )}
                  </div>
                ))}
                {isTyping && (
                  <div className="flex gap-3 justify-start">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 p-1">
                      <Image
                        src="/me-go-out-logo.png"
                        alt="ME GO OUT"
                        width={24}
                        height={24}
                        className="rounded-full"
                      />
                    </div>
                    <div className="bg-muted p-3 rounded-lg">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" />
                        <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce delay-100" />
                        <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce delay-200" />
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>

            {/* Quick Actions */}
            {messages.length === 1 && (
              <div className="p-4 border-t">
                <p className="text-xs text-muted-foreground mb-3">快速查詢 Quick Actions:</p>
                <div className="grid grid-cols-1 gap-2">
                  {quickActions.map((action, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => handleQuickAction(action.action)}
                      className="justify-start text-left h-auto p-3"
                    >
                      <action.icon className="h-4 w-4 mr-2 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-xs">{action.label}</div>
                        <div className="text-xs text-muted-foreground">{action.labelEn}</div>
                      </div>
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="輸入您的問題... Type your question..."
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage(inputValue)}
                  className="flex-1"
                />
                <Button
                  onClick={() => handleSendMessage(inputValue)}
                  size="icon"
                  disabled={!inputValue.trim() || isTyping}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  )
}

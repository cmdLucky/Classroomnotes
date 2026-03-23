"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Calendar, Clock, MapPin, Share2, DollarSign, Users, AlertCircle, Info } from "lucide-react"
import { useState } from "react"

export default function KatOTreasureHuntPage() {
  const [shareStatus, setShareStatus] = useState<string>("")

  const event = {
    title: "尋吉覓澳之「吉星高照」",
    titleEn: "Kat O Treasure Hunt: Lucky Stars Shining",
    series: "Me-Go-Out深度遊系列",
    date: "2026年1月至3月的週末",
    dateEn: "Weekends, January - March 2026",
    time: "9:30 - 15:00",
    location: "吉澳島 Kat O Island",
    meetingPoint: "沙頭角避風塘",
    meetingPointEn: "Sha Tau Kok Typhoon Shelter",
    image: "/kat-o-treasure-hunt-poster.png",
    price: {
      adult: "HK$200",
      adultEarlyBird: "HK$160",
      child: "HK$100",
      childEarlyBird: "HK$80",
    },
    objectives: [
      "前往吉澳遊覽探索客家與漁村的歷史文化，解讀吉澳這個祥和之島背後的智慧",
      "探索島上生物多樣性、潮汐生態或濕地系統,理解環境保育與可持續發展的概念",
      "通過吉澳尋「吉」、SDG大作戰等親子遊戲，品嘗客家特色美食，推進親子關係與家庭教育",
    ],
    includes: [
      "定制深度遊大禮包（手提袋、遊學手冊、水杯等紀念品、香港中文大學深度遊學團Certificate）",
      "沙頭角-吉澳往返船票，團體保險",
      "在地專業導賞服務和活動體驗",
      "客家特色美食及飲品組合",
    ],
    detailedSchedule: [
      {
        time: "9:30",
        activity: "沙頭角避風塘集合（請至少提前2個工作天申請禁區紙）",
      },
      {
        time: "9:40-10:00",
        activity:
          "出發及到達吉澳碼頭，介紹並領取「走來活動任務」，開啟treasure hunt尋寶之旅。由桉樹廣場，對答對答引導親子至每一座吉地探索，等我吉匯，完成尋寶任務。",
      },
      {
        time: "10:00-10:35",
        activity:
          "1.【吉】地尋蹤：每一段「吉」的緣分，都從登上這條船那刻開始。當你來近這座小島，是否也能感覺到那份被海風吹過的好運？（約1到2對話對答時間）\n• 你問我答話：觀察古澳獨特天獨厚的1自然遊覽香港地質位置\n• 探訪2益民茶樓及周邊吃立超過半個世紀的小店：聆聽吉澳的獨特歷史\n• 探訪3吉澳漁屋以及門前的碼場，聆聽自然與村莊的共生、人類開拓，樹木是如何支撐及守護一個家",
      },
      {
        time: "10:35-11:10",
        activity:
          "2.【吉】語【吉】願：吉澳的信仰文化是連接天、地與人的情感。每一份祝福，都有一樣倒在一位神在傾願。\n• 4媽祖廟 → 5天后宮天后娘娘 → 6吉澳故事館雜貨店「神」",
      },
      {
        time: "11:10-12:30",
        activity:
          "3.【吉】祥之源：吉澳的故事從水而來，也藏在帆與浪，海與井的涼過裡。\n• 7吉澳海灘 → 8吉澳六角古井\n聆聽吉澳的智慧與故事，践行保護海及古井，將迴返收集起來並布湊是.....",
      },
      {
        time: "12:30-14:00",
        activity:
          "4.【吉】思廣益：SDG大作戰！以家庭為單位挑戰SDG大作戰遊戲！在SDG旗標中尋找出17個SDG並依次排列組成吉澳可完成挑戰！",
      },
      {
        time: "14:00-15:00",
        activity:
          "5.【吉】飲【吉】食：享用吉澳特色美食及飲品\n6. 尋心之「吉」：自由探索赤角頭沙灘、高地頂等地。旅程將以觀察與考古者為結尾。頒發證書。根據完成的項目內容，通過考察者將獲頒項目證書。",
      },
      {
        time: "15:00",
        activity: "吉澳碼頭集合乘船返回沙頭角",
      },
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
                      <div className="text-xs text-primary mt-1 leading-relaxed">
                        (具体日期请在报名表中选择或咨询项目经理Heidi +852 9674 7074)
                      </div>
                      <div className="text-xs text-primary leading-relaxed">
                        (Please select specific date in registration form or contact Project Manager Heidi +852 9674
                        7074)
                      </div>
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
                      早鳥優惠至2026年1月15日 Early Bird until Jan 15, 2026
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

          {/* Kat O Background Section */}
          <Card className="p-6 border-2 border-border mb-10 bg-gradient-to-br from-muted/30 to-background">
            <div className="flex items-center gap-2 mb-4">
              <Info className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">吉澳背景 About Kat O Island</h3>
            </div>
            <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed space-y-4">
              <p>
                <strong className="text-foreground">吉澳島（Crooked Island）</strong>
                ，其名源於島嶼曲折的形狀在西北部造就了一個天然避風港，自古就被漁民視為「吉祥的海灣」。擁有近三百年的歷史的吉澳曾是新界東北重要的漁業和客家村落聚居地，至今仍被稱為「大鵬明珠」。
              </p>
              <p>
                地理位置獨特的避風港，守護寧靜漁村的天后宮，留守超半個世紀的益民茶樓，承載豐富鄉間故事的姻緣樹，吉澳仿佛是一個被上天眷顧，自帶吉祥與福氣的寶地，讓親臨之人也都有趣有盼，無災無難。
              </p>
              <p className="text-primary font-medium">
                這次旅程，我們將化身為探尋者，展開一趟獨一無二的「尋吉之旅」，親身發掘這個島嶼深藏的歷史、文化和自然寶藏。
              </p>
              <div className="pt-4 mt-4 border-t border-border">
                <a
                  href="https://gocuhk-my.sharepoint.com/:b:/r/personal/lisawan_cuhk_edu_hk/Documents/CCFS_202425_CUHK/CCFSXSHTM_shared/CCFS_tours%20planning/Kat%20O.pdf?csf=1&web=1&e=LGklw2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                >
                  <MapPin className="w-4 h-4" />
                  查看吉澳地圖 View Kat O Map
                </a>
              </div>
            </div>
          </Card>

          {/* Event Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            {/* Objectives */}
            <Card className="p-6 border-2 border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">遊學目標 Learning Objectives</h3>
              <ul className="space-y-3">
                {event.objectives.map((obj, index) => (
                  <li key={index} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="text-primary font-bold flex-shrink-0">{index + 1}.</span>
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Includes */}
            <Card className="p-6 border-2 border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">服務內容 Includes</h3>
              <ul className="space-y-3">
                {event.includes.map((item, index) => (
                  <li key={index} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="text-secondary font-bold flex-shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          {/* Treasure Hunt Content Section */}
          <Card className="p-6 border-2 border-primary/30 bg-primary/5 mb-10">
            <h3 className="text-2xl font-bold text-foreground mb-4">行程內容 Itinerary Content</h3>
            <p className="text-muted-foreground leading-relaxed">
              這趟<strong className="text-primary">尋吉集星之旅</strong>，我們將一起探索與發掘吉澳的
              <strong className="text-primary">8個「吉地」</strong>，並收集每一處的
              <strong className="text-primary">「吉星」</strong>
              ，兌換禮品和客家特色美食！如果你能全數找到並打卡，你也會像吉澳一樣常有
              <strong className="text-primary">吉星高照</strong>！
            </p>
          </Card>

          {/* Schedule */}
          <Card className="p-6 border-2 border-border mb-10">
            <h3 className="text-xl font-bold text-foreground mb-6">行程安排 Detailed Itinerary</h3>
            <div className="space-y-6">
              {event.detailedSchedule.map((item, index) => (
                <div key={index} className="flex gap-4 items-start pb-6 border-b border-border last:border-0 last:pb-0">
                  <div className="bg-primary/10 text-primary px-3 py-1.5 rounded-md text-sm font-bold flex-shrink-0 min-w-[100px] text-center">
                    {item.time}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">{item.activity}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Important Notes Section */}
          <Card className="p-6 border-2 border-orange-500/30 bg-orange-50/50 mb-10">
            <div className="flex items-center gap-2 mb-6">
              <AlertCircle className="w-6 h-6 text-orange-600" />
              <h3 className="text-2xl font-bold text-foreground">注意事項 Important Notes</h3>
            </div>

            <div className="space-y-6">
              {/* Basic Info */}
              <div>
                <h4 className="font-bold text-foreground mb-3 text-lg">基本資訊</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-orange-600 font-bold">•</span>
                    <span>
                      <strong>日期：</strong>2026年1月至3月的週末 Weekends, January - March 2026
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-600 font-bold">•</span>
                    <span>
                      <strong>時間：</strong>9:40-15:00 (解散時間約15:00)
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-600 font-bold">•</span>
                    <div>
                      <strong>集合地點：</strong>沙頭角避風塘
                      <br />
                      <a
                        href="https://maps.app.goo.gl/oCdraKuu45RiZTi28"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline text-xs"
                      >
                        📍 查看地圖位置
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-600 font-bold">•</span>
                    <div>
                      <strong>聯絡方法：</strong>集合當日如有任何問題，歡迎與主辦單位負責人聯絡
                      <br />
                      <span className="text-primary">Heidi: +852 9674 7074</span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Personal Equipment */}
              <div>
                <h4 className="font-bold text-foreground mb-3 text-lg">個人裝備及注意事項</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-orange-600 font-bold">✓</span>
                    <span>請自備充足食水、防蚊防曬用品、晴雨天用具、及筆</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-600 font-bold">✓</span>
                    <span>建議穿著舒適輕長袖便服、長褲及有坑紋運動鞋，避免穿著牛仔褲</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-600 font-bold">✓</span>
                    <span>本活動不能自行更改由其他人士代為參加，主辦單位恕未能接待臨時更換之參加者</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-600 font-bold">✓</span>
                    <span>請準備一顆積極和大家交流的心，參與體驗活動</span>
                  </li>
                </ul>
              </div>

              {/* Weather Arrangements */}
              <div>
                <h4 className="font-bold text-foreground mb-3 text-lg">天氣安排</h4>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>
                    如因天氣狀況而導致街渡服務暫停(三號或更高颱風訊號、紅色或黑色暴雨警告、大霧及其他突發情況)，當日活動暫停，補辦活動時間另行通知。
                  </p>
                  <p>
                    如當日活動因惡劣天氣延期，主辦機構將於活動當日早上7時正以WhatsApp通知大家會否成行，中選參加者可獲保留名額，安排另行公佈。
                  </p>
                  <p>
                    天文台網頁：
                    <a
                      href="http://www.hko.gov.hk/contentc.htm"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline ml-1"
                    >
                      http://www.hko.gov.hk/contentc.htm
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Registration CTA */}
          <Card className="p-8 border-2 border-primary/30 bg-primary/5 text-center">
            <Users className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-2">現場名額有限，敬請提早報名登記</h3>
            <p className="text-muted-foreground mb-6">Limited seats available, early registration is recommended</p>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">如有任何疑問，歡迎聯絡項目經理 Heidi</p>
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
    </main>
  )
}

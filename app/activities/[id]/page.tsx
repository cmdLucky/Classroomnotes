import { Navigation } from "@/components/navigation"
import { EventDetail } from "@/components/event-detail"
import { notFound } from "next/navigation"

// Mock event data - in a real app, this would come from a database
const events = {
  "spring-art-festival": {
    id: "spring-art-festival",
    title: "春季梅子林藝術節",
    subtitle: "傳統與現代的完美融合",
    date: "2024-04-15",
    time: "10:00-17:00",
    location: "梅子林村",
    category: "文化體驗",
    price: "免費",
    participants: 100,
    description:
      "春季梅子林藝術節是一年一度的文化盛事，結合傳統客家文化與當代藝術創作。活動包括藝術展覽、互動工作坊、傳統表演和地道美食體驗，讓參與者深度感受鄉郊文化的魅力。",
    highlights: ["當代藝術展覽", "客家美食體驗", "傳統音樂表演", "手工藝製作工作坊", "梯田導賞"],
    schedule: [
      { time: "10:00-10:30", activity: "開幕儀式及歡迎致辭" },
      { time: "10:30-12:00", activity: "藝術展覽導賞" },
      { time: "12:00-13:30", activity: "客家風味午餐" },
      { time: "13:30-15:00", activity: "傳統手工藝工作坊" },
      { time: "15:00-16:00", activity: "客家音樂表演" },
      { time: "16:00-17:00", activity: "梯田文化導賞" },
    ],
    requirements: ["適合所有年齡參與", "建議穿著舒適步行鞋", "自備防曬用品", "活動免費但需預先登記"],
    images: [
      "/traditional-terraced-fields-with-art-installations.jpg",
      "/beautiful-terraced-fields-and-traditional-village-.jpg",
    ],
  },
}

interface EventPageProps {
  params: {
    id: string
  }
}

export default function EventPage({ params }: EventPageProps) {
  const event = events[params.id as keyof typeof events]

  if (!event) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      <EventDetail event={event} />
    </main>
  )
}

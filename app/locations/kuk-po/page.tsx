import { Navigation } from "@/components/navigation"
import { LocationHero } from "@/components/location-hero"
import { LocationDetails } from "@/components/location-details"
import { LocationGallery } from "@/components/location-gallery"
import { LocationPracticalInfo } from "@/components/location-practical-info"

const kukPoData = {
  id: "kuk-po",
  name: "谷埔",
  nameEn: "Kuk Po",
  subtitle: "金黃蘆葦田，濕地生態天堂",
  heroImage: "/golden-reed-fields-and-wetlands-in-hong-kong-count.jpg",
  description:
    "谷埔是一個擁有400年歷史的客家村落，以其壯觀的蘆葦田和豐富的濕地生態而聞名。每年秋冬季節，金黃色的蘆葦隨風搖曳，形成如詩如畫的自然景觀。",
  history:
    "谷埔村建於明朝，是典型的客家村落。村內的啟才學校見證了鄉村教育的發展歷程。近年來，谷埔因其獨特的濕地生態和蘆葦田景觀，成為生態旅遊和攝影愛好者的熱門目的地。",
  highlights: [
    {
      title: "啟才學校",
      description: "歷史悠久的鄉村學校，見證了當地教育發展的歷程",
    },
    {
      title: "蘆葦田",
      description: "秋冬季節金黃色的蘆葦田，是攝影和觀賞的絕佳地點",
    },
    {
      title: "濕地生態",
      description: "豐富的濕地生態系統，是候鳥遷徙的重要棲息地",
    },
    {
      title: "候鳥觀察",
      description: "冬季可觀察到多種候鳥，是觀鳥愛好者的天堂",
    },
  ],
  practicalInfo: {
    duration: "半日遊 (4-5小時)",
    difficulty: "中等",
    bestTime: "秋季 (10-12月) 和冬季 (1-2月)",
    openingHours: "每日 8:00-18:00",
    admission: "免費參觀",
    transportation: [
      {
        method: "巴士 + 步行",
        details: "從粉嶺港鐵站乘搭78K巴士至沙頭角，再步行約45分鐘",
      },
      {
        method: "的士",
        details: "從粉嶺直達，車程約30分鐘",
      },
    ],
    facilities: ["觀鳥亭", "步道", "資訊板"],
    tips: ["建議攜帶望遠鏡觀鳥", "秋冬季節蘆葦最為壯觀", "步行路程較長，請準備充足體力", "注意保護濕地生態環境"],
  },
  gallery: ["/golden-reed-fields-and-wetlands-in-hong-kong-count.jpg"],
}

export default function KukPoPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <LocationHero data={kukPoData} />
      <LocationDetails data={kukPoData} />
      <LocationGallery data={kukPoData} />
      <LocationPracticalInfo data={kukPoData} />
    </main>
  )
}

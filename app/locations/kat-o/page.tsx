import { Navigation } from "@/components/navigation"
import { LocationHero } from "@/components/location-hero"
import { LocationDetails } from "@/components/location-details"
import { LocationGallery } from "@/components/location-gallery"
import { LocationPracticalInfo } from "@/components/location-practical-info"

const katOData = {
  id: "kat-o",
  name: "吉澳",
  nameEn: "Kat O",
  subtitle: "4000年歷史，聯合國地質公園",
  heroImage: "/fishing-village-bay-with-traditional-boats-and-geo.jpg",
  description:
    "吉澳是一個擁有4000年歷史的漁村，位於香港東北部海域。作為聯合國教科文組織世界地質公園的一部分，吉澳以其獨特的地質景觀、豐富的海洋文化和傳統漁村風貌而聞名。",
  history:
    "吉澳的歷史可以追溯到新石器時代，是香港最古老的聚居地之一。島上的天后廟建於清朝，見證了漁民對海洋女神的虔誠信仰。近年來，吉澳通過文化徑的建設，將歷史遺跡、地質奇觀和漁村文化完美結合。",
  highlights: [
    {
      title: "文化徑",
      description: "環島文化徑串聯各個歷史景點，展現島嶼的豐富文化",
    },
    {
      title: "天后廟",
      description: "歷史悠久的天后廟，是漁民祈求平安的精神寄託",
    },
    {
      title: "地質奇觀",
      description: "獨特的岩石構造和海岸地貌，展現大自然的鬼斧神工",
    },
    {
      title: "漁村文化",
      description: "體驗傳統漁村生活，品嚐新鮮海產和地道美食",
    },
  ],
  practicalInfo: {
    duration: "全日遊 (6-8小時)",
    difficulty: "輕鬆",
    bestTime: "全年適宜，春秋季節最佳",
    openingHours: "渡輪服務時間內",
    admission: "免費參觀 (渡輪費用另計)",
    transportation: [
      {
        method: "渡輪",
        details: "從馬料水碼頭乘搭渡輪，航程約1.5小時",
      },
      {
        method: "街渡",
        details: "從沙頭角碼頭乘搭街渡，航程約30分鐘",
      },
    ],
    facilities: ["碼頭", "洗手間", "餐廳", "士多"],
    tips: ["建議預留4小時以上遊覽時間", "注意渡輪班次時間", "可品嚐當地新鮮海產", "攜帶防曬用品和充足飲水"],
  },
  gallery: ["/fishing-village-bay-with-traditional-boats-and-geo.jpg"],
}

export default function KatOPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <LocationHero data={katOData} />
      <LocationDetails data={katOData} />
      <LocationGallery data={katOData} />
      <LocationPracticalInfo data={katOData} />
    </main>
  )
}

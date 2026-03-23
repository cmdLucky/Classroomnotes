import { Navigation } from "@/components/navigation"
import { LocationHero } from "@/components/location-hero"
import { LocationDetails } from "@/components/location-details"
import { LocationGallery } from "@/components/location-gallery"
import { LocationPracticalInfo } from "@/components/location-practical-info"

const muiTszLamData = {
  id: "mui-tsz-lam",
  name: "梅子林",
  nameEn: "Mui Tsz Lam",
  subtitle: "400年客家村落，梯田藝術復興",
  heroImage: "/traditional-terraced-fields-with-art-installations.jpg",
  description:
    "梅子林是一個擁有400多年歷史的客家村落，以其壯觀的梯田景觀和近年來的藝術復興項目而聞名。這個古老的村落通過當代藝術與傳統文化的結合，重新煥發了生機。",
  history:
    "梅子林村建於明朝末年，是典型的客家村落。村民世代以農業為生，在山坡上開闢了層層梯田。近年來，透過藝術復興計劃，村落結合了傳統建築保育與當代藝術創作，成為文化旅遊的新亮點。",
  highlights: [
    {
      title: "傳統建築",
      description: "保存完好的客家傳統建築群，展現古樸的鄉村風貌",
    },
    {
      title: "藝術復興項目",
      description: "當代藝術家與村民合作的創作項目，為古村注入新活力",
    },
    {
      title: "梯田景觀",
      description: "層層疊疊的梯田，春夏綠意盎然，秋冬金黃一片",
    },
    {
      title: "客家文化",
      description: "體驗正宗的客家文化，包括語言、飲食和傳統習俗",
    },
  ],
  practicalInfo: {
    duration: "半日遊 (3-4小時)",
    difficulty: "輕鬆",
    bestTime: "春季 (3-5月) 和秋季 (9-11月)",
    openingHours: "每日 9:00-17:00",
    admission: "免費參觀",
    transportation: [
      {
        method: "巴士",
        details: "從粉嶺港鐵站乘搭52B巴士至梅子林站",
      },
      {
        method: "小巴",
        details: "從上水港鐵站乘搭59K小巴",
      },
      {
        method: "的士",
        details: "從粉嶺或上水直達，車程約20分鐘",
      },
    ],
    facilities: ["導賞服務", "洗手間", "小食亭", "停車場"],
    tips: [
      "建議穿著舒適的步行鞋",
      "春秋季節天氣宜人，適合攝影",
      "可參加導賞團了解更多歷史文化",
      "尊重當地居民的生活空間",
    ],
  },
  gallery: [
    "/traditional-terraced-fields-with-art-installations.jpg",
    "/beautiful-terraced-fields-and-traditional-village-.jpg",
  ],
}

export default function MuiTszLamPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <LocationHero data={muiTszLamData} />
      <LocationDetails data={muiTszLamData} />
      <LocationGallery data={muiTszLamData} />
      <LocationPracticalInfo data={muiTszLamData} />
    </main>
  )
}

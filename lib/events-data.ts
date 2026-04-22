export interface Event {
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
  registrations?: number
  maxCapacity?: number
  status?: "upcoming" | "ongoing" | "completed"
}

// Default events data
const defaultEvents: Event[] = [
  {
    id: "kat-o-sdg-study-tour",
    title: "吉澳鄉村SDG遊學團",
    titleEn: "Kat O Rural SDG Study Tour",
    series: "MeGoOut鄉村深度遊",
    date: "2026年5月1日（星期五）及 5月9日（星期六）",
    dateEn: "May 1 (Friday) & May 9 (Saturday), 2026",
    time: "9:30 - 15:00",
    location: "吉澳島 Kat O Island",
    locationEn: "Departure from Sha Tau Kok",
    image: "/images/sdg-study-tour-poster.png",
    category: "遊學團 Study Tour",
    price: "請聯繫項目經理Heidi查詢",
    priceEn: "Please contact Project Manager Heidi for details",
    highlights: ["吉澳鄉郊導賞", "海岸淨灘行動", "客家環保袋設計", "生態文化之旅"],
    status: "upcoming",
  },
  {
    id: "kat-o-tin-hau-festival",
    title: "MeGoOut鄉村美食嘉年華暨吉澳天后誕慶典",
    titleEn: "MeGoOut Rural Food Carnival & Kat O Tin Hau Festival Celebration",
    series: "MeGoOut文化復興項目",
    date: "2026年5月9日（星期六）",
    dateEn: "May 9, 2026 (Saturday)",
    time: "10:00 - 17:00",
    location: "吉澳島 Kat O Island",
    locationEn: "Kat O Island, Yan Chau Tong",
    image: "/images/tin-hau-festival-poster.png",
    category: "節慶活動 Festival",
    price: "免費入場 / Free Admission",
    priceEn: "Free Admission (Free Ferry Ticket Registration)",
    highlights: ["天后巡遊及抽炮儀式", "創意市集及Live Music", "客家廚王爭霸賽", "主題導賞團", "免費船票"],
    status: "upcoming",
  },
  {
    id: "kat-o-treasure-hunt-feb8",
    title: "尋吉覓澳之「吉星高照」",
    titleEn: "Kat O Treasure Hunt: Lucky Stars Shining",
    series: "Me-Go-Out鄉村深度親子遊",
    date: "2026年2月8日",
    dateEn: "February 8, 2026",
    time: "9:30 - 15:00",
    location: "吉澳島 Kat O Island",
    locationEn: "Departure from Sha Tau Kok",
    image: "/images/kat-o-feb8-poster.jpeg",
    category: "鄉村深度遊 Rural Tour",
    price: "成人 HK$200 (早鳥 HK$160) | 小童 HK$100 (早鳥 HK$80)",
    priceEn: "Adults HK$200 (Early Bird HK$160) | Children HK$100 (Early Bird HK$80)",
    highlights: ["親子家庭活動", "客家文化探索", "生態保育體驗", "早鳥優惠至1月31日"],
    status: "upcoming",
  },
  {
    id: "kat-o-romantic-tour",
    title: "吉澳 - 浪漫遊",
    titleEn: "Kat O - Romantic Tour",
    series: "Me-Go-Out深度遊系列",
    date: "2026年2月7日（星期六）",
    dateEn: "February 7, 2026 (Saturday)",
    time: "9:30 - 16:00",
    location: "吉澳島 Kat O Island",
    locationEn: "Departure from Sha Tau Kok",
    image: "/images/kat-o-romantic-tour.png",
    category: "浪漫之旅 Romantic Tour",
    price: "請掃碼報名查詢",
    priceEn: "Please scan QR code for registration",
    highlights: ["情人節特別活動", "浪漫海島之旅", "客家美食體驗"],
    status: "upcoming",
  },
  {
    id: "kat-o-treasure-hunt",
    title: "尋吉覓澳之「吉星高照」",
    titleEn: "Kat O Treasure Hunt: Lucky Stars Shining",
    series: "Me-Go-Out深度遊系列",
    date: "2026年1-3月的週末",
    dateEn: "Weekends, January - March 2026",
    time: "9:30 - 15:00",
    location: "吉澳島 Kat O Island",
    locationEn: "Departure from Sha Tau Kok",
    image: "/kat-o-treasure-hunt-poster.png",
    category: "鄉村深度遊 Rural Tour",
    price: "成人 HK$200 (早鳥 HK$160) | 小童 HK$100 (早鳥 HK$80)",
    priceEn: "Adults HK$200 (Early Bird HK$160) | Children HK$100 (Early Bird HK$80)",
    highlights: ["親子家庭活動", "客家文化探索", "生態保育體驗"],
    registrations: 20,
    maxCapacity: 40,
    status: "upcoming",
  },
  {
    id: "megoout-exhibition-2026",
    title: "MeGoOut客家美食文化及鄉村深度遊展覽",
    titleEn: "MeGoOut Hakka Food Culture & Rural Tour Exhibition",
    date: "2026年1月17日",
    dateEn: "January 17, 2026",
    time: "12:30 - 18:00",
    location: "香港中文大學嶺南運動場A30攤位",
    locationEn: "Booth A30, Lingnan Stadium, CUHK",
    image: "/images/megoout-exhibition-2026.jpeg",
    category: "展覽活動 Exhibition",
    price: "免費入場 / Free Admission",
    priceEn: "Free Admission",
    highlights: ["客家黃酒及美食體驗", "三村特點及深度遊宣傳介紹", "鄉村保育義賣活動", "攤位互動遊戲"],
    status: "upcoming",
  },
  {
    id: "hakka-food-forum",
    title: "客家美食的「古早味」和「新食尚」",
    titleEn: 'The "Traditional Flavors" and "New Trends" of Hakka Cuisine',
    series: "MeGoOut客家美食文化系列午間論壇 第二場",
    date: "2026年1月9日",
    dateEn: "January 9, 2026",
    time: "11:00 - 13:30",
    location: "The Gastronomy Club, 香港中文大學鄭裕彤樓5樓",
    locationEn: "5/F, Cheng Yu Tung Building, CUHK",
    image: "/images/image.jpeg",
    category: "美食文化 Food Culture",
    highlights: ["專業廚師分享", "客家風味午餐", "線上參與"],
    registrations: 28,
    maxCapacity: 50,
    status: "upcoming",
  },
]

// Storage key - Updated version to force cache refresh
const STORAGE_KEY = "megoout_events_v2"

// Get all events
export function getEvents(): Event[] {
  if (typeof window === "undefined") return defaultEvents

  const stored = localStorage.getItem(STORAGE_KEY)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultEvents))
  return defaultEvents
}

// Get single event by ID
export function getEventById(id: string): Event | undefined {
  const events = getEvents()
  return events.find((event) => event.id === id)
}

// Save events
export function saveEvents(events: Event[]): void {
  if (typeof window === "undefined") return
  localStorage.setItem(STORAGE_KEY, JSON.stringify(events))

  // Trigger storage event for cross-tab sync
  window.dispatchEvent(new Event("events-updated"))
}

// Update single event
export function updateEvent(id: string, updates: Partial<Event>): boolean {
  const events = getEvents()
  const index = events.findIndex((event) => event.id === id)

  if (index === -1) return false

  events[index] = { ...events[index], ...updates }
  saveEvents(events)
  return true
}

// Add new event
export function addEvent(event: Event): void {
  const events = getEvents()
  events.push(event)
  saveEvents(events)
}

// Delete event
export function deleteEvent(id: string): boolean {
  const events = getEvents()
  const filtered = events.filter((event) => event.id !== id)

  if (filtered.length === events.length) return false

  saveEvents(filtered)
  return true
}

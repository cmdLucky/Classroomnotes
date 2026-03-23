"use client"
import { Card, CardContent } from "@/components/ui/card"
import { useScrollAnimation, useStaggeredAnimation } from "./scroll-animations"
import { useLanguage } from "@/contexts/language-context"

const pillars = [
  {
    icon: "📚",
    title: "文化傳承",
    titleEn: "Cultural Heritage",
    description: "保護和傳承客家文化，記錄鄉村歷史故事",
    descriptionEn: "Protect and inherit Hakka culture, record village history stories",
  },
  {
    icon: "🌿",
    title: "生態保育",
    titleEn: "Ecological Conservation",
    description: "維護自然生態環境，促進可持續發展",
    descriptionEn: "Maintain natural ecological environment, promote sustainable development",
  },
  {
    icon: "👥",
    title: "社區發展",
    titleEn: "Community Development",
    description: "支持在地社區，創造就業和發展機會",
    descriptionEn: "Support local communities, create employment and development opportunities",
  },
]

export function ProjectIntro() {
  const sectionRef = useScrollAnimation(0.1)
  const pillarsRef = useStaggeredAnimation(200)
  const { t, language } = useLanguage()

  return (
    <section ref={sectionRef} className="py-12 px-4 sm:px-6 lg:px-8 animate-in-stagger">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-foreground mb-4">{t("關於項目", "About the Project")}</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
          <div className="slide-in-left">
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              {t(
                "香港中文大學商學院下屬酒店及旅遊管理學院與鄉郊基金攜手合作，透過為期28個月的資助計劃，致力於保護和推廣香港鄉郊文化遺產。我們專注於梅子林、谷埔和吉澳三個具有深厚歷史底蘊的地點。",
                "The School of Hotel and Tourism Management at CUHK Business School partners with the Countryside Conservation Funding Scheme for a 28-month project dedicated to protecting and promoting Hong Kong's rural cultural heritage, focusing on Mui Tsz Lam, Kuk Po, and Kat O.",
              )}
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {t(
                "項目以「挖掘在地之美，守護鄉郊文脈」為使命，通過文化保育、生態保護和社區發展三大支柱，實現鄉村的可持續發展。",
                "With the mission of 'Discover Local Beauty, Preserve Rural Heritage', the project achieves sustainable rural development through three pillars: cultural conservation, ecological protection, and community development.",
              )}
            </p>
          </div>

          <div className="relative slide-in-right">
            <img
              src="/cuhk-professors-and-students-working-with-local-vi.jpg"
              alt="CUHK CCFS project team"
              className="w-full h-auto rounded-lg shadow-lg hover-scale"
            />
            <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-4 rounded-lg shadow-lg hover-lift">
              <span className="text-2xl mb-2 block">🏆</span>
              <div className="font-bold">UNESCO</div>
              <div className="text-sm">{t("地質公園認證", "Geopark Certified")}</div>
            </div>
          </div>
        </div>

        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-4">{t("三大保育支柱", "Three Conservation Pillars")}</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t(
              "我們的保育理念建基於三個核心支柱，確保鄉郊文化遺產得到全面保護和可持續發展",
              "Our conservation philosophy is built on three core pillars, ensuring comprehensive protection and sustainable development of rural cultural heritage",
            )}
          </p>
        </div>

        <div ref={pillarsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-all duration-500 border-0 bg-card hover-lift animate-in-stagger"
            >
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 hover-scale">
                  <span className="text-2xl">{pillar.icon}</span>
                </div>
                <h4 className="text-xl font-bold text-foreground mb-2">
                  {language === "zh" ? pillar.title : pillar.titleEn}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {language === "zh" ? pillar.description : pillar.descriptionEn}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Card, CardContent } from "@/components/ui/card"

export function Partners() {
  const partners = [
    {
      name: "香港中文大學商學院",
      nameEn: "CUHK Business School",
      logo: "/cuhk-business-school-logo.jpeg",
      description: "商業策略與管理支持",
    },
    {
      name: "香港中文大學酒店及旅遊管理學院",
      nameEn: "School of Hotel & Tourism Management",
      logo: "/cuhk-shtm-logo.png",
      description: "旅遊發展與管理指導",
    },
    {
      name: "鄉郊保育資助計劃",
      nameEn: "Countryside Conservation Funding Scheme",
      logo: "/ccfs-logo.png",
      description: "資金支持與項目協調",
    },
    {
      name: "鄉郊保育辦公室",
      nameEn: "Countryside Conservation Office",
      logo: "/cco-logo.png",
      description: "保育政策與實施監督",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">合作夥伴</h2>
          <p className="text-xl text-secondary/80 mb-6">Our Partners</p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            感謝各界合作夥伴的支持，讓鄉村文化遺產保育工作得以順利推進。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4">
                  <img
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    className="h-16 w-auto mx-auto object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-secondary mb-1">{partner.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{partner.nameEn}</p>
                <p className="text-xs text-muted-foreground text-pretty">{partner.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

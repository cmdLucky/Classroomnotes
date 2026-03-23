import { Button } from "@/components/ui/button"
import { ShoppingBag, Heart, Gift } from "lucide-react"

export function ShopHero() {
  return (
    <section className="relative pt-20 pb-16 bg-gradient-to-br from-background via-background to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary/10 rounded-full">
              <ShoppingBag className="w-12 h-12 text-primary" />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            文創商品
            <span className="block text-2xl md:text-3xl text-muted-foreground mt-2 font-normal">
              Cultural Creative Products
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            將鄉郊文化融入日常生活，每一件商品都承載著梅子林、谷埔、吉澳的故事與記憶
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              <Gift className="w-5 h-5 mr-2" />
              瀏覽商品
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
              <Heart className="w-5 h-5 mr-2" />
              收藏清單
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

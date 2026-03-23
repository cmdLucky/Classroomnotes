import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart, Heart } from "lucide-react"
import Image from "next/image"

export function FeaturedProducts() {
  const featuredProducts = [
    {
      id: 1,
      name: "梅子林手織圍巾",
      englishName: "Mui Tsz Lam Handwoven Scarf",
      price: "HK$380",
      originalPrice: "HK$450",
      image: "/traditional-handwoven-scarf-with-rural-patterns.jpg",
      rating: 4.8,
      reviews: 24,
      location: "梅子林",
      badge: "限量版",
      description: "採用傳統織布工藝，融入梅子林的自然元素",
    },
    {
      id: 2,
      name: "谷埔陶瓷茶具組",
      englishName: "Kuk Po Ceramic Tea Set",
      price: "HK$680",
      originalPrice: null,
      image: "/traditional-ceramic-tea-set-with-rural-motifs.jpg",
      rating: 4.9,
      reviews: 18,
      location: "谷埔",
      badge: "新品",
      description: "手工製作的陶瓷茶具，展現谷埔的寧靜美學",
    },
    {
      id: 3,
      name: "吉澳漁村明信片套裝",
      englishName: "Kat O Fishing Village Postcard Set",
      price: "HK$120",
      originalPrice: null,
      image: "/vintage-postcard-set-featuring-fishing-village-sce.jpg",
      rating: 4.7,
      reviews: 32,
      location: "吉澳",
      badge: "熱銷",
      description: "12張精美明信片，記錄吉澳漁村的美麗風光",
    },
  ]

  return (
    <section className="py-16 bg-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">精選商品</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            編輯精心挑選的熱門文創商品，每一件都有其獨特的故事
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative">
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-primary text-primary-foreground">
                    {product.badge}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Button size="sm" variant="ghost" className="bg-background/80 hover:bg-background">
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="mb-2">
                  <Badge variant="outline" className="text-xs">
                    {product.location}
                  </Badge>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">{product.englishName}</p>
                <p className="text-sm text-muted-foreground mb-4">{product.description}</p>

                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium ml-1">{product.rating}</span>
                    <span className="text-sm text-muted-foreground ml-1">({product.reviews})</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                    )}
                  </div>
                  <Button size="sm">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    加入購物車
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            查看更多精選商品
          </Button>
        </div>
      </div>
    </section>
  )
}

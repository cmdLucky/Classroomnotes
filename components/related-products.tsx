import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart } from "lucide-react"
import Image from "next/image"

export function RelatedProducts() {
  const relatedProducts = [
    {
      id: 4,
      name: "客家花布手提袋",
      englishName: "Hakka Floral Tote Bag",
      price: "HK$180",
      image: "/traditional-hakka-floral-pattern-tote-bag.jpg",
      rating: 4.6,
      reviews: 15,
      location: "梅子林",
    },
    {
      id: 7,
      name: "竹編置物籃",
      englishName: "Bamboo Storage Basket",
      price: "HK$280",
      image: "/traditional-bamboo-woven-storage-basket.jpg",
      rating: 4.5,
      reviews: 12,
      location: "梅子林",
    },
    {
      id: 2,
      name: "谷埔陶瓷茶具組",
      englishName: "Kuk Po Ceramic Tea Set",
      price: "HK$680",
      image: "/traditional-ceramic-tea-set-with-rural-motifs.jpg",
      rating: 4.9,
      reviews: 18,
      location: "谷埔",
    },
    {
      id: 3,
      name: "吉澳漁村明信片套裝",
      englishName: "Kat O Fishing Village Postcard Set",
      price: "HK$120",
      image: "/vintage-postcard-set-featuring-fishing-village-sce.jpg",
      rating: 4.7,
      reviews: 32,
      location: "吉澳",
    },
  ]

  return (
    <section className="py-16 bg-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">相關商品</h2>
          <p className="text-lg text-muted-foreground">您可能也會喜歡這些文創商品</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="relative">
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              <CardContent className="p-4">
                <div className="mb-2">
                  <Badge variant="outline" className="text-xs">
                    {product.location}
                  </Badge>
                </div>

                <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-1">{product.englishName}</p>

                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium ml-1">{product.rating}</span>
                    <span className="text-xs text-muted-foreground ml-1">({product.reviews})</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-primary">{product.price}</span>
                  <Button size="sm" variant="outline">
                    <ShoppingCart className="w-3 h-3 mr-1" />
                    加入
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

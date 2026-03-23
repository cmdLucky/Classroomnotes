import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart, Heart, Filter } from "lucide-react"
import Image from "next/image"

export function ProductGrid() {
  const products = [
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
      id: 5,
      name: "鄉郊風景水彩畫",
      englishName: "Rural Landscape Watercolor",
      price: "HK$320",
      image: "/watercolor-painting-of-rural-hong-kong-landscape.jpg",
      rating: 4.8,
      reviews: 9,
      location: "谷埔",
    },
    {
      id: 6,
      name: "漁村故事繪本",
      englishName: "Fishing Village Storybook",
      price: "HK$150",
      image: "/illustrated-children-book-about-fishing-village.jpg",
      rating: 4.9,
      reviews: 27,
      location: "吉澳",
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
      id: 8,
      name: "鄉郊香薰蠟燭",
      englishName: "Rural Scented Candle",
      price: "HK$120",
      image: "/natural-scented-candle-with-rural-packaging.jpg",
      rating: 4.7,
      reviews: 21,
      location: "谷埔",
    },
    {
      id: 9,
      name: "漁網編織杯墊",
      englishName: "Fishing Net Coasters",
      price: "HK$80",
      image: "/coasters-made-from-fishing-net-material.jpg",
      rating: 4.4,
      reviews: 18,
      location: "吉澳",
    },
  ]

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">所有商品</h2>
            <p className="text-muted-foreground">共 {products.length + 3} 件商品</p>
          </div>
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            篩選
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
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
                <div className="absolute top-3 right-3">
                  <Button size="sm" variant="ghost" className="bg-background/80 hover:bg-background p-2">
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <CardContent className="p-4">
                <div className="mb-2">
                  <Badge variant="outline" className="text-xs">
                    {product.location}
                  </Badge>
                </div>

                <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors line-clamp-1">
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

        <div className="text-center mt-12">
          <Button size="lg">載入更多商品</Button>
        </div>
      </div>
    </section>
  )
}

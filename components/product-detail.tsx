"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Star, ShoppingCart, Heart, Share2, Minus, Plus, Truck, Shield, RotateCcw } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

interface ProductDetailProps {
  productId: string
}

export function ProductDetail({ productId }: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  // Mock product data - in real app, fetch based on productId
  const product = {
    id: 1,
    name: "梅子林手織圍巾",
    englishName: "Mui Tsz Lam Handwoven Scarf",
    price: "HK$380",
    originalPrice: "HK$450",
    images: [
      "/traditional-handwoven-scarf-with-rural-patterns-ma.jpg",
      "/traditional-handwoven-scarf-detail-texture.jpg",
      "/traditional-handwoven-scarf-worn-by-model.jpg",
      "/traditional-handwoven-scarf-packaging.jpg",
    ],
    rating: 4.8,
    reviews: 24,
    location: "梅子林",
    badge: "限量版",
    description:
      "這條手織圍巾採用傳統織布工藝製作，融入了梅子林的自然元素和客家文化特色。每一條圍巾都是由當地工藝師傅手工製作，使用天然棉麻材質，觸感柔軟舒適。圍巾上的圖案靈感來自梅子林的梯田景觀和傳統建築，展現了鄉郊文化的獨特魅力。",
    features: [
      "100% 天然棉麻材質",
      "手工織造，每件獨一無二",
      "融入梅子林文化元素",
      "尺寸：180cm x 70cm",
      "適合四季佩戴",
    ],
    inStock: true,
    stockCount: 8,
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square relative overflow-hidden rounded-lg bg-accent/5">
            <Image
              src={product.images[selectedImage] || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover"
            />
            <div className="absolute top-4 left-4">
              <Badge variant="secondary" className="bg-primary text-primary-foreground">
                {product.badge}
              </Badge>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`aspect-square relative overflow-hidden rounded-lg border-2 transition-colors ${
                  selectedImage === index ? "border-primary" : "border-border hover:border-primary/50"
                }`}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} view ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <Badge variant="outline" className="mb-2">
              {product.location}
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">{product.name}</h1>
            <p className="text-lg text-muted-foreground mb-4">{product.englishName}</p>

            <div className="flex items-center mb-4">
              <div className="flex items-center">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="text-lg font-medium ml-2">{product.rating}</span>
                <span className="text-muted-foreground ml-2">({product.reviews} 評價)</span>
              </div>
            </div>

            <div className="flex items-center space-x-4 mb-6">
              <span className="text-3xl font-bold text-primary">{product.price}</span>
              {product.originalPrice && (
                <span className="text-xl text-muted-foreground line-through">{product.originalPrice}</span>
              )}
              <Badge variant="destructive">節省 HK$70</Badge>
            </div>
          </div>

          <Separator />

          <div>
            <p className="text-muted-foreground leading-relaxed">{product.description}</p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-3">產品特色</h3>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <Separator />

          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <span className="font-medium">數量：</span>
              <div className="flex items-center border border-border rounded-lg">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="px-4 py-2 font-medium">{quantity}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setQuantity(Math.min(product.stockCount, quantity + 1))}
                  disabled={quantity >= product.stockCount}
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
              <span className="text-sm text-muted-foreground">剩餘 {product.stockCount} 件</span>
            </div>

            <div className="flex space-x-4">
              <Button size="lg" className="flex-1">
                <ShoppingCart className="w-5 h-5 mr-2" />
                加入購物車
              </Button>
              <Button variant="outline" size="lg">
                <Heart className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg">
                <Share2 className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <Separator />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center space-x-3">
              <Truck className="w-5 h-5 text-primary" />
              <div>
                <p className="font-medium text-sm">免費送貨</p>
                <p className="text-xs text-muted-foreground">滿 HK$300</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Shield className="w-5 h-5 text-primary" />
              <div>
                <p className="font-medium text-sm">品質保證</p>
                <p className="text-xs text-muted-foreground">手工製作</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <RotateCcw className="w-5 h-5 text-primary" />
              <div>
                <p className="font-medium text-sm">7天退換</p>
                <p className="text-xs text-muted-foreground">無條件退款</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

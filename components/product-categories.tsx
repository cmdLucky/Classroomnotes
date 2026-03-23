import { Card, CardContent } from "@/components/ui/card"
import { Palette, Utensils, Shirt, BookOpen, Home, Camera } from "lucide-react"

export function ProductCategories() {
  const categories = [
    {
      icon: Palette,
      name: "手工藝品",
      englishName: "Handicrafts",
      description: "傳統工藝與現代設計的完美結合",
      count: "12件商品",
      color: "text-orange-600",
    },
    {
      icon: Utensils,
      name: "在地美食",
      englishName: "Local Delicacies",
      description: "品嚐鄉郊獨特的風味與記憶",
      count: "8件商品",
      color: "text-green-600",
    },
    {
      icon: Shirt,
      name: "服飾配件",
      englishName: "Fashion & Accessories",
      description: "穿戴鄉郊文化的時尚表達",
      count: "15件商品",
      color: "text-blue-600",
    },
    {
      icon: BookOpen,
      name: "文化書籍",
      englishName: "Cultural Books",
      description: "深度了解鄉郊歷史與文化",
      count: "6件商品",
      color: "text-purple-600",
    },
    {
      icon: Home,
      name: "生活用品",
      englishName: "Lifestyle Products",
      description: "將鄉郊美學帶入日常生活",
      count: "20件商品",
      color: "text-amber-600",
    },
    {
      icon: Camera,
      name: "紀念品",
      englishName: "Souvenirs",
      description: "珍藏美好的鄉郊回憶",
      count: "10件商品",
      color: "text-rose-600",
    },
  ]

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">商品分類</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            探索不同類別的文創商品，每一類都有其獨特的文化故事
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-primary/20"
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-primary/10 transition-colors">
                    <category.icon className={`w-6 h-6 ${category.color} group-hover:text-primary transition-colors`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">{category.englishName}</p>
                    <p className="text-sm text-muted-foreground mb-3">{category.description}</p>
                    <p className="text-xs text-primary font-medium">{category.count}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

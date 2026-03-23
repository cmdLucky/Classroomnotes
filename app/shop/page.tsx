import { ShopHero } from "@/components/shop-hero"
import { ProductCategories } from "@/components/product-categories"
import { FeaturedProducts } from "@/components/featured-products"
import { ProductGrid } from "@/components/product-grid"

export default function ShopPage() {
  return (
    <main className="min-h-screen">
      <ShopHero />
      <ProductCategories />
      <FeaturedProducts />
      <ProductGrid />
    </main>
  )
}

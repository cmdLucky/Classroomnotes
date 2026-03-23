import { ProductDetail } from "@/components/product-detail"
import { RelatedProducts } from "@/components/related-products"

interface ProductPageProps {
  params: {
    id: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  return (
    <main className="min-h-screen pt-16">
      <ProductDetail productId={params.id} />
      <RelatedProducts />
    </main>
  )
}

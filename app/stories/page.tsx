import { Navigation } from "@/components/navigation"
import { StoriesHero } from "@/components/stories-hero"
import { StoriesFilter } from "@/components/stories-filter"
import { StoriesGrid } from "@/components/stories-grid"
import { FeaturedStory } from "@/components/featured-story"

export default function StoriesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <StoriesHero />
      <FeaturedStory />
      <StoriesFilter />
      <StoriesGrid />
    </main>
  )
}

import { HeroSection } from "@/components/hero-section"
import { ProjectIntro } from "@/components/project-intro"
import { FeaturedLocations } from "@/components/featured-locations"

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ProjectIntro />
      <FeaturedLocations />
    </main>
  )
}

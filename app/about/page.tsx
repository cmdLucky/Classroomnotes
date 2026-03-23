import { AboutHero } from "@/components/about-hero"
import { ProjectMission } from "@/components/project-mission"
import { TeamSection } from "@/components/team-section"
import { ProjectImpact } from "@/components/project-impact"
import { Partners } from "@/components/partners"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <ProjectMission />
      <TeamSection />
      <ProjectImpact />
      <Partners />
    </div>
  )
}

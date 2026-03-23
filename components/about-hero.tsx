import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function AboutHero() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-primary/5 to-accent-green/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            保育香港鄉郊文化遺產
            <span className="block text-2xl md:text-3xl text-muted-foreground mt-4">
              Preserving Hong Kong's Rural Cultural Heritage
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            中大與鄉郊基金攜手合作，致力保護和推廣香港珍貴的鄉村文化遺產，讓傳統智慧在現代社會中延續生命力。
          </p>
          <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-3xl mx-auto text-pretty">
            CUHK partners with the Countryside Foundation to protect and promote Hong Kong's precious rural cultural
            heritage, ensuring traditional wisdom continues to thrive in modern society.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            了解我們的使命 Learn Our Mission
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}

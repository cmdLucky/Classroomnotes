import { Mail, Phone, MapPin } from "lucide-react"

export function ContactHero() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-primary/5 to-accent-green/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            聯絡我們
            <span className="block text-2xl md:text-3xl text-muted-foreground mt-4">Contact Us</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            歡迎與我們聯繫，了解更多關於鄉村文化遺產保育項目的資訊，或參與我們的保育工作。
          </p>
          <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-3xl mx-auto text-pretty">
            We welcome you to contact us to learn more about our rural cultural heritage conservation project or to
            participate in our conservation efforts.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="h-5 w-5 text-primary" />
              <span>heritage@cuhk.edu.hk</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="h-5 w-5 text-primary" />
              <span>+852 3943 6000</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5 text-primary" />
              <span>沙田, 香港</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

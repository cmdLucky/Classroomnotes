import { ContactHero } from "@/components/contact-hero"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"
import { ContactMap } from "@/components/contact-map"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <ContactHero />
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
      <ContactMap />
    </div>
  )
}

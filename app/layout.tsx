import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Suspense } from "react"
import { Navigation } from "@/components/navigation"
import { PartnerFooter } from "@/components/partner-footer"
import { ScrollProgress } from "@/components/scroll-progress"
import { ScrollToTop } from "@/components/scroll-to-top"
import "./globals.css"
import { LanguageProvider } from "@/contexts/language-context"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "CUHK 鄉郊保育資助計劃 | Rural Conservation Funding Scheme",
  description: "挖掘在地之美，守護鄉郊文脈 - 探索梅子林、谷埔、吉澳三個香港鄉郊文化遺產地點",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-HK" className={inter.variable}>
      <body className="font-sans antialiased">
        <LanguageProvider>
          <ScrollToTop />
          <ScrollProgress />
          <Navigation />
          <div className="pt-16">
            <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
          </div>
          <PartnerFooter />
        </LanguageProvider>
      </body>
    </html>
  )
}

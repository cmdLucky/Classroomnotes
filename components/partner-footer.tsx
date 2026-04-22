"use client"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

export default function PartnerFooter() {
  const { t } = useLanguage()

  return (
    <footer className="relative bg-secondary text-secondary-foreground overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary to-accent rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-accent to-primary rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-muted to-primary rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-24">
        {/* Main Title */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">{t("合作夥伴", "Partners")}</h2>
          <p className="text-secondary-foreground/90 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            {t(
              "攜手保護香港鄉郊文化遺產，共建可持續發展的未來",
              "Working together to protect Hong Kong's rural cultural heritage and build a sustainable future",
            )}
          </p>
        </div>

        {/* Partner Logos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center justify-items-center mb-20">
          {/* CUHK Business School - LOOK FORWARD */}
          <div className="group bg-white/95 backdrop-blur-lg rounded-3xl p-8 w-full max-w-sm h-48 flex items-center justify-center hover:scale-105 hover:bg-white transition-all duration-500 shadow-xl hover:shadow-2xl border border-white/20">
            <Image
              src="/images/cuhk-bs-logo.jpeg"
              alt="CUHK Business School"
              width={240}
              height={140}
              className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* CUHK School of Hotel & Tourism Management */}
          <div className="group bg-white/95 backdrop-blur-lg rounded-3xl p-8 w-full max-w-sm h-48 flex items-center justify-center hover:scale-105 hover:bg-white transition-all duration-500 shadow-xl hover:shadow-2xl border border-white/20">
            <Image
              src="/images/cuhk-shtm-logo.png"
              alt="CUHK School of Hotel & Tourism Management"
              width={240}
              height={140}
              className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Countryside Conservation Office */}
          <div className="group bg-white/95 backdrop-blur-lg rounded-3xl p-8 w-full max-w-sm h-48 flex items-center justify-center hover:scale-105 hover:bg-white transition-all duration-500 shadow-xl hover:shadow-2xl border border-white/20">
            <Image
              src="/images/cco-logo.png"
              alt="Countryside Conservation Office"
              width={240}
              height={140}
              className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Countryside Conservation Funding Scheme */}
          <div className="group bg-white/95 backdrop-blur-lg rounded-3xl p-8 w-full max-w-sm h-48 flex items-center justify-center hover:scale-105 hover:bg-white transition-all duration-500 shadow-xl hover:shadow-2xl border border-white/20">
            <Image
              src="/images/ccfs-logo.png"
              alt="Countryside Conservation Funding Scheme"
              width={240}
              height={140}
              className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Social Media Section */}
        <div className="text-center mb-20">
          <h3 className="text-3xl font-bold mb-10 text-white">{t("關注我們", "Follow Us")}</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="#"
              className="group flex items-center space-x-4 bg-white/10 hover:bg-white/20 backdrop-blur-lg px-8 py-5 rounded-2xl transition-all duration-300 hover:scale-105 border border-white/20 hover:border-white/40 shadow-lg hover:shadow-xl"
              aria-label="抖音"
            >
              <svg
                className="w-7 h-7 group-hover:scale-110 transition-transform duration-300"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
              <span className="font-semibold text-lg">{t("抖音", "Douyin")}</span>
            </a>
            <a
              href="https://xhslink.com/m/A2rsOrBCZXv"
              className="group flex items-center space-x-4 bg-white/10 hover:bg-white/20 backdrop-blur-lg px-8 py-5 rounded-2xl transition-all duration-300 hover:scale-105 border border-white/20 hover:border-white/40 shadow-lg hover:shadow-xl"
              aria-label="小红书"
            >
              <svg
                className="w-7 h-7 group-hover:scale-110 transition-transform duration-300"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
              </svg>
              <span className="font-semibold text-lg">{t("小红书", "Xiaohongshu")}</span>
            </a>
            <a
              href="#"
              className="group flex items-center space-x-4 bg-white/10 hover:bg-white/20 backdrop-blur-lg px-8 py-5 rounded-2xl transition-all duration-300 hover:scale-105 border border-white/20 hover:border-white/40 shadow-lg hover:shadow-xl"
              aria-label="Facebook"
            >
              <svg
                className="w-7 h-7 group-hover:scale-110 transition-transform duration-300"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span className="font-semibold text-lg">Facebook</span>
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-16">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-secondary-foreground/90 text-xl font-semibold">
                {t("© 2025 鄉郊保育辦公室", "© 2025 Countryside Conservation Office")}
              </p>
              <p className="text-secondary-foreground/70 text-base mt-2">
                {t(
                  "版權所有 · 致力保護香港鄉郊文化遺產",
                  "All Rights Reserved · Dedicated to Protecting Hong Kong's Rural Cultural Heritage",
                )}
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              <a
                href="#"
                className="text-secondary-foreground/80 hover:text-white transition-colors text-lg font-medium hover:underline decoration-2 underline-offset-4"
              >
                {t("私隱政策", "Privacy Policy")}
              </a>
              <a
                href="#"
                className="text-secondary-foreground/80 hover:text-white transition-colors text-lg font-medium hover:underline decoration-2 underline-offset-4"
              >
                {t("使用條款", "Terms of Use")}
              </a>
              <a
                href="#"
                className="text-secondary-foreground/80 hover:text-white transition-colors text-lg font-medium hover:underline decoration-2 underline-offset-4"
              >
                {t("聯絡我們", "Contact Us")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

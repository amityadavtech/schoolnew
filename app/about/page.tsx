import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AboutHeroSection } from "@/components/sections/about-hero-section"
import { MissionVisionSection } from "@/components/sections/mission-vision-section"
import { HistorySection } from "@/components/sections/history-section"
import { PrincipalMessageSection } from "@/components/sections/principal-message-section"
import { AchievementsSection } from "@/components/sections/achievements-section"

export const metadata = {
  title: "About Us - Aira Bal Vidya Mandir Inter College",
  description:
    "Learn about Aira Bal Vidya Mandir Inter College's history, mission, vision, and commitment to educational excellence.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <AboutHeroSection />
        <MissionVisionSection />
        <HistorySection />
        <PrincipalMessageSection />
        <AchievementsSection />
      </main>
      <Footer />
    </div>
  )
}

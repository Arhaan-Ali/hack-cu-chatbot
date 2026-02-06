import AboutPage from "@/pages/AboutPage";
import FeaturePage from "@/pages/FeaturePage";
import HeroPage from "@/pages/HeroPage";
import PlansPage from "@/pages/PlansPage";

export default function Home() {
  return (
    <section className="min-h-screen border-x border-border">
      <HeroPage />
      <AboutPage />
      <FeaturePage />
      <PlansPage />
    </section>
  );
}
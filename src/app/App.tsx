import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { ScreenshotsSection } from "./components/ScreenshotsSection";
import { DownloadSection } from "./components/DownloadSection";
import { Footer } from "./components/Footer";
import { ScrollProgressBar } from "./components/ScrollProgressBar";

export default function App() {
  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", minHeight: "100vh", background: "#010837" }}>
      <ScrollProgressBar />
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <ScreenshotsSection />
      <DownloadSection />
      <Footer />
    </div>
  );
}
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import TopBanner from "../components/TopBanner";
import { MenuSection } from "../components/MenuSection";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

const Restaurant = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <TopBanner />
      <Hero />
      <MenuSection />
      <Contact />
      <Footer />
    </div>
  );
};

export default Restaurant;
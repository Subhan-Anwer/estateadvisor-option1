import Header from "../../components/Header";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Areas from "../../components/Areas";
import FeaturedProperties from "../../components/FeaturedProperties";
import Testimonials from "../../components/Testimonials";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import WhatsAppButton from "../../components/WhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <About />
      <Areas />
      <FeaturedProperties />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

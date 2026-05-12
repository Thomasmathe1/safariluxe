import { Navbar } from "@/components/Navbar";
import { EmergencyBanner } from "@/components/EmergencyBanner";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { ServiceAreas } from "@/components/ServiceAreas";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import "./index.css";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <EmergencyBanner />
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <About />
      <Testimonials />
      <ServiceAreas />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

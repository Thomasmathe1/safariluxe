import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Destinations } from "@/components/Destinations";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <Destinations />
      <About />
      <Experience />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}

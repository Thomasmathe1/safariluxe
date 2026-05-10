import { useEffect, useState } from "react";
import { useParams, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { destinations } from "@/data/destinations";
import { FaWhatsapp, FaArrowLeft, FaCheck, FaTimes } from "react-icons/fa";

export default function DestinationPage() {
  const params = useParams<{ slug: string }>();
  const [, setLocation] = useLocation();
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const dest = destinations.find(d => d.id === params.slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (lightboxImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [lightboxImage]);

  if (!dest) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
        <h1 className="text-4xl font-serif text-primary">404 - Destination Not Found</h1>
        <button onClick={() => setLocation('/')} className="mt-4 text-primary underline">Go Home</button>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${dest.heroImage || '/sa-new.jpg'})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-black/40" />
        
        <button 
          onClick={() => setLocation('/')}
          className="absolute top-32 left-6 md:left-12 z-40 flex items-center gap-2 text-white/80 hover:text-white transition-colors uppercase tracking-widest text-sm"
        >
          <FaArrowLeft /> Back to Discoveries
        </button>

        <div className="relative z-30 text-center px-6 max-w-4xl mx-auto mt-20">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="text-5xl mb-6 block drop-shadow-lg">{dest.flag}</span>
            <h1 className="text-6xl md:text-8xl font-serif text-white mb-6 drop-shadow-xl">
              {dest.name}
            </h1>
            <p className="text-xl md:text-2xl italic text-[#f5f5dc] drop-shadow-md font-serif">
              "{dest.tagline}"
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce text-white/50">
          <span className="text-xs tracking-widest uppercase mb-2">Explore</span>
          <div className="w-[1px] h-12 bg-white/50" />
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="py-24 md:py-32 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <div className="w-12 h-[2px] bg-primary mb-8" />
            <h2 className="text-4xl md:text-5xl font-serif mb-8 text-foreground">About {dest.name}</h2>
            <p className="text-foreground/80 leading-relaxed font-light text-lg mb-10">
              {dest.overview}
            </p>
            <div className="flex flex-wrap gap-3">
              {dest.bestTimeToVisit.weatherHighlights.slice(0, 3).map((h, i) => (
                <span key={i} className="px-4 py-2 border border-primary/50 text-primary text-sm rounded-full bg-primary/5">
                  {h}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-card border-t-2 border-primary p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute -right-10 -top-10 text-[10rem] opacity-5 text-primary pointer-events-none font-serif">
              &
            </div>
            <h3 className="text-sm uppercase tracking-widest text-foreground/60 mb-2">Best Time to Visit</h3>
            <p className="text-3xl text-primary font-serif mb-6">{dest.bestTimeToVisit.months}</p>
            <p className="text-foreground/80 font-light mb-8 italic border-l-2 border-primary/30 pl-4 py-1">
              {dest.bestTimeToVisit.reason}
            </p>
            <ul className="space-y-4">
              {dest.bestTimeToVisit.weatherHighlights.map((h, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground/90 font-light">
                  <FaCheck className="text-primary text-xs" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* LANDMARKS SECTION */}
      <section className="py-24 bg-secondary/30 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="w-12 h-[2px] bg-primary mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-serif text-foreground">Iconic Landmarks & Experiences</h2>
          </div>

          <div className="space-y-24">
            {dest.landmarks.map((landmark, i) => (
              <motion.div 
                key={landmark.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={`${i % 2 !== 0 ? 'md:order-2' : ''}`}>
                  <div className="relative aspect-video rounded-sm overflow-hidden group">
                    <img 
                      src={landmark.image || '/experience-new.jpg'} 
                      alt={landmark.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
                <div className={`${i % 2 !== 0 ? 'md:order-1' : ''}`}>
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs uppercase tracking-widest mb-4 rounded-sm border border-primary/20">
                    {landmark.category}
                  </span>
                  <h3 className="text-3xl font-serif text-foreground mb-6">{landmark.name}</h3>
                  <p className="text-foreground/70 font-light leading-relaxed mb-8">
                    {landmark.description}
                  </p>
                  <div className="space-y-3">
                    {landmark.facts.map((fact, fi) => (
                      <div key={fi} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-sm text-foreground/80 font-light">{fact}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGE GALLERY */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-6 mb-12">
          <h2 className="text-2xl font-serif text-foreground border-b border-primary/20 pb-4 inline-block">Gallery</h2>
        </div>
        <div className="flex overflow-x-auto gap-6 px-6 pb-8 snap-x scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
          {dest.landmarks.map((l, i) => (
            <div 
              key={i} 
              className="flex-shrink-0 w-72 h-48 rounded-sm overflow-hidden cursor-pointer snap-center relative group"
              onClick={() => setLightboxImage(l.image || '/experience-new.jpg')}
            >
              <img src={l.image || '/experience-new.jpg'} alt={l.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white border border-white/50 px-4 py-2 uppercase text-xs tracking-widest backdrop-blur-sm">View</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {lightboxImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4 md:p-12"
          >
            <button 
              onClick={() => setLightboxImage(null)}
              className="absolute top-6 right-6 text-white hover:text-primary transition-colors text-2xl z-50 p-2"
            >
              <FaTimes />
            </button>
            <img src={lightboxImage} alt="Gallery view" className="max-w-full max-h-[90vh] object-contain rounded-sm" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* LUXURY PACKAGES */}
      <section className="py-24 bg-card border-y border-primary/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="w-12 h-[2px] bg-primary mx-auto mb-6" />
            <h2 className="text-4xl font-serif text-foreground">Curated Luxury Packages</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {dest.luxuryPackages.map((pkg) => (
              <motion.div 
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-background border-t-2 border-primary p-8 md:p-10 shadow-xl flex flex-col h-full"
              >
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs uppercase tracking-widest mb-6 rounded-sm self-start">
                  {pkg.duration}
                </div>
                <h3 className="text-2xl font-serif text-foreground mb-4">{pkg.name}</h3>
                <div className="text-sm text-primary uppercase tracking-[0.2em] font-medium mb-8">Pricing Available Upon Request</div>
                
                <p className="text-foreground/80 italic font-light text-sm mb-8 pb-8 border-b border-border">
                  "{pkg.highlight}"
                </p>

                <ul className="space-y-4 mb-10 flex-grow">
                  {pkg.includes.map((inc, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-foreground/80 font-light">
                      <FaCheck className="text-primary mt-1 flex-shrink-0" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => window.open('https://wa.me/27115550199')}
                  className="w-full py-4 border border-primary/50 bg-primary/5 hover:bg-primary hover:text-primary-foreground transition-colors uppercase tracking-widest text-xs text-primary mt-auto"
                >
                  Enquire Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ITINERARY */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-20">
            <div className="w-12 h-[2px] bg-primary mx-auto mb-6" />
            <h2 className="text-4xl font-serif text-foreground">Sample Itinerary</h2>
          </div>

          <div className="relative border-l border-primary/20 ml-6 md:ml-10 space-y-16">
            {dest.itinerary.map((day, i) => (
              <motion.div 
                key={day.day}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-10 md:pl-16"
              >
                <div className="absolute -left-[24px] top-0 w-12 h-12 rounded-full bg-card border-2 border-primary flex items-center justify-center text-primary font-serif font-bold text-lg">
                  {day.day}
                </div>
                <h3 className="text-xl font-serif text-foreground mb-3">{day.title}</h3>
                <p className="text-foreground/70 font-light mb-4">{day.description}</p>
                <div className="inline-block px-4 py-2 bg-secondary text-sm text-foreground/80 border border-border">
                  <span className="text-primary mr-2">Stay:</span> {day.accommodation}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MAP EMBED */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <div className="w-12 h-[2px] bg-primary mx-auto mb-6" />
            <h2 className="text-4xl font-serif text-foreground">Location</h2>
          </div>
          <div className="max-w-5xl mx-auto border border-primary/20 p-2 bg-card rounded-sm shadow-xl">
            <iframe 
              src={dest.mapEmbedUrl} 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale contrast-125 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
            ></iframe>
          </div>
          <p className="text-center mt-4 text-foreground/50 text-sm font-light">Interactive map — click to explore.</p>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-32 bg-card relative overflow-hidden border-t border-primary/10">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary via-background to-background"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-10">Ready to Experience {dest.name}?</h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <button className="px-10 py-5 bg-primary text-primary-foreground uppercase tracking-widest text-sm font-medium hover:bg-primary/90 transition-colors w-full sm:w-auto">
              Book This Journey
            </button>
            <a 
              href="https://wa.me/27115550199"
              target="_blank"
              rel="noreferrer"
              className="px-10 py-5 border border-primary text-primary uppercase tracking-widest text-sm font-medium hover:bg-primary/5 transition-colors flex items-center justify-center gap-3 w-full sm:w-auto backdrop-blur-sm"
            >
              <FaWhatsapp size={20} /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}

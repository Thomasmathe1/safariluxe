import { useEffect, useState, useRef } from "react";
import { useParams, useLocation } from "wouter";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { destinations } from "@/data/destinations";
import { FaWhatsapp, FaArrowLeft, FaCheck, FaTimes, FaCompass, FaLeaf, FaStar, FaCamera } from "react-icons/fa";

export default function DestinationPage() {
  const params = useParams<{ slug: string }>();
  const [, setLocation] = useLocation();
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  const dest = destinations.find((d) => d.id === params.slug);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroBgY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const heroBgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.18]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.7], ["0%", "-8%"]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    document.body.style.overflow = lightboxImage ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [lightboxImage]);

  const openLightbox = (img: string, idx: number) => {
    setLightboxImage(img);
    setLightboxIndex(idx);
  };

  const closeLightbox = () => setLightboxImage(null);

  const navigateLightbox = (dir: 1 | -1) => {
    if (!dest) return;
    const newIdx = (lightboxIndex + dir + dest.landmarks.length) % dest.landmarks.length;
    setLightboxIndex(newIdx);
    setLightboxImage(dest.landmarks[newIdx].image || "/experience-new.jpg");
  };

  if (!dest) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground gap-4">
        <h1 className="text-4xl font-serif text-primary">Destination Not Found</h1>
        <button
          onClick={() => setLocation("/")}
          className="text-primary/70 hover:text-primary transition-colors underline text-sm"
        >
          Return Home
        </button>
      </div>
    );
  }

  const experienceIcons = [
    { icon: <FaCompass />, label: "Private Guides" },
    { icon: <FaLeaf />, label: "Eco Luxury" },
    { icon: <FaStar />, label: "5-Star Lodges" },
    { icon: <FaCamera />, label: "Photo Safaris" },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* ── CINEMATIC HERO ── */}
      <section ref={heroRef} className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{ y: heroBgY, scale: heroBgScale }}
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${dest.heroImage || "/sa-new.jpg"})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-black/45" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-black/25" />
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse 90% 90% at 50% 50%, transparent 28%, rgba(0,0,0,0.62) 100%)" }}
          />
        </motion.div>

        <motion.button
          onClick={() => setLocation("/")}
          className="absolute top-28 md:top-32 left-6 md:left-12 z-40 flex items-center gap-2 text-white/70 hover:text-primary transition-all duration-300 uppercase tracking-[0.15em] text-xs group"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <span className="group-hover:-translate-x-1 transition-transform duration-300">
            <FaArrowLeft />
          </span>
          Back to Discoveries
        </motion.button>

        <motion.div
          className="relative z-30 text-center px-6 max-w-4xl mx-auto mt-16"
          style={{ opacity: heroOpacity, y: heroY }}
        >
          <motion.span
            className="text-5xl md:text-6xl mb-6 block drop-shadow-xl"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {dest.flag}
          </motion.span>
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight"
            style={{ textShadow: "0 4px 30px rgba(0,0,0,0.6)" }}
            initial={{ y: 55, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {dest.name}
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl italic text-amber-100/85 font-serif leading-relaxed max-w-2xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.45 }}
          >
            "{dest.tagline}"
          </motion.p>

          <motion.div
            className="mt-10 flex justify-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {experienceIcons.map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div
                  className="w-10 h-10 flex items-center justify-center rounded-full text-primary"
                  style={{
                    background: "hsl(0 0% 0% / 0.45)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid hsl(46 65% 52% / 0.3)",
                  }}
                >
                  {item.icon}
                </div>
                <span className="text-[9px] uppercase tracking-[0.2em] text-white/50 hidden md:block">
                  {item.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-30"
          style={{ opacity: heroOpacity }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span className="text-white/40 uppercase tracking-[0.3em] text-[9px] mb-3">Explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-[1px] h-10 bg-gradient-to-b from-primary/50 to-transparent"
          />
        </motion.div>
      </section>

      {/* ── OVERVIEW ── */}
      <section className="py-24 md:py-32 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="w-12 h-[2px] bg-primary mb-8" />
            <h2 className="text-4xl md:text-5xl font-serif mb-8 text-foreground leading-tight">
              About {dest.name}
            </h2>
            <p className="text-foreground/78 leading-relaxed font-light text-lg mb-10">
              {dest.overview}
            </p>
            <div className="flex flex-wrap gap-3">
              {dest.bestTimeToVisit.weatherHighlights.slice(0, 3).map((h, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="px-4 py-2 border border-primary/45 text-primary text-sm rounded-full bg-primary/5 hover:bg-primary/10 transition-colors"
                >
                  {h}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="bg-card border-t-2 border-primary p-10 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute -right-8 -top-8 text-[9rem] opacity-5 text-primary pointer-events-none font-serif select-none">
              &
            </div>
            <h3 className="text-sm uppercase tracking-widest text-foreground/55 mb-2">Best Time to Visit</h3>
            <p className="text-3xl text-primary font-serif mb-5">{dest.bestTimeToVisit.months}</p>
            <p className="text-foreground/75 font-light mb-8 italic border-l-2 border-primary/30 pl-4 py-1 text-sm leading-relaxed">
              {dest.bestTimeToVisit.reason}
            </p>
            <ul className="space-y-4">
              {dest.bestTimeToVisit.weatherHighlights.map((h, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground/85 font-light text-sm">
                  <FaCheck className="text-primary text-xs flex-shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ── LANDMARKS ── */}
      <section className="py-24 relative overflow-hidden" style={{ background: "hsl(158 32% 8%)" }}>
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 60% 80% at 50% 50%, hsl(158 42% 15% / 0.6) 0%, transparent 70%)",
          }}
        />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-12 h-[2px] bg-primary mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-serif text-foreground">
              Iconic Landmarks & Experiences
            </h2>
            <p className="text-foreground/50 mt-4 font-light max-w-xl mx-auto text-sm">
              Curated encounters with the places that define {dest.name}'s extraordinary character.
            </p>
          </motion.div>

          <div className="space-y-20 md:space-y-28">
            {dest.landmarks.map((landmark, i) => (
              <motion.div
                key={landmark.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className={`grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center`}
              >
                <div className={i % 2 !== 0 ? "md:order-2" : ""}>
                  <div
                    className="relative overflow-hidden group cursor-pointer"
                    style={{ aspectRatio: "16/10" }}
                    onClick={() => openLightbox(landmark.image || "/experience-new.jpg", i)}
                  >
                    <motion.img
                      src={landmark.image || "/experience-new.jpg"}
                      alt={landmark.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.06 }}
                      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    />
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      style={{ background: "hsl(0 0% 0% / 0.35)" }}
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div
                        className="flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-[0.2em] text-white"
                        style={{
                          border: "1px solid hsl(46 65% 52% / 0.7)",
                          backdropFilter: "blur(8px)",
                        }}
                      >
                        <FaCamera className="text-primary" /> View Photo
                      </div>
                    </motion.div>
                    <div
                      className="absolute top-4 left-4 px-3 py-1 text-xs uppercase tracking-widest text-primary"
                      style={{
                        background: "hsl(0 0% 0% / 0.6)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid hsl(46 65% 52% / 0.25)",
                      }}
                    >
                      {landmark.category}
                    </div>
                  </div>
                </div>

                <div className={i % 2 !== 0 ? "md:order-1" : ""}>
                  <div className="w-8 h-[1px] bg-primary mb-6" />
                  <h3 className="text-3xl md:text-4xl font-serif text-foreground mb-5 leading-tight">
                    {landmark.name}
                  </h3>
                  <p className="text-foreground/70 font-light leading-relaxed mb-8 text-base">
                    {landmark.description}
                  </p>
                  <div className="space-y-3">
                    {landmark.facts.map((fact, fi) => (
                      <motion.div
                        key={fi}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: fi * 0.08, duration: 0.5 }}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-sm text-foreground/78 font-light leading-relaxed">{fact}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ANIMATED GALLERY GRID ── */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="w-12 h-[2px] bg-primary mb-6" />
            <h2 className="text-3xl md:text-4xl font-serif text-foreground">Photo Gallery</h2>
            <p className="text-foreground/50 font-light mt-3 text-sm">
              Click any image to explore in full view.
            </p>
          </motion.div>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {dest.landmarks.map((l, i) => (
              <motion.div
                key={i}
                className={`relative overflow-hidden cursor-pointer group ${
                  i === 0 ? "col-span-2 row-span-2" : ""
                }`}
                style={{ aspectRatio: i === 0 ? "1/1" : "4/3" }}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => openLightbox(l.image || "/experience-new.jpg", i)}
                whileHover={{ zIndex: 10 }}
              >
                <motion.img
                  src={l.image || "/experience-new.jpg"}
                  alt={l.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                />
                <motion.div
                  className="absolute inset-0 flex flex-col items-center justify-end p-4"
                  style={{ background: "linear-gradient(to top, hsl(0 0% 0% / 0.8) 0%, transparent 60%)" }}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-white text-xs uppercase tracking-[0.15em] font-medium text-center">
                    {l.name}
                  </p>
                </motion.div>

                <motion.div
                  className="absolute inset-0 border border-primary/50 pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LIGHTBOX ── */}
      <AnimatePresence>
        {lightboxImage && dest && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/96 z-[100] flex items-center justify-center p-4 md:p-16"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/60 hover:text-primary transition-colors text-xl z-50 p-3 hover:bg-white/5 rounded-full"
            >
              <FaTimes />
            </button>

            <button
              className="absolute left-4 md:left-8 text-white/50 hover:text-primary transition-colors p-4 text-2xl hover:bg-white/5 rounded-full"
              onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
            >
              ←
            </button>
            <button
              className="absolute right-4 md:right-8 text-white/50 hover:text-primary transition-colors p-4 text-2xl hover:bg-white/5 rounded-full"
              onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
            >
              →
            </button>

            <motion.img
              key={lightboxImage}
              src={lightboxImage}
              alt="Gallery"
              className="max-w-full max-h-[85vh] object-contain shadow-2xl"
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            />

            <p className="absolute bottom-6 text-xs tracking-[0.2em] uppercase text-white/35">
              {lightboxIndex + 1} / {dest.landmarks.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── LUXURY QUOTE BAND ── */}
      <section className="py-20 relative overflow-hidden" style={{ background: "hsl(158 42% 8%)" }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${dest.heroImage || "/sa-new.jpg"})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.08,
          }}
        />
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <div
              className="w-16 h-[1px] mx-auto mb-8"
              style={{ background: "linear-gradient(90deg, transparent, hsl(46 65% 52%), transparent)" }}
            />
            <p className="text-2xl md:text-3xl font-serif italic text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              "Africa changes you forever, like nowhere on earth. Once you have been there, you will never be the same."
            </p>
            <p className="mt-6 text-xs uppercase tracking-[0.3em] text-primary/60">— Brian Jackman</p>
            <div
              className="w-16 h-[1px] mx-auto mt-8"
              style={{ background: "linear-gradient(90deg, transparent, hsl(46 65% 52%), transparent)" }}
            />
          </motion.div>
        </div>
      </section>

      {/* ── LUXURY PACKAGES ── */}
      <section className="py-24 bg-card border-y border-primary/10">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-[2px] bg-primary mx-auto mb-6" />
            <h2 className="text-4xl font-serif text-foreground">Curated Luxury Packages</h2>
            <p className="text-foreground/50 font-light mt-4 text-sm max-w-xl mx-auto">
              Every journey is bespoke — crafted exclusively around your vision and desires.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {dest.luxuryPackages.map((pkg, pi) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: pi * 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative bg-background border-t-2 border-primary p-8 md:p-10 shadow-xl flex flex-col h-full group hover:shadow-primary/10 transition-shadow duration-500"
                style={{ boxShadow: "0 8px 40px hsl(0 0% 0% / 0.45)" }}
                whileHover={{ y: -4, boxShadow: "0 0 0 1px hsl(46 65% 52% / 0.3), 0 16px 48px hsl(0 0% 0% / 0.5)" }}
                transition={{ duration: 0.35 }}
              >
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-[10px] uppercase tracking-widest mb-6 rounded-sm self-start border border-primary/20">
                  {pkg.duration}
                </div>
                <h3 className="text-2xl font-serif text-foreground mb-4 leading-tight">{pkg.name}</h3>
                <div className="text-[10px] text-primary uppercase tracking-[0.25em] font-semibold mb-8">
                  Pricing Available Upon Request
                </div>

                <p className="text-foreground/72 italic font-light text-sm mb-8 pb-8 border-b border-border leading-relaxed">
                  "{pkg.highlight}"
                </p>

                <ul className="space-y-3.5 mb-10 flex-grow">
                  {pkg.includes.map((inc, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-foreground/78 font-light">
                      <FaCheck className="text-primary mt-0.5 flex-shrink-0 text-xs" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  onClick={() => window.open("https://wa.me/27115550199")}
                  className="w-full py-4 border border-primary/45 bg-primary/5 uppercase tracking-[0.2em] text-xs text-primary mt-auto transition-all duration-300"
                  whileHover={{ backgroundColor: "hsl(46 65% 52%)", color: "hsl(0 0% 7%)", borderColor: "hsl(46 65% 52%)" }}
                >
                  Enquire Now
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ITINERARY TIMELINE ── */}
      <section className="py-24 bg-background relative">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-[2px] bg-primary mx-auto mb-6" />
            <h2 className="text-4xl font-serif text-foreground">Sample Itinerary</h2>
            <p className="text-foreground/50 font-light mt-4 text-sm">
              A curated preview — every journey is tailored to your preferences.
            </p>
          </motion.div>

          <div className="relative">
            <div
              className="absolute left-6 md:left-10 top-0 bottom-0 w-[1px]"
              style={{ background: "linear-gradient(to bottom, hsl(46 65% 52% / 0.5), hsl(46 65% 52% / 0.1))" }}
            />

            <div className="space-y-12">
              {dest.itinerary.map((day, i) => (
                <motion.div
                  key={day.day}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="relative pl-20 md:pl-28 group"
                >
                  <motion.div
                    className="absolute left-0 md:left-4 top-0 w-12 h-12 rounded-full flex items-center justify-center font-serif font-bold text-lg border-2 border-primary"
                    style={{ background: "hsl(158 42% 10%)", color: "hsl(46 65% 52%)" }}
                    whileHover={{ scale: 1.1, borderColor: "hsl(46 65% 62%)" }}
                    transition={{ duration: 0.2 }}
                  >
                    {day.day}
                  </motion.div>

                  <div
                    className="p-6 md:p-8 transition-all duration-400 group-hover:border-primary/25"
                    style={{
                      background: "hsl(158 42% 10% / 0.35)",
                      border: "1px solid hsl(158 22% 16%)",
                    }}
                  >
                    <h3 className="text-lg font-serif text-foreground mb-2 leading-snug">{day.title}</h3>
                    <p className="text-foreground/65 font-light mb-4 text-sm leading-relaxed">{day.description}</p>
                    <div
                      className="inline-flex items-center gap-2 px-4 py-2 text-xs text-foreground/72"
                      style={{ background: "hsl(158 32% 13%)", border: "1px solid hsl(158 22% 18%)" }}
                    >
                      <span className="text-primary text-[10px] uppercase tracking-[0.15em]">Stay</span>
                      {day.accommodation}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MAP ── */}
      <section className="py-24" style={{ background: "hsl(158 32% 8%)" }}>
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-[2px] bg-primary mx-auto mb-6" />
            <h2 className="text-4xl font-serif text-foreground">Location</h2>
          </motion.div>
          <motion.div
            className="max-w-5xl mx-auto p-2 shadow-2xl"
            style={{ background: "hsl(158 42% 10%)", border: "1px solid hsl(46 65% 52% / 0.18)" }}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <iframe
              src={dest.mapEmbedUrl}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale contrast-125 opacity-85 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
            />
          </motion.div>
          <p className="text-center mt-4 text-foreground/40 text-xs font-light tracking-[0.15em] uppercase">
            Interactive map — click to explore
          </p>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-32 bg-card relative overflow-hidden border-t border-primary/10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${dest.heroImage || "/sa-new.jpg"})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.07,
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 70% 80% at 50% 50%, hsl(46 65% 52% / 0.06) 0%, transparent 70%)" }}
        />
        <motion.div
          className="container mx-auto px-6 text-center relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <div className="w-12 h-[2px] bg-primary mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-5 leading-tight">
            Ready to Experience {dest.name}?
          </h2>
          <p className="text-foreground/55 font-light mb-12 max-w-md mx-auto">
            Let us design your perfect journey — tailored to every detail.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
            <motion.button
              className="btn-gold w-full sm:w-auto"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Plan My Journey
            </motion.button>
            <motion.a
              href="https://wa.me/27115550199"
              target="_blank"
              rel="noreferrer"
              className="btn-glass w-full sm:w-auto flex items-center justify-center gap-3"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaWhatsapp size={18} /> WhatsApp Us
            </motion.a>
          </div>
        </motion.div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}

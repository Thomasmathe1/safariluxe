import { useEffect, useState, useRef } from "react";
import { useParams, useLocation } from "wouter";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { useTranslation } from "react-i18next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { destinations } from "@/data/destinations";
import {
  FaWhatsapp,
  FaArrowLeft,
  FaCheck,
  FaTimes,
  FaCompass,
  FaLeaf,
  FaStar,
  FaCamera,
} from "react-icons/fa";

export default function DestinationPage() {
  const params = useParams<{ slug: string }>();
  const [, setLocation] = useLocation();
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  const { i18n } = useTranslation();
  const isFrench = i18n.language === "fr";

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
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [lightboxImage]);

  const openLightbox = (img: string, idx: number) => {
    setLightboxImage(img);
    setLightboxIndex(idx);
  };

  const closeLightbox = () => setLightboxImage(null);

  const navigateLightbox = (dir: 1 | -1) => {
    if (!dest) return;

    const newIdx =
      (lightboxIndex + dir + dest.landmarks.length) % dest.landmarks.length;

    setLightboxIndex(newIdx);
    setLightboxImage(dest.landmarks[newIdx].image || "/experience-new.jpg");
  };

  if (!dest) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground gap-4">
        <h1 className="text-4xl font-serif text-primary">
          {isFrench ? "Destination introuvable" : "Destination Not Found"}
        </h1>

        <button
          onClick={() => setLocation("/")}
          className="text-primary/70 hover:text-primary transition-colors underline text-sm"
        >
          {isFrench ? "Retour à l'accueil" : "Return Home"}
        </button>
      </div>
    );
  }

  const experienceIcons = [
    {
      icon: <FaCompass />,
      label: isFrench ? "Guides privés" : "Private Guides",
    },
    {
      icon: <FaLeaf />,
      label: isFrench ? "Éco luxe" : "Eco Luxury",
    },
    {
      icon: <FaStar />,
      label: isFrench ? "Lodges 5 étoiles" : "5-Star Lodges",
    },
    {
      icon: <FaCamera />,
      label: isFrench ? "Safaris photo" : "Photo Safaris",
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <section
        ref={heroRef}
        className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{ y: heroBgY, scale: heroBgScale }}
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${dest.heroImage || "/sa-new.jpg"})`,
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-black/45" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-black/25" />

          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 90% 90% at 50% 50%, transparent 28%, rgba(0,0,0,0.62) 100%)",
            }}
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

          {isFrench ? "Retour aux découvertes" : "Back to Discoveries"}
        </motion.button>

        <motion.div
          className="relative z-30 text-center px-6 max-w-4xl mx-auto mt-16"
          style={{ opacity: heroOpacity, y: heroY }}
        >
          <motion.span
            className="text-5xl md:text-6xl mb-6 block drop-shadow-xl"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {dest.flag}
          </motion.span>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight"
            style={{ textShadow: "0 4px 30px rgba(0,0,0,0.6)" }}
            initial={{ y: 55, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1.1,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
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
            className="mt-8 md:mt-10 hidden sm:flex justify-center gap-6 md:gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {experienceIcons.map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div
                  className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full text-primary"
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
        >
          <span className="text-white/40 uppercase tracking-[0.3em] text-[9px] mb-3">
            {isFrench ? "Explorer" : "Explore"}
          </span>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
            }}
            className="w-[1px] h-10 bg-gradient-to-b from-primary/50 to-transparent"
          />
        </motion.div>
      </section>

      <section className="py-24 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif text-primary mb-12 text-center">
            {isFrench ? "Points Forts" : "Highlights"}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {dest.landmarks.map((landmark, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group overflow-hidden rounded-2xl bg-card border border-primary/10"
              >
                <div
                  className="h-72 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${landmark.image || "/experience-new.jpg"})`,
                  }}
                />

                <div className="p-6">
                  <h3 className="text-2xl font-serif text-primary mb-3">
                    {isFrench
                      ? idx === 0
                        ? "Safari de Luxe"
                        : idx === 1
                          ? "Expérience Exclusive"
                          : "Beauté Naturelle"
                      : landmark.name}
                  </h3>

                  <p className="text-foreground/70 leading-relaxed">
                    {isFrench
                      ? idx === 0
                        ? "Découvrez la faune africaine avec des guides privés et des lodges luxueux."
                        : idx === 1
                          ? "Profitez d'expériences personnalisées conçues pour les voyageurs premium."
                          : "Admirez des paysages à couper le souffle et des réserves naturelles magnifiques."
                      : landmark.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}

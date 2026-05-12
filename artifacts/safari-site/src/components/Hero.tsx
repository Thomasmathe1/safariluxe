import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslation } from "react-i18next";

const PARTICLES = Array.from({ length: 16 }, (_, i) => ({
  id: i,
  x: (i * 37.1 + 5) % 100,
  y: (i * 53.3 + 11) % 100,
  size: 1.1 + (i % 3) * 0.9,
  duration: 14 + (i % 7) * 2.5,
  delay: (i * 0.85) % 10,
  opacity: 0.09 + (i % 5) * 0.06,
  dx: ((i % 9) - 4) * 12,
}));

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [videoFailed, setVideoFailed] = useState(false);

  const { i18n } = useTranslation();

  const isFrench = i18n.language === "fr";

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.55], ["0%", "-10%"]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ y: bgY, scale: bgScale }}
      >
        {!videoFailed ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/hero-new.jpg"
            className="w-full h-full object-cover"
            onError={() => setVideoFailed(true)}
          >
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-african-savanna-landscape-at-sunrise-40282-large.mp4"
              type="video/mp4"
            />
          </video>
        ) : (
          <motion.img
            src="/hero-new.jpg"
            alt="African Safari"
            className="w-full h-full object-cover"
            animate={{ scale: [1.08, 1.02] }}
            transition={{ duration: 10, ease: "easeOut" }}
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-b from-black/72 via-black/22 to-black/90" />
      </motion.div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden z-[5]">
        {PARTICLES.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              background: "hsl(46 65% 62%)",
            }}
            animate={{
              y: [-8, -75],
              x: [0, p.dx],
              opacity: [0, p.opacity, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.div
        className="relative z-10 container mx-auto px-6 text-center flex flex-col items-center"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-primary uppercase tracking-[0.2em] md:tracking-[0.45em] text-[10px] md:text-sm mb-5 md:mb-7 font-medium"
        >
          {isFrench
            ? "VOYAGES AFRICAINS EXTRAORDINAIRES"
            : "EXTRAORDINARY AFRICAN JOURNEYS"}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 0.6, ease: "easeInOut" }}
          className="text-[2.6rem] sm:text-5xl md:text-7xl lg:text-8xl font-serif text-foreground leading-[1.12] mb-6 md:mb-8"
        >
          {isFrench ? (
            <>
              Découvrez l'Afrique <br className="hidden md:block" />
              <span className="italic text-primary">
                Avec Élégance et Naturellement
              </span>
            </>
          ) : (
            <>
              Discover Africa <br className="hidden md:block" />
              <span className="italic text-primary">In Style, Naturally</span>
            </>
          )}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="text-foreground/72 max-w-sm md:max-w-xl text-base md:text-xl font-light mb-10 md:mb-14 leading-relaxed px-2 md:px-0"
        >
          {isFrench
            ? "Des voyages de luxe sur mesure au cœur de l'Afrique sauvage."
            : "Bespoke wilderness journeys crafted for the discerning few. Pure Africa, uncompromised luxury."}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.15 }}
          className="flex flex-col sm:flex-row gap-4 w-full max-w-xs sm:max-w-none sm:w-auto"
        >
          <a
            href="#destinations"
            className="btn-gold"
            data-testid="hero-explore-btn"
          >
            {isFrench ? "Explorer les Destinations" : "Explore Destinations"}
          </a>

          <a href="#contact" className="btn-glass" data-testid="hero-book-btn">
            {isFrench ? "Réserver Votre Safari" : "Book Your Safari"}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

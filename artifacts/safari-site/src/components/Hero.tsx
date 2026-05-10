import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const PARTICLES = Array.from({ length: 28 }, (_, i) => ({
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
            <source
              src="https://assets.mixkit.co/videos/4870/4870-720.mp4"
              type="video/mp4"
            />
          </video>
        ) : (
          <motion.img
            src="/hero-new.jpg"
            alt="African Safari at sunset"
            className="w-full h-full object-cover"
            animate={{ scale: [1.08, 1.02] }}
            transition={{ duration: 10, ease: "easeOut" }}
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-b from-black/72 via-black/22 to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-black/35" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 90% 90% at 50% 50%, transparent 30%, rgba(0,0,0,0.65) 100%)",
          }}
        />
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
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="w-16 h-[1px] mb-8"
          style={{ background: "linear-gradient(90deg, transparent, hsl(46 65% 52%), transparent)" }}
        />

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-primary uppercase tracking-[0.45em] text-xs md:text-sm mb-7 font-medium"
          style={{ textShadow: "0 0 40px hsl(46 65% 52% / 0.45)" }}
        >
          EXTRAORDINARY AFRICAN JOURNEYS
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-foreground leading-tight mb-8"
          style={{ textShadow: "0 4px 30px hsl(0 0% 0% / 0.55)" }}
        >
          Discover Africa{" "}
          <br className="hidden md:block" />
          <span className="italic text-primary">In Style, Naturally</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="text-foreground/72 max-w-xl text-lg md:text-xl font-light mb-14 leading-relaxed"
        >
          Bespoke wilderness journeys crafted for the discerning few. Pure Africa, uncompromised luxury.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.15 }}
          className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto"
        >
          <a
            href="#destinations"
            className="btn-gold"
            data-testid="hero-explore-btn"
          >
            Explore Destinations
          </a>
          <a
            href="#contact"
            className="btn-glass"
            data-testid="hero-book-btn"
          >
            Book Your Safari
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 1 }}
        style={{ opacity: contentOpacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-10"
      >
        <span className="text-primary/55 uppercase tracking-[0.35em] text-[9px] mb-4">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-primary/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}

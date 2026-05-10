import { motion } from "framer-motion";

export function Experience() {
  return (
    <section id="experience" className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/experience-new.jpg"
          alt="Cinematic African Safari"
          className="w-full h-full object-cover scale-105"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, hsl(0 0% 5% / 0.75) 0%, hsl(158 42% 7% / 0.55) 50%, hsl(0 0% 5% / 0.85) 100%)"
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 70% 80% at 50% 50%, transparent 30%, hsl(0 0% 4% / 0.5) 100%)"
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.3, ease: "easeOut" }}
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
      >
        <span
          className="text-7xl font-serif leading-none block mb-4"
          style={{
            color: "hsl(46 65% 52%)",
            textShadow: "0 0 60px hsl(46 65% 52% / 0.4)",
            lineHeight: 0.8
          }}
        >
          "
        </span>
        <h2 className="text-3xl md:text-5xl font-serif text-foreground leading-snug mb-10">
          The only man I envy is the man who has not yet been to Africa with SAFARILUXE, for he has so much to look forward to.
        </h2>
        <div
          className="mx-auto mb-6"
          style={{
            width: "3rem",
            height: "1px",
            background: "linear-gradient(90deg, transparent, hsl(46 65% 52%), transparent)"
          }}
        />
        <p
          className="uppercase tracking-[0.3em] text-sm font-semibold"
          style={{ color: "hsl(46 65% 52%)" }}
        >
          Richard Mullin
        </p>
      </motion.div>
    </section>
  );
}

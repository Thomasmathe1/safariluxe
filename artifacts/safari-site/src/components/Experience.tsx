import { motion } from "framer-motion";

export function Experience() {
  return (
    <section id="experience" className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/experience.jpg"
          alt="Cinematic African Safari"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-background/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
      >
        <span className="text-6xl text-primary font-serif leading-none block mb-6">"</span>
        <h2 className="text-3xl md:text-5xl font-serif text-foreground leading-snug mb-10">
          The only man I envy is the man who has not yet been to Africa, for he has so much to look forward to.
        </h2>
        <div className="w-12 h-[1px] bg-primary mx-auto mb-6" />
        <p className="text-primary uppercase tracking-[0.2em] text-sm font-medium">
          Richard Mullin
        </p>
      </motion.div>
    </section>
  );
}

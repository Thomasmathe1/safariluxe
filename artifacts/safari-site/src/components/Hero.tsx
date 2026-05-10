import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/hero-new.jpg"
          alt="African Safari at sunset"
          className="w-full h-full object-cover"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background/90" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-primary uppercase tracking-[0.3em] text-sm md:text-base mb-6"
        >
          EXTRAORDINARY AFRICAN JOURNEYS
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.7 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-foreground leading-tight mb-8"
        >
          Discover Africa <br className="hidden md:block" />
          <span className="italic text-primary">In Style, Naturally</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="text-foreground/80 max-w-2xl text-lg md:text-xl font-light mb-12"
        >
          Bespoke wilderness journeys crafted for the discerning few. Pure Africa, uncompromised luxury.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
        >
          <a
            href="#destinations"
            className="px-10 py-4 bg-primary text-primary-foreground uppercase tracking-widest text-sm font-medium hover:bg-primary/90 transition-colors"
            data-testid="hero-explore-btn"
          >
            Explore Destinations
          </a>
          <a
            href="#contact"
            className="px-10 py-4 border border-primary text-primary uppercase tracking-widest text-sm font-medium bg-background/20 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            data-testid="hero-book-btn"
          >
            Book Your Safari
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-primary/70 uppercase tracking-widest text-[10px] mb-4">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-primary/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}

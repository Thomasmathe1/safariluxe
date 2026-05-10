import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/hero-new.jpg"
          alt="African Safari at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/30 to-black/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-primary uppercase tracking-[0.4em] text-xs md:text-sm mb-6 font-medium"
          style={{ textShadow: "0 0 40px hsl(46 65% 52% / 0.4)" }}
        >
          EXTRAORDINARY AFRICAN JOURNEYS
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.65 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-foreground leading-tight mb-8"
          style={{ textShadow: "0 4px 30px hsl(0 0% 0% / 0.5)" }}
        >
          Discover Africa <br className="hidden md:block" />
          <span className="italic text-primary">In Style, Naturally</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.95 }}
          className="text-foreground/75 max-w-xl text-lg md:text-xl font-light mb-14 leading-relaxed"
        >
          Bespoke wilderness journeys crafted for the discerning few. Pure Africa, uncompromised luxury.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
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
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-primary/60 uppercase tracking-[0.3em] text-[9px] mb-4">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-primary/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}

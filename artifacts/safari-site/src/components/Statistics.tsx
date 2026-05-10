import { motion } from "framer-motion";

export function Statistics() {
  const stats = [
    { value: "10+", label: "Years Experience" },
    { value: "500+", label: "Happy Clients" },
    { value: "50+", label: "Expert Guides" },
    { value: "100%", label: "Premium Service" },
  ];

  return (
    <section
      className="w-full py-14 md:py-20 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, hsl(158 42% 10%) 0%, hsl(158 32% 8%) 100%)",
        borderTop: "1px solid hsl(46 65% 52% / 0.35)",
        borderBottom: "1px solid hsl(46 65% 52% / 0.35)",
      }}
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "radial-gradient(ellipse 70% 100% at 50% 50%, hsl(46 65% 52% / 0.07) 0%, transparent 70%)"
        }}
      />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 text-center divide-x divide-y md:divide-y-0 divide-primary/15">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.12 }}
              className="flex flex-col items-center py-8 md:py-6 px-4 group"
            >
              <div
                className="text-4xl md:text-6xl font-serif text-primary font-bold mb-3 transition-all duration-300 group-hover:scale-105"
                style={{ textShadow: "0 0 40px hsl(46 65% 52% / 0.3)" }}
              >
                {stat.value}
              </div>
              <div className="w-6 h-[1px] bg-primary/40 mb-3" />
              <div className="text-foreground/70 text-xs uppercase tracking-[0.2em] font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

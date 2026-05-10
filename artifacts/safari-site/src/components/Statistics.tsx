import { motion } from "framer-motion";

export function Statistics() {
  const stats = [
    { value: "10+", label: "Years Experience" },
    { value: "500+", label: "Happy Clients" },
    { value: "50+", label: "Expert Guides" },
    { value: "100%", label: "Premium Service" },
  ];

  return (
    <section className="w-full bg-background border-y border-primary py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex flex-col items-center"
            >
              <div className="text-5xl md:text-6xl font-serif text-primary font-bold mb-4">
                {stat.value}
              </div>
              <div className="text-foreground text-sm uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

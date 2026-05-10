import { motion } from "framer-motion";

const destinations = [
  {
    id: "south-africa",
    name: "South Africa",
    tagline: "The Greater Kruger & The Cape",
    hint: "From $8,500 / 10 Days",
    image: "/south-africa.jpg"
  },
  {
    id: "namibia",
    name: "Namibia",
    tagline: "Sossusvlei Dunes & Skeleton Coast",
    hint: "From $7,200 / 8 Days",
    image: "/namibia.jpg"
  },
  {
    id: "botswana",
    name: "Botswana",
    tagline: "The Okavango Delta",
    hint: "From $12,000 / 9 Days",
    image: "/botswana.jpg"
  },
  {
    id: "malawi",
    name: "Malawi",
    tagline: "Lake Malawi & Liwonde",
    hint: "From $6,500 / 7 Days",
    image: "/malawi.jpg"
  }
];

export function Destinations() {
  return (
    <section id="destinations" className="py-32 bg-background relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-12 h-[1px] bg-primary mx-auto mb-8" />
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">Iconic Destinations</h2>
            <p className="text-foreground/70 font-light">
              Journeys crafted with meticulous attention to detail, balancing raw wilderness with uncompromising luxury.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative aspect-[4/5] overflow-hidden cursor-pointer bg-card"
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent transition-opacity duration-500" />
              
              {/* Border that appears on hover */}
              <div className="absolute inset-4 border border-primary/0 group-hover:border-primary/50 transition-colors duration-500 z-20 pointer-events-none" />

              <div className="absolute inset-0 p-8 flex flex-col justify-end z-30">
                <p className="text-primary uppercase tracking-widest text-xs mb-2 font-medium">
                  {dest.hint}
                </p>
                <h3 className="text-3xl font-serif text-foreground mb-2">
                  {dest.name}
                </h3>
                <p className="text-foreground/80 font-light mb-8">
                  {dest.tagline}
                </p>
                
                <div className="overflow-hidden">
                  <motion.button
                    className="w-full py-4 border border-primary/50 bg-background/20 backdrop-blur-md text-primary uppercase tracking-widest text-xs font-medium group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    Book Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

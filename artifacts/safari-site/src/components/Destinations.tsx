import { motion } from "framer-motion";
import { useLocation } from "wouter";

const destinations = [
  {
    id: "south-africa",
    name: "South Africa",
    tagline: "Where the Big Five roam the world's most celebrated wilderness.",
    hint: "From $8,500 · 10 Days",
    image: "/sa-new.jpg",
    flag: "🇿🇦"
  },
  {
    id: "namibia",
    name: "Namibia",
    tagline: "Ancient dunes, celestial skies and silence beyond measure.",
    hint: "From $7,200 · 8 Days",
    image: "/na-new.jpg",
    flag: "🇳🇦"
  },
  {
    id: "botswana",
    name: "Botswana",
    tagline: "The Okavango Delta — Africa's last great Eden, untouched and infinite.",
    hint: "From $12,000 · 9 Days",
    image: "/bw-new.jpg",
    flag: "🇧🇼"
  },
  {
    id: "malawi",
    name: "Malawi",
    tagline: "Warm lakeshore sanctuaries where time dissolves into paradise.",
    hint: "From $6,500 · 7 Days",
    image: "/mw-new.jpg",
    flag: "🇲🇼"
  }
];

export function Destinations() {
  const [, setLocation] = useLocation();

  return (
    <section id="destinations" className="py-32 bg-background relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="gold-divider mx-auto mb-8" />
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">Iconic Destinations</h2>
            <p className="text-foreground/60 font-light leading-relaxed">
              Journeys crafted with meticulous attention to detail, balancing raw wilderness with uncompromising luxury.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group relative aspect-[4/5] overflow-hidden cursor-pointer"
              data-testid={`destination-link-${dest.id}`}
              onClick={() => setLocation(`/destinations/${dest.id}`)}
              style={{
                boxShadow: "0 8px 40px hsl(0 0% 0% / 0.5)"
              }}
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-108"
                style={{ transformOrigin: "center center" }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-black/20 transition-opacity duration-500" />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background: "linear-gradient(to top, hsl(158 42% 5% / 0.97) 0%, hsl(0 0% 0% / 0.25) 50%, transparent 100%)"
                }}
              />

              <div
                className="absolute top-5 left-5 px-3 py-1 text-sm z-30 rounded-full"
                style={{
                  background: "hsl(0 0% 0% / 0.55)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid hsl(46 65% 52% / 0.2)",
                }}
              >
                {dest.flag}
              </div>

              <div
                className="absolute inset-3 border opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 pointer-events-none"
                style={{ borderColor: "hsl(46 65% 52% / 0.45)" }}
              />
              <div
                className="absolute inset-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none"
                style={{
                  boxShadow: "inset 0 0 40px hsl(46 65% 52% / 0.06)"
                }}
              />

              <div className="absolute inset-0 p-8 flex flex-col justify-end z-30">
                <p className="text-primary uppercase tracking-[0.2em] text-xs mb-3 font-semibold">
                  {dest.hint}
                </p>
                <h3 className="text-3xl md:text-4xl font-serif text-foreground mb-2 transition-transform duration-300 group-hover:-translate-y-1">
                  {dest.name}
                </h3>
                <p className="text-foreground/70 font-light mb-8 text-sm leading-relaxed">
                  {dest.tagline}
                </p>

                <div className="overflow-hidden">
                  <button
                    className="w-full py-4 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-400 translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                    style={{
                      background: "hsl(158 42% 10% / 0.35)",
                      backdropFilter: "blur(14px)",
                      WebkitBackdropFilter: "blur(14px)",
                      border: "1px solid hsl(46 65% 52% / 0.55)",
                      color: "hsl(46 65% 52%)",
                      boxShadow: "0 4px 20px hsl(0 0% 0% / 0.3), inset 0 1px 0 hsl(46 65% 52% / 0.1)"
                    }}
                    data-testid={`book-now-${dest.id}`}
                  >
                    Discover More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

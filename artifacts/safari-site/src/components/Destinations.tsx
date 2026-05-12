import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { useTranslation } from "react-i18next";

export function Destinations() {
  const [, setLocation] = useLocation();
  const { i18n } = useTranslation();

  const isFrench = i18n.language === "fr";

  const destinations = [
    {
      id: "south-africa",
      name: "South Africa",
      tagline: isFrench
        ? "Là où les Big Five parcourent les plus grandes réserves sauvages du monde."
        : "Where the Big Five roam the world's most celebrated wilderness.",
      hint: isFrench
        ? "Expérience de Luxe Sur Mesure"
        : "Tailored Luxury Experience",
      image: "/sa-new.jpg",
      flag: "🇿🇦",
    },
    {
      id: "namibia",
      name: "Namibia",
      tagline: isFrench
        ? "Des dunes anciennes, des cieux étoilés et un silence infini."
        : "Ancient dunes, celestial skies and silence beyond measure.",
      hint: isFrench ? "Safari Personnalisé" : "Custom Safari Package",
      image: "/na-new.jpg",
      flag: "🇳🇦",
    },
    {
      id: "botswana",
      name: "Botswana",
      tagline: isFrench
        ? "Le Delta de l’Okavango — le dernier grand paradis sauvage d’Afrique."
        : "The Okavango Delta — Africa's last great Eden, untouched and infinite.",
      hint: isFrench ? "Voyage Exclusif" : "Bespoke Wilderness Journey",
      image: "/bw-new.jpg",
      flag: "🇧🇼",
    },
    {
      id: "malawi",
      name: "Malawi",
      tagline: isFrench
        ? "Des sanctuaires lacustres paisibles où le temps s’arrête."
        : "Warm lakeshore sanctuaries where time dissolves into paradise.",
      hint: isFrench ? "Luxe Accessible" : "Affordable Luxury Package",
      image: "/mw-new.jpg",
      flag: "🇲🇼",
    },
  ];

  const containerVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.14 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.85, ease: "linear" as const },
    },
  };

  return (
    <section id="destinations" className="py-32 bg-background relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "linear" as const }}
          >
            <div className="gold-divider mx-auto mb-8" />

            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
              {isFrench ? "Destinations Iconiques" : "Iconic Destinations"}
            </h2>

            <p className="text-foreground/58 font-light leading-relaxed">
              {isFrench
                ? "Des voyages conçus avec une attention méticuleuse, mêlant nature sauvage et luxe absolu."
                : "Journeys crafted with meticulous attention to detail, balancing raw wilderness with uncompromising luxury."}
            </p>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {destinations.map((dest) => (
            <motion.div
              key={dest.id}
              variants={cardVariants}
              className="group relative aspect-[4/5] overflow-hidden cursor-pointer"
              data-testid={`destination-link-${dest.id}`}
              onClick={() => setLocation(`/destinations/${dest.id}`)}
              style={{
                boxShadow: "0 12px 48px hsl(0 0% 0% / 0.55)",
              }}
              whileHover={{
                boxShadow:
                  "0 0 0 1.5px hsl(46 65% 52% / 0.6), 0 20px 60px hsl(0 0% 0% / 0.65)",
              }}
              transition={{ duration: 0.4 }}
            >
              <motion.img
                src={dest.image}
                alt={dest.name}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ transformOrigin: "center center" }}
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 1.4, ease: "linear" as const }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/28 to-black/18 transition-opacity duration-500" />

              <div className="absolute inset-0 p-7 md:p-9 flex flex-col justify-end z-30">
                <p className="text-primary uppercase tracking-[0.22em] text-[11px] mb-3 font-semibold">
                  {dest.hint}
                </p>

                <motion.h3
                  className="text-3xl md:text-4xl font-serif text-foreground mb-2 leading-tight"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.3 }}
                >
                  {dest.name}
                </motion.h3>

                <p className="text-foreground/68 font-light mb-6 md:mb-8 text-sm leading-relaxed max-w-xs">
                  {dest.tagline}
                </p>

                <button
                  className="w-full py-3.5 md:py-4 text-xs font-semibold uppercase tracking-[0.22em]"
                  style={{
                    background: "hsl(158 42% 10% / 0.38)",
                    border: "1px solid hsl(46 65% 52% / 0.58)",
                    color: "hsl(46 65% 52%)",
                  }}
                >
                  {isFrench ? "Découvrir →" : "Discover More →"}
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

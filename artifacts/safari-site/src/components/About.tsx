import { motion } from "framer-motion";
import { Compass, Tent, Gem } from "lucide-react";
import { useTranslation } from "react-i18next";

export function About() {
  const { i18n } = useTranslation();

  const isFrench = i18n.language === "fr";

  const pillars = [
    {
      icon: Compass,
      title: isFrench ? "Guides Privés" : "Private Guides",
      description: isFrench
        ? "Explorez la nature sauvage avec les meilleurs naturalistes d’Afrique, entièrement dédiés à votre groupe."
        : "Traverse the wilderness with the continent's most decorated naturalists, dedicated entirely to your group.",
    },
    {
      icon: Tent,
      title: isFrench ? "Camps de Luxe" : "Luxury Camps",
      description: isFrench
        ? "Séjournez dans des lodges exclusifs alliant élégance et nature sauvage."
        : "Retire to exclusive lodges that define expeditionary opulence, harmonizing with their untamed surroundings.",
    },
    {
      icon: Gem,
      title: isFrench ? "Itinéraires Sur Mesure" : "Bespoke Itineraries",
      description: isFrench
        ? "Chaque voyage est conçu spécialement selon vos envies et votre rythme."
        : "Every journey is a blank canvas. We architect experiences around your precise desires and pace.",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 md:py-32 relative"
      style={{
        background:
          "linear-gradient(180deg, hsl(158 32% 13%) 0%, hsl(158 28% 11%) 100%)",
        borderTop: "1px solid hsl(158 22% 18%)",
        borderBottom: "1px solid hsl(158 22% 18%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 50% 60% at 80% 50%, hsl(46 65% 52% / 0.06) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:w-1/2 flex flex-col justify-center"
          >
            <div className="gold-divider mb-8" />

            <h2 className="text-3xl md:text-5xl font-serif text-foreground leading-tight mb-6 md:mb-8">
              {isFrench ? (
                <>
                  Une Nouvelle Vision <br /> de l’Exploration
                </>
              ) : (
                <>
                  A New Standard <br /> of Exploration
                </>
              )}
            </h2>

            <div className="space-y-5 text-foreground/70 font-light text-base md:text-lg leading-relaxed">
              <p>
                {isFrench
                  ? "Nous croyons que le vrai luxe est l’accès : accès à des paysages préservés, à des rencontres uniques avec la faune et à un service exceptionnel."
                  : "We believe true luxury is access. Access to untouched landscapes, access to intimate wildlife encounters, and access to a level of service that anticipates needs before they arise."}
              </p>

              <p>
                {isFrench
                  ? "SAFARILUXE ne propose pas de circuits préfabriqués. Nous créons des voyages profonds et uniques pour ceux qui recherchent l’extraordinaire."
                  : "SAFARILUXE does not offer pre-packaged tours. We are an atelier of travel, designing profound journeys for those who seek the extraordinary."}
              </p>
            </div>

            <div
              className="mt-12 pt-12 flex items-center gap-4"
              style={{ borderTop: "1px solid hsl(158 22% 18%)" }}
            >
              <div className="gold-divider" />

              <p className="text-xs uppercase tracking-[0.25em] text-foreground/45 font-medium">
                {isFrench
                  ? "Né au Cœur de l’Afrique"
                  : "Est. in the Heart of Africa"}
              </p>
            </div>
          </motion.div>

          <div className="lg:w-1/2 grid gap-8">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;

              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2 + index * 0.18,
                  }}
                  className="flex gap-6 items-start group p-6 rounded-sm transition-all duration-400"
                  style={{
                    background: "hsl(158 42% 10% / 0)",
                    border: "1px solid transparent",
                    transition: "all 0.4s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "hsl(158 42% 10% / 0.6)";
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "hsl(46 65% 52% / 0.15)";
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      "0 4px 24px hsl(0 0% 0% / 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "hsl(158 42% 10% / 0)";
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "transparent";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-primary transition-all duration-400"
                    style={{
                      border: "1px solid hsl(46 65% 52% / 0.3)",
                      background: "hsl(46 65% 52% / 0.06)",
                      boxShadow: "0 0 20px hsl(46 65% 52% / 0.1)",
                    }}
                  >
                    <Icon size={20} />
                  </div>

                  <div>
                    <h3 className="text-xl font-serif text-foreground mb-3">
                      {pillar.title}
                    </h3>

                    <p className="text-foreground/60 font-light leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Compass, Tent, Gem } from "lucide-react";

export function About() {
  const pillars = [
    {
      icon: Compass,
      title: "Private Guides",
      description: "Traverse the wilderness with the continent's most decorated naturalists, dedicated entirely to your group."
    },
    {
      icon: Tent,
      title: "Luxury Camps",
      description: "Retire to exclusive lodges that define expeditionary opulence, harmonizing with their untamed surroundings."
    },
    {
      icon: Gem,
      title: "Bespoke Itineraries",
      description: "Every journey is a blank canvas. We architect experiences around your precise desires and pace."
    }
  ];

  return (
    <section id="about" className="py-32 bg-secondary border-y border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:w-1/2 flex flex-col justify-center"
          >
            <div className="w-12 h-[1px] bg-primary mb-8" />
            <h2 className="text-4xl md:text-5xl font-serif text-foreground leading-tight mb-8">
              A New Standard <br /> of Exploration
            </h2>
            <div className="space-y-6 text-foreground/80 font-light text-lg">
              <p>
                We believe true luxury is access. Access to untouched landscapes, access to intimate wildlife encounters, and access to a level of service that anticipates needs before they arise.
              </p>
              <p>
                SAFARILUXE does not offer pre-packaged tours. We are an atelier of travel, designing profound journeys for those who seek the extraordinary.
              </p>
            </div>
            
            <div className="mt-12 pt-12 border-t border-border">
              <img 
                src="/experience-new.jpg" 
                alt="Signature of founder" 
                className="h-16 w-16 object-cover rounded-full grayscale mb-4"
              />
              <p className="font-serif italic text-primary text-lg">Alexander Vance</p>
              <p className="text-xs uppercase tracking-widest text-foreground/50">Founder & Head Guide</p>
            </div>
          </motion.div>

          <div className="lg:w-1/2 grid gap-10">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                  className="flex gap-6 items-start group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center text-primary group-hover:text-orange-accent group-hover:border-orange-accent transition-colors duration-300">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-foreground mb-3">{pillar.title}</h3>
                    <p className="text-foreground/70 font-light leading-relaxed">
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

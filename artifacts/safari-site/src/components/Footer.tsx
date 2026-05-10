import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

export function Footer() {
  return (
    <footer
      id="contact"
      className="pt-24 pb-12 relative"
      style={{
        background: "linear-gradient(180deg, hsl(158 42% 7%) 0%, hsl(0 0% 5%) 100%)",
        borderTop: "1px solid hsl(46 65% 52% / 0.2)",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: "radial-gradient(ellipse 60% 50% at 20% 50%, hsl(158 42% 12% / 0.5) 0%, transparent 70%)"
        }}
      />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2">
            <h2
              className="font-serif text-3xl text-primary mb-3"
              style={{ textShadow: "0 0 30px hsl(46 65% 52% / 0.25)" }}
            >
              SAFARILUXE
            </h2>
            <p className="text-xs uppercase tracking-[0.2em] text-foreground/40 mb-6">Extraordinary African Journeys</p>
            <p className="text-foreground/60 font-light max-w-sm mb-8 leading-relaxed">
              Curating exceptional journeys through the continent's most pristine environments. Redefining wilderness luxury.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: FaInstagram, label: "Instagram" },
                { Icon: FaFacebookF, label: "Facebook" },
                { Icon: FaTwitter, label: "Twitter" },
                { Icon: FaYoutube, label: "YouTube" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-foreground/50 transition-all duration-300 hover:text-primary hover:scale-110"
                  style={{
                    border: "1px solid hsl(158 22% 18%)",
                    background: "hsl(158 42% 10% / 0.5)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "hsl(46 65% 52% / 0.5)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 0 16px hsl(46 65% 52% / 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "hsl(158 22% 18%)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-foreground/90 font-medium uppercase tracking-[0.2em] text-xs mb-6 pb-3" style={{ borderBottom: "1px solid hsl(158 22% 18%)" }}>Contact</h4>
            <ul className="space-y-4 text-foreground/55 font-light text-sm">
              <li>
                <a href="mailto:concierge@safariluxe.com" className="hover:text-primary transition-colors duration-300">
                  concierge@safariluxe.com
                </a>
              </li>
              <li>
                <a href="tel:+27115550199" className="hover:text-primary transition-colors duration-300">
                  +27 11 555 0199
                </a>
              </li>
              <li className="pt-2 leading-relaxed">
                <p>124 Safari Way, Sandton</p>
                <p>Johannesburg, South Africa</p>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground/90 font-medium uppercase tracking-[0.2em] text-xs mb-6 pb-3" style={{ borderBottom: "1px solid hsl(158 22% 18%)" }}>Quick Links</h4>
            <ul className="space-y-4 text-foreground/55 font-light text-sm">
              <li><a href="#destinations" className="hover:text-primary transition-colors duration-300">Destinations</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors duration-300">Our Story</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-300">Journal</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-300">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div
          className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light text-foreground/35"
          style={{ borderTop: "1px solid hsl(158 22% 14%)" }}
        >
          <p>&copy; {new Date().getFullYear()} SAFARILUXE. All rights reserved.</p>
          <p className="text-primary/50">Crafted for the Extraordinary</p>
        </div>
      </div>
    </footer>
  );
}

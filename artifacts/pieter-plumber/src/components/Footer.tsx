import { Wrench, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const services = [
  "Geyser Installation & Repairs",
  "Emergency Plumbing",
  "Leak Detection",
  "Burst Pipe Repairs",
  "Blocked Drains",
  "Bathroom & Kitchen Plumbing",
  "Commercial Plumbing",
  "Maintenance & Inspections",
];

const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "About Pieter", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Service Areas", href: "#areas" },
  { label: "Get a Quote", href: "#contact" },
];

export function Footer() {
  return (
    <footer style={{ background: "hsl(215 58% 7%)", borderTop: "1px solid hsl(215 40% 16%)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: "hsl(25 100% 50%)" }}
              >
                <Wrench size={17} className="text-white" strokeWidth={2.5} />
              </div>
              <div>
                <span className="block font-display font-700 text-white text-sm" style={{ fontWeight: 700 }}>
                  PIETER THE PLUMBER
                </span>
                <span className="block text-[10px] tracking-[0.12em] uppercase" style={{ color: "hsl(25 100% 60%)" }}>
                  Est. 1994
                </span>
              </div>
            </div>
            <p className="text-sm mb-6 leading-relaxed" style={{ color: "hsl(215 15% 55%)" }}>
              Johannesburg's trusted plumbing experts for over 30 years. Licensed, insured, and always on time.
            </p>
            <div className="flex items-center gap-2 mb-3">
              <Phone size={14} style={{ color: "hsl(25 100% 55%)", flexShrink: 0 }} />
              <a href="tel:+27110000000" className="text-sm text-white hover:text-orange-400 transition-colors font-medium">
                011 000 0000
              </a>
            </div>
            <div className="flex items-start gap-2">
              <MapPin size={14} style={{ color: "hsl(25 100% 55%)", flexShrink: 0, marginTop: "2px" }} />
              <span className="text-sm" style={{ color: "hsl(215 15% 55%)" }}>
                Johannesburg &amp; Surrounds, Gauteng
              </span>
            </div>
            <div className="flex gap-2.5 mt-5">
              {[
                { Icon: Facebook, label: "Facebook" },
                { Icon: Instagram, label: "Instagram" },
                { Icon: Twitter, label: "Twitter" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-200"
                  style={{
                    background: "hsl(215 50% 14%)",
                    border: "1px solid hsl(215 40% 20%)",
                    color: "hsl(215 15% 55%)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "hsl(25 100% 60%)";
                    (e.currentTarget as HTMLElement).style.borderColor = "hsl(25 100% 50% / 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "hsl(215 15% 55%)";
                    (e.currentTarget as HTMLElement).style.borderColor = "hsl(215 40% 20%)";
                  }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-600 text-white text-sm mb-5 uppercase tracking-wider" style={{ fontWeight: 600 }}>
              Our Services
            </h4>
            <ul className="flex flex-col gap-2.5">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm transition-colors duration-200 hover:text-white"
                    style={{ color: "hsl(215 15% 55%)" }}
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-600 text-white text-sm mb-5 uppercase tracking-wider" style={{ fontWeight: 600 }}>
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5 mb-8">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors duration-200 hover:text-white"
                    style={{ color: "hsl(215 15% 55%)" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-600 text-white text-sm mb-5 uppercase tracking-wider" style={{ fontWeight: 600 }}>
              Emergency Service
            </h4>
            <div
              className="rounded-xl p-5"
              style={{
                background: "hsl(25 100% 50% / 0.1)",
                border: "1px solid hsl(25 100% 50% / 0.2)",
              }}
            >
              <p className="text-sm font-semibold text-white mb-1">24/7 Emergency Line</p>
              <p className="text-xs mb-4" style={{ color: "hsl(215 15% 60%)" }}>
                Available nights, weekends, and public holidays
              </p>
              <a
                href="tel:+27110000001"
                className="btn-primary w-full justify-center"
                style={{ fontSize: "0.82rem", padding: "0.65rem 1rem" }}
              >
                <Phone size={14} strokeWidth={2.5} />
                011 000 0001
              </a>
            </div>
          </div>
        </div>

        <div
          className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs"
          style={{
            borderTop: "1px solid hsl(215 40% 15%)",
            color: "hsl(215 15% 40%)",
          }}
        >
          <p>© {new Date().getFullYear()} Pieter The Plumber. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
            <span>·</span>
            <a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a>
            <span>·</span>
            <span style={{ color: "hsl(25 100% 50%)" }}>Licensed &amp; Insured</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

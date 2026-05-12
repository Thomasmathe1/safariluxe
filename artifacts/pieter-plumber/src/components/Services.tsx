import { Flame, AlertTriangle, Droplets, Zap, Filter, Bath, Building2, Wrench } from "lucide-react";

const services = [
  {
    icon: Flame,
    title: "Geyser Installation & Repairs",
    description: "Expert geyser installation, servicing, and replacement. From solar geysers to heat pumps — we handle all makes and models.",
    highlight: "Most Popular",
  },
  {
    icon: AlertTriangle,
    title: "Emergency Plumbing",
    description: "Plumbing emergencies don't wait for business hours. We're available 24/7 for urgent call-outs across Johannesburg.",
    highlight: "24/7",
  },
  {
    icon: Droplets,
    title: "Leak Detection",
    description: "State-of-the-art leak detection equipment to find hidden leaks quickly, saving you water and money on your rates.",
  },
  {
    icon: Zap,
    title: "Burst Pipe Repairs",
    description: "Fast response to burst pipes to minimise water damage. We repair and replace burst pipes professionally.",
    highlight: "Fast Response",
  },
  {
    icon: Filter,
    title: "Blocked Drains",
    description: "Drain blockages cleared with professional jetting and snake equipment. Kitchen drains, shower drains, and sewer lines.",
  },
  {
    icon: Bath,
    title: "Bathroom & Kitchen Plumbing",
    description: "Full bathroom and kitchen plumbing installations and renovations. From taps and toilets to complete fit-outs.",
  },
  {
    icon: Building2,
    title: "Commercial Plumbing",
    description: "Comprehensive plumbing services for offices, retail spaces, restaurants, and industrial properties across Gauteng.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Installations",
    description: "Scheduled plumbing maintenance programmes and new installations. Keep your plumbing in top condition year-round.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28" style={{ background: "hsl(210 20% 97%)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <div className="section-tag">What We Do</div>
          <h2
            className="font-display font-700 mb-4 leading-tight"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)", fontWeight: 700, color: "hsl(215 58% 10%)" }}
          >
            Complete Plumbing Services
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: "hsl(215 15% 48%)" }}>
            From minor repairs to major installations — Pieter and his team handle all your residential and commercial plumbing needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="service-card group relative">
                {service.highlight && (
                  <span
                    className="absolute top-4 right-4 text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full"
                    style={{ background: "hsl(25 100% 50% / 0.12)", color: "hsl(25 100% 42%)" }}
                  >
                    {service.highlight}
                  </span>
                )}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: "hsl(25 100% 50% / 0.1)",
                  }}
                >
                  <Icon size={22} style={{ color: "hsl(25 100% 50%)" }} strokeWidth={2} />
                </div>
                <h3
                  className="font-display font-600 text-base md:text-[17px] mb-3 leading-snug"
                  style={{ fontWeight: 600, color: "hsl(215 58% 10%)" }}
                >
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "hsl(215 15% 48%)" }}>
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a href="#contact" className="btn-primary" style={{ fontSize: "0.95rem" }}>
            Book a Service Call
          </a>
        </div>
      </div>
    </section>
  );
}

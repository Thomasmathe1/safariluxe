import { ShieldCheck, Clock, BadgeCheck, Banknote, Star, HeartHandshake } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Fully Licensed & Insured",
    description: "Registered with the Institute of Plumbing South Africa (IOPSA). All work is fully insured for your peace of mind.",
  },
  {
    icon: Clock,
    title: "24/7 Emergency Availability",
    description: "Plumbing emergencies happen at all hours. We're always on call with rapid response times across Johannesburg.",
  },
  {
    icon: BadgeCheck,
    title: "30+ Years of Experience",
    description: "Pieter has been solving Johannesburg's plumbing problems since 1994. That depth of experience shows in every job.",
  },
  {
    icon: Banknote,
    title: "Upfront, Honest Pricing",
    description: "We provide detailed quotes before starting any work. No hidden fees, no surprises — just fair, transparent pricing.",
  },
  {
    icon: Star,
    title: "5-Star Rated Service",
    description: "Consistently rated 5 stars by hundreds of satisfied customers. Our reputation is built on quality and reliability.",
  },
  {
    icon: HeartHandshake,
    title: "Guaranteed Workmanship",
    description: "We stand behind every job we complete. All workmanship carries a guarantee — if it's not right, we make it right.",
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 md:py-28" style={{ background: "hsl(215 58% 10%)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <div className="section-tag-white">Why Choose Us</div>
          <h2
            className="font-display font-700 text-white mb-4 leading-tight"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)", fontWeight: 700 }}
          >
            The Pieter Difference
          </h2>
          <p
            className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: "hsl(215 15% 65%)" }}
          >
            We're not just another plumbing company. We're your neighbours — committed to providing honest, professional service every single time.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="rounded-xl p-6 md:p-7 group transition-all duration-300 hover:scale-[1.02]"
                style={{
                  background: "hsl(215 55% 14%)",
                  border: "1px solid hsl(215 40% 20%)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "hsl(25 100% 50% / 0.35)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px hsl(25 100% 50% / 0.08)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "hsl(215 40% 20%)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    background: i % 2 === 0
                      ? "hsl(25 100% 50% / 0.15)"
                      : "hsl(215 55% 20%)",
                  }}
                >
                  <Icon size={22} style={{ color: "hsl(25 100% 62%)" }} strokeWidth={2} />
                </div>
                <h3
                  className="font-display font-600 text-white text-base md:text-[17px] mb-3"
                  style={{ fontWeight: 600 }}
                >
                  {reason.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "hsl(215 15% 60%)" }}>
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { CheckCircle, Award, Users, Wrench } from "lucide-react";

const highlights = [
  "IOPSA Registered Master Plumber",
  "Certified Gas Installer",
  "30+ Years in Johannesburg",
  "Over 2,500 Successful Jobs",
  "Residential & Commercial Expert",
  "Trusted by Joburg Families Since 1994",
];

const milestones = [
  { icon: Award, value: "1994", label: "Year Established" },
  { icon: Users, value: "2,500+", label: "Happy Clients" },
  { icon: Wrench, value: "8+", label: "Services Offered" },
];

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{ aspectRatio: "4/5", maxHeight: "560px" }}
            >
              <img
                src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&q=80&auto=format&fit=crop"
                alt="Pieter - Professional Plumber"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(180deg, transparent 50%, hsl(215 58% 8% / 0.6) 100%)",
                }}
              />
            </div>

            <div
              className="absolute -bottom-4 -right-4 md:bottom-6 md:right-6 rounded-2xl px-5 py-4 shadow-xl"
              style={{
                background: "hsl(25 100% 50%)",
              }}
            >
              <div className="flex items-center gap-3">
                <div className="text-center">
                  <span className="block font-display font-800 text-3xl text-white leading-none" style={{ fontWeight: 800 }}>30+</span>
                  <span className="block text-xs text-white/80 font-medium mt-0.5">Years of<br />Excellence</span>
                </div>
              </div>
            </div>

            <div
              className="absolute -bottom-4 -left-4 md:bottom-6 md:left-6 rounded-2xl px-5 py-4 shadow-xl"
              style={{
                background: "hsl(215 58% 10%)",
                border: "1px solid hsl(215 40% 20%)",
              }}
            >
              <div className="flex items-center gap-2">
                <Award size={20} style={{ color: "hsl(25 100% 60%)" }} />
                <div>
                  <span className="block text-xs text-white font-semibold">IOPSA Certified</span>
                  <span className="block text-[10px]" style={{ color: "hsl(215 15% 55%)" }}>Master Plumber</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="section-tag">About Pieter</div>
            <h2
              className="font-display font-700 mb-5 leading-tight"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)", fontWeight: 700, color: "hsl(215 58% 10%)" }}
            >
              A Plumber You Can
              <span style={{ color: "hsl(25 100% 50%)" }}> Trust</span>
            </h2>

            <p className="text-base md:text-lg mb-5 leading-relaxed" style={{ color: "hsl(215 15% 45%)" }}>
              Pieter started his plumbing career in 1994 after completing a formal apprenticeship in Johannesburg. What began as a one-man operation has grown into a respected plumbing business serving thousands of households and businesses across the city.
            </p>
            <p className="text-base mb-8 leading-relaxed" style={{ color: "hsl(215 15% 45%)" }}>
              Pieter's philosophy is simple: treat every client like a neighbour. That means turning up on time, communicating clearly, doing quality work, and charging a fair price. No shortcuts. No surprises.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <CheckCircle size={16} style={{ color: "hsl(25 100% 50%)", flexShrink: 0 }} strokeWidth={2.5} />
                  <span className="text-sm font-medium" style={{ color: "hsl(215 40% 20%)" }}>{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mb-8 pb-8" style={{ borderBottom: "1px solid hsl(215 20% 90%)" }}>
              {milestones.map((m) => {
                const Icon = m.icon;
                return (
                  <div key={m.label} className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "hsl(25 100% 50% / 0.1)" }}
                    >
                      <Icon size={18} style={{ color: "hsl(25 100% 50%)" }} />
                    </div>
                    <div>
                      <span className="block font-display font-700 text-xl leading-none" style={{ fontWeight: 700, color: "hsl(215 58% 10%)" }}>{m.value}</span>
                      <span className="text-xs" style={{ color: "hsl(215 15% 50%)" }}>{m.label}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <a href="#contact" className="btn-primary">
              Work With Pieter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

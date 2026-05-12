import { Phone, ChevronDown, CheckCircle, Star } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative w-full flex items-center justify-center overflow-hidden"
      style={{ minHeight: "calc(100vh - 80px)" }}
    >
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1920&q=80&auto=format&fit=crop"
          alt="Professional plumber at work"
          className="w-full h-full object-cover object-center"
          fetchPriority="high"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, hsl(215 58% 8% / 0.97) 0%, hsl(215 58% 10% / 0.92) 40%, hsl(215 58% 12% / 0.78) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 100% at 70% 50%, hsl(25 100% 50% / 0.04) 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full py-16 md:py-20">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2.5 mb-5">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={14} className="fill-current" style={{ color: "hsl(45 100% 55%)" }} />
              ))}
            </div>
            <span className="text-sm font-medium" style={{ color: "hsl(215 15% 70%)" }}>
              5-Star Rated Johannesburg Plumber
            </span>
          </div>

          <h1
            className="font-display font-900 text-white leading-[1.08] mb-6"
            style={{
              fontSize: "clamp(2.4rem, 5.5vw, 4rem)",
              fontWeight: 800,
              textShadow: "0 2px 20px hsl(215 58% 5% / 0.5)",
            }}
          >
            Johannesburg&apos;s{" "}
            <span style={{ color: "hsl(25 100% 58%)" }}>Most Trusted</span>
            <br className="hidden sm:block" />
            {" "}Plumbing Experts
          </h1>

          <p
            className="text-lg md:text-xl font-light mb-8 leading-relaxed max-w-2xl"
            style={{ color: "hsl(215 15% 72%)" }}
          >
            Over 30 years of professional plumbing services across Johannesburg.
            Licensed, insured, and ready to solve any plumbing problem — big or small.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            {[
              "Licensed & Certified",
              "Same-Day Service",
              "No Call-Out Fee",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle size={16} style={{ color: "hsl(25 100% 58%)", flexShrink: 0 }} strokeWidth={2.5} />
                <span className="text-sm font-medium text-white">{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-14">
            <a href="tel:+27110000000" className="btn-primary" style={{ fontSize: "1rem", padding: "1rem 2rem" }}>
              <Phone size={18} strokeWidth={2.5} />
              Call: 011 000 0000
            </a>
            <a href="#contact" className="btn-outline-white" style={{ fontSize: "1rem", padding: "1rem 2rem" }}>
              Get a Free Quote
            </a>
          </div>

          <div
            className="grid grid-cols-2 sm:grid-cols-4 gap-0 rounded-xl overflow-hidden"
            style={{
              background: "hsl(215 50% 14% / 0.8)",
              backdropFilter: "blur(20px)",
              border: "1px solid hsl(215 40% 22%)",
            }}
          >
            {[
              { value: "30+", label: "Years Experience" },
              { value: "2,500+", label: "Jobs Completed" },
              { value: "24/7", label: "Emergency Service" },
              { value: "100%", label: "Satisfaction Rate" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center py-5 px-3"
                style={{
                  borderRight: i < 3 ? "1px solid hsl(215 40% 22%)" : "none",
                }}
              >
                <span
                  className="font-display font-800 text-2xl md:text-3xl leading-none mb-1"
                  style={{ fontWeight: 800, color: "hsl(25 100% 58%)" }}
                >
                  {stat.value}
                </span>
                <span className="text-xs text-center" style={{ color: "hsl(215 15% 60%)" }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <a
        href="#services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-10 transition-opacity hover:opacity-70"
        style={{ color: "hsl(215 15% 55%)" }}
        aria-label="Scroll to services"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-medium">Explore</span>
        <ChevronDown size={18} className="animate-bounce" />
      </a>
    </section>
  );
}

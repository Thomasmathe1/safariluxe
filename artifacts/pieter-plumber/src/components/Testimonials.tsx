import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah van der Merwe",
    area: "Sandton",
    rating: 5,
    service: "Geyser Replacement",
    text: "Pieter replaced our geyser in under 3 hours on a Saturday. Professional, neat and honest about the costs upfront. Our go-to plumber for the past 8 years!",
    avatar: "SV",
  },
  {
    name: "Michael Dlamini",
    area: "Midrand",
    rating: 5,
    service: "Burst Pipe Emergency",
    text: "Called at 11pm with a burst pipe — Pieter arrived within 45 minutes. Fixed the problem quickly and left my place cleaner than he found it. Absolute legend.",
    avatar: "MD",
  },
  {
    name: "Karen Botha",
    area: "Roodepoort",
    rating: 5,
    service: "Bathroom Renovation",
    text: "Complete bathroom plumbing for our renovation. Pieter was meticulous, on time every day, and his quote was spot-on. Highly recommend to anyone in Joburg.",
    avatar: "KB",
  },
  {
    name: "James Ferreira",
    area: "Centurion",
    rating: 5,
    service: "Leak Detection",
    text: "Had a mystery leak increasing our water bill. Pieter found it within an hour using his detection equipment. Saved us thousands. Excellent service.",
    avatar: "JF",
  },
  {
    name: "Nomsa Khumalo",
    area: "Soweto",
    rating: 5,
    service: "Drain Unblocking",
    text: "Blocked drain sorted in no time. Fair price, friendly service, and he explained exactly what the problem was. Would definitely use again.",
    avatar: "NK",
  },
  {
    name: "André du Plessis",
    area: "Randburg",
    rating: 5,
    service: "Commercial Plumbing",
    text: "Pieter manages all the plumbing for our office complex. Reliable, professional, and his team always causes minimal disruption to our business. Highly recommended.",
    avatar: "AP",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={13} className="fill-current" style={{ color: "hsl(45 100% 50%)" }} />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28" style={{ background: "hsl(210 20% 97%)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <div className="section-tag">Reviews</div>
          <h2
            className="font-display font-700 mb-4 leading-tight"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)", fontWeight: 700, color: "hsl(215 58% 10%)" }}
          >
            What Our Clients Say
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={20} className="fill-current" style={{ color: "hsl(45 100% 50%)" }} />
              ))}
            </div>
            <span className="font-display font-700 text-xl" style={{ fontWeight: 700, color: "hsl(215 58% 10%)" }}>
              5.0
            </span>
            <span style={{ color: "hsl(215 15% 50%)" }}>— Based on 200+ reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{
                background: "white",
                border: "1px solid hsl(215 20% 90%)",
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-display font-700 text-sm text-white"
                    style={{
                      background: "hsl(215 58% 22%)",
                      fontWeight: 700,
                    }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <span className="block text-sm font-semibold" style={{ color: "hsl(215 58% 10%)" }}>{t.name}</span>
                    <span className="block text-xs" style={{ color: "hsl(215 15% 52%)" }}>{t.area}</span>
                  </div>
                </div>
                <Quote size={20} style={{ color: "hsl(25 100% 50% / 0.35)", flexShrink: 0 }} />
              </div>

              <StarRating count={t.rating} />
              <span
                className="inline-block mt-2 mb-3 text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full"
                style={{ background: "hsl(25 100% 50% / 0.1)", color: "hsl(25 100% 38%)" }}
              >
                {t.service}
              </span>
              <p className="text-sm leading-relaxed" style={{ color: "hsl(215 15% 42%)" }}>
                "{t.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

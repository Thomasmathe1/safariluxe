import { MapPin } from "lucide-react";

const areas = [
  "Sandton", "Randburg", "Roodepoort", "Soweto",
  "Midrand", "Centurion", "Boksburg", "Germiston",
  "Edenvale", "Kempton Park", "Benoni", "Alberton",
  "Johannesburg CBD", "Parkhurst", "Rosebank", "Melville",
  "Fourways", "Sunninghill", "Bryanston", "Rivonia",
  "Bedfordview", "Brakpan", "Springs", "Krugersdorp",
];

export function ServiceAreas() {
  return (
    <section id="areas" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-2">
            <div className="section-tag">Where We Work</div>
            <h2
              className="font-display font-700 mb-5 leading-tight"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)", fontWeight: 700, color: "hsl(215 58% 10%)" }}
            >
              Serving All of{" "}
              <span style={{ color: "hsl(25 100% 50%)" }}>Johannesburg</span>
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: "hsl(215 15% 46%)" }}>
              We cover the full Johannesburg metro area including all suburbs north, south, east, and west. If you're in Gauteng and not sure if we cover your area, just give us a call.
            </p>
            <div
              className="rounded-xl p-5 mb-6"
              style={{
                background: "hsl(25 100% 50% / 0.08)",
                border: "1px solid hsl(25 100% 50% / 0.2)",
              }}
            >
              <div className="flex items-start gap-3">
                <MapPin size={20} style={{ color: "hsl(25 100% 50%)", flexShrink: 0, marginTop: "2px" }} strokeWidth={2.5} />
                <div>
                  <p className="text-sm font-semibold mb-1" style={{ color: "hsl(215 58% 10%)" }}>
                    Not in our listed areas?
                  </p>
                  <p className="text-sm" style={{ color: "hsl(215 15% 46%)" }}>
                    Call us — we often travel beyond these areas for larger jobs or regular clients.
                  </p>
                </div>
              </div>
            </div>
            <a href="tel:+27110000000" className="btn-primary" style={{ fontSize: "0.9rem" }}>
              <MapPin size={16} />
              Check My Area
            </a>
          </div>

          <div className="lg:col-span-3">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {areas.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-2 px-3.5 py-2.5 rounded-lg transition-all duration-200 cursor-default group"
                  style={{
                    background: "hsl(210 20% 97%)",
                    border: "1px solid hsl(215 20% 90%)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "hsl(25 100% 50% / 0.08)";
                    (e.currentTarget as HTMLElement).style.borderColor = "hsl(25 100% 50% / 0.25)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "hsl(210 20% 97%)";
                    (e.currentTarget as HTMLElement).style.borderColor = "hsl(215 20% 90%)";
                  }}
                >
                  <MapPin size={12} style={{ color: "hsl(25 100% 50%)", flexShrink: 0 }} strokeWidth={2.5} />
                  <span className="text-sm font-medium" style={{ color: "hsl(215 40% 22%)" }}>{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

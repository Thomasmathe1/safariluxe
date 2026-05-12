import { Phone, Clock } from "lucide-react";

export function EmergencyBanner() {
  return (
    <div className="w-full py-2.5 px-4" style={{ background: "hsl(25 100% 50%)" }}>
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-white text-sm font-medium">
        <div className="flex items-center gap-2">
          <Clock size={14} strokeWidth={2.5} />
          <span className="font-semibold tracking-wide">24/7 EMERGENCY PLUMBING</span>
        </div>
        <div className="hidden sm:block w-px h-4 bg-white/40" />
        <a
          href="tel:+27110000000"
          className="flex items-center gap-2 hover:underline font-bold transition-opacity hover:opacity-90"
        >
          <Phone size={14} strokeWidth={2.5} />
          <span>Call Now: 011 000 0000</span>
        </a>
        <div className="hidden sm:block w-px h-4 bg-white/40" />
        <span className="text-white/90 text-xs">Johannesburg &amp; Surrounding Areas</span>
      </div>
    </div>
  );
}

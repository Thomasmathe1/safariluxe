import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/27820000000?text=Hi%20Pieter%2C%20I%20need%20a%20plumber!"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
      style={{
        background: "#25D366",
        borderRadius: "50px",
        padding: "0.75rem 1.25rem",
        boxShadow: "0 4px 24px rgba(37, 211, 102, 0.4)",
      }}
    >
      <MessageCircle size={22} className="text-white" strokeWidth={2.5} fill="white" />
      <span className="text-white font-semibold text-sm font-display hidden sm:inline" style={{ fontFamily: "'Poppins', sans-serif" }}>
        WhatsApp Us
      </span>
    </a>
  );
}

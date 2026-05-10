import { FaWhatsapp } from "react-icons/fa";

export function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      <div
        className="absolute right-full mr-4 top-1/2 -translate-x-0 -translate-y-1/2 px-4 py-2 text-foreground text-xs rounded-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap font-medium tracking-wide"
        style={{
          background: "linear-gradient(135deg, hsl(158 42% 10% / 0.95), hsl(0 0% 7% / 0.95))",
          backdropFilter: "blur(16px)",
          border: "1px solid hsl(46 65% 52% / 0.2)",
          boxShadow: "0 4px 20px hsl(0 0% 0% / 0.5)"
        }}
      >
        Chat with us on WhatsApp
      </div>

      <a
        href="https://wa.me/27115550199"
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 text-white rounded-full transition-transform duration-300 hover:scale-110"
        style={{
          background: "linear-gradient(135deg, #2de26f 0%, #25D366 50%, #1da851 100%)",
          boxShadow: "0 4px 20px hsl(142 60% 45% / 0.45), 0 2px 8px hsl(0 0% 0% / 0.4)"
        }}
        data-testid="whatsapp-button"
      >
        <span
          className="absolute inset-0 rounded-full animate-ping"
          style={{
            border: "2px solid #25D366",
            opacity: 0.5
          }}
        />
        <FaWhatsapp size={28} />
      </a>
    </div>
  );
}

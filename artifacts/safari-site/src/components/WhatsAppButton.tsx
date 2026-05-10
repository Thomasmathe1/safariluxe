import { FaWhatsapp } from "react-icons/fa";

export function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      {/* Tooltip */}
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-card text-foreground text-sm rounded shadow-lg border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap">
        Chat with us on WhatsApp
      </div>
      
      <a 
        href="https://wa.me/1234567890" 
        target="_blank" 
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
      >
        {/* Pulsing ring */}
        <span className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping" />
        <FaWhatsapp size={28} />
      </a>
    </div>
  );
}

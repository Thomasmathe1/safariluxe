import { useState, useEffect } from "react";
import { Menu, X, Phone, Wrench } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Areas", href: "#areas" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header
      className="sticky top-0 z-50 w-full transition-all duration-300"
      style={{
        background: scrolled ? "hsl(215 58% 8%)" : "hsl(215 58% 10%)",
        boxShadow: scrolled ? "0 2px 20px hsl(215 58% 5% / 0.5)" : "none",
        borderBottom: "1px solid hsl(215 40% 18%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-18">
          <a href="#" className="flex items-center gap-2.5 group" onClick={handleLinkClick}>
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: "hsl(25 100% 50%)" }}
            >
              <Wrench size={18} className="text-white" strokeWidth={2.5} />
            </div>
            <div>
              <span
                className="block font-display font-700 text-white leading-tight text-[15px] tracking-wide"
                style={{ fontWeight: 700 }}
              >
                PIETER THE PLUMBER
              </span>
              <span className="block text-[10px] tracking-[0.15em] uppercase" style={{ color: "hsl(25 100% 65%)" }}>
                Johannesburg Plumbing Experts
              </span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-2 text-sm font-medium rounded-md transition-all duration-200"
                style={{ color: "hsl(215 15% 75%)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "white";
                  (e.currentTarget as HTMLElement).style.background = "hsl(215 50% 18%)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "hsl(215 15% 75%)";
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+27110000000"
              className="flex items-center gap-2 text-sm font-medium transition-colors duration-200"
              style={{ color: "hsl(215 15% 75%)" }}
              onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = "white"}
              onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = "hsl(215 15% 75%)"}
            >
              <Phone size={15} strokeWidth={2.5} />
              <span>011 000 0000</span>
            </a>
            <a href="#contact" className="btn-primary" style={{ padding: "0.55rem 1.25rem", fontSize: "0.82rem" }}>
              Get a Free Quote
            </a>
          </div>

          <button
            className="lg:hidden p-2 rounded-md transition-colors duration-200"
            style={{ color: "hsl(215 15% 75%)" }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          className="lg:hidden border-t"
          style={{
            background: "hsl(215 58% 8%)",
            borderColor: "hsl(215 40% 18%)",
          }}
        >
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleLinkClick}
                className="px-4 py-3 text-sm font-medium rounded-md transition-all duration-200"
                style={{ color: "hsl(215 15% 75%)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "white";
                  (e.currentTarget as HTMLElement).style.background = "hsl(215 50% 16%)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "hsl(215 15% 75%)";
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                }}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 pt-3 flex flex-col gap-2.5" style={{ borderTop: "1px solid hsl(215 40% 18%)" }}>
              <a
                href="tel:+27110000000"
                className="flex items-center gap-2 px-4 py-3 rounded-md text-sm font-medium"
                style={{ background: "hsl(215 50% 16%)", color: "white" }}
              >
                <Phone size={16} strokeWidth={2.5} />
                <span>011 000 0000</span>
              </a>
              <a
                href="#contact"
                onClick={handleLinkClick}
                className="btn-primary text-center"
                style={{ padding: "0.75rem 1rem" }}
              >
                Get a Free Quote
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

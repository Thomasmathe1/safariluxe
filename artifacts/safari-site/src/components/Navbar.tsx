import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string | null>(null);

  const { i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {
      name: i18n.language === "en" ? "Destinations" : "Destinations",
      href: "#destinations",
    },
    {
      name: i18n.language === "en" ? "About" : "À propos",
      href: "#about",
    },
    {
      name: i18n.language === "en" ? "Experience" : "Expérience",
      href: "#experience",
    },
    {
      name: i18n.language === "en" ? "Contact" : "Contact",
      href: "#contact",
    },
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <div className="cursor-pointer">
            <h1 className="text-white text-2xl font-serif tracking-wide">
              Safariluxe
            </h1>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setActiveLink(link.href)}
              className={`text-sm uppercase tracking-[0.2em] transition-colors duration-300 ${
                activeLink === link.href
                  ? "text-primary"
                  : "text-white/80 hover:text-primary"
              }`}
            >
              {link.name}
            </a>
          ))}

          <button
            onClick={() =>
              i18n.changeLanguage(i18n.language === "en" ? "fr" : "en")
            }
            className="border border-white/20 px-3 py-1 rounded text-sm text-white hover:border-primary hover:text-primary transition-all"
          >
            {i18n.language === "en" ? "FR" : "EN"}
          </button>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-xl"
          >
            <div className="flex flex-col px-6 py-6 gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    setActiveLink(link.href);
                    setMobileMenuOpen(false);
                  }}
                  className="text-white/80 uppercase tracking-[0.2em] text-sm hover:text-primary"
                >
                  {link.name}
                </a>
              ))}

              <button
                onClick={() =>
                  i18n.changeLanguage(i18n.language === "en" ? "fr" : "en")
                }
                className="border border-white/20 px-3 py-2 rounded text-sm text-white"
              >
                {i18n.language === "en" ? "FR" : "EN"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

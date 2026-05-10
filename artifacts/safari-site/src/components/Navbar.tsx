import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "wouter";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Destinations", href: "#destinations" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id.substring(1));
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "py-3" : "bg-transparent py-6"
        }`}
        style={
          isScrolled
            ? {
                background:
                  "linear-gradient(180deg, hsl(0 0% 6% / 0.92) 0%, hsl(158 42% 8% / 0.82) 100%)",
                backdropFilter: "blur(24px) saturate(1.8)",
                WebkitBackdropFilter: "blur(24px) saturate(1.8)",
                borderBottom: "1px solid hsl(46 65% 52% / 0.1)",
                boxShadow:
                  "0 1px 0 hsl(46 65% 52% / 0.08), 0 12px 40px hsl(0 0% 0% / 0.45)",
              }
            : {}
        }
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/">
            <motion.span
              className="font-serif text-2xl font-bold tracking-wider text-primary cursor-pointer select-none"
              style={{ textShadow: "0 0 30px hsl(46 65% 52% / 0.35)" }}
              whileHover={{ textShadow: "0 0 40px hsl(46 65% 52% / 0.6)" }}
              transition={{ duration: 0.3 }}
            >
              SAFARILUXE
            </motion.span>
          </Link>

          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                onMouseEnter={() => setActiveLink(link.name)}
                onMouseLeave={() => setActiveLink(null)}
                className="text-xs tracking-[0.22em] uppercase text-foreground/70 hover:text-primary transition-all duration-350 relative group py-1"
              >
                {link.name}
                <motion.span
                  className="absolute -bottom-0.5 left-0 h-[1px] bg-gradient-to-r from-primary to-primary/0"
                  animate={{ width: activeLink === link.name ? "100%" : "0%" }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </a>
            ))}

            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, "#contact")}
              className="group relative text-xs tracking-[0.18em] uppercase px-5 py-2.5 text-primary transition-all duration-350 overflow-hidden"
              style={{
                border: "1px solid hsl(46 65% 52% / 0.55)",
                backdropFilter: "blur(10px)",
              }}
            >
              <span className="relative z-10 group-hover:text-primary-foreground transition-colors duration-300">
                Enquire
              </span>
              <motion.span
                className="absolute inset-0 bg-primary"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </a>
          </div>

          <motion.button
            className="md:hidden text-primary focus:outline-none p-1.5"
            onClick={() => setMobileMenuOpen(true)}
            data-testid="mobile-menu-open"
            whileTap={{ scale: 0.9 }}
          >
            <Menu size={26} />
          </motion.button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex flex-col justify-center items-center"
            style={{
              background:
                "linear-gradient(160deg, hsl(158 42% 6%) 0%, hsl(0 0% 4%) 100%)",
              backdropFilter: "blur(30px)",
              WebkitBackdropFilter: "blur(30px)",
            }}
          >
            <div
              className="absolute inset-0 opacity-15 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(ellipse 70% 70% at 50% 40%, hsl(158 42% 20%) 0%, transparent 70%)",
              }}
            />

            <motion.button
              className="absolute top-6 right-6 text-primary p-2 hover:bg-primary/10 rounded-full transition-colors"
              onClick={() => setMobileMenuOpen(false)}
              data-testid="mobile-menu-close"
              whileTap={{ scale: 0.9 }}
            >
              <X size={30} />
            </motion.button>

            <div className="flex flex-col items-center space-y-10 relative z-10">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ delay: i * 0.08, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="font-serif text-4xl text-foreground/88 hover:text-primary transition-colors duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-400" />
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-14 flex flex-col items-center gap-3"
            >
              <div
                className="w-10 h-[1px]"
                style={{ background: "linear-gradient(90deg, transparent, hsl(46 65% 52% / 0.4), transparent)" }}
              />
              <p className="text-xs tracking-[0.35em] uppercase text-primary/45">SAFARILUXE</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

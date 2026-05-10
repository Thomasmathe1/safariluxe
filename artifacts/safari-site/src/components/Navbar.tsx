import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "wouter";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
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
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "py-3 border-b border-primary/15"
            : "bg-transparent py-6"
        }`}
        style={isScrolled ? {
          background: "linear-gradient(180deg, hsl(0 0% 7% / 0.88) 0%, hsl(158 42% 10% / 0.75) 100%)",
          backdropFilter: "blur(20px) saturate(1.6)",
          WebkitBackdropFilter: "blur(20px) saturate(1.6)",
          boxShadow: "0 1px 0 hsl(46 65% 52% / 0.12), 0 8px 32px hsl(0 0% 0% / 0.4)"
        } : {}}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/">
            <span
              className="font-serif text-2xl font-bold tracking-wider text-primary cursor-pointer"
              style={{ textShadow: "0 0 30px hsl(46 65% 52% / 0.3)" }}
            >
              SAFARILUXE
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-xs tracking-[0.2em] uppercase text-foreground/75 hover:text-primary transition-all duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, "#contact")}
              className="text-xs tracking-[0.15em] uppercase px-5 py-2 border border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              style={{ backdropFilter: "blur(8px)" }}
            >
              Enquire
            </a>
          </div>

          <button
            className="md:hidden text-primary focus:outline-none p-1"
            onClick={() => setMobileMenuOpen(true)}
            data-testid="mobile-menu-open"
          >
            <Menu size={26} />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex flex-col justify-center items-center"
            style={{
              background: "linear-gradient(160deg, hsl(158 42% 7%) 0%, hsl(0 0% 5%) 100%)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
            }}
          >
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: "radial-gradient(ellipse 60% 60% at 50% 50%, hsl(158 42% 18%) 0%, transparent 70%)"
              }}
            />
            <button
              className="absolute top-6 right-6 text-primary p-2 hover:bg-primary/10 rounded-full transition-colors"
              onClick={() => setMobileMenuOpen(false)}
              data-testid="mobile-menu-close"
            >
              <X size={30} />
            </button>
            <div className="flex flex-col items-center space-y-10 relative z-10">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="font-serif text-4xl text-foreground/90 hover:text-primary transition-colors duration-300"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-12 text-xs tracking-[0.3em] uppercase text-primary/50"
            >
              SAFARILUXE
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

export function Footer() {
  return (
    <footer id="contact" className="bg-background pt-24 pb-12 border-t border-primary/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2">
            <h2 className="font-serif text-3xl text-primary mb-6">AURUM SAFARIS</h2>
            <p className="text-foreground/70 font-light max-w-sm mb-8">
              Curating exceptional journeys through the continent's most pristine environments. Redefining wilderness luxury.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground/70 hover:text-primary hover:border-primary transition-all">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground/70 hover:text-primary hover:border-primary transition-all">
                <FaFacebookF size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground/70 hover:text-primary hover:border-primary transition-all">
                <FaTwitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground/70 hover:text-primary hover:border-primary transition-all">
                <FaYoutube size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-foreground font-medium uppercase tracking-widest text-sm mb-6">Contact</h4>
            <ul className="space-y-4 text-foreground/70 font-light">
              <li>
                <a href="mailto:concierge@aurumsafaris.com" className="hover:text-primary transition-colors">
                  concierge@aurumsafaris.com
                </a>
              </li>
              <li>
                <a href="tel:+18005551234" className="hover:text-primary transition-colors">
                  +1 (800) 555-1234
                </a>
              </li>
              <li className="pt-4">
                <p>124 Safari Way, Sandton</p>
                <p>Johannesburg, South Africa</p>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-medium uppercase tracking-widest text-sm mb-6">Quick Links</h4>
            <ul className="space-y-4 text-foreground/70 font-light">
              <li><a href="#destinations" className="hover:text-primary transition-colors">Destinations</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Journal</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light text-foreground/50">
          <p>&copy; {new Date().getFullYear()} Aurum Safaris. All rights reserved.</p>
          <p>Designed for the Extraordinary</p>
        </div>
      </div>
    </footer>
  );
}

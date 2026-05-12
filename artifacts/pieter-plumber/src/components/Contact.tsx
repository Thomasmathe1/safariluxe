import { useState } from "react";
import { Phone, MessageCircle, Clock, CheckCircle, Send, Loader2 } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "011 000 0000",
    sub: "Mon–Sat: 7am–6pm",
    href: "tel:+27110000000",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+27 82 000 0000",
    sub: "Quick quotes via WhatsApp",
    href: "https://wa.me/27820000000",
  },
  {
    icon: Clock,
    label: "Emergency Line",
    value: "011 000 0001",
    sub: "24/7 — nights & weekends",
    href: "tel:+27110000001",
  },
];

export function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1200);
  };

  const inputStyle = {
    width: "100%",
    padding: "0.75rem 1rem",
    background: "hsl(215 50% 14%)",
    border: "1px solid hsl(215 40% 22%)",
    borderRadius: "0.5rem",
    color: "white",
    fontSize: "0.9rem",
    outline: "none",
    transition: "border-color 0.2s ease",
  };

  return (
    <section id="contact" className="py-20 md:py-28" style={{ background: "hsl(215 58% 10%)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          <div className="lg:col-span-2">
            <div className="section-tag-white">Get In Touch</div>
            <h2
              className="font-display font-700 text-white mb-5 leading-tight"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)", fontWeight: 700 }}
            >
              Request a{" "}
              <span style={{ color: "hsl(25 100% 58%)" }}>Free Quote</span>
            </h2>
            <p className="text-base mb-10 leading-relaxed" style={{ color: "hsl(215 15% 60%)" }}>
              Fill in the form and we'll get back to you within 2 hours during business hours. For emergencies, call our 24/7 line.
            </p>

            <div className="flex flex-col gap-5">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-center gap-4 group"
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-200"
                      style={{
                        background: "hsl(215 50% 17%)",
                        border: "1px solid hsl(215 40% 24%)",
                      }}
                    >
                      <Icon size={18} style={{ color: "hsl(25 100% 60%)" }} strokeWidth={2} />
                    </div>
                    <div>
                      <span className="block text-xs uppercase tracking-wider mb-0.5" style={{ color: "hsl(215 15% 50%)" }}>
                        {info.label}
                      </span>
                      <span className="block font-semibold text-white text-sm group-hover:text-orange-400 transition-colors duration-200">
                        {info.value}
                      </span>
                      <span className="block text-xs" style={{ color: "hsl(215 15% 50%)" }}>
                        {info.sub}
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-3">
            <div
              className="rounded-2xl p-7 md:p-8"
              style={{
                background: "hsl(215 55% 13%)",
                border: "1px solid hsl(215 40% 20%)",
              }}
            >
              {sent ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
                    style={{ background: "hsl(25 100% 50% / 0.15)" }}
                  >
                    <CheckCircle size={32} style={{ color: "hsl(25 100% 58%)" }} />
                  </div>
                  <h3 className="font-display font-600 text-white text-xl mb-3" style={{ fontWeight: 600 }}>
                    Message Received!
                  </h3>
                  <p style={{ color: "hsl(215 15% 60%)" }} className="text-sm leading-relaxed max-w-sm">
                    Thanks for reaching out. Pieter or his team will contact you within 2 hours during business hours.
                  </p>
                  <button
                    className="mt-6 text-sm"
                    style={{ color: "hsl(25 100% 60%)" }}
                    onClick={() => { setSent(false); setForm({ name: "", phone: "", email: "", service: "", message: "" }); }}
                  >
                    Send another message →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider mb-1.5" style={{ color: "hsl(215 15% 55%)" }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        style={inputStyle}
                        onFocus={(e) => (e.target.style.borderColor = "hsl(25 100% 50% / 0.6)")}
                        onBlur={(e) => (e.target.style.borderColor = "hsl(215 40% 22%)")}
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider mb-1.5" style={{ color: "hsl(215 15% 55%)" }}>
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder="e.g. 082 000 0000"
                        style={inputStyle}
                        onFocus={(e) => (e.target.style.borderColor = "hsl(25 100% 50% / 0.6)")}
                        onBlur={(e) => (e.target.style.borderColor = "hsl(215 40% 22%)")}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider mb-1.5" style={{ color: "hsl(215 15% 55%)" }}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "hsl(25 100% 50% / 0.6)")}
                      onBlur={(e) => (e.target.style.borderColor = "hsl(215 40% 22%)")}
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider mb-1.5" style={{ color: "hsl(215 15% 55%)" }}>
                      Service Required *
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      required
                      style={{ ...inputStyle, cursor: "pointer" }}
                      onFocus={(e) => (e.target.style.borderColor = "hsl(25 100% 50% / 0.6)")}
                      onBlur={(e) => (e.target.style.borderColor = "hsl(215 40% 22%)")}
                    >
                      <option value="">Select a service...</option>
                      <option>Geyser Installation or Repair</option>
                      <option>Emergency Plumbing</option>
                      <option>Leak Detection</option>
                      <option>Burst Pipe Repair</option>
                      <option>Blocked Drain</option>
                      <option>Bathroom / Kitchen Plumbing</option>
                      <option>Commercial Plumbing</option>
                      <option>Maintenance &amp; Inspection</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider mb-1.5" style={{ color: "hsl(215 15% 55%)" }}>
                      Describe the Problem
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us a bit about the issue or job..."
                      style={{ ...inputStyle, resize: "vertical", minHeight: "100px" }}
                      onFocus={(e) => (e.target.style.borderColor = "hsl(25 100% 50% / 0.6)")}
                      onBlur={(e) => (e.target.style.borderColor = "hsl(215 40% 22%)")}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary mt-1"
                    style={{ width: "100%", opacity: loading ? 0.8 : 1 }}
                  >
                    {loading ? (
                      <><Loader2 size={16} className="animate-spin" /> Sending...</>
                    ) : (
                      <><Send size={16} /> Send Request</>
                    )}
                  </button>
                  <p className="text-xs text-center" style={{ color: "hsl(215 15% 45%)" }}>
                    We respond within 2 hours during business hours. No spam, ever.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

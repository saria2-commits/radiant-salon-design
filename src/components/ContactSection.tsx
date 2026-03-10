import { motion } from "framer-motion";
import { Phone, MapPin, Instagram, Facebook, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, hsl(338 50% 30% / 0.8), hsl(338 70% 45% / 0.75), hsl(38 60% 50% / 0.65))' }}>
      <div className="absolute top-10 left-10 w-72 h-72 bg-rose-glow opacity-20" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/70">تواصلي معنا</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mt-2">
            <span className="italic text-gold">اتصلي</span> بنا
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <div className="p-6 rounded-2xl bg-primary-foreground/10 border border-primary-foreground/20 backdrop-blur-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary-foreground/20 flex items-center justify-center shrink-0">
                <Phone size={20} className="text-gold" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-primary-foreground mb-1">احجزي موعدك</h3>
                <a href="tel:+963931431668" className="text-gold hover:underline text-sm" dir="ltr">+963 931 431 668</a>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-primary-foreground/10 border border-primary-foreground/20 backdrop-blur-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary-foreground/20 flex items-center justify-center shrink-0">
                <MapPin size={20} className="text-gold" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-primary-foreground mb-1">موقعنا</h3>
                <p className="text-sm text-primary-foreground/80">G6QP+5MW، دمشق، سوريا</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-primary-foreground/10 border border-primary-foreground/20 backdrop-blur-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary-foreground/20 flex items-center justify-center shrink-0">
                <Clock size={20} className="text-gold" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-primary-foreground mb-1">ساعات العمل</h3>
                <p className="text-sm text-primary-foreground/80">يومياً: ١٠:٠٠ صباحاً – ٩:٠٠ مساءً</p>
              </div>
            </div>

            <div className="flex gap-4 pt-2">
              <a
                href="https://www.instagram.com/nuorbeauty?igsh=MXZ5enBwam9pdDAwbw=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-gold flex items-center justify-center text-primary-foreground hover:opacity-90 transition"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/Nour.Alashkar.26"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-primary-foreground hover:opacity-90 transition"
              >
                <Facebook size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden border border-border h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps?q=G6QP%2B5MW+Damascus+Syria&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="موقع صالون نور للتجميل"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

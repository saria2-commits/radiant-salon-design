import { motion } from "framer-motion";
import { Phone, MapPin, Instagram, Facebook, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-cream relative overflow-hidden">
      <div className="absolute top-10 right-10 w-72 h-72 bg-rose-glow opacity-30" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">Get in Touch</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-2">
            Contact <span className="text-gradient italic">Us</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <div className="p-6 rounded-2xl bg-background border border-border flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-rose-light flex items-center justify-center shrink-0">
                <Phone size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-1">Book an Appointment</h3>
                <a href="tel:+963931431668" className="text-primary hover:underline text-sm">+963 931 431 668</a>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-background border border-border flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-rose-light flex items-center justify-center shrink-0">
                <MapPin size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-1">Our Location</h3>
                <p className="text-sm text-muted-foreground">G6QP+5MW, Damascus, Syria</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-background border border-border flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-rose-light flex items-center justify-center shrink-0">
                <Clock size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-1">Working Hours</h3>
                <p className="text-sm text-muted-foreground">Daily: 10:00 AM – 9:00 PM</p>
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-4 pt-2">
              <a
                href="https://www.instagram.com/nuorbeauty?igsh=MXZ5enBwam9pdDAwbw=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-primary-foreground hover:opacity-90 transition"
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

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
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
              title="Noor Beauty Salon Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

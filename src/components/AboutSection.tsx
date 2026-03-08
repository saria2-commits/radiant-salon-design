import { motion } from "framer-motion";
import { Heart, Award, Clock } from "lucide-react";
import logo from "@/assets/logo.png";

const stats = [
  { icon: Heart, label: "Happy Clients", value: "2,000+" },
  { icon: Award, label: "Years Experience", value: "8+" },
  { icon: Clock, label: "Services Offered", value: "25+" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-rose-glow opacity-50" />
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
              <div className="absolute inset-0 rounded-full bg-rose-light animate-pulse-glow" />
              <img
                src={logo}
                alt="Noor Beauty Salon"
                className="relative z-10 w-full h-full rounded-full object-cover shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">About Us</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
              Beauty is Our <span className="text-gradient italic">Passion</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              At Noor Beauty Salon, we believe every woman deserves to feel radiant. Located in the heart of Damascus, our team of skilled artists brings together years of experience and a passion for perfection.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              From bridal makeup to everyday glam, skincare treatments to stunning hairstyles — we craft looks that celebrate your unique beauty and leave you feeling confident and luminous.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="text-center p-4 rounded-xl bg-card border border-border">
                  <s.icon className="mx-auto mb-2 text-primary" size={22} />
                  <div className="font-heading text-2xl font-bold text-foreground">{s.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

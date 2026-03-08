import { motion } from "framer-motion";
import { Palette, Scissors, Sparkles, Heart, Star, Gem } from "lucide-react";

const services = [
  { icon: Palette, title: "Bridal Makeup", desc: "Stunning looks for your special day with premium products and expert artistry." },
  { icon: Sparkles, title: "Party & Glam", desc: "Dazzling makeup for events, parties, and special occasions that turn heads." },
  { icon: Scissors, title: "Hair Styling", desc: "From elegant updos to modern cuts, we create styles that define you." },
  { icon: Heart, title: "Skincare", desc: "Professional facial treatments and skincare routines for a radiant glow." },
  { icon: Star, title: "Nail Art", desc: "Exquisite nail designs from classic manicures to intricate nail art." },
  { icon: Gem, title: "Lash & Brow", desc: "Perfect your frame with lash extensions, tinting, and brow shaping." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-cream relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">What We Offer</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-2">
            Our <span className="text-gradient italic">Services</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative p-8 rounded-2xl bg-background border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl cursor-pointer"
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity shimmer" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-rose-light flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <s.icon size={24} className="text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

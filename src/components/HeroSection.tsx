import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay" />
      </div>

      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-primary-foreground/30"
          style={{ left: `${15 + i * 15}%`, top: `${20 + (i % 3) * 25}%` }}
          animate={{ y: [0, -30, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.5 }}
        />
      ))}

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-4 py-1.5 mb-6"
            animate={{ boxShadow: ["0 0 15px hsl(338 70% 55% / 0.3)", "0 0 30px hsl(338 70% 55% / 0.5)", "0 0 15px hsl(338 70% 55% / 0.3)"] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Sparkles size={14} className="text-gold" />
            <span className="text-sm font-body text-primary-foreground/90">حيث يلتقي الجمال بالأناقة</span>
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 leading-tight"
        >
          صالون{" "}
          <span className="italic font-medium">نور</span>
          <br />
          للتجميل
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-lg mx-auto text-primary-foreground/80 text-lg md:text-xl font-body font-light mb-10"
        >
          اكتشفي فن الجمال في قلب دمشق. نصنع لكِ إطلالات لا تُنسى في أجمل لحظاتك.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="tel:+963931431668"
            className="rounded-full bg-primary-foreground px-8 py-3.5 text-sm font-semibold text-primary hover:scale-105 transition-transform shadow-lg"
          >
            احجزي موعدك الآن
          </a>
          <a
            href="#portfolio"
            className="rounded-full border border-primary-foreground/40 px-8 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/10 transition"
          >
            شاهدي أعمالنا
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;

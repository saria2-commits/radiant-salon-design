import { motion } from "framer-motion";
import { Heart, Award, Clock } from "lucide-react";
import logo from "@/assets/logo.png";

const stats = [
  { icon: Heart, label: "عميلة سعيدة", value: "+٢٠٠٠" },
  { icon: Award, label: "سنوات خبرة", value: "+٨" },
  { icon: Clock, label: "خدمة متنوعة", value: "+٢٥" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-rose-glow opacity-50" />
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
              <div className="absolute inset-0 rounded-full bg-rose-light animate-pulse-glow" />
              <img
                src={logo}
                alt="صالون نور للتجميل"
                className="relative z-10 w-full h-full rounded-full object-cover shadow-2xl"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">من نحن</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
              الجمال هو <span className="text-gradient italic">شغفنا</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              في صالون نور للتجميل، نؤمن بأن كل امرأة تستحق أن تشعر بالتألق والإشراق. يقع صالوننا في قلب دمشق، ويضم فريقاً من الفنانات المحترفات اللواتي يجمعن بين سنوات من الخبرة والشغف بالكمال.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              من مكياج العرائس إلى الإطلالات اليومية، ومن علاجات البشرة إلى أروع التسريحات — نبتكر لكِ إطلالات تحتفي بجمالك الفريد وتمنحك الثقة والتألق.
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

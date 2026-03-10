import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "لينا م.",
    text: "صالون نور جعل يوم زفافي سحرياً بكل معنى الكلمة! المكياج كان مثالياً واستمر طوال الليل. لم أكن لأتمنى أفضل من ذلك.",
    rating: 5,
  },
  {
    name: "سارة ك.",
    text: "أفضل صالون في دمشق! كل زيارة تشعرك بتجربة فاخرة. الفريق موهوب ومحترف ودائماً مواكب لأحدث صيحات الجمال.",
    rating: 5,
  },
  {
    name: "ريم أ.",
    text: "أتردد على الصالون منذ أكثر من سنتين للعناية بالبشرة والشعر. بشرتي لم تبدُ بهذا الجمال من قبل. أنصح بشدة بعلاجات الوجه!",
    rating: 5,
  },
  {
    name: "دينا ح.",
    text: "فن أظافر مذهل وأجواء ترحيبية رائعة. الاهتمام بالتفاصيل لا يُصدق. هذا المكان المفضل لدي لأي مناسبة أو احتفال.",
    rating: 5,
  },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, hsl(338 50% 30% / 0.8), hsl(338 70% 45% / 0.75), hsl(38 60% 50% / 0.7))' }}>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-rose-glow opacity-20" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/70">آراء العملاء</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mt-2">
            ماذا تقول <span className="italic text-gold">عميلاتنا</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="p-6 rounded-2xl bg-primary-foreground/10 border border-primary-foreground/20 backdrop-blur-sm hover:bg-primary-foreground/15 transition-shadow"
            >
              <Quote size={24} className="text-primary/30 mb-3 scale-x-[-1]" />
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{r.text}</p>
              <div className="flex items-center justify-between">
                <span className="font-heading font-semibold text-foreground">{r.name}</span>
                <div className="flex gap-0.5">
                  {[...Array(r.rating)].map((_, j) => (
                    <Star key={j} size={14} className="fill-gold text-gold" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;

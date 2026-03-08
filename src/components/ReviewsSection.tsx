import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Lina M.",
    text: "Noor Beauty Salon made my wedding day absolutely magical! The bridal makeup was flawless, and it lasted all night. I couldn't have asked for better.",
    rating: 5,
  },
  {
    name: "Sara K.",
    text: "The best salon in Damascus! Every visit feels like a luxury experience. The team is talented, professional, and always up to date with the latest trends.",
    rating: 5,
  },
  {
    name: "Reem A.",
    text: "I've been coming here for over 2 years for skincare and hair treatments. My skin has never looked better. Highly recommend their facial treatments!",
    rating: 5,
  },
  {
    name: "Dina H.",
    text: "Amazing nail art and the most welcoming atmosphere. The attention to detail is incredible. This is my go-to spot for any event or celebration.",
    rating: 5,
  },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-24 bg-cream relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-rose-glow opacity-40" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">Testimonials</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-2">
            What Our <span className="text-gradient italic">Clients</span> Say
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
              className="p-6 rounded-2xl bg-background border border-border hover:shadow-lg transition-shadow"
            >
              <Quote size={24} className="text-primary/30 mb-3" />
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

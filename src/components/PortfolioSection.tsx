import { motion } from "framer-motion";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";
import portfolio7 from "@/assets/portfolio-7.jpg";
import portfolio8 from "@/assets/portfolio-8.jpg";

const images = [
  { src: portfolio1, label: "مكياج احترافي" },
  { src: portfolio2, label: "فن العيون" },
  { src: portfolio3, label: "إكسسوارات عرائس" },
  { src: portfolio7, label: "فن الأظافر" },
  { src: portfolio8, label: "مكياج سهرات" },
  { src: portfolio5, label: "تسريحات شعر" },
  { src: portfolio6, label: "عناية بالبشرة" },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 relative" style={{ background: 'linear-gradient(135deg, hsl(338 70% 55% / 0.85), hsl(338 50% 30% / 0.75), hsl(38 60% 60% / 0.6))' }}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/70">أعمالنا</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mt-2">
            معرض <span className="italic text-gold">الأعمال</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={img.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
                i === 0 ? "md:row-span-2" : ""
              }`}
            >
              <img
                src={img.src}
                alt={img.label}
                className="w-full h-full object-cover aspect-square group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="font-heading text-lg font-semibold text-primary-foreground">{img.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

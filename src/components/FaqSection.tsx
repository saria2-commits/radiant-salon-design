import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "هل أحتاج لحجز موعد مسبق؟",
    a: "نعم، ننصح بالحجز قبل ٢-٣ أيام على الأقل، خاصة لمكياج العرائس والمناسبات. يمكنكِ الاتصال على الرقم +963 931 431 668 أو مراسلتنا عبر انستغرام.",
  },
  {
    q: "ما هي الماركات والمنتجات التي تستخدمونها؟",
    a: "نستخدم منتجات فاخرة من ماركات عالمية معروفة لضمان أفضل جودة ونتائج تدوم طويلاً. منتجاتنا مختارة بعناية لتناسب جميع أنواع البشرة.",
  },
  {
    q: "هل تقدمون باقات للعرائس؟",
    a: "بالتأكيد! نقدم باقات شاملة للعرائس تتضمن المكياج، تسريحة الشعر، تحضير البشرة، وجلسة تجريبية. تواصلي معنا لباقات مخصصة.",
  },
  {
    q: "هل يمكنني إحضار صور مرجعية للإطلالة المطلوبة؟",
    a: "بالطبع! نحب العمل مع صور الإلهام. أحضري أي مراجع وسنتعاون معكِ لابتكار الإطلالة المثالية التي تناسب ملامحك.",
  },
  {
    q: "ما هي ساعات العمل؟",
    a: "نعمل يومياً من الساعة ١٠:٠٠ صباحاً حتى ٩:٠٠ مساءً. لمواعيد العرائس، يمكننا استقبالكِ في ساعات مبكرة بناءً على الطلب.",
  },
  {
    q: "هل تقدمون خدمة منزلية؟",
    a: "نعم، نقدم خدمة منزلية لمكياج العرائس والمناسبات الخاصة. تُطبق رسوم إضافية حسب الموقع. يرجى التواصل معنا للتفاصيل.",
  },
];

const FaqSection = () => {
  return (
    <section id="faq" className="py-24 relative" style={{ background: 'linear-gradient(135deg, hsl(338 70% 55% / 0.85), hsl(338 50% 30% / 0.7), hsl(38 60% 60% / 0.6))' }}>
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">الأسئلة الشائعة</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-2">
            أسئلة <span className="text-gradient italic">متكررة</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-xl border border-border bg-card px-5 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="font-heading text-base font-medium text-foreground hover:text-primary hover:no-underline py-4">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;

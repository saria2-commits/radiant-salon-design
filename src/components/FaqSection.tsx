import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Do I need to book an appointment in advance?",
    a: "Yes, we recommend booking at least 2-3 days in advance, especially for bridal and event makeup. You can call us at +963 931 431 668 or message us on Instagram.",
  },
  {
    q: "What brands and products do you use?",
    a: "We use premium, internationally recognized brands to ensure the best quality and long-lasting results. Our products are carefully selected for all skin types.",
  },
  {
    q: "Do you offer bridal packages?",
    a: "Absolutely! We offer comprehensive bridal packages that include makeup, hair styling, skincare prep, and trial sessions. Contact us for customized packages.",
  },
  {
    q: "Can I bring reference photos for my look?",
    a: "Of course! We love working with inspiration photos. Bring any references and we'll collaborate to create the perfect look tailored to your features.",
  },
  {
    q: "What are your working hours?",
    a: "We are open daily from 10:00 AM to 9:00 PM. For bridal appointments, we can accommodate early morning sessions upon request.",
  },
  {
    q: "Do you offer home services?",
    a: "Yes, we provide home service for bridal makeup and special events. Additional charges apply based on location. Please contact us for details.",
  },
];

const FaqSection = () => {
  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">FAQ</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-2">
            Frequently Asked <span className="text-gradient italic">Questions</span>
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

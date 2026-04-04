import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FadeInOnScroll from "@/components/FadeInOnScroll";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  items: FAQItem[];
}

const FAQSection = ({ title = "Ofte stillede spørgsmål", items }: FAQSectionProps) => (
  <section className="py-24 md:py-40">
    <div className="container mx-auto px-4 max-w-3xl">
      <FadeInOnScroll>
        <h2 className="font-heading text-2xl md:text-3xl font-light tracking-[0.04em] text-center mb-14">{title}</h2>
      </FadeInOnScroll>
      <Accordion type="single" collapsible className="space-y-0">
        {items.map((item, i) => (
          <FadeInOnScroll key={i} delay={i * 60}>
            <AccordionItem
              value={`faq-${i}`}
              className="border-b border-border/60 px-0"
            >
              <AccordionTrigger className="text-left font-heading text-sm tracking-[0.03em] py-6 hover:no-underline text-foreground/80 hover:text-foreground">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6 font-light text-sm">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          </FadeInOnScroll>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;

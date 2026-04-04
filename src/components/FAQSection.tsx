import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  items: FAQItem[];
}

const FAQSection = ({ title = "Ofte stillede spørgsmål", items }: FAQSectionProps) => (
  <section className="py-16 md:py-24">
    <div className="container mx-auto px-4 max-w-3xl">
      <h2 className="font-serif text-3xl md:text-4xl font-semibold text-center mb-12">{title}</h2>
      <Accordion type="single" collapsible className="space-y-3">
        {items.map((item, i) => (
          <AccordionItem
            key={i}
            value={`faq-${i}`}
            className="border border-border rounded-lg px-6 bg-card"
          >
            <AccordionTrigger className="text-left font-medium py-5 hover:no-underline">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;

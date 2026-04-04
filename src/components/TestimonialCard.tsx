import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  detail?: string;
}

const TestimonialCard = ({ quote, name, detail }: TestimonialCardProps) => (
  <div className="p-8 md:p-10 flex flex-col border-t border-border/40">
    <p className="text-foreground/80 leading-relaxed font-light flex-1 mb-6">"{quote}"</p>
    <div>
      <p className="text-xs tracking-[0.1em] uppercase text-foreground">{name}</p>
      {detail && <p className="text-xs text-muted-foreground mt-1">{detail}</p>}
    </div>
  </div>
);

export default TestimonialCard;

import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  detail?: string;
}

const TestimonialCard = ({ quote, name, detail }: TestimonialCardProps) => (
  <div className="rounded-xl bg-card border border-border p-8 flex flex-col">
    <Quote size={28} className="text-secondary/50 mb-4" />
    <p className="text-foreground/90 leading-relaxed italic flex-1 mb-6">"{quote}"</p>
    <div>
      <p className="font-medium text-foreground">{name}</p>
      {detail && <p className="text-xs text-muted-foreground mt-0.5">{detail}</p>}
    </div>
  </div>
);

export default TestimonialCard;

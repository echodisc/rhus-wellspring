import { Link } from "react-router-dom";
import { ArrowRight, type LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
}

const ServiceCard = ({ icon: Icon, title, description, link }: ServiceCardProps) => (
  <Link
    to={link}
    className="group block rounded-xl bg-card border border-border p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
  >
    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-5">
      <Icon size={24} className="text-primary" />
    </div>
    <h3 className="font-serif text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
      {title}
    </h3>
    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{description}</p>
    <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
      Læs mere <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
    </span>
  </Link>
);

export default ServiceCard;

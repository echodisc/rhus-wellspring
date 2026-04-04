import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

const ServiceCard = ({ image, title, description, link }: ServiceCardProps) => (
  <Link
    to={link}
    className="group block rounded-xl bg-card border border-border overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
  >
    <div className="aspect-[4/3] overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
    </div>
    <div className="p-7">
      <h3 className="font-serif text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{description}</p>
      <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
        Læs mere <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
      </span>
    </div>
  </Link>
);

export default ServiceCard;

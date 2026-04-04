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
    className="group block bg-card overflow-hidden hover:shadow-md transition-all duration-500"
  >
    <div className="aspect-[4/3] overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        loading="lazy"
      />
    </div>
    <div className="p-8 md:p-10">
      <h3 className="font-heading text-lg tracking-[0.06em] mb-3 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-5">{description}</p>
      <span className="inline-flex items-center gap-2 text-xs tracking-[0.1em] uppercase text-foreground/60 group-hover:text-foreground transition-colors">
        Læs mere <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
      </span>
    </div>
  </Link>
);

export default ServiceCard;

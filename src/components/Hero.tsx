import { Link } from "react-router-dom";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  showSecondary?: boolean;
  secondaryText?: string;
  secondaryLink?: string;
}

const Hero = ({
  title,
  subtitle,
  ctaText = "Book en tid",
  ctaLink = "/kontakt",
  showSecondary = false,
  secondaryText = "Læs mere",
  secondaryLink = "/kropsterapi",
}: HeroProps) => (
  <section className="relative overflow-hidden bg-card py-20 md:py-32">
    {/* Decorative shapes */}
    <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/3" />
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full translate-y-1/2 -translate-x-1/3" />

    <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
      <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6 animate-fade-in-up">
        {title}
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto">
        {subtitle}
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          to={ctaLink}
          className="inline-flex items-center rounded-lg bg-primary px-8 py-3.5 text-base font-medium text-primary-foreground hover:bg-primary/90 transition-colors shadow-md"
        >
          {ctaText}
        </Link>
        {showSecondary && (
          <Link
            to={secondaryLink}
            className="inline-flex items-center rounded-lg border border-border px-8 py-3.5 text-base font-medium text-foreground hover:bg-muted transition-colors"
          >
            {secondaryText}
          </Link>
        )}
      </div>
    </div>
  </section>
);

export default Hero;

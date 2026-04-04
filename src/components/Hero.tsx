import { Link } from "react-router-dom";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  showSecondary?: boolean;
  secondaryText?: string;
  secondaryLink?: string;
  backgroundImage?: string;
  mottled?: boolean;
}

const Hero = ({
  title,
  subtitle,
  ctaText = "Book en tid",
  ctaLink = "/kontakt",
  showSecondary = false,
  secondaryText = "Læs mere",
  secondaryLink = "/kropsterapi",
  backgroundImage,
  mottled = false,
}: HeroProps) => (
  <section
    className={`relative overflow-hidden py-24 md:py-36 ${
      backgroundImage ? "" : mottled ? "bg-mottled-peach" : "bg-card"
    }`}
  >
    {backgroundImage && (
      <>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        {/* Warm mottled overlay */}
        <div className="absolute inset-0 bg-mottled-peach opacity-85" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/50" />
      </>
    )}

    <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
      <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
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

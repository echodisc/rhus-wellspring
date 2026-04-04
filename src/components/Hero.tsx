import { useEffect, useRef, useState } from "react";
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
  tall?: boolean;
}

const Hero = ({
  title,
  subtitle,
  ctaText = "BOOK EN TID",
  ctaLink = "/kontakt",
  showSecondary = false,
  secondaryText = "LÆS MERE",
  secondaryLink = "/kropsterapi",
  backgroundImage,
  mottled = false,
  tall = false,
}: HeroProps) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (!tall) return;
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [tall]);

  const parallaxStyle = tall
    ? { transform: `translateY(${scrollY * 0.4}px)` }
    : {};

  return (
    <section
      ref={heroRef}
      className={`relative overflow-hidden ${
        tall ? "min-h-[85vh] flex items-center" : "py-28 md:py-40"
      } ${backgroundImage ? "" : mottled ? "bg-mottled-peach" : "bg-card"}`}
      style={tall ? { ...parallaxStyle, willChange: "transform" } : {}}
    >
      {backgroundImage && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-background/70" />
        </>
      )}

      <div className={`container mx-auto px-4 relative z-10 text-center max-w-3xl ${tall ? "py-28 md:py-40" : ""}`}>
        <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-foreground leading-tight mb-6 tracking-[0.04em]">
          {title}
        </h1>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-12 max-w-2xl mx-auto font-light">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to={ctaLink}
            className="inline-flex items-center border border-foreground/30 px-10 py-4 text-xs tracking-[0.15em] uppercase text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
          >
            {ctaText}
          </Link>
          {showSecondary && (
            <Link
              to={secondaryLink}
              className="inline-flex items-center px-10 py-4 text-xs tracking-[0.15em] uppercase text-foreground/70 hover:text-foreground transition-colors"
            >
              {secondaryText}
            </Link>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      {tall && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-0">
          <div className="w-px h-10 bg-foreground/20" />
          <div className="w-1.5 h-1.5 rounded-full bg-foreground/30 mt-1" />
        </div>
      )}
    </section>
  );
};

export default Hero;

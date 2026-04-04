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
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (!tall) return;
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [tall]);

  if (tall) {
    return (
      <>
        {/* Fixed slow-drift background — z-0 */}
        <div
          className="fixed inset-0 overflow-hidden"
          style={{
            transform: `translateY(-${scrollY * 0.1}px)`,
            willChange: "transform",
          }}
        >
          {backgroundImage ? (
            <>
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${backgroundImage})` }}
              />
              <div className="absolute inset-0 bg-background/70" />
            </>
          ) : (
            <div className={`absolute inset-0 ${mottled ? "bg-mottled-peach" : "bg-card"}`} />
          )}
        </div>

        {/* Normal-flow spacer with text — scrolls at speed=1 */}
        <div className="h-[100vh] relative flex flex-col items-center justify-center">
          <div className="text-center max-w-3xl px-4">
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

          {/* Breathing dots */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-foreground/20 animate-[pulse_3s_ease-in-out_infinite]" />
            <span className="w-2 h-2 rounded-full bg-foreground/30 animate-[pulse_3s_ease-in-out_0.4s_infinite]" />
            <span className="w-1.5 h-1.5 rounded-full bg-foreground/20 animate-[pulse_3s_ease-in-out_0.8s_infinite]" />
          </div>
        </div>
      </>
    );
  }

  return (
    <section
      className={`relative overflow-hidden py-28 md:py-40 ${
        backgroundImage ? "" : mottled ? "bg-mottled-peach" : "bg-card"
      }`}
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

      <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
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
    </section>
  );
};

export default Hero;

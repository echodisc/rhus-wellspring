import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

interface CTABannerProps {
  headline?: string;
  subtext?: string;
  ctaText?: string;
  ctaLink?: string;
}

const CTABanner = ({
  headline = "Klar til at finde ro?",
  subtext = "Tag det første skridt mod en lettere hverdag. Book en uforpligtende samtale i dag.",
  ctaText = "BOOK EN TID",
  ctaLink = "/kontakt",
}: CTABannerProps) => (
  <section className="relative z-[1] py-14 md:py-24 bg-mottled-peach">
    <div className="container mx-auto px-4 text-center max-w-2xl">
      <h2 className="font-heading text-2xl md:text-3xl font-light tracking-[0.04em] mb-4">{headline}</h2>
      <p className="text-muted-foreground leading-relaxed mb-10 font-light">{subtext}</p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          to={ctaLink}
          className="inline-flex items-center border border-foreground/30 px-10 py-4 text-xs tracking-[0.15em] uppercase text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
        >
          {ctaText}
        </Link>
        <a
          href="tel:+4512345678"
          className="inline-flex items-center gap-2 px-10 py-4 text-xs tracking-[0.15em] uppercase text-foreground/60 hover:text-foreground transition-colors"
        >
          <Phone size={14} />
          Ring direkte
        </a>
      </div>
    </div>
  </section>
);

export default CTABanner;

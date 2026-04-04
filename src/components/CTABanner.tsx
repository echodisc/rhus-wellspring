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
  ctaText = "Book en tid",
  ctaLink = "/kontakt",
}: CTABannerProps) => (
  <section className="py-16 md:py-24 bg-mottled-peach">
    <div className="container mx-auto px-4 text-center max-w-2xl">
      <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">{headline}</h2>
      <p className="text-muted-foreground leading-relaxed mb-8">{subtext}</p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          to={ctaLink}
          className="inline-flex items-center rounded-lg bg-primary px-8 py-3.5 text-base font-medium text-primary-foreground hover:bg-primary/90 transition-colors shadow-md"
        >
          {ctaText}
        </Link>
        <a
          href="tel:+4512345678"
          className="inline-flex items-center gap-2 rounded-lg border border-border px-8 py-3.5 text-base font-medium text-foreground hover:bg-muted transition-colors"
        >
          <Phone size={18} />
          Ring direkte
        </a>
      </div>
    </div>
  </section>
);

export default CTABanner;

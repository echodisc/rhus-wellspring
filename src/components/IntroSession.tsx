import { Link } from "react-router-dom";
import FadeInOnScroll from "@/components/FadeInOnScroll";

interface IntroSessionProps {
  headline?: string;
  description?: string;
  price?: string;
  image?: string;
}

const IntroSession = ({
  headline = "Indledende samtale",
  description = "Vi starter altid med en uforpligtende samtale, hvor vi taler om dine behov og hvordan kropsterapi kan hjælpe dig. Du får en fornemmelse af min tilgang, og vi lægger en plan sammen — helt i dit tempo.",
  price = "Gratis",
  image = "/images/find-ro-4.jpg",
}: IntroSessionProps) => (
  <section className="relative z-[1] py-14 md:py-24 bg-card">
    <div className="container mx-auto px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <FadeInOnScroll>
          <img
            src={image}
            alt="Indledende samtale hos Find Ro"
            className="rounded-2xl w-full aspect-[4/5] object-cover shadow-lg"
            loading="lazy"
          />
        </FadeInOnScroll>
        <FadeInOnScroll delay={150}>
          <div>
            <p className="text-sm tracking-widest uppercase text-primary mb-4">Kom godt i gang</p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">{headline}</h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-6">{description}</p>
            <div className="flex items-baseline gap-2 mb-8">
              <span className="font-serif text-2xl font-semibold text-foreground">{price}</span>
              <span className="text-muted-foreground text-sm">· 15-20 min</span>
            </div>
            <Link
              to="/kontakt"
              className="inline-flex items-center rounded-lg bg-primary px-8 py-3.5 text-base font-medium text-primary-foreground hover:bg-primary/90 transition-colors shadow-md"
            >
              Book en samtale
            </Link>
          </div>
        </FadeInOnScroll>
      </div>
    </div>
  </section>
);

export default IntroSession;

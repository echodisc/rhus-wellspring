import FadeInOnScroll from "@/components/FadeInOnScroll";

interface IntroSessionProps {
  headline?: string;
  description?: string;
  price?: string;
  image?: string;
  onBookClick?: () => void;
}

const IntroSession = ({
  headline = "Indledende samtale",
  description = "En kort, uforpligtende samtale om dine behov og hvordan kropsterapi kan hjælpe dig. Kan foregå via telefon, video eller i klinikken.",
  price = "300 kr.",
  image = "/images/find-ro-4.jpg",
  onBookClick,
}: IntroSessionProps) => (
  <section className="relative z-[1] py-16 md:py-24 bg-card">
    <div className="container mx-auto px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <FadeInOnScroll>
          <img
            src={image}
            alt="Indledende samtale hos Find Ro"
            className="w-full aspect-[4/5] object-cover"
            loading="lazy"
          />
        </FadeInOnScroll>
        <FadeInOnScroll delay={150}>
          <div>
            <p className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground mb-4">Kom godt i gang</p>
            <h2 className="font-heading text-2xl md:text-3xl font-light tracking-[0.04em] mb-6">{headline}</h2>
            <p className="text-muted-foreground leading-relaxed mb-6 font-light">{description}</p>
            <div className="flex items-baseline gap-2 mb-8">
              <span className="font-heading text-2xl text-foreground">{price}</span>
              <span className="text-muted-foreground text-sm">· 15-20 min</span>
            </div>
            <button
              onClick={onBookClick}
              className="inline-flex items-center border border-foreground/30 px-10 py-4 text-xs tracking-[0.15em] uppercase text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
            >
              Book en samtale
            </button>
          </div>
        </FadeInOnScroll>
      </div>
    </div>
  </section>
);

export default IntroSession;

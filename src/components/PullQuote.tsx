import FadeInOnScroll from "@/components/FadeInOnScroll";

interface PullQuoteProps {
  quote: string;
  author?: string;
  background?: "warm" | "sage" | "peach";
}

const bgMap = {
  warm: "bg-mottled-warm",
  sage: "bg-mottled-sage",
  peach: "bg-mottled-peach",
};

const PullQuote = ({ quote, author, background = "warm" }: PullQuoteProps) => (
  <section className={`py-24 md:py-40 ${bgMap[background]}`}>
    <div className="container mx-auto px-4 max-w-3xl text-center">
      <FadeInOnScroll>
        <div className="w-12 h-px bg-gold mx-auto mb-8" />
        <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl italic text-foreground/80 leading-relaxed">
          "{quote}"
        </blockquote>
        {author && (
          <p className="mt-8 text-[11px] tracking-[0.15em] uppercase text-muted-foreground">
            — {author}
          </p>
        )}
        <div className="w-12 h-px bg-gold mx-auto mt-8" />
      </FadeInOnScroll>
    </div>
  </section>
);

export default PullQuote;

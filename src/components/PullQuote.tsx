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
  <section className={`py-20 md:py-32 ${bgMap[background]}`}>
    <div className="container mx-auto px-4 max-w-3xl text-center">
      <FadeInOnScroll>
        <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl italic text-foreground/85 leading-relaxed">
          "{quote}"
        </blockquote>
        {author && (
          <p className="mt-8 text-sm tracking-widest uppercase text-muted-foreground">
            — {author}
          </p>
        )}
      </FadeInOnScroll>
    </div>
  </section>
);

export default PullQuote;

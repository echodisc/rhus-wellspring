import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import CTABanner from "@/components/CTABanner";
import FadeInOnScroll from "@/components/FadeInOnScroll";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

interface PricingCardProps {
  title: string;
  price: string;
  unit: string;
  features: string[];
  highlighted?: boolean;
}

const PricingCard = ({ title, price, unit, features, highlighted }: PricingCardProps) => (
  <div
    className={`p-8 md:p-10 flex flex-col ${
      highlighted
        ? "bg-primary/5 border border-primary/10"
        : "bg-card"
    }`}
  >
    <h3 className="font-heading text-base tracking-[0.06em] mb-3">{title}</h3>
    <div className="mb-6">
      <span className="font-heading text-2xl text-foreground">{price}</span>
      <span className="text-sm text-muted-foreground ml-1">{unit}</span>
    </div>
    <ul className="space-y-3 flex-1 mb-8">
      {features.map((f, i) => (
        <li key={i} className="flex items-start gap-2.5">
          <Check size={14} strokeWidth={1.5} className="text-primary mt-0.5 shrink-0" />
          <span className="text-sm text-muted-foreground font-light">{f}</span>
        </li>
      ))}
    </ul>
    <Link
      to="/kontakt"
      className={`block text-center px-6 py-4 text-xs tracking-[0.15em] uppercase transition-all duration-300 ${
        highlighted
          ? "border border-foreground/30 text-foreground hover:bg-foreground hover:text-background"
          : "border border-border text-foreground/60 hover:text-foreground hover:border-foreground/30"
      }`}
    >
      Book nu
    </Link>
  </div>
);

const Priser = () => (
  <Layout>
    <Helmet>
      <title>Priser — Kropsterapi i Aarhus | Find Ro</title>
      <meta
        name="description"
        content="Se priser for kropsterapi hos Find Ro i Aarhus. Enkeltsessioner og fordelagtige forløbspakker. Transparent prissætning uden skjulte gebyrer."
      />
      <link rel="canonical" href="https://find-ro.dk/priser" />
    </Helmet>

    <section className="py-28 md:py-40 bg-mottled-warm">
      <div className="container mx-auto px-4 text-center max-w-2xl">
        <h1 className="font-heading text-3xl md:text-4xl font-light tracking-[0.04em] mb-4">Priser</h1>
        <p className="text-muted-foreground leading-relaxed font-light">
          Transparent prissætning. Ingen skjulte gebyrer. Investér i din krop og dit velvære.
        </p>
      </div>
    </section>

    <section className="py-24 md:py-40">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border/40 max-w-5xl mx-auto">
          <FadeInOnScroll delay={0}>
            <PricingCard
              title="Enkeltsession"
              price="750 kr"
              unit="/ 60 min"
              features={[
                "60 minutters behandling",
                "Individuel tilpasset session",
                "Inkl. kort opfølgningssamtale",
                "Ideel til at prøve kropsterapi",
              ]}
            />
          </FadeInOnScroll>
          <FadeInOnScroll delay={120}>
            <PricingCard
              title="Forløb — 5 sessioner"
              price="3.250 kr"
              unit="/ 5 × 60 min"
              highlighted
              features={[
                "5 behandlinger (spar 500 kr)",
                "Personlig behandlingsplan",
                "Opfølgning mellem sessioner",
                "Hjemmeøvelser og redskaber",
                "Anbefalet til stress & angst",
              ]}
            />
          </FadeInOnScroll>
          <FadeInOnScroll delay={240}>
            <PricingCard
              title="Forløb — 10 sessioner"
              price="5.500 kr"
              unit="/ 10 × 60 min"
              features={[
                "10 behandlinger (spar 2.000 kr)",
                "Dybdegående behandlingsplan",
                "Løbende evaluering",
                "Inkl. kropsøvelser til hjemmebrug",
                "For dybere transformation",
              ]}
            />
          </FadeInOnScroll>
        </div>
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground font-light">
            Første samtale er altid uforpligtende. Ring eller book online for at komme i gang.
          </p>
        </div>
      </div>
    </section>

    <CTABanner />
  </Layout>
);

export default Priser;

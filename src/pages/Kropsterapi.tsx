import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";
import BookingModal from "@/components/BookingModal";
import ProcessSteps from "@/components/ProcessSteps";
import TestimonialCard from "@/components/TestimonialCard";
import FadeInOnScroll from "@/components/FadeInOnScroll";
import PullQuote from "@/components/PullQuote";
import IntroSession from "@/components/IntroSession";
import ParallaxImage from "@/components/ParallaxImage";
import { Check } from "lucide-react";

const benefits = [
  "Løsner op for kroniske spændinger i krop og muskler",
  "Genopretter balance i nervesystemet",
  "Reducerer stress- og angstsymptomer",
  "Forbedrer søvnkvalitet og energiniveau",
  "Øger kropsbevidsthed og nærvær",
  "Styrker forbindelsen mellem krop og sind",
];

const faqItems = [
  {
    question: "Hvad sker der under en kropsterapisession i Aarhus?",
    answer:
      "En session varer typisk 60-90 minutter. Vi starter med en kort samtale om hvordan du har det, og derefter arbejder vi med kroppen gennem bløde berøringer, åndedræt og kropslig opmærksomhed. Alt foregår i dit tempo.",
  },
  {
    question: "Er kropsterapi det samme som massage?",
    answer:
      "Nej, kropsterapi adskiller sig fra klassisk massage ved at fokusere på nervesystemet og den emotionelle dimension. Oliemassage giver afspænding. Kropsterapi giver forløsning.",
  },
  {
    question: "Hvem kan have gavn af kropsterapi?",
    answer:
      "Alle kan have gavn af kropsterapi, men det er særligt effektivt for personer med stress, angst, søvnproblemer, kroniske smerter eller emotionelle udfordringer.",
  },
  {
    question: "Hvor lang tid tager det at mærke resultat af kropsterapi?",
    answer:
      "De fleste mærker forandring allerede efter første session — typisk en dybere afslapning og bedre søvn. For varige ændringer anbefales et forløb på 5-8 sessioner.",
  },
];

const Kropsterapi = () => {
  const [bookingOpen, setBookingOpen] = useState(false);
  return (
  <Layout>
    <Helmet>
      <title>Kropsterapi Behandling i Aarhus | Find Ro med Ida Sohn</title>
      <meta
        name="description"
        content="Professionel kropsterapi behandling i Aarhus. Helhedsorienteret tilgang til stress, spændinger og kropslig ubalance. Book hos Find Ro i dag."
      />
      <link rel="canonical" href="https://find-ro.dk/kropsterapi" />
    </Helmet>

    <Hero
      title="Kropsterapi behandling i Aarhus"
      subtitle="En helhedsorienteret behandlingsform der arbejder med din krops naturlige evne til at hele og finde balance."
      backgroundImage="/images/kropsterapibillede.jpg"
      tall
    />

    {/* What is Kropsterapi */}
    <section className="relative z-[1] py-14 md:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <FadeInOnScroll>
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-light tracking-[0.04em] mb-6">Hvad er kropsterapi?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4 font-light">
                Kropsterapi er en terapeutisk tilgang der anerkender den dybe forbindelse mellem krop
                og psyke. Når vi oplever stress, angst eller følelsesmæssige belastninger, sætter det
                sig i kroppen som spændinger, smerte eller uro.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4 font-light">
                Gennem kroppen kan vi nå ind til de lag, som samtale alene ikke altid kan nå.
                Kropsterapi bruger åndedrætsarbejde, tryk, pulseringer, zonepunkter, samtale og
                grounding til at hjælpe nervesystemet med at regulere sig selv.
              </p>
              <p className="text-muted-foreground leading-relaxed font-light">
                Hos Find Ro i Aarhus tilbyder jeg en personlig og tryg ramme, hvor du kan lande i
                kroppen og finde den ro, du har brug for.
              </p>
            </div>
          </FadeInOnScroll>
          <FadeInOnScroll delay={150}>
            <div className="bg-card p-8 md:p-10">
              <h3 className="font-heading text-base tracking-[0.06em] mb-6">Fordele ved kropsterapi</h3>
              <ul className="space-y-4">
                {benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check size={16} strokeWidth={1.5} className="text-primary mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground font-light">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeInOnScroll>
        </div>
      </div>
    </section>

    {/* Parallax divider */}
    <ParallaxImage src="/images/massage-1024x632.jpg" alt="Massage behandling hos Find Ro" />

    {/* Pull Quote */}
    <PullQuote
      quote="Gennem kroppen kan vi nå ind til de lag, som samtale alene ikke altid kan nå."
      author="Ida Sohn"
      background="peach"
    />

    {/* Massage vs Kropsterapi */}
    <section className="relative z-[1] py-14 md:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <FadeInOnScroll>
          <h2 className="font-heading text-2xl md:text-3xl font-light tracking-[0.04em] text-center mb-4">
            Oliemassage giver afspænding.<br />Kropsterapi giver forløsning.
          </h2>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto font-light">
            Begge behandlinger er nærende og hjælper kroppen til ro – men de har forskellige formål og dybde.
          </p>
        </FadeInOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FadeInOnScroll delay={0}>
            <div className="bg-card p-8 md:p-10 h-full">
              <h3 className="font-heading text-base tracking-[0.06em] mb-4">Oliemassage</h3>
              <p className="text-sm text-muted-foreground mb-4 font-light">
                <strong className="text-foreground font-normal">Fokus:</strong> Afspænding, velvære og fysisk lettelse
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground font-light">
                <li>• Har brug for at slappe af</li>
                <li>• Trænger til løsnet muskler og bindevæv</li>
                <li>• Vil have en behagelig og sanselig oplevelse</li>
                <li>• Har spændinger i nakke, skuldre, ryg eller lænd</li>
                <li>• Gerne vil prøve cupping (bindevævsmassage)</li>
              </ul>
              <p className="text-xs text-muted-foreground mt-6 italic">
                En nærende og afslappende kropsbehandling – fokus på muskler, væv og ro.
              </p>
            </div>
          </FadeInOnScroll>
          <FadeInOnScroll delay={150}>
            <div className="bg-primary/5 border border-primary/10 p-8 md:p-10 h-full">
              <h3 className="font-heading text-base tracking-[0.06em] mb-4">Kropsterapi</h3>
              <p className="text-sm text-muted-foreground mb-4 font-light">
                <strong className="text-foreground font-normal">Fokus:</strong> Sammenhæng mellem krop, følelser, nervesystem og gamle mønstre
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground font-light">
                <li>• Har stress, uro, angst der føles "dybere"</li>
                <li>• Er nysgerrig på sammenhængen mellem krop og psyke</li>
                <li>• Vil arbejde med indre mønstre og følelser</li>
                <li>• Ønsker personlig udvikling og mere kontakt til kroppen</li>
                <li>• Længes efter dyb forløsning og balance i nervesystemet</li>
              </ul>
              <p className="text-xs text-muted-foreground mt-6 italic">
                En terapeutisk behandling, hvor krop, åndedræt og følelser inddrages – fokus på indre processer og dyb forandring.
              </p>
            </div>
          </FadeInOnScroll>
        </div>
      </div>
    </section>

    {/* Parallax divider */}
    <ParallaxImage src="/images/yoga-for-alle.jpg" alt="Yoga for alle" height="min-h-[40vh]" />

    <ProcessSteps />
    <IntroSession onBookClick={() => setBookingOpen(true)} />

    {/* Testimonial */}
    <section className="relative z-[1] py-14 md:py-24 bg-card">
      <div className="container mx-auto px-4 max-w-3xl">
        <FadeInOnScroll>
          <h2 className="font-heading text-2xl md:text-3xl font-light tracking-[0.04em] text-center mb-12">
            Hvad klienter siger om kropsterapi hos Find Ro
          </h2>
          <TestimonialCard
            quote="Wow for en oplevelse! Tusind tak for at skabe et trygt rum Ida. Jeg fik virkelig løsnet op for nogle gamle ting. Jeg står tilbage med ro, glæde og taknemmelighed. Jeg er fuld af kærlighed. Jeg kommer helt sikker igen og sender gerne alle jeg kender til dig!"
            name="Klaus"
            detail="Kropsterapi"
          />
        </FadeInOnScroll>
      </div>
    </section>

    <FAQSection items={faqItems} />
    <CTABanner headline="Prøv kropsterapi i Aarhus" subtext="Book din første session og mærk forskellen. Uforpligtende og i dit tempo." />
  </Layout>
);

export default Kropsterapi;

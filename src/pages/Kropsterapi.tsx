import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";
import ProcessSteps from "@/components/ProcessSteps";
import TestimonialCard from "@/components/TestimonialCard";
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
      "Nej, kropsterapi adskiller sig fra klassisk massage ved at fokusere på nervesystemet og den emotionelle dimension. Det handler ikke bare om at løsne muskler, men om at hjælpe kroppen med at finde en dybere ro og balance.",
  },
  {
    question: "Hvem kan have gavn af kropsterapi?",
    answer:
      "Alle kan have gavn af kropsterapi, men det er særligt effektivt for personer med stress, angst, søvnproblemer, kroniske smerter eller emotionelle udfordringer. Mange kvinder i 25-45 års alderen søger kropsterapi i Aarhus.",
  },
  {
    question: "Hvor lang tid tager det at mærke resultat af kropsterapi?",
    answer:
      "Mange mærker forandring allerede efter første session — typisk en dybere afslapning og bedre søvn. For varige ændringer anbefales et forløb på 5-8 sessioner.",
  },
];

const Kropsterapi = () => (
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
      subtitle="En helhedsorienteret behandlingsform der arbejder med din krops naturlige evne til at hele og finde balance. Baseret på nærvær, tryghed og dyb kropslig forståelse."
    />

    {/* What is Kropsterapi */}
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-serif text-3xl font-semibold mb-6">Hvad er kropsterapi?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Kropsterapi er en terapeutisk tilgang der anerkender den dybe forbindelse mellem krop
              og psyke. Når vi oplever stress, angst eller følelsesmæssige belastninger, sætter det
              sig i kroppen som spændinger, smerte eller uro.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Gennem kroppen kan vi nå ind til de lag, som samtale alene ikke altid kan nå.
              Kropsterapi bruger bløde berøringer, åndedrætsøvelser og kropslig opmærksomhed til
              at hjælpe nervesystemet med at regulere sig selv.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Hos Find Ro i Aarhus tilbyder jeg en personlig og tryg ramme, hvor du kan lande i
              kroppen og finde den ro, du har brug for.
            </p>
          </div>
          <div className="bg-card rounded-2xl border border-border p-8">
            <h3 className="font-serif text-xl font-semibold mb-5">Fordele ved kropsterapi</h3>
            <ul className="space-y-3">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check size={18} className="text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

    <ProcessSteps />

    {/* Testimonial highlight */}
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-serif text-3xl font-semibold text-center mb-10">
          Hvad klienter siger om kropsterapi hos Find Ro
        </h2>
        <TestimonialCard
          quote="Kropsterapien hos Ida har ændret mit liv. Jeg havde kroniske smerter i 5 år, og efter et forløb på 8 sessioner er de næsten helt væk. Det er som at have fået en ny krop."
          name="Camilla R."
          detail="Aarhus — forløb over 3 måneder"
        />
      </div>
    </section>

    <FAQSection items={faqItems} />
    <CTABanner headline="Prøv kropsterapi i Aarhus" subtext="Book din første session og mærk forskellen. Uforpligtende og i dit tempo." />
  </Layout>
);

export default Kropsterapi;

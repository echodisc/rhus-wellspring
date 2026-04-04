import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";
import TestimonialCard from "@/components/TestimonialCard";
import { ShieldCheck, Moon, HeartPulse, Wind } from "lucide-react";

const approaches = [
  {
    icon: HeartPulse,
    title: "Nervesystemregulering",
    text: "Vi arbejder direkte med dit autonome nervesystem for at bringe dig ud af fight-or-flight tilstand.",
  },
  {
    icon: Wind,
    title: "Åndedrætsarbejde",
    text: "Målrettede åndedrætsøvelser der aktiverer det parasympatiske nervesystem og skaber øjeblikkelig ro.",
  },
  {
    icon: Moon,
    title: "Kropslig afslapning",
    text: "Bløde berøringsteknikker der hjælper kroppen med at slippe dybe spændingsmønstre.",
  },
  {
    icon: ShieldCheck,
    title: "Trygt rum",
    text: "Alt foregår i dit tempo. Du er i kontrol hele vejen, og der er aldrig pres for at gøre mere end du er klar til.",
  },
];

const faqItems = [
  {
    question: "Kan kropsterapi hjælpe med min angst?",
    answer:
      "Ja. Angst er i høj grad en kropslig oplevelse — hjertebanken, åndenød, uro i maven. Kropsterapi arbejder direkte med disse kropslige symptomer og hjælper nervesystemet med at finde ro. Mange klienter oplever markant reduktion i angstsymptomer.",
  },
  {
    question: "Hvad er forskellen på kropsterapi og psykologbehandling mod stress?",
    answer:
      "Psykologbehandling fokuserer primært på tanker og adfærd. Kropsterapi supplerer dette ved at arbejde med den kropslige dimension — de spændinger, der sidder fast i kroppen. Mange oplever, at kombinationen giver de bedste resultater.",
  },
  {
    question: "Hvor hurtigt virker stressbehandling med kropsterapi?",
    answer:
      "De fleste mærker en øjeblikkelig lettelse efter første session. For varige forandringer anbefales et forløb på 5-8 sessioner, afhængigt af stressniveauet.",
  },
  {
    question: "Er det normalt at reagere følelsesmæssigt under behandling?",
    answer:
      "Ja, det er helt naturligt. Når kroppen slipper spændinger, kan det udløse følelser som gråd, lettelse eller træthed. Det er en del af helingsprocessen og et tegn på at kroppen bearbejder.",
  },
];

const StressOgAngst = () => (
  <Layout>
    <Helmet>
      <title>Stress Behandling & Angst Terapi i Aarhus | Find Ro</title>
      <meta
        name="description"
        content="Specialiseret stress behandling og angst terapi i Aarhus. Kropsbaseret tilgang der hjælper dig med at finde ro og balance. Book hos Find Ro."
      />
      <link rel="canonical" href="https://find-ro.dk/stress-og-angst" />
    </Helmet>

    <Hero
      title="Stress behandling & angst terapi i Aarhus"
      subtitle="Når stress og angst har sat sig i kroppen, er det kroppen der holder nøglen til forandring. Oplev en specialiseret, kropsbaseret tilgang til stress og angst."
    />

    {/* Intro */}
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
          Stress og angst sidder i kroppen
        </h2>
        <p className="text-muted-foreground leading-relaxed text-lg mb-4">
          Du kender det sikkert: hjertet banker, vejrtrækningen er kort, skuldrene sidder oppe ved
          ørerne. Stress og angst er ikke bare "noget i hovedet" — det er en kropslig tilstand.
        </p>
        <p className="text-muted-foreground leading-relaxed text-lg">
          Hos Find Ro i Aarhus arbejder vi med det autonome nervesystem for at hjælpe din krop
          ud af alarmberedskab og ind i en tilstand af ro og genopretning.
        </p>
      </div>
    </section>

    {/* Approach cards */}
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl font-semibold text-center mb-12">Min tilgang</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {approaches.map((a, i) => (
            <div key={i} className="rounded-xl border border-border bg-background p-7">
              <div className="w-11 h-11 rounded-full bg-secondary/15 flex items-center justify-center mb-4">
                <a.icon size={22} className="text-secondary" />
              </div>
              <h3 className="font-serif text-lg font-semibold mb-2">{a.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{a.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="font-serif text-3xl font-semibold text-center mb-10">
          Andre kvinder der fandt ro
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TestimonialCard
            quote="Jeg havde levet med angst i 10 år. Kropsterapien hos Ida var det eneste der virkelig hjalp. Jeg har fået mit liv tilbage."
            name="Line T."
            detail="Aarhus — angstforløb"
          />
          <TestimonialCard
            quote="Stress havde taget over, og min krop var i konstant alarmberedskab. Efter 6 sessioner sover jeg igen, og jeg kan mærke min krop uden frygt."
            name="Katrine B."
            detail="Aarhus — stressbehandling"
          />
        </div>
      </div>
    </section>

    <FAQSection items={faqItems} />
    <CTABanner
      headline="Slip fri af stress og angst"
      subtext="Du fortjener at leve uden konstant uro. Tag det første skridt mod forandring i dag."
    />
  </Layout>
);

export default StressOgAngst;

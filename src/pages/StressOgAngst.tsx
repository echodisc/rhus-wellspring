import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";
import TestimonialCard from "@/components/TestimonialCard";
import FadeInOnScroll from "@/components/FadeInOnScroll";
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
      "Ja. Angst er i høj grad en kropslig oplevelse — hjertebanken, åndenød, uro i maven. Kropsterapi arbejder direkte med disse kropslige symptomer og hjælper nervesystemet med at finde ro.",
  },
  {
    question: "Hvad er forskellen på kropsterapi og psykologbehandling mod stress?",
    answer:
      "Psykologbehandling fokuserer primært på tanker og adfærd. Kropsterapi supplerer dette ved at arbejde med den kropslige dimension — de spændinger, der sidder fast i kroppen.",
  },
  {
    question: "Hvor hurtigt virker stressbehandling med kropsterapi?",
    answer:
      "De fleste mærker en øjeblikkelig lettelse efter første session. For varige forandringer anbefales et forløb på 5-8 sessioner.",
  },
  {
    question: "Er det normalt at reagere følelsesmæssigt under behandling?",
    answer:
      "Ja, det er helt naturligt. Når kroppen slipper spændinger, kan det udløse følelser som gråd, lettelse eller træthed. Det er en del af helingsprocessen.",
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
      subtitle="Når stress og angst har sat sig i kroppen, er det kroppen der holder nøglen til forandring."
      backgroundImage="/images/massage-1024x632.jpg"
    />

    {/* Intro with photo */}
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <FadeInOnScroll>
            <div>
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
          </FadeInOnScroll>
          <FadeInOnScroll delay={150}>
            <img
              src="/images/find-ro-4.jpg"
              alt="Behandling mod stress og angst hos Find Ro"
              className="rounded-2xl w-full aspect-[4/3] object-cover shadow-md"
              loading="lazy"
            />
          </FadeInOnScroll>
        </div>
      </div>
    </section>

    {/* Approach cards */}
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <FadeInOnScroll>
          <h2 className="font-serif text-3xl font-semibold text-center mb-12">Min tilgang</h2>
        </FadeInOnScroll>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {approaches.map((a, i) => (
            <FadeInOnScroll key={i} delay={i * 100}>
              <div className="rounded-xl border border-border bg-background p-7">
                <div className="w-11 h-11 rounded-full bg-secondary/15 flex items-center justify-center mb-4">
                  <a.icon size={22} className="text-secondary" />
                </div>
                <h3 className="font-serif text-lg font-semibold mb-2">{a.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.text}</p>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-5xl">
        <FadeInOnScroll>
          <h2 className="font-serif text-3xl font-semibold text-center mb-10">
            Andre der fandt ro
          </h2>
        </FadeInOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FadeInOnScroll delay={0}>
            <TestimonialCard
              quote="Ida er en kompetent og kærlig behandler. Sidst jeg var hos Ida kom jeg med et kaotisk sind og en urolig krop. Takket være Idas rolige, medfølende behandling gik jeg derfra med en dybere vejrtrækning og en fredfyldt energi."
              name="Hester"
              detail="Kropsterapi"
            />
          </FadeInOnScroll>
          <FadeInOnScroll delay={150}>
            <TestimonialCard
              quote="Idas løbende behandlinger har hjulpet mig på mange måder. Jeg føler jeg er kommet mere ned i kroppen og det har styrket mine relationer. Et godt fokuspunkt for mig i hverdagen."
              name="Anders"
              detail="Løbende forløb"
            />
          </FadeInOnScroll>
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

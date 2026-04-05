import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";
import TestimonialCard from "@/components/TestimonialCard";
import FadeInOnScroll from "@/components/FadeInOnScroll";
import PullQuote from "@/components/PullQuote";
import IntroSession from "@/components/IntroSession";
import ParallaxImage from "@/components/ParallaxImage";
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
      tall
    />

    {/* Intro */}
    <section className="relative z-[1] py-14 md:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <FadeInOnScroll>
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-light tracking-[0.04em] mb-6">
                Stress og angst sidder i kroppen
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4 font-light">
                Du kender det sikkert: hjertet banker, vejrtrækningen er kort, skuldrene sidder oppe ved
                ørerne. Stress og angst er ikke bare "noget i hovedet" — det er en kropslig tilstand.
              </p>
              <p className="text-muted-foreground leading-relaxed font-light">
                Hos Find Ro i Aarhus arbejder vi med det autonome nervesystem for at hjælpe din krop
                ud af alarmberedskab og ind i en tilstand af ro og genopretning.
              </p>
            </div>
          </FadeInOnScroll>
          <FadeInOnScroll delay={150}>
            <img
              src="/images/find-ro-4.jpg"
              alt="Behandling mod stress og angst hos Find Ro"
              className="w-full aspect-[4/3] object-cover"
              loading="lazy"
            />
          </FadeInOnScroll>
        </div>
      </div>
    </section>

    {/* Parallax divider */}
    <ParallaxImage src="/images/yoga-ved-Ganges-1024x768.jpg" alt="Yoga i Indien" height="min-h-[45vh]" />

    {/* Pull Quote */}
    <PullQuote
      quote="Du fortjener at leve uden konstant uro. Det starter med at lytte til kroppen."
      author="Ida Sohn"
      background="warm"
    />

    {/* Approach cards */}
    <section className="relative z-[1] py-14 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <FadeInOnScroll>
          <p className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground text-center mb-4">Tilgang</p>
          <h2 className="font-heading text-2xl md:text-3xl font-light tracking-[0.04em] text-center mb-16">Min tilgang til stress og angst</h2>
        </FadeInOnScroll>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {approaches.map((a, i) => (
            <FadeInOnScroll key={i} delay={i * 100}>
              <div className="p-8 md:p-10 bg-card">
                <div className="w-10 h-10 flex items-center justify-center mb-5">
                  <a.icon size={22} strokeWidth={1.2} className="text-foreground/40" />
                </div>
                <h3 className="font-heading text-base tracking-[0.06em] mb-3">{a.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-light">{a.text}</p>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>

    <IntroSession />

    {/* Testimonials */}
    <section className="py-24 md:py-40 bg-card">
      <div className="container mx-auto px-4 max-w-5xl">
        <FadeInOnScroll>
          <h2 className="font-heading text-2xl md:text-3xl font-light tracking-[0.04em] text-center mb-12">
            Andre der fandt ro
          </h2>
        </FadeInOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
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

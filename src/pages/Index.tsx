import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import ProcessSteps from "@/components/ProcessSteps";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";
import FadeInOnScroll from "@/components/FadeInOnScroll";
import DotCarousel from "@/components/DotCarousel";
import { Heart, Brain, Flower2 } from "lucide-react";
import { Link } from "react-router-dom";

const testimonials = [
  {
    quote:
      "Ida er en kompetent og kærlig behandler. Hun forstår sig på medfølende at møde hele mennesket. Jeg får mere ud af én behandling hos Ida end 10 samtaler hos en psykolog.",
    name: "Hester",
    detail: "Kropsterapi",
  },
  {
    quote:
      "Idas løbende behandlinger har hjulpet mig på mange måder. Jeg føler jeg er kommet mere ned i kroppen og det har styrket mine relationer. Jeg giver Ida mine bedste anbefalinger.",
    name: "Anders",
    detail: "Løbende forløb",
  },
  {
    quote:
      "Min hidtidige rejse i følelser, krop og tanker, sammen med Ida, har været helt fantastisk og åbnende. Jeg har genfundet kontakt til min krop og tillid. Idas nærvær og intuition er givende.",
    name: "Isabella",
    detail: "Kropsterapi & yoga",
  },
];

const faqItems = [
  {
    question: "Hvad er kropsterapi, og hvordan virker det?",
    answer:
      "Kropsterapi er en helhedsorienteret behandlingsform der arbejder med sammenhængen mellem krop og sind. Gennem bløde berøringer, åndedrætsøvelser og kropslig opmærksomhed hjælper vi nervesystemet med at finde balance. Det er særligt effektivt ved stress, angst og kroniske spændinger.",
  },
  {
    question: "Hvor mange behandlinger har jeg brug for?",
    answer:
      "Det er individuelt. Mange oplever forbedring efter 3-5 behandlinger, men for dybere problematikker kan et længere forløb være gavnligt. Vi laver altid en plan sammen efter første session.",
  },
  {
    question: "Hvad koster en behandling hos Find Ro i Aarhus?",
    answer:
      "En enkeltsession koster 750 kr. Vi tilbyder også forløbspakker med rabat. Se alle priser på vores prisside, eller ring for en uforpligtende snak.",
  },
  {
    question: "Kan kropsterapi hjælpe mod angst og stress?",
    answer:
      "Ja, kropsterapi er en af de mest effektive tilgange til stress og angst, fordi vi arbejder direkte med nervesystemet. Mange klienter oplever markant reduktion i angstsymptomer og en dybere følelse af ro.",
  },
  {
    question: "Hvor foregår behandlingerne i Aarhus?",
    answer:
      "Klinikken ligger centralt i Aarhus C, tæt på offentlig transport. Den præcise adresse får du ved booking. Der er rolige, trygge omgivelser designet til afslapning.",
  },
  {
    question: "Skal jeg klæde mig af under behandlingen?",
    answer:
      "Nej, du beholder dit tøj på. Det anbefales at have løstsiddende, behageligt tøj på. Behandlingen foregår typisk liggende på en briks.",
  },
];

const Index = () => (
  <Layout>
    <Helmet>
      <title>Find Ro — Kropsterapi i Aarhus | Stress & angstbehandling</title>
      <meta
        name="description"
        content="Kropsterapi i Aarhus med Ida Sohn. Professionel behandling af stress, angst og kropslige spændinger. Book din tid i dag og find ro i hverdagen."
      />
      <link rel="canonical" href="https://find-ro.dk/" />
    </Helmet>

    {/* Hero with background image */}
    <Hero
      title="Kropsterapi i Aarhus — Slip fri af stress og angst"
      subtitle="Oplev en dybere forbindelse til din krop og find ro i en travl hverdag. Professionel og personlig kropsterapi i hjertet af Aarhus."
      showSecondary
      secondaryText="Læs mere om kropsterapi"
      secondaryLink="/kropsterapi"
      backgroundImage="/images/Find-Ro-2.jpg"
    />

    {/* Problem/Empathy */}
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <FadeInOnScroll>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">Kender du det?</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
            <p>Du vågner om morgenen med spændinger i kroppen, selvom du har sovet hele natten.</p>
            <p>Tankerne kører i ring, og du kan ikke finde ro — hverken i kroppen eller hovedet.</p>
            <p>Du har prøvet at "tage dig sammen", men stressen sidder fast i kroppen.</p>
          </div>
          <p className="mt-8 text-foreground font-medium text-lg">
            Du er ikke alene. Og der <em>er</em> en vej til forandring.
          </p>
        </FadeInOnScroll>
      </div>
    </section>

    {/* Forestil dig... — Aspirational value section */}
    <section className="py-16 md:py-24 bg-mottled-warm">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <FadeInOnScroll>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-8">Forestil dig...</h2>
          <div className="space-y-5 text-lg leading-relaxed text-foreground/85">
            <p>At vågne udhvilet — med en krop der føles let og åben.</p>
            <p>At trække vejret dybt, uden den knude i maven.</p>
            <p>At føle dig <em>hjemme</em> i din krop igen.</p>
            <p>At møde hverdagen med ro i stedet for uro.</p>
          </div>
          <p className="mt-8 text-muted-foreground">
            Det er ikke en drøm. Det er det, mine klienter oplever efter kropsterapi.
          </p>
        </FadeInOnScroll>
      </div>
    </section>

    {/* Services */}
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <FadeInOnScroll>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-center mb-4">
            Behandlinger
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
            Skræddersyede behandlinger der møder dig, hvor du er
          </p>
        </FadeInOnScroll>
        <div className="max-w-5xl mx-auto">
          <DotCarousel desktopCols={3}>
            <FadeInOnScroll delay={0}>
              <ServiceCard
                icon={Heart}
                title="Kropsterapi"
                description="Helhedsorienteret behandling der løsner op for kropslige spændinger og skaber balance i nervesystemet."
                link="/kropsterapi"
              />
            </FadeInOnScroll>
            <FadeInOnScroll delay={120}>
              <ServiceCard
                icon={Brain}
                title="Stress & Angst"
                description="Specialiseret behandling for dig der oplever stress, angst eller uro i hverdagen. Baseret på kropslig tilgang."
                link="/stress-og-angst"
              />
            </FadeInOnScroll>
            <FadeInOnScroll delay={240}>
              <ServiceCard
                icon={Flower2}
                title="Yoga & Åndedræt"
                description="Bløde yoga- og åndedrætsøvelser der supplerer kropsterapien og giver dig redskaber til hverdagen."
                link="/kontakt"
              />
            </FadeInOnScroll>
          </DotCarousel>
        </div>
      </div>
    </section>

    {/* About Ida with real photo */}
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <FadeInOnScroll>
            <img
              src="/images/profilbillede-1536x2048.jpg"
              alt="Ida Sohn — Kropsterapeut i Aarhus"
              className="rounded-2xl w-full aspect-[4/5] object-cover shadow-lg"
              loading="lazy"
            />
          </FadeInOnScroll>
          <FadeInOnScroll delay={150}>
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">Mød Ida Sohn</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Min passion for at hjælpe andre til mental og fysisk trivsel er startet ved min egen
                udviklingsrejse gennem fysiske smerter, stress og angst til langt større indre ro.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Med mine redskaber, min faglige fundering, forståelse af kroppen og menneskesindet,
                intuition og mit nærvær oplever jeg virkelig at kunne hjælpe andre på deres rejse.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Min klinik ligger centralt i Aarhus, i rolige og trygge omgivelser, hvor du kan
                slippe hverdagens krav og finde ind til dig selv.
              </p>
              <Link
                to="/om-ida"
                className="inline-flex items-center text-primary font-medium hover:underline"
              >
                Læs mere om min baggrund →
              </Link>
            </div>
          </FadeInOnScroll>
        </div>
      </div>
    </section>

    {/* Process Steps */}
    <ProcessSteps />

    {/* Testimonials */}
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <FadeInOnScroll>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-center mb-4">
            Det siger mine klienter
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
            Ægte udtalelser fra mennesker der har fundet ro gennem kropsterapi
          </p>
        </FadeInOnScroll>
        <div className="max-w-5xl mx-auto">
          <DotCarousel desktopCols={3}>
            {testimonials.map((t, i) => (
              <FadeInOnScroll key={i} delay={i * 120}>
                <TestimonialCard {...t} />
              </FadeInOnScroll>
            ))}
          </DotCarousel>
        </div>
      </div>
    </section>

    {/* FAQ */}
    <FAQSection items={faqItems} />

    {/* CTA */}
    <CTABanner />
  </Layout>
);

export default Index;

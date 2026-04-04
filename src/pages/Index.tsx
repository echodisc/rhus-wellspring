import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import ProcessSteps from "@/components/ProcessSteps";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";
import { Heart, Brain, Flower2 } from "lucide-react";

const testimonials = [
  {
    quote:
      "Efter bare tre sessioner hos Ida kunne jeg mærke en kæmpe forskel. Min krop slappede af på en måde, jeg ikke har oplevet i årevis. Jeg sover bedre og føler mig mere til stede.",
    name: "Marie K.",
    detail: "Aarhus — stressbehandling",
  },
  {
    quote:
      "Ida har en helt unik evne til at skabe tryghed. Jeg følte mig mødt og forstået fra første minut. Kropsterapien har hjulpet mig med at håndtere min angst.",
    name: "Sofie L.",
    detail: "Aarhus — angstterapi",
  },
  {
    quote:
      "Jeg var skeptisk i starten, men resultaterne taler for sig selv. Mine kroniske spændinger i nakke og skuldre er næsten væk. Kan varmt anbefales!",
    name: "Anne M.",
    detail: "Aarhus — kropsterapi",
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

    {/* Hero */}
    <Hero
      title="Kropsterapi i Aarhus — Slip fri af stress og angst"
      subtitle="Oplev en dybere forbindelse til din krop og find ro i en travl hverdag. Professionel og personlig kropsterapi i hjertet af Aarhus."
      showSecondary
      secondaryText="Læs mere om kropsterapi"
      secondaryLink="/kropsterapi"
    />

    {/* Problem/Empathy */}
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">Kender du det?</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
          <p>Du vågner om morgenen med spændinger i kroppen, selvom du har sovet hele natten.</p>
          <p>Tankerne kører i ring, og du kan ikke finde ro — hverken i kroppen eller hovedet.</p>
          <p>Du har prøvet at "tage dig sammen", men stressen sidder fast i kroppen.</p>
        </div>
        <p className="mt-8 text-foreground font-medium text-lg">
          Du er ikke alene. Og der <em>er</em> en vej til forandring.
        </p>
      </div>
    </section>

    {/* Services */}
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-center mb-4">
          Behandlinger
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          Skræddersyede behandlinger der møder dig, hvor du er
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <ServiceCard
            icon={Heart}
            title="Kropsterapi"
            description="Helhedsorienteret behandling der løsner op for kropslige spændinger og skaber balance i nervesystemet."
            link="/kropsterapi"
          />
          <ServiceCard
            icon={Brain}
            title="Stress & Angst"
            description="Specialiseret behandling for dig der oplever stress, angst eller uro i hverdagen. Baseret på kropslig tilgang."
            link="/stress-og-angst"
          />
          <ServiceCard
            icon={Flower2}
            title="Yoga & Åndedræt"
            description="Bløde yoga- og åndedrætsøvelser der supplerer kropsterapien og giver dig redskaber til hverdagen."
            link="/kontakt"
          />
        </div>
      </div>
    </section>

    {/* About Ida */}
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/5] rounded-2xl bg-muted flex items-center justify-center">
            <span className="text-muted-foreground text-sm">Foto af Ida</span>
          </div>
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">Mød Ida Sohn</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Jeg er uddannet kropsterapeut med speciale i stress og angst. I over 8 år har jeg
              hjulpet kvinder i Aarhus med at finde vej tilbage til en krop i balance.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Min tilgang er baseret på nærvær, tryghed og en dyb respekt for din krops visdom.
              Jeg tror på, at kroppen har svarene — vi skal bare lære at lytte.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Min klinik ligger centralt i Aarhus, i rolige og trygge omgivelser, hvor du kan
              slippe hverdagens krav og finde ind til dig selv.
            </p>
            <a
              href="/om-ida"
              className="inline-flex items-center text-primary font-medium hover:underline"
            >
              Læs mere om min baggrund →
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* Process Steps */}
    <ProcessSteps />

    {/* Testimonials */}
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-center mb-4">
          Det siger mine klienter
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          Læs hvad kvinder i Aarhus oplever efter kropsterapi hos Find Ro
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
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

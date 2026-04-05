import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import TestimonialCard from "@/components/TestimonialCard";
import CTABanner from "@/components/CTABanner";
import FadeInOnScroll from "@/components/FadeInOnScroll";
import DotCarousel from "@/components/DotCarousel";

const testimonials = [
  {
    quote: "Ida er en kompetent og kærlig behandler. Hun forstår sig på medfølende at møde hele mennesket og rumme alle mine sider. Selv de sider af mig selv, som jeg ikke er stolt af, forstår hun at omfavne. Sidst jeg var hos Ida kom jeg med et kaotisk sind og en urolig krop, ked af det og frusteret. Takket være Idas rolige, medfølende behandling gik jeg derfra med en dybere vejrtrækning og en fredfyldt energi. Jeg får mere ud af én behandling hos Ida end 10 samtaler hos en psykolog.",
    name: "Hester",
    detail: "Kropsterapi",
  },
  {
    quote: "Idas løbende behandlinger har hjulpet mig på mange måder. Jeg føler jeg er kommet mere ned i kroppen og det har styrket mine relationer. Samtidig er det et godt fokuspunkt for mig i løbet af ugerne at tænke på et rum for mig selv, hvor det er tilladt at give slip og slappe af på en god måde. Jeg giver Ida mine bedste anbefalinger.",
    name: "Anders",
    detail: "Løbende forløb",
  },
  {
    quote: "Min hidtidige rejse i følelser, krop og tanker, sammen med Ida, har været helt fantastisk og åbnende. Jeg har genfundet kontakt til min krop, jeg har genfundet tillid, og jeg er begyndt at lytte efter min krops signaler på en ny måde med mindre frygt og frustration. Kære Ida, tusind tak for at være her med det, du er og gør. Jeg har fra første gang været meget tryg, og jeg har følt mig kærligt taget af. Dit nærvær, din intuition og din ærlighed er givende.",
    name: "Isabella",
    detail: "Kropsterapi & yoga",
  },
  {
    quote: "Wow for en oplevelse! Tusind tak for at skabe et trygt rum Ida. Jeg fik virkelig løsnet op for nogle gamle ting. Jeg står tilbage med ro, glæde og taknemmelighed. Jeg er fuld af kærlighed. Jeg kommer helt sikker igen og sender gerne alle jeg kender til dig!",
    name: "Klaus",
    detail: "Kropsterapi",
  },
];

const Klientudtalelser = () => (
  <Layout>
    <Helmet>
      <title>Klientudtalelser — Kropsterapi Anmeldelser Aarhus | Find Ro</title>
      <meta
        name="description"
        content="Læs ægte udtalelser fra klienter hos Find Ro i Aarhus. Oplevelser med kropsterapi, stressbehandling og angstterapi."
      />
      <link rel="canonical" href="https://find-ro.dk/klientudtalelser" />
    </Helmet>

    <section className="relative z-[1] py-20 md:py-32 bg-mottled-peach">
      <div className="container mx-auto px-4 text-center max-w-2xl">
        <h1 className="font-heading text-3xl md:text-4xl font-light tracking-[0.04em] mb-4">Klientudtalelser</h1>
        <p className="text-muted-foreground leading-relaxed font-light">
          Ægte historier fra mennesker der har fundet ro gennem kropsterapi hos Ida.
        </p>
      </div>
    </section>

    <section className="py-24 md:py-40">
      <div className="container mx-auto px-4 max-w-5xl">
        <DotCarousel desktopCols={2}>
          {testimonials.map((t, i) => (
            <FadeInOnScroll key={i} delay={i * 100}>
              <TestimonialCard {...t} />
            </FadeInOnScroll>
          ))}
        </DotCarousel>
      </div>
    </section>

    <CTABanner
      headline="Bliv den næste succeshistorie"
      subtext="Book din første session og oplev selv, hvordan kropsterapi kan gøre en forskel."
    />
  </Layout>
);

export default Klientudtalelser;

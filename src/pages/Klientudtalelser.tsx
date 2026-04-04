import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import TestimonialCard from "@/components/TestimonialCard";
import CTABanner from "@/components/CTABanner";

const testimonials = [
  {
    quote: "Efter bare tre sessioner hos Ida kunne jeg mærke en kæmpe forskel. Min krop slappede af på en måde, jeg ikke har oplevet i årevis.",
    name: "Marie K.",
    detail: "Stressbehandling — 5 sessioners forløb",
  },
  {
    quote: "Ida har en helt unik evne til at skabe tryghed. Jeg følte mig mødt og forstået fra første minut. Kropsterapien har ændret mit syn på min angst.",
    name: "Sofie L.",
    detail: "Angstterapi — løbende forløb",
  },
  {
    quote: "Jeg var skeptisk, men resultaterne taler for sig selv. Mine kroniske spændinger i nakke og skuldre er næsten væk efter 8 sessioner.",
    name: "Anne M.",
    detail: "Kropsterapi — 10 sessioners forløb",
  },
  {
    quote: "Jeg havde levet med angst i 10 år. Kropsterapien hos Ida var det eneste der virkelig hjalp. Jeg har fået mit liv tilbage.",
    name: "Line T.",
    detail: "Angstterapi — 6 måneders forløb",
  },
  {
    quote: "Stress havde taget over, og min krop var i konstant alarmberedskab. Efter 6 sessioner sover jeg igen. Det er uvurderligt.",
    name: "Katrine B.",
    detail: "Stressbehandling — intensivt forløb",
  },
  {
    quote: "Ida formår at skabe et rum, hvor man virkelig tør slippe kontrollen. Jeg har aldrig følt mig tryggere i en behandlingssituation.",
    name: "Camilla R.",
    detail: "Kropsterapi — forløb over 3 måneder",
  },
];

const Klientudtalelser = () => (
  <Layout>
    <Helmet>
      <title>Klientudtalelser — Kropsterapi Anmeldelser Aarhus | Find Ro</title>
      <meta
        name="description"
        content="Læs hvad klienter siger om kropsterapi hos Find Ro i Aarhus. Ægte udtalelser fra kvinder der har fundet ro efter stress og angst behandling."
      />
      <link rel="canonical" href="https://find-ro.dk/klientudtalelser" />
    </Helmet>

    <section className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4 text-center max-w-2xl">
        <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-4">Klientudtalelser</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Ægte historier fra kvinder i Aarhus der har fundet ro gennem kropsterapi. Læs deres
          oplevelser og se, om det kunne være noget for dig.
        </p>
      </div>
    </section>

    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </div>
    </section>

    <CTABanner
      headline="Bliv den næste succeshistorie"
      subtext="Book din første session og oplev selv, hvordan kropsterapi kan gøre en forskel."
    />
  </Layout>
);

export default Klientudtalelser;

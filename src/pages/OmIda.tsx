import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import CTABanner from "@/components/CTABanner";
import { GraduationCap, Award, Heart } from "lucide-react";

const credentials = [
  {
    icon: GraduationCap,
    title: "Uddannet kropsterapeut",
    text: "4-årig uddannelse i kropsterapi med speciale i traumebehandling og nervesystemregulering.",
  },
  {
    icon: Award,
    title: "8+ års erfaring",
    text: "Har hjulpet hundredvis af kvinder i Aarhus med at finde ro i krop og sind.",
  },
  {
    icon: Heart,
    title: "Personlig tilgang",
    text: "Jeg tror på, at heling sker i relationen. Hver behandling er unik og tilpasset dig.",
  },
];

const OmIda = () => (
  <Layout>
    <Helmet>
      <title>Om Ida Sohn — Kropsterapeut i Aarhus | Find Ro</title>
      <meta
        name="description"
        content="Mød Ida Sohn, uddannet kropsterapeut i Aarhus med over 8 års erfaring. Speciale i stress, angst og kropslige spændinger."
      />
      <link rel="canonical" href="https://find-ro.dk/om-ida" />
    </Helmet>

    {/* Hero */}
    <section className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[3/4] rounded-2xl bg-muted flex items-center justify-center order-2 md:order-1">
            <span className="text-muted-foreground text-sm">Portræt af Ida</span>
          </div>
          <div className="order-1 md:order-2">
            <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-6">Om Ida Sohn</h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Jeg hedder Ida, og jeg er kropsterapeut i Aarhus. Min passion er at hjælpe kvinder
              med at genfinde forbindelsen til deres krop — særligt dem der lever med stress, angst
              eller følelsen af at være "afkoblet" fra sig selv.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Min egen rejse startede med stress og udbrændthed. Det var gennem kropsterapi, jeg
              fandt vej tilbage til mig selv. Den oplevelse drev mig til at uddanne mig og dedikere
              mit arbejde til at hjælpe andre med det samme.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Story */}
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-serif text-3xl font-semibold mb-6 text-center">Min historie</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            I mine tidlige 20'ere levede jeg et liv på overarbejde og konstant præstation. Kroppen
            sendte signal efter signal — spændingshovedpine, søvnproblemer, en konstant uro i
            maven — men jeg ignorerede dem alle.
          </p>
          <p>
            Da jeg endelig brød sammen, var det kroppen der viste mig vejen tilbage. Gennem
            kropsterapi lærte jeg at lytte til de signaler, jeg havde undertrykt i årevis. Og
            langsomt fandt jeg en ro, jeg aldrig havde kendt.
          </p>
          <p>
            Dén oplevelse ændrede alt. Jeg uddannede mig som kropsterapeut og har i over 8 år
            arbejdet med kvinder i Aarhus der kæmper med de samme udfordringer. Jeg ved, hvad det
            vil sige at stå i det — og jeg ved, at forandring er mulig.
          </p>
        </div>
      </div>
    </section>

    {/* Credentials */}
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl font-semibold text-center mb-12">
          Baggrund & uddannelse
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {credentials.map((c, i) => (
            <div key={i} className="text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <c.icon size={26} className="text-primary" />
              </div>
              <h3 className="font-serif text-lg font-semibold mb-2">{c.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <CTABanner headline="Lad os mødes" subtext="Jeg glæder mig til at høre din historie og finde ud af, hvordan jeg kan hjælpe dig." />
  </Layout>
);

export default OmIda;

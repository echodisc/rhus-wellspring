import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import CTABanner from "@/components/CTABanner";
import TimelineSection from "@/components/TimelineSection";
import FadeInOnScroll from "@/components/FadeInOnScroll";
import { GraduationCap, Award, Heart } from "lucide-react";

const credentials = [
  {
    icon: GraduationCap,
    title: "Uddannet kropsterapeut",
    text: "Fra Totum med kurser i Kenshô Breathwork, Traume Terapi og Myofascial Release.",
  },
  {
    icon: Award,
    title: "Yoga & meditationsinstruktør",
    text: "300+ timers yogauddannelse inkl. 200 timer i Rishikesh, Indien.",
  },
  {
    icon: Heart,
    title: "Personlig tilgang",
    text: "Min egen rejse gennem stress og angst driver min passion for at hjælpe andre.",
  },
];

const OmIda = () => (
  <Layout>
    <Helmet>
      <title>Om Ida Sohn — Kropsterapeut i Aarhus | Find Ro</title>
      <meta
        name="description"
        content="Mød Ida Sohn, uddannet kropsterapeut i Aarhus. Speciale i stress, angst og kropslige spændinger. Læs om hendes uddannelsesrejse og tilgang."
      />
      <link rel="canonical" href="https://find-ro.dk/om-ida" />
    </Helmet>

    {/* Hero */}
    <section className="py-20 md:py-28 bg-mottled-peach">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <FadeInOnScroll>
            <img
              src="/images/profilbillede-1536x2048.jpg"
              alt="Ida Sohn — Kropsterapeut i Aarhus"
              className="rounded-2xl w-full aspect-[3/4] object-cover shadow-lg order-2 md:order-1"
              loading="lazy"
            />
          </FadeInOnScroll>
          <FadeInOnScroll delay={150} className="order-1 md:order-2">
            <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-6">Om Ida Sohn</h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Mit navn er Ida Sohn Jeppesen. Min passion for at hjælpe andre til mental og fysisk
              trivsel er startet ved min egen udviklingsrejse gennem fysiske smerter, stress og
              angst til langt større indre ro.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Min egen rejse fortsætter altid, da det er en del af livets cykliske bevægelse at
              miste balancen fra tid til anden, men de redskaber, jeg har fundet på vejen til at
              genfinde den, er helt fantastiske.
            </p>
          </FadeInOnScroll>
        </div>
      </div>
    </section>

    {/* Story */}
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <FadeInOnScroll>
            <div>
              <h2 className="font-serif text-3xl font-semibold mb-6">Min historie</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Med mine redskaber, min faglige fundering, forståelse af kroppen og
                  menneskesindet, intuition og mit nærvær oplever jeg virkelig at kunne hjælpe
                  andre på deres rejse.
                </p>
                <p>
                  Jeg har selv stået i det — med stress der tog over, smerter der ikke ville
                  forsvinde, og en krop i konstant alarmberedskab. Det var gennem kropsterapi og
                  yoga, jeg fandt vejen tilbage til mig selv.
                </p>
                <p>
                  Dén oplevelse ændrede alt. Jeg har dedikeret mit liv til at hjælpe andre med at
                  finde den samme ro og forbindelse til kroppen.
                </p>
              </div>
            </div>
          </FadeInOnScroll>
          <FadeInOnScroll delay={150}>
            <img
              src="/images/yoga-ved-Ganges-1024x768.jpg"
              alt="Ida ved Ganges i Rishikesh, Indien"
              className="rounded-2xl w-full aspect-[4/3] object-cover shadow-md"
              loading="lazy"
            />
          </FadeInOnScroll>
        </div>
      </div>
    </section>

    {/* Timeline */}
    <TimelineSection />

    {/* Credentials */}
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <FadeInOnScroll>
          <h2 className="font-serif text-3xl font-semibold text-center mb-12">
            Baggrund & kompetencer
          </h2>
        </FadeInOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {credentials.map((c, i) => (
            <FadeInOnScroll key={i} delay={i * 120}>
              <div className="text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <c.icon size={26} className="text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.text}</p>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>

    <CTABanner headline="Lad os mødes" subtext="Jeg glæder mig til at høre din historie og finde ud af, hvordan jeg kan hjælpe dig." />
  </Layout>
);

export default OmIda;

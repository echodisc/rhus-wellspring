import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import CTABanner from "@/components/CTABanner";
import TimelineSection from "@/components/TimelineSection";
import FadeInOnScroll from "@/components/FadeInOnScroll";
import PullQuote from "@/components/PullQuote";
import ParallaxImage from "@/components/ParallaxImage";
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
    <section className="relative z-[1] py-20 md:py-32 bg-mottled-peach">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <FadeInOnScroll>
            <img
              src="/images/profilbillede-1536x2048.jpg"
              alt="Ida Sohn — Kropsterapeut i Aarhus"
              className="w-full aspect-[3/4] object-cover order-2 md:order-1"
              loading="lazy"
            />
          </FadeInOnScroll>
          <FadeInOnScroll delay={150} className="order-1 md:order-2">
            <p className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground mb-4">Om mig</p>
            <h1 className="font-heading text-3xl md:text-4xl font-light tracking-[0.04em] mb-6">Om Ida Sohn</h1>
            <p className="text-muted-foreground leading-relaxed mb-4 font-light">
              Mit navn er Ida Sohn Jeppesen. Min passion for at hjælpe andre til mental og fysisk
              trivsel er startet ved min egen udviklingsrejse gennem fysiske smerter, stress og
              angst til langt større indre ro.
            </p>
            <p className="text-muted-foreground leading-relaxed font-light">
              Min egen rejse fortsætter altid, da det er en del af livets cykliske bevægelse at
              miste balancen fra tid til anden, men de redskaber, jeg har fundet på vejen til at
              genfinde den, er helt fantastiske.
            </p>
          </FadeInOnScroll>
        </div>
      </div>
    </section>

    {/* Pull Quote */}
    <PullQuote
      quote="Jeg har dedikeret mit liv til at hjælpe andre med at finde den samme ro og forbindelse til kroppen, som jeg selv fandt."
      author="Ida Sohn"
      background="sage"
    />

    {/* Story */}
    <section className="relative z-[1] py-14 md:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <FadeInOnScroll>
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-light tracking-[0.04em] mb-6">Min historie</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed font-light">
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
              className="w-full aspect-[4/3] object-cover"
              loading="lazy"
            />
          </FadeInOnScroll>
        </div>
      </div>
    </section>

    {/* Parallax divider */}
    <ParallaxImage src="/images/cacao_ceremony.jpg" alt="Cacao ceremony — Ida Sohn" height="min-h-[50vh]" />

    {/* Timeline */}
    <TimelineSection />

    {/* Credentials */}
    <section className="py-24 md:py-40 bg-card">
      <div className="container mx-auto px-4">
        <FadeInOnScroll>
          <p className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground text-center mb-4">Baggrund</p>
          <h2 className="font-heading text-2xl md:text-3xl font-light tracking-[0.04em] text-center mb-16">
            Baggrund & kompetencer
          </h2>
        </FadeInOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
          {credentials.map((c, i) => (
            <FadeInOnScroll key={i} delay={i * 120}>
              <div className="text-center">
                <div className="w-12 h-12 flex items-center justify-center mx-auto mb-5">
                  <c.icon size={24} strokeWidth={1.2} className="text-foreground/40" />
                </div>
                <h3 className="font-heading text-base tracking-[0.06em] mb-3">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-light">{c.text}</p>
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

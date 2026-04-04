import { CalendarCheck, HandHeart, Sparkles } from "lucide-react";

const steps = [
  {
    icon: CalendarCheck,
    title: "1. Book din tid",
    description: "Vælg en tid der passer dig. Du kan booke online eller ringe direkte.",
  },
  {
    icon: HandHeart,
    title: "2. Behandling",
    description:
      "En tryg og nærværende session hvor vi arbejder med kroppen og nervesystemet.",
  },
  {
    icon: Sparkles,
    title: "3. Forandring",
    description:
      "Mærk hvordan spændinger løsner sig og du finder mere ro i hverdagen.",
  },
];

const ProcessSteps = () => (
  <section className="py-16 md:py-24 bg-card">
    <div className="container mx-auto px-4">
      <h2 className="font-serif text-3xl md:text-4xl font-semibold text-center mb-4">
        Sådan foregår det
      </h2>
      <p className="text-center text-muted-foreground mb-14 max-w-xl mx-auto">
        Tre enkle trin til en lettere hverdag
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {steps.map((s, i) => (
          <div key={i} className="text-center">
            <div className="w-16 h-16 rounded-full bg-secondary/15 flex items-center justify-center mx-auto mb-5">
              <s.icon size={28} className="text-secondary" />
            </div>
            <h3 className="font-serif text-lg font-semibold mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSteps;

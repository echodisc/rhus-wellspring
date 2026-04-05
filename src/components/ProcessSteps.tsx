import { Phone, ClipboardList, HandHeart, Sparkles } from "lucide-react";
import FadeInOnScroll from "@/components/FadeInOnScroll";

const steps = [
  {
    icon: Phone,
    title: "Indledende samtale",
    description: "En kort snak om dine behov. Telefon, video eller i klinikken. 300 kr.",
  },
  {
    icon: ClipboardList,
    title: "Personlig plan",
    description: "Jeg lægger en plan, skræddersyet til dig og din situation.",
  },
  {
    icon: HandHeart,
    title: "Behandling",
    description: "Trygge sessioner hvor jeg arbejder med kroppen og nervesystemet.",
  },
  {
    icon: Sparkles,
    title: "Forandring",
    description: "Mærk hvordan spændinger løsner sig og du finder mere ro.",
  },
];

const ProcessSteps = () => (
  <section className="relative z-[1] py-14 md:py-24 bg-mottled-sage">
    <div className="container mx-auto px-4">
      <FadeInOnScroll>
        <p className="text-[11px] tracking-[0.15em] uppercase text-center text-muted-foreground mb-4">Processen</p>
        <h2 className="font-heading text-2xl md:text-3xl font-light tracking-[0.04em] text-center mb-10">
          Sådan foregår det
        </h2>
      </FadeInOnScroll>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 max-w-5xl mx-auto">
        {steps.map((s, i) => (
          <FadeInOnScroll key={i} delay={i * 120}>
            <div className="text-center">
              <div className="w-14 h-14 flex items-center justify-center mx-auto mb-5">
                <s.icon size={28} strokeWidth={1.2} className="text-foreground/50" />
              </div>
              <p className="text-xs tracking-[0.1em] uppercase text-muted-foreground mb-2">0{i + 1}</p>
              <h3 className="font-heading text-base tracking-[0.06em] mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-light">{s.description}</p>
            </div>
          </FadeInOnScroll>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSteps;

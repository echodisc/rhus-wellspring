import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import FadeInOnScroll from "@/components/FadeInOnScroll";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Kontakt = () => (
  <Layout>
    <Helmet>
      <title>Kontakt & Book en Tid — Kropsterapi Aarhus | Find Ro</title>
      <meta
        name="description"
        content="Book en tid til kropsterapi hos Find Ro i Aarhus. Ring, skriv eller book online. Centralt beliggende i Aarhus C."
      />
      <link rel="canonical" href="https://find-ro.dk/kontakt" />
    </Helmet>

    <section className="relative z-[1] py-20 md:py-32 bg-mottled-peach">
      <div className="container mx-auto px-4 text-center max-w-2xl">
        <h1 className="font-heading text-3xl md:text-4xl font-light tracking-[0.04em] mb-4">Kontakt & Booking</h1>
        <p className="text-muted-foreground leading-relaxed font-light">
          Klar til at tage det første skridt? Ræk ud — jeg svarer gerne på spørgsmål eller hjælper
          dig med at booke din første session.
        </p>
      </div>
    </section>

    <section className="py-24 md:py-40">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <FadeInOnScroll>
            <div>
              <h2 className="font-heading text-xl tracking-[0.04em] mb-10">Kontaktoplysninger</h2>
              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <Phone size={18} strokeWidth={1.2} className="text-foreground/40 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs tracking-[0.1em] uppercase text-foreground/60 mb-1">Telefon</p>
                    <a href="tel:+4512345678" className="text-foreground hover:text-primary transition-colors">
                      +45 12 34 56 78
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail size={18} strokeWidth={1.2} className="text-foreground/40 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs tracking-[0.1em] uppercase text-foreground/60 mb-1">Email</p>
                    <a href="mailto:ida@find-ro.dk" className="text-foreground hover:text-primary transition-colors">
                      ida@find-ro.dk
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin size={18} strokeWidth={1.2} className="text-foreground/40 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs tracking-[0.1em] uppercase text-foreground/60 mb-1">Adresse</p>
                    <p className="text-foreground">Aarhus C, Danmark</p>
                    <p className="text-xs text-muted-foreground mt-1">Præcis adresse oplyses ved booking</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock size={18} strokeWidth={1.2} className="text-foreground/40 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs tracking-[0.1em] uppercase text-foreground/60 mb-1">Åbningstider</p>
                    <p className="text-foreground">Mandag – Fredag: 9:00 – 17:00</p>
                    <p className="text-xs text-muted-foreground mt-1">Aftentider efter aftale</p>
                  </div>
                </div>
              </div>
              <img
                src="/images/IMG_20221221_105102-2048x1536.jpg"
                alt="Behandlingsrum hos Find Ro i Aarhus"
                className="w-full aspect-[4/3] object-cover"
                loading="lazy"
              />
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll delay={150}>
            <div className="bg-card p-8 md:p-10">
              <h2 className="font-heading text-xl tracking-[0.04em] mb-8">Skriv til mig</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-xs tracking-[0.1em] uppercase text-foreground/60 mb-2">Navn</label>
                  <input
                    id="name"
                    type="text"
                    className="w-full border-b border-border bg-transparent px-0 py-3 text-sm focus:outline-none focus:border-foreground transition-colors"
                    placeholder="Dit fulde navn"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs tracking-[0.1em] uppercase text-foreground/60 mb-2">Email</label>
                  <input
                    id="email"
                    type="email"
                    className="w-full border-b border-border bg-transparent px-0 py-3 text-sm focus:outline-none focus:border-foreground transition-colors"
                    placeholder="din@email.dk"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs tracking-[0.1em] uppercase text-foreground/60 mb-2">Telefon (valgfrit)</label>
                  <input
                    id="phone"
                    type="tel"
                    className="w-full border-b border-border bg-transparent px-0 py-3 text-sm focus:outline-none focus:border-foreground transition-colors"
                    placeholder="+45 ..."
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs tracking-[0.1em] uppercase text-foreground/60 mb-2">Besked</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full border-b border-border bg-transparent px-0 py-3 text-sm focus:outline-none focus:border-foreground transition-colors resize-none"
                    placeholder="Fortæl mig lidt om hvad du søger hjælp til..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full border border-foreground/30 px-6 py-4 text-xs tracking-[0.15em] uppercase text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
                >
                  Send besked
                </button>
                <p className="text-xs text-muted-foreground text-center font-light">
                  Jeg svarer typisk inden for 24 timer.
                </p>
              </form>
            </div>
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  </Layout>
);

export default Kontakt;

import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
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

    <section className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4 text-center max-w-2xl">
        <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-4">Kontakt & Booking</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Klar til at tage det første skridt? Ræk ud — jeg svarer gerne på spørgsmål eller hjælper
          dig med at booke din første session.
        </p>
      </div>
    </section>

    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact info */}
          <div>
            <h2 className="font-serif text-2xl font-semibold mb-8">Kontaktoplysninger</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Telefon</h3>
                  <a href="tel:+4512345678" className="text-muted-foreground hover:text-primary transition-colors">
                    +45 12 34 56 78
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Email</h3>
                  <a href="mailto:ida@find-ro.dk" className="text-muted-foreground hover:text-primary transition-colors">
                    ida@find-ro.dk
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Adresse</h3>
                  <p className="text-muted-foreground">Aarhus C, Danmark</p>
                  <p className="text-xs text-muted-foreground mt-1">Præcis adresse oplyses ved booking</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Åbningstider</h3>
                  <p className="text-muted-foreground">Mandag – Fredag: 9:00 – 17:00</p>
                  <p className="text-xs text-muted-foreground mt-1">Aftentider efter aftale</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-card rounded-xl border border-border p-8">
            <h2 className="font-serif text-2xl font-semibold mb-6">Skriv til mig</h2>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1.5">Navn</label>
                <input
                  id="name"
                  type="text"
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Dit fulde navn"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1.5">Email</label>
                <input
                  id="email"
                  type="email"
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="din@email.dk"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1.5">Telefon (valgfrit)</label>
                <input
                  id="phone"
                  type="tel"
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="+45 ..."
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1.5">Besked</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  placeholder="Fortæl mig lidt om hvad du søger hjælp til..."
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Send besked
              </button>
              <p className="text-xs text-muted-foreground text-center">
                Jeg svarer typisk inden for 24 timer.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Kontakt;

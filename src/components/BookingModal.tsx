import { useState } from "react";
import { X } from "lucide-react";

interface BookingModalProps {
  open: boolean;
  onClose: () => void;
}

const bodyTags = ["Spændinger", "Hjertebanken", "Søvnproblemer", "Smerter", "Uro i kroppen", "Træthed"];
const mindTags = ["Stress", "Angst", "Tankemylder", "Manglende overskud", "Nedtrykthed", "Manglende kropskontakt"];

const BookingModal = ({ open, onClose }: BookingModalProps) => {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [other, setOther] = useState("");

  if (!open) return null;

  const toggle = (tag: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(tag)) next.delete(tag);
      else next.add(tag);
      return next;
    });
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-background w-full max-w-lg mx-4 max-h-[90vh] overflow-y-auto p-8 md:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-foreground/60 hover:text-foreground transition-colors"
          aria-label="Luk"
        >
          <X size={18} />
        </button>

        <h2 className="font-heading text-2xl font-light tracking-[0.04em] mb-2">
          Indledende samtale
        </h2>
        <p className="text-sm text-muted-foreground font-light mb-1">
          En kort, uforpligtende samtale om dine behov. Telefon, video eller i klinikken. Ca. 15-20 min.
        </p>
        <p className="font-heading text-lg text-foreground mb-6">300 kr.</p>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
          <div>
            <p className="text-xs tracking-[0.1em] uppercase text-foreground/60 mb-4">
              Hvad oplever du? (valgfrit)
            </p>
            <p className="text-xs text-muted-foreground mb-2">Kropsligt:</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {bodyTags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => toggle(tag)}
                  className={`border px-3 py-1.5 text-xs cursor-pointer transition-all ${
                    selected.has(tag)
                      ? "bg-primary/10 border-primary/30 text-foreground"
                      : "border-border text-muted-foreground hover:border-foreground/30"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mb-2">Mentalt:</p>
            <div className="flex flex-wrap gap-2">
              {mindTags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => toggle(tag)}
                  className={`border px-3 py-1.5 text-xs cursor-pointer transition-all ${
                    selected.has(tag)
                      ? "bg-primary/10 border-primary/30 text-foreground"
                      : "border-border text-muted-foreground hover:border-foreground/30"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs tracking-[0.1em] uppercase text-foreground/60 mb-2">
              Andet (valgfrit)
            </label>
            <input
              type="text"
              value={other}
              onChange={(e) => setOther(e.target.value)}
              className="w-full border-b border-border bg-transparent px-0 py-3 text-sm focus:outline-none focus:border-foreground transition-colors"
              placeholder="F.eks. specifikke ønsker eller spørgsmål"
            />
          </div>

          <div>
            <label className="block text-xs tracking-[0.1em] uppercase text-foreground/60 mb-2">
              Navn
            </label>
            <input
              type="text"
              className="w-full border-b border-border bg-transparent px-0 py-3 text-sm focus:outline-none focus:border-foreground transition-colors"
              placeholder="Dit fulde navn"
            />
          </div>

          <div>
            <label className="block text-xs tracking-[0.1em] uppercase text-foreground/60 mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full border-b border-border bg-transparent px-0 py-3 text-sm focus:outline-none focus:border-foreground transition-colors"
              placeholder="din@email.dk"
            />
          </div>

          <div>
            <label className="block text-xs tracking-[0.1em] uppercase text-foreground/60 mb-2">
              Telefon (valgfrit)
            </label>
            <input
              type="tel"
              className="w-full border-b border-border bg-transparent px-0 py-3 text-sm focus:outline-none focus:border-foreground transition-colors"
              placeholder="+45 ..."
            />
          </div>

          <button
            type="submit"
            className="w-full border border-foreground/30 px-6 py-4 text-xs tracking-[0.15em] uppercase text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
          >
            Send forespørgsel
          </button>
          <p className="text-xs text-muted-foreground text-center font-light">
            Jeg svarer typisk inden for 24 timer
          </p>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;

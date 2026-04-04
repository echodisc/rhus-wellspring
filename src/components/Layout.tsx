import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";

const navLinks = [
  { to: "/", label: "Forside" },
  { to: "/kropsterapi", label: "Kropsterapi" },
  { to: "/stress-og-angst", label: "Stress & Angst" },
  { to: "/om-ida", label: "Om Ida" },
  { to: "/priser", label: "Priser" },
  { to: "/klientudtalelser", label: "Udtalelser" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/40">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <Link to="/" className="flex items-center">
          <img
            src="/images/Logoside-edited.png"
            alt="Find Ro — Kropsterapi i Aarhus"
            className="h-8 md:h-10 w-auto"
          />
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="text-[11px] font-light tracking-[0.12em] uppercase text-foreground/70 hover:text-foreground transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/kontakt"
              className="text-[11px] font-light tracking-[0.12em] uppercase text-foreground/70 hover:text-foreground transition-colors"
            >
              Booking
            </Link>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu — full screen overlay */}
      {open && (
        <div className="md:hidden fixed inset-0 z-50 bg-background flex flex-col items-center justify-center">
          <button
            className="absolute top-4 right-4 p-2 text-foreground"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
          <ul className="flex flex-col items-center gap-6">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="text-sm tracking-[0.12em] uppercase text-foreground/80 hover:text-foreground transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/kontakt"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex items-center border border-foreground/30 px-10 py-4 text-xs tracking-[0.15em] uppercase text-foreground hover:bg-foreground hover:text-background transition-all"
              >
                Booking
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="border-t border-border/40 mt-0 bg-background relative z-10">
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
          <img
            src="/images/Logoside-edited.png"
            alt="Find Ro"
            className="h-8 w-auto"
          />
          <ul className="flex flex-wrap gap-6">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-[11px] tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-border/40 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row gap-6 text-sm text-muted-foreground">
            <a href="tel:+4512345678" className="flex items-center gap-2 hover:text-foreground transition-colors">
              <Phone size={14} />
              +45 12 34 56 78
            </a>
            <a href="mailto:ida@find-ro.dk" className="flex items-center gap-2 hover:text-foreground transition-colors">
              <Mail size={14} />
              ida@find-ro.dk
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={14} />
              Aarhus C
            </span>
          </div>
          <p className="text-xs text-muted-foreground/60">
            © {new Date().getFullYear()} Find Ro
          </p>
        </div>
      </div>
    </div>
  </footer>
);

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1 relative z-10">{children}</main>
    <Footer />
  </div>
);

export default Layout;

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
  { to: "/kontakt", label: "Kontakt" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <Link to="/" className="font-serif text-2xl font-semibold text-primary tracking-wide">
          Find Ro
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/kontakt"
              className="ml-2 inline-flex items-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Book en tid
            </Link>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-background px-4 pb-6">
          <ul className="flex flex-col gap-3 pt-4">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-foreground/80 hover:text-primary transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/kontakt"
                onClick={() => setOpen(false)}
                className="mt-2 block text-center rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
              >
                Book en tid
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-card border-t border-border mt-16">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="font-serif text-xl font-semibold text-primary mb-3">Find Ro</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Kropsterapi i Aarhus med fokus på stress, angst og kropslige spændinger. En tryg og
            personlig tilgang til din krop og dit sind.
          </p>
        </div>
        <div>
          <h4 className="font-serif text-lg font-medium mb-3">Sider</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-primary transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-lg font-medium mb-3">Kontakt</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-secondary" />
              <a href="tel:+4512345678" className="hover:text-primary transition-colors">
                +45 12 34 56 78
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-secondary" />
              <a href="mailto:ida@find-ro.dk" className="hover:text-primary transition-colors">
                ida@find-ro.dk
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} className="text-secondary" />
              <span>Aarhus C, Danmark</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Find Ro — Kropsterapi i Aarhus. Alle rettigheder forbeholdes.
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
    <main className="flex-1">{children}</main>
    <Footer />
  </div>
);

export default Layout;

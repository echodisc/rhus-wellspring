import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import Kropsterapi from "./pages/Kropsterapi";
import StressOgAngst from "./pages/StressOgAngst";
import OmIda from "./pages/OmIda";
import Priser from "./pages/Priser";
import Kontakt from "./pages/Kontakt";
import Klientudtalelser from "./pages/Klientudtalelser";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/kropsterapi" element={<Kropsterapi />} />
            <Route path="/stress-og-angst" element={<StressOgAngst />} />
            <Route path="/om-ida" element={<OmIda />} />
            <Route path="/priser" element={<Priser />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/klientudtalelser" element={<Klientudtalelser />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;

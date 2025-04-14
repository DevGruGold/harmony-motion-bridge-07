
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { LanguageProvider } from "./contexts/LanguageContext";

// Pages
import Index from "./pages/Index";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import Partner from "./pages/Partner";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <NavBar />
          <main>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/services" element={<Services />} />
              <Route path="/partner" element={<Partner />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  </BrowserRouter>
);

export default App;

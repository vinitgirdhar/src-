import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Departments from "./pages/Departments";
import Contact from "./pages/Contact";
import Admissions from "./pages/Admissions";
import InformationTechnology from "./pages/departments/InformationTechnology";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route
            path="/departments/information-technology"
            element={<InformationTechnology />}
          />
          {/* Temporarily mapping other departments back to Departments list or NotFound until developed */}
          <Route path="/departments/computer" element={<NotFound />} />
          <Route path="/departments/electrical" element={<NotFound />} />
          <Route path="/departments/sh" element={<NotFound />} />
          <Route path="/departments/extc" element={<NotFound />} />
          <Route path="/departments/mechanical" element={<NotFound />} />
          <Route path="/departments/aiml" element={<NotFound />} />
          <Route path="/departments/ecs" element={<NotFound />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

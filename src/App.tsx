
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Simulateur from "./pages/Simulateur";
import Communaute from "./pages/Communaute";
import Ressources from "./pages/Ressources";
import Parcours from "./pages/Parcours";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Debutant from "./pages/parcours/Debutant";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/simulateur" element={<Simulateur />} />
          <Route path="/communaute" element={<Communaute />} />
          <Route path="/ressources" element={<Ressources />} />
          <Route path="/parcours" element={<Parcours />} />
          <Route path="/parcours/debutant" element={<Debutant />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

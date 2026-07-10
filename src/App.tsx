import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import EmergencyPage from "./pages/EmergencyPage.tsx";
import HealthPassportPage from "./pages/HealthPassportPage.tsx";
import BloodNetworkPage from "./pages/BloodNetworkPage.tsx";
import HospitalDashboard from "./pages/HospitalDashboard.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/emergency" element={<EmergencyPage />} />
          <Route path="/health-passport" element={<HealthPassportPage />} />
          <Route path="/blood-network" element={<BloodNetworkPage />} />
          <Route path="/dashboard" element={<HospitalDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

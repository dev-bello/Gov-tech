import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import RegistrationsDashboard from "./pages/dashboard/RegistrationsDashboard";
import ContactInfoDashboard from "./pages/dashboard/ContactInfoDashboard";
import FaqsDashboard from "./pages/dashboard/FaqsDashboard";
import PedagogyDashboard from "./pages/dashboard/PedagogyDashboard";
import CurriculumDashboard from "./pages/dashboard/CurriculumDashboard";
import ProgramDashboard from "./pages/dashboard/ProgramDashboard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { RegistrationModal } from "./components/RegistrationModal";

const queryClient = new QueryClient();

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Header openModal={openModal} />
          <main className="pt-16">
            <Routes>
              <Route path="/" element={<Index openModal={openModal} />} />
              <Route path="/dashboard" element={<Dashboard />}>
                <Route index element={<RegistrationsDashboard />} />
                <Route
                  path="registrations"
                  element={<RegistrationsDashboard />}
                />
                <Route path="contact" element={<ContactInfoDashboard />} />
                <Route path="faqs" element={<FaqsDashboard />} />
                <Route path="pedagogy" element={<PedagogyDashboard />} />
                <Route path="curriculum" element={<CurriculumDashboard />} />
                <Route path="program" element={<ProgramDashboard />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
        <RegistrationModal isOpen={isModalOpen} onClose={closeModal} />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

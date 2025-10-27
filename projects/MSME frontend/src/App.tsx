import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import RoleSelection from "./pages/RoleSelection";
import ConnectWallet from "./pages/ConnectWallet";
import MSMEDashboard from "./pages/msme/Dashboard";
import SubmitData from "./pages/msme/Submit";
import Score from "./pages/msme/Score";
import Passport from "./pages/msme/Passport";
import MSMEHistory from "./pages/msme/History";
import LenderDashboard from "./pages/lender/Dashboard";
import Verify from "./pages/lender/Verify";
import Verified from "./pages/lender/Verified";
import Settings from "./pages/Settings";
import FAQ from "./pages/FAQ";
import About from "./pages/About";
import Contact from "./pages/Contact";
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
        <Route path="/auth" element={<Auth />} />
        <Route path="/role-selection" element={<RoleSelection />} />
        <Route path="/connect-wallet" element={<ConnectWallet />} />
          
          {/* MSME Routes */}
          <Route path="/msme/dashboard" element={<MSMEDashboard />} />
          <Route path="/msme/submit" element={<SubmitData />} />
          <Route path="/msme/score" element={<Score />} />
          <Route path="/msme/passport" element={<Passport />} />
          <Route path="/msme/history" element={<MSMEHistory />} />
          
          {/* Lender Routes */}
          <Route path="/lender/dashboard" element={<LenderDashboard />} />
          <Route path="/lender/verify" element={<Verify />} />
          <Route path="/lender/verified" element={<Verified />} />
          
          {/* Common Routes */}
          <Route path="/settings" element={<Settings />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

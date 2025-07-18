
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Features from "./pages/Features";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import CompanyDetails from "./pages/CompanyDetails";
import MainApp from "./pages/MainApp";
import ContentPlan from "./pages/ContentPlan";
import ContentPreview from "./pages/ContentPreview";
import History from "./pages/History";
import CompanyInfo from "./pages/onboarding/CompanyInfo";
import MarketingStructure from "./pages/onboarding/MarketingStructure";
import Customers from "./pages/onboarding/Customers";
import Competitors from "./pages/onboarding/Competitors";
import FinalStep from "./pages/onboarding/FinalStep";
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
          <Route path="/features" element={<Features />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/company-details" element={<CompanyDetails />} />
          <Route path="/app" element={<MainApp />} />
          <Route path="/content-plan" element={<ContentPlan />} />
          <Route path="/content-preview" element={<ContentPreview />} />
          <Route path="/history" element={<History />} />
          <Route path="/onboarding/company-info" element={<CompanyInfo />} />
          <Route path="/onboarding/marketing" element={<MarketingStructure />} />
          <Route path="/onboarding/customers" element={<Customers />} />
          <Route path="/onboarding/competitors" element={<Competitors />} />
          <Route path="/onboarding/final" element={<FinalStep />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

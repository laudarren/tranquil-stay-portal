import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ListProperty from "./pages/ListProperty";
import Support from "./pages/Support";
import PropertyDetails from "./pages/PropertyDetails";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Events from "./pages/Events";
import TravelGuide from "./pages/TravelGuide";
import Reservations from "./pages/Reservations";
import Checkout from "./pages/Checkout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/list-property" element={<ListProperty />} />
          <Route path="/support" element={<Support />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/events" element={<Events />} />
          <Route path="/travel-guide" element={<TravelGuide />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
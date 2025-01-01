import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import SignIn from "@/pages/SignIn";
import SignUp from "@/pages/SignUp";
import ListProperty from "@/pages/ListProperty";
import PropertyDetails from "@/pages/PropertyDetails";
import Reservations from "@/pages/Reservations";
import Events from "@/pages/Events";
import TravelGuide from "@/pages/TravelGuide";
import Support from "@/pages/Support";
import Checkout from "@/pages/Checkout";
import AdminDashboard from "@/pages/AdminDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/list-property" element={<ListProperty />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/events" element={<Events />} />
        <Route path="/travel-guide" element={<TravelGuide />} />
        <Route path="/support" element={<Support />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
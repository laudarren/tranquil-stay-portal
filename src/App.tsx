import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import SignIn from "@/pages/SignIn";
import SignUp from "@/pages/SignUp";
import Support from "@/pages/Support";
import TravelGuide from "@/pages/TravelGuide";
import Events from "@/pages/Events";
import PropertyDetails from "@/pages/PropertyDetails";
import Checkout from "@/pages/Checkout";
import AdminDashboard from "@/pages/AdminDashboard";
import EditProperty from "@/pages/EditProperty";
import AddProperty from "@/pages/AddProperty";
import ListProperty from "@/pages/ListProperty";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/support" element={<Support />} />
        <Route path="/travel-guide" element={<TravelGuide />} />
        <Route path="/events" element={<Events />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/edit-property/:id" element={<EditProperty />} />
        <Route path="/add-property" element={<AddProperty />} />
        <Route path="/properties" element={<ListProperty />} />
      </Routes>
    </Router>
  );
};

export default App;
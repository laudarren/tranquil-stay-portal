import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PropertyDetails from "./pages/PropertyDetails";
import ListProperty from "./pages/ListProperty";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Support from "./pages/Support";
import TravelGuide from "./pages/TravelGuide";
import Events from "./pages/Events";
import Reservations from "./pages/Reservations";
import Checkout from "./pages/Checkout";
import AdminDashboard from "./pages/AdminDashboard";
import EditProperty from "./pages/EditProperty";
import AddProperty from "./pages/AddProperty";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/properties" element={<ListProperty />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/support" element={<Support />} />
        <Route path="/travel-guide" element={<TravelGuide />} />
        <Route path="/events" element={<Events />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/edit-property/:id" element={<EditProperty />} />
        <Route path="/list-property" element={<AddProperty />} />
      </Routes>
    </Router>
  );
}

export default App;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard";
import PropertyDetails from "./pages/PropertyDetails";
import EditProperty from "./pages/EditProperty"; // Import the new EditProperty component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/edit-property/:id" element={<EditProperty />} /> {/* Add the new route for editing properties */}
      </Routes>
    </Router>
  );
};

export default App;

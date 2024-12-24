import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const reservationIds = location.state?.reservationIds || [];
  const totalAmount = location.state?.totalAmount || 0;

  return (
    <div className="container mx-auto px-4 py-8">
      <Button
        variant="ghost"
        className="mb-6"
        onClick={() => navigate('/reservations')}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Reservations
      </Button>

      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Checkout</h1>
        
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
          <div className="border-t border-gray-200 pt-4">
            <div className="flex justify-between mb-2">
              <span>Number of Reservations:</span>
              <span>{reservationIds.length}</span>
            </div>
            <div className="flex justify-between font-semibold text-lg">
              <span>Total Amount:</span>
              <span>${totalAmount}</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Payment Details</h2>
          <p className="text-gray-600">
            Payment functionality will be implemented soon. For now, this is just a preview of the checkout page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
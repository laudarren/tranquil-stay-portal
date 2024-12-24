import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CreditCard } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const reservationIds = location.state?.reservationIds || [];
  const totalAmount = location.state?.totalAmount || 0;

  const handlePayment = () => {
    toast({
      title: "Payment Processing",
      description: "Your payment is being processed. This is a demo message.",
    });
    setTimeout(() => {
      toast({
        title: "Payment Successful",
        description: "Thank you for your payment! This is a demo message.",
      });
      navigate('/reservations');
    }, 2000);
  };

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
            <div className="flex justify-between mb-2">
              <span>Service Fee:</span>
              <span>$25.00</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Tax:</span>
              <span>${(totalAmount * 0.1).toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-semibold text-lg pt-4 border-t">
              <span>Total Amount:</span>
              <span>${(totalAmount + 25 + (totalAmount * 0.1)).toFixed(2)}</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">Payment Details</h2>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-md">
              <h3 className="font-medium mb-2">Payment Method</h3>
              <p className="text-sm text-gray-600 mb-2">
                For demo purposes, all payment methods are accepted
              </p>
              <ul className="text-sm text-gray-600 list-disc list-inside">
                <li>Credit/Debit Cards</li>
                <li>PayPal</li>
                <li>Apple Pay</li>
                <li>Google Pay</li>
              </ul>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-md">
              <h3 className="font-medium mb-2">Billing Address</h3>
              <p className="text-sm text-gray-600">
                Your billing address should match your payment method
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Cancellation Policy</h2>
          <p className="text-sm text-gray-600 mb-4">
            Free cancellation before check-in date. Please review our full cancellation policy for details.
          </p>
          
          <Button 
            className="w-full"
            size="lg"
            onClick={handlePayment}
          >
            <CreditCard className="mr-2 h-4 w-4" />
            Pay ${(totalAmount + 25 + (totalAmount * 0.1)).toFixed(2)}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
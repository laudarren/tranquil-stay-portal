import { Button } from "@/components/ui/button";
import { CreditCard } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface PaymentSummaryProps {
  selectedCount: number;
  totalAmount: number;
  selectedReservations: string[];
}

export const PaymentSummary = ({ selectedCount, totalAmount, selectedReservations }: PaymentSummaryProps) => {
  const navigate = useNavigate();
  
  return (
    <div className="mb-6 p-4 bg-muted rounded-lg">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold">Selected Reservations: {selectedCount}</h3>
          <p className="text-sm text-muted-foreground">Total Amount: ${totalAmount}</p>
        </div>
        <Button 
          onClick={() => navigate('/checkout', { state: { reservationIds: selectedReservations } })}
          disabled={selectedCount === 0}
        >
          <CreditCard className="mr-2 h-4 w-4" />
          Pay Selected (${totalAmount})
        </Button>
      </div>
    </div>
  );
};
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { PaymentSummary } from "@/components/reservations/PaymentSummary";
import { ReservationCard } from "@/components/reservations/ReservationCard";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/components/ui/use-toast";

const Reservations = () => {
  const [selectedReservations, setSelectedReservations] = useState<string[]>([]);
  const { toast } = useToast();

  const { data: reservations, isLoading, error } = useQuery({
    queryKey: ['reservations'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('reservations')
        .select(`
          *,
          property:properties(
            name,
            location,
            image_url
          )
        `);

      if (error) {
        toast({
          variant: "destructive",
          title: "Error fetching reservations",
          description: error.message
        });
        throw error;
      }

      return data;
    }
  });

  const handleCheckboxChange = (reservationId: string) => {
    setSelectedReservations(prev => 
      prev.includes(reservationId) 
        ? prev.filter(id => id !== reservationId)
        : [...prev, reservationId]
    );
  };

  const totalAmount = reservations
    ?.filter(r => selectedReservations.includes(r.id))
    .reduce((total, r) => total + (r.price_per_night * r.total_nights), 0) || 0;

  if (error) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-8 mt-20">
          <div className="text-center text-red-500">
            Error loading reservations. Please try again later.
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8 mt-20">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">My Reservations</h1>
          <p className="text-muted-foreground">
            Track and manage your upcoming stays
          </p>
        </div>

        {reservations?.length === 0 && !isLoading && (
          <div className="text-center py-8">
            <p className="text-muted-foreground">No reservations found.</p>
          </div>
        )}

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="h-[200px] w-full" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            ))}
          </div>
        ) : (
          <>
            {reservations && reservations.length > 1 && (
              <PaymentSummary
                selectedCount={selectedReservations.length}
                totalAmount={totalAmount}
                selectedReservations={selectedReservations}
              />
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reservations?.map((reservation) => (
                <ReservationCard
                  key={reservation.id}
                  reservation={{
                    id: reservation.id,
                    propertyName: reservation.property.name,
                    location: reservation.property.location,
                    checkIn: reservation.check_in,
                    checkOut: reservation.check_out,
                    status: reservation.status,
                    price: reservation.price_per_night,
                    totalNights: reservation.total_nights,
                    image: reservation.property.image_url
                  }}
                  isSelected={selectedReservations.includes(reservation.id)}
                  onSelect={handleCheckboxChange}
                />
              ))}
            </div>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Reservations;
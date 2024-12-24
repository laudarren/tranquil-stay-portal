import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { PaymentSummary } from "@/components/reservations/PaymentSummary";
import { ReservationCard } from "@/components/reservations/ReservationCard";
import { Reservation } from "@/types/reservation";

const Reservations = () => {
  const [selectedReservations, setSelectedReservations] = useState<number[]>([]);

  const reservations: Reservation[] = [
    {
      id: 1,
      propertyName: "Luxury Downtown Apartment",
      location: "123 Main St, San Francisco",
      checkIn: "2024-03-20",
      checkOut: "2024-03-25",
      status: "pending",
      price: 250,
      totalNights: 5,
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
    },
    {
      id: 2,
      propertyName: "Cozy Beach House",
      location: "456 Ocean Ave, Santa Monica",
      checkIn: "2024-04-15",
      checkOut: "2024-04-20",
      status: "pending",
      price: 350,
      totalNights: 5,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
    },
    {
      id: 3,
      propertyName: "Mountain View Villa",
      location: "789 Peak Road, Aspen",
      checkIn: "2024-05-01",
      checkOut: "2024-05-07",
      status: "waiting_payment",
      price: 500,
      totalNights: 6,
      image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233"
    },
    {
      id: 4,
      propertyName: "Urban Loft Studio",
      location: "321 Downtown Ave, New York",
      checkIn: "2024-06-10",
      checkOut: "2024-06-15",
      status: "waiting_payment",
      price: 300,
      totalNights: 5,
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
    },
    {
      id: 5,
      propertyName: "Seaside Resort Suite",
      location: "789 Beach Blvd, Miami",
      checkIn: "2024-07-01",
      checkOut: "2024-07-08",
      status: "waiting_payment",
      price: 450,
      totalNights: 7,
      image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9"
    },
    {
      id: 6,
      propertyName: "Historic Downtown Condo",
      location: "567 Heritage St, Boston",
      checkIn: "2024-08-15",
      checkOut: "2024-08-20",
      status: "pending",
      price: 280,
      totalNights: 5,
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994"
    }
  ];

  const pendingPaymentReservations = reservations.filter(r => r.status === 'waiting_payment');
  
  const totalAmount = selectedReservations.reduce((total, id) => {
    const reservation = reservations.find(r => r.id === id);
    return total + (reservation ? reservation.price * reservation.totalNights : 0);
  }, 0);

  const handleCheckboxChange = (reservationId: number) => {
    setSelectedReservations(prev => 
      prev.includes(reservationId) 
        ? prev.filter(id => id !== reservationId)
        : [...prev, reservationId]
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8 mt-20">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">My Reservations</h1>
          <p className="text-muted-foreground">
            Track and manage your upcoming stays. Your bookings are currently pending approval from property owners.
          </p>
        </div>

        {pendingPaymentReservations.length > 1 && (
          <PaymentSummary
            selectedCount={selectedReservations.length}
            totalAmount={totalAmount}
            selectedReservations={selectedReservations}
          />
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reservations.map((reservation) => (
            <ReservationCard
              key={reservation.id}
              reservation={reservation}
              isSelected={selectedReservations.includes(reservation.id)}
              onSelect={handleCheckboxChange}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Reservations;
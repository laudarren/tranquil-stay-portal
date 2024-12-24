import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, Calendar, BedDouble, CreditCard, CheckSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";

const Reservations = () => {
  const navigate = useNavigate();
  const [selectedReservations, setSelectedReservations] = useState<number[]>([]);

  const reservations = [
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
          <div className="mb-6 p-4 bg-muted rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">Selected Reservations: {selectedReservations.length}</h3>
                <p className="text-sm text-muted-foreground">Total Amount: ${totalAmount}</p>
              </div>
              <Button 
                onClick={() => navigate('/checkout', { state: { reservationIds: selectedReservations } })}
                disabled={selectedReservations.length === 0}
              >
                <CreditCard className="mr-2 h-4 w-4" />
                Pay Selected (${totalAmount})
              </Button>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reservations.map((reservation) => (
            <Card 
              key={reservation.id} 
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video relative overflow-hidden">
                {reservation.status === 'waiting_payment' && (
                  <div className="absolute top-4 left-4 z-10">
                    <Checkbox
                      checked={selectedReservations.includes(reservation.id)}
                      onCheckedChange={() => handleCheckboxChange(reservation.id)}
                      className="bg-white"
                    />
                  </div>
                )}
                <img
                  src={`${reservation.image}?auto=format&fit=crop&w=800&q=80`}
                  alt={reservation.propertyName}
                  className="object-cover w-full h-full"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/placeholder.svg";
                  }}
                />
                <Badge 
                  className={`absolute top-4 right-4 ${
                    reservation.status === 'waiting_payment' 
                      ? 'bg-orange-500' 
                      : 'bg-yellow-500'
                  }`}
                  variant="secondary"
                >
                  {reservation.status === 'waiting_payment' ? 'Payment Required' : 'Pending'}
                </Badge>
              </div>
              
              <CardHeader>
                <CardTitle className="line-clamp-1">{reservation.propertyName}</CardTitle>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm line-clamp-1">{reservation.location}</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>Check-in:</span>
                  </div>
                  <span className="font-medium">
                    {new Date(reservation.checkIn).toLocaleDateString()}
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>Check-out:</span>
                  </div>
                  <span className="font-medium">
                    {new Date(reservation.checkOut).toLocaleDateString()}
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>Status:</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="capitalize">
                      {reservation.status === 'waiting_payment' ? 'Payment Required' : 'Pending'}
                    </Badge>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1">
                    <BedDouble className="h-4 w-4" />
                    <span>Price per night:</span>
                  </div>
                  <span className="font-medium">${reservation.price}</span>
                </div>

                {reservation.status === 'waiting_payment' && (
                  <div className="space-y-3 pt-3 border-t">
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Price per night</span>
                        <span>${reservation.price}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Number of nights</span>
                        <span>{reservation.totalNights}</span>
                      </div>
                      <div className="flex justify-between font-semibold">
                        <span>Total Amount</span>
                        <span>${reservation.price * reservation.totalNights}</span>
                      </div>
                    </div>
                    <Button 
                      className="w-full" 
                      onClick={() => navigate(`/property/${reservation.id}`)}
                      variant={selectedReservations.includes(reservation.id) ? "secondary" : "default"}
                    >
                      <CreditCard className="mr-2 h-4 w-4" />
                      Pay Individually
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Reservations;

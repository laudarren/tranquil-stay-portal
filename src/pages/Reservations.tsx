import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, Calendar, BedDouble } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Reservations = () => {
  const navigate = useNavigate();

  // This would typically come from an API or database
  const reservations = [
    {
      id: 1,
      propertyName: "Luxury Downtown Apartment",
      location: "123 Main St, San Francisco",
      checkIn: "2024-03-20",
      checkOut: "2024-03-25",
      status: "pending",
      price: 250,
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
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
    }
  ];

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reservations.map((reservation) => (
            <Card key={reservation.id} className="overflow-hidden">
              <div className="aspect-video relative overflow-hidden">
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
                  className="absolute top-4 right-4 bg-yellow-500"
                  variant="secondary"
                >
                  {reservation.status}
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
                  <Badge variant="outline" className="capitalize">
                    {reservation.status}
                  </Badge>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1">
                    <BedDouble className="h-4 w-4" />
                    <span>Price per night:</span>
                  </div>
                  <span className="font-medium">${reservation.price}</span>
                </div>

                <Button 
                  className="w-full mt-4"
                  onClick={() => navigate(`/property/${reservation.id}`)}
                >
                  View Property Details
                </Button>
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
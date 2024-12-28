import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Clock, MapPin, Calendar, BedDouble, CreditCard } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Reservation {
  id: string;
  propertyName: string;
  location: string;
  checkIn: string;
  checkOut: string;
  status: string;
  price: number;
  totalNights: number;
  image: string;
}

interface ReservationCardProps {
  reservation: Reservation;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

export const ReservationCard = ({ reservation, isSelected, onSelect }: ReservationCardProps) => {
  const navigate = useNavigate();
  
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-video relative overflow-hidden">
        {reservation.status === 'waiting_payment' && (
          <div className="absolute top-4 left-4 z-10">
            <Checkbox
              checked={isSelected}
              onCheckedChange={() => onSelect(reservation.id)}
              className="bg-white"
            />
          </div>
        )}
        <img
          src={reservation.image}
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
              onClick={() => navigate('/checkout', { state: { reservationIds: [reservation.id] } })}
              variant={isSelected ? "secondary" : "default"}
            >
              <CreditCard className="mr-2 h-4 w-4" />
              Pay Individually
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
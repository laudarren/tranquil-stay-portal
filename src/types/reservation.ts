export type ReservationStatus = 'pending' | 'waiting_payment';

export interface Reservation {
  id: number;
  propertyName: string;
  location: string;
  checkIn: string;
  checkOut: string;
  status: ReservationStatus;
  price: number;
  totalNights: number;
  image: string;
}
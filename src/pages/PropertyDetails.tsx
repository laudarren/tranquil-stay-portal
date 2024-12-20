import { useParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { BedDouble, Bath, DollarSign, MapPin, ArrowLeft } from "lucide-react";

const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();

  // This would typically come from an API or database
  const properties = [
    {
      id: "1",
      name: "Luxury Downtown Apartment",
      location: "123 Main St, San Francisco",
      price: 250,
      bedrooms: 2,
      bathrooms: 2,
      description: "Experience luxury living in the heart of San Francisco. This modern apartment features stunning city views, high-end appliances, and premium furnishings.",
      amenities: ["Wi-Fi", "Air Conditioning", "Full Kitchen", "Washer/Dryer", "Parking", "Gym Access"],
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    },
    {
      id: "2",
      name: "Cozy Beach House",
      location: "456 Ocean Ave, Santa Monica",
      price: 350,
      bedrooms: 3,
      bathrooms: 2,
      description: "A charming beach house just steps from the ocean, perfect for a relaxing getaway.",
      amenities: ["Wi-Fi", "Air Conditioning", "Full Kitchen", "Washer/Dryer", "Parking"],
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    },
    {
      id: "3",
      name: "Modern City Loft",
      location: "789 Park Rd, Los Angeles",
      price: 200,
      bedrooms: 1,
      bathrooms: 1,
      description: "A stylish loft in the heart of the city, ideal for urban explorers.",
      amenities: ["Wi-Fi", "Air Conditioning", "Full Kitchen"],
      image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    },
    {
      id: "4",
      name: "Mountain View Cabin",
      location: "321 Pine Trail, Lake Tahoe",
      price: 280,
      bedrooms: 2,
      bathrooms: 1,
      description: "A cozy cabin with breathtaking mountain views, perfect for a weekend retreat.",
      amenities: ["Wi-Fi", "Fireplace", "Full Kitchen"],
      image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    },
    {
      id: "5",
      name: "Seaside Villa",
      location: "567 Coastal Way, Malibu",
      price: 450,
      bedrooms: 4,
      bathrooms: 3,
      description: "A luxurious villa overlooking the ocean, with all the amenities for a perfect vacation.",
      amenities: ["Wi-Fi", "Pool", "Full Kitchen", "Washer/Dryer", "Parking"],
      image: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    },
    {
      id: "6",
      name: "Urban Penthouse",
      location: "890 Sky Drive, San Diego",
      price: 380,
      bedrooms: 3,
      bathrooms: 2,
      description: "A stunning penthouse with panoramic city views and modern amenities.",
      amenities: ["Wi-Fi", "Air Conditioning", "Full Kitchen", "Gym Access"],
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    }
  ];

  const property = properties.find(p => p.id === id);

  if (!property) {
    return <div>Property not found</div>;
  }

  const handleBooking = () => {
    toast({
      title: "Booking Initiated",
      description: "Your booking request has been received. We'll contact you shortly.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8 mt-20">
        <Button
          variant="ghost"
          className="mb-6"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Listings
        </Button>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <img
              src={property.image}
              alt={property.name}
              className="object-cover w-full h-full"
            />
          </div>

          <Card>
            <CardContent className="p-6">
              <h1 className="text-3xl font-bold mb-2">{property.name}</h1>
              
              <div className="flex items-center text-muted-foreground mb-4">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{property.location}</span>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center">
                  <BedDouble className="h-4 w-4 mr-1" />
                  <span>{property.bedrooms} Bedrooms</span>
                </div>
                <div className="flex items-center">
                  <Bath className="h-4 w-4 mr-1" />
                  <span>{property.bathrooms} Bathrooms</span>
                </div>
                <div className="flex items-center">
                  <DollarSign className="h-4 w-4" />
                  <span>{property.price}/night</span>
                </div>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Description</h2>
                <p className="text-muted-foreground">{property.description}</p>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Amenities</h2>
                <ul className="grid grid-cols-2 gap-2">
                  {property.amenities.map((amenity, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-muted-foreground">{amenity}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button className="w-full" size="lg" onClick={handleBooking}>
                Book Now
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PropertyDetails;

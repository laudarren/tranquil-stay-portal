import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BedDouble, MapPin, Bath, DollarSign } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { SearchBar } from "@/components/SearchBar";

const ListProperty = () => {
  const navigate = useNavigate();
  
  // This would typically come from an API or database
  const properties = [
    {
      id: 1,
      name: "Luxury Downtown Apartment",
      location: "123 Main St, San Francisco",
      price: 250,
      bedrooms: 2,
      bathrooms: 2,
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    },
    {
      id: 2,
      name: "Cozy Beach House",
      location: "456 Ocean Ave, Santa Monica",
      price: 350,
      bedrooms: 3,
      bathrooms: 2,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    },
    {
      id: 3,
      name: "Modern City Loft",
      location: "789 Park Rd, Los Angeles",
      price: 200,
      bedrooms: 1,
      bathrooms: 1,
      image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    },
    {
      id: 4,
      name: "Mountain View Cabin",
      location: "321 Pine Trail, Lake Tahoe",
      price: 280,
      bedrooms: 2,
      bathrooms: 1,
      image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    },
    {
      id: 5,
      name: "Seaside Villa",
      location: "567 Coastal Way, Malibu",
      price: 450,
      bedrooms: 4,
      bathrooms: 3,
      image: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    },
    {
      id: 6,
      name: "Urban Penthouse",
      location: "890 Sky Drive, San Diego",
      price: 380,
      bedrooms: 3,
      bathrooms: 2,
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8 mt-20">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Available Properties</h1>
          <p className="text-muted-foreground">
            Discover our selection of premium accommodations
          </p>
        </div>

        <div className="mb-8">
          <SearchBar />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <Card 
              key={property.id} 
              className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => navigate(`/property/${property.id}`)}
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={property.image}
                  alt={property.name}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <CardHeader>
                <CardTitle className="line-clamp-1">{property.name}</CardTitle>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm line-clamp-1">{property.location}</span>
                </div>
              </CardHeader>

              <CardContent>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center">
                      <BedDouble className="h-4 w-4 mr-1" />
                      <span>{property.bedrooms}</span>
                    </div>
                    <div className="flex items-center">
                      <Bath className="h-4 w-4 mr-1" />
                      <span>{property.bathrooms}</span>
                    </div>
                  </div>
                  <div className="flex items-center font-semibold">
                    <DollarSign className="h-4 w-4" />
                    <span>{property.price}</span>
                    <span className="text-muted-foreground ml-1">/night</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ListProperty;
import { useParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { BedDouble, Bath, DollarSign, MapPin, ArrowLeft } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Skeleton } from "@/components/ui/skeleton";

const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();

  const { data: property, isLoading, error } = useQuery({
    queryKey: ['property', id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('properties')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;
      return data;
    },
  });

  const handleBooking = () => {
    toast({
      title: "Booking Initiated",
      description: "Your booking request has been received. We'll contact you shortly.",
    });
    navigate('/checkout');
  };

  if (error) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-8 mt-20">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-red-600">Error loading property</h2>
            <p className="text-gray-600 mt-2">Please try again later</p>
            <Button
              variant="ghost"
              className="mt-4"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Listings
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-8 mt-20">
          <div className="grid md:grid-cols-2 gap-8">
            <Skeleton className="aspect-video rounded-lg" />
            <Card>
              <CardContent className="p-6">
                <Skeleton className="h-8 w-3/4 mb-2" />
                <Skeleton className="h-4 w-1/2 mb-4" />
                <div className="space-y-4">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!property) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-8 mt-20">
          <div className="text-center">
            <h2 className="text-2xl font-bold">Property not found</h2>
            <Button
              variant="ghost"
              className="mt-4"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Listings
            </Button>
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
              src={property.image_url}
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
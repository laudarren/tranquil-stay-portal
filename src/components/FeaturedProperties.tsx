import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";

const properties = [
  {
    id: 1,
    title: "Luxury Downtown Apartment",
    location: "New York City",
    price: "$299",
    rating: 4.8,
    image: "https://tse2.mm.bing.net/th?id=OIP.IOABGm5t9Zmzflox1uGHiAHaEK&pid=Api",
  },
  {
    id: 2,
    title: "Seaside Villa",
    location: "Miami Beach",
    price: "$459",
    rating: 4.9,
    image: "https://tse4.mm.bing.net/th?id=OIP.xYCoQTPFUWpNW0I3RtqIwgHaFc&pid=Api",
  },
  {
    id: 3,
    title: "Mountain Retreat",
    location: "Aspen",
    price: "$399",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
  },
];

export const FeaturedProperties = () => {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <Card key={property.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle>{property.title}</CardTitle>
                <CardDescription>{property.location}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary">{property.price}<span className="text-sm text-gray-500">/night</span></span>
                  <div className="flex items-center gap-1">
                    <Star className="h-5 w-5 fill-secondary text-secondary" />
                    <span className="font-medium">{property.rating}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

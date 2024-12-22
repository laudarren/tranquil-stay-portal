import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Globe, Map, Compass, Suitcase } from "lucide-react";

const TravelGuide = () => {
  const destinations = [
    {
      id: 1,
      name: "Mountain Retreat",
      location: "Swiss Alps",
      description: "Experience the breathtaking beauty of the Swiss Alps with stunning mountain views and pristine nature.",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
      activities: ["Hiking", "Skiing", "Photography", "Mountain Climbing"],
      bestTime: "June to September for hiking, December to March for skiing",
      tips: "Pack layers of clothing as weather can change quickly in the mountains."
    },
    {
      id: 2,
      name: "Coastal Paradise",
      location: "Mediterranean Coast",
      description: "Discover charming coastal towns, crystal-clear waters, and rich cultural heritage.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      activities: ["Beach Activities", "Sailing", "Cultural Tours", "Local Cuisine"],
      bestTime: "May to October",
      tips: "Book accommodations in advance during peak summer months."
    },
    {
      id: 3,
      name: "Forest Adventure",
      location: "Pacific Northwest",
      description: "Immerse yourself in ancient forests, waterfalls, and diverse wildlife.",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
      activities: ["Trail Walking", "Wildlife Watching", "Camping", "Photography"],
      bestTime: "July to September",
      tips: "Bring waterproof gear as weather can be unpredictable."
    }
  ];

  const guidelines = [
    {
      title: "Pre-Trip Planning",
      icon: <Globe className="h-6 w-6" />,
      items: [
        "Research your destination thoroughly",
        "Check visa requirements and travel documents",
        "Get travel insurance",
        "Make accommodation bookings in advance",
        "Plan your itinerary but stay flexible"
      ]
    },
    {
      title: "Packing Essentials",
      icon: <Suitcase className="h-6 w-6" />,
      items: [
        "Weather-appropriate clothing",
        "Important documents and copies",
        "Basic first-aid kit",
        "Universal power adapter",
        "Essential medications"
      ]
    },
    {
      title: "Local Navigation",
      icon: <Map className="h-6 w-6" />,
      items: [
        "Download offline maps",
        "Learn basic local phrases",
        "Keep emergency contacts handy",
        "Research local transportation options",
        "Save important addresses"
      ]
    },
    {
      title: "Safety Tips",
      icon: <Compass className="h-6 w-6" />,
      items: [
        "Stay aware of your surroundings",
        "Keep valuables secure",
        "Share itinerary with family/friends",
        "Know local emergency numbers",
        "Respect local customs and laws"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8 mt-20">
        <h1 className="text-4xl font-bold text-primary mb-8">Travel Guide</h1>
        
        <Tabs defaultValue="destinations" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="destinations">Destinations</TabsTrigger>
            <TabsTrigger value="guidelines">Travel Guidelines</TabsTrigger>
          </TabsList>

          <TabsContent value="destinations" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {destinations.map((destination) => (
                <Card key={destination.id} className="hover:shadow-lg transition-shadow">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <img
                      src={`${destination.image}?auto=format&fit=crop&w=800&q=80`}
                      alt={destination.name}
                      className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/placeholder.svg";
                      }}
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{destination.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm font-semibold mb-2">{destination.location}</p>
                    <p className="text-muted-foreground mb-4">{destination.description}</p>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Activities</h4>
                        <ul className="list-disc list-inside text-sm text-muted-foreground">
                          {destination.activities.map((activity, index) => (
                            <li key={index}>{activity}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Best Time to Visit</h4>
                        <p className="text-sm text-muted-foreground">{destination.bestTime}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Travel Tips</h4>
                        <p className="text-sm text-muted-foreground">{destination.tips}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="guidelines">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {guidelines.map((guideline, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      {guideline.icon}
                      {guideline.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {guideline.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default TravelGuide;
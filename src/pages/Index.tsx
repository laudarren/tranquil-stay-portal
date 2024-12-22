import { Header } from "@/components/Header";
import { SearchBar } from "@/components/SearchBar";
import { FeaturedProperties } from "@/components/FeaturedProperties";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Local Food Festival",
      date: "2024-03-15",
      time: "11:00 AM",
      location: "Downtown Square",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      details: "Join us for a celebration of local flavors and culture! This festival features over 30 local food vendors, live cooking demonstrations, cultural performances, and activities for the whole family. Don't miss our special chef showcase at 2 PM."
    },
    {
      id: 2,
      title: "Art Gallery Opening",
      date: "2024-03-20",
      time: "6:30 PM",
      location: "City Art Museum",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      details: "Be among the first to experience our new exhibition featuring works from both emerging local artists and renowned international creators. The evening includes guided tours, artist meet-and-greets, and complimentary refreshments."
    },
    {
      id: 3,
      title: "Music in the Park",
      date: "2024-03-25",
      time: "4:00 PM",
      location: "Central Park",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
      details: "Bring your blankets and picnic baskets for an evening of live music under the stars. The event features three local bands performing various genres from jazz to indie rock. Food trucks will be available on site."
    }
  ];

  const travelDestinations = [
    {
      id: 1,
      name: "Swiss Alps Adventure",
      location: "Switzerland",
      description: "Experience breathtaking mountain views and pristine alpine landscapes.",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
      activities: ["Hiking", "Skiing", "Photography"],
      bestTime: "June to September"
    },
    {
      id: 2,
      name: "Coastal Paradise",
      location: "Mediterranean Coast",
      description: "Discover charming coastal towns and crystal-clear waters.",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
      activities: ["Beach", "Sailing", "Snorkeling"],
      bestTime: "May to October"
    },
    {
      id: 3,
      name: "Forest Retreat",
      location: "Pacific Northwest",
      description: "Immerse yourself in ancient forests and stunning waterfalls.",
      image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff",
      activities: ["Hiking", "Wildlife Watching", "Photography"],
      bestTime: "July to September"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-primary/10 to-white">
        <div className="container mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 animate-fade-in">
            Find Your Perfect Stay
          </h1>
          <p className="text-xl text-gray-600 mb-12 animate-fade-in">
            Discover and book unique accommodations in Sarawak
          </p>
          <SearchBar />
        </div>
      </section>

      <FeaturedProperties />
      <Features />

      {/* Travel Destinations Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-primary">Popular Destinations</h2>
            <Link to="/travel-guide" className="text-secondary hover:text-secondary/80">
              View all destinations →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {travelDestinations.map((destination) => (
              <Dialog key={destination.id}>
                <DialogTrigger asChild>
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer">
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
                      <CardTitle className="flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-primary" />
                        {destination.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm font-semibold mb-2">{destination.location}</p>
                      <p className="text-muted-foreground">{destination.description}</p>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>{destination.name}</DialogTitle>
                  </DialogHeader>
                  <div className="mt-4">
                    <img
                      src={`${destination.image}?auto=format&fit=crop&w=800&q=80`}
                      alt={destination.name}
                      className="w-full h-64 object-cover rounded-lg mb-4"
                    />
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold mb-2">Location</h3>
                        <p className="text-muted-foreground">{destination.location}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Activities</h3>
                        <ul className="list-disc list-inside text-muted-foreground">
                          {destination.activities.map((activity, index) => (
                            <li key={index}>{activity}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Best Time to Visit</h3>
                        <p className="text-muted-foreground">{destination.bestTime}</p>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-primary">Upcoming Events</h2>
            <Link to="/events" className="text-secondary hover:text-secondary/80">
              View all events →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <Dialog key={event.id}>
                <DialogTrigger asChild>
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                    <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                      <img
                        src={`${event.image}?auto=format&fit=crop&w=800&q=80`}
                        alt={event.title}
                        className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "/placeholder.svg";
                        }}
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-primary" />
                        {event.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <p className="text-sm text-muted-foreground">
                          Date: {new Date(event.date).toLocaleDateString()} at {event.time}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Location: {event.location}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>{event.title}</DialogTitle>
                  </DialogHeader>
                  <div className="mt-4">
                    <img
                      src={`${event.image}?auto=format&fit=crop&w=800&q=80`}
                      alt={event.title}
                      className="w-full h-64 object-cover rounded-lg mb-4"
                    />
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold mb-2">When</h3>
                        <p className="text-muted-foreground">
                          {new Date(event.date).toLocaleDateString()} at {event.time}
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Where</h3>
                        <p className="text-muted-foreground">{event.location}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Details</h3>
                        <p className="text-muted-foreground">{event.details}</p>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

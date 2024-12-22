import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const Events = () => {
  // This would typically come from an API
  const events = [
    {
      id: 1,
      title: "Local Food Festival",
      date: "2024-03-15",
      location: "Downtown Square",
      description: "Experience local cuisine and cultural performances",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
    },
    {
      id: 2,
      title: "Art Gallery Opening",
      date: "2024-03-20",
      location: "City Art Museum",
      description: "Featured works from local and international artists",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
    },
    {
      id: 3,
      title: "Music in the Park",
      date: "2024-03-25",
      location: "Central Park",
      description: "Live performances by local bands",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05"
    },
    {
      id: 4,
      title: "Tech Meetup",
      date: "2024-04-01",
      location: "Innovation Hub",
      description: "Network with local tech professionals and startups",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87"
    },
    {
      id: 5,
      title: "Farmers Market",
      date: "2024-04-05",
      location: "City Plaza",
      description: "Fresh local produce and artisanal goods",
      image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9"
    },
    {
      id: 6,
      title: "Wine Tasting Evening",
      date: "2024-04-10",
      location: "Vintage Cellars",
      description: "Sample premium local and international wines",
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8 mt-20">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Local Events</h1>
          <p className="text-muted-foreground">
            Discover what's happening in your area
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <Card key={event.id} className="hover:shadow-lg transition-shadow">
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
                    Date: {new Date(event.date).toLocaleDateString()}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Location: {event.location}
                  </p>
                  <p className="text-sm">{event.description}</p>
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

export default Events;
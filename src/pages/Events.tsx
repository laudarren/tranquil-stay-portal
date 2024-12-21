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
      description: "Experience local cuisine and cultural performances"
    },
    {
      id: 2,
      title: "Art Gallery Opening",
      date: "2024-03-20",
      location: "City Art Museum",
      description: "Featured works from local and international artists"
    },
    {
      id: 3,
      title: "Music in the Park",
      date: "2024-03-25",
      location: "Central Park",
      description: "Live performances by local bands"
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
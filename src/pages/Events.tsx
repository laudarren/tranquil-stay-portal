import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const Events = () => {
  // This would typically come from an API
  const events = [
    {
      id: 1,
      title: "Local Food Festival",
      date: "2024-03-15",
      time: "11:00 AM",
      location: "Downtown Square",
      description: "Experience local cuisine and cultural performances",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      details: "Join us for a celebration of local flavors and culture! This festival features over 30 local food vendors, live cooking demonstrations, cultural performances, and activities for the whole family. Don't miss our special chef showcase at 2 PM."
    },
    {
      id: 2,
      title: "Art Gallery Opening",
      date: "2024-03-20",
      time: "6:30 PM",
      location: "City Art Museum",
      description: "Featured works from local and international artists",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      details: "Be among the first to experience our new exhibition featuring works from both emerging local artists and renowned international creators. The evening includes guided tours, artist meet-and-greets, and complimentary refreshments."
    },
    {
      id: 3,
      title: "Music in the Park",
      date: "2024-03-25",
      time: "4:00 PM",
      location: "Central Park",
      description: "Live performances by local bands",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
      details: "Bring your blankets and picnic baskets for an evening of live music under the stars. The event features three local bands performing various genres from jazz to indie rock. Food trucks will be available on site."
    },
    {
      id: 4,
      title: "Tech Meetup",
      date: "2024-04-01",
      time: "7:00 PM",
      location: "Innovation Hub",
      description: "Network with local tech professionals and startups",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
      details: "Connect with fellow tech enthusiasts and professionals in this monthly meetup. The event includes lightning talks, networking sessions, and demonstrations of the latest tech innovations."
    },
    {
      id: 5,
      title: "Farmers Market",
      date: "2024-04-05",
      time: "8:00 AM",
      location: "City Plaza",
      description: "Fresh local produce and artisanal goods",
      image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9",
      details: "Start your weekend right with fresh, locally-sourced produce and handcrafted goods. Meet local farmers and artisans, enjoy live music, and participate in cooking demonstrations throughout the morning."
    },
    {
      id: 6,
      title: "Wine Tasting Evening",
      date: "2024-04-10",
      time: "7:30 PM",
      location: "Vintage Cellars",
      description: "Sample premium local and international wines",
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3",
      details: "Discover exceptional wines from around the world in this guided tasting experience. Our sommelier will lead you through six premium wines paired with complementary appetizers. Space is limited to ensure an intimate experience."
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
                      <p className="text-sm">{event.description}</p>
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
      </main>

      <Footer />
    </div>
  );
};

export default Events;
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

const Events = () => {
  const { data: events, isLoading, error } = useQuery({
    queryKey: ['events'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .order('date', { ascending: true });
      
      if (error) throw error;
      return data;
    }
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-8 mt-20">
          <div className="animate-pulse space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-64 bg-gray-200 rounded-lg" />
            ))}
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-8 mt-20">
          <div className="text-center text-red-500">
            Error loading events. Please try again later.
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
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Local Events</h1>
          <p className="text-muted-foreground">
            Discover what's happening in your area
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events?.map((event) => (
            <Dialog key={event.id}>
              <DialogTrigger asChild>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                    <img
                      src={`${event.image_url}?auto=format&fit=crop&w=800&q=80`}
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
                    src={`${event.image_url}?auto=format&fit=crop&w=800&q=80`}
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
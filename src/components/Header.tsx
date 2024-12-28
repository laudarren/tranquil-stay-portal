import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [session, setSession] = useState(null);
  const [paymentPendingCount, setPaymentPendingCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    const fetchPaymentPendingCount = async () => {
      if (session?.user) {
        const { count, error } = await supabase
          .from('reservations')
          .select('*', { count: 'exact', head: true })
          .eq('user_id', session.user.id)
          .eq('status', 'waiting_payment');

        if (error) {
          console.error('Error fetching payment pending count:', error);
          return;
        }

        setPaymentPendingCount(count || 0);
      }
    };

    fetchPaymentPendingCount();
  }, [session]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    toast.success("Signed out successfully");
    navigate("/");
  };

  const NavLinks = () => (
    <>
      <Link to="/" className="text-gray-600 hover:text-primary transition-colors">
        Find Places
      </Link>
      <Link to="/list-property" className="text-gray-600 hover:text-primary transition-colors">
        List Property
      </Link>
      <div className="relative">
        <Link to="/reservations" className="text-gray-600 hover:text-primary transition-colors">
          Reservation
          {paymentPendingCount > 0 && (
            <Badge 
              variant="secondary" 
              className="absolute -top-3 -right-6 bg-red-500 text-white"
            >
              {paymentPendingCount}
            </Badge>
          )}
        </Link>
      </div>
      <Link to="/events" className="text-gray-600 hover:text-primary transition-colors">
        Events
      </Link>
      <Link to="/travel-guide" className="text-gray-600 hover:text-primary transition-colors">
        Guide
      </Link>
      <Link to="/support" className="text-gray-600 hover:text-primary transition-colors">
        Support
      </Link>
    </>
  );

  const AuthButtons = ({ isMobile = false }) => {
    if (session) {
      return (
        <Button 
          variant="outline" 
          onClick={handleSignOut}
          className={isMobile ? "w-full" : ""}
        >
          Sign Out
        </Button>
      );
    }

    return (
      <div className={`flex ${isMobile ? "flex-col" : ""} items-center gap-4`}>
        <Link to="/signin" onClick={() => setIsOpen(false)} className={isMobile ? "w-full" : ""}>
          <Button variant="outline" className={isMobile ? "w-full" : ""}>Sign In</Button>
        </Link>
        <Link to="/signup" onClick={() => setIsOpen(false)} className={isMobile ? "w-full" : ""}>
          <Button variant="default" className={isMobile ? "w-full" : ""}>Sign Up</Button>
        </Link>
      </div>
    );
  };

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary">
          CAMS
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLinks />
          <AuthButtons />
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4 mt-8">
              <NavLinks />
              <div className="mt-4">
                <AuthButtons isMobile />
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
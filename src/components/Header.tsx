import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const paymentPendingCount = 1;

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

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary">
          CAMS
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLinks />
          <div className="flex items-center gap-4">
            <Link to="/signin">
              <Button variant="outline">Sign In</Button>
            </Link>
            <Link to="/signup">
              <Button variant="default">Sign Up</Button>
            </Link>
          </div>
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
              <div className="flex flex-col gap-4 mt-4">
                <Link to="/signin" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" className="w-full">Sign In</Button>
                </Link>
                <Link to="/signup" onClick={() => setIsOpen(false)}>
                  <Button variant="default" className="w-full">Sign Up</Button>
                </Link>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
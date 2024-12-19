import { Facebook, Instagram, Twitter } from "lucide-react";
import { Separator } from "./ui/separator";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">StayFinder</h3>
            <p className="text-sm opacity-80">
              Find and book the perfect accommodation for your next adventure.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:opacity-80">About Us</a></li>
              <li><a href="#" className="hover:opacity-80">Contact</a></li>
              <li><a href="#" className="hover:opacity-80">Terms & Conditions</a></li>
              <li><a href="#" className="hover:opacity-80">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">For Property Owners</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:opacity-80">List Your Property</a></li>
              <li><a href="#" className="hover:opacity-80">Owner Dashboard</a></li>
              <li><a href="#" className="hover:opacity-80">Owner Guidelines</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:opacity-80">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:opacity-80">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:opacity-80">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <Separator className="my-8 bg-primary-foreground/20" />
        
        <div className="text-center text-sm opacity-80">
          <p>&copy; {new Date().getFullYear()} StayFinder. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
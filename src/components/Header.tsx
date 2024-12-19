import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export const Header = () => {
  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-primary">
          StayFinder
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-gray-600 hover:text-primary transition-colors">Find Places</a>
          <a href="#" className="text-gray-600 hover:text-primary transition-colors">List Property</a>
          <a href="#" className="text-gray-600 hover:text-primary transition-colors">About</a>
          <Button variant="default">Sign In</Button>
        </nav>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </div>
    </header>
  );
};
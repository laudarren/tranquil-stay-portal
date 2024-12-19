import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export const SearchBar = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 bg-white rounded-lg shadow-lg max-w-4xl w-full mx-auto">
      <Input
        type="text"
        placeholder="Where do you want to stay?"
        className="flex-grow"
      />
      <Input
        type="date"
        className="flex-grow"
      />
      <Input
        type="number"
        placeholder="Guests"
        min="1"
        className="w-full md:w-32"
      />
      <Button className="bg-secondary hover:bg-secondary/90">
        <Search className="mr-2 h-4 w-4" />
        Search
      </Button>
    </div>
  );
};
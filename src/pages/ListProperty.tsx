import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Building2, Upload } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const ListProperty = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Property Submitted",
      description: "We'll review your property and get back to you soon.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8 mt-20">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Building2 className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold">List Your Property</h1>
          </div>
          
          <p className="text-muted-foreground mb-8">
            Fill out the form below to list your property on StayFinder. We'll review your submission
            and get back to you within 24 hours.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="propertyName">Property Name</Label>
                <Input id="propertyName" placeholder="Enter property name" required />
              </div>

              <div>
                <Label htmlFor="propertyType">Property Type</Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select property type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="apartment">Apartment</SelectItem>
                    <SelectItem value="house">House</SelectItem>
                    <SelectItem value="villa">Villa</SelectItem>
                    <SelectItem value="condo">Condo</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="address">Address</Label>
                <Input id="address" placeholder="Enter property address" required />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="bedrooms">Bedrooms</Label>
                  <Input id="bedrooms" type="number" min="1" required />
                </div>
                <div>
                  <Label htmlFor="bathrooms">Bathrooms</Label>
                  <Input id="bathrooms" type="number" min="1" step="0.5" required />
                </div>
              </div>

              <div>
                <Label htmlFor="price">Price per Night ($)</Label>
                <Input id="price" type="number" min="1" required />
              </div>

              <div>
                <Label htmlFor="description">Property Description</Label>
                <Textarea 
                  id="description" 
                  placeholder="Describe your property..."
                  className="min-h-[150px]"
                  required
                />
              </div>

              <div>
                <Label>Property Photos</Label>
                <div className="mt-2">
                  <Button type="button" variant="outline" className="w-full">
                    <Upload className="mr-2 h-4 w-4" />
                    Upload Photos
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  You can upload up to 10 photos. Maximum size: 5MB each.
                </p>
              </div>
            </div>

            <Button type="submit" className="w-full">
              Submit Property
            </Button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ListProperty;
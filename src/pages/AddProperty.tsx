import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { AdminLayout } from "@/components/admin/AdminLayout";

type PropertyFormData = {
  name: string;
  location: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  description: string;
  image_url: string;
  amenities: string[];
};

const AddProperty = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit } = useForm<PropertyFormData>();

  const onSubmit = async (data: PropertyFormData) => {
    setIsLoading(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        toast.error("You must be logged in to add a property");
        return;
      }

      const { error } = await supabase
        .from('properties')
        .insert({
          name: data.name,
          location: data.location,
          price: data.price,
          bedrooms: data.bedrooms,
          bathrooms: data.bathrooms,
          description: data.description,
          image_url: data.image_url,
          amenities: data.amenities || [],
          owner_id: user.id,
        });

      if (error) throw error;

      toast.success("Property added successfully");
      navigate('/admin-dashboard');
    } catch (error) {
      console.error('Error adding property:', error);
      toast.error("Failed to add property");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AdminLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Add New Property</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-2xl">
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <Input {...register("name", { required: true })} placeholder="Enter property name" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Location</label>
            <Input {...register("location", { required: true })} placeholder="Enter property location" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Price per night</label>
            <Input 
              type="number" 
              {...register("price", { required: true, valueAsNumber: true })} 
              placeholder="Enter price per night"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Bedrooms</label>
            <Input 
              type="number" 
              {...register("bedrooms", { required: true, valueAsNumber: true })} 
              placeholder="Number of bedrooms"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Bathrooms</label>
            <Input 
              type="number" 
              {...register("bathrooms", { required: true, valueAsNumber: true })} 
              placeholder="Number of bathrooms"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Description</label>
            <Textarea 
              {...register("description")} 
              placeholder="Enter property description"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Image URL</label>
            <Input 
              {...register("image_url", { required: true })} 
              placeholder="Enter image URL"
            />
          </div>

          <div className="flex gap-4">
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Adding Property..." : "Add Property"}
            </Button>
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => navigate('/admin-dashboard')}
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
};

export default AddProperty;
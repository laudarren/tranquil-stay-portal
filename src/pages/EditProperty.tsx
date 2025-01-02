import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { useQuery } from "@tanstack/react-query";

type PropertyFormData = {
  name: string;
  location: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  description: string;
  image_url: string;
};

const EditProperty = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const { data: property, isLoading: isLoadingProperty } = useQuery({
    queryKey: ['property', id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('properties')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;
      return data;
    },
  });

  const { register, handleSubmit, reset } = useForm<PropertyFormData>();

  useEffect(() => {
    if (property) {
      reset(property);
    }
  }, [property, reset]);

  const onSubmit = async (data: PropertyFormData) => {
    setIsLoading(true);
    try {
      const { error } = await supabase
        .from('properties')
        .update({
          name: data.name,
          location: data.location,
          price: data.price,
          bedrooms: data.bedrooms,
          bathrooms: data.bathrooms,
          description: data.description,
          image_url: data.image_url,
        })
        .eq('id', id);

      if (error) throw error;

      toast.success("Property updated successfully");
      navigate('/admin-dashboard');
    } catch (error) {
      console.error('Error updating property:', error);
      toast.error("Failed to update property");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoadingProperty) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center h-screen">
          <div>Loading...</div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Edit Property</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-2xl">
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <Input {...register("name")} />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Location</label>
            <Input {...register("location")} />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Price per night</label>
            <Input type="number" {...register("price", { valueAsNumber: true })} />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Bedrooms</label>
            <Input type="number" {...register("bedrooms", { valueAsNumber: true })} />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Bathrooms</label>
            <Input type="number" {...register("bathrooms", { valueAsNumber: true })} />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Description</label>
            <Textarea {...register("description")} />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Image URL</label>
            <Input {...register("image_url")} />
          </div>

          <div className="flex gap-4">
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Updating..." : "Update Property"}
            </Button>
            <Button type="button" variant="outline" onClick={() => navigate('/admin-dashboard')}>
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
};

export default EditProperty;
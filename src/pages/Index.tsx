import { Header } from "@/components/Header";
import { SearchBar } from "@/components/SearchBar";
import { FeaturedProperties } from "@/components/FeaturedProperties";
import { Features } from "@/components/Features";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-primary/10 to-white">
        <div className="container mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 animate-fade-in">
            Find Your Perfect Stay
          </h1>
          <p className="text-xl text-gray-600 mb-12 animate-fade-in">
            Discover and book unique accommodations around the world
          </p>
          <SearchBar />
        </div>
      </section>

      <FeaturedProperties />
      <Features />
    </div>
  );
};

export default Index;
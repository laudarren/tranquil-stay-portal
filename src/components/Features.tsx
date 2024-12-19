import { Shield, Home, Clock, Award } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Secure Booking",
    description: "Your safety is our top priority with secure payment systems",
  },
  {
    icon: Home,
    title: "Verified Properties",
    description: "All properties are verified and maintained to high standards",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock support for any questions or concerns",
  },
  {
    icon: Award,
    title: "Best Price Guarantee",
    description: "We ensure you get the best value for your money",
  },
];

export const Features = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
              <feature.icon className="h-12 w-12 text-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
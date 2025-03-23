
import { CreditCard, Shield, TrendingUp, IndianRupee, Clock, Globe, Users, Key, MessageSquare, Lock } from "lucide-react";
import Layout from "@/components/Layout";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import { servicesData } from "@/data/services";

const ServiceCard = ({ id, title, description, icon: Icon, className }: {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  className?: string;
}) => {
  const navigate = useNavigate();
  
  return (
    <div 
      className={cn(
        "glass-card p-6 rounded-lg h-full cursor-pointer hover:shadow-md transition-all transform hover:-translate-y-1", 
        className
      )}
      onClick={() => navigate(`/services/${id}`)}
    >
      <div className="mb-4 text-bank-blue">
        <Icon size={36} />
      </div>
      <h3 className="text-xl font-semibold text-bank-dark-blue mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Services = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="py-12 px-4 sm:px-6 lg:px-8 animate-fade-in">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold tracking-tight text-bank-dark-blue mb-4">Our Services</h1>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              Discover the comprehensive range of financial services offered by State Bank of India to meet your personal and business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((service, index) => (
              <ServiceCard 
                key={index} 
                id={service.id}
                title={service.title} 
                description={service.description} 
                icon={service.icon} 
              />
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-bank-blue/10 to-transparent p-8 rounded-lg">
            <h2 className="text-2xl font-semibold text-bank-dark-blue mb-4">Ready to Experience Our Services?</h2>
            <p className="text-lg mb-6">
              Open an account today or log in to your existing account to access our full range of banking services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/signup" className="bg-bank-blue hover:bg-bank-dark-blue text-white font-semibold py-2 px-6 rounded-md transition-colors inline-block text-center">
                Open an Account
              </a>
              <a href="/login" className="bg-white hover:bg-gray-100 text-bank-blue font-semibold py-2 px-6 rounded-md border border-bank-blue transition-colors inline-block text-center">
                Login to Your Account
              </a>
            </div>
          </div>

          <div className="mt-12 text-center text-sm text-gray-500">
            <p>* Terms and conditions apply. All services are subject to eligibility criteria.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Services;

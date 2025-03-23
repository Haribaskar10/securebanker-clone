
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 animate-fade-in">
        <div className="mb-8">
          <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-6">
            <span className="text-6xl font-bold text-bank-blue">4</span>
            <span className="text-6xl font-bold text-bank-dark-blue">0</span>
            <span className="text-6xl font-bold text-bank-blue">4</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
          <p className="text-xl text-gray-600 max-w-md mx-auto">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/">
            <Button className="bg-bank-blue hover:bg-bank-dark-blue">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline">Contact Support</Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;

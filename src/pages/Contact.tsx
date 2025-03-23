
import { useState } from "react";
import { Mail, Phone, MapPin, MessageSquare, Globe } from "lucide-react";
import Layout from "@/components/Layout";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent",
        description: "Thank you for contacting us. We'll respond shortly.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    }, 1500);
  };

  return (
    <Layout>
      <div className="py-12 px-4 sm:px-6 lg:px-8 animate-fade-in">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold tracking-tight text-bank-dark-blue mb-6">Contact Us</h1>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <div className="prose max-w-none">
                <p className="text-lg mb-6">
                  We're here to help you with any questions or concerns regarding your State Bank of India accounts or services.
                </p>
              </div>
              
              <div className="space-y-6 mt-8">
                <div className="flex items-start space-x-4">
                  <Phone className="h-5 w-5 text-bank-blue flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">Customer Care</h3>
                    <p className="mt-1 text-sm text-gray-600">1800 1234 (Toll Free)</p>
                    <p className="mt-1 text-sm text-gray-600">+91 80 4710 0222 (For NRI/International customers)</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mail className="h-5 w-5 text-bank-blue flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">Email</h3>
                    <p className="mt-1 text-sm text-gray-600">customercare@sbi.co.in</p>
                    <p className="mt-1 text-sm text-gray-600">nri.customercare@sbi.co.in (For NRI customers)</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <MapPin className="h-5 w-5 text-bank-blue flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">Head Office</h3>
                    <p className="mt-1 text-sm text-gray-600">
                      State Bank Bhavan, Madame Cama Rd, Nariman Point, Mumbai 400 021
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Globe className="h-5 w-5 text-bank-blue flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">Official Website</h3>
                    <a 
                      href="https://www.sbi.co.in" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="mt-1 text-sm text-bank-blue hover:underline"
                    >
                      www.sbi.co.in
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 p-5 rounded-lg border border-gray-200 bg-gray-50">
                <h3 className="font-medium text-gray-900 mb-2">Banking Hours</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>Monday - Friday:</div>
                  <div>10:00 AM - 4:00 PM</div>
                  <div>Saturday:</div>
                  <div>10:00 AM - 2:00 PM</div>
                  <div>Sunday:</div>
                  <div>Closed</div>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold text-bank-dark-blue mb-4">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    placeholder="Your full name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    placeholder="Your email address" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input 
                    id="phone" 
                    name="phone" 
                    placeholder="Your phone number" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input 
                    id="subject" 
                    name="subject" 
                    placeholder="What is this regarding?" 
                    value={formData.subject} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    placeholder="Please describe your query or concern in detail" 
                    rows={5} 
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-bank-blue hover:bg-bank-dark-blue" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
              
              <div className="mt-4 text-xs text-gray-500">
                <p>All information shared through this form is confidential and will only be used to address your query.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              Note: This is a demo website created for educational purposes. For official information, please visit the official SBI website.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;

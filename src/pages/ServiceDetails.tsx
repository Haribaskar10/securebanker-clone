
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { servicesData } from "@/data/services";

const ServiceDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const service = servicesData.find((s) => s.id === id);
  
  if (!service) {
    return (
      <Layout>
        <div className="py-12 flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold mb-4">Service not found</h1>
          <Button onClick={() => navigate("/services")}>
            <ArrowLeft className="mr-2" size={16} />
            Back to Services
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="py-12 px-4 animate-fade-in">
        <Button 
          variant="outline" 
          onClick={() => navigate("/services")}
          className="mb-6"
        >
          <ArrowLeft className="mr-2" size={16} />
          Back to Services
        </Button>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader className="bg-gradient-to-r from-bank-blue/10 to-transparent">
                <div className="text-bank-blue mb-2">{<service.icon size={36} />}</div>
                <CardTitle className="text-2xl text-bank-dark-blue">{service.title}</CardTitle>
                <CardDescription className="text-lg">{service.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="pt-6">
                <Tabs defaultValue="overview">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="features">Features</TabsTrigger>
                    <TabsTrigger value="faq">FAQ</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="overview" className="pt-4">
                    <div className="prose prose-blue max-w-none">
                      <h3>About {service.title}</h3>
                      <p>{service.longDescription || service.description}</p>
                      
                      {service.benefits && (
                        <>
                          <h4>Benefits</h4>
                          <ul>
                            {service.benefits.map((benefit, index) => (
                              <li key={index}>{benefit}</li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="features" className="pt-4">
                    <div className="grid gap-4">
                      {service.features ? (
                        service.features.map((feature, index) => (
                          <Card key={index}>
                            <CardHeader className="pb-2">
                              <CardTitle className="text-lg">{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p>{feature.description}</p>
                            </CardContent>
                          </Card>
                        ))
                      ) : (
                        <p>No detailed features available for this service.</p>
                      )}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="faq" className="pt-4">
                    {service.faqs ? (
                      <Accordion type="single" collapsible>
                        {service.faqs.map((faq, index) => (
                          <AccordionItem key={index} value={`faq-${index}`}>
                            <AccordionTrigger>{faq.question}</AccordionTrigger>
                            <AccordionContent>{faq.answer}</AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    ) : (
                      <p>No FAQs available for this service.</p>
                    )}
                  </TabsContent>
                </Tabs>
              </CardContent>
              
              <CardFooter className="flex justify-between border-t pt-6">
                <Button
                  variant="outline"
                  onClick={() => navigate("/contact")}
                >
                  Get Support
                </Button>
                <Button onClick={() => service.applyLink ? window.open(service.applyLink, "_blank") : navigate("/login")}>
                  Apply Now
                </Button>
              </CardFooter>
            </Card>
          </div>
          
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Quick Links</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <a href="/login" className="text-bank-blue hover:text-bank-dark-blue transition-colors">
                      Login to apply
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className="text-bank-blue hover:text-bank-dark-blue transition-colors">
                      Contact us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-bank-blue hover:text-bank-dark-blue transition-colors">
                      Download forms
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-bank-blue hover:text-bank-dark-blue transition-colors">
                      Service charges
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            {service.relatedServices && (
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Related Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.relatedServices.map((relatedId, index) => {
                      const relatedService = servicesData.find(s => s.id === relatedId);
                      return relatedService ? (
                        <li key={index}>
                          <a 
                            href={`/services/${relatedId}`}
                            className="text-bank-blue hover:text-bank-dark-blue transition-colors"
                          >
                            {relatedService.title}
                          </a>
                        </li>
                      ) : null;
                    })}
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ServiceDetails;

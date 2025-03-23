
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Smartphone, CreditCard, PiggyBank, Users, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import { cn } from '@/lib/utils';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      title: 'Secure Banking',
      description: 'Industry-leading security measures to protect your financial information',
      icon: <Shield className="w-10 h-10 text-bank-blue" />,
    },
    {
      title: 'Mobile Banking',
      description: 'Bank anytime, anywhere with our easy-to-use mobile app',
      icon: <Smartphone className="w-10 h-10 text-bank-blue" />,
    },
    {
      title: 'Credit Cards',
      description: 'Flexible cards with rewards and benefits tailored to your lifestyle',
      icon: <CreditCard className="w-10 h-10 text-bank-blue" />,
    },
    {
      title: 'Savings Plans',
      description: 'Grow your wealth with our competitive savings accounts and plans',
      icon: <PiggyBank className="w-10 h-10 text-bank-blue" />,
    },
  ];

  const testimonials = [
    {
      content: "The mobile banking experience is seamless and secure. I can manage all my accounts with just a few taps.",
      author: "Sarah Johnson",
      role: "Business Owner"
    },
    {
      content: "Their customer service is exceptional. Any issues I've had were resolved promptly and professionally.",
      author: "Michael Chen",
      role: "Software Engineer"
    },
    {
      content: "The investment tools have helped me plan my retirement with confidence. I highly recommend their services.",
      author: "Emily Rodriguez",
      role: "Healthcare Professional"
    }
  ];

  return (
    <Layout fullWidth>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-bank-blue/90 to-bank-dark-blue/90 z-0"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)',
          }}
        />
        
        <div 
          className="absolute inset-0 z-10 opacity-20 bg-[url('https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)',
          }}
        />

        <div 
          className="container mx-auto px-6 z-20 py-24"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm font-medium">
                Secure and Reliable Banking
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Banking Made <span className="text-white">Simple</span> For Everyone
              </h1>
              <p className="text-lg text-white/90 max-w-lg">
                Experience seamless banking with our cutting-edge technology and personalized financial solutions.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/signup">
                  <Button size="lg" className="bg-white text-bank-blue hover:bg-gray-100">
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button variant="outline" size="lg" className="text-white border-white bg-transparent hover:bg-white/10">
                    Explore Services
                  </Button>
                </Link>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative">
                <div className="relative z-10 glass-card rounded-2xl p-6 transform rotate-3 animate-blur-in">
                  <div className="bank-card">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <p className="text-white/70 text-xs">SecureBank</p>
                        <p className="text-white font-semibold">Platinum Card</p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                        <span className="text-white font-bold">SB</span>
                      </div>
                    </div>
                    <div className="mb-6">
                      <p className="text-white/70 text-xs mb-1">Card Number</p>
                      <p className="text-white tracking-wider">•••• •••• •••• 4567</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-white/70 text-xs mb-1">Card Holder</p>
                        <p className="text-white">JOHN DOE</p>
                      </div>
                      <div>
                        <p className="text-white/70 text-xs mb-1">Expires</p>
                        <p className="text-white">05/29</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute left-4 top-14 glass-card rounded-2xl p-6 transform -rotate-3 animate-blur-in animation-delay-200 z-0">
                  <div className="p-4 bg-gradient-to-br from-bank-light-blue to-bank-blue rounded-xl">
                    <h3 className="text-white font-semibold mb-2">Account Balance</h3>
                    <p className="text-3xl font-bold text-white mb-3">$12,580.90</p>
                    <div className="flex justify-between text-white/80 text-sm">
                      <span>Savings Account</span>
                      <span>••••7890</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-0 right-0 flex justify-center z-20">
          <div className="animate-bounce">
            <a 
              href="#features" 
              className="w-10 h-10 rounded-full bg-white/10 backdrop-blur flex items-center justify-center"
            >
              <ChevronRight className="w-5 h-5 text-white transform rotate-90" />
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Banking Solutions Designed For You
            </h2>
            <p className="text-lg text-gray-600">
              Explore our comprehensive range of banking services tailored to meet your financial needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={cn(
                  "bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-bank-blue/20 group",
                  "animate-scale-in"
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 p-3 bg-gray-50 rounded-lg inline-block group-hover:bg-bank-blue/10 transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Banking Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Bank on the Go with Our Mobile App
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Experience the convenience of banking anytime, anywhere with our feature-rich mobile application.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-bank-blue/10 rounded-lg mt-1">
                    <Shield className="w-5 h-5 text-bank-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Secure Transactions</h3>
                    <p className="text-gray-600">
                      Advanced encryption and secure login ensure your financial information is always protected.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-bank-blue/10 rounded-lg mt-1">
                    <Smartphone className="w-5 h-5 text-bank-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">User-Friendly Interface</h3>
                    <p className="text-gray-600">
                      Intuitive design makes managing your accounts, transfers, and payments simple and efficient.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-bank-blue/10 rounded-lg mt-1">
                    <CreditCard className="w-5 h-5 text-bank-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Instant Notifications</h3>
                    <p className="text-gray-600">
                      Stay informed about account activities with real-time alerts and notifications.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link to="/signup">
                  <Button className="bg-bank-blue hover:bg-bank-dark-blue">
                    Open an Account
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 flex justify-center animate-fade-in">
              <div className="relative w-64 h-[530px]">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-bank-blue to-bank-dark-blue rounded-[40px] p-3 shadow-xl">
                  <div className="w-full h-full bg-white rounded-[32px] overflow-hidden flex flex-col">
                    <div className="bg-bank-blue text-white p-4">
                      <div className="flex justify-between items-center mb-4">
                        <div>
                          <p className="text-xs opacity-80">Welcome back</p>
                          <p className="font-semibold">John Doe</p>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                          <Users size={16} className="text-white" />
                        </div>
                      </div>
                      <div className="bg-white/10 rounded-lg p-3">
                        <p className="text-xs opacity-80 mb-1">Total Balance</p>
                        <p className="text-2xl font-bold">$24,680.90</p>
                      </div>
                    </div>
                    <div className="p-4 flex-1">
                      <p className="font-semibold text-gray-800 mb-2">Recent Transactions</p>
                      <div className="space-y-3">
                        {[
                          { name: 'Coffee Shop', amount: '-$4.50', date: 'Today' },
                          { name: 'Salary Deposit', amount: '+$3,200.00', date: 'Yesterday' },
                          { name: 'Grocery Store', amount: '-$56.23', date: 'Jun 15' },
                          { name: 'Electric Bill', amount: '-$89.99', date: 'Jun 14' },
                          { name: 'Transfer to Savings', amount: '-$500.00', date: 'Jun 12' },
                        ].map((tx, i) => (
                          <div key={i} className="flex justify-between items-center p-2 hover:bg-gray-50 rounded-lg">
                            <div>
                              <p className="font-medium text-gray-800">{tx.name}</p>
                              <p className="text-xs text-gray-500">{tx.date}</p>
                            </div>
                            <p className={tx.amount.startsWith('-') ? 'text-red-500' : 'text-green-500'}>
                              {tx.amount}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="p-4 border-t border-gray-200">
                      <div className="grid grid-cols-4 gap-2">
                        {['Send', 'Receive', 'Cards', 'More'].map((item, i) => (
                          <div key={i} className="flex flex-col items-center">
                            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mb-1">
                              <span className="text-bank-blue text-xs">{item[0]}</span>
                            </div>
                            <p className="text-xs text-gray-600">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600">
              Discover why thousands of customers trust us with their banking needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-bank-blue">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Experience Better Banking?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of satisfied customers who have made the switch to SecureBank.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/signup">
                <Button size="lg" className="bg-white text-bank-blue hover:bg-gray-100">
                  Open an Account
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="text-white border-white bg-transparent hover:bg-white/10">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

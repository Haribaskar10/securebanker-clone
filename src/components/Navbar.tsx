
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronRight, User, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  const isLoggedIn = false; // This will be replaced with actual auth logic

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'
      )}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-bank-blue flex items-center justify-center">
                <span className="text-white font-bold">SB</span>
              </div>
              <span className={cn(
                "font-bold text-xl transition-colors duration-300",
                isScrolled ? "text-bank-dark-blue" : "text-bank-blue"
              )}>
                SecureBank
              </span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <div className="hidden md:flex space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-all duration-300",
                    location.pathname === item.href 
                      ? "text-bank-blue" 
                      : "text-gray-600 hover:text-bank-blue hover:bg-gray-100"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            
            <div className="hidden md:flex items-center ml-4 space-x-2">
              {isLoggedIn ? (
                <div className="flex items-center space-x-2">
                  <Link to="/dashboard">
                    <Button variant="ghost" size="sm" className="text-bank-blue">
                      <User size={18} className="mr-1" />
                      Dashboard
                    </Button>
                  </Link>
                  <Button variant="ghost" size="sm" className="text-gray-600">
                    <LogOut size={18} className="mr-1" />
                    Logout
                  </Button>
                </div>
              ) : (
                <>
                  <Link to="/login">
                    <Button variant="ghost" size="sm">
                      Login
                    </Button>
                  </Link>
                  <Link to="/signup">
                    <Button variant="default" size="sm" className="bg-bank-blue hover:bg-bank-dark-blue">
                      Sign Up
                      <ChevronRight size={16} className="ml-1" />
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-bank-blue hover:bg-gray-100 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            "md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg transition-transform duration-300 ease-in-out transform",
            mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
          )}
        >
          <div className="px-4 pt-2 pb-4 space-y-1 divide-y divide-gray-200">
            <div className="space-y-1 py-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "block px-3 py-2 rounded-md text-base font-medium",
                    location.pathname === item.href
                      ? "text-bank-blue bg-gray-100"
                      : "text-gray-700 hover:text-bank-blue hover:bg-gray-100"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="space-y-1 py-2">
              {isLoggedIn ? (
                <>
                  <Link
                    to="/dashboard"
                    className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-bank-blue hover:bg-gray-100"
                  >
                    <User size={18} className="mr-2" />
                    Dashboard
                  </Link>
                  <button
                    className="flex w-full items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-bank-blue hover:bg-gray-100"
                  >
                    <LogOut size={18} className="mr-2" />
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-bank-blue hover:bg-gray-100"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="block px-3 py-2 rounded-md text-base font-medium text-bank-blue"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

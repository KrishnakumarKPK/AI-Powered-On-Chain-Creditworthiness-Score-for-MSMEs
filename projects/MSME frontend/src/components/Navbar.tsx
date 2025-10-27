import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "@/assets/creditchain-logo.png";

const Navbar = () => {
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass-card border-b backdrop-blur-xl">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src={logo} 
              alt="CreditChain Logo" 
              className="h-10 w-10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" 
            />
            <span className="text-xl font-bold gradient-text">CreditChain</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm font-medium hover:text-primary transition-all duration-300 
                         relative after:absolute after:bottom-0 after:left-0 after:h-0.5 
                         after:w-0 after:bg-primary after:transition-all after:duration-300 
                         hover:after:w-full"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="ghost" 
              onClick={() => navigate("/auth")}
              className="transition-all duration-300 hover:scale-105"
            >
              Login
            </Button>
            <Button 
              onClick={() => navigate("/auth")} 
              className="gradient-hero hover:shadow-lg hover:shadow-primary/30 
                       transition-all duration-300 hover:scale-105"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-lg font-medium hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <Button variant="ghost" onClick={() => navigate("/auth")} className="w-full">
                  Login
                </Button>
                <Button onClick={() => navigate("/auth")} className="w-full gradient-hero">
                  Get Started
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

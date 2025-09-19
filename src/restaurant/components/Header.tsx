import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 45);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav
      className={`w-full z-50 navbar-transition ${
        isScrolled
          ? "fixed top-0 bg-restaurant-dark shadow-lg"
          : "absolute top-0 bg-transparent lg:bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="/assets/logo.png"
              alt="Seasons of India"
              className={`transition-all duration-500 ${
                isScrolled ? "h-20" : "h-20 sm:h30 md:h-35 lg:h-40 xl:h-50"
              }`}
            />
          </div>

          {/* Desktop Navigation - Moved to right */}
          <div className="hidden lg:flex items-center space-x-6 ml-auto">
            <button
              onClick={() => scrollToSection("home")}
              className="text-restaurant-light hover:text-primary transition-colors uppercase font-medium text-sm"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("menu")}
              className="text-restaurant-light hover:text-primary transition-colors uppercase font-medium text-sm"
            >
              Menu
            </button>
            <div className="relative group">
              <button className="text-restaurant-light hover:text-primary transition-colors uppercase font-medium text-sm">
                More
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-restaurant-dark shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <a
                  href="https://sites.google.com/view/seasonsofindia-menuimages"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-sm text-restaurant-light hover:text-primary transition-colors"
                >
                  Gallery
                </a>
                <a
                  href="https://sites.google.com/view/seasonsofindia-menuimages"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-sm text-restaurant-light hover:text-primary transition-colors"
                >
                  Carry-out Menu
                </a>
              </div>
            </div>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-restaurant-light hover:text-primary transition-colors uppercase font-medium text-sm"
            >
              Contact
            </button>
            <a
              href="tel:407-203-8552"
              className="text-restaurant-light hover:text-primary transition-colors uppercase font-medium text-sm"
            >
              Call: (407) 203-8552
            </a>
            <Button asChild className="bg-primary hover:bg-primary/90 text-sm">
              <a
                href="https://seasonsofindia.square.site/?shipping=true#YVGE5YBK5UQJYSA5ZASSZTLS"
                target="_blank"
                rel="noopener noreferrer"
              >
                Order Online
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-restaurant-light hover:text-primary ml-auto"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-restaurant-dark/95 backdrop-blur-sm border-t border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection("home")}
                className="block px-3 py-2 text-restaurant-light hover:text-primary transition-colors uppercase font-medium text-sm w-full text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("menu")}
                className="block px-3 py-2 text-restaurant-light hover:text-primary transition-colors uppercase font-medium text-sm w-full text-left"
              >
                Menu
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block px-3 py-2 text-restaurant-light hover:text-primary transition-colors uppercase font-medium text-sm w-full text-left"
              >
                Contact
              </button>
              <a
                href="tel:407-203-8552"
                className="block px-3 py-2 text-restaurant-light hover:text-primary transition-colors uppercase font-medium text-sm"
              >
                Call: (407) 203-8552
              </a>
              <div className="px-3 py-2">
                <Button asChild className="w-full bg-primary hover:bg-primary/90">
                  <a
                    href="https://seasonsofindia.square.site/?shipping=true#YVGE5YBK5UQJYSA5ZASSZTLS"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Order Online
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
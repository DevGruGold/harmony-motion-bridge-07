
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Services", path: "/services" },
    { name: "Partner With Us", path: "/partner" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className={`text-2xl font-serif font-bold ${scrolled || isOpen ? "text-harmony-blue" : "text-white"}`}>
            Harmony Motion Studios
          </span>
        </Link>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 rounded-md ${scrolled || isOpen ? "text-harmony-blue" : "text-white"}`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-medium transition-colors hover:text-harmony-gold ${
                location.pathname === item.path
                  ? "text-harmony-gold"
                  : scrolled
                  ? "text-harmony-dark"
                  : "text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Button asChild className="bg-harmony-red hover:bg-harmony-red/90 text-white">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-md animate-fade-in">
          <div className="flex flex-col space-y-4 p-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium py-2 px-4 rounded-md transition-colors ${
                  location.pathname === item.path
                    ? "text-harmony-gold bg-gray-100"
                    : "text-harmony-dark hover:bg-gray-100"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="w-full bg-harmony-red hover:bg-harmony-red/90 text-white mt-4">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

import { useState } from "react";
import { Menu, X } from "lucide-react";


const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home", active: true },
    { name: "About", href: "#about", active: false },
    { name: "Skills", href: "#skills", active: false },
    { name: "Qualification", href: "#qualification", active: false },
    { name: "Portifolio", href: "#projects", active: false },
    { name: "Contact", href: "#contact", active: false },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border animate-slideDown">
      <div className="container mx-auto px-4 sm:px-6 lg:px-28">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="text-xl md:text-base font-medium text-foreground">
            Gloria
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm lg:text-[0.95rem] font-medium transition-colors hover:text-primary ${
                  item.active ? "text-primary" : "text-foreground"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fadeInUp">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`text-base font-medium transition-colors hover:text-primary ${
                    item.active ? "text-primary" : "text-foreground"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

import { Linkedin, Github, Twitter, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  ];

  return (
    <footer className="relative bg-background border-t border-border py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo/Brand */}
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium text-text-primary">Gloria</h3>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm sm:text-base text-text-secondary hover:text-accent transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-card border border-border hover:border-accent hover:bg-accent/10 flex items-center justify-center transition-all group"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm sm:text-base text-text-secondary text-center">
            © Gloria. All rights reserved
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-lg bg-card border border-border hover:bg-accent hover:border-accent flex items-center justify-center transition-all shadow-lg group"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 text-muted-foreground group-hover:text-accent-foreground transition-colors" />
      </button>
    </footer>
  );
};

export default Footer;

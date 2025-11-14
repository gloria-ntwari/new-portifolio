import { Linkedin, Github, Instagram, Send, MousePointer } from "lucide-react";
import { Button } from "@/components/ui/button";
import profile from '../assets/profile.jpg';

const Hero = () => {
  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 md:pt-0 px-2 sm:px-4"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Social Links */}
          <div className="hidden lg:flex flex-col space-y-6 animate-fadeInLeft">
            {socialLinks.map((social, index) => (
              <a
                key={social.label}
                href={social.href}
                className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110 duration-300"
                aria-label={social.label}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left animate-fadeInUp">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-3 text-foreground">
              Irasubiza
              <br />
              Ntwari Gloria
              <span className="animate-wave ml-2">👋</span>
            </h1>

            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
              <div className="h-px w-10 bg-primary"></div>
              <h2 className="text-base sm:text-lg md:text-xl font-medium text-foreground">
                Software Engineer
              </h2>
            </div>

            <p className="text-sm sm:text-base text-muted-foreground mb-6 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              I am a passionate software engineer with expertise in<br />
              building modern web applications. I love turning<br />
              ideas into reality through clean application.
            </p>

            <Button
              size="default"
              className="bg-secondary hover:bg-secondary/80 text-foreground font-medium px-6 py-8 text-sm sm:text-base transition-all duration-300 hover:scale-105 group rounded-xl"
            >
              Say Hello
              <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Button>

            {/* Mobile Social Links */}
            <div className="flex lg:hidden justify-center gap-6 mt-8">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110 duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative animate-fadeInRight animation-delay-400">
            <div className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/10 animate-morph blur-xl"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-border/30 animate-morph shadow-2xl animate-fadeInLeft animation-delay-800">
                <img
                  src={profile}
                  alt="Gloria Profile"
                  className="w-full h-full object-cover transition-all duration-500 hover:grayscale-0 grayscale"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center animate-bounce-slow cursor-pointer hover:opacity-80 transition-opacity flex flex-col items-center gap-2 group"
          aria-label="Scroll to About section"
        >
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
          </div>
          <p className="text-sm text-muted-foreground font-medium flex items-center gap-2">
            Scroll Down
            <span className="group-hover:translate-y-1 transition-transform">↓</span>
          </p>
        </button>
      </div>
    </section>
  );
};

export default Hero;

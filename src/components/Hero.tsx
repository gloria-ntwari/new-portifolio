import { Linkedin, Github, Instagram, Send, MousePointer } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.png";

const Hero = () => {
  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 md:pt-0 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto">
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
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-foreground">
              Irasubiza
              <br />
              Ntwari Gloria
              <span className="animate-wave ml-2 md:ml-4">👋</span>
            </h1>

            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
              <div className="h-px w-12 bg-primary"></div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground">
                Software Engineer
              </h2>
            </div>

            <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              I am a passionate software engineer with expertise in building
              modern web applications. I love turning ideas into reality through
              clean application.
            </p>

            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/80 text-foreground font-medium px-8 py-6 text-base sm:text-lg transition-all duration-300 hover:scale-105 group"
            >
              Say Hello
              <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
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
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/10 animate-morph blur-2xl"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-border/30 animate-morph shadow-2xl">
                <img
                  src={profileImage}
                  alt="Gloria Profile"
                  className="w-full h-full object-cover animate-float"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center animate-bounce-slow">
          <MousePointer className="mx-auto mb-2 text-muted-foreground" size={24} />
          <p className="text-sm text-muted-foreground font-medium">Scroll Down</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

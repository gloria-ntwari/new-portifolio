import { Code2, Smartphone, Globe, Palette } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Web Development",
      description: "Building responsive and modern web applications using the latest technologies.",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Creating intuitive mobile applications for iOS and Android platforms.",
    },
    {
      icon: Globe,
      title: "Backend Development",
      description: "Developing robust server-side solutions and RESTful APIs.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Designing beautiful and user-friendly interfaces that enhance user experience.",
    },
  ];

  return (
    <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fadeInUp">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-foreground mb-3">
            Services
          </h2>
          <div className="h-1 w-16 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-dark-bg p-6 rounded-lg border border-border/30 hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105 animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-base font-medium text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

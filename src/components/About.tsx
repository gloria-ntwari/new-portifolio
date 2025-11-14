import { Award, Briefcase, Headphones, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import aboutImage from "@/assets/about.png";

const About = () => {
  const stats = [
    {
      icon: Award,
      title: "Experience",
      value: "3.5 years working",
    },
    {
      icon: Briefcase,
      title: "Completed",
      value: "48+ projects",
    },
    {
      icon: Headphones,
      title: "Support",
      value: "Online 24/7",
    },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-16 px-2 sm:px-4 bg-dark-bg">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fadeInUp">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-text-primary mb-3">
            About Me
          </h2>
          <div className="h-1 w-16 bg-accent mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Profile Image */}
          <div className="relative animate-fadeInLeft w-full lg:w-auto flex justify-center lg:justify-start">
            <div className="relative w-[280px] h-[350px] sm:w-[320px] sm:h-[400px]">
              <div className="w-full h-full rounded-2xl overflow-hidden border-4 border-dark-secondary shadow-2xl">
                <img
                  src={aboutImage}
                  alt="About Gloria"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 animate-fadeInRight">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div
                  key={stat.title}
                  className="bg-dark-secondary p-4 rounded-lg border border-dark-tertiary hover:border-accent/50 transition-all duration-300 text-center"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <stat.icon className="w-6 h-6 text-accent mx-auto mb-2" />
                  <h3 className="text-sm font-medium text-text-primary mb-1">
                    {stat.title}
                  </h3>
                  <p className="text-xs text-text-secondary">{stat.value}</p>
                </div>
              ))}
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-text-secondary mb-6 leading-relaxed">
              As a developer, I endeavor to listen, motivate, think creatively and delegate together with my teammates to achieve product delivery. I specialize in making performant and good-looking web interfaces using frameworks like: NextJs (Typescript) ReactJs and React-Native.
            </p>

            {/* Download CV Button */}
            <Button
              size="default"
              className="bg-dark-secondary hover:bg-dark-tertiary text-text-primary font-medium px-6 py-2 text-sm sm:text-base transition-all duration-300 hover:scale-105 group border border-dark-tertiary"
            >
              Download CV
              <Download className="ml-2 group-hover:translate-y-1 transition-transform" size={18} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

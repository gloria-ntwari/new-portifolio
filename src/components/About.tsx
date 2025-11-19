import { Award, Briefcase, Headphones, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import aboutImage from '../assets/profile-temp.jpg';

const About = () => {
  const stats = [
    {
      icon: Award,
      title: "Experience",
      value: "3+ years working",
    },
    {
      icon: Briefcase,
      title: "Completed",
      value: "30+ projects",
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

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-28">
          {/* Profile Image */}
          <div className="relative animate-fadeInLeft w-full lg:w-auto flex justify-center lg:justify-start">
            <div className="relative w-[280px] h-[450px] sm:w-[320px] sm:h-[400px] ">
              <div className="w-full h-full rounded-2xl overflow-hidden border-4 border-dark-secondary shadow-2xl grayscale hover:grayscale-0">
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
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 px-8">
              {stats.map((stat, index) => (
                <div
                  key={stat.title}
                  className="bg-dark-secondary p-6 rounded-lg border border-dark-tertiary hover:border-accent/50 transition-all duration-300 text-center hover-lift animate-scale-in group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <stat.icon className="w-6 h-6 text-accent mx-auto mb-2 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                  <h3 className="text-sm font-medium text-text-primary mb-1">
                    {stat.title}
                  </h3>
                  <p className="text-xs text-text-secondary">{stat.value}</p>
                </div>
              ))}
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-text-secondary mb-6 leading-relaxed px-8">
              As a developer, I strive to listen, inspire, think innovatively,<br /> and collaborate with my teammates to ensure successful product delivery. I focus on<br></br>
              building efficient and visually appealing web interfaces using<br></br>
              frameworks such as NextJs (Typescript), ReactJs, and React-Native.
            </p>

            {/* Download CV Button */}
            <div className="px-8">
              <Button
                size="default"
                className="bg-dark-secondary hover:bg-dark-tertiary text-text-primary font-medium px-6 py-8 text-sm sm:text-base transition-all duration-300 hover:scale-105 hover-lift group border border-dark-tertiary rounded-xl relative overflow-hidden"
              >
                <span className="relative z-10">Download CV</span>
                <Download className="ml-2 relative z-10 group-hover:translate-y-2 group-hover:scale-110 transition-all duration-300" size={18} />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent animate-shimmer"></div>
              </Button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

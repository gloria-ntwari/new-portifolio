import { GraduationCap, Briefcase } from "lucide-react";
import { useState } from "react";

const Qualifications = () => {
  const [activeTab, setActiveTab] = useState<"education" | "experience">("education");

  const education = [
    {
      title: "Bachelor's in Computer Science",
      institution: "University Name",
      period: "2018 - 2022",
      description: "Focus on software engineering and web development",
    },
    {
      title: "High School Diploma",
      institution: "High School Name",
      period: "2014 - 2018",
      description: "Science and Mathematics specialization",
    },
  ];

  const experience = [
    {
      title: "Senior Software Engineer",
      company: "Tech Company",
      period: "2022 - Present",
      description: "Leading development of web applications using React and Node.js",
    },
    {
      title: "Junior Developer",
      company: "Startup Inc",
      period: "2021 - 2022",
      description: "Developed and maintained multiple client projects",
    },
  ];

  const data = activeTab === "education" ? education : experience;

  return (
    <section id="qualifications" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 animate-fadeInUp">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-foreground mb-3">
            Qualifications
          </h2>
          <div className="h-1 w-16 bg-primary mx-auto"></div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab("education")}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 ${
              activeTab === "education"
                ? "bg-primary text-primary-foreground"
                : "bg-dark-secondary text-muted-foreground hover:text-foreground"
            }`}
          >
            <GraduationCap size={20} />
            Education
          </button>
          <button
            onClick={() => setActiveTab("experience")}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 ${
              activeTab === "experience"
                ? "bg-primary text-primary-foreground"
                : "bg-dark-secondary text-muted-foreground hover:text-foreground"
            }`}
          >
            <Briefcase size={20} />
            Experience
          </button>
        </div>

        {/* Content */}
        <div className="space-y-6">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-dark-secondary p-6 rounded-lg border border-border/30 hover:border-primary/50 transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-2 rounded-lg flex-shrink-0">
                  {activeTab === "education" ? (
                    <GraduationCap className="text-primary" size={20} />
                  ) : (
                    <Briefcase className="text-primary" size={20} />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-medium text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {activeTab === "education" ? item.institution : item.company}
                  </p>
                  <p className="text-xs text-primary mb-2">{item.period}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Qualifications;

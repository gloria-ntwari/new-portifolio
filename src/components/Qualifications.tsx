import { useState } from "react";
import { GraduationCap, Briefcase, Calendar } from "lucide-react";


interface QualificationItem {
  title: string;
  subtitle: string;
  date: string;
}

const Qualification = () => {
  const [activeTab, setActiveTab] = useState<"education" | "experience">("education");

  const educationData: QualificationItem[] = [
    {
      title: "Software Engineering",
      subtitle: "Rwanda Coding Academy",
      date: "2023 - 2026",
    },
    {
      title: "Ordinary Level education",
      subtitle: "G.S.O Butare",
      date: "2019 - 2023",
    },
    {
      title: "Primary Education",
      subtitle: "Ecole Etoile Rubengera",
      date: "2013 - 2019",
    },
  ];

  const experienceData: QualificationItem[] = [
    {
      title: "Senior Frontend Developer",
      subtitle: "Winnaz",
      date: "2025",
    },
    {
      title: "Backend Developer",
      subtitle: "AGURA GROUP",
      date: "2025 - Present",
    },
    {
      title: "Freelance Projects",
      subtitle: "Dreamize Africa",
      date: "2024 - Present",
    },
  ];

  const currentData = activeTab === "education" ? educationData : experienceData;

  return (
    <section
      id="qualification"
      className="relative min-h-screen flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 bg-dark-bg overflow-hidden"
    >


      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 animate-fadeInUp">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-text-primary mb-3">
            Qualification
          </h2>
          <div className="h-1 w-16 bg-accent mx-auto" />
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center gap-8 mb-16 animate-fadeInUp" style={{ animationDelay: "100ms" }}>
          <button
            onClick={() => setActiveTab("education")}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 ${activeTab === "education"
                ? "bg-accent text-white shadow-[0_0_20px_rgba(255,107,53,0.3)]"
                : "bg-white/5 text-text-secondary hover:bg-white/10 hover:text-text-primary"
              }`}
          >
            <GraduationCap className="w-5 h-5" />
            <span className="text-sm sm:text-base font-medium">Education</span>
          </button>

          <button
            onClick={() => setActiveTab("experience")}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 ${activeTab === "experience"
                ? "bg-accent text-white shadow-[0_0_20px_rgba(255,107,53,0.3)]"
                : "bg-white/5 text-text-secondary hover:bg-white/10 hover:text-text-primary"
              }`}
          >
            <Briefcase className="w-5 h-5" />
            <span className="text-sm sm:text-base font-medium">Experience</span>
          </button>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent/50 via-skill-glow/30 to-accent/50 transform -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {currentData.map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={index}
                  className="relative animate-fadeInUp"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`flex items-center gap-8 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    {/* Content Card */}
                    <div className={`flex-1 ${isLeft ? "md:text-right" : "md:text-left"} text-left`}>
                      <div className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-xl p-6 border border-white/10 transition-all duration-500 hover:border-accent/50 hover:shadow-[0_0_30px_rgba(255,107,53,0.15)] hover:scale-[1.02] hover:-translate-y-1">
                        <h3 className="text-lg font-medium text-text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-sm text-text-secondary mb-3">
                          {item.subtitle}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-text-secondary">
                          <Calendar className="w-4 h-4" />
                          <span>{item.date}</span>
                        </div>

                        {/* Hover glow effect */}
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent/0 via-accent/0 to-skill-glow/0 group-hover:from-accent/5 group-hover:via-skill-glow/5 group-hover:to-transparent transition-all duration-500 pointer-events-none" />
                      </div>
                    </div>

                    {/* Timeline Dot */}
                    <div className="hidden md:flex items-center justify-center flex-shrink-0">
                      <div className="relative">
                        <div className="w-4 h-4 rounded-full bg-accent shadow-[0_0_10px_rgba(255,107,53,0.5)] animate-pulse" />
                        <div className="absolute inset-0 w-4 h-4 rounded-full bg-accent/30 animate-ping" />
                      </div>
                    </div>

                    {/* Spacer for the other side */}
                    <div className="flex-1 hidden md:block" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Qualification;

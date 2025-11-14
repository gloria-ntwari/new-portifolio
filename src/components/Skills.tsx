import { Code2, Server, Database, Wrench, Component, Box, Layers, Wind, Radio, Cpu, Zap, FileCode, Warehouse, Container, GitBranch, Package, Cloud, Palette } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface Skill {
  name: string;
  icon: LucideIcon;
}

interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: Skill[];
}

const Skills = () => {
  const skillsCategories: SkillCategory[] = [
    {
      title: "Frontend",
      icon: Code2,
      skills: [
        { name: "React", icon: Component },
        { name: "Angular", icon: Box },
        { name: "Vue.js", icon: Layers },
        { name: "Tailwind CSS", icon: Wind },
      ],
    },
    {
      title: "Backend",
      icon: Server,
      skills: [
        { name: "Node.js", icon: Radio },
        { name: "Python", icon: FileCode },
        { name: "Rust", icon: Cpu },
        { name: "PostgreSQL", icon: Zap },
      ],
    },
    {
      title: "Database",
      icon: Database,
      skills: [
        { name: "MongoDB", icon: Warehouse },
        { name: "MySQL", icon: Database },
        { name: "PostgreSQL", icon: Server },
        { name: "Redis", icon: Zap },
      ],
    },
    {
      title: "Other",
      icon: Wrench,
      skills: [
        { name: "Git", icon: GitBranch },
        { name: "Docker", icon: Container },
        { name: "Kubernetes", icon: Cloud },
        { name: "Figma", icon: Palette },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-dark-bg overflow-hidden"
    >
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-text-primary mb-3">
            Skills
          </h2>
          <div className="h-1 w-16 bg-accent mx-auto" />
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {skillsCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="animate-fadeInUp group"
              style={{ animationDelay: `${categoryIndex * 150}ms` }}
            >
              {/* Category card with glassmorphism effect */}
              <div className="relative h-full bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl p-6 border border-white/10 transition-all duration-500 hover:border-accent/50 hover:shadow-[0_0_30px_rgba(255,107,53,0.15)] hover:scale-[1.02] hover:-translate-y-1">
                {/* Category header with icon */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                  <div className="p-2.5 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 group-hover:from-accent/30 group-hover:to-accent/20 transition-all duration-300 group-hover:scale-110">
                    <category.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-base sm:text-lg font-medium text-text-primary">
                    {category.title}
                  </h3>
                </div>

                {/* Skills list */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-3 text-text-secondary hover:text-text-primary transition-all duration-300 group/skill cursor-pointer"
                      style={{ animationDelay: `${(categoryIndex * 150) + (skillIndex * 50)}ms` }}
                    >
                      <div className="p-2 rounded-lg bg-white/5 group-hover/skill:bg-accent/10 transition-all duration-300 group-hover/skill:scale-110 group-hover/skill:rotate-6">
                        <skill.icon className="w-4 h-4 group-hover/skill:text-accent transition-colors duration-300" />
                      </div>
                      <span className="text-sm font-medium group-hover/skill:translate-x-1 transition-transform duration-300">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/0 via-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:via-accent/5 group-hover:to-transparent transition-all duration-500 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

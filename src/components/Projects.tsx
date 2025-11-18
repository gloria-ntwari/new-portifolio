import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import wheliez from "../assets/wheliez.png";
import wheliez1 from "../assets/wheliez1.png";
import wheliez2 from "../assets/wheliez2.png";
import hollanda from "../assets/hollanda.png";
import hollanda1 from "../assets/hollanda1.png";
import hollanda2 from "../assets/hollanda2.png";
import winnaz from "../assets/winnaz.png";
import winnaz1 from "../assets/winnaz1.png";
import winnaz2 from "../assets/winnaz2.png";
import Agura from "../assets/Agura.png";
import Agura1 from "../assets/Agura1.png";
import aguraMobile1 from "../assets/aguraMobile.png";
import equipment from "../assets/equipment.jpg";
import medimeet from "../assets/medimeet.png";
import medimeet1 from "../assets/medimeet1.png";
import medimeet2 from "../assets/medimeet2.png";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  liveUrl: string;
  githubUrl: string;
  borderColor: string;
  fullDescription: string;
  technologies: string[];
  gallery: string[];
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "wheeliez",
      description: "Snack brand website showcasing products, flavors, company story, and customer engagement features",
      image: wheliez,
      liveUrl: "https://wheeliez.vercel.app/",
      githubUrl: "https://github.com/gloria-ntwari/Wheeliz.git",
      borderColor: "from-pink-500 to-rose-500",
      fullDescription: "A modern, dynamic website built for Wheeliez, presenting their snacks, product details, brand story, and interactive features that enhance customer connection and highlight Rwanda-based creativity.",
      technologies: ["React", "Tailwind CSS"],
      gallery: [
        wheliez,
        wheliez1,
        wheliez2,
      ]
    },
    {
      id: 2,
      title: "Hollanda",
      description: "Corporate website showcasing Hollanda FairFoods’ products, team, mission, community impact, and services.",
      image: hollanda,
      liveUrl: "https://hollanda.vercel.app/",
      githubUrl: "https://github.com/gloria-ntwari/Hollanda.git",
      borderColor: "from-blue-500 to-cyan-500",
      fullDescription: "A comprehensive brand website built for Hollanda FairFoods, featuring product collections, company story, farmer empowerment initiatives, team profiles, blogs, and customer engagement tools presented in a modern layout.",
      technologies: ["React", "Sanity", "TypeScript", "Tailwind CSS"],
      gallery: [
        hollanda,
        hollanda1,
        hollanda2,
      ]
    },
    {
      id: 3,
      title: "Winnaz",
      description: "Product-focused website presenting Winnaz chips, flavors, brand story, team, and distributor details.",
      image: winnaz,
      liveUrl: "https://winnaz-web.netlify.app/",
      githubUrl: "https://github.com/gloria-ntwari/Winnaz.git",
      borderColor: "from-yellow-500 to-orange-500",
      fullDescription: "A complete recipe app with ingredient search, favorite saving, and automatic shopping list creation features.",
      technologies: ["HTML", "CSS"],
      gallery: [
        winnaz,
        winnaz1,
        winnaz2,
      ]
    },
    {
      id: 4,
      title: "Agura",
      description: "Event ticketing platform offering seamless discovery, booking, venue interaction, and real-time updates.",
      image: Agura,
      liveUrl: "https://webapp-murex-eight.vercel.app/",
      githubUrl: "https://github.com/AguraTix",
      borderColor: "from-orange-500 to-red-500",
      fullDescription: "A modern event ticketing platform featuring easy ticket purchases, venue navigation, mobile app integration, client testimonials, FAQs, and smooth user experiences tailored for both organizers and attendees.",
      technologies: ["React", "NodeJs", "TailWind CSS", "React Native"],
      gallery: [
        Agura,
        Agura1,
        aguraMobile1,
      ]
    },
    {
      id: 5,
      title: "MediMeet",
      description: "MediMeet is a modern web application for booking doctor appointments. It features a Spring Boot backend and a React frontend with a sleek user interface.",
      image: medimeet,
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/gloria-ntwari/MediMeet.git",
      borderColor: "from-green-500 to-teal-500",
      fullDescription: "A modern web application for booking doctor appointments, using Spring Boot and React to provide seamless scheduling, intuitive interfaces, patient coordination, management, and real-time availability.",
      technologies: ["React", "Spring Boot", "PostgreSQL", "Tailwind CSS"],
      gallery: [
        medimeet,
        medimeet1,
        medimeet2,
      ]
    },
    {
      id: 6,
      title: "Equipment_MS",
      description: "Management of the equipment between the staff and the admin users in the institution",
      image: equipment,
      liveUrl: "",
      githubUrl: "https://github.com/gloria-ntwari/Equipment_MS.git",
      borderColor: "from-purple-500 to-indigo-500",
      fullDescription: "A Java-based system for institutions that manages equipment tracking, assignments, and returns, giving administrators clear visibility, improving accountability, and ensuring smooth coordination between staff and management.",
      technologies: ["Spring Boot", "TypeScript"],
      gallery: [
        equipment,
      ]
    }
  ];

  return (
    <section
      id="projects"
      className="relative min-h-screen flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 animate-fadeInUp">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-text-primary mb-3">
            Projects
          </h2>
          <div className="h-1 w-16 bg-accent mx-auto" />
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-full bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-xl overflow-hidden border border-border transition-all duration-300 hover:border-accent/30 group">
                {/* Image */}
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  {/* Title */}
                  <h3 className=" mb-2 text-lg font-medium">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-text-secondary mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex gap-2 mb-3">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="flex-1 text-xs text-muted-foreground hover:text-accent hover:bg-accent/10"
                      onClick={() => window.open(project.liveUrl, "_blank")}
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Live
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="flex-1 text-xs text-muted-foreground hover:text-accent hover:bg-accent/10"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                      <Github className="w-3 h-3 mr-1" />
                      GitHub
                    </Button>
                  </div>

                  {/* View More Button */}
                  <Button
                    size="sm"
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-xs"
                    onClick={() => setSelectedProject(project)}
                  >
                    View More
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-dark-secondary border-dark-tertiary">
          <DialogHeader>
            <DialogTitle className="text-2xl sm:text-3xl md:text-4xl font-medium text-text-primary">
              {selectedProject?.title}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            {/* Main Image */}
            <div className="aspect-video rounded-lg overflow-hidden border border-dark-tertiary">
              <img
                src={selectedProject?.image}
                alt={selectedProject?.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Description */}
            <div>
              <h3 className="text-base sm:text-lg font-medium text-text-primary mb-3">Description</h3>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                {selectedProject?.fullDescription}
              </p>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-base sm:text-lg font-medium text-text-primary mb-3">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {selectedProject?.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm border border-accent/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Gallery */}
            {selectedProject?.gallery && selectedProject.gallery.length > 0 && (
              <div>
                <h3 className="text-base sm:text-lg font-medium text-text-primary mb-3">Gallery</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {selectedProject.gallery.map((image, index) => (
                    <div
                      key={index}
                      className="aspect-video rounded-lg overflow-hidden border border-dark-tertiary hover:border-accent/50 transition-colors duration-300"
                    >
                      <img
                        src={image}
                        alt={`${selectedProject.title} - ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4 border-t border-dark-tertiary">
              <Button
                className="flex-1 bg-accent hover:bg-accent/90 text-white"
                onClick={() => window.open(selectedProject?.liveUrl, "_blank")}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View Live
              </Button>
              <Button
                variant="outline"
                className="flex-1 border-dark-tertiary text-text-primary hover:bg-dark-tertiary"
                onClick={() => window.open(selectedProject?.githubUrl, "_blank")}
              >
                <Github className="w-4 h-4 mr-2" />
                View Code
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;

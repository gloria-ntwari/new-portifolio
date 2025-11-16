import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

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
      title: "TravelGram",
      description: "Travel app to share photos and travel experiences with friends.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      borderColor: "from-pink-500 to-rose-500",
      fullDescription: "A complete platform for sharing travel experiences, allowing users to create albums, add photos, and share their adventures with the community.",
      technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      gallery: [
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      ]
    },
    {
      id: 2,
      title: "Tech News",
      description: "Tech news portal to stay up-to-date in the technology world.",
      image: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      borderColor: "from-blue-500 to-cyan-500",
      fullDescription: "Complete tech news portal with categorization system, advanced search, and real-time notifications about the latest tech news.",
      technologies: ["Vue.js", "Firebase", "TypeScript", "Material UI"],
      gallery: [
        "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0",
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
      ]
    },
    {
      id: 3,
      title: "Recipe Page",
      description: "Platform to discover and save culinary recipes from around the world.",
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      borderColor: "from-yellow-500 to-orange-500",
      fullDescription: "A complete recipe app with ingredient search, favorite saving, and automatic shopping list creation features.",
      technologies: ["React", "PostgreSQL", "Express", "Tailwind CSS"],
      gallery: [
        "https://images.unsplash.com/photo-1556910103-1c02745aae4d",
        "https://images.unsplash.com/photo-1556909212-d5b604d0c90d",
        "https://images.unsplash.com/photo-1556911220-bff31c812dba",
      ]
    },
    {
      id: 4,
      title: "Zingas",
      description: "Complete and simple karaoke office management system.",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      borderColor: "from-orange-500 to-red-500",
      fullDescription: "Management platform for karaoke offices with online scheduling, song catalog, and reservation system.",
      technologies: ["Angular", "NestJS", "MySQL", "Bootstrap"],
      gallery: [
        "https://images.unsplash.com/photo-1511379938547-c1f69419868d",
        "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae",
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f",
      ]
    },
    {
      id: 5,
      title: "Reload",
      description: "System for managing and tracking activities.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      borderColor: "from-green-500 to-teal-500",
      fullDescription: "Productivity management system with task tracking, time management, and performance reporting.",
      technologies: ["React", "Django", "PostgreSQL", "Tailwind CSS"],
      gallery: [
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      ]
    },
    {
      id: 6,
      title: "Fashion Store",
      description: "Modern e-commerce platform for fashion products.",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      borderColor: "from-purple-500 to-indigo-500",
      fullDescription: "Complete e-commerce solution with shopping cart, payment integration, product management, and order tracking.",
      technologies: ["Next.js", "Stripe", "Prisma", "Tailwind CSS"],
      gallery: [
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d",
        "https://images.unsplash.com/photo-1445205170230-053b83016050",
        "https://images.unsplash.com/photo-1483985988355-763728e1935b",
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
                  <h3 className="text-foreground text-lg font-semibold mb-2">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-xs mb-4 line-clamp-2">
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

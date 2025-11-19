import { Star, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Jolie Princesse",
      role: "FullStack Developer",
      content: "Working with Gloria was an absolute pleasure. Her attention to detail and technical skill turned our idea into a polished, high-quality product. Truly outstanding work!",
      rating: 5
    },
    {
      id: 2,
      name: "ISIMBI Hyguette",
      role: "Frontend Developer",
      content: "Exceptional results!The project was completed on time and went far beyond. Gloria's problem-solving ability and commitment to excellence made a major impact.",
      rating: 5
    },
    {
      id: 3,
      name: "Danny Mike",
      role: "AI/ML Engineer",
      content: "A genuine professional who delivers creativity and technical clarity in every project. Gloria's talent for turning design concepts into smooth, reliable code is impressive. We would gladly collaborate again!",
      rating: 5
    }
  ];

  return (
    <section
      id="testimonials"
      className="relative min-h-screen flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8  overflow-hidden"
    >
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 animate-fadeInUp">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-text-primary mb-3">
            Testimonials
          </h2>
          <div className="h-1 w-16 bg-accent mx-auto" />
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="animate-fadeInUp"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-full p-6 group flex flex-col hover-lift bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-xl border border-border hover:border-accent/30 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {/* Star Rating */}
                <div className="flex gap-1 mb-4 relative z-10">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-accent text-accent transition-all duration-300 group-hover:scale-110 animate-scale-in"
                      style={{ animationDelay: `${i * 50}ms` }}
                    />
                  ))}
                </div>

                {/* Testimonial Content */}
                <p className="text-sm sm:text-base text-text-secondary mb-6 flex-grow relative z-10 group-hover:text-text-primary transition-colors duration-300">
                  {testimonial.content}
                </p>

                {/* Author Info */}
                <div className="text-center relative z-10">
                  <h4 className="text-text-primary font-medium text-base group-hover:text-accent transition-colors duration-300">
                    {testimonial.name}
                  </h4>
                  <p className="text-text-secondary text-xs">
                    {testimonial.role}
                  </p>
                </div>

                {/* Quote Icon */}
                <Quote className="absolute top-4 right-4 w-8 h-8 text-accent/20 group-hover:text-accent/40 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

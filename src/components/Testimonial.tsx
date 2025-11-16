import { Star, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
  rating: number;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "James Ribbon",
      role: "CEO at TechCorp",
      content: "Working with this developer was an absolute pleasure. Their attention to detail and technical expertise helped transform our vision into a beautiful, functional product. Highly recommended!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      rating: 5
    },
    {
      id: 2,
      name: "Douglas Warden",
      role: "Product Manager",
      content: "Exceptional work! The project was delivered on time and exceeded our expectations. Their problem-solving skills and dedication to quality made all the difference in our success.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
      rating: 5
    },
    {
      id: 3,
      name: "Lorenzo Carl",
      role: "Designer",
      content: "A true professional who brings creativity and technical excellence to every project. Their ability to translate design concepts into seamless code is remarkable. Would definitely work together again!",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
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

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="animate-fadeInUp"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-full p-6 group">
                {/* Star Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-accent text-accent"
                    />
                  ))}
                </div>

                {/* Testimonial Content */}
                <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-6">
                  {testimonial.content}
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-border">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-text-primary font-medium text-sm">
                      {testimonial.name}
                    </h4>
                    <p className="text-text-secondary text-xs">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Quote Icon */}
                <Quote className="absolute top-0 right-0 w-8 h-8 text-accent/20" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

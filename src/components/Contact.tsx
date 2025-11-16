import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@example.com",
      link: "mailto:hello@example.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "San Francisco, CA",
      link: "#",
    },
  ];

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 bg-dark-bg overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12 animate-fadeInUp">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-text-primary mb-3">
            Get In Touch
          </h2>
          <div className="h-1 w-16 bg-accent mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Contact Info Card - Left Side */}
          <div className="animate-fadeInUp">
            <div className="bg-dark-secondary border border-dark-tertiary rounded-2xl p-8 space-y-6 h-full">
              <div>
                <h4 className="text-base sm:text-lg font-medium text-text-primary mb-2">Address</h4>
                <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                  123 Main Street<br />
                  Suite Name, Kentucky 39495
                </p>
              </div>

              <div className="border-t border-dark-tertiary pt-6">
                <h4 className="text-base sm:text-lg font-medium text-text-primary mb-3">Contact</h4>
                <div className="space-y-2">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      className="flex items-center gap-3 text-sm sm:text-base text-text-secondary hover:text-accent transition-colors"
                    >
                      <item.icon className="w-4 h-4 text-accent" />
                      <span>{item.value}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="border-t border-dark-tertiary pt-6">
                <h4 className="text-base sm:text-lg font-medium text-text-primary mb-2">Open Time</h4>
                <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                  Monday - Friday : 09:00 - 20:00<br />
                  Saturday - Sunday : 09:00 - 21:00
                </p>
              </div>

              <div className="border-t border-dark-tertiary pt-6">
                <h4 className="text-base sm:text-lg font-medium text-text-primary mb-3">Stay Connected</h4>
                <div className="flex gap-3">
                  <a href="#" className="w-9 h-9 rounded-full bg-accent/10 hover:bg-accent flex items-center justify-center transition-colors group">
                    <Mail className="w-4 h-4 text-accent group-hover:text-white" />
                  </a>
                  <a href="#" className="w-9 h-9 rounded-full bg-accent/10 hover:bg-accent flex items-center justify-center transition-colors group">
                    <Phone className="w-4 h-4 text-accent group-hover:text-white" />
                  </a>
                  <a href="#" className="w-9 h-9 rounded-full bg-accent/10 hover:bg-accent flex items-center justify-center transition-colors group">
                    <MapPin className="w-4 h-4 text-accent group-hover:text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - Right Side (No Card) */}
          <div className="animate-fadeInUp animation-delay-200">
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-8">
              Feel free to contact us any time. We will get back to you as soon as we can!
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="bg-transparent border-b border-dark-tertiary rounded-none text-text-primary placeholder:text-text-secondary h-12 pl-4 "
              />

              <Input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="bg-transparent border-b border-dark-tertiary rounded-none text-text-primary placeholder:text-text-secondary h-12 pl-4 "
              />

              <Textarea
                placeholder="Message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                rows={4}
                className="bg-transparent border-b border-dark-tertiary rounded-none text-text-primary placeholder:text-text-secondary resize-none pl-4 pt-3"
              />

              <Button
                type="submit"
                className="w-full bg-dark-secondary hover:bg-dark-tertiary text-text-primary font-medium px-6 py-6 text-sm sm:text-base transition-all duration-300 border border-dark-tertiary rounded-xl uppercase tracking-wider hover:scale-105"
              >
                SEND
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React from 'react';
import { Card, CardContent } from '../Components/ui/card.jsx';
import { Building, Users, Monitor, Shield } from 'lucide-react';

export default function PhotoGallery() {
  // Placeholder gallery items
  const galleryItems = [
    {
      id: 1,
      title: "Our Modern Office",
      description: "State-of-the-art workspace designed for collaboration",
      icon: Building,
      category: "Office"
    },
    {
      id: 2,
      title: "Team Collaboration",
      description: "Our expert team working together on client solutions",
      icon: Users,
      category: "Team"
    },
    {
      id: 3,
      title: "Server Infrastructure",
      description: "Advanced monitoring and management systems",
      icon: Monitor,
      category: "Technology"
    },
    {
      id: 4,
      title: "Security Operations",
      description: "24/7 cybersecurity monitoring center",
      icon: Shield,
      category: "Security"
    },
    {
      id: 5,
      title: "Client Meeting Room",
      description: "Professional spaces for client consultations",
      icon: Building,
      category: "Office"
    },
    {
      id: 6,
      title: "Technical Training",
      description: "Continuous learning and skill development",
      icon: Users,
      category: "Team"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span className="text-brand-primary">TechGuard</span> Gallery
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Take a look at our modern facilities, expert team, and cutting-edge technology
            that powers our IT support services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <Card key={item.id} className="bg-background border-border hover:border-brand-primary/30 transition-all duration-300 group overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-video bg-gradient-brand flex flex-col items-center justify-center relative overflow-hidden">
                    <div className="w-20 h-20 bg-brand-primary/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-4">
                      <IconComponent className="h-10 w-10 text-brand-primary" />
                    </div>
                    <span className="bg-brand-primary/20 text-brand-primary px-3 py-1 rounded-full text-xs font-medium">
                      {item.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16 p-8 bg-card rounded-lg border border-border">
          <h3 className="text-2xl font-bold text-foreground mb-4">Want to Visit Our Office?</h3>
          <p className="text-muted-foreground mb-6">
            Schedule a tour of our facilities and meet our team in person.
            We'd love to show you how we can support your IT infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-brand-primary text-background rounded-md hover:bg-brand-secondary transition-colors">
              Schedule a Tour
            </button>
            <button className="px-6 py-3 border border-brand-primary text-brand-primary rounded-md hover:bg-brand-primary hover:text-background transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

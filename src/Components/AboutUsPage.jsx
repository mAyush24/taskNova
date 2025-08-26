import React from 'react';
import { Users, Target, Award, Lightbulb, Shield } from 'lucide-react';

export default function AboutUsPage() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About <span className="text-brand-primary">TechGuard</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are a new IT support company dedicated to providing reliable, 
            efficient technology services with fresh perspectives and cutting-edge solutions.
          </p>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center p-6 rounded-lg bg-background border border-border hover:border-brand-primary/30 transition-all duration-300">
            <div className="w-16 h-16 bg-brand-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Target className="h-8 w-8 text-brand-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Mission</h3>
            <p className="text-muted-foreground">
              Delivering reliable IT support solutions that keep your business running smoothly.
            </p>
          </div>

          <div className="text-center p-6 rounded-lg bg-background border border-border hover:border-brand-primary/30 transition-all duration-300">
            <div className="w-16 h-16 bg-brand-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="h-8 w-8 text-brand-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Innovation</h3>
            <p className="text-muted-foreground">
              Bringing fresh perspectives and modern methodologies to IT support.
            </p>
          </div>

          <div className="text-center p-6 rounded-lg bg-background border border-border hover:border-brand-primary/30 transition-all duration-300">
            <div className="w-16 h-16 bg-brand-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-brand-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Security</h3>
            <p className="text-muted-foreground">
              Protecting your business with comprehensive cybersecurity solutions.
            </p>
          </div>

          <div className="text-center p-6 rounded-lg bg-background border border-border hover:border-brand-primary/30 transition-all duration-300">
            <div className="w-16 h-16 bg-brand-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-brand-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Support</h3>
            <p className="text-muted-foreground">
              24/7 availability and personalized service for all your IT needs.
            </p>
          </div>
        </div>

        {/* Company Story */}
        <div className="bg-card rounded-lg p-8 border border-border">
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">Our Story</h2>
          <div className="max-w-4xl mx-auto text-muted-foreground space-y-6">
            <p className="text-lg">
              Founded with a vision to revolutionize IT support, TechGuard emerged from the recognition 
              that businesses need more than just technical fixes—they need strategic technology partners 
              who understand their unique challenges.
            </p>
            <p>
              As a new company, we bring fresh energy and modern approaches to traditional IT support. 
              Our team combines years of industry experience with innovative thinking, ensuring that 
              we're not just solving today's problems, but preparing your business for tomorrow's opportunities.
            </p>
            <p>
              We believe that reliable IT infrastructure is the foundation of business success. 
              That's why we focus on proactive monitoring, rapid response times, and personalized 
              service that adapts to your specific needs and growth trajectory.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
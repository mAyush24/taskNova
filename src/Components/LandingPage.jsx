import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "../Components/ui/button.jsx";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../Components/ui/card.jsx";
import { 
  ArrowRight, Monitor, Shield, Heart, CheckCircle, Zap
} from "lucide-react";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Modern <span className="text-brand-primary">IT Support</span> for Your Business
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Fresh perspectives, cutting-edge solutions. We're a new IT support company 
            dedicated to providing reliable, efficient technology services.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-brand-primary hover:bg-brand-secondary text-background font-semibold px-8 py-4 text-lg transition-all duration-300"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-background px-8 py-4 text-lg transition-all duration-300"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Essential IT services designed to keep your business running smoothly
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-background border-border hover:border-brand-primary/30 transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-brand-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-primary/30 transition-colors">
                  <Monitor className="h-8 w-8 text-brand-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">System Monitoring</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-muted-foreground">
                  24/7 monitoring of your IT infrastructure to prevent issues before they occur.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-background border-border hover:border-brand-primary/30 transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-brand-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-primary/30 transition-colors">
                  <Shield className="h-8 w-8 text-brand-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">Cybersecurity</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-muted-foreground">
                  Comprehensive security solutions to protect your business from threats.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-background border-border hover:border-brand-primary/30 transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-brand-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-primary/30 transition-colors">
                  <Heart className="h-8 w-8 text-brand-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">Cloud Solutions</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-muted-foreground">
                  Modern cloud infrastructure and migration services for optimal performance.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose TechGuard Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-brand">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose <span className="text-brand-primary">TechGuard</span>?
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-brand-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 text-background" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Fresh Approach</h3>
                    <p className="text-muted-foreground">
                      As a new company, we bring modern methodologies and the latest technologies.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-brand-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 text-background" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Rapid Response</h3>
                    <p className="text-muted-foreground">
                      Quick turnaround times and 24/7 availability for critical issues.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-brand-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 text-background" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Personalized Service</h3>
                    <p className="text-muted-foreground">
                      Direct access to our team with customized solutions for your specific needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border">
              <div className="text-center">
                <div className="w-20 h-20 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-10 w-10 text-background" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Get Started?</h3>
                <p className="text-muted-foreground mb-6">
                  Let's discuss how we can support your IT infrastructure and help your business thrive.
                </p>
                <Button 
                  size="lg" 
                  className="bg-brand-primary hover:bg-brand-secondary text-background font-semibold px-8 py-3"
                >
                  Contact Us Today
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>


    </main>
  );
}

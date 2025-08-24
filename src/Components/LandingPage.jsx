import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "../Components/ui/button.jsx";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../Components/ui/card.jsx";
import { Badge } from "../Components/ui/badge.jsx";
import { 
  ArrowRight, Building2, Users, MapPin, Trophy, Target, 
  Lightbulb, Star, CheckCircle, Code, Smartphone, Cloud, Shield 
} from "lucide-react";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Welcome to TaskNova Solutions Pvt. Ltd.
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            We're growing our Communications & Fulfillment team in Noida
            (on-site). Entry-level, full-time role with paid training and a
            clear growth path.
          </p>

          <Link to="/openings">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105 shadow-elegant"
            >
              Explore Roles
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between gap-8">
            <div className="text-center group flex-1">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <Building2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Growing Company</h3>
              <p className="text-muted-foreground">
                Join a dynamic team that's expanding rapidly in the
                communications sector.
              </p>
            </div>

            <div className="text-center group flex-1">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Paid Training</h3>
              <p className="text-muted-foreground">
                Entry-level positions with comprehensive training programs and
                growth opportunities.
              </p>
            </div>

            <div className="text-center group flex-1">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Noida Location</h3>
              <p className="text-muted-foreground">
                On-site opportunities in Noida with a collaborative work
                environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We deliver comprehensive technology solutions that drive business
              growth and digital transformation.
            </p>
          </div>

          <div className="flex flex-wrap justify-between gap-6">
            <Card className="text-center hover:shadow-md transition-shadow duration-300 flex-1 min-w-[250px]">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Code className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg">Web Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Custom web applications and enterprise solutions built with
                  modern technologies.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-md transition-shadow duration-300 flex-1 min-w-[250px]">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Smartphone className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg">Mobile Apps</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Native and cross-platform mobile applications for iOS and
                  Android platforms.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-md transition-shadow duration-300 flex-1 min-w-[250px]">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Cloud className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg">Cloud Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Cloud migration, infrastructure management, and scalable
                  cloud-native applications.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-md transition-shadow duration-300 flex-1 min-w-[250px]">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Shield className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg">Security</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Cybersecurity solutions, penetration testing, and security
                  audits for your business.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose TaskNova?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine technical expertise with business understanding to
              deliver solutions that make a real impact.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <Trophy className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Proven Track Record
                </h3>
                <p className="text-muted-foreground">
                  Over 50+ successful projects delivered across various
                  industries with 99% client satisfaction.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <Target className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Goal-Oriented Approach
                </h3>
                <p className="text-muted-foreground">
                  We align our solutions with your business objectives to ensure
                  maximum ROI and value creation.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <Lightbulb className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Innovation First</h3>
                <p className="text-muted-foreground">
                  We leverage cutting-edge technologies and methodologies to
                  build future-ready solutions.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Expert Team</h3>
                <p className="text-muted-foreground">
                  Our team of experienced developers, designers, and consultants
                  bring diverse expertise.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Quality Assurance
                </h3>
                <p className="text-muted-foreground">
                  Rigorous testing and quality control processes ensure reliable
                  and robust solutions.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <Star className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
                <p className="text-muted-foreground">
                  Ongoing support and maintenance to ensure your solutions
                  continue to perform optimally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Technologies We Use
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We work with the latest and most reliable technologies to build
              scalable, performant solutions.
            </p>
          </div>

          <div className="grid grid-cols-6 gap-4">
            {[
              "React",
              "Node.js",
              "Python",
              "TypeScript",
              "AWS",
              "Docker",
              "MongoDB",
              "PostgreSQL",
              "GraphQL",
              "Next.js",
              "Vue.js",
              "Laravel",
            ].map((tech, index) => (
              <div
                key={index}
                className="text-center p-4 rounded-lg border bg-card hover:shadow-md transition-shadow duration-300"
              >
                <Badge variant="secondary" className="text-sm font-medium">
                  {tech}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your digital
            transformation goals. Get in touch with our team today for a free
            consultation.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/openings">
              <Button size="lg" className="px-8 py-4 text-lg">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

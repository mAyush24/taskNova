import React from "react";
import { Button } from "../Components/ui/button.jsx";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../Components/ui/card.jsx";
import { MapPin, Clock, Briefcase, Users, Award, Zap } from "lucide-react";

export default function Career() {
  const jobOpenings = [
    {
      title: "IT Support Specialist",
      department: "Technical Support",
      location: "On-site",
      type: "Full-time",
      description:
        "Provide first-line technical support to clients, troubleshoot hardware and software issues, and maintain system documentation.",
    },
    {
      title: "Network Administrator",
      department: "Infrastructure",
      location: "Hybrid",
      type: "Full-time",
      description:
        "Manage and maintain network infrastructure, implement security protocols, and ensure optimal network performance.",
    },
    {
      title: "Cybersecurity Analyst",
      department: "Security",
      location: "Remote / On-site",
      type: "Full-time",
      description:
        "Monitor security systems, conduct vulnerability assessments, and implement security best practices for client environments.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Join <span className="text-brand-primary">TechGuard</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Build your career with a growing IT support company. We're looking for
            passionate individuals who want to make a difference in technology support.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">Why TechGuard?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-background border border-border rounded-lg hover:border-brand-primary/30 transition-all duration-300">
              <div className="w-16 h-16 bg-brand-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-brand-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Fresh Start
              </h3>
              <p className="text-muted-foreground">
                Join a new company with modern approaches and growth opportunities from day one.
              </p>
            </div>

            <div className="text-center p-6 bg-background border border-border rounded-lg hover:border-brand-primary/30 transition-all duration-300">
              <div className="w-16 h-16 bg-brand-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-brand-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Team Culture</h3>
              <p className="text-muted-foreground">
                Collaborative environment where every team member's contribution matters.
              </p>
            </div>

            <div className="text-center p-6 bg-background border border-border rounded-lg hover:border-brand-primary/30 transition-all duration-300">
              <div className="w-16 h-16 bg-brand-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-brand-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Professional Growth</h3>
              <p className="text-muted-foreground">
                Continuous learning opportunities and career advancement in IT support.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">
            Current Openings
          </h2>
          <div className="grid gap-6">
            {jobOpenings.map((job, index) => (
              <Card key={index} className="bg-background border-border hover:border-brand-primary/30 transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                    <div>
                      <CardTitle className="text-xl text-foreground">{job.title}</CardTitle>
                      <CardDescription className="text-base mt-1 text-muted-foreground">
                        {job.department}
                      </CardDescription>
                    </div>
                    <Button className="w-fit">Apply Now</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {job.type}
                    </div>
                  </div>
                  <p className="text-muted-foreground">{job.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-16 p-8 bg-card rounded-lg border border-border">
          <h3 className="text-2xl font-bold text-foreground mb-4">Don't see the right role?</h3>
          <p className="text-muted-foreground mb-6">
            We're always looking for talented individuals. Send us your resume
            and we'll keep you in mind for future opportunities.
          </p>
          <Button size="lg">Send Your Resume</Button>
        </div>
      </div>
    </section>
  );
}

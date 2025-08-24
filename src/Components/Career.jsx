import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Components/ui/button.jsx";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../Components/ui/card.jsx";
import { MapPin, Clock, Briefcase } from "lucide-react";

export default function Career() {
  const jobOpenings = [
    {
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Remote / Hybrid",
      type: "Full-time",
      description:
        "Join our frontend team to build cutting-edge web applications using React, TypeScript, and modern development practices.",
    },
    {
      title: "Backend Developer",
      department: "Engineering",
      location: "On-site",
      type: "Full-time",
      description:
        "Develop robust server-side applications and APIs using Node.js, Python, and cloud technologies.",
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      description:
        "Create intuitive and beautiful user experiences for our digital products and client solutions.",
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Hybrid",
      type: "Full-time",
      description:
        "Manage and optimize our cloud infrastructure, CI/CD pipelines, and deployment processes.",
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-6">
            Join Our Team
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Build your career with TaskNova Solutions. We're looking for
            passionate individuals who want to make a difference in the world of
            technology.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Why TaskNova?</h2>
          <div className="flex flex-wrap justify-between gap-8">
            <div className="text-center p-6 flex-1 min-w-[250px]">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Growth Opportunities
              </h3>
              <p className="text-muted-foreground">
                Continuous learning and career advancement in a dynamic
                environment.
              </p>
            </div>

            <div className="text-center p-6 flex-1 min-w-[250px]">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Work-Life Balance</h3>
              <p className="text-muted-foreground">
                Flexible working arrangements and comprehensive benefits
                package.
              </p>
            </div>

            <div className="text-center p-6 flex-1 min-w-[250px]">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation Culture</h3>
              <p className="text-muted-foreground">
                Work on cutting-edge projects with the latest technologies and
                methodologies.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-center mb-8">
            Current Openings
          </h2>
          <div className="grid gap-6">
            {jobOpenings.map((job, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{job.title}</CardTitle>
                      <CardDescription className="text-base mt-1">
                        {job.department}
                      </CardDescription>
                    </div>
                    <Button>Apply Now</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
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

        <div className="text-center mt-16 p-8 bg-card rounded-lg border">
          <h3 className="text-2xl font-bold mb-4">Don't see the right role?</h3>
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

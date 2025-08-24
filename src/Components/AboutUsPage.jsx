import React from 'react';
import { Users, Target, Award, Lightbulb } from 'lucide-react';

export default function AboutUsPage() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-6">
            About TaskNova Solutions
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are a leading technology solutions company dedicated to
            transforming businesses through innovative software development and
            digital transformation services.
          </p>
        </div>

        {/* Values Section */}
        <div className="flex flex-wrap justify-between gap-8 mb-16">
          <div className="text-center p-6 rounded-lg bg-card border shadow-sm flex-1 min-w-[250px]">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
              <Target className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Mission</h3>
            <p className="text-muted-foreground">
              Delivering cutting-edge solutions that drive business growth and
              efficiency.
            </p>
          </div>

          <div className="text-center p-6 rounded-lg bg-card border shadow-sm flex-1 min-w-[250px]">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Innovation</h3>
            <p className="text-muted-foreground">
              Leveraging latest technologies to create transformative digital
              experiences.
            </p>
          </div>

          <div className="text-center p-6 rounded-lg bg-card border shadow-sm flex-1 min-w-[250px]">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
              <Award className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Excellence</h3>
            <p className="text-muted-foreground">
              Commitment to delivering high-quality solutions that exceed
              expectations.
            </p>
          </div>

          <div className="text-center p-6 rounded-lg bg-card border shadow-sm flex-1 min-w-[250px]">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
              <Users className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Collaboration</h3>
            <p className="text-muted-foreground">
              Building strong partnerships with clients through transparent
              communication.
            </p>
          </div>
        </div>

        {/* Company Story */}
        <div className="bg-card rounded-lg p-8 border shadow-sm">
          <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
          <div className="max-w-none text-muted-foreground">
            <p className="mb-6">
              Founded with a vision to bridge the gap between technology and
              business needs, TaskNova Solutions has been at the forefront of
              digital innovation. Our journey began with a simple belief:
              technology should empower businesses, not complicate them.
            </p>
            <p className="mb-6">
              Over the years, we have evolved into a comprehensive solutions
              provider, offering everything from custom software development to
              enterprise digital transformation. Our team of experienced
              professionals brings together diverse expertise in cutting-edge
              technologies and industry best practices.
            </p>
            <p>
              Today, we proudly serve clients across various industries, helping
              them navigate the digital landscape and achieve sustainable growth
              through innovative technology solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
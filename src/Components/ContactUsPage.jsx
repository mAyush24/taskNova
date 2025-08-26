import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '../Components/ui/button.jsx';
import { Card, CardContent, CardHeader, CardTitle } from '../Components/ui/card.jsx';

export default function ContactUsPage() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contact <span className="text-brand-primary">TechGuard</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to secure your IT infrastructure? We'd love to hear from you.
            Contact us today to discuss how we can support your business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information - Left Column */}
          <div className="space-y-6">
            <Card className="bg-background border-border hover:border-brand-primary/30 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-foreground">
                  <div className="w-12 h-12 bg-brand-primary/20 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-brand-primary" />
                  </div>
                  Email Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">Send us an email anytime</p>
                <p className="font-medium text-foreground">support@techguard.com</p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border hover:border-brand-primary/30 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-foreground">
                  <div className="w-12 h-12 bg-brand-primary/20 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-brand-primary" />
                  </div>
                  Call Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">24/7 support hotline</p>
                <p className="font-medium text-foreground">+1 (555) 123-4567</p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border hover:border-brand-primary/30 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-foreground">
                  <div className="w-12 h-12 bg-brand-primary/20 rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6 text-brand-primary" />
                  </div>
                  Availability
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">We're here when you need us</p>
                <p className="font-medium text-brand-primary">Available 24/7</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form - Right Column */}
          <div>
            <Card className="bg-background border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-2 text-foreground">
                        First Name
                      </label>
                      <input 
                        id="firstName" 
                        placeholder="John" 
                        className="w-full rounded-md border border-border bg-card px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary" 
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-2 text-foreground">
                        Last Name
                      </label>
                      <input 
                        id="lastName" 
                        placeholder="Doe" 
                        className="w-full rounded-md border border-border bg-card px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary" 
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                      Email
                    </label>
                    <input 
                      id="email" 
                      type="email" 
                      placeholder="john@example.com" 
                      className="w-full rounded-md border border-border bg-card px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary" 
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2 text-foreground">
                      Company (Optional)
                    </label>
                    <input 
                      id="company" 
                      placeholder="Your Company" 
                      className="w-full rounded-md border border-border bg-card px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary" 
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2 text-foreground">
                      Subject
                    </label>
                    <input 
                      id="subject" 
                      placeholder="How can we help you?" 
                      className="w-full rounded-md border border-border bg-card px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary" 
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                      Message
                    </label>
                    <textarea 
                      id="message" 
                      placeholder="Tell us about your IT infrastructure needs..." 
                      rows={6} 
                      className="w-full rounded-md border border-border bg-card px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary resize-none" 
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Logo and Description */}
          <div className="flex-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="bg-brand-primary p-2 rounded-lg">
                <Shield className="h-6 w-6 text-background" />
              </div>
              <span className="text-xl font-bold text-brand-primary">TechGuard</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Modern IT support solutions for your business needs.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex-1">
            <h3 className="text-foreground font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-wrap gap-4 md:flex-col md:gap-0">
              <Link to="/" className="text-muted-foreground hover:text-brand-primary transition-colors text-sm mb-2">
                Home
              </Link>
              <Link to="/about" className="text-muted-foreground hover:text-brand-primary transition-colors text-sm mb-2">
                About
              </Link>
              <Link to="/career" className="text-muted-foreground hover:text-brand-primary transition-colors text-sm mb-2">
                Career
              </Link>
              <Link to="/gallery" className="text-muted-foreground hover:text-brand-primary transition-colors text-sm mb-2">
                Gallery
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-brand-primary transition-colors text-sm mb-2">
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="flex-1">
            <h3 className="text-foreground font-semibold mb-4">Services</h3>
            <div className="flex flex-wrap gap-4 md:flex-col md:gap-0">
              <span className="text-muted-foreground text-sm mb-2">System Monitoring</span>
              <span className="text-muted-foreground text-sm mb-2">Cybersecurity</span>
              <span className="text-muted-foreground text-sm mb-2">Cloud Solutions</span>
              <span className="text-muted-foreground text-sm mb-2">IT Support</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex-1">
            <h3 className="text-foreground font-semibold mb-4">Contact Info</h3>
            <div className="flex flex-wrap gap-4 md:flex-col md:gap-0">
              <span className="text-muted-foreground text-sm mb-2">support@techguard.com</span>
              <span className="text-muted-foreground text-sm mb-2">+1 (555) 123-4567</span>
              <span className="text-muted-foreground text-sm mb-2">Available 24/7</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} TechGuard. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 
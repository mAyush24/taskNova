import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-brand-primary p-2 rounded-lg">
              <Shield className="h-6 w-6 text-background" />
            </div>
            <span className="text-xl font-bold text-brand-primary">TechGuard</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/') 
                  ? 'bg-brand-primary text-background' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-accent'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/about') 
                  ? 'bg-brand-primary text-background' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-accent'
              }`}
            >
              About
            </Link>
            <Link
              to="/career"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/career') 
                  ? 'bg-brand-primary text-background' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-accent'
              }`}
            >
              Career
            </Link>
            <Link
              to="/gallery"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/gallery') 
                  ? 'bg-brand-primary text-background' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-accent'
              }`}
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/contact') 
                  ? 'bg-brand-primary text-background' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-accent'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card border-t border-border">
              <Link
                to="/"
                onClick={toggleMenu}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive('/') 
                    ? 'bg-brand-primary text-background' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={toggleMenu}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive('/about') 
                    ? 'bg-brand-primary text-background' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                }`}
              >
                About
              </Link>
              <Link
                to="/career"
                onClick={toggleMenu}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive('/career') 
                    ? 'bg-brand-primary text-background' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                }`}
              >
                Career
              </Link>
              <Link
                to="/gallery"
                onClick={toggleMenu}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive('/gallery') 
                    ? 'bg-brand-primary text-background' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                }`}
              >
                Gallery
              </Link>
              <Link
                to="/contact"
                onClick={toggleMenu}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive('/contact') 
                    ? 'bg-brand-primary text-background' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                }`}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
} 
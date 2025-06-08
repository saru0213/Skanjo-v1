
import { Sparkles, Github, Twitter, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-card/30 backdrop-blur-sm border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Sparkles className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                SKANJO
              </span>
            </Link>
            <p className="text-muted-foreground mb-6">
              Transform your career with AI-powered CV optimization and skill development.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link to="/features" className="text-muted-foreground hover:text-primary transition-colors duration-200">Features</Link></li>
              <li><Link to="/pricing" className="text-muted-foreground hover:text-primary transition-colors duration-200">Pricing</Link></li>
              <li><Link to="/analyze" className="text-muted-foreground hover:text-primary transition-colors duration-200">CV Analyzer</Link></li>
              <li><Link to="/demo" className="text-muted-foreground hover:text-primary transition-colors duration-200">Demo</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors duration-200">About</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors duration-200">Blog</Link></li>
              <li><Link to="/careers" className="text-muted-foreground hover:text-primary transition-colors duration-200">Careers</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors duration-200">Contact</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/help" className="text-muted-foreground hover:text-primary transition-colors duration-200">Help Center</Link></li>
              <li><Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors duration-200">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors duration-200">Terms of Service</Link></li>
              <li><Link to="/security" className="text-muted-foreground hover:text-primary transition-colors duration-200">Security</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2025 SKANJO. All rights reserved. Built with ❤️ for career growth.
          </p>
        </div>
      </div>
    </footer>
  );
};

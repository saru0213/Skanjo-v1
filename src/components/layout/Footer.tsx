import { Sparkles, Github, Twitter, Linkedin, Mail, Bell, ArrowRight } from "lucide-react";
import { useState } from "react";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      // Reset after 3 seconds
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-card/30 backdrop-blur-sm border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <a href="/" className="flex items-center space-x-2 mb-4">
              <Sparkles className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                SKANJO
              </span>
            </a>
            <p className="text-muted-foreground mb-6">
              Transform your career with AI-powered CV optimization and skill
              development.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/features"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="/plans"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Plans
                </a>
              </li>
              <li>
                <a
                  href="/analyze"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  CV Analyzer
                </a>
              </li>
              <li>
                <a
                  href="/demo"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Demo
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/careers"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/help"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="/security"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Security
                </a>
              </li>
            </ul>
          </div>

          {/* Stay Updated */}
          <div>
            <h3 className="font-semibold mb-4 flex items-center">
              <Bell className="h-4 w-4 mr-2" />
              Stay Updated
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              Get the latest features and career tips delivered to your inbox.
            </p>
            <div className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 text-sm bg-background/50 border border-border/50 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors duration-200"
                />
              </div>
              <button
                onClick={handleSubscribe}
                disabled={subscribed}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {subscribed ? (
                  "Subscribed! ✓"
                ) : (
                  <>
                    Subscribe
                    <ArrowRight className="h-3 w-3 ml-1" />
                  </>
                )}
              </button>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Unsubscribe anytime. We respect your privacy.
            </p>
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
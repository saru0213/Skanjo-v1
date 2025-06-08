
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Sparkles className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute -inset-1 bg-primary/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              SKANJO
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground/70 hover:text-primary transition-colors duration-200">
              Home
            </Link>
            <Link to="/analyze" className="text-foreground/70 hover:text-primary transition-colors duration-200">
              Analyze CV
            </Link>
            <Link to="/features" className="text-foreground/70 hover:text-primary transition-colors duration-200">
              Features
            </Link>
            <Link to="/pricing" className="text-foreground/70 hover:text-primary transition-colors duration-200">
              Pricing
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link to="/login">Sign In</Link>
            </Button>
            <Button asChild className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transform hover:scale-105 transition-all duration-200 rounded-xl shadow-lg shadow-primary/25">
              <Link to="/analyze">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-border/50 animate-fade-in">
            <nav className="container mx-auto px-4 py-6 space-y-4">
              <Link to="/" className="block text-foreground/70 hover:text-primary transition-colors duration-200">
                Home
              </Link>
              <Link to="/analyze" className="block text-foreground/70 hover:text-primary transition-colors duration-200">
                Analyze CV
              </Link>
              <Link to="/features" className="block text-foreground/70 hover:text-primary transition-colors duration-200">
                Features
              </Link>
              <Link to="/pricing" className="block text-foreground/70 hover:text-primary transition-colors duration-200">
                Pricing
              </Link>
              <div className="pt-4 space-y-3">
                <Button variant="ghost" className="w-full" asChild>
                  <Link to="/login">Sign In</Link>
                </Button>
                <Button className="w-full bg-gradient-to-r from-primary to-primary/80 rounded-xl" asChild>
                  <Link to="/analyze">Get Started</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

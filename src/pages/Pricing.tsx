
import { Check, Star, Zap, Crown, ArrowRight, Sparkles } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for exploring your career potential",
    icon: Star,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    features: [
      "1 CV analysis per month",
      "Basic skill gap analysis",
      "3 project suggestions",
      "Community support",
      "Basic CV optimization tips"
    ],
    limitations: [
      "Limited to 1 job matching",
      "Basic feedback only",
      "No priority support"
    ],
    cta: "Get Started Free",
    popular: false
  },
  {
    name: "Professional",
    price: "$29",
    period: "/month",
    description: "Ideal for active job seekers and career changers",
    icon: Zap,
    color: "text-primary",
    bgColor: "bg-primary/10",
    features: [
      "Unlimited CV analyses",
      "Advanced skill gap analysis",
      "20 project suggestions per month",
      "AI feedback on submissions",
      "Premium CV templates",
      "ATS optimization",
      "LinkedIn profile optimization",
      "Priority email support",
      "Progress tracking dashboard"
    ],
    limitations: [],
    cta: "Start Professional",
    popular: true
  },
  {
    name: "Enterprise",
    price: "$99",
    period: "/month",
    description: "For teams and organizations seeking comprehensive solutions",
    icon: Crown,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    features: [
      "Everything in Professional",
      "Unlimited team members",
      "Custom skill frameworks",
      "Advanced analytics & reporting",
      "White-label solutions",
      "API access",
      "Custom integrations",
      "Dedicated account manager",
      "24/7 priority support",
      "Training & onboarding"
    ],
    limitations: [],
    cta: "Contact Sales",
    popular: false
  }
];

const faqs = [
  {
    question: "Can I change my plan anytime?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and you'll be charged or credited proportionally."
  },
  {
    question: "Is there a free trial for paid plans?",
    answer: "Yes! All paid plans come with a 14-day free trial. No credit card required to start."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and bank transfers for enterprise plans."
  },
  {
    question: "How accurate is the AI analysis?",
    answer: "Our AI has been trained on millions of successful CV and job matching pairs, achieving 95%+ accuracy in skill gap identification."
  }
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-primary/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8 border border-primary/20">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Simple & Transparent Pricing</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Choose Your
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Career Growth Plan
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Start free and scale as you grow. All plans include our core AI-powered features with no hidden fees.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 transition-all duration-500 hover:shadow-2xl animate-fade-in ${
                  plan.popular ? 'border-primary/50 shadow-lg shadow-primary/10 scale-105' : 'hover:border-primary/20'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground text-center py-2 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                
                <CardHeader className={`relative z-10 ${plan.popular ? 'pt-12' : ''}`}>
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${plan.bgColor} mb-4`}>
                    <plan.icon className={`h-6 w-6 ${plan.color}`} />
                  </div>
                  
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <CardDescription className="text-muted-foreground mb-4">
                    {plan.description}
                  </CardDescription>
                  
                  <div className="flex items-baseline mb-6">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.period && <span className="text-muted-foreground ml-2">{plan.period}</span>}
                  </div>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full h-12 rounded-xl transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transform hover:scale-105 shadow-lg shadow-primary/25' 
                        : 'bg-gradient-to-r from-secondary to-secondary/80 hover:from-secondary/90 hover:to-secondary/70'
                    }`}
                    asChild={plan.name !== "Enterprise"}
                  >
                    {plan.name === "Enterprise" ? (
                      <span>{plan.cta}</span>
                    ) : (
                      <Link to="/analyze" className="flex items-center justify-center space-x-2">
                        <span>{plan.cta}</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-16 bg-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                All Plans Include
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              "AI-Powered Analysis",
              "Skill Gap Detection", 
              "Project Recommendations",
              "Progress Tracking",
              "CV Optimization",
              "ATS Compatibility",
              "Industry Insights",
              "Mobile App Access"
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-card/50 backdrop-blur-sm rounded-lg border border-border/50">
                <Check className="h-5 w-5 text-green-500" />
                <span className="font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Start Your Career Transformation Today
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of professionals who have already transformed their careers with SKANJO
            </p>
            <Button size="lg" asChild className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transform hover:scale-105 transition-all duration-300 text-lg px-8 py-6 rounded-xl shadow-lg shadow-primary/25">
              <Link to="/analyze" className="flex items-center space-x-2">
                <span>Start Free Trial</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;

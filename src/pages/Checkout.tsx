import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Check, CreditCard, Key, Copy, CheckCircle, Shield, Clock, Star, Users, Zap, Award } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  contact: z.string().min(10, "Please enter a valid contact number"),
  organization: z.string().min(2, "Organization name is required"),
  numberOfPeople: z.string().min(1, "Number of people is required"),
});

type FormData = z.infer<typeof formSchema>;

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showPayment, setShowPayment] = useState(false);
  const [apiKey, setApiKey] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  // Get plan details from location state
  const plan = location.state?.plan || {
    name: "Starter",
    price: "Free",
    description: "Perfect for exploring your career potential"
  };

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      contact: "",
      organization: "",
      numberOfPeople: "",
    },
  });

  const generateApiKey = () => {
    const timestamp = Date.now().toString(36);
    const randomStr = Math.random().toString(36).substring(2, 15);
    return `sk_${plan.name.toLowerCase()}_${timestamp}${randomStr}`;
  };

  const onSubmit = async (data: FormData) => {
    setIsProcessing(true);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (plan.price === "Free") {
        // For free plan, generate API key directly
        const newApiKey = generateApiKey();
        setApiKey(newApiKey);
        toast({
          title: "Success!",
          description: "Your API key has been generated successfully.",
        });
      } else {
        // For paid plans, show payment button
        setShowPayment(true);
        toast({
          title: "Details Submitted",
          description: "Please proceed with payment to get your API key.",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const handlePayment = async () => {
    setIsProcessing(true);
    
    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Generate API key after successful payment
      const newApiKey = generateApiKey();
      setApiKey(newApiKey);
      setShowPayment(false);
      
      toast({
        title: "Payment Successful!",
        description: "Your API key has been generated.",
      });
    } catch (error) {
      toast({
        title: "Payment Failed",
        description: "Please try again or contact support.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const copyApiKey = () => {
    navigator.clipboard.writeText(apiKey);
    toast({
      title: "Copied!",
      description: "API key has been copied to clipboard.",
    });
  };

  const getPlanIcon = () => {
    switch (plan.name.toLowerCase()) {
      case 'starter': return <Zap className="h-6 w-6" />;
      case 'professional': return <Star className="h-6 w-6" />;
      case 'enterprise': return <Award className="h-6 w-6" />;
      default: return <Zap className="h-6 w-6" />;
    }
  };

  const getPlanColor = () => {
    switch (plan.name.toLowerCase()) {
      case 'starter': return 'from-green-500 to-emerald-600';
      case 'professional': return 'from-blue-500 to-indigo-600';
      case 'enterprise': return 'from-purple-500 to-violet-600';
      default: return 'from-green-500 to-emerald-600';
    }
  };

  if (apiKey) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <section className="pt-24 pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              {/* Success Animation */}
              <div className="text-center mb-8 animate-fade-in">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent mb-6 mx-auto shadow-2xl animate-scale-in">
                  <CheckCircle className="h-10 w-10 text-primary" />
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-foreground">
                  Success!
                </h1>
                <p className="text-lg text-muted-foreground">
                  Your {plan.name} plan is now active and ready to use
                </p>
              </div>
              <Card className="bg-card border border-border">
                <CardHeader>
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-accent text-foreground shadow-lg">
                      {getPlanIcon()}
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-foreground">
                        {plan.name} Plan Activated
                      </CardTitle>
                      <CardDescription className="text-base text-muted-foreground">
                        {plan.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* API Key Section */}
                  <div className="p-6 bg-muted rounded-2xl border border-border">
                    <Label className="text-base font-semibold text-foreground mb-4 block flex items-center">
                      <Key className="h-5 w-5 mr-2 text-primary" />
                      Your API Key
                    </Label>
                    <div className="flex items-center space-x-3">
                      <div className="flex-1 p-4 bg-background rounded-xl border border-border font-mono text-sm break-all shadow-inner">
                        {apiKey}
                      </div>
                      <Button
                        variant="outline"
                        size="lg"
                        onClick={copyApiKey}
                        className="flex-shrink-0 h-12 px-6 hover:bg-accent/50 transition-all duration-200 hover:scale-105"
                      >
                        <Copy className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                  {/* Security Notice */}
                  <div className="p-6 bg-accent rounded-2xl border border-border">
                    <div className="flex items-start space-x-3">
                      <div className="p-2 bg-muted rounded-lg">
                        <Shield className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2 text-base">Security Guidelines</h4>
                        <ul className="text-muted-foreground space-y-2 text-sm">
                          <li className="flex items-center">
                            <Check className="h-4 w-4 mr-2 text-green-500" />
                            Keep your API key secure and never share it publicly
                          </li>
                          <li className="flex items-center">
                            <Check className="h-4 w-4 mr-2 text-green-500" />
                            Use this key in your API requests for authentication
                          </li>
                          <li className="flex items-center">
                            <Check className="h-4 w-4 mr-2 text-green-500" />
                            Monitor your usage through our analytics dashboard
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* Next Steps */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <Button 
                      onClick={() => navigate("/docs")}
                      variant="default"
                      size="lg"
                      className="h-12 text-base font-semibold"
                    >
                      <Key className="h-5 w-5 mr-2" />
                      View Documentation
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => navigate("/")}
                      size="lg"
                      className="h-12 text-base font-semibold"
                    >
                      Back to Dashboard
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      <Header />
      
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-background" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Header Section */}
            <div className="mb-12 animate-fade-in">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  {/* <div className="inline-flex items-center bg-muted px-4 py-1 rounded-full border border-border">
                    <Star className="h-4 w-4 text-primary mr-2" />
                    <span className="text-xs font-medium text-muted-foreground">Secure Checkout</span>
                  </div> */}
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-accent text-foreground shadow-lg">
                      {getPlanIcon()}
                    </div>
                    <span className="font-semibold text-lg text-foreground">{plan.name} Plan</span>
                  </div>
                </div>
                <div className="text-left">
                  <h1 className="text-3xl sm:text-4xl font-bold mb-1 text-foreground">
                    Complete Your <span className="text-primary">{plan.name}</span> Setup
                  </h1>
                  <p className="text-base text-muted-foreground">
                    {plan.price === "Free" ? "Get instant access to your API key" : "Secure checkout for premium features"}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left Column - Plan Details */}
              <div className="lg:col-span-1 space-y-6">
                <Card className="bg-card border border-border">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full bg-accent" />
                      <CardTitle className="text-xl text-foreground">{plan.name} Plan</CardTitle>
                    </div>
                    <CardDescription className="text-base text-muted-foreground">{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-4">
                      <div className="text-3xl font-bold text-foreground mb-1">{plan.price}{plan.period || ""}</div>
                      {plan.price !== "Free" && (
                        <p className="text-sm text-muted-foreground">per {plan.period?.replace("/", "") || "month"}</p>
                      )}
                    </div>
                    {/* Plan Features */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-muted-foreground"><Check className="h-4 w-4 text-green-500" /><span>API Access</span></div>
                      <div className="flex items-center gap-2 text-muted-foreground"><Users className="h-4 w-4 text-blue-500" /><span>Team Collaboration</span></div>
                      <div className="flex items-center gap-2 text-muted-foreground"><Clock className="h-4 w-4 text-purple-500" /><span>24/7 Support</span></div>
                    </div>
                  </CardContent>
                </Card>
                {/* Trust Indicators */}
                <Card className="bg-muted border border-border">
                  <CardContent className="pt-6">
                    <div className="text-center space-y-4">
                      <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-2">
                        <Shield className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-base text-foreground">Secure & Trusted</h3>
                      <p className="text-xs text-muted-foreground">Your data is protected with enterprise-grade security</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column - Form */}
              <div className="lg:col-span-2">
                <Card className="bg-card border border-border">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center text-foreground">
                      <CreditCard className="h-5 w-5 mr-2 text-primary" />
                      {plan.price === "Free" ? "Get Your API Key" : "Billing Information"}
                    </CardTitle>
                    <CardDescription className="text-base text-muted-foreground">Please provide your details to continue</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-base font-medium">Full Name</FormLabel>
                                <FormControl>
                                  <Input 
                                    placeholder="Enter your full name" 
                                    className="h-12 text-base border-2 focus:border-primary transition-colors"
                                    {...field} 
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-base font-medium">Email Address</FormLabel>
                                <FormControl>
                                  <Input 
                                    type="email" 
                                    placeholder="Enter your email" 
                                    className="h-12 text-base border-2 focus:border-primary transition-colors"
                                    {...field} 
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="contact"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-base font-medium">Contact Number</FormLabel>
                                <FormControl>
                                  <Input 
                                    placeholder="Enter your contact number" 
                                    className="h-12 text-base border-2 focus:border-primary transition-colors"
                                    {...field} 
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="numberOfPeople"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-base font-medium">Team Size</FormLabel>
                                <FormControl>
                                  <Input 
                                    type="number" 
                                    placeholder="Number of people" 
                                    className="h-12 text-base border-2 focus:border-primary transition-colors"
                                    {...field} 
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="organization"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-base font-medium">Organization</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Enter your organization name" 
                                  className="h-12 text-base border-2 focus:border-primary transition-colors"
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <Button type="submit" variant="default" className="w-full h-12 text-base font-semibold" disabled={isProcessing}>
                          {isProcessing ? (
                            <div className="flex items-center space-x-2">
                              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                              <span>Processing...</span>
                            </div>
                          ) : (
                            `${plan.price === "Free" ? "Get API Key" : "Continue to Payment"}`
                          )}
                        </Button>
                      </form>
                    </Form>
                    {showPayment && (
                      <div className="mt-8 p-6 bg-muted rounded-xl border border-border animate-fade-in">
                        <div className="text-center mb-4">
                          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent mb-2">
                            <CreditCard className="h-6 w-6 text-primary" />
                          </div>
                          <h3 className="font-bold text-lg mb-1 text-foreground">Secure Payment</h3>
                          <p className="text-sm text-muted-foreground">Complete your payment to activate your {plan.name} plan</p>
                        </div>
                        <Button onClick={handlePayment} variant="default" className="w-full h-12 text-base font-semibold" disabled={isProcessing}>
                          {isProcessing ? (
                            <div className="flex items-center space-x-2">
                              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                              <span>Processing Payment...</span>
                            </div>
                          ) : (
                            <div className="flex items-center space-x-2">
                              <CreditCard className="h-5 w-5" />
                              <span>Pay {plan.price}{plan.period || ""}</span>
                            </div>
                          )}
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Checkout;
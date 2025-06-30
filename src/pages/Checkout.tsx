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
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
        <Header />
        
        <section className="pt-24 pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              {/* Success Animation */}
              <div className="text-center mb-8 animate-fade-in">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 mb-6 mx-auto shadow-2xl animate-scale-in">
                  <CheckCircle className="h-12 w-12 text-white" />
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                  Success!
                </h1>
                <p className="text-xl text-muted-foreground">
                  Your {plan.name} plan is now active and ready to use
                </p>
              </div>

              <Card className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardHeader className="pb-8 relative z-10">
                  <div className="flex items-center justify-center space-x-3 mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${getPlanColor()} text-white shadow-lg`}>
                      {getPlanIcon()}
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold">
                        {plan.name} Plan Activated
                      </CardTitle>
                      <CardDescription className="text-lg">
                        {plan.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-8 relative z-10">
                  {/* API Key Section */}
                  <div className="p-6 bg-accent/10 rounded-2xl border border-border/50">
                    <Label className="text-lg font-semibold text-foreground mb-4 block flex items-center">
                      <Key className="h-5 w-5 mr-2 text-primary" />
                      Your API Key
                    </Label>
                    <div className="flex items-center space-x-3">
                      <div className="flex-1 p-4 bg-background rounded-xl border border-border/50 font-mono text-sm break-all shadow-inner">
                        {apiKey}
                      </div>
                      <Button
                        variant="outline"
                        size="lg"
                        onClick={copyApiKey}
                        className="flex-shrink-0 h-14 px-6 hover:bg-accent/50 transition-all duration-200 hover:scale-105"
                      >
                        <Copy className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                  
                  {/* Security Notice */}
                  <div className="p-6 bg-blue-500/10 rounded-2xl border border-blue-500/20">
                    <div className="flex items-start space-x-3">
                      <div className="p-2 bg-blue-500/20 rounded-lg">
                        <Shield className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-800 mb-2 text-lg">Security Guidelines</h4>
                        <ul className="text-blue-700 space-y-2">
                          <li className="flex items-center">
                            <Check className="h-4 w-4 mr-2 text-blue-600" />
                            Keep your API key secure and never share it publicly
                          </li>
                          <li className="flex items-center">
                            <Check className="h-4 w-4 mr-2 text-blue-600" />
                            Use this key in your API requests for authentication
                          </li>
                          <li className="flex items-center">
                            <Check className="h-4 w-4 mr-2 text-blue-600" />
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
                      size="lg"
                      className="h-16 text-lg bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
                    >
                      <Key className="h-6 w-6 mr-3" />
                      View Documentation
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => navigate("/")}
                      size="lg"
                      className="h-16 text-lg border-2 hover:bg-accent/50 transition-all duration-200 hover:scale-105"
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
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center space-x-2 bg-primary/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8 border border-primary/20">
                <Star className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Secure Checkout</span>
              </div>
              
              <div className="inline-flex items-center space-x-4 mb-6">
                <div className={`p-4 rounded-2xl bg-gradient-to-r ${getPlanColor()} text-white shadow-2xl`}>
                  {getPlanIcon()}
                </div>
                <div className="text-left">
                  <h1 className="text-4xl sm:text-5xl font-bold mb-2">
                    Complete Your <span className={`bg-gradient-to-r ${getPlanColor()} bg-clip-text text-transparent`}>{plan.name}</span> Setup
                  </h1>
                  <p className="text-xl text-muted-foreground">
                    {plan.price === "Free" ? "Get instant access to your API key" : "Secure checkout for premium features"}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left Column - Plan Details */}
              <div className="lg:col-span-1 space-y-6">
                <Card className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <CardHeader className="relative z-10">
                    <div className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${getPlanColor()}`} />
                      <CardTitle className="text-xl">
                        {plan.name} Plan
                      </CardTitle>
                    </div>
                    <CardDescription className="text-lg">
                      {plan.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <div className="text-center py-6">
                      <div className={`text-4xl font-bold bg-gradient-to-r ${getPlanColor()} bg-clip-text text-transparent mb-2`}>
                        {plan.price}{plan.period || ""}
                      </div>
                      {plan.price !== "Free" && (
                        <p className="text-muted-foreground">per {plan.period?.replace("/", "") || "month"}</p>
                      )}
                    </div>
                    
                    {/* Plan Features */}
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Check className="h-5 w-5 text-green-500" />
                        <span>API Access</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Users className="h-5 w-5 text-blue-500" />
                        <span>Team Collaboration</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="h-5 w-5 text-purple-500" />
                        <span>24/7 Support</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Trust Indicators */}
                <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-xl transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Shield className="h-8 w-8 text-green-500" />
                      </div>
                      <h3 className="font-semibold text-lg">Secure & Trusted</h3>
                      <p className="text-sm text-muted-foreground">
                        Your data is protected with enterprise-grade security
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column - Form */}
              <div className="lg:col-span-2">
                <Card className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <CardHeader className="relative z-10">
                    <CardTitle className="text-2xl flex items-center">
                      <CreditCard className="h-6 w-6 mr-3 text-primary" />
                      {plan.price === "Free" ? "Get Your API Key" : "Billing Information"}
                    </CardTitle>
                    <CardDescription className="text-lg">
                      Please provide your details to continue
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="relative z-10">
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
                        
                        <Button 
                          type="submit" 
                          className={`w-full h-14 text-lg font-semibold bg-gradient-to-r ${getPlanColor()} hover:shadow-2xl transition-all duration-200 hover:scale-[1.02]`}
                          disabled={isProcessing}
                        >
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
                      <div className="mt-8 p-8 bg-accent/10 rounded-2xl border border-border/50 animate-fade-in">
                        <div className="text-center mb-6">
                          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 mb-4">
                            <CreditCard className="h-8 w-8 text-white" />
                          </div>
                          <h3 className="font-bold text-2xl mb-2">Secure Payment</h3>
                          <p className="text-muted-foreground text-lg">
                            Complete your payment to activate your {plan.name} plan
                          </p>
                        </div>
                        
                        <Button 
                          onClick={handlePayment}
                          className={`w-full h-16 text-xl font-semibold bg-gradient-to-r ${getPlanColor()} hover:shadow-2xl transition-all duration-200 hover:scale-[1.02]`}
                          disabled={isProcessing}
                        >
                          {isProcessing ? (
                            <div className="flex items-center space-x-3">
                              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                              <span>Processing Payment...</span>
                            </div>
                          ) : (
                            <div className="flex items-center space-x-3">
                              <CreditCard className="h-6 w-6" />
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
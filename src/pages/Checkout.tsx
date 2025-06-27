
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
import { Check, CreditCard, Key, Copy, CheckCircle } from "lucide-react";
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

  if (apiKey) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
        <Header />
        
        <section className="pt-24 pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 mb-4 mx-auto">
                    <CheckCircle className="h-8 w-8 text-green-500" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-green-600">
                    API Key Generated Successfully!
                  </CardTitle>
                  <CardDescription>
                    Your {plan.name} plan API key is ready to use
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="p-4 bg-accent/10 rounded-lg border border-border/50">
                    <Label className="text-sm font-medium text-muted-foreground mb-2 block">
                      Your API Key
                    </Label>
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 p-3 bg-background rounded border border-border/50 font-mono text-sm break-all">
                        {apiKey}
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={copyApiKey}
                        className="flex-shrink-0"
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                    <h4 className="font-medium text-blue-700 mb-2">Important Notes:</h4>
                    <ul className="text-sm text-blue-600 space-y-1">
                      <li>• Keep your API key secure and don't share it publicly</li>
                      <li>• Use this key in your API requests for authentication</li>
                      <li>• Refer to our documentation for implementation details</li>
                    </ul>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      onClick={() => navigate("/docs")}
                      className="flex-1"
                    >
                      <Key className="h-4 w-4 mr-2" />
                      View Documentation
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => navigate("/")}
                      className="flex-1"
                    >
                      Back to Home
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
      
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                Complete Your <span className="text-primary">{plan.name}</span> Plan Setup
              </h1>
              <p className="text-muted-foreground">
                Please provide your details to {plan.price === "Free" ? "get your API key" : "proceed with payment"}
              </p>
            </div>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full ${plan.price === "Free" ? "bg-green-500" : "bg-primary"}`} />
                  <span>{plan.name} Plan - {plan.price}{plan.period || ""}</span>
                </CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your full name" {...field} />
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
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="Enter your email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="contact"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Contact Number</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your contact number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="organization"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Organization</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your organization name" {...field} />
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
                          <FormLabel>Number of People in Organization</FormLabel>
                          <FormControl>
                            <Input type="number" placeholder="Enter number of people" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full h-12" 
                      disabled={isProcessing}
                    >
                      {isProcessing ? "Processing..." : "Submit Details"}
                    </Button>
                  </form>
                </Form>
                
                {showPayment && (
                  <div className="mt-8 p-6 bg-accent/10 rounded-lg border border-border/50">
                    <h3 className="font-semibold text-lg mb-4 flex items-center">
                      <CreditCard className="h-5 w-5 mr-2" />
                      Complete Payment
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Proceed with payment to activate your {plan.name} plan and receive your API key.
                    </p>
                    <Button 
                      onClick={handlePayment}
                      className="w-full h-12 bg-gradient-to-r from-primary to-primary/80"
                      disabled={isProcessing}
                    >
                      {isProcessing ? "Processing Payment..." : `Pay ${plan.price}${plan.period || ""}`}
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Checkout;
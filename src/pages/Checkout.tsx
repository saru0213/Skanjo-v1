import React, { useState, useContext, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Check,
  CreditCard,
  Key,
  Copy,
  CheckCircle,
  Shield,
  Star,
  Users,
  Zap,
  ArrowRight,
  Sparkles,
  Lock,
  Award,
} from "lucide-react";
import { AuthContext } from "@/auth/AuthContext";
import { useNavigate } from "react-router-dom";

type FormData = {
  name: string;
  email: string;
  contact: string;
  organization: string;
  numberOfPeople: string;
};

// Simple Header Component
const Header = () => (
  <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200/50 sticky top-0 z-50">
    <div className="container mx-auto px-4 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
          API Platform
        </h1>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm">
            Documentation
          </Button>
          <Button variant="ghost" size="sm">
            Support
          </Button>
        </div>
      </div>
    </div>
  </header>
);

// Simple Footer Component
const Footer = () => (
  <footer className="bg-slate-900 text-white py-12 mt-16">
    <div className="container mx-auto px-4">
      <div className="text-center">
        <p className="text-slate-400">
          &copy; 2025 API Platform. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

const Checkout = () => {
  const [showPayment, setShowPayment] = useState(false);
  const [apiKey, setApiKey] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    contact: "",
    organization: "",
    numberOfPeople: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  // Mock plan details
  const plan = {
    name: "Professional",
    price: "$29",
    period: "/month",
    description: "Perfect for growing teams and advanced features",
  };

  const generateApiKey = () => {
    const timestamp = Date.now().toString(36);
    const randomStr = Math.random().toString(36).substring(2, 15);
    return `sk_${plan.name.toLowerCase()}_${timestamp}${randomStr}`;
  };

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name || formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.contact || formData.contact.length < 10) {
      newErrors.contact = "Please enter a valid contact number";
    }
    if (!formData.organization || formData.organization.length < 2) {
      newErrors.organization = "Organization name is required";
    }
    if (!formData.numberOfPeople || formData.numberOfPeople.length < 1) {
      newErrors.numberOfPeople = "Number of people is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsProcessing(true);

    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (plan.price === "Free") {
        // For free plan, generate API key directly
        const newApiKey = generateApiKey();
        setApiKey(newApiKey);
        showToast("Success!", "Your API key has been generated successfully.");
      } else {
        // For paid plans, show payment button
        setShowPayment(true);
        showToast(
          "Details Submitted",
          "Please proceed with payment to get your API key."
        );
      }
    } catch (error) {
      showToast("Error", "Something went wrong. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  const handlePayment = async () => {
    setIsProcessing(true);

    try {
      // Simulate payment processing
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Generate API key after successful payment
      const newApiKey = generateApiKey();
      setApiKey(newApiKey);
      setShowPayment(false);

      showToast("Payment Successful!", "Your API key has been generated.");
    } catch (error) {
      showToast("Payment Failed", "Please try again or contact support.");
    } finally {
      setIsProcessing(false);
    }
  };

  const copyApiKey = () => {
    navigator.clipboard.writeText(apiKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    showToast("Copied!", "API key has been copied to clipboard.");
  };

  const showToast = (title: string, description: string) => {
    // Simple toast implementation
    const toast = document.createElement("div");
    toast.className =
      "fixed bottom-4 right-4 bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-50";
    toast.innerHTML = `
      <div class="font-semibold">${title}</div>
      <div class="text-sm text-gray-600">${description}</div>
    `;
    document.body.appendChild(toast);
    setTimeout(() => document.body.removeChild(toast), 3000);
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  // Optional: Basic validation
  if (!formData.name || !formData.email) {
    setErrors((prev) => ({
      ...prev,
      name: !formData.name ? "Name is required" : "",
      email: !formData.email ? "Email is required" : "",
    }));
    return;
  }

  // Submit logic or call API
  console.log("Form submitted:", formData);

  // Optionally start processing state
  setIsProcessing(true);

  // Simulate async behavior
  setTimeout(() => {
    setIsProcessing(false);
    // Continue to payment or success
    setShowPayment(true); // or handle success logic
  }, 2000);
};

useEffect(() => {
  if (!isAuthenticated) {
    navigate("/login");
  }
}, [isAuthenticated, navigate]);

  if (apiKey) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-green-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse" />
        </div>

        <Header />

        <section className="pt-24 pb-16 relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Success animation */}
              <div className="text-center mb-8">
                <div className="relative inline-flex items-center justify-center w-24 h-24 mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-ping opacity-20" />
                  <div className="relative w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                    <CheckCircle className="h-10 w-10 text-white" />
                  </div>
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4">
                  Welcome Aboard! 🎉
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Your{" "}
                  <span className="font-semibold text-blue-600">
                    {plan.name}
                  </span>{" "}
                  plan is now active and ready to power your applications
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {/* API Key Card */}
                <div className="lg:col-span-2">
                  <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <CardHeader className="pb-4">
                      <CardTitle className="flex items-center text-2xl font-bold">
                        <Key className="h-6 w-6 mr-3 text-blue-600" />
                        Your API Key
                      </CardTitle>
                      <CardDescription className="text-base">
                        Keep this secure and use it to authenticate your API
                        requests
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur opacity-50 group-hover:opacity-75 transition-opacity" />
                        <div className="relative p-6 bg-gradient-to-r from-slate-50 to-blue-50/50 rounded-xl border border-slate-200/50">
                          <Label className="text-sm font-semibold text-slate-600 mb-3 block flex items-center">
                            <Lock className="h-4 w-4 mr-2" />
                            API Key
                          </Label>
                          <div className="flex items-center space-x-3">
                            <div className="flex-1 p-4 bg-white rounded-lg border border-slate-200 font-mono text-sm break-all shadow-sm">
                              {apiKey}
                            </div>
                            <Button
                              variant={copied ? "default" : "outline"}
                              size="lg"
                              onClick={copyApiKey}
                              className={`flex-shrink-0 transition-all duration-200 ${
                                copied
                                  ? "bg-green-500 hover:bg-green-600 text-white"
                                  : "hover:bg-blue-600 hover:text-white"
                              }`}
                            >
                              {copied ? (
                                <Check className="h-4 w-4" />
                              ) : (
                                <Copy className="h-4 w-4" />
                              )}
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <Button
                          onClick={() => alert("Navigate to documentation")}
                          className="h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-200"
                        >
                          <Key className="h-5 w-5 mr-2" />
                          View Documentation
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => alert("Navigate to home")}
                          className="h-12 border-2 hover:bg-slate-50 transition-all duration-200"
                        >
                          Back to Home
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Side Panel */}
                <div className="space-y-6">
                  {/* Plan Summary */}
                  <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center text-lg">
                        <Award className="h-5 w-5 mr-2 text-blue-600" />
                        Plan Summary
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                        <div>
                          <h3 className="font-semibold text-blue-600">
                            {plan.name} Plan
                          </h3>
                          <p className="text-sm text-gray-600">
                            {plan.price}
                            {plan.period || ""}
                          </p>
                        </div>
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                          <Check className="h-4 w-4 text-white" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Security Notice */}
                  <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200/50 shadow-lg">
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center text-lg text-amber-800">
                        <Shield className="h-5 w-5 mr-2" />
                        Security Best Practices
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-amber-700">
                        <li className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                          Never share your API key publicly or in client-side
                          code
                        </li>
                        <li className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                          Store it securely in environment variables
                        </li>
                        <li className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                          Monitor your API usage regularly
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Next Steps */}
                  <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200/50 shadow-lg">
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center text-lg text-blue-800">
                        <Zap className="h-5 w-5 mr-2" />
                        What's Next?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 text-sm text-blue-700">
                        <div className="flex items-center">
                          <ArrowRight className="h-4 w-4 mr-2 text-blue-500" />
                          Read our comprehensive API documentation
                        </div>
                        <div className="flex items-center">
                          <ArrowRight className="h-4 w-4 mr-2 text-blue-500" />
                          Try our interactive API playground
                        </div>
                        <div className="flex items-center">
                          <ArrowRight className="h-4 w-4 mr-2 text-blue-500" />
                          Join our developer community
                        </div>
                      </div>
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
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        <Header />

        <section className="pt-12 pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              {/* Header Section */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-600 text-sm font-medium mb-6">
                  <Sparkles className="h-4 w-4 mr-2" />
                  Almost there! Complete your setup
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                  Activate Your{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {plan.name}
                  </span>{" "}
                  Plan
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  {plan.price === "Free"
                    ? "Just a few details and you'll have instant access to your API key"
                    : "Complete your information and payment to unlock powerful API access"}
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {/* Main Form */}
                <div className="lg:col-span-2">
                  <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <CardHeader className="pb-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="flex items-center text-2xl font-bold mb-2">
                            <div
                              className={`w-4 h-4 rounded-full mr-3 ${
                                plan.price === "Free"
                                  ? "bg-green-500"
                                  : "bg-blue-600"
                              }`}
                            />
                            {plan.name} Plan
                          </CardTitle>
                          <CardDescription className="text-base">
                            {plan.description}
                          </CardDescription>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-blue-600">
                            {plan.price}
                          </div>
                          {plan.period && (
                            <div className="text-sm text-gray-500">
                              {plan.period}
                            </div>
                          )}
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <form onSubmit={handleSubmit}>
                        <div className="space-y-6">
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <Label className="text-base font-semibold">
                                Full Name
                              </Label>
                              <Input
                                placeholder="Enter your full name"
                                value={formData.name}
                                onChange={(e) =>
                                  handleInputChange("name", e.target.value)
                                }
                                className="h-12 bg-white border-2 border-slate-200 focus:border-blue-500 transition-colors mt-2"
                              />
                              {errors.name && (
                                <p className="text-red-500 text-sm mt-1">
                                  {errors.name}
                                </p>
                              )}
                            </div>

                            <div>
                              <Label className="text-base font-semibold">
                                Email Address
                              </Label>
                              <Input
                                type="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={(e) =>
                                  handleInputChange("email", e.target.value)
                                }
                                className="h-12 bg-white border-2 border-slate-200 focus:border-blue-500 transition-colors mt-2"
                              />
                              {errors.email && (
                                <p className="text-red-500 text-sm mt-1">
                                  {errors.email}
                                </p>
                              )}
                            </div>
                          </div>

                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <Label className="text-base font-semibold">
                                Contact Number
                              </Label>
                              <Input
                                placeholder="Enter your contact number"
                                value={formData.contact}
                                onChange={(e) =>
                                  handleInputChange("contact", e.target.value)
                                }
                                className="h-12 bg-white border-2 border-slate-200 focus:border-blue-500 transition-colors mt-2"
                              />
                              {errors.contact && (
                                <p className="text-red-500 text-sm mt-1">
                                  {errors.contact}
                                </p>
                              )}
                            </div>

                            <div>
                              <Label className="text-base font-semibold">
                                Team Size
                              </Label>
                              <Input
                                type="number"
                                placeholder="Number of team members"
                                value={formData.numberOfPeople}
                                onChange={(e) =>
                                  handleInputChange(
                                    "numberOfPeople",
                                    e.target.value
                                  )
                                }
                                className="h-12 bg-white border-2 border-slate-200 focus:border-blue-500 transition-colors mt-2"
                              />
                              {errors.numberOfPeople && (
                                <p className="text-red-500 text-sm mt-1">
                                  {errors.numberOfPeople}
                                </p>
                              )}
                            </div>
                          </div>

                          <div>
                            <Label className="text-base font-semibold">
                              Organization
                            </Label>
                            <Input
                              placeholder="Enter your organization name"
                              value={formData.organization}
                              onChange={(e) =>
                                handleInputChange(
                                  "organization",
                                  e.target.value
                                )
                              }
                              className="h-12 bg-white border-2 border-slate-200 focus:border-blue-500 transition-colors mt-2"
                            />
                            {errors.organization && (
                              <p className="text-red-500 text-sm mt-1">
                                {errors.organization}
                              </p>
                            )}
                          </div>

                          <Button
                            type="submit"
                            className="w-full h-14 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 font-semibold"
                            disabled={isProcessing}
                          >
                            {isProcessing ? (
                              <>
                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                                Processing...
                              </>
                            ) : (
                              <>
                                {plan.price === "Free"
                                  ? "Get API Key"
                                  : "Continue to Payment"}
                                <ArrowRight className="h-5 w-5 ml-2" />
                              </>
                            )}
                          </Button>
                        </div>
                      </form>

                      {showPayment && (
                        <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border-2 border-blue-200">
                          <h3 className="font-bold text-xl mb-4 flex items-center">
                            <CreditCard className="h-6 w-6 mr-3 text-blue-600" />
                            Complete Your Payment
                          </h3>
                          <p className="text-gray-600 mb-6 text-base">
                            Secure payment processing to activate your{" "}
                            {plan.name} plan and receive instant API access.
                          </p>
                          <Button
                            onClick={handlePayment}
                            className="w-full h-14 text-lg bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 font-semibold"
                            disabled={isProcessing}
                          >
                            {isProcessing ? (
                              <>
                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                                Processing Payment...
                              </>
                            ) : (
                              <>
                                <Shield className="h-5 w-5 mr-2" />
                                Pay {plan.price}
                                {plan.period || ""} Securely
                              </>
                            )}
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  {/* Plan Features */}
                  <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <Star className="h-5 w-5 mr-2 text-blue-600" />
                        What You Get
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center text-sm">
                          <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                          Instant API key generation
                        </div>
                        <div className="flex items-center text-sm">
                          <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                          24/7 technical support
                        </div>
                        <div className="flex items-center text-sm">
                          <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                          Comprehensive documentation
                        </div>
                        <div className="flex items-center text-sm">
                          <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                          Rate limiting protection
                        </div>
                        <div className="flex items-center text-sm">
                          <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                          Usage analytics dashboard
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Trust Indicators */}
                  <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200/50 shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg text-green-800">
                        <Shield className="h-5 w-5 mr-2" />
                        Trusted & Secure
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 text-sm text-green-700">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                          SSL encrypted connections
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                          GDPR compliant data handling
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                          99.9% uptime guarantee
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Support */}
                  <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200/50 shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg text-blue-800">
                        <Users className="h-5 w-5 mr-2" />
                        Need Help?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-blue-700 mb-4">
                        Our support team is here to help you get started quickly
                        and efficiently.
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full border-blue-200 text-blue-700 hover:bg-blue-50"
                      >
                        Contact Support
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Checkout;

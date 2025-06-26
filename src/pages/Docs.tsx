"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  Key,
  Zap,
  Lock,
  Users,
  Globe,
  Sparkles,
  CheckCircle,
  Copy,
  Code,
  BookOpen,
  Shield,
} from "lucide-react";
import { toast } from "sonner";

import { createApiKey } from "@/services/apiService";
import { copyToClipboard } from "@/utils/clipboard";

const Docs = () => {
  const [email, setEmail] = useState("");
  const [adminUsername, setAdminUsername] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [apiResponse, setApiResponse] = useState<any>(null);

  const handleCreateApiKey = async () => {
    if (!email || !adminUsername || !adminPassword) {
      toast.error("All fields are required");
      return;
    }

    setIsLoading(true);

    try {
      const response = await createApiKey({
        email,
        adminUsername,
        adminPassword,
      });
      setApiResponse(response);
      toast.success("API key created successfully!");
    } catch (error: any) {
      toast.error(error.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-mesh opacity-30"></div>
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm border border-primary/20 text-primary mb-8 animate-fade-in">
              <BookOpen className="w-5 h-5 mr-3" />
              <span className="text-sm font-medium">
                Developer Documentation
              </span>
              <Sparkles className="w-4 h-4 ml-2 animate-pulse" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-center">
              <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                API
              </span>
              <span className="inline-block w-3" /> {/* Spacer */}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Documentation
              </span>
            </h1>

            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in-up delay-300">
              Integrate SKANJO's powerful API into your applications with our
              comprehensive developer tools and resources
            </p>
          </div>
        </section>

        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <Card className="glass-ultra animate-fade-in delay-400 overflow-hidden border-2 border-primary/10 shadow-2xl">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary"></div>
                <CardHeader className="pb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm">
                      <Key className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                        API Key Generation
                      </CardTitle>
                      <CardDescription className="text-base mt-2">
                        Create secure API keys for your applications with
                        enterprise-grade authentication
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Badge
                      variant="secondary"
                      className="bg-green-500/10 text-green-600 border-green-500/20"
                    >
                      <Lock className="w-3 h-3 mr-1" />
                      Secure
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-blue-500/10 text-blue-600 border-blue-500/20"
                    >
                      <Zap className="w-3 h-3 mr-1" />
                      Instant
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-purple-500/10 text-purple-600 border-purple-500/20"
                    >
                      <Globe className="w-3 h-3 mr-1" />
                      Global
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label className="text-sm font-semibold text-foreground/90 flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        Admin Username
                      </label>
                      <Input
                        type="text"
                        placeholder="Enter admin username"
                        value={adminUsername}
                        onChange={(e) => setAdminUsername(e.target.value)}
                        className="bg-background/50 border-primary/20 focus:border-primary/40 h-12 text-base backdrop-blur-sm"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm font-semibold text-foreground/90 flex items-center gap-2">
                        <Lock className="w-4 h-4" />
                        Admin Password
                      </label>
                      <Input
                        type="password"
                        placeholder="Enter admin password"
                        value={adminPassword}
                        onChange={(e) => setAdminPassword(e.target.value)}
                        className="bg-background/50 border-primary/20 focus:border-primary/40 h-12 text-base backdrop-blur-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-foreground/90 flex items-center gap-2">
                      <Globe className="w-4 h-4" />
                      Client Email Address
                    </label>
                    <Input
                      type="email"
                      placeholder="client@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-background/50 border-primary/20 focus:border-primary/40 h-12 text-base backdrop-blur-sm"
                    />
                  </div>

                  <div className="pt-4">
                    <Button
                      onClick={handleCreateApiKey}
                      disabled={isLoading}
                      className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-primary via-primary/90 to-accent hover:from-primary/90 hover:via-primary/80 hover:to-accent/90 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                    >
                      {isLoading ? (
                        <div className="flex items-center gap-3">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Generating API Key...</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-3">
                          <Zap className="w-5 h-5" />
                          <span>Generate API Key</span>
                          <Sparkles className="w-4 h-4 animate-pulse" />
                        </div>
                      )}
                    </Button>
                  </div>

                  {apiResponse && (
                    <div className="mt-8 p-6 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-2 border-green-500/20 backdrop-blur-sm">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-green-500/20">
                          <CheckCircle className="w-6 h-6 text-green-500" />
                        </div>
                        <div>
                          <h3 className="font-bold text-green-500 text-lg">
                            API Key Created Successfully!
                          </h3>
                          <p className="text-sm text-green-600/80">
                            Your API key has been generated and is ready to use
                          </p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-muted-foreground">
                            API Response:
                          </span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              copyToClipboard(
                                JSON.stringify(apiResponse, null, 2)
                              )
                            }
                            className="hover:bg-green-500/10"
                          >
                            <Copy className="w-4 h-4 mr-2" />
                            Copy Response
                          </Button>
                        </div>
                        <div className="relative">
                          <pre className="text-sm bg-background/60 p-4 rounded-lg border border-green-500/20 overflow-x-auto backdrop-blur-sm">
                            {JSON.stringify(apiResponse, null, 2)}
                          </pre>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card className="glass-heavy animate-fade-in delay-500 mt-10 border border-primary/10">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Code className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">
                          Integration Example
                        </CardTitle>
                        <CardDescription>
                          Sample cURL command for API key generation
                        </CardDescription>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      cURL
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="relative group">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() =>
                        copyToClipboard(`curl --location 'http://localhost:8000/add-client' \\
--header 'Authorization: Basic $(echo -n 'admin_username:admin_password' | base64)' \\
--header 'Content-Type: application/json' \\
--data-raw '{
    "client_email": "client@example.com"
}'`)
                      }
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                    <pre className="text-sm bg-muted/50 p-5 rounded-xl overflow-x-auto border border-primary/10 backdrop-blur-sm">
                      {`curl --location 'http://localhost:8000/add-client' \\
--header 'Authorization: Basic $(echo -n 'admin_username:admin_password' | base64)' \\
--header 'Content-Type: application/json' \\
--data-raw '{
    "client_email": "client@example.com"
}'`}
                    </pre>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <Card className="glass animate-fade-in delay-300 border border-primary/10">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Zap className="w-5 h-5 text-primary" />
                    Quick Start Guide
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-sm font-bold">
                      1
                    </div>
                    <div>
                      <p className="font-semibold">Setup Authentication</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Configure your admin credentials securely
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-sm font-bold">
                      2
                    </div>
                    <div>
                      <p className="font-semibold">Generate API Key</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Create unique keys for each client
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-sm font-bold">
                      3
                    </div>
                    <div>
                      <p className="font-semibold">Start Integration</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Begin building with SKANJO's API
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass animate-fade-in delay-400 border border-primary/10">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary" />
                    Security Best Practices
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span className="text-sm">
                        Always use your own API key in production environments
                      </span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span className="text-sm">
                        Store API keys in secure environment variables
                      </span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span className="text-sm">
                        Rotate API keys regularly for enhanced security
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* <Card className="glass animate-fade-in delay-500 border border-primary/10">
                <CardHeader>
                  <CardTitle className="text-xl">Available Endpoints</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 rounded-lg bg-primary/5 border border-primary/10">
                      <code className="text-sm font-mono">POST /add-client</code>
                      <Badge variant="secondary" className="text-xs bg-green-500/10 text-green-600 border-green-500/20">
                        Auth Required
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg bg-primary/5 border border-primary/10">
                      <code className="text-sm font-mono">GET /clients</code>
                      <Badge variant="secondary" className="text-xs bg-green-500/10 text-green-600 border-green-500/20">
                        Auth Required
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg bg-primary/5 border border-primary/10">
                      <code className="text-sm font-mono">DELETE /client</code>
                      <Badge variant="secondary" className="text-xs bg-red-500/10 text-red-600 border-red-500/20">
                        Admin Only
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card> */}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Docs;

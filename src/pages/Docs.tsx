
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Key, Code, BookOpen, Zap, Shield, Copy, CheckCircle } from "lucide-react";
import { toast } from "sonner";

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
      const authString = btoa(`${adminUsername}:${adminPassword}`);
      
      const response = await fetch('http://localhost:8000/add-client', {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${authString}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          client_email: email
        }),
      });

      const data = await response.json();
      
      if (response.ok) {
        setApiResponse(data);
        toast.success("API key created successfully!");
      } else {
        toast.error(data.message || "Failed to create API key");
      }
    } catch (error) {
      console.error("Error creating API key:", error);
      toast.error("Failed to connect to the server");
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 animate-fade-in">
              <BookOpen className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Documentation</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up delay-200">
              <span className="gradient-text-holographic">
                Developer
              </span>{" "}
              <span className="text-foreground">
                Documentation
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in-up delay-300">
              Everything you need to integrate and use SKANJO's powerful API
            </p>
          </div>
        </section>

        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* API Key Creation */}
            <div className="lg:col-span-2">
              <Card className="glass-ultra animate-fade-in delay-400">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Key className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle>API Key Creation</CardTitle>
                      <CardDescription>
                        Create your API key to start using SKANJO's services
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Admin Username</label>
                      <Input
                        type="text"
                        placeholder="Enter admin username"
                        value={adminUsername}
                        onChange={(e) => setAdminUsername(e.target.value)}
                        className="bg-background/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Admin Password</label>
                      <Input
                        type="password"
                        placeholder="Enter admin password"
                        value={adminPassword}
                        onChange={(e) => setAdminPassword(e.target.value)}
                        className="bg-background/50"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Client Email</label>
                    <Input
                      type="email"
                      placeholder="client@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-background/50"
                    />
                  </div>

                  <Button 
                    onClick={handleCreateApiKey} 
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Creating API Key...
                      </div>
                    ) : (
                      <>
                        <Zap className="w-4 h-4 mr-2" />
                        Create API Key
                      </>
                    )}
                  </Button>

                  {apiResponse && (
                    <div className="mt-6 p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                      <div className="flex items-center gap-2 mb-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="font-medium text-green-500">API Key Created Successfully</span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Response:</span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => copyToClipboard(JSON.stringify(apiResponse, null, 2))}
                          >
                            <Copy className="w-4 h-4" />
                          </Button>
                        </div>
                        <pre className="text-sm bg-background/50 p-3 rounded border overflow-x-auto">
                          {JSON.stringify(apiResponse, null, 2)}
                        </pre>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Code Example */}
              <Card className="glass-heavy animate-fade-in delay-500 mt-8">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Code className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle>API Example</CardTitle>
                      <CardDescription>
                        Sample curl command for creating API keys
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute top-2 right-2 z-10"
                      onClick={() => copyToClipboard(`curl --location 'http://localhost:8000/add-client' \\
--header 'Authorization: Basic $(echo -n 'admin_username:admin_password' | base64)' \\
--header 'Content-Type: application/json' \\
--data-raw '{
    "client_email": "client@example.com"
}'`)}
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                    <pre className="text-sm bg-muted/50 p-4 rounded-lg overflow-x-auto">
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

            {/* Sidebar Information */}
            <div className="space-y-6">
              <Card className="glass animate-fade-in delay-300">
                <CardHeader>
                  <CardTitle className="text-lg">Quick Start</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Badge variant="outline" className="mt-1">1</Badge>
                    <div>
                      <p className="font-medium">Authentication</p>
                      <p className="text-sm text-muted-foreground">Set up your admin credentials</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge variant="outline" className="mt-1">2</Badge>
                    <div>
                      <p className="font-medium">Create API Key</p>
                      <p className="text-sm text-muted-foreground">Generate keys for your clients</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge variant="outline" className="mt-1">3</Badge>
                    <div>
                      <p className="font-medium">Start Building</p>
                      <p className="text-sm text-muted-foreground">Integrate with your applications</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass animate-fade-in delay-400">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Security
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Use HTTPS in production</li>
                    <li>• Store credentials securely</li>
                    <li>• Rotate API keys regularly</li>
                    <li>• Monitor API usage</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="glass animate-fade-in delay-500">
                <CardHeader>
                  <CardTitle className="text-lg">Endpoints</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <code className="text-xs bg-muted px-2 py-1 rounded">POST /add-client</code>
                      <Badge variant="secondary" className="text-xs">Auth</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <code className="text-xs bg-muted px-2 py-1 rounded">GET /clients</code>
                      <Badge variant="secondary" className="text-xs">Auth</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <code className="text-xs bg-muted px-2 py-1 rounded">DELETE /client</code>
                      <Badge variant="secondary" className="text-xs">Auth</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Docs;
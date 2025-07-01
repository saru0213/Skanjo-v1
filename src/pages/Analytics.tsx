import React, { useState, useContext, useEffect } from 'react';
import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  PieChart, 
  Pie, 
  Cell, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';
import { 
  Activity, 
  Users, 
  FileText, 
  TrendingUp, 
  Calendar,
  Globe,
  Database,
  Zap,
  Target,
  BarChart3,
  PieChart as PieChartIcon,
  Download,
  Filter,
  Search,
  Eye,
  Clock,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Server,
  Shield,
  Cpu,
  HardDrive,
  Network,
  RefreshCw,
  DollarSign,
  TrendingDown
} from 'lucide-react';
import { AuthContext } from '@/auth/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';
import { getUserAnalytics, UserAnalyticsItem } from '@/services/apiService';

const Analytics = () => {
  const [timeRange, setTimeRange] = useState('7d');
  const [selectedMetric, setSelectedMetric] = useState('all');
  const { isAuthenticated, user } = useContext(AuthContext);
  const { toast } = useToast();
  const navigate = useNavigate();
  const [analytics, setAnalytics] = useState<UserAnalyticsItem[]>([]);
  const [loadingAnalytics, setLoadingAnalytics] = useState(true);

  useEffect(() => {
    if (!isAuthenticated) {
      toast({
        title: 'Sign In Required',
        description: 'Please sign in to access analytics.',
        variant: 'destructive',
      });
      navigate('/login');
    }
  }, [isAuthenticated, toast, navigate]);

  useEffect(() => {
    if (!isAuthenticated || !user?.api_key) return;
    setLoadingAnalytics(true);
    getUserAnalytics(user.api_key)
      .then(setAnalytics)
      .catch((err) => {
        toast({ title: 'Analytics Error', description: err.message, variant: 'destructive' });
      })
      .finally(() => setLoadingAnalytics(false));
  }, [isAuthenticated, user, toast]);

  if (!isAuthenticated) {
    return null;
  }

  // Enhanced mock data with more detailed metrics
  const overviewStats = [
    { title: 'Total API Requests', value: '2,847,293', change: '+12.5%', icon: Activity, trend: 'up', detail: 'Last 24h: 45,672' },
    { title: 'Active Users', value: '12,847', change: '+8.3%', icon: Users, trend: 'up', detail: 'Unique: 8,234' },
    { title: 'Resume Analyses', value: '89,234', change: '+15.2%', icon: FileText, trend: 'up', detail: 'Success rate: 97.8%' },
    { title: 'Revenue Generated', value: '$47,589', change: '+23.1%', icon: DollarSign, trend: 'up', detail: 'MRR: $15,230' },
    { title: 'Server Uptime', value: '99.97%', change: '+0.1%', icon: Server, trend: 'up', detail: 'Last downtime: 3h ago' },
    { title: 'Data Processed', value: '2.4TB', change: '+18.7%', icon: HardDrive, trend: 'up', detail: 'Avg: 85GB/day' },
    { title: 'Error Rate', value: '0.23%', change: '-45%', icon: Shield, trend: 'down', detail: 'Critical: 2' },
    { title: 'Avg Response Time', value: '187ms', change: '-12%', icon: Zap, trend: 'down', detail: 'P95: 340ms' }
  ];

  const detailedUsageData = [
    { date: '2024-01-01', requests: 45672, users: 1205, analyses: 892, revenue: 2340, errors: 12, responseTime: 195 },
    { date: '2024-01-02', requests: 52890, users: 1456, analyses: 1103, revenue: 2890, errors: 8, responseTime: 187 },
    { date: '2024-01-03', requests: 48120, users: 1789, analyses: 1234, revenue: 3120, errors: 15, responseTime: 203 },
    { date: '2024-01-04', requests: 61560, users: 2034, analyses: 1567, revenue: 3560, errors: 6, responseTime: 176 },
    { date: '2024-01-05', requests: 58390, users: 1890, analyses: 1423, revenue: 3890, errors: 11, responseTime: 189 },
    { date: '2024-01-06', requests: 67120, users: 2340, analyses: 1789, revenue: 4120, errors: 4, responseTime: 165 },
    { date: '2024-01-07', requests: 73560, users: 2678, analyses: 2012, revenue: 4560, errors: 9, responseTime: 171 }
  ];

  // const endpointAnalytics = [
  //   { 
  //     endpoint: '/api/v1/analyze/resume', 
  //     requests: 456789, 
  //     avgResponse: '234ms', 
  //     errorRate: '0.12%',
  //     status: 'healthy',
  //     bandwidth: '1.2TB',
  //     rateLimit: '1000/min',
  //     lastUsed: '2 min ago'
  //   },
  //   { 
  //     endpoint: '/api/v1/candidates/search', 
  //     requests: 234567, 
  //     avgResponse: '156ms', 
  //     errorRate: '0.08%',
  //     status: 'healthy',
  //     bandwidth: '890GB',
  //     rateLimit: '500/min',
  //     lastUsed: '5 min ago'
  //   },
  //   { 
  //     endpoint: '/api/v1/jobs/match', 
  //     requests: 189023, 
  //     avgResponse: '312ms', 
  //     errorRate: '0.45%',
  //     status: 'warning',
  //     bandwidth: '2.1TB',
  //     rateLimit: '250/min',
  //     lastUsed: '1 min ago'
  //   },
  //   { 
  //     endpoint: '/api/v1/skills/extract', 
  //     requests: 156432, 
  //     avgResponse: '189ms', 
  //     errorRate: '0.15%',
  //     status: 'healthy',
  //     bandwidth: '567GB',
  //     rateLimit: '750/min',
  //     lastUsed: '8 min ago'
  //   },
  //   { 
  //     endpoint: '/api/v1/projects/suggest', 
  //     requests: 123890, 
  //     avgResponse: '445ms', 
  //     errorRate: '1.23%',
  //     status: 'error',
  //     bandwidth: '1.8TB',
  //     rateLimit: '200/min',
  //     lastUsed: '12 min ago'
  //   }
  // ];

  const userMetrics = [
    { metric: 'New Signups Today', value: '234', change: '+15%', icon: Users },
    { metric: 'Premium Conversions', value: '45', change: '+23%', icon: TrendingUp },
    { metric: 'Churn Rate', value: '2.1%', change: '-8%', icon: TrendingDown },
    { metric: 'Session Duration', value: '12m 34s', change: '+12%', icon: Clock },
    { metric: 'Feature Adoption', value: '67%', change: '+5%', icon: Target },
    { metric: 'Support Tickets', value: '23', change: '-12%', icon: AlertTriangle }
  ];

  const systemHealth = [
    { component: 'API Gateway', status: 'healthy', uptime: '99.98%', load: '45%', lastCheck: '30s ago' },
    { component: 'Database Primary', status: 'healthy', uptime: '99.95%', load: '62%', lastCheck: '15s ago' },
    { component: 'Redis Cache', status: 'healthy', uptime: '99.99%', load: '23%', lastCheck: '45s ago' },
    { component: 'File Storage', status: 'warning', uptime: '99.89%', load: '78%', lastCheck: '1m ago' },
    { component: 'ML Pipeline', status: 'healthy', uptime: '99.92%', load: '56%', lastCheck: '2m ago' },
    { component: 'Email Service', status: 'error', uptime: '98.45%', load: '89%', lastCheck: '5m ago' }
  ];

  const geographicData = [
    { country: 'United States', users: 34567, requests: 1234567, revenue: 15670, percentage: 35.2 },
    { country: 'India', users: 28901, requests: 987654, revenue: 8900, percentage: 29.4 },
    { country: 'United Kingdom', users: 12345, requests: 456789, revenue: 5600, percentage: 12.6 },
    { country: 'Canada', users: 9876, requests: 345678, revenue: 4300, percentage: 10.1 },
    { country: 'Australia', users: 6543, requests: 234567, revenue: 2800, percentage: 6.7 },
    { country: 'Others', users: 5890, requests: 123456, revenue: 1900, percentage: 6.0 }
  ];

  const pieColors = ['#8b5cf6', '#a78bfa', '#c4b5fd', '#ddd6fe', '#ede9fe', '#f3f4f6'];

  const topSkillsData = [
    { skill: 'JavaScript', analyzed: 56789, projects: 4567, avgSalary: '$85k', demand: 'High' },
    { skill: 'Python', analyzed: 45678, projects: 3890, avgSalary: '$92k', demand: 'Very High' },
    { skill: 'React', analyzed: 34567, projects: 2890, avgSalary: '$78k', demand: 'High' },
    { skill: 'Node.js', analyzed: 28901, projects: 2345, avgSalary: '$82k', demand: 'High' },
    { skill: 'AWS', analyzed: 24567, projects: 1890, avgSalary: '$105k', demand: 'Very High' },
    { skill: 'Docker', analyzed: 19876, projects: 1567, avgSalary: '$88k', demand: 'Medium' },
    { skill: 'Kubernetes', analyzed: 15432, projects: 1234, avgSalary: '$98k', demand: 'High' },
    { skill: 'TypeScript', analyzed: 12345, projects: 987, avgSalary: '$86k', demand: 'High' }
  ];

  const recentActivity = [
    { action: 'Resume analyzed', user: 'john.doe@company.com', time: '2 minutes ago', status: 'success', details: 'PDF, 2.3MB, 15 skills extracted' },
    { action: 'Bulk job matching', user: 'hr.team@bigcorp.com', time: '5 minutes ago', status: 'processing', details: '250 candidates, 45% complete' },
    { action: 'API rate limit hit', user: 'api_user_123', time: '8 minutes ago', status: 'warning', details: '1000 req/min exceeded' },
    { action: 'Premium upgrade', user: 'sarah.smith@startup.io', time: '12 minutes ago', status: 'success', details: 'Professional plan activated' },
    { action: 'Skills extraction failed', user: 'test@example.com', time: '18 minutes ago', status: 'error', details: 'Invalid file format' },
    { action: 'Project suggestion generated', user: 'dev@techcorp.com', time: '23 minutes ago', status: 'success', details: '12 projects suggested' },
    { action: 'Database backup completed', user: 'system', time: '45 minutes ago', status: 'success', details: '2.4GB backup created' },
    { action: 'ML model retrained', user: 'system', time: '1 hour ago', status: 'success', details: 'Accuracy improved to 94.2%' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy': case 'success': return 'text-green-600 bg-green-50 border-green-200';
      case 'warning': case 'processing': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'error': return 'text-red-600 bg-red-50 border-red-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'healthy': case 'success': return <CheckCircle className="h-4 w-4" />;
      case 'warning': return <AlertTriangle className="h-4 w-4" />;
      case 'error': return <XCircle className="h-4 w-4" />;
      case 'processing': return <RefreshCw className="h-4 w-4 animate-spin" />;
      default: return <Eye className="h-4 w-4" />;
    }
  };

  const getTrendIcon = (trend: string) => {
    return trend === 'up' ? <TrendingUp className="h-4 w-4 text-green-600" /> : <TrendingDown className="h-4 w-4 text-red-600" />;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-16">
        <div className="max-w-7xl mx-auto p-6 space-y-8">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Advanced Analytics Dashboard
              </h1>
              <p className="text-muted-foreground text-lg">
                Comprehensive platform insights, performance metrics, and detailed usage analytics
              </p>
            </div>
            
            <div className="flex items-center gap-4 mt-4 lg:mt-0">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <select 
                  value={timeRange} 
                  onChange={(e) => setTimeRange(e.target.value)}
                  className="border border-input rounded-lg px-3 py-2 bg-background text-foreground"
                >
                  <option value="1h">Last Hour</option>
                  <option value="24h">Last 24 Hours</option>
                  <option value="7d">Last 7 Days</option>
                  <option value="30d">Last 30 Days</option>
                  <option value="90d">Last 90 Days</option>
                </select>
              </div>
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Export Report
              </Button>
              <Button variant="outline">
                <RefreshCw className="h-4 w-4 mr-2" />
                Refresh
              </Button>
            </div>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {overviewStats.map((stat, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                      <p className="text-3xl font-bold">{stat.value}</p>
                      <div className="flex items-center gap-2">
                        {getTrendIcon(stat.trend)}
                        <span className={`text-sm font-medium ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                          {stat.change}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground">{stat.detail}</p>
                    </div>
                    <div className="p-3 rounded-full bg-accent">
                      <stat.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Analytics Tabs */}
          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="overview" className="flex items-center gap-2">
                <BarChart3 className="h-4 w-4" />
                Overview
              </TabsTrigger>
              <TabsTrigger value="endpoints" className="flex items-center gap-2">
                <Database className="h-4 w-4" />
                API Analytics
              </TabsTrigger>
              <TabsTrigger value="users" className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                User Insights
              </TabsTrigger>
              <TabsTrigger value="system" className="flex items-center gap-2">
                <Server className="h-4 w-4" />
                System Health
              </TabsTrigger>
              <TabsTrigger value="skills" className="flex items-center gap-2">
                <Target className="h-4 w-4" />
                Skills Analytics
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Request Trends */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Activity className="h-5 w-5 text-primary" />
                      Request Volume & Performance
                    </CardTitle>
                    <CardDescription>API requests, response times, and error rates</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer config={{
                      requests: { label: "Requests", color: "hsl(var(--primary))" },
                      responseTime: { label: "Response Time", color: "hsl(var(--muted-foreground))" },
                      errors: { label: "Errors", color: "hsl(var(--destructive))" }
                    }} className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={detailedUsageData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                          <YAxis tick={{ fontSize: 12 }} />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Area 
                            type="monotone" 
                            dataKey="requests" 
                            stackId="1"
                            stroke="hsl(var(--primary))" 
                            fill="hsl(var(--primary))" 
                            fillOpacity={0.3}
                          />
                          <Area 
                            type="monotone" 
                            dataKey="errors" 
                            stackId="2"
                            stroke="hsl(var(--destructive))" 
                            fill="hsl(var(--destructive))" 
                            fillOpacity={0.3}
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </CardContent>
                </Card>

                {/* Revenue Analytics */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <DollarSign className="h-5 w-5 text-green-600" />
                      Revenue & Growth
                    </CardTitle>
                    <CardDescription>Revenue trends and conversion metrics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer config={{
                      revenue: { label: "Revenue", color: "hsl(var(--primary))" },
                      users: { label: "Users", color: "hsl(var(--muted-foreground))" }
                    }} className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={detailedUsageData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                          <YAxis tick={{ fontSize: 12 }} />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Line 
                            type="monotone" 
                            dataKey="revenue" 
                            stroke="hsl(var(--primary))" 
                            strokeWidth={3}
                            dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }}
                          />
                          <Line 
                            type="monotone" 
                            dataKey="users" 
                            stroke="hsl(var(--muted-foreground))" 
                            strokeWidth={2}
                            dot={{ fill: 'hsl(var(--muted-foreground))', strokeWidth: 2, r: 3 }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </CardContent>
                </Card>
              </div>

              {/* Geographic Distribution */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-primary" />
                    Global Usage Distribution
                  </CardTitle>
                  <CardDescription>User distribution, requests, and revenue by region</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <ChartContainer config={{}} className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={geographicData}
                            cx="50%"
                            cy="50%"
                            outerRadius={100}
                            dataKey="users"
                            label={({ country, percentage }) => `${country}: ${percentage}%`}
                          >
                            {geographicData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                            ))}
                          </Pie>
                          <ChartTooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                    
                    <div className="space-y-4">
                      {geographicData.map((country, index) => (
                        <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-accent border">
                          <div>
                            <p className="font-semibold">{country.country}</p>
                            <p className="text-sm text-muted-foreground">{country.users.toLocaleString()} users</p>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-green-600">${country.revenue.toLocaleString()}</p>
                            <p className="text-sm text-muted-foreground">{country.requests.toLocaleString()} requests</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="endpoints" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="h-5 w-5 text-primary" />
                    Detailed API Endpoint Analytics
                  </CardTitle>
                  <CardDescription>
                    Comprehensive metrics for each API endpoint including usage, performance, and health status
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {loadingAnalytics ? (
                    <div className="flex items-center justify-center h-80">
                      <p>Loading analytics...</p>
                    </div>
                  ) : (
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Endpoint</TableHead>
                            <TableHead>Status Code</TableHead>
                            <TableHead>Timestamp</TableHead>
                            <TableHead>Request Data</TableHead>
                            <TableHead>Response Data</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {analytics.map((endpoint, index) => (
                            <TableRow key={index}>
                              <TableCell className="font-mono text-sm">{endpoint.endpoint}</TableCell>
                              <TableCell className="font-semibold">{endpoint.status_code}</TableCell>
                              <TableCell className="text-muted-foreground text-sm">{new Date(endpoint.timestamp).toLocaleString()}</TableCell>
                              <TableCell className="max-w-xs truncate" title={endpoint.request_data}>{endpoint.request_data.slice(0, 40)}{endpoint.request_data.length > 40 ? '...' : ''}</TableCell>
                              <TableCell className="max-w-xs truncate" title={endpoint.response_data}>{endpoint.response_data.slice(0, 40)}{endpoint.response_data.length > 40 ? '...' : ''}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="users" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      User Engagement Metrics
                    </CardTitle>
                    <CardDescription>Key user behavior and engagement indicators</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {userMetrics.map((metric, index) => (
                        <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-accent border">
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-full bg-background">
                              <metric.icon className="h-4 w-4 text-primary" />
                            </div>
                            <div>
                              <p className="font-medium">{metric.metric}</p>
                              <p className="text-2xl font-bold">{metric.value}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center gap-1">
                              {metric.change.startsWith('+') ? 
                                <TrendingUp className="h-4 w-4 text-green-600" /> : 
                                <TrendingDown className="h-4 w-4 text-red-600" />
                              }
                              <span className={`text-sm font-medium ${metric.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                                {metric.change}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Activity className="h-5 w-5 text-primary" />
                      Real-time Activity Feed
                    </CardTitle>
                    <CardDescription>Latest user actions and system events with detailed context</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 max-h-96 overflow-y-auto">
                      {recentActivity.map((activity, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-accent border">
                          <div className={`p-2 rounded-full ${getStatusColor(activity.status)} border flex-shrink-0`}>
                            {getStatusIcon(activity.status)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium">{activity.action}</p>
                            <p className="text-sm text-muted-foreground truncate">{activity.user}</p>
                            <p className="text-xs text-muted-foreground mt-1">{activity.details}</p>
                          </div>
                          <p className="text-xs text-muted-foreground flex-shrink-0">{activity.time}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="system" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Server className="h-5 w-5 text-primary" />
                    System Health & Infrastructure Status
                  </CardTitle>
                  <CardDescription>
                    Real-time monitoring of all system components and infrastructure health
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {systemHealth.map((component, index) => (
                      <div key={index} className="p-4 rounded-lg bg-accent border">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="font-semibold">{component.component}</h3>
                          <Badge className={`${getStatusColor(component.status)} border`}>
                            {getStatusIcon(component.status)}
                            <span className="ml-1 capitalize">{component.status}</span>
                          </Badge>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Uptime:</span>
                            <span className="text-sm font-medium">{component.uptime}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Load:</span>
                            <span className="text-sm font-medium">{component.load}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Last Check:</span>
                            <span className="text-sm text-muted-foreground">{component.lastCheck}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="skills" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    Skills Analytics & Market Intelligence
                  </CardTitle>
                  <CardDescription>
                    Comprehensive analysis of skills demand, salary trends, and market insights
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Skill</TableHead>
                          <TableHead>Times Analyzed</TableHead>
                          <TableHead>Active Projects</TableHead>
                          <TableHead>Avg Salary</TableHead>
                          <TableHead>Market Demand</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {topSkillsData.map((skill, index) => (
                          <TableRow key={index}>
                            <TableCell className="font-semibold">{skill.skill}</TableCell>
                            <TableCell>{skill.analyzed.toLocaleString()}</TableCell>
                            <TableCell>{skill.projects.toLocaleString()}</TableCell>
                            <TableCell className="font-semibold text-green-600">{skill.avgSalary}</TableCell>
                            <TableCell>
                              <Badge className={`${
                                skill.demand === 'Very High' ? 'text-green-600 bg-green-50 border-green-200' :
                                skill.demand === 'High' ? 'text-yellow-600 bg-yellow-50 border-yellow-200' :
                                'text-gray-600 bg-gray-50 border-gray-200'
                              } border`}>
                                {skill.demand}
                              </Badge>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
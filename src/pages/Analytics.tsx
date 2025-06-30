
import React, { useState } from 'react';
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
  AlertTriangle
} from 'lucide-react';

const Analytics = () => {
  const [timeRange, setTimeRange] = useState('7d');
  const [selectedMetric, setSelectedMetric] = useState('all');

  // Mock data - replace with real API calls
  const overviewStats = [
    { title: 'Total Candidates', value: '12,847', change: '+12.5%', icon: Users, trend: 'up' },
    { title: 'API Calls', value: '847,293', change: '+8.3%', icon: Activity, trend: 'up' },
    { title: 'Resume Analyses', value: '9,234', change: '+15.2%', icon: FileText, trend: 'up' },
    { title: 'Active Projects', value: '1,547', change: '+3.8%', icon: Target, trend: 'up' }
  ];

  const usageData = [
    { date: '2024-01-01', candidates: 120, apiCalls: 2340, analyses: 89 },
    { date: '2024-01-02', candidates: 145, apiCalls: 2890, analyses: 103 },
    { date: '2024-01-03', candidates: 178, apiCalls: 3120, analyses: 134 },
    { date: '2024-01-04', candidates: 203, apiCalls: 3560, analyses: 156 },
    { date: '2024-01-05', candidates: 189, apiCalls: 3890, analyses: 142 },
    { date: '2024-01-06', candidates: 234, apiCalls: 4120, analyses: 178 },
    { date: '2024-01-07', candidates: 267, apiCalls: 4560, analyses: 201 }
  ];

  const endpointData = [
    { endpoint: '/api/analyze/resume', calls: 45678, avgResponse: '234ms', status: 'healthy' },
    { endpoint: '/api/candidates/search', calls: 23456, avgResponse: '156ms', status: 'healthy' },
    { endpoint: '/api/jobs/match', calls: 18902, avgResponse: '312ms', status: 'warning' },
    { endpoint: '/api/skills/extract', calls: 15643, avgResponse: '189ms', status: 'healthy' },
    { endpoint: '/api/projects/suggest', calls: 12389, avgResponse: '445ms', status: 'error' }
  ];

  const geographicData = [
    { country: 'United States', users: 3456, percentage: 35.2 },
    { country: 'India', users: 2890, percentage: 29.4 },
    { country: 'United Kingdom', users: 1234, percentage: 12.6 },
    { country: 'Canada', users: 987, percentage: 10.1 },
    { country: 'Australia', users: 654, percentage: 6.7 },
    { country: 'Others', users: 589, percentage: 6.0 }
  ];

  const pieColors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#6b7280'];

  const skillsAnalyzed = [
    { skill: 'JavaScript', count: 5678, trend: '+12%' },
    { skill: 'Python', count: 4567, trend: '+8%' },
    { skill: 'React', count: 3456, trend: '+15%' },
    { skill: 'Node.js', count: 2890, trend: '+5%' },
    { skill: 'AWS', count: 2456, trend: '+18%' }
  ];

  const recentActivity = [
    { action: 'Resume analyzed', user: 'john.doe@company.com', time: '2 minutes ago', status: 'success' },
    { action: 'Job matching completed', user: 'sarah.smith@startup.io', time: '5 minutes ago', status: 'success' },
    { action: 'API rate limit exceeded', user: 'api_user_123', time: '12 minutes ago', status: 'warning' },
    { action: 'Bulk analysis started', user: 'hr.team@bigcorp.com', time: '18 minutes ago', status: 'processing' },
    { action: 'Skills extraction failed', user: 'test@example.com', time: '23 minutes ago', status: 'error' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy': case 'success': return 'text-green-600 bg-green-50';
      case 'warning': return 'text-yellow-600 bg-yellow-50';
      case 'error': return 'text-red-600 bg-red-50';
      case 'processing': return 'text-blue-600 bg-blue-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'healthy': case 'success': return <CheckCircle className="h-4 w-4" />;
      case 'warning': return <AlertTriangle className="h-4 w-4" />;
      case 'error': return <XCircle className="h-4 w-4" />;
      case 'processing': return <Clock className="h-4 w-4" />;
      default: return <Eye className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Analytics Dashboard
            </h1>
            <p className="text-gray-600 text-lg">
              Comprehensive insights into your platform usage and performance
            </p>
          </div>
          
          <div className="flex items-center gap-4 mt-4 lg:mt-0">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-gray-500" />
              <select 
                value={timeRange} 
                onChange={(e) => setTimeRange(e.target.value)}
                className="border rounded-lg px-3 py-2 bg-white"
              >
                <option value="24h">Last 24 Hours</option>
                <option value="7d">Last 7 Days</option>
                <option value="30d">Last 30 Days</option>
                <option value="90d">Last 90 Days</option>
              </select>
            </div>
            <Button className="glass-ultra hover-ultra-glow">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {overviewStats.map((stat, index) => (
            <Card key={index} className="glass-heavy hover-glow animate-fade-in border-0 shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="h-4 w-4 text-green-500" />
                      <span className="text-sm font-medium text-green-600">{stat.change}</span>
                    </div>
                  </div>
                  <div className="p-3 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Analytics Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="glass-heavy p-1 h-auto">
            <TabsTrigger value="overview" className="px-6 py-3 data-[state=active]:bg-white data-[state=active]:shadow-md">
              <BarChart3 className="h-4 w-4 mr-2" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="endpoints" className="px-6 py-3 data-[state=active]:bg-white data-[state=active]:shadow-md">
              <Database className="h-4 w-4 mr-2" />
              API Endpoints
            </TabsTrigger>
            <TabsTrigger value="users" className="px-6 py-3 data-[state=active]:bg-white data-[state=active]:shadow-md">
              <Users className="h-4 w-4 mr-2" />
              User Analytics
            </TabsTrigger>
            <TabsTrigger value="performance" className="px-6 py-3 data-[state=active]:bg-white data-[state=active]:shadow-md">
              <Zap className="h-4 w-4 mr-2" />
              Performance
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Usage Trends */}
              <Card className="glass-heavy border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="h-5 w-5 text-blue-600" />
                    Usage Trends
                  </CardTitle>
                  <CardDescription>Daily activity over the selected period</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={{
                    candidates: { label: "Candidates", color: "#3b82f6" },
                    apiCalls: { label: "API Calls", color: "#10b981" },
                    analyses: { label: "Analyses", color: "#f59e0b" }
                  }} className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={usageData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                        <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                        <YAxis tick={{ fontSize: 12 }} />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Area 
                          type="monotone" 
                          dataKey="candidates" 
                          stackId="1"
                          stroke="#3b82f6" 
                          fill="url(#candidatesGradient)" 
                        />
                        <Area 
                          type="monotone" 
                          dataKey="apiCalls" 
                          stackId="1"
                          stroke="#10b981" 
                          fill="url(#apiGradient)" 
                        />
                        <defs>
                          <linearGradient id="candidatesGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
                          </linearGradient>
                          <linearGradient id="apiGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#10b981" stopOpacity={0.1}/>
                          </linearGradient>
                        </defs>
                      </AreaChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>

              {/* Geographic Distribution */}
              <Card className="glass-heavy border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-green-600" />
                    Geographic Distribution
                  </CardTitle>
                  <CardDescription>User distribution by country</CardDescription>
                </CardHeader>
                <CardContent>
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
                </CardContent>
              </Card>
            </div>

            {/* Skills Analysis */}
            <Card className="glass-heavy border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-purple-600" />
                  Top Skills Analyzed
                </CardTitle>
                <CardDescription>Most frequently analyzed skills in resumes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  {skillsAnalyzed.map((skill, index) => (
                    <div key={index} className="p-4 rounded-lg bg-gradient-to-br from-white to-gray-50 border shadow-sm">
                      <div className="text-center space-y-2">
                        <p className="font-semibold text-gray-900">{skill.skill}</p>
                        <p className="text-2xl font-bold text-blue-600">{skill.count.toLocaleString()}</p>
                        <Badge variant="secondary" className="text-green-600">
                          {skill.trend}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="endpoints" className="space-y-6">
            <Card className="glass-heavy border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5 text-blue-600" />
                  API Endpoint Analytics
                </CardTitle>
                <CardDescription>Detailed usage statistics for each API endpoint</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Endpoint</TableHead>
                      <TableHead>Total Calls</TableHead>
                      <TableHead>Avg Response Time</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {endpointData.map((endpoint, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-mono text-sm">{endpoint.endpoint}</TableCell>
                        <TableCell className="font-semibold">{endpoint.calls.toLocaleString()}</TableCell>
                        <TableCell>{endpoint.avgResponse}</TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(endpoint.status)}>
                            {getStatusIcon(endpoint.status)}
                            <span className="ml-1 capitalize">{endpoint.status}</span>
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="glass-heavy border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-green-600" />
                    User Growth
                  </CardTitle>
                  <CardDescription>New user registrations over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={{
                    users: { label: "New Users", color: "#10b981" }
                  }} className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={usageData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                        <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                        <YAxis tick={{ fontSize: 12 }} />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Line 
                          type="monotone" 
                          dataKey="candidates" 
                          stroke="#10b981" 
                          strokeWidth={3}
                          dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>

              <Card className="glass-heavy border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="h-5 w-5 text-orange-600" />
                    Recent Activity
                  </CardTitle>
                  <CardDescription>Latest user actions and system events</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-white/50 border">
                        <div className={`p-2 rounded-full ${getStatusColor(activity.status)}`}>
                          {getStatusIcon(activity.status)}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-gray-900">{activity.action}</p>
                          <p className="text-sm text-gray-600">{activity.user}</p>
                        </div>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="performance" className="space-y-6">
            <Card className="glass-heavy border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-yellow-600" />
                  Performance Metrics
                </CardTitle>
                <CardDescription>System performance and response time analytics</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={{
                  responseTime: { label: "Response Time", color: "#f59e0b" }
                }} className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={usageData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                      <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                      <YAxis tick={{ fontSize: 12 }} />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar dataKey="apiCalls" fill="#f59e0b" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Analytics;

import { useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell } from 'recharts';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { CalendarIcon, BarChart3, PieChart as PieChartIcon, LineChart as LineChartIcon, Filter, Download } from 'lucide-react';
import { ChartContainer, ChartTooltipContent, ChartLegendContent } from '@/components/ui/chart';
import { DashboardHeader } from '@/components/dashboard/DashboardHeader';
import { DateRangePicker } from '@/components/dashboard/DateRangePicker';
import { KpiCard } from '@/components/dashboard/KpiCard';
import { useToast } from '@/components/ui/use-toast';

// Sample data for the charts
const salesData = [
  { name: 'Jan', value: 4000, growth: 2.5 },
  { name: 'Feb', value: 3000, growth: -1.2 },
  { name: 'Mar', value: 2000, growth: 0.8 },
  { name: 'Apr', value: 2780, growth: 3.1 },
  { name: 'May', value: 1890, growth: -0.5 },
  { name: 'Jun', value: 2390, growth: 2.2 },
  { name: 'Jul', value: 3490, growth: 4.5 },
];

const expensesData = [
  { name: 'Marketing', value: 2400 },
  { name: 'Operations', value: 1398 },
  { name: 'Salaries', value: 9800 },
  { name: 'Technology', value: 3908 },
  { name: 'Rent', value: 4800 },
  { name: 'Other', value: 1500 },
];

const customerData = [
  { name: 'Jan', new: 40, returning: 24 },
  { name: 'Feb', new: 30, returning: 38 },
  { name: 'Mar', new: 20, returning: 42 },
  { name: 'Apr', new: 27, returning: 39 },
  { name: 'May', new: 18, returning: 48 },
  { name: 'Jun', new: 23, returning: 38 },
  { name: 'Jul', new: 34, returning: 43 },
];

const categoryColors = {
  sales: { light: '#6D1A36', dark: '#8B2347' },
  expenses: { light: '#CB5C29', dark: '#DB6C39' },
  customers: { light: '#F4B942', dark: '#F4C952' },
  profits: { light: '#1A7B88', dark: '#2A8B98' }
};

const COLORS = ['#6D1A36', '#CB5C29', '#F4B942', '#1A7B88', '#333333', '#999999'];

const Dashboard = () => {
  const { toast } = useToast();
  
  useEffect(() => {
    // Initialize reveal animations
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      
      reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('visible');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFilterClick = () => {
    toast({
      title: "Filters Applied",
      description: "Your dashboard data has been filtered."
    });
  };

  const handleExportClick = () => {
    toast({
      title: "Exporting Data",
      description: "Your dashboard data is being exported."
    });
  };

  return (
    <div className="min-h-screen bg-background pt-16">
      <DashboardHeader />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 reveal">
          <h1 className="text-3xl font-bold text-burgundy mb-2">Business Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome to your personalized Hispanic business metrics and insights center.
          </p>
        </div>
        
        {/* Date Range and Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 reveal">
          <DateRangePicker />
          
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" onClick={handleFilterClick}>
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
            <Button variant="outline" size="sm" onClick={handleExportClick}>
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
        </div>
        
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 reveal">
          <KpiCard 
            title="Revenue" 
            value="$24,625" 
            change="+12.5%" 
            trend="up"
            color={categoryColors.sales.light}
            icon={<LineChartIcon className="h-4 w-4" />}
          />
          <KpiCard 
            title="Expenses" 
            value="$9,780" 
            change="-3.2%" 
            trend="down"
            color={categoryColors.expenses.light}
            icon={<PieChartIcon className="h-4 w-4" />}
          />
          <KpiCard 
            title="Customers" 
            value="124" 
            change="+18.7%" 
            trend="up"
            color={categoryColors.customers.light}
            icon={<BarChart3 className="h-4 w-4" />}
          />
          <KpiCard 
            title="Net Profit" 
            value="$14,845" 
            change="+22.5%" 
            trend="up"
            color={categoryColors.profits.light}
            icon={<LineChartIcon className="h-4 w-4" />}
          />
        </div>
        
        {/* Main Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Revenue Trends */}
          <Card className="reveal">
            <CardHeader>
              <CardTitle className="text-lg font-semibold flex items-center">
                <LineChartIcon className="mr-2 h-5 w-5 text-burgundy" />
                Revenue Trends
              </CardTitle>
              <CardDescription>Monthly revenue performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ChartContainer
                  config={{
                    value: {
                      label: "Revenue",
                      theme: {
                        light: categoryColors.sales.light,
                        dark: categoryColors.sales.dark,
                      },
                    },
                    growth: {
                      label: "Growth %",
                      theme: {
                        light: categoryColors.profits.light,
                        dark: categoryColors.profits.dark,
                      },
                    },
                  }}
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={salesData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                      <XAxis dataKey="name" />
                      <YAxis yAxisId="left" />
                      <YAxis yAxisId="right" orientation="right" />
                      <Tooltip content={<ChartTooltipContent />} />
                      <Legend content={<ChartLegendContent />} />
                      <Line 
                        yAxisId="left"
                        type="monotone" 
                        dataKey="value" 
                        name="value" 
                        stroke={categoryColors.sales.light} 
                        strokeWidth={3} 
                        dot={{ r: 4 }} 
                        activeDot={{ r: 6 }} 
                      />
                      <Line 
                        yAxisId="right"
                        type="monotone" 
                        dataKey="growth" 
                        name="growth" 
                        stroke={categoryColors.profits.light} 
                        strokeWidth={2} 
                        dot={{ r: 3 }}
                        activeDot={{ r: 5 }} 
                        strokeDasharray="5 5"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
            </CardContent>
          </Card>
          
          {/* Expense Breakdown */}
          <Card className="reveal">
            <CardHeader>
              <CardTitle className="text-lg font-semibold flex items-center">
                <PieChartIcon className="mr-2 h-5 w-5 text-terracotta" />
                Expense Breakdown
              </CardTitle>
              <CardDescription>Distribution of business expenses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={expensesData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={120}
                      innerRadius={60}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {expensesData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => `$${value}`} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Secondary Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Customer Analytics */}
          <Card className="reveal">
            <CardHeader>
              <CardTitle className="text-lg font-semibold flex items-center">
                <BarChart3 className="mr-2 h-5 w-5 text-golden" />
                Customer Analytics
              </CardTitle>
              <CardDescription>New vs returning customers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={customerData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="new" name="New Customers" fill={categoryColors.customers.light} radius={[4, 4, 0, 0]} />
                    <Bar dataKey="returning" name="Returning Customers" fill={categoryColors.teal.light} radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          {/* Sales Growth */}
          <Card className="reveal">
            <CardHeader>
              <CardTitle className="text-lg font-semibold flex items-center">
                <BarChart3 className="mr-2 h-5 w-5 text-teal" />
                Sales Growth
              </CardTitle>
              <CardDescription>Monthly cumulative sales performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={salesData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <defs>
                      <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={categoryColors.teal.light} stopOpacity={0.8}/>
                        <stop offset="95%" stopColor={categoryColors.teal.light} stopOpacity={0.2}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area 
                      type="monotone" 
                      dataKey="value" 
                      name="Sales Value"
                      stroke={categoryColors.teal.dark} 
                      fillOpacity={1} 
                      fill="url(#colorSales)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

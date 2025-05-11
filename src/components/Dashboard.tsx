
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Users, FileText, DollarSign } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  
  const handleViewDashboard = () => {
    navigate('/dashboard');
  };
  
  return (
    <section className="py-20 bg-burgundy/5" id="dashboard">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 reveal">
          <h2 className="text-burgundy mb-4">Business Insights</h2>
          <p className="text-lg text-charcoal/80 max-w-2xl mx-auto">
            Track your progress, monitor key metrics, and get personalized recommendations
            based on real-time data analysis.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto reveal">
          {/* Dashboard Preview */}
          <div className="bg-white rounded-xl shadow-xl overflow-hidden border mb-8">
            {/* Dashboard Header */}
            <div className="bg-gradient-to-r from-burgundy to-terracotta text-white p-6">
              <h3 className="text-2xl font-bold">Business Performance</h3>
              <p className="opacity-90">Last updated: May 11, 2025</p>
            </div>
            
            {/* Dashboard Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
              {/* Growth Rate */}
              <Card className="card-hover border-t-4 border-t-golden">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">Growth Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-2xl font-bold">+12%</p>
                      <p className="text-xs text-green-600">+3% from last month</p>
                    </div>
                    <TrendingUp className="text-golden" size={24} />
                  </div>
                </CardContent>
              </Card>
              
              {/* Customer Growth */}
              <Card className="card-hover border-t-4 border-t-terracotta">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">New Customers</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-2xl font-bold">24</p>
                      <p className="text-xs text-green-600">+6 from last month</p>
                    </div>
                    <Users className="text-terracotta" size={24} />
                  </div>
                </CardContent>
              </Card>
              
              {/* Tasks Completed */}
              <Card className="card-hover border-t-4 border-t-teal">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">Tasks Complete</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-2xl font-bold">8/12</p>
                      <p className="text-xs text-amber-600">4 tasks remaining</p>
                    </div>
                    <FileText className="text-teal" size={24} />
                  </div>
                </CardContent>
              </Card>
              
              {/* Monthly Revenue */}
              <Card className="card-hover border-t-4 border-t-burgundy">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">Est. Revenue</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-2xl font-bold">$4,320</p>
                      <p className="text-xs text-green-600">+$840 from last month</p>
                    </div>
                    <DollarSign className="text-burgundy" size={24} />
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Dashboard Chart Placeholder */}
            <div className="p-6 pt-0">
              <div className="rounded-lg bg-gray-100 h-60 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-gray-500 mb-2">Business Growth Trends</p>
                  <p className="text-sm text-gray-400">(View full dashboard for interactive charts)</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="text-center reveal">
            <Button 
              size="lg"
              className="bg-burgundy hover:bg-terracotta"
              onClick={handleViewDashboard}
            >
              <span>View Full Dashboard</span>
              <ArrowRight className="ml-2" size={16} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;

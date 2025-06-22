
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Zap, MessageCircle, TrendingUp, Calendar, BarChart3, User, Settings, LogOut, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

const MainApp = () => {
  const [marketingIntent, setMarketingIntent] = useState("");
  const navigate = useNavigate();

  const sampleIntents = [
    "Let my customers know about my upcoming new coffee products",
    "Quick sales of my furnitures for the upcoming Diwali season",
    "Create brand awareness for my Food brand in and around Thane, Mumbai",
    "Grow my dental services by more than 10% in Hyderabad"
  ];

  const handleLogout = () => {
    // TODO: Implement logout logic
    console.log("Logging out...");
  };

  const handleGenerate = () => {
    if (marketingIntent.trim()) {
      navigate("/content-plan", { state: { marketingIntent } });
    }
  };

  const handleSampleClick = (sample: string) => {
    setMarketingIntent(sample);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                wingso.ai
              </span>
            </div>

            {/* User Menu */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <User className="h-4 w-4 mr-2" />
                Profile
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
              <Button variant="ghost" size="sm" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome to wingso.ai
          </h1>
          <p className="text-lg text-gray-600">
            Your AI-powered marketing intelligence platform is ready to help you grow your business.
          </p>
        </div>

        {/* Marketing Intent Section */}
        <div className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle>What's your marketing intent today?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                placeholder="Describe your marketing goals and objectives..."
                value={marketingIntent}
                onChange={(e) => setMarketingIntent(e.target.value)}
                className="min-h-[100px]"
              />
              
              {/* Sample Intent Examples */}
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-700">Sample marketing intents:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {sampleIntents.map((intent, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="text-left h-auto p-3 justify-start"
                      onClick={() => handleSampleClick(intent)}
                    >
                      <span className="text-sm">{intent}</span>
                    </Button>
                  ))}
                </div>
              </div>

              <Button 
                onClick={handleGenerate}
                disabled={!marketingIntent.trim()}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                <Send className="h-4 w-4 mr-2" />
                Generate Marketing Plan
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <MessageCircle className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">AI Chat Assistant</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Get instant marketing insights and recommendations from your AI assistant.</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-lg">Trends Engine</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Stay ahead with real-time market trend analysis and competitive insights.</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-3">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <Calendar className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Content Calendar</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Automated content planning and scheduling for all your marketing channels.</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-3">
                <div className="bg-orange-100 p-2 rounded-lg">
                  <BarChart3 className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-lg">Analytics</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Deep insights into your marketing performance and ROI tracking.</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button className="h-16 flex flex-col space-y-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <MessageCircle className="h-6 w-6" />
                <span>Start AI Chat</span>
              </Button>
              <Button variant="outline" className="h-16 flex flex-col space-y-2">
                <Calendar className="h-6 w-6" />
                <span>Plan Content</span>
              </Button>
              <Button variant="outline" className="h-16 flex flex-col space-y-2">
                <BarChart3 className="h-6 w-6" />
                <span>View Analytics</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MainApp;


import { useState } from "react";
import { Link } from "react-router-dom";
import { Zap, Search, Calendar, Filter, ChevronDown, ChevronUp, Download, Copy, Edit3, User, Settings, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Campaign {
  id: string;
  name: string;
  date: string;
  status: "posted" | "scheduled" | "not_scheduled";
  image: string;
  caption: string;
  stats: {
    likes: number;
    comments: number;
    shares: number;
    views: number;
  };
}

const mockCampaigns: Campaign[] = [
  {
    id: "1",
    name: "Coffee Product Launch",
    date: "2024-01-15",
    status: "posted",
    image: "/placeholder.svg",
    caption: "Introducing our new premium coffee blend! ☕ #CoffeeLovers #NewProduct",
    stats: { likes: 245, comments: 32, shares: 18, views: 1200 }
  },
  {
    id: "2",
    name: "Diwali Furniture Sale",
    date: "2024-01-10",
    status: "scheduled",
    image: "/placeholder.svg",
    caption: "Get ready for Diwali with our exclusive furniture collection! 🪔 #Diwali #Furniture",
    stats: { likes: 0, comments: 0, shares: 0, views: 0 }
  },
  {
    id: "3",
    name: "Food Brand Awareness",
    date: "2024-01-05",
    status: "not_scheduled",
    image: "/placeholder.svg",
    caption: "Taste the authentic flavors of Mumbai! 🍛 #MumbaiFood #Authentic",
    stats: { likes: 0, comments: 0, shares: 0, views: 0 }
  }
];

const History = () => {
  const [campaigns, setCampaigns] = useState<Campaign[]>(mockCampaigns);
  const [searchTerm, setSearchTerm] = useState("");
  const [dateFilter, setDateFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [expandedCampaign, setExpandedCampaign] = useState<string | null>(null);

  const getStatusColor = (status: Campaign['status']) => {
    switch (status) {
      case "posted": return "bg-green-500";
      case "scheduled": return "bg-yellow-500";
      case "not_scheduled": return "bg-red-500";
    }
  };

  const getStatusText = (status: Campaign['status']) => {
    switch (status) {
      case "posted": return "Posted";
      case "scheduled": return "Scheduled";
      case "not_scheduled": return "Not Scheduled";
    }
  };

  const filteredCampaigns = campaigns.filter(campaign => {
    const matchesSearch = campaign.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || campaign.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleLogout = () => {
    console.log("Logging out...");
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/app" className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                wingso.ai
              </span>
            </Link>

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
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Campaign History</h1>
          <p className="text-lg text-gray-600">View and manage all your past marketing campaigns</p>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search campaigns..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={dateFilter} onValueChange={setDateFilter}>
                <SelectTrigger>
                  <Calendar className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Filter by date" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All dates</SelectItem>
                  <SelectItem value="last_week">Last week</SelectItem>
                  <SelectItem value="last_month">Last month</SelectItem>
                  <SelectItem value="last_3_months">Last 3 months</SelectItem>
                </SelectContent>
              </Select>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All statuses</SelectItem>
                  <SelectItem value="posted">Posted</SelectItem>
                  <SelectItem value="scheduled">Scheduled</SelectItem>
                  <SelectItem value="not_scheduled">Not Scheduled</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Campaign List */}
        <div className="space-y-4">
          {filteredCampaigns.map((campaign) => (
            <Card key={campaign.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-4 h-4 rounded-full ${getStatusColor(campaign.status)} cursor-pointer`}
                        title={getStatusText(campaign.status)}
                      />
                      <div>
                        <h3 className="font-semibold text-lg">{campaign.name}</h3>
                        <p className="text-gray-600">{new Date(campaign.date).toLocaleDateString()}</p>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    onClick={() => setExpandedCampaign(expandedCampaign === campaign.id ? null : campaign.id)}
                  >
                    {expandedCampaign === campaign.id ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </div>

                {expandedCampaign === campaign.id && (
                  <div className="mt-6 border-t pt-6">
                    <Tabs defaultValue="raw" className="w-full">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="raw">Raw Format</TabsTrigger>
                        <TabsTrigger value="instagram">Instagram Format</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="raw" className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold mb-2">Image</h4>
                            <img src={campaign.image} alt="Campaign" className="w-full rounded-lg border" />
                            <div className="flex space-x-2 mt-2">
                              <Button size="sm" variant="outline">
                                <Download className="h-4 w-4 mr-2" />
                                Download
                              </Button>
                              <Button size="sm" variant="outline">
                                <Edit3 className="h-4 w-4 mr-2" />
                                Edit
                              </Button>
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Caption</h4>
                            <div className="bg-gray-50 p-4 rounded-lg border">
                              <p>{campaign.caption}</p>
                            </div>
                            <div className="flex space-x-2 mt-2">
                              <Button size="sm" variant="outline" onClick={() => handleCopy(campaign.caption)}>
                                <Copy className="h-4 w-4 mr-2" />
                                Copy
                              </Button>
                              <Button size="sm" variant="outline">
                                <Edit3 className="h-4 w-4 mr-2" />
                                Edit
                              </Button>
                            </div>
                          </div>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="instagram" className="space-y-4">
                        <div className="max-w-sm mx-auto">
                          <div className="bg-white border rounded-lg overflow-hidden shadow-sm">
                            <div className="flex items-center p-3 border-b">
                              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3"></div>
                              <span className="font-semibold">wingso.ai</span>
                            </div>
                            <img src={campaign.image} alt="Instagram post" className="w-full" />
                            <div className="p-3">
                              <p className="text-sm">{campaign.caption}</p>
                            </div>
                          </div>
                          <div className="flex space-x-2 mt-4 justify-center">
                            <Button size="sm" variant="outline">
                              <Download className="h-4 w-4 mr-2" />
                              Download
                            </Button>
                            <Button size="sm" variant="outline">
                              <Edit3 className="h-4 w-4 mr-2" />
                              Edit
                            </Button>
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>

                    {campaign.status === "posted" && (
                      <div className="mt-6">
                        <h4 className="font-semibold mb-3">Engagement Stats</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-blue-600">{campaign.stats.likes}</div>
                            <div className="text-sm text-gray-600">Likes</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-green-600">{campaign.stats.comments}</div>
                            <div className="text-sm text-gray-600">Comments</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-purple-600">{campaign.stats.shares}</div>
                            <div className="text-sm text-gray-600">Shares</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-orange-600">{campaign.stats.views}</div>
                            <div className="text-sm text-gray-600">Views</div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default History;

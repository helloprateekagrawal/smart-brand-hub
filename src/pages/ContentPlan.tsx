
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Zap, Edit3, Upload, Save, Sparkles, User, Settings, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface ContentCard {
  id: string;
  dateTime: string;
  topic: string;
  keyMessage: string;
  cta: string;
  imageUrl?: string;
}

interface MarketingObjectives {
  product: string;
  growthDesired: string;
  audience: string;
  budget: string;
  language: string;
}

const ContentPlan = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { marketingIntent } = location.state || { marketingIntent: "" };
  
  const [objectives, setObjectives] = useState<MarketingObjectives>({
    product: "",
    growthDesired: "",
    audience: "",
    budget: "",
    language: ""
  });
  
  const [contentCards, setContentCards] = useState<ContentCard[]>([]);

  useEffect(() => {
    // Simulate backend fetch - in real app, this would be an API call
    const fetchMarketingPlan = async () => {
      // Mock data based on marketing intent
      const mockObjectives: MarketingObjectives = {
        product: "Coffee Products",
        growthDesired: "25% increase in sales",
        audience: "Coffee enthusiasts aged 25-45",
        budget: "$5,000 - $10,000",
        language: "English"
      };

      const mockContentCards: ContentCard[] = [
        {
          id: "1",
          dateTime: "2025-01-15 10:00 AM",
          topic: "New Coffee Launch Teaser",
          keyMessage: "Get ready for something amazing! Our new blend is coming soon.",
          cta: "Stay tuned for the big reveal!"
        },
        {
          id: "2",
          dateTime: "2025-01-18 2:00 PM",
          topic: "Product Showcase",
          keyMessage: "Introducing our premium Ethiopian blend - rich, aromatic, and unforgettable.",
          cta: "Pre-order now and save 20%"
        },
        {
          id: "3",
          dateTime: "2025-01-22 9:00 AM",
          topic: "Customer Testimonials",
          keyMessage: "See what our customers are saying about our new coffee blend.",
          cta: "Try it yourself today!"
        }
      ];

      setObjectives(mockObjectives);
      setContentCards(mockContentCards);
    };

    fetchMarketingPlan();
  }, [marketingIntent]);

  const handleObjectiveChange = (field: keyof MarketingObjectives, value: string) => {
    setObjectives(prev => ({ ...prev, [field]: value }));
  };

  const handleContentChange = (cardId: string, field: keyof ContentCard, value: string) => {
    setContentCards(prev => 
      prev.map(card => 
        card.id === cardId ? { ...card, [field]: value } : card
      )
    );
  };

  const handleSaveDraft = () => {
    console.log("Saving draft...", { objectives, contentCards });
    // TODO: Implement save draft functionality
  };

  const handleGenerateContent = () => {
    navigate("/content-preview", { 
      state: { 
        marketingIntent, 
        objectives, 
        contentCards 
      } 
    });
  };

  const handleLogout = () => {
    console.log("Logging out...");
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Marketing Intent */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Your Marketing Intent</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 bg-gray-50 p-4 rounded-lg italic">
              "{marketingIntent}"
            </p>
          </CardContent>
        </Card>

        {/* Marketing Objectives */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Marketing Objectives</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="product">Product/Service</Label>
                <Input
                  id="product"
                  value={objectives.product}
                  onChange={(e) => handleObjectiveChange("product", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="growth">Growth Desired</Label>
                <Input
                  id="growth"
                  value={objectives.growthDesired}
                  onChange={(e) => handleObjectiveChange("growthDesired", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="audience">Target Audience</Label>
                <Input
                  id="audience"
                  value={objectives.audience}
                  onChange={(e) => handleObjectiveChange("audience", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="budget">Budget Range</Label>
                <Input
                  id="budget"
                  value={objectives.budget}
                  onChange={(e) => handleObjectiveChange("budget", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="language">Language</Label>
                <Input
                  id="language"
                  value={objectives.language}
                  onChange={(e) => handleObjectiveChange("language", e.target.value)}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Content Cards */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Content Plan</h2>
          <div className="space-y-6">
            {contentCards.map((card) => (
              <Card key={card.id}>
                <CardHeader>
                  <CardTitle className="text-lg">Content #{card.id}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label>Date & Time</Label>
                      <Input
                        value={card.dateTime}
                        onChange={(e) => handleContentChange(card.id, "dateTime", e.target.value)}
                      />
                    </div>
                    <div>
                      <Label>Topic/Theme</Label>
                      <Input
                        value={card.topic}
                        onChange={(e) => handleContentChange(card.id, "topic", e.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    <Label>Key Message</Label>
                    <Textarea
                      value={card.keyMessage}
                      onChange={(e) => handleContentChange(card.id, "keyMessage", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label>Call to Action</Label>
                    <Input
                      value={card.cta}
                      onChange={(e) => handleContentChange(card.id, "cta", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label>Image</Label>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">
                        <Upload className="h-4 w-4 mr-2" />
                        Upload Image
                      </Button>
                      {card.imageUrl && (
                        <span className="text-sm text-gray-600">Image uploaded</span>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="outline" onClick={handleSaveDraft} className="flex items-center">
            <Save className="h-4 w-4 mr-2" />
            Save Draft
          </Button>
          <Button 
            onClick={handleGenerateContent}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 flex items-center"
          >
            <Sparkles className="h-4 w-4 mr-2" />
            Generate Entire Content with AI
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContentPlan;

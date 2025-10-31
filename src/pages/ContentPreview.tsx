
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Zap, Download, Edit3, Copy, User, Settings, LogOut, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

interface GeneratedContent {
  id: string;
  imageUrl: string;
  caption: string;
  topic: string;
}

const ContentPreview = () => {
  const location = useLocation();
  const { marketingIntent, objectives, contentCards } = location.state || {};
  
  const [generatedContent, setGeneratedContent] = useState<GeneratedContent[]>([]);
  const [editingCaption, setEditingCaption] = useState<string>("");
  const [editingContentId, setEditingContentId] = useState<string | null>(null);

  useEffect(() => {
    // Simulate backend content generation
    const generateContent = async () => {
      const mockGeneratedContent: GeneratedContent[] = [
        {
          id: "1",
          imageUrl: "/placeholder.svg",
          caption: "🚨 Something amazing is brewing! ☕\n\nGet ready coffee lovers - our newest blend is almost here and it's going to blow your mind! \n\nStay tuned for the big reveal! 👀\n\n#CoffeeLovers #NewBlend #ComingSoon #CoffeeLife",
          topic: "New Coffee Launch Teaser"
        },
        {
          id: "2",
          imageUrl: "/placeholder.svg",
          caption: "✨ INTRODUCING: Premium Ethiopian Blend ✨\n\nRich. Aromatic. Unforgettable.\n\nExperience the perfect balance of bold flavor and smooth finish that will transform your morning routine.\n\n🎉 Pre-order now and save 20%!\n\n#EthiopianCoffee #PremiumBlend #CoffeeLovers #PreOrder",
          topic: "Product Showcase"
        },
        {
          id: "3",
          imageUrl: "/placeholder.svg",
          caption: "💬 HEAR FROM OUR CUSTOMERS 💬\n\n\"This new blend has completely changed my coffee game! The flavor is incredible!\" - Sarah M.\n\n\"Best coffee I've ever tasted. Ordering again!\" - Mike D.\n\nReady to try it yourself?\n\n#CustomerLove #Testimonials #CoffeeReviews #TryItToday",
          topic: "Customer Testimonials"
        }
      ];

      setGeneratedContent(mockGeneratedContent);
    };

    generateContent();
  }, [contentCards]);

  const handleEditCaption = (contentId: string, currentCaption: string) => {
    setEditingContentId(contentId);
    setEditingCaption(currentCaption);
  };

  const handleSaveCaption = (contentId: string) => {
    setGeneratedContent(prev =>
      prev.map(content =>
        content.id === contentId ? { ...content, caption: editingCaption } : content
      )
    );
    setEditingContentId(null);
    setEditingCaption("");
  };

  const handleCopyCaption = (caption: string) => {
    navigator.clipboard.writeText(caption);
    // You could add a toast notification here
  };

  const handleDownloadImage = (imageUrl: string, topic: string) => {
    // In a real app, this would download the actual image
    console.log(`Downloading image for: ${topic}`);
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
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Generated Content
          </h1>
          <p className="text-lg text-gray-600">
            Your AI-generated marketing content is ready! You can edit and download each piece.
          </p>
        </div>

        <div className="space-y-8">
          {generatedContent.map((content) => (
            <Card key={content.id}>
              <CardHeader>
                <CardTitle>{content.topic}</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="raw" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="raw">Raw Format</TabsTrigger>
                    <TabsTrigger value="instagram">Instagram Post</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="raw" className="mt-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* Image Section */}
                      <div className="space-y-4">
                        <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
                          <img
                            src={content.imageUrl}
                            alt={content.topic}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                        <div className="flex space-x-2">
                          <Button
                            variant="outline"
                            onClick={() => handleDownloadImage(content.imageUrl, content.topic)}
                            className="flex-1"
                          >
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                          <Button variant="outline" className="flex-1">
                            <Edit3 className="h-4 w-4 mr-2" />
                            Edit Image
                          </Button>
                        </div>
                      </div>

                      {/* Caption Section */}
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Caption</h4>
                          {editingContentId === content.id ? (
                            <div className="space-y-2">
                              <Textarea
                                value={editingCaption}
                                onChange={(e) => setEditingCaption(e.target.value)}
                                className="min-h-[200px]"
                              />
                              <div className="flex space-x-2">
                                <Button
                                  size="sm"
                                  onClick={() => handleSaveCaption(content.id)}
                                >
                                  Save
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => setEditingContentId(null)}
                                >
                                  Cancel
                                </Button>
                              </div>
                            </div>
                          ) : (
                            <div className="bg-gray-50 p-4 rounded-lg">
                              <p className="whitespace-pre-line text-sm">{content.caption}</p>
                            </div>
                          )}
                        </div>
                        <div className="flex space-x-2">
                          <Button
                            variant="outline"
                            onClick={() => handleEditCaption(content.id, content.caption)}
                            className="flex-1"
                          >
                            <Edit3 className="h-4 w-4 mr-2" />
                            Edit
                          </Button>
                          <Button
                            variant="outline"
                            onClick={() => handleCopyCaption(content.caption)}
                            className="flex-1"
                          >
                            <Copy className="h-4 w-4 mr-2" />
                            Copy
                          </Button>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="instagram" className="mt-6">
                    <div className="max-w-md mx-auto">
                      {/* Instagram Post Mockup */}
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                        {/* Instagram Header */}
                        <div className="flex items-center p-3 border-b border-gray-200">
                          <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center mr-3">
                            <span className="text-white text-xs font-semibold">B</span>
                          </div>
                          <span className="font-semibold text-sm">your_business</span>
                        </div>
                        
                        {/* Instagram Image */}
                        <div className="aspect-square bg-gray-200">
                          <img
                            src={content.imageUrl}
                            alt={content.topic}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        {/* Instagram Actions */}
                        <div className="p-3">
                          <div className="flex space-x-4 mb-3">
                            <Instagram className="h-6 w-6" />
                          </div>
                          
                          {/* Caption */}
                          <div className="text-sm">
                            <span className="font-semibold">your_business</span>{" "}
                            <span className="whitespace-pre-line">{content.caption}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4 flex space-x-2">
                        <Button
                          variant="outline"
                          onClick={() => handleDownloadImage(content.imageUrl, content.topic)}
                          className="flex-1"
                        >
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => handleEditCaption(content.id, content.caption)}
                          className="flex-1"
                        >
                          <Edit3 className="h-4 w-4 mr-2" />
                          Edit
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentPreview;


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import OnboardingHeader from "@/components/OnboardingHeader";

const MarketingStructure = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    objective: "",
    uniqueDeliverables: "",
    postingFrequency: "",
    contentPillars: [] as string[],
    monthlyBudget: "0",
    currency: "INR"
  });

  const contentPillarOptions = [
    "Educational", "Inspirational", "Meme", "Guides", "Tips", "Quotes with branding",
    "Product features & benefits", "Lifestyle integration", "Customer showcases (UGC)",
    "Behind-the-design", "Styling tips", "Performance highlights"
  ];

  const currencyOptions = ["INR", "USD", "EUR", "GBP"];

  const handleContentPillarChange = (pillar: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      contentPillars: checked 
        ? [...prev.contentPillars, pillar]
        : prev.contentPillars.filter(p => p !== pillar)
    }));
  };

  const handleNext = () => {
    console.log("Marketing structure:", formData);
    navigate("/onboarding/customers");
  };

  const handleSaveDraft = () => {
    console.log("Saving draft:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <OnboardingHeader />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Progress value={40} className="mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Let us structure your marketing</h1>
          <p className="text-lg text-gray-600">Define your marketing strategy and goals</p>
        </div>

        <Card>
          <CardContent className="pt-6 space-y-6">
            {/* High Level Objective */}
            <div className="space-y-2">
              <Label htmlFor="objective" className="text-base font-semibold">High Level Objective *</Label>
              <Textarea
                id="objective"
                placeholder="e.g., Increase brand awareness, drive direct sales for new shoe collection, and build an engaged community"
                value={formData.objective}
                onChange={(e) => setFormData(prev => ({ ...prev, objective: e.target.value }))}
                rows={3}
              />
            </div>

            {/* Unique Deliverables */}
            <div className="space-y-2">
              <Label htmlFor="uniqueDeliverables" className="text-base font-semibold">Unique Deliverables *</Label>
              <Textarea
                id="uniqueDeliverables"
                placeholder="Write about something that your business is known for"
                value={formData.uniqueDeliverables}
                onChange={(e) => setFormData(prev => ({ ...prev, uniqueDeliverables: e.target.value }))}
                rows={3}
              />
            </div>

            {/* Posting Frequency */}
            <div className="space-y-2">
              <Label htmlFor="postingFrequency" className="text-base font-semibold">Desired Posting Frequency *</Label>
              <Input
                id="postingFrequency"
                placeholder="e.g., one reel/week and one img/day"
                value={formData.postingFrequency}
                onChange={(e) => setFormData(prev => ({ ...prev, postingFrequency: e.target.value }))}
              />
            </div>

            {/* Content Pillars */}
            <div className="space-y-3">
              <Label className="text-base font-semibold">Content Pillars/Themes *</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {contentPillarOptions.map((pillar) => (
                  <div key={pillar} className="flex items-center space-x-2">
                    <Checkbox
                      id={pillar}
                      checked={formData.contentPillars.includes(pillar)}
                      onCheckedChange={(checked) => handleContentPillarChange(pillar, checked as boolean)}
                    />
                    <Label htmlFor={pillar} className="text-sm">{pillar}</Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Monthly Budget */}
            <div className="space-y-2">
              <Label className="text-base font-semibold">Monthly Ad Budget *</Label>
              <div className="flex space-x-2">
                <Select value={formData.currency} onValueChange={(value) => setFormData(prev => ({ ...prev, currency: value }))}>
                  <SelectTrigger className="w-24">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {currencyOptions.map((currency) => (
                      <SelectItem key={currency} value={currency}>{currency}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Input
                  type="number"
                  placeholder="0"
                  value={formData.monthlyBudget}
                  onChange={(e) => setFormData(prev => ({ ...prev, monthlyBudget: e.target.value }))}
                  className="flex-1"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between pt-6">
              <Button variant="outline" onClick={handleSaveDraft}>
                Save Draft
              </Button>
              <Button 
                onClick={handleNext}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                disabled={!formData.objective || !formData.uniqueDeliverables || !formData.postingFrequency || !formData.contentPillars.length}
              >
                Save & Next
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MarketingStructure;

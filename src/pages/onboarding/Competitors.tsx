
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Plus, Trash2 } from "lucide-react";
import OnboardingHeader from "@/components/OnboardingHeader";

interface Competitor {
  name: string;
  location: string;
  link: string;
}

const Competitors = () => {
  const navigate = useNavigate();
  const [competitors, setCompetitors] = useState<Competitor[]>([
    { name: "", location: "", link: "" }
  ]);

  const addCompetitor = () => {
    setCompetitors([...competitors, { name: "", location: "", link: "" }]);
  };

  const removeCompetitor = (index: number) => {
    if (competitors.length > 1) {
      setCompetitors(competitors.filter((_, i) => i !== index));
    }
  };

  const updateCompetitor = (index: number, field: keyof Competitor, value: string) => {
    const updated = [...competitors];
    updated[index][field] = value;
    setCompetitors(updated);
  };

  const handleNext = () => {
    console.log("Competitors:", competitors);
    navigate("/onboarding/final");
  };

  const handleSkip = () => {
    navigate("/onboarding/final");
  };

  const handleSaveDraft = () => {
    console.log("Saving draft:", competitors);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <OnboardingHeader />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Progress value={80} className="mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Your major competitors</h1>
          <p className="text-lg text-gray-600">Help us understand your competitive landscape (Optional)</p>
        </div>

        <Card>
          <CardContent className="pt-6 space-y-6">
            {competitors.map((competitor, index) => (
              <div key={index} className="border rounded-lg p-4 space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold">Competitor {index + 1}</h3>
                  {competitors.length > 1 && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => removeCompetitor(index)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  )}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label>Name of the competitor</Label>
                    <Input
                      placeholder="e.g., Competitor ABC"
                      value={competitor.name}
                      onChange={(e) => updateCompetitor(index, "name", e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Location of the competitor</Label>
                    <Input
                      placeholder="e.g., Mumbai, India"
                      value={competitor.location}
                      onChange={(e) => updateCompetitor(index, "location", e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Link to the competitor</Label>
                    <Input
                      placeholder="e.g., https://competitor.com"
                      value={competitor.link}
                      onChange={(e) => updateCompetitor(index, "link", e.target.value)}
                    />
                  </div>
                </div>
              </div>
            ))}

            <Button
              variant="outline"
              onClick={addCompetitor}
              className="w-full flex items-center space-x-2"
            >
              <Plus className="h-4 w-4" />
              <span>Add Another Competitor</span>
            </Button>

            {/* Action Buttons */}
            <div className="flex justify-between pt-6">
              <div className="space-x-2">
                <Button variant="outline" onClick={handleSaveDraft}>
                  Save Draft
                </Button>
                <Button variant="outline" onClick={handleSkip}>
                  Skip
                </Button>
              </div>
              <Button 
                onClick={handleNext}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
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

export default Competitors;

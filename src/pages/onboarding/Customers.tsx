
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import OnboardingHeader from "@/components/OnboardingHeader";

const Customers = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    ageRanges: "",
    genders: [] as string[],
    languages: [] as string[],
    interests: "",
    locations: ""
  });

  const genderOptions = ["Male", "Female", "Non-binary", "Other"];
  const languageOptions = ["English", "Hindi", "Marathi", "Tamil", "Telugu", "Gujarati", "Bengali", "Kannada", "Malayalam", "Punjabi"];

  const handleGenderChange = (gender: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      genders: checked 
        ? [...prev.genders, gender]
        : prev.genders.filter(g => g !== gender)
    }));
  };

  const handleLanguageChange = (language: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      languages: checked 
        ? [...prev.languages, language]
        : prev.languages.filter(l => l !== language)
    }));
  };

  const handleNext = () => {
    console.log("Customer info:", formData);
    navigate("/onboarding/competitors");
  };

  const handleSaveDraft = () => {
    console.log("Saving draft:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <OnboardingHeader />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Progress value={60} className="mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Tell us more about your customers</h1>
          <p className="text-lg text-gray-600">Help us understand your target audience</p>
        </div>

        <Card>
          <CardContent className="pt-6 space-y-6">
            {/* Age Ranges */}
            <div className="space-y-2">
              <Label htmlFor="ageRanges" className="text-base font-semibold">Age Ranges *</Label>
              <Input
                id="ageRanges"
                placeholder="e.g., 18-25, 26-35, 36-45"
                value={formData.ageRanges}
                onChange={(e) => setFormData(prev => ({ ...prev, ageRanges: e.target.value }))}
              />
            </div>

            {/* Gender */}
            <div className="space-y-3">
              <Label className="text-base font-semibold">Gender *</Label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {genderOptions.map((gender) => (
                  <div key={gender} className="flex items-center space-x-2">
                    <Checkbox
                      id={gender}
                      checked={formData.genders.includes(gender)}
                      onCheckedChange={(checked) => handleGenderChange(gender, checked as boolean)}
                    />
                    <Label htmlFor={gender} className="text-sm">{gender}</Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="space-y-3">
              <Label className="text-base font-semibold">Languages *</Label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {languageOptions.map((language) => (
                  <div key={language} className="flex items-center space-x-2">
                    <Checkbox
                      id={language}
                      checked={formData.languages.includes(language)}
                      onCheckedChange={(checked) => handleLanguageChange(language, checked as boolean)}
                    />
                    <Label htmlFor={language} className="text-sm">{language}</Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div className="space-y-2">
              <Label htmlFor="interests" className="text-base font-semibold">Interests *</Label>
              <Textarea
                id="interests"
                placeholder="Hobbies, passions, pages they follow, topics they engage with"
                value={formData.interests}
                onChange={(e) => setFormData(prev => ({ ...prev, interests: e.target.value }))}
                rows={4}
              />
            </div>

            {/* Customer Locations */}
            <div className="space-y-2">
              <Label htmlFor="locations" className="text-base font-semibold">Customer Locations *</Label>
              <Input
                id="locations"
                placeholder="e.g., Mumbai, Delhi, Bangalore, Chennai"
                value={formData.locations}
                onChange={(e) => setFormData(prev => ({ ...prev, locations: e.target.value }))}
              />
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between pt-6">
              <Button variant="outline" onClick={handleSaveDraft}>
                Save Draft
              </Button>
              <Button 
                onClick={handleNext}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                disabled={!formData.ageRanges || !formData.genders.length || !formData.languages.length || !formData.interests || !formData.locations}
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

export default Customers;

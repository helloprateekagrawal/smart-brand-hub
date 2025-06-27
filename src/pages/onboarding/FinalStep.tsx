
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Plus, Trash2 } from "lucide-react";
import OnboardingHeader from "@/components/OnboardingHeader";

const FinalStep = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    websiteLinks: [""],
    socialMediaAccounts: [""],
    additionalInfo: ""
  });

  const addWebsiteLink = () => {
    setFormData(prev => ({
      ...prev,
      websiteLinks: [...prev.websiteLinks, ""]
    }));
  };

  const removeWebsiteLink = (index: number) => {
    if (formData.websiteLinks.length > 1) {
      setFormData(prev => ({
        ...prev,
        websiteLinks: prev.websiteLinks.filter((_, i) => i !== index)
      }));
    }
  };

  const updateWebsiteLink = (index: number, value: string) => {
    const updated = [...formData.websiteLinks];
    updated[index] = value;
    setFormData(prev => ({ ...prev, websiteLinks: updated }));
  };

  const addSocialMediaAccount = () => {
    setFormData(prev => ({
      ...prev,
      socialMediaAccounts: [...prev.socialMediaAccounts, ""]
    }));
  };

  const removeSocialMediaAccount = (index: number) => {
    if (formData.socialMediaAccounts.length > 1) {
      setFormData(prev => ({
        ...prev,
        socialMediaAccounts: prev.socialMediaAccounts.filter((_, i) => i !== index)
      }));
    }
  };

  const updateSocialMediaAccount = (index: number, value: string) => {
    const updated = [...formData.socialMediaAccounts];
    updated[index] = value;
    setFormData(prev => ({ ...prev, socialMediaAccounts: updated }));
  };

  const handleComplete = () => {
    console.log("Final step data:", formData);
    navigate("/app");
  };

  const handleSkip = () => {
    navigate("/app");
  };

  const handleSaveDraft = () => {
    console.log("Saving draft:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <OnboardingHeader />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Progress value={100} className="mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">The Last Step</h1>
          <p className="text-lg text-gray-600">Final details to complete your profile (Optional)</p>
        </div>

        <Card>
          <CardContent className="pt-6 space-y-6">
            {/* Website Links */}
            <div className="space-y-4">
              <Label className="text-base font-semibold">Company Website Links</Label>
              {formData.websiteLinks.map((link, index) => (
                <div key={index} className="flex space-x-2">
                  <Input
                    placeholder="https://yourwebsite.com"
                    value={link}
                    onChange={(e) => updateWebsiteLink(index, e.target.value)}
                    className="flex-1"
                  />
                  {formData.websiteLinks.length > 1 && (
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => removeWebsiteLink(index)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
              <Button
                variant="outline"
                onClick={addWebsiteLink}
                className="w-full flex items-center space-x-2"
              >
                <Plus className="h-4 w-4" />
                <span>Add Another Website Link</span>
              </Button>
            </div>

            {/* Social Media Accounts */}
            <div className="space-y-4">
              <Label className="text-base font-semibold">Company's Social Media Accounts</Label>
              {formData.socialMediaAccounts.map((account, index) => (
                <div key={index} className="flex space-x-2">
                  <Input
                    placeholder="https://instagram.com/yourcompany"
                    value={account}
                    onChange={(e) => updateSocialMediaAccount(index, e.target.value)}
                    className="flex-1"
                  />
                  {formData.socialMediaAccounts.length > 1 && (
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => removeSocialMediaAccount(index)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
              <Button
                variant="outline"
                onClick={addSocialMediaAccount}
                className="w-full flex items-center space-x-2"
              >
                <Plus className="h-4 w-4" />
                <span>Add Another Social Media Account</span>
              </Button>
            </div>

            {/* Additional Info */}
            <div className="space-y-2">
              <Label htmlFor="additionalInfo" className="text-base font-semibold">
                Something else about your business that you want us to know
              </Label>
              <Textarea
                id="additionalInfo"
                placeholder="Share stories, tips & techniques, ambitions, what-to-dos, etc."
                value={formData.additionalInfo}
                onChange={(e) => setFormData(prev => ({ ...prev, additionalInfo: e.target.value }))}
                rows={4}
              />
            </div>

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
                onClick={handleComplete}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Complete Setup
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FinalStep;

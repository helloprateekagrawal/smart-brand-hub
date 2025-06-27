
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import OnboardingHeader from "@/components/OnboardingHeader";

const CompanyInfo = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    companyTypes: [] as string[],
    annualRevenue: "",
    industries: [] as string[],
    otherIndustry: "",
    yearEstablished: "",
    missionVision: "",
    products: ""
  });

  const companyTypeOptions = [
    "Agency", "Product-based", "Service-based", "Manufacturer", "Wholesaler", 
    "Retailer", "D2C (Direct-to-Consumer)", "Dropshipping", "Franchise", 
    "Aggregator / Platform", "Marketplace", "Other"
  ];

  const revenueOptions = [
    "0-5L", "5L-10L", "10L-40L", "40L-1CR", "1CR-5CR", "5CR-20CR", "20CR-50CR", "50CR+"
  ];

  const industryOptions = [
    "Technology", "Healthcare", "Finance", "Education", "Retail", "Food & Beverage",
    "Fashion", "Automotive", "Real Estate", "Travel", "Entertainment", "Sports", "Other"
  ];

  const handleCompanyTypeChange = (type: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      companyTypes: checked 
        ? [...prev.companyTypes, type]
        : prev.companyTypes.filter(t => t !== type)
    }));
  };

  const handleIndustryChange = (industry: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      industries: checked 
        ? [...prev.industries, industry]
        : prev.industries.filter(i => i !== industry)
    }));
  };

  const handleNext = () => {
    // TODO: Save form data
    console.log("Company info:", formData);
    navigate("/onboarding/marketing");
  };

  const handleSaveDraft = () => {
    console.log("Saving draft:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <OnboardingHeader />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Progress value={20} className="mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Tell us more about the company</h1>
          <p className="text-lg text-gray-600">Help us understand your business better</p>
        </div>

        <Card>
          <CardContent className="pt-6 space-y-6">
            {/* Company Type */}
            <div className="space-y-3">
              <Label className="text-base font-semibold">Type of company *</Label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {companyTypeOptions.map((type) => (
                  <div key={type} className="flex items-center space-x-2">
                    <Checkbox
                      id={type}
                      checked={formData.companyTypes.includes(type)}
                      onCheckedChange={(checked) => handleCompanyTypeChange(type, checked as boolean)}
                    />
                    <Label htmlFor={type} className="text-sm">{type}</Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Annual Revenue */}
            <div className="space-y-2">
              <Label className="text-base font-semibold">Annual Revenue *</Label>
              <Select value={formData.annualRevenue} onValueChange={(value) => setFormData(prev => ({ ...prev, annualRevenue: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Select annual revenue range" />
                </SelectTrigger>
                <SelectContent>
                  {revenueOptions.map((option) => (
                    <SelectItem key={option} value={option}>{option}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Industry */}
            <div className="space-y-3">
              <Label className="text-base font-semibold">Industry *</Label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {industryOptions.map((industry) => (
                  <div key={industry} className="flex items-center space-x-2">
                    <Checkbox
                      id={industry}
                      checked={formData.industries.includes(industry)}
                      onCheckedChange={(checked) => handleIndustryChange(industry, checked as boolean)}
                    />
                    <Label htmlFor={industry} className="text-sm">{industry}</Label>
                  </div>
                ))}
              </div>
              {formData.industries.includes("Other") && (
                <Input
                  placeholder="Please specify other industry"
                  value={formData.otherIndustry}
                  onChange={(e) => setFormData(prev => ({ ...prev, otherIndustry: e.target.value }))}
                />
              )}
            </div>

            {/* Year of Establishment */}
            <div className="space-y-2">
              <Label htmlFor="yearEstablished" className="text-base font-semibold">Year of Establishment *</Label>
              <Input
                id="yearEstablished"
                type="number"
                placeholder="e.g., 2018"
                value={formData.yearEstablished}
                onChange={(e) => setFormData(prev => ({ ...prev, yearEstablished: e.target.value }))}
              />
            </div>

            {/* Mission/Vision/Values */}
            <div className="space-y-2">
              <Label htmlFor="missionVision" className="text-base font-semibold">Mission/Vision/Values (Optional)</Label>
              <Textarea
                id="missionVision"
                placeholder="Tell us about your company's mission, vision, or core values"
                value={formData.missionVision}
                onChange={(e) => setFormData(prev => ({ ...prev, missionVision: e.target.value }))}
                rows={3}
              />
            </div>

            {/* Products */}
            <div className="space-y-2">
              <Label htmlFor="products" className="text-base font-semibold">Products *</Label>
              <Textarea
                id="products"
                placeholder="List some example products available in your business (e.g., Premium coffee beans, Handcrafted furniture, Digital marketing services)"
                value={formData.products}
                onChange={(e) => setFormData(prev => ({ ...prev, products: e.target.value }))}
                rows={3}
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
                disabled={!formData.companyTypes.length || !formData.annualRevenue || !formData.industries.length || !formData.yearEstablished || !formData.products}
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

export default CompanyInfo;

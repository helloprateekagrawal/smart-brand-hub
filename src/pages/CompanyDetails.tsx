
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Zap, MapPin, Phone, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CompanyDetails = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    address: "",
    contactNumbers: [""]
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleContactNumberChange = (index: number, value: string) => {
    const updatedNumbers = [...formData.contactNumbers];
    updatedNumbers[index] = value;
    setFormData(prev => ({ ...prev, contactNumbers: updatedNumbers }));
  };

  const addContactNumber = () => {
    setFormData(prev => ({
      ...prev,
      contactNumbers: [...prev.contactNumbers, ""]
    }));
  };

  const removeContactNumber = (index: number) => {
    if (formData.contactNumbers.length > 1) {
      const updatedNumbers = formData.contactNumbers.filter((_, i) => i !== index);
      setFormData(prev => ({ ...prev, contactNumbers: updatedNumbers }));
    }
  };

  const handleSubmit = () => {
    const validContactNumbers = formData.contactNumbers.filter(num => num.trim() !== "");
    if (!formData.address || validContactNumbers.length === 0) {
      alert("Please fill in all required fields");
      return;
    }
    
    // TODO: Save company details
    console.log("Company details:", { ...formData, contactNumbers: validContactNumbers });
    navigate("/app");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                www.silversuits.ai
              </span>
            </Link>
          </div>
        </div>
      </header>

      {/* Company Details Form */}
      <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] py-12">
        <Card className="w-full max-w-lg mx-4">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-gray-900">
              Company Details
            </CardTitle>
            <p className="text-gray-600">Help us set up your business profile</p>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Main Address */}
            <div className="space-y-2">
              <Label htmlFor="address" className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Main Business Address *</span>
              </Label>
              <Textarea
                id="address"
                value={formData.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
                placeholder="Enter your complete business address"
                rows={3}
                required
              />
            </div>

            {/* Contact Numbers */}
            <div className="space-y-3">
              <Label className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>Customer Contact Numbers *</span>
              </Label>
              <p className="text-sm text-gray-600">
                Add phone numbers where customers can reach your business
              </p>
              
              {formData.contactNumbers.map((number, index) => (
                <div key={index} className="flex space-x-2">
                  <Input
                    value={number}
                    onChange={(e) => handleContactNumberChange(index, e.target.value)}
                    placeholder={`Contact number ${index + 1}`}
                    className="flex-1"
                  />
                  {formData.contactNumbers.length > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() => removeContactNumber(index)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
              
              <Button
                type="button"
                variant="outline"
                onClick={addContactNumber}
                className="w-full flex items-center space-x-2"
              >
                <Plus className="h-4 w-4" />
                <span>Add Another Contact Number</span>
              </Button>
            </div>

            {/* Submit Button */}
            <Button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              disabled={!formData.address || !formData.contactNumbers.some(num => num.trim() !== "")}
            >
              Complete Setup
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CompanyDetails;

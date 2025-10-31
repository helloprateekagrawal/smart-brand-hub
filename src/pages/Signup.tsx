
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Zap, Phone, Mail, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    companyName: "",
    phone: "",
    phoneOtp: "",
    email: "",
    emailOtp: "",
    acceptTerms: false
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleGetPhoneOtp = () => {
    // TODO: Implement phone OTP logic
    console.log("Getting phone OTP for:", formData.phone);
  };

  const handleGetEmailOtp = () => {
    // TODO: Implement email OTP logic
    console.log("Getting email OTP for:", formData.email);
  };

  const handleSignup = () => {
    if (!formData.acceptTerms) {
      alert("Please accept the terms and conditions");
      return;
    }
    // TODO: Implement signup logic
    console.log("Signing up with:", formData);
    navigate("/company-details");
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
                wingso.ai
              </span>
            </Link>

            {/* Auth Menu */}
            <div className="flex space-x-4">
              <Link to="/signin">
                <Button variant="outline">Sign In</Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Signup Form */}
      <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] py-12">
        <Card className="w-full max-w-md mx-4">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-gray-900">
              Create Your Account
            </CardTitle>
            <p className="text-gray-600">Join wingso.ai to transform your marketing</p>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Company Name */}
            <div className="space-y-2">
              <Label htmlFor="companyName" className="flex items-center space-x-2">
                <Building2 className="h-4 w-4" />
                <span>Company Name *</span>
              </Label>
              <Input
                id="companyName"
                value={formData.companyName}
                onChange={(e) => handleInputChange("companyName", e.target.value)}
                placeholder="Enter your company name"
                required
              />
            </div>

            {/* Phone Number */}
            <div className="space-y-2">
              <Label htmlFor="phone" className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>Phone Number *</span>
              </Label>
              <div className="flex space-x-2">
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="+91-XXXXXXXXXX"
                  className="flex-1"
                  required
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleGetPhoneOtp}
                  disabled={!formData.phone}
                >
                  Get OTP
                </Button>
              </div>
            </div>

            {/* Phone OTP */}
            <div className="space-y-2">
              <Label htmlFor="phoneOtp">Phone OTP *</Label>
              <Input
                id="phoneOtp"
                value={formData.phoneOtp}
                onChange={(e) => handleInputChange("phoneOtp", e.target.value)}
                placeholder="Enter OTP"
                maxLength={6}
                required
              />
            </div>

            {/* Email (Optional) */}
            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>Email (Optional)</span>
              </Label>
              <div className="flex space-x-2">
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1"
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleGetEmailOtp}
                  disabled={!formData.email}
                >
                  Get OTP
                </Button>
              </div>
            </div>

            {/* Email OTP (Optional) */}
            {formData.email && (
              <div className="space-y-2">
                <Label htmlFor="emailOtp">Email OTP</Label>
                <Input
                  id="emailOtp"
                  value={formData.emailOtp}
                  onChange={(e) => handleInputChange("emailOtp", e.target.value)}
                  placeholder="Enter email OTP"
                  maxLength={6}
                />
              </div>
            )}

            {/* Terms and Conditions */}
            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                checked={formData.acceptTerms}
                onCheckedChange={(checked) => handleInputChange("acceptTerms", checked)}
              />
              <Label htmlFor="terms" className="text-sm">
                By signing up, I accept the{" "}
                <Link to="/terms" className="text-blue-600 hover:underline">
                  Terms & Conditions
                </Link>
              </Label>
            </div>

            {/* Signup Button */}
            <Button
              onClick={handleSignup}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              disabled={!formData.companyName || !formData.phone || !formData.phoneOtp || !formData.acceptTerms}
            >
              Sign Up
            </Button>

            <div className="text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/signin" className="text-blue-600 hover:underline">
                Sign in
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Signup;

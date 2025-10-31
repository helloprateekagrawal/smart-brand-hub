
import { MessageCircle, TrendingUp, FileText, Calendar, BarChart3, DollarSign, CheckCircle, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Features = () => {
  const features = [
    {
      icon: MessageCircle,
      title: "AI Chat Assistant",
      description: "Get instant marketing insights and recommendations through natural conversation",
      details: [
        "24/7 availability for marketing questions",
        "Personalized strategy recommendations",
        "Campaign optimization suggestions",
        "Competitor analysis insights"
      ],
      popular: false
    },
    {
      icon: TrendingUp,
      title: "Trends Engine",
      description: "Stay ahead of the curve with real-time market trend analysis and predictions",
      details: [
        "Industry-specific trend monitoring",
        "Viral content identification",
        "Seasonal pattern analysis",
        "Emerging keyword tracking"
      ],
      popular: true
    },
    {
      icon: FileText,
      title: "Content Generation",
      description: "AI-powered content creation tailored to your brand voice and audience",
      details: [
        "Blog post and article writing",
        "Social media content creation",
        "Email marketing templates",
        "Ad copy optimization"
      ],
      popular: false
    },
    {
      icon: Calendar,
      title: "Content Calendar",
      description: "Automated content planning and scheduling across all your marketing channels",
      details: [
        "Multi-platform scheduling",
        "Optimal timing recommendations",
        "Content performance tracking",
        "Campaign coordination"
      ],
      popular: false
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Deep insights into your marketing performance with actionable recommendations",
      details: [
        "ROI tracking and optimization",
        "Customer journey mapping",
        "Attribution modeling",
        "Predictive analytics"
      ],
      popular: true
    },
    {
      icon: DollarSign,
      title: "Cost Optimization",
      description: "Maximize your marketing budget with intelligent spend allocation and recommendations",
      details: [
        "Budget allocation optimization",
        "Cost-per-acquisition tracking",
        "Channel performance comparison",
        "Waste identification and elimination"
      ],
      popular: false
    }
  ];

  const benefits = [
    "Increase marketing ROI by up to 300%",
    "Save 15+ hours per week on marketing tasks",
    "Get insights equivalent to a $100k+ marketing team",
    "Stay ahead of trends before your competitors",
    "Scale your marketing without scaling your team"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Powerful Features for
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}Modern Marketing
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Everything you need to transform your marketing strategy and accelerate growth. 
              Built specifically for SMBs who want enterprise-level capabilities.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Start Free Trial
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className={`relative border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 ${feature.popular ? 'ring-2 ring-blue-500' : ''}`}>
                {feature.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Star className="h-3 w-3" />
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="pb-4">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-center text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 text-center">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Businesses Choose AI CMO
            </h2>
            <p className="text-lg text-gray-600">
              Real results that matter to your bottom line
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Seamless Integrations
            </h2>
            <p className="text-lg text-gray-600">
              Connect with your existing marketing tools and platforms
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {['Google Analytics', 'Facebook Ads', 'Instagram', 'LinkedIn', 'Shopify', 'WordPress'].map((platform) => (
              <div key={platform} className="bg-gray-100 px-4 py-2 rounded-lg text-center">
                <span className="text-gray-600 font-medium">{platform}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Experience These Features?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Start your free trial today and see the difference AI CMO can make
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;

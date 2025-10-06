import { Shield, FileCheck, UserPlus, Headphones, Building2, Rocket, CheckCircle, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const UseCases = () => {
  const useCases = [
    {
      icon: FileCheck,
      title: "LOS Agent",
      description: "Streamline loan origination with intelligent document processing and risk assessment",
      details: [
        "Automated document verification",
        "Credit risk analysis and scoring",
        "Fraud detection capabilities",
        "Faster application processing"
      ],
      popular: true
    },
    {
      icon: Shield,
      title: "Compliance Agent",
      description: "Ensure regulatory adherence with AI-powered compliance monitoring and reporting",
      details: [
        "Real-time regulatory updates",
        "Automated compliance checks",
        "Audit trail generation",
        "Risk mitigation recommendations"
      ],
      popular: false
    },
    {
      icon: UserPlus,
      title: "Onboarding Accelerator",
      description: "Speed up customer onboarding with intelligent KYC and verification processes",
      details: [
        "Digital KYC automation",
        "Identity verification",
        "Document authenticity checks",
        "Reduced onboarding time"
      ],
      popular: false
    },
    {
      icon: Headphones,
      title: "Customer Support Agent",
      description: "Enhance customer experience with 24/7 intelligent support and query resolution",
      details: [
        "Natural language understanding",
        "Contextual response generation",
        "Multi-channel support",
        "Sentiment analysis"
      ],
      popular: false
    },
    {
      icon: Building2,
      title: "Commercial Insurance Agent",
      description: "Optimize insurance underwriting and claims processing with AI intelligence",
      details: [
        "Risk assessment automation",
        "Claims validation",
        "Policy recommendation engine",
        "Fraud detection"
      ],
      popular: true
    },
    {
      icon: Rocket,
      title: "Go-to-PROD Agent",
      description: "Accelerate development cycles with integrated development and QA testing capabilities",
      details: [
        "Automated code testing",
        "Bug detection and reporting",
        "Deployment validation",
        "Quality assurance automation"
      ],
      popular: false
    }
  ];

  const benefits = [
    "Achieve 3-5x faster processing times across operations",
    "Reduce operational costs by 40-60% with AI automation",
    "Improve compliance accuracy to 99%+",
    "Scale operations without proportional headcount increase",
    "Enhance customer satisfaction with faster response times"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Play Front Foot in the
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}World of AI Agents
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              AI-native use cases that directly impact business metrics—not just another feature in your process. 
              Transform how your BFSI organization operates with intelligent automation.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              onClick={() => window.open('https://wa.me/919876543210?text=Hello%20Prateek%2C%20I%20would%20like%20to%20discuss%20more%21', '_blank')}
            >
              Explore With Us
            </Button>
          </div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className={`relative border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 ${useCase.popular ? 'ring-2 ring-blue-500' : ''}`}>
                {useCase.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Star className="h-3 w-3" />
                      High Impact
                    </span>
                  </div>
                )}
                <CardHeader className="pb-4">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <useCase.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-center text-xl">{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 text-center">{useCase.description}</p>
                  <ul className="space-y-2">
                    {useCase.details.map((detail, detailIndex) => (
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
              Why BFSI Leaders Choose Our AI Agents
            </h2>
            <p className="text-lg text-gray-600">
              Measurable outcomes that transform your bottom line
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
              Enterprise-Grade Integration
            </h2>
            <p className="text-lg text-gray-600">
              Seamlessly integrate with your existing BFSI infrastructure
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {['Core Banking', 'CRM Systems', 'Document Management', 'Analytics Platforms', 'Compliance Tools', 'API Gateway'].map((platform) => (
              <div key={platform} className="bg-gray-100 px-4 py-2 rounded-lg text-center">
                <span className="text-gray-600 font-medium text-sm">{platform}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Deploy AI Agents?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how our AI Coworkers can transform your BFSI operations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-white text-blue-600 hover:bg-gray-100"
              onClick={() => window.open('https://wa.me/919876543210?text=Hello%20Prateek%2C%20I%20would%20like%20to%20discuss%20more%21', '_blank')}
            >
              Explore With Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UseCases;

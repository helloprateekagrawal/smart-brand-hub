
import { ChevronDown, CheckCircle, MessageCircle, TrendingUp, Calendar, BarChart3, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  const features = [
    {
      icon: MessageCircle,
      title: "AI Chat Assistant",
      description: "Get instant marketing insights and recommendations"
    },
    {
      icon: TrendingUp,
      title: "Trends Engine",
      description: "Stay ahead with real-time market trend analysis"
    },
    {
      icon: Calendar,
      title: "Content Calendar",
      description: "Automated content planning and scheduling"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Deep insights into your marketing performance"
    }
  ];

  const faqs = [
    {
      question: "What is AI CMO and how does it work?",
      answer: "AI CMO is an intelligent marketing platform that acts as your virtual Chief Marketing Officer. It analyzes your business data, market trends, and customer behavior to provide actionable marketing insights and automate routine marketing tasks."
    },
    {
      question: "Is AI CMO suitable for small businesses?",
      answer: "Absolutely! AI CMO is specifically designed for SMBs and small brands. We understand the unique challenges small businesses face and provide enterprise-level marketing intelligence at an affordable price point."
    },
    {
      question: "What kind of marketing insights can I expect?",
      answer: "You'll get insights on customer segmentation, content performance, optimal posting times, trending topics in your industry, competitor analysis, and personalized recommendations to improve your marketing ROI."
    },
    {
      question: "How quickly can I see results?",
      answer: "Most users see initial insights within 24-48 hours of setup. Comprehensive trend analysis and deeper insights develop over 2-4 weeks as our AI learns more about your business and audience."
    },
    {
      question: "Do I need technical expertise to use AI CMO?",
      answer: "Not at all! AI CMO is designed to be user-friendly with an intuitive interface. Our AI chat assistant guides you through everything, and our support team is always ready to help."
    },
    {
      question: "What's included in the pricing?",
      answer: "Our plans include the AI chat assistant, trends engine, content calendar, analytics dashboard, and customer support. We offer flexible pricing tiers based on your business size and needs."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Your AI-Powered
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}Chief Marketing Officer
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your marketing strategy with intelligent insights, automated content planning, 
              and real-time trend analysis. Built specifically for SMBs and growing brands.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Everything You Need to Scale Your Marketing
            </h2>
            <p className="text-lg text-gray-600">
              Our comprehensive AI platform covers all aspects of modern marketing
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about AI CMO
            </p>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Marketing?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of growing businesses already using AI CMO
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
            Get Started Today
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

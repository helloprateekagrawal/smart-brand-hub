import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  MessageSquare,
  TrendingUp,
  FileText,
  Calendar,
  BarChart3,
  DollarSign
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion"

const faqData = [
  {
    question: "What is creser.ai?",
    answer: "creser.ai is an AI-powered marketing intelligence platform designed for SMBs and small brands. It provides insights, automation, and growth strategies to help businesses succeed."
  },
  {
    question: "How does creser.ai use AI?",
    answer: "Our AI algorithms analyze marketing data, predict trends, and automate decision-making processes to optimize your marketing efforts."
  },
  {
    question: "Is creser.ai suitable for my business?",
    answer: "creser.ai is designed for SMBs and small brands across various industries. Whether you're in e-commerce, SaaS, or retail, our platform can help you grow."
  },
  {
    question: "Can I try creser.ai for free?",
    answer: "Yes, we offer a free trial so you can experience the benefits of our platform before committing to a subscription."
  },
  {
    question: "What kind of support do you offer?",
    answer: "We provide email and chat support to all our users. Our team is here to help you get the most out of creser.ai."
  }
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                Your Intelligent
                <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  Marketing Partner
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed">
                Transform your business with creser.ai - an AI-powered marketing intelligence platform designed specifically for SMBs and small brands. Get insights, automation, and growth strategies that work.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4 text-lg">
                  Start Free Trial
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-4 text-lg">
                  Watch Demo
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Preview */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Everything You Need to Grow
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                creser.ai combines powerful AI with intuitive design to give you the marketing intelligence you need to succeed.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: MessageSquare,
                  title: "AI Chat Assistant",
                  description: "Get instant marketing advice and strategy recommendations through our intelligent chat interface."
                },
                {
                  icon: TrendingUp,
                  title: "Trends Engine",
                  description: "Stay ahead of the curve with real-time trend analysis and predictive insights for your industry."
                },
                {
                  icon: FileText,
                  title: "Content Creation",
                  description: "Generate high-quality marketing content tailored to your brand voice and audience."
                },
                {
                  icon: Calendar,
                  title: "Content Calendar",
                  description: "Plan, schedule, and manage your content strategy with our intelligent calendar system."
                },
                {
                  icon: BarChart3,
                  title: "Advanced Analytics",
                  description: "Track performance, measure ROI, and optimize your marketing campaigns with detailed insights."
                },
                {
                  icon: DollarSign,
                  title: "Cost Optimization",
                  description: "Maximize your marketing budget with AI-driven cost analysis and optimization recommendations."
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg w-fit mb-6">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Marketing?
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Join thousands of SMBs already using creser.ai to drive growth and increase revenue.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 font-semibold px-8 py-4 text-lg">
              Get Started Today
            </Button>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to know about creser.ai
              </p>
            </div>

            <Accordion type="single" collapsible>
              {faqData.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;

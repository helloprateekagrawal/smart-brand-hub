import { ChevronDown, CheckCircle, MessageCircle, TrendingUp, Calendar, BarChart3, DollarSign, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
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
      icon: TrendingUp,
      title: "Massive Scale with Limited Resources",
      description: "Deploy AI Coworkers to handle high-volume tasks, enabling your team to scale operations without proportional headcount increases"
    },
    {
      icon: Users,
      title: "Increased User Acquisition & Retention",
      description: "AI Agent swarms discover dormant customers, re-engage inactive users, and identify new prospects with precision targeting"
    },
    {
      icon: BarChart3,
      title: "Win-Win Upselling & Cross-Selling",
      description: "Context-aware agents identify optimal opportunities for product expansion that genuinely benefit both customers and business metrics"
    },
    {
      icon: MessageCircle,
      title: "Faster Time-to-Market",
      description: "Development and QA Testing agents work in tandem with Safety Agents to accelerate go-to-PROD cycles while maintaining quality and compliance"
    }
  ];

  const agents = [
    {
      title: "Discovery Agent",
      description: "Identifies new customers and re-engages dormant users through intelligent pattern recognition"
    },
    {
      title: "Win Agent",
      description: "Converts prospects into customers using contextual intelligence and optimal engagement strategies"
    },
    {
      title: "Loyalty Agent",
      description: "Builds lasting relationships through personalized upsell and cross-sell opportunities that add genuine value"
    },
    {
      title: "Orchestrator Agent",
      description: "Empowers product managers and admins with coordinated development and QA testing capabilities for rapid deployment"
    },
    {
      title: "Contextual Agent",
      description: "Applies human-like reasoning and context to complement BFSI officials in complex decision-making processes"
    },
    {
      title: "Safety Agent",
      description: "Ensures human-in-the-loop oversight and maintains system integrity across all AI operations"
    }
  ];

  const faqs = [
    {
      question: "Why do we need AI Coworkers?",
      answer: "BFSI functions are manpower-heavy, creating multiple risk points and bottlenecks. AI Coworkers build consistency, reduce human error, and scale processes with limited resources while maintaining quality."
    },
    {
      question: "My systems are already automated. Do I still need AI Coworkers?",
      answer: "AI Coworkers operate at a higher intelligence layer. While automation handles repetitive tasks, 20-50% of outputs still require manual review. Our agents apply contextual thinking to these cases, providing intelligent recommendations so BFSI officials can make faster, better-informed decisions."
    },
    {
      question: "I don't want full automation - what if something goes wrong?",
      answer: "We always maintain human-in-the-loop through our Safety Agent, which ensures AI suggestions are reviewed before execution. You remain in control while benefiting from AI intelligence."
    },
    {
      question: "What about data security and compliance?",
      answer: "Absolutely secure. All regulatory requirements are strictly followed, with enterprise-grade encryption and compliance measures integrated into our multi-LLM architecture for BFSI operations."
    },
    {
      question: "How long until we see real outcomes?",
      answer: "This depends on your specific structure and processes. We'd love to discuss your unique situation and provide a tailored timeline estimate for measurable results."
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
              AI Coworkers for your
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}BFSI Segment
              </span>
              {" "}to Scale
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We deploy a swarm of AI Agents that build contextual intelligence for your BFSI operations. 
              These AI Coworkers work alongside your team, understanding the nuances of your business to deliver 
              measurable results across every function—from customer acquisition to compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                onClick={() => window.open('https://wa.me/917381732333?text=Hello%20Prateek.%20I%20would%20like%20to%20discuss%20more%20about%20the%20%22contextual%20intelligence%22%20solution', '_blank')}
              >
                Explore With Us
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
              Real Business Value Through AI Intelligence
            </h2>
            <p className="text-lg text-gray-600">
              Measurable improvements your BFSI organization will experience with AI Coworkers
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

      {/* AI Agents Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Your AI Agent Team
            </h2>
            <p className="text-lg text-gray-600">
              Specialized agents working together to transform your BFSI operations
            </p>
          </div>
          
          <div className="overflow-x-auto pb-4">
            <div className="flex gap-6 min-w-max px-4">
              {agents.map((agent, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 w-80 flex-shrink-0">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {agent.title}
                    </h3>
                    <p className="text-gray-600">{agent.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
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
            Ready to Transform Your BFSI Operations?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join forward-thinking financial institutions already scaling with AI intelligence
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            className="bg-white text-blue-600 hover:bg-gray-100"
            onClick={() => window.open('https://wa.me/917381732333?text=Hello%20Prateek.%20I%20would%20like%20to%20discuss%20more%20about%20the%20%22contextual%20intelligence%22%20solution', '_blank')}
          >
            Let's Get Started
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

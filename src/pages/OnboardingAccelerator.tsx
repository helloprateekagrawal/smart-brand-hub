import { ArrowRight, CheckCircle, X, Check, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const OnboardingAccelerator = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Every customer drop-off has a context.
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}We uncover it. And convert them
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Human-like voice agents outperform scripted calls and IVRs. Our contextual AI identifies why each application was abandoned—confusion, document gaps, sourcing issues, or market friction—and empowers voice AI to resolve these blockers with personalized, context-rich guidance at scale.
            </p>
          </div>
        </div>
      </section>

      {/* Context -> Conversation -> Conversion */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Context <ArrowRight className="inline h-8 w-8 text-blue-600" /> Conversation <ArrowRight className="inline h-8 w-8 text-blue-600" /> Conversion
              </h2>
            </div>
            <div className="space-y-6">
              <Card className="border-l-4 border-l-blue-600">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-3 text-gray-900">Context Extracted</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Current application:</strong> Business user + dropped off at "loan amount" field</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Past trends:</strong> User is confused about how to calculate loan amount</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Internal documents:</strong> Loan calculator details, best time to call</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-600">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-3 text-gray-900">Voice AI Engages</h3>
                  <p className="text-gray-600">
                    Voice AI calls the user and counsels them to understand their goals, working capital needs, inventory requirements, and business specifics—all within the context of their application stage.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-600">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-3 text-gray-900">Conversion</h3>
                  <p className="text-gray-600">
                    User returns to the platform with clarity + new applications flow in with better completion rates
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How This Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How This Works
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Context is extracted from multiple sources to power intelligent conversations
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              "Web Search",
              "Officer Notes",
              "Current Application",
              "Past Trends",
              "Customer Behaviour",
              "Channel Context",
              "Market Context",
              "Internal Documents"
            ].map((source, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-sm font-medium text-gray-700">{source}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before vs After */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Before vs After
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Before */}
            <Card className="border-2 border-red-200 bg-red-50/50">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <X className="h-6 w-6 text-red-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Before</h3>
                </div>
                <p className="text-sm text-gray-600 mb-4 font-semibold">Traditional Call / IVR / Manual Follow-Up</p>
                <p className="text-xs text-red-700 mb-6 font-medium bg-red-100 p-3 rounded-lg">
                  ⚠️ Huge operations cost and complexity
                </p>

                <ul className="space-y-3 mb-6">
                  {[
                    "Calls sound scripted",
                    "No understanding of the application stage",
                    "Agent asks the same basic questions again",
                    "No idea why customer dropped off",
                    "Incorrect or incomplete guidance",
                    "Escalations everywhere",
                    "High attrition → missed calls → lost conversions"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <X className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-white p-4 rounded-lg border border-red-200">
                  <p className="text-sm font-semibold text-gray-900 mb-2">❌ Scripted Call Example:</p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p><strong>Agent:</strong> "Hello sir, you applied for a loan. Please complete your application."</p>
                    <p><strong>Customer:</strong> "I was checking eligibility…"</p>
                    <p><strong>Agent:</strong> "Okay sir, please try again."</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* After */}
            <Card className="border-2 border-green-200 bg-green-50/50">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <Check className="h-6 w-6 text-green-600" />
                  <h3 className="text-2xl font-bold text-gray-900">After</h3>
                </div>
                <p className="text-sm text-gray-600 mb-4 font-semibold">Contextual Voice AI by Silver Suits</p>
                <p className="text-xs text-green-700 mb-6 font-medium bg-green-100 p-3 rounded-lg">
                  ✨ Easy scalability with simpler operations
                </p>

                <ul className="space-y-3 mb-6">
                  {[
                    "Voice AI already knows the customer's exact blocker",
                    "Conversation starts with their context",
                    "Real-time resolution of missing documents",
                    "Objection handling based on eligibility logic",
                    "Personalized explanation of product options",
                    "Zero wait time, zero manpower",
                    "Higher conversion rate on drop-off recovery"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <p className="text-sm font-semibold text-gray-900 mb-2">✅ Contextual Call Example:</p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p><strong>Voice AI:</strong> "Hi Rajesh, I noticed you dropped off at the income-proof step because you didn't have your latest payslip. You can upload your bank statement instead. Want me to send you the link?"</p>
                    <p><strong>Customer:</strong> "Oh perfect, yes please."</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <PhoneCall className="h-16 w-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stop losing high-intent customers.
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Start recovering them with contextual voice intelligence.
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            className="bg-white text-blue-600 hover:bg-gray-100"
            onClick={() => window.open('https://api.whatsapp.com/send/?phone=917381732333&text=Hello+Prateek.+I+would+like+to+discuss+more+about+the+%22contextual+intelligence%22+solution+for+onboarding&type=phone_number&app_absent=0', '_blank')}
          >
            Talk to Us
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OnboardingAccelerator;

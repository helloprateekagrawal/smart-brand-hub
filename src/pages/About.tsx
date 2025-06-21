
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Target, Award, Zap } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Prateek Agrawal",
      role: "CEO & Co-Founder",
      description: "2+ years of experience as Product Manager, B.Tech from IIT Madras",
      image: "/placeholder.svg"
    },
    {
      name: "To be announced",
      role: "CTO & Co-Founder",
      description: "Technical leadership and innovation",
      image: "/placeholder.svg"
    },
    {
      name: "To be announced", 
      role: "CPO & Co-Founder",
      description: "Product strategy and development",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                About creser.ai
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                We are building an AI CMO which works as a marketing intelligence layer for SMBs and small brands
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  At creser.ai, we believe that every small and medium business deserves access to world-class marketing intelligence. Our AI-powered platform democratizes sophisticated marketing strategies, making them accessible and affordable for businesses of all sizes.
                </p>
                <p className="text-lg text-gray-600">
                  We're revolutionizing how SMBs approach marketing by providing an intelligent layer that analyzes data, predicts trends, and automates decision-making processes that were once only available to large enterprises.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Target className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900">Targeted</h3>
                    <p className="text-sm text-gray-600">Precision marketing</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Zap className="h-8 w-8 text-purple-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900">Intelligent</h3>
                    <p className="text-sm text-gray-600">AI-powered insights</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Founded in 2025, creser.ai emerged from a simple observation: small businesses were struggling to compete in an increasingly complex digital marketing landscape.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Problem Identified</h3>
                <p className="text-gray-600">
                  We noticed that SMBs lacked access to sophisticated marketing intelligence tools that could help them compete effectively.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Solution Created</h3>
                <p className="text-gray-600">
                  We developed an AI CMO that works as an intelligent marketing layer, providing insights and automation previously available only to large corporations.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Impact Delivered</h3>
                <p className="text-gray-600">
                  Today, we're empowering hundreds of small businesses to make data-driven marketing decisions and achieve sustainable growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Meet Our Team
              </h2>
              <p className="text-lg text-gray-600">
                The passionate individuals building the future of marketing intelligence
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-8 text-center">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Values
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation</h3>
                <p className="text-gray-600">
                  We constantly push the boundaries of what's possible in marketing technology.
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Accessibility</h3>
                <p className="text-gray-600">
                  We make sophisticated tools accessible to businesses of all sizes.
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Transparency</h3>
                <p className="text-gray-600">
                  We believe in clear, honest communication and transparent AI processes.
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Impact</h3>
                <p className="text-gray-600">
                  We measure our success by the growth and success of our clients.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;

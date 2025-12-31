
import { Users, Target, Lightbulb, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Contextual Intelligence",
      description: "Building AI Coworkers that understand the nuances of BFSI operations beyond rules and automation"
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "Leveraging cutting-edge AI to solve real challenges faced by financial institutions"
    },
    {
      icon: Users,
      title: "Human-AI Collaboration",
      description: "Empowering BFSI professionals with AI that complements human decision-making"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering exceptional results through intelligent automation"
    }
  ];

  const team = [
    {
      name: "Prateek Agrawal",
      role: "CEO & Co-Founder",
      description: "2+ years of experience as Product Manager | National Winner in Denmark | NUS | B.Tech from IIT Madras"
    },
    {
      name: "Pratham Goyal",
      role: "CTO & Co-Founder", 
      description: "2+ years of experience as Software Developer | Microsoft | Maverick Derivatives | B.Tech from IIT Roorkee"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-muted via-background to-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About silversuits.ai
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              We're building AI Coworkers for BFSI organizations, leveraging swarms of intelligent agents 
              to create contextual intelligence that transforms how financial institutions operate and scale.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
          </div>
          
          <div className="prose prose-lg mx-auto text-muted-foreground">
            <p className="text-lg leading-relaxed mb-6">
              Founded in 2025, silversuits.ai was born from deep experience in Fortune 500 BFSI companies where our founders 
              saved millions by dramatically improving operational workflows and reducing inefficiencies.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              Having witnessed the massive potential of AI in transforming financial services operations, our team—led by 
              <span className="font-semibold text-foreground"> IIT Madras and IIT Roorkee</span> alumni—set out to democratize enterprise-grade AI intelligence 
              for BFSI organizations of all sizes.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              Today, silversuits.ai deploys swarms of specialized AI agents that build contextual intelligence across BFSI functions. 
              From customer acquisition to compliance, from risk assessment to accelerated development cycles—we're transforming 
              how financial institutions scale their operations while maintaining the highest standards of security and regulatory compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground">The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="gradient-brand p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-card-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground">The experts behind silversuits.ai</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 gradient-brand rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {member.name === "To be announced" ? "TBA" : member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-1 text-card-foreground">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-brand">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your BFSI Operations?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Join forward-thinking financial institutions scaling with AI intelligence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
              onClick={() => window.open('https://wa.me/917381732333?text=Hello%20Prateek.%20I%20would%20like%20to%20discuss%20more%20about%20the%20%22contextual%20intelligence%22%20solution', '_blank')}
            >
              Let's Get Started
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;

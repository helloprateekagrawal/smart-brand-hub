
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Users, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get in touch with our team",
      detail: "prateek@silversuits.ai",
      action: "Send Email"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak with our experts",
      detail: "+91 738 173 2333",
      action: "Call Now"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Chat with us directly",
      detail: "Coming Soon",
      action: "Coming Soon"
    },
    {
      icon: Headphones,
      title: "Support Center",
      description: "Browse our help resources",
      detail: "Coming Soon",
      action: "Coming Soon"
    }
  ];

  const officeInfo = [
    {
      icon: MapPin,
      label: "Address",
      value: "235, Binnamangala, 2nd Floor, 13th Cross Road, 2nd Stage, Indira Nagar, Bengaluru - 560038"
    },
    {
      icon: Clock,
      label: "Business Hours",
      value: "Monday - Friday: 9:00 AM - 6:00 PM IST"
    },
    {
      icon: Users,
      label: "Team Size",
      value: "Expert AI & BFSI Team"
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
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Have questions about AI Agents for BFSI? We'd love to hear from you. 
              Our team is here to help you transform your financial services operations.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <CardContent className="p-6">
                  <div className="gradient-brand p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <method.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-card-foreground">{method.title}</h3>
                  <p className="text-muted-foreground mb-2">{method.description}</p>
                  <p className="text-primary font-medium mb-4">{method.detail}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <p className="text-muted-foreground">Fill out the form below and we'll get back to you within 24 hours.</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" placeholder="John" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" placeholder="Doe" className="mt-1" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" type="email" placeholder="john@company.com" className="mt-1" />
                </div>
                
                <div>
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" placeholder="Your Company Name" className="mt-1" />
                </div>
                
                <div>
                  <Label htmlFor="subject">Subject *</Label>
                  <Input id="subject" placeholder="How can we help you?" className="mt-1" />
                </div>
                
                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us more about your challenges and goals..."
                    className="mt-1 min-h-32"
                  />
                </div>
                
                <Button 
                  className="w-full gradient-brand hover:gradient-brand-hover text-white"
                  onClick={() => window.open('https://wa.me/917381732333?text=Hello%20Prateek.%20I%20would%20like%20to%20discuss%20more%20about%20the%20%22contextual%20intelligence%22%20solution', '_blank')}
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Office Info */}
            <div className="space-y-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Visit Our Office</CardTitle>
                  <p className="text-muted-foreground">We'd love to meet you in person.</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  {officeInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-card-foreground">{info.label}</p>
                        <p className="text-muted-foreground">{info.value}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-brand">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Don't wait - transform your strategy today
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            className="bg-white text-primary hover:bg-white/90"
            onClick={() => window.open('https://wa.me/917381732333?text=Hello%20Prateek.%20I%20would%20like%20to%20discuss%20more%20about%20the%20%22contextual%20intelligence%22%20solution', '_blank')}
          >
            Explore With Us
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;

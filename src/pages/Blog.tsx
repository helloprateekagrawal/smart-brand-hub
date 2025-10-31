
import { Calendar, User, ArrowRight, Clock, Tag } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Blog = () => {
  const featuredPost = {
    title: "The Future of AI Agents in BFSI: 2025 Transformation",
    excerpt: "Discover how AI agent swarms are revolutionizing banking and financial services operations through contextual intelligence.",
    author: "P A",
    date: "July 2025",
    readTime: "8 min read",
    category: "AI & BFSI",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=400&fit=crop"
  };

  const blogPosts = [
    {
      title: "10 AI Agent Strategies for BFSI Transformation",
      excerpt: "Learn proven tactics for deploying AI agents that scale BFSI operations without proportional cost increases.",
      author: "P A",
      date: "July 2025",
      readTime: "6 min read",
      category: "AI Strategy",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop"
    },
    {
      title: "Compliance Automation: The Safety Agent Advantage",
      excerpt: "How human-in-the-loop AI maintains regulatory compliance while accelerating operations in financial services.",
      author: "P A",
      date: "July 2025",
      readTime: "5 min read",
      category: "Compliance",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop"
    },
    {
      title: "Measuring ROI: AI Agent Impact on BFSI Metrics",
      excerpt: "Essential KPIs every BFSI organization should track when deploying AI Coworkers across operations.",
      author: "P A",
      date: "July 2025",
      readTime: "7 min read",
      category: "Analytics",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop"
    },
    {
      title: "Customer Acquisition Trends in Digital Banking 2025",
      excerpt: "Stay ahead with insights into how Discovery and Win Agents are reshaping customer acquisition strategies.",
      author: "P A",
      date: "July 2025",
      readTime: "4 min read",
      category: "Customer Growth",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=250&fit=crop"
    },
    {
      title: "LOS Agent Revolution: Faster Loan Processing",
      excerpt: "Discover how AI-powered loan origination systems are delivering 5x faster processing with better accuracy.",
      author: "P A",
      date: "July 2025",
      readTime: "6 min read",
      category: "Operations",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop"
    },
    {
      title: "Contextual Intelligence: The Future of BFSI Decision Making",
      excerpt: "Learn how contextual agents complement human expertise to enable faster, more accurate financial decisions.",
      author: "P A",
      date: "July 2025",
      readTime: "5 min read",
      category: "AI Intelligence",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop"
    }
  ];

  const categories = [
    "All Posts",
    "AI & Technology", 
    "Marketing Strategy",
    "Content Marketing",
    "Analytics",
    "Social Media",
    "Email Marketing",
    "Customer Experience"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Marketing Insights & 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}Expert Advice
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Stay ahead of the curve with our latest articles on AI marketing, growth strategies, 
              and industry insights specifically crafted for SMBs.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className={index === 0 ? "bg-gradient-to-r from-blue-600 to-purple-600" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Featured Article</h2>
          </div>
          
          <Card className="border-0 shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-2/5">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-3/5">
                <CardHeader className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      <Tag className="h-3 w-3 inline mr-1" />
                      {featuredPost.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {featuredPost.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    <Button variant="ghost" className="text-blue-600 hover:text-blue-700" disabled>
                      Upcoming
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </CardHeader>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Latest Articles</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </div>
                    </div>
                    <span>{post.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated with Our Latest Insights
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get weekly marketing tips and AI insights delivered straight to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
            />
            <Button variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;

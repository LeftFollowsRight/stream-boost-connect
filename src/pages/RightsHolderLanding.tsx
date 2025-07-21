import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Users, TrendingUp, Play, DollarSign, Target } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RightsHolderLanding = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSignup = () => {
    if (email) {
      console.log(`Signing up with email: ${email}`);
      navigate('/rights-holders/dashboard');
    } else {
      alert('Please enter your email address');
    }
  };

  const handleLogin = () => {
    navigate('/rights-holders/login');
  };

  const handleDemo = () => {
    navigate('/rights-holders/demo');
  };

  const stats = [
    { label: "Active Creators", value: "50,000+", icon: Users },
    { label: "Monthly Reach", value: "25M+", icon: TrendingUp },
    { label: "Avg Revenue Increase", value: "340%", icon: DollarSign },
    { label: "Successful Campaigns", value: "1,200+", icon: Target },
  ];

  const featuredEvents = [
    {
      title: "Premier League Final Day",
      date: "28 May 2024",
      image: "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=800&h=400&fit=crop&auto=format",
      creators: 245,
      reach: "12.5M",
      sponsorValue: "£850K"
    },
    {
      title: "Wimbledon Championships",
      date: "15 July 2024", 
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=400&fit=crop&auto=format",
      creators: 180,
      reach: "8.2M",
      sponsorValue: "£620K"
    },
    {
      title: "F1 British Grand Prix",
      date: "7 July 2024",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop&auto=format", 
      creators: 320,
      reach: "18.7M",
      sponsorValue: "£1.2M"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-slate-900">StreamSports Pro</div>
          <div className="flex gap-4">
            <Button 
              variant="ghost" 
              size="sm"
              className="text-slate-600 hover:text-slate-900"
              onClick={handleLogin}
            >
              Login
            </Button>
            <Button 
              size="sm"
              className="bg-slate-900 text-white hover:bg-slate-800"
              onClick={handleSignup}
            >
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Turn Your Sports Rights Into
              <span className="text-orange-400"> £Millions in Revenue</span>
            </h1>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Premier League to F1 - amplify your sports content through our verified creator network. 
              Reach 25M+ monthly viewers with data-driven partnerships that deliver real ROI.
            </p>
            
            {/* Email Signup */}
            <div className="max-w-md mx-auto mb-8">
              <div className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="Enter your business email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20"
                  onKeyPress={(e) => e.key === 'Enter' && handleSignup()}
                />
                <Button 
                  size="lg"
                  className="bg-orange-500 text-white hover:bg-orange-600 px-8"
                  onClick={handleSignup}
                >
                  Get Started
                </Button>
              </div>
              <p className="text-sm mt-2 opacity-75">Join 500+ sports organisations • Average ROI: 340%</p>
            </div>

            {/* Trust Badges */}
            <div className="flex justify-center gap-6 mb-12 flex-wrap">
              <Badge variant="outline" className="bg-white/10 border-white/20 text-white">
                Enterprise Grade Security
              </Badge>
              <Badge variant="outline" className="bg-white/10 border-white/20 text-white">
                99.9% Uptime SLA
              </Badge>
              <Badge variant="outline" className="bg-white/10 border-white/20 text-white">
                24/7 Support
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all hover:scale-105 bg-white border-slate-200">
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-slate-700" />
                <div className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</div>
                <div className="text-slate-600">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">Recent Success Stories</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              See how top sports organisations maximised their reach and revenue through our platform
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {featuredEvents.map((event, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all hover:scale-105 group cursor-pointer bg-white border-slate-200">
                <div className="relative h-48">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/800x400/1e293b/ffffff?text=${encodeURIComponent(event.title)}`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <Badge className="bg-green-500 text-white mb-2">
                      COMPLETED
                    </Badge>
                    <h3 className="text-lg font-bold">{event.title}</h3>
                    <p className="text-sm opacity-90">{event.date}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-slate-900">{event.creators}</div>
                      <div className="text-sm text-slate-600">Creators</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-slate-900">{event.reach}</div>
                      <div className="text-sm text-slate-600">Total Reach</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-orange-500">{event.sponsorValue}</div>
                      <div className="text-sm text-slate-600">Sponsor Value</div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">The Complete Sports Streaming Solution</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From creator discovery to sponsor reporting - everything you need to maximise your sports content ROI
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-xl transition-all hover:scale-105 relative overflow-hidden bg-white border-slate-200">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-transparent rounded-full -translate-y-16 translate-x-16" />
              <BarChart3 className="h-12 w-12 text-slate-700 mb-4 relative z-10" />
              <h3 className="text-xl font-semibold mb-4 text-slate-900">AI-Powered Creator Clustering</h3>
              <p className="text-slate-600 mb-4">
                Our machine learning algorithms analyse audience overlap, demographics, and engagement patterns to create optimal creator combinations that maximise reach without cannibalisation.
              </p>
              <div className="text-sm font-medium text-slate-700">
                • 340% average reach increase<br/>
                • Zero audience overlap guarantee<br/>
                • Real-time ROI projections<br/>
                • Demographic heat mapping
              </div>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all hover:scale-105 relative overflow-hidden bg-white border-slate-200">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-slate-700/10 to-transparent rounded-full -translate-y-16 translate-x-16" />
              <Play className="h-12 w-12 text-slate-700 mb-4 relative z-10" />
              <h3 className="text-xl font-semibold mb-4 text-slate-900">Verified Creator Ecosystem</h3>
              <p className="text-slate-600 mb-4">
                Access 50,000+ verified creators across YouTube, Twitch, and Meta with proven track records in sports content. Full rights compliance and quality guaranteed.
              </p>
              <div className="text-sm font-medium text-slate-700">
                • Platform-native streaming<br/>
                • Rights compliance certified<br/>
                • Quality content standards<br/>
                • 24/7 creator support
              </div>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all hover:scale-105 relative overflow-hidden bg-white border-slate-200">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-transparent rounded-full -translate-y-16 translate-x-16" />
              <DollarSign className="h-12 w-12 text-slate-700 mb-4 relative z-10" />
              <h3 className="text-xl font-semibold mb-4 text-slate-900">Enterprise Sponsor Reporting</h3>
              <p className="text-slate-600 mb-4">
                Demonstrate clear ROI to sponsors with real-time metrics, engagement analytics, and revenue attribution across all creator partnerships. Export ready pitch decks.
              </p>
              <div className="text-sm font-medium text-slate-700">
                • Live performance dashboards<br/>
                • Automated sponsor reports<br/>
                • Revenue attribution models<br/>
                • Custom analytics APIs
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Scale Your Sports Content?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join leading sports organizations who've increased their reach by 340% through strategic creator partnerships.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-orange-500 text-white hover:bg-orange-600 px-8 py-6 text-lg"
              onClick={handleDemo}
            >
              Schedule Demo
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white/10 border-white/20 text-white hover:bg-white/20 px-8 py-6 text-lg"
              onClick={() => navigate('/case-studies')}
            >
              View Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-100 py-12 border-t border-slate-200">
        <div className="container mx-auto px-4 text-center">
          <div className="text-2xl font-bold mb-4 text-slate-900">StreamSports Pro</div>
          <p className="text-slate-600">
            Connecting sports rights holders with creator networks for maximum fan engagement
          </p>
        </div>
      </footer>
    </div>
  );
};

export default RightsHolderLanding;

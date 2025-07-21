import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Users, TrendingUp, Play, DollarSign, Target } from "lucide-react";
import { useState } from "react";

const RightsHolderLanding = () => {
  const [email, setEmail] = useState("");

  const stats = [
    { label: "Active Creators", value: "50,000+", icon: Users },
    { label: "Monthly Reach", value: "25M+", icon: TrendingUp },
    { label: "Avg Revenue Increase", value: "340%", icon: DollarSign },
    { label: "Successful Campaigns", value: "1,200+", icon: Target },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border/40 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">StreamSports Pro</div>
          <div className="flex gap-4">
            <Button variant="ghost" size="sm">Login</Button>
            <Button variant="professional" size="sm">Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-professional text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Amplify Your Sports Content to 
              <span className="text-[hsl(var(--sports-accent))]"> Millions of Engaged Fans</span>
            </h1>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Turn your sports rights into revenue through our verified creator network. 
              Reach 25M+ monthly viewers with data-driven creator partnerships.
            </p>
            
            {/* Email Signup */}
            <div className="max-w-md mx-auto mb-8">
              <div className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="Enter your business email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
                <Button variant="sports-accent" size="lg">
                  Get Started
                </Button>
              </div>
              <p className="text-sm mt-2 opacity-75">Join 500+ sports organizations</p>
            </div>

            {/* Trust Badges */}
            <div className="flex justify-center gap-6 mb-12">
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
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 text-center hover-scale">
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Maximize Reach with Data-Driven Partnerships</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our platform connects you with the perfect creator mix to amplify your sports content
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover-scale">
              <BarChart3 className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4">Intelligent Creator Clustering</h3>
              <p className="text-muted-foreground mb-4">
                Our AI analyzes audience overlap and demographics to create optimal creator combinations that maximize reach without cannibalization.
              </p>
              <div className="text-sm font-medium text-primary">
                • 340% average reach increase
                • Demographic optimization
                • Real-time ROI projections
              </div>
            </Card>

            <Card className="p-8 hover-scale">
              <Play className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4">Verified Creator Network</h3>
              <p className="text-muted-foreground mb-4">
                Access 50,000+ verified creators across YouTube, Twitch, and Meta with proven track records in sports content streaming.
              </p>
              <div className="text-sm font-medium text-primary">
                • Platform-native streaming
                • Rights compliance guaranteed
                • Quality content standards
              </div>
            </Card>

            <Card className="p-8 hover-scale">
              <DollarSign className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4">Sponsor ROI Tracking</h3>
              <p className="text-muted-foreground mb-4">
                Demonstrate clear value to sponsors with real-time metrics, engagement analytics, and revenue attribution across all creator partnerships.
              </p>
              <div className="text-sm font-medium text-primary">
                • Live performance dashboards
                • Sponsor value reporting
                • Revenue attribution models
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-professional text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Scale Your Sports Content?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join leading sports organizations who've increased their reach by 340% through strategic creator partnerships.
          </p>
          <Button variant="sports-accent" size="xl" className="mr-4">
            Schedule Demo
          </Button>
          <Button variant="outline" size="xl" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
            View Case Studies
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/20 py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="text-2xl font-bold mb-4">StreamSports Pro</div>
          <p className="text-muted-foreground">
            Connecting sports rights holders with creator networks for maximum fan engagement
          </p>
        </div>
      </footer>
    </div>
  );
};

export default RightsHolderLanding;
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Gamepad2, Zap, DollarSign, Calendar, Users, Trophy, Youtube, Twitch } from "lucide-react";

const CreatorLanding = () => {
  const upcomingEvents = [
    { 
      name: "Premier League Final Day", 
      date: "28 May", 
      earnings: "£2,500-£8,000",
      image: "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=600&h=300&fit=crop",
      sponsors: ["Sky Sports", "Vodafone", "Barclays"],
      status: "LIVE"
    },
    { 
      name: "Wimbledon Championships", 
      date: "15 July", 
      earnings: "£1,800-£6,500",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=300&fit=crop",
      sponsors: ["BBC Sport", "Rolex", "Evian"],
      status: "SOON"
    },
    { 
      name: "F1 British Grand Prix", 
      date: "7 July", 
      earnings: "£3,200-£12,000",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=300&fit=crop",
      sponsors: ["Sky F1", "Red Bull", "Mercedes"],
      status: "HOT"
    },
  ];

  const creatorStats = [
    { label: "Top Creator Earnings", value: "£45K/month", icon: DollarSign },
    { label: "Average Event Payout", value: "£2.5K", icon: Trophy },
    { label: "Monthly Events", value: "150+", icon: Calendar },
  ];

  return (
    <div className="min-h-screen theme-gaming">
      {/* Navigation */}
      <nav className="border-b border-border/40 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-[hsl(var(--creator-primary))] to-[hsl(var(--creator-primary-hover))] bg-clip-text text-transparent">
            StreamSports Creator
          </div>
          <div className="flex gap-4">
            <Button variant="ghost" size="sm">Login</Button>
            <Button variant="gaming" size="sm">Join Network</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-gaming text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 animate-pulse"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-[hsl(var(--creator-live))] text-white animate-pulse">
              🔴 LIVE OPPORTUNITIES
            </Badge>
            
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Stream Premium Sports Content
              <span className="block text-[hsl(var(--creator-primary))] glow-gaming"> Legally & Profitably</span>
            </h1>
            
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Join leading creators earning from major sporting events. Full rights clearance, 
              exclusive content, and massive audience growth opportunities.
            </p>
            
            {/* OAuth Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button variant="gaming" size="xl" className="gap-3">
                <Twitch className="h-5 w-5" />
                Connect Twitch
              </Button>
              <Button variant="gaming" size="xl" className="gap-3">
                <Youtube className="h-5 w-5" />
                Connect YouTube
              </Button>
              <Button variant="outline" size="xl" className="gap-3 bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Users className="h-5 w-5" />
                Connect Meta
              </Button>
            </div>

            <p className="text-sm opacity-75">Join 50,000+ verified creators • No upfront costs</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {creatorStats.map((stat, index) => (
              <Card key={index} className="p-6 text-center hover-scale glow-gaming bg-card border-[hsl(var(--creator-border))]">
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-[hsl(var(--creator-primary))]" />
                <div className="text-3xl font-bold text-[hsl(var(--creator-primary))] mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Upcoming Premium Events</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stream the biggest sporting events with full rights clearance and sponsor partnerships
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="overflow-hidden hover-scale bg-card border-[hsl(var(--creator-border))] relative group cursor-pointer">
                <div className="relative h-48">
                  <img 
                    src={event.image} 
                    alt={event.name}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  
                  <div className="absolute top-4 right-4">
                    <Badge className={`
                      ${event.status === 'LIVE' ? 'bg-[hsl(var(--creator-live))] animate-pulse' : ''}
                      ${event.status === 'HOT' ? 'bg-[hsl(var(--creator-success))]' : ''}
                      ${event.status === 'SOON' ? 'bg-[hsl(var(--creator-primary))]' : ''}
                      text-white font-bold
                    `}>
                      {event.status}
                    </Badge>
                  </div>
                  
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-2xl font-bold mb-1">{event.earnings}</div>
                    <div className="text-sm opacity-90">Potential earnings</div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{event.name}</h3>
                  <p className="text-muted-foreground mb-3">{event.date}</p>
                  
                  <div className="mb-4">
                    <div className="text-xs text-muted-foreground mb-2">SPONSORS</div>
                    <div className="flex flex-wrap gap-1">
                      {event.sponsors.map((sponsor, sponsorIndex) => (
                        <Badge key={sponsorIndex} variant="outline" className="text-xs border-[hsl(var(--creator-border))]">
                          {sponsor}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button variant="gaming" className="w-full shadow-[var(--shadow-gaming)]">
                    Apply to Stream
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg" className="border-[hsl(var(--creator-primary))] text-[hsl(var(--creator-primary))] hover:bg-[hsl(var(--creator-primary))]/10">
              View All Events
            </Button>
          </div>
        </div>
      </section>

      {/* Creator Benefits */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Why Top Creators Choose Us</h2>
            <p className="text-xl text-muted-foreground">
              Level up your content and earnings with premium sports streaming
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover-scale bg-card border-[hsl(var(--creator-border))]">
              <Zap className="h-12 w-12 text-[hsl(var(--creator-primary))] mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-foreground">Instant Growth</h3>
              <p className="text-muted-foreground mb-4">
                Stream premium sports content that your audience can't find anywhere else. Average 300% viewership increase during events with full DMCA protection.
              </p>
              <div className="text-sm font-medium text-[hsl(var(--creator-success))]">
                • Exclusive content access
                • No DMCA strikes
                • Built-in audience
              </div>
            </Card>

            <Card className="p-8 hover-scale bg-card border-[hsl(var(--creator-border))]">
              <DollarSign className="h-12 w-12 text-[hsl(var(--creator-success))] mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-foreground">Multiple Revenue Streams</h3>
              <p className="text-muted-foreground mb-4">
                Earn from event streaming, sponsor integrations, and audience growth. Top creators earn £45K+ monthly with multiple revenue streams.
              </p>
              <div className="text-sm font-medium text-[hsl(var(--creator-success))]">
                • Guaranteed event payouts
                • Sponsor partnership bonuses
                • Audience growth rewards
              </div>
            </Card>

            <Card className="p-8 hover-scale bg-card border-[hsl(var(--creator-border))]">
              <Gamepad2 className="h-12 w-12 text-[hsl(var(--creator-primary))] mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-foreground">Gaming-First Platform</h3>
              <p className="text-muted-foreground mb-4">
                Built by creators, for creators. Seamless integration with your existing setup and streaming tools.
              </p>
              <div className="text-sm font-medium text-[hsl(var(--creator-primary))]">
                • One-click streaming setup
                • Creator dashboard
                • Community support
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gaming text-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-pink-600/30"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">Ready to Level Up Your Content?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join the creator network that's revolutionizing sports streaming. Start earning from premium content today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gaming" size="xl" className="gap-3 glow-gaming">
              <Twitch className="h-5 w-5" />
              Start with Twitch
            </Button>
            <Button variant="success" size="xl" className="gap-3">
              <Youtube className="h-5 w-5" />
              Start with YouTube
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card/50 py-12 border-t border-[hsl(var(--creator-border))]">
        <div className="container mx-auto px-4 text-center">
          <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-[hsl(var(--creator-primary))] to-[hsl(var(--creator-primary-hover))] bg-clip-text text-transparent">
            StreamSports Creator
          </div>
          <p className="text-muted-foreground">
            Empowering creators to monetize premium sports content legally and profitably
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CreatorLanding;
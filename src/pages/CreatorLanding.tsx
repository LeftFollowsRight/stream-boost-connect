import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Gamepad2, Zap, DollarSign, Calendar, Users, Trophy, Youtube, Twitch } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CreatorLanding = () => {
  const navigate = useNavigate();

  const handleAuth = (platform) => {
    // For now, navigate to a dashboard - you can add actual OAuth later
    console.log(`Authenticating with ${platform}`);
    navigate('/creators/dashboard');
  };

  const handleApplyToStream = (eventName) => {
    console.log(`Applying to stream: ${eventName}`);
    navigate('/creators/dashboard');
  };

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
    <div className="min-h-screen bg-slate-900">
      {/* Navigation */}
      <nav className="border-b border-slate-800 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            StreamSports Creator
          </div>
          <div className="flex gap-4">
            <Button 
              variant="ghost" 
              size="sm"
              className="text-slate-300 hover:text-white hover:bg-slate-800"
              onClick={() => handleAuth('existing')}
            >
              Login
            </Button>
            <Button 
              size="sm"
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
              onClick={() => handleAuth('signup')}
            >
              Join Network
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-red-500 text-white animate-pulse hover:bg-red-600">
              🔴 LIVE OPPORTUNITIES
            </Badge>
            
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Stream Premium Sports Content
              <span className="block text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                Legally & Profitably
              </span>
            </h1>
            
            <p className="text-xl mb-8 opacity-90 leading-relaxed text-slate-300">
              Join leading creators earning from major sporting events. Full rights clearance, 
              exclusive content, and massive audience growth opportunities.
            </p>
            
            {/* OAuth Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                size="lg" 
                className="gap-3 bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg"
                onClick={() => handleAuth('twitch')}
              >
                <Twitch className="h-5 w-5" />
                Connect Twitch
              </Button>
              <Button 
                size="lg" 
                className="gap-3 bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg"
                onClick={() => handleAuth('youtube')}
              >
                <Youtube className="h-5 w-5" />
                Connect YouTube
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="gap-3 bg-blue-600/20 border-blue-400/50 text-blue-400 hover:bg-blue-600/30 px-8 py-6 text-lg"
                onClick={() => handleAuth('meta')}
              >
                <Users className="h-5 w-5" />
                Connect Meta
              </Button>
            </div>

            <p className="text-sm opacity-75 text-slate-400">Join 50,000+ verified creators • No upfront costs</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {creatorStats.map((stat, index) => (
              <Card key={index} className="p-6 text-center bg-slate-800 border-slate-700 hover:bg-slate-700 transition-all hover:scale-105">
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-blue-400" />
                <div className="text-3xl font-bold text-blue-400 mb-2">{stat.value}</div>
                <div className="text-slate-300">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Upcoming Premium Events</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Stream the biggest sporting events with full rights clearance and sponsor partnerships
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="overflow-hidden bg-slate-800 border-slate-700 hover:scale-105 transition-all group cursor-pointer">
                <div className="relative h-48">
                  <img 
                    src={event.image} 
                    alt={event.name}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  
                  <div className="absolute top-4 right-4">
                    <Badge className={`
                      ${event.status === 'LIVE' ? 'bg-red-500 animate-pulse' : ''}
                      ${event.status === 'HOT' ? 'bg-orange-500' : ''}
                      ${event.status === 'SOON' ? 'bg-blue-500' : ''}
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
                  <h3 className="text-lg font-semibold mb-2 text-white">{event.name}</h3>
                  <p className="text-slate-400 mb-3">{event.date}</p>
                  
                  <div className="mb-4">
                    <div className="text-xs text-slate-400 mb-2">SPONSORS</div>
                    <div className="flex flex-wrap gap-1">
                      {event.sponsors.map((sponsor, sponsorIndex) => (
                        <Badge key={sponsorIndex} variant="outline" className="text-xs border-slate-600 text-slate-300">
                          {sponsor}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white"
                    onClick={() => handleApplyToStream(event.name)}
                  >
                    Apply to Stream
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-blue-400 text-blue-400 hover:bg-blue-400/10"
              onClick={() => navigate('/creators/events')}
            >
              View All Events
            </Button>
          </div>
        </div>
      </section>

      {/* Creator Benefits */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Why Top Creators Choose Us</h2>
            <p className="text-xl text-slate-300">
              Level up your content and earnings with premium sports streaming
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-slate-800 border-slate-700 hover:scale-105 transition-all">
              <Zap className="h-12 w-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-white">Instant Growth</h3>
              <p className="text-slate-300 mb-4">
                Stream premium sports content that your audience can't find anywhere else. Average 300% viewership increase during events with full DMCA protection.
              </p>
              <div className="text-sm font-medium text-green-400">
                • Exclusive content access<br/>
                • No DMCA strikes<br/>
                • Built-in audience
              </div>
            </Card>

            <Card className="p-8 bg-slate-800 border-slate-700 hover:scale-105 transition-all">
              <DollarSign className="h-12 w-12 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-white">Multiple Revenue Streams</h3>
              <p className="text-slate-300 mb-4">
                Earn from event streaming, sponsor integrations, and audience growth. Top creators earn £45K+ monthly with multiple revenue streams.
              </p>
              <div className="text-sm font-medium text-green-400">
                • Guaranteed event payouts<br/>
                • Sponsor partnership bonuses<br/>
                • Audience growth rewards
              </div>
            </Card>

            <Card className="p-8 bg-slate-800 border-slate-700 hover:scale-105 transition-all">
              <Gamepad2 className="h-12 w-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-white">Gaming-First Platform</h3>
              <p className="text-slate-300 mb-4">
                Built by creators, for creators. Seamless integration with your existing setup and streaming tools.
              </p>
              <div className="text-sm font-medium text-purple-400">
                • One-click streaming setup<br/>
                • Creator dashboard<br/>
                • Community support
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 text-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">Ready to Level Up Your Content?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join the creator network that's revolutionizing sports streaming. Start earning from premium content today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="gap-3 bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg"
              onClick={() => handleAuth('twitch')}
            >
              <Twitch className="h-5 w-5" />
              Start with Twitch
            </Button>
            <Button 
              size="lg" 
              className="gap-3 bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg"
              onClick={() => handleAuth('youtube')}
            >
              <Youtube className="h-5 w-5" />
              Start with YouTube
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800/50 py-12 border-t border-slate-700">
        <div className="container mx-auto px-4 text-center">
          <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            StreamSports Creator
          </div>
          <p className="text-slate-400">
            Empowering creators to monetize premium sports content legally and profitably
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CreatorLanding;

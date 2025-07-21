import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Building2, Gamepad2, Users, DollarSign } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LandingSelector = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Welcome to StreamSports</h1>
          <p className="text-xl text-muted-foreground">
            Choose your path to premium sports streaming
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Rights Holder Path */}
          <Card className="p-8 hover-scale cursor-pointer border-2 hover:border-primary/50 transition-all duration-300" 
                onClick={() => navigate('/rights-holders')}>
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Building2 className="h-8 w-8 text-primary" />
              </div>
              
              <h2 className="text-2xl font-bold mb-4">Rights Holders</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Sports organizations, leagues, and broadcasters looking to maximize content reach through creator partnerships
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-sm">
                  <Users className="h-4 w-4 text-primary" />
                  <span>Access 50,000+ verified creators</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <DollarSign className="h-4 w-4 text-primary" />
                  <span>340% average reach increase</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Building2 className="h-4 w-4 text-primary" />
                  <span>Enterprise-grade platform</span>
                </div>
              </div>
              
              <Button variant="professional" className="w-full" size="lg">
                Explore B2B Platform
              </Button>
            </div>
          </Card>

          {/* Creator Path */}
          <Card className="p-8 hover-scale cursor-pointer border-2 hover:border-[hsl(var(--creator-primary))]/50 transition-all duration-300 relative overflow-hidden" 
                onClick={() => navigate('/creators')}>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5"></div>
            <div className="text-center relative z-10">
              <div className="mx-auto w-16 h-16 bg-[hsl(var(--creator-primary))]/10 rounded-full flex items-center justify-center mb-6">
                <Gamepad2 className="h-8 w-8 text-[hsl(var(--creator-primary))]" />
              </div>
              
              <h2 className="text-2xl font-bold mb-4">Content Creators</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Streamers, YouTubers, and content creators ready to monetize premium sports content legally
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-sm">
                  <DollarSign className="h-4 w-4 text-[hsl(var(--creator-success))]" />
                  <span>Up to $45K monthly earnings</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Gamepad2 className="h-4 w-4 text-[hsl(var(--creator-primary))]" />
                  <span>Premium sports content access</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Users className="h-4 w-4 text-[hsl(var(--creator-primary))]" />
                  <span>Massive audience growth</span>
                </div>
              </div>
              
              <Button variant="gaming" className="w-full glow-gaming" size="lg">
                Join Creator Network
              </Button>
            </div>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Not sure which path is right for you? 
            <Button variant="link" className="p-0 ml-1 h-auto">
              Contact our team
            </Button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingSelector;
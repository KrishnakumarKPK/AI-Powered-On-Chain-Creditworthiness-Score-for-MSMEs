import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Briefcase, ArrowRight } from "lucide-react";

const RoleSelection = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center p-4 gradient-hero">
      <div className="w-full max-w-4xl animate-fade-in">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Choose Your Role</h1>
          <p className="text-xl text-white/80">How would you like to continue?</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* MSME Card */}
          <Card className="p-8 glass-card hover:shadow-2xl transition-all duration-300 cursor-pointer group">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Building2 className="h-10 w-10 text-primary" />
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-2">I'm an MSME</h2>
                <p className="text-muted-foreground mb-6">
                  Get your creditworthiness score and digital passport
                </p>
              </div>

              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Submit proof-of-data for scoring</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Get AI-generated credit score</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Mint blockchain-verified NFT passport</span>
                </li>
              </ul>

              <Button
                className="w-full gradient-hero"
                size="lg"
                onClick={() => navigate("/msme/dashboard")}
              >
                Continue as MSME
              </Button>
            </div>
          </Card>

          {/* Lender Card */}
          <Card className="p-8 glass-card hover:shadow-2xl transition-all duration-300 cursor-pointer group">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                <Briefcase className="h-10 w-10 text-secondary" />
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-2">I'm a Lender</h2>
                <p className="text-muted-foreground mb-6">
                  Verify MSME credit scores and digital passports
                </p>
              </div>

              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Verify NFT digital passports</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Access verified credit scores</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Manage verified MSME database</span>
                </li>
              </ul>

              <Button
                className="w-full"
                variant="secondary"
                size="lg"
                onClick={() => navigate("/lender/dashboard")}
              >
                Continue as Lender
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;

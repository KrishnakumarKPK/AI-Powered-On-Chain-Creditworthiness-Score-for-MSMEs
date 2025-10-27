import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardSidebar from "@/components/DashboardSidebar";
import ScoreGauge from "@/components/ScoreGauge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Loader2, TrendingUp, Calendar, Hash, Award } from "lucide-react";
import { toast } from "sonner";

const Score = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [hasScore] = useState(true); // Mock data - set to true to show score

  // Mock score data
  const scoreData = {
    score: 78,
    riskLevel: "Low Risk",
    submissionDate: "2025-10-20",
    documentHash: "0x7f8a9b2c...",
    factors: [
      { name: "Payment History", score: 85, weight: "35%" },
      { name: "Credit Utilization", score: 72, weight: "30%" },
      { name: "Business Age", score: 68, weight: "15%" },
      { name: "Revenue Consistency", score: 82, weight: "20%" },
    ],
  };

  const handleMintNFT = () => {
    setIsLoading(true);
    setTimeout(() => {
      toast.success("NFT Passport minted successfully!", {
        description: "Your digital credit passport is now on the blockchain",
      });
      setIsLoading(false);
      navigate("/msme/passport");
    }, 2000);
  };

  if (!hasScore) {
    return (
      <div className="flex min-h-screen w-full bg-background">
        <DashboardSidebar role="msme" />
        
        <main className="flex-1 ml-64 p-8">
          <div className="max-w-4xl mx-auto">
            <Card className="p-12 glass-card text-center">
              <Loader2 className="h-16 w-16 mx-auto mb-6 text-primary animate-spin" />
              <h2 className="text-2xl font-bold mb-2">Processing Your Data</h2>
              <p className="text-muted-foreground mb-8">
                Our AI is analyzing your submissions. This usually takes 2-5 minutes.
              </p>
              <Button variant="outline" onClick={() => navigate("/msme/dashboard")}>
                Back to Dashboard
              </Button>
            </Card>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen w-full bg-background">
      <DashboardSidebar role="msme" />
      
      <main className="flex-1 ml-64 p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Your Credit Score</h1>
            <p className="text-muted-foreground">AI-generated creditworthiness assessment</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Score Display */}
            <div className="space-y-6">
              <ScoreGauge score={scoreData.score} />
              
              <Card className="p-6 glass-card">
                <h3 className="font-semibold mb-4 flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-primary" />
                  Score Details
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Generated On</span>
                    <span className="font-medium">{scoreData.submissionDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Document Hash</span>
                    <span className="font-medium font-mono">{scoreData.documentHash}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Status</span>
                    <Badge variant="default">Verified</Badge>
                  </div>
                </div>
              </Card>
            </div>

            {/* Score Factors */}
            <div className="space-y-6">
              <Card className="p-6 glass-card">
                <h3 className="font-semibold mb-4 flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-primary" />
                  Score Breakdown
                </h3>
                <div className="space-y-4">
                  {scoreData.factors.map((factor, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{factor.name}</span>
                        <span className="text-muted-foreground">{factor.weight}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full gradient-hero rounded-full transition-all duration-1000"
                            style={{ width: `${factor.score}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium w-10 text-right">{factor.score}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6 glass-card bg-gradient-to-br from-primary/5 to-secondary/5">
                <Award className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Ready to Mint Your Passport?</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Convert your score into a blockchain-verified NFT that lenders can trust
                </p>
                <Button
                  className="w-full gradient-hero"
                  onClick={handleMintNFT}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Minting NFT...
                    </>
                  ) : (
                    <>Mint Digital Credit Passport</>
                  )}
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Score;

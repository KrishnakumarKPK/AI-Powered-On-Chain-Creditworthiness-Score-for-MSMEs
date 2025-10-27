import { useState } from "react";
import DashboardSidebar from "@/components/DashboardSidebar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { CreditCard, Share2, Copy, ExternalLink, Calendar, Hash, Award } from "lucide-react";
import { toast } from "sonner";

const Passport = () => {
  const [shareLink, setShareLink] = useState("");

  // Mock NFT data
  const nftData = {
    id: "NFT#ALG78234",
    score: 78,
    riskLevel: "Low Risk",
    issueDate: "2025-10-20",
    walletAddress: "ALGO7F8A9B2C3D4E5F6G7H8I9J0K",
    transactionHash: "0x7f8a9b2c3d4e5f6g7h8i9j0k1l2m3n4o5p",
    verified: true,
  };

  const handleGenerateLink = () => {
    const link = `${window.location.origin}/verify/${nftData.id}`;
    setShareLink(link);
    toast.success("Verification link generated!");
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareLink);
    toast.success("Link copied to clipboard!");
  };

  return (
    <div className="flex min-h-screen w-full bg-background">
      <DashboardSidebar role="msme" />
      
      <main className="flex-1 ml-64 p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Digital Credit Passport</h1>
            <p className="text-muted-foreground">Your blockchain-verified NFT credential</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* NFT Card Display */}
            <Card className="p-8 glass-card gradient-hero text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24" />
              
              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between">
                  <CreditCard className="h-8 w-8" />
                  <Badge className="bg-white/20 text-white border-0">
                    Verified
                  </Badge>
                </div>

                <div>
                  <div className="text-sm opacity-80 mb-1">Credit Score</div>
                  <div className="text-5xl font-bold">{nftData.score}</div>
                  <div className="text-sm opacity-80 mt-1">{nftData.riskLevel}</div>
                </div>

                <div className="space-y-2 text-sm">
                  <div>
                    <div className="opacity-80 mb-1">NFT ID</div>
                    <div className="font-mono">{nftData.id}</div>
                  </div>
                  <div>
                    <div className="opacity-80 mb-1">Wallet Address</div>
                    <div className="font-mono truncate">{nftData.walletAddress}</div>
                  </div>
                  <div>
                    <div className="opacity-80 mb-1">Issued On</div>
                    <div>{nftData.issueDate}</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/20">
                  <div className="text-xs opacity-80">Powered by Algorand Blockchain</div>
                </div>
              </div>
            </Card>

            {/* NFT Details */}
            <div className="space-y-6">
              <Card className="p-6 glass-card">
                <h3 className="font-semibold mb-4 flex items-center">
                  <Award className="h-5 w-5 mr-2 text-primary" />
                  Passport Details
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 p-3 bg-muted/50 rounded-lg">
                    <Hash className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium mb-1">Transaction Hash</div>
                      <div className="text-xs font-mono text-muted-foreground break-all">
                        {nftData.transactionHash}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 bg-muted/50 rounded-lg">
                    <Calendar className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-medium mb-1">Issue Date</div>
                      <div className="text-sm text-muted-foreground">{nftData.issueDate}</div>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => window.open(`https://algoexplorer.io/tx/${nftData.transactionHash}`, "_blank")}
                  >
                    View on Algorand Explorer
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>

              {/* Share Section */}
              <Card className="p-6 glass-card">
                <h3 className="font-semibold mb-4 flex items-center">
                  <Share2 className="h-5 w-5 mr-2 text-primary" />
                  Share with Lenders
                </h3>
                
                {!shareLink ? (
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Generate a verification link to share your credit passport with potential lenders
                    </p>
                    <Button
                      className="w-full gradient-hero"
                      onClick={handleGenerateLink}
                    >
                      Generate Verification Link
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex gap-2">
                      <Input
                        value={shareLink}
                        readOnly
                        className="font-mono text-sm"
                      />
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={handleCopyLink}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Lenders can verify your passport authenticity using this link
                    </p>
                  </div>
                )}
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Passport;

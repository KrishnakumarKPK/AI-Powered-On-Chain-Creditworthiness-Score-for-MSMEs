import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import DashboardSidebar from "@/components/DashboardSidebar";
import ScoreGauge from "@/components/ScoreGauge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, CheckCircle, AlertTriangle, Calendar, Hash, ExternalLink } from "lucide-react";
import { toast } from "sonner";

const Verify = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
  const [verificationResult, setVerificationResult] = useState<any>(null);
  const [isSearching, setIsSearching] = useState(false);

  // Mock verification data
  const mockData = {
    valid: true,
    nftId: "NFT#ALG78234",
    score: 78,
    riskLevel: "Low Risk",
    msme: "Tech Solutions Ltd",
    walletAddress: "ALGO7F8A9B2C3D4E5F6G7H8I9J0K",
    issueDate: "2025-10-20",
    transactionHash: "0x7f8a9b2c3d4e5f6g7h8i9j0k1l2m3n4o5p",
    verifications: 3,
  };

  const handleVerify = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    if (!searchQuery) {
      toast.error("Please enter a Passport ID or Wallet Address");
      return;
    }

    setIsSearching(true);
    
    // Simulate API call
    setTimeout(() => {
      setVerificationResult(mockData);
      setIsSearching(false);
      toast.success("Passport verified successfully!");
    }, 1500);
  };

  const handleAddToVerified = () => {
    toast.success("MSME added to verified list!");
    setTimeout(() => {
      navigate("/lender/verified");
    }, 1000);
  };

  return (
    <div className="flex min-h-screen w-full bg-background">
      <DashboardSidebar role="lender" />
      
      <main className="flex-1 ml-64 p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Verify NFT Passport</h1>
            <p className="text-muted-foreground">Authenticate MSME credit passports on the blockchain</p>
          </div>

          {/* Search Card */}
          <Card className="p-6 glass-card">
            <form onSubmit={handleVerify} className="flex gap-3">
              <Input
                placeholder="Enter Passport ID (e.g., NFT#ALG78234) or Wallet Address"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button type="submit" className="gradient-hero whitespace-nowrap" disabled={isSearching}>
                <Search className="mr-2 h-4 w-4" />
                {isSearching ? "Verifying..." : "Verify"}
              </Button>
            </form>
          </Card>

          {/* Verification Result */}
          {verificationResult && (
            <div className="space-y-8 animate-fade-in">
              {/* Status Banner */}
              <Card className={`p-6 ${verificationResult.valid ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
                <div className="flex items-center space-x-4">
                  {verificationResult.valid ? (
                    <>
                      <CheckCircle className="h-12 w-12 text-green-600" />
                      <div>
                        <h3 className="text-xl font-semibold text-green-900">Valid Passport</h3>
                        <p className="text-green-700">This credit passport is authentic and verified on-chain</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <AlertTriangle className="h-12 w-12 text-red-600" />
                      <div>
                        <h3 className="text-xl font-semibold text-red-900">Invalid Passport</h3>
                        <p className="text-red-700">This passport could not be verified or has been revoked</p>
                      </div>
                    </>
                  )}
                </div>
              </Card>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Score Display */}
                <div className="space-y-6">
                  <ScoreGauge score={verificationResult.score} />
                  
                  <Card className="p-6 glass-card">
                    <h3 className="font-semibold mb-4">MSME Information</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Business Name</span>
                        <span className="font-medium">{verificationResult.msme}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Times Verified</span>
                        <Badge variant="secondary">{verificationResult.verifications}</Badge>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Passport Details */}
                <div className="space-y-6">
                  <Card className="p-6 glass-card">
                    <h3 className="font-semibold mb-4">Passport Details</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3 p-3 bg-muted/50 rounded-lg">
                        <Hash className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium mb-1">NFT ID</div>
                          <div className="text-sm font-mono">{verificationResult.nftId}</div>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3 p-3 bg-muted/50 rounded-lg">
                        <Calendar className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="text-sm font-medium mb-1">Issue Date</div>
                          <div className="text-sm text-muted-foreground">{verificationResult.issueDate}</div>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3 p-3 bg-muted/50 rounded-lg">
                        <Hash className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium mb-1">Wallet Address</div>
                          <div className="text-xs font-mono text-muted-foreground break-all">
                            {verificationResult.walletAddress}
                          </div>
                        </div>
                      </div>

                      <Button
                        variant="outline"
                        className="w-full"
                        onClick={() => window.open(`https://algoexplorer.io/tx/${verificationResult.transactionHash}`, "_blank")}
                      >
                        View on Algorand Explorer
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </Card>

                  <Button
                    className="w-full gradient-hero"
                    onClick={handleAddToVerified}
                  >
                    Add to Verified List
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Verify;

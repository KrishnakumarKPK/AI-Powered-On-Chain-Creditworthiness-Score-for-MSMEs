import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardSidebar from "@/components/DashboardSidebar";
import WalletConnect from "@/components/WalletConnect";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, CheckCircle, Users, TrendingUp, FileCheck } from "lucide-react";
import { toast } from "sonner";

const LenderDashboard = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery) {
      navigate(`/lender/verify?q=${searchQuery}`);
    } else {
      toast.error("Please enter a Passport ID or Wallet Address");
    }
  };

  // Mock data
  const recentVerifications = [
    { id: "NFT#ALG78234", msme: "Tech Solutions Ltd", score: 78, date: "2025-10-20" },
    { id: "NFT#ALG65421", msme: "Green Energy Co", score: 82, date: "2025-10-19" },
    { id: "NFT#ALG54321", msme: "Retail Innovations", score: 71, date: "2025-10-18" },
  ];

  return (
    <div className="flex min-h-screen w-full bg-background">
      <DashboardSidebar role="lender" />
      
      <main className="flex-1 ml-64 p-8">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header */}
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold mb-2">Lender Dashboard</h1>
              <p className="text-muted-foreground">Verify MSME credit passports and manage your portfolio</p>
            </div>
            <WalletConnect />
          </div>

          {/* Search Section */}
          <Card className="p-8 glass-card gradient-hero text-white">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <Search className="h-12 w-12 mx-auto" />
              <div>
                <h2 className="text-2xl font-bold mb-2">Verify Credit Passport</h2>
                <p className="opacity-90">
                  Enter a Passport ID or Wallet Address to verify authenticity
                </p>
              </div>
              
              <form onSubmit={handleSearch} className="flex gap-3">
                <Input
                  placeholder="Enter Passport ID (e.g., NFT#ALG78234) or Wallet Address"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20"
                />
                <Button type="submit" variant="secondary" className="whitespace-nowrap">
                  <Search className="mr-2 h-4 w-4" />
                  Verify
                </Button>
              </form>
            </div>
          </Card>

          {/* Stats Overview */}
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="p-6 glass-card">
              <Users className="h-8 w-8 text-primary mb-3" />
              <div className="text-2xl font-bold mb-1">24</div>
              <div className="text-sm text-muted-foreground">Verified MSMEs</div>
            </Card>
            <Card className="p-6 glass-card">
              <CheckCircle className="h-8 w-8 text-green-500 mb-3" />
              <div className="text-2xl font-bold mb-1">48</div>
              <div className="text-sm text-muted-foreground">Total Verifications</div>
            </Card>
            <Card className="p-6 glass-card">
              <TrendingUp className="h-8 w-8 text-primary mb-3" />
              <div className="text-2xl font-bold mb-1">76</div>
              <div className="text-sm text-muted-foreground">Avg Credit Score</div>
            </Card>
            <Card className="p-6 glass-card">
              <FileCheck className="h-8 w-8 text-primary mb-3" />
              <div className="text-2xl font-bold mb-1">12</div>
              <div className="text-sm text-muted-foreground">This Month</div>
            </Card>
          </div>

          {/* Recent Verifications */}
          <Card className="p-6 glass-card">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">Recent Verifications</h3>
              <Button variant="outline" onClick={() => navigate("/lender/verified")}>
                View All
              </Button>
            </div>
            
            <div className="space-y-4">
              {recentVerifications.map((verification) => (
                <div
                  key={verification.id}
                  className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center text-white font-bold">
                      {verification.score}
                    </div>
                    <div>
                      <div className="font-medium">{verification.msme}</div>
                      <div className="text-sm text-muted-foreground">{verification.id}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">{verification.date}</div>
                    <CheckCircle className="h-5 w-5 text-green-500 ml-auto mt-1" />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default LenderDashboard;

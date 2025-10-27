import DashboardSidebar from "@/components/DashboardSidebar";
import WalletConnect from "@/components/WalletConnect";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  TrendingUp,
  Upload,
  CreditCard,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const MSMEDashboard = () => {
  const navigate = useNavigate();
  
  // Mock data - in real app, this would come from API/state
  const hasScore = false;
  const isProcessing = false;

  return (
    <div className="flex min-h-screen w-full bg-background">
      <DashboardSidebar role="msme" />
      
      <main className="flex-1 ml-64 p-8">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header */}
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold mb-2">MSME Dashboard</h1>
              <p className="text-muted-foreground">Manage your credit profile and digital passport</p>
            </div>
            <WalletConnect />
          </div>

          {/* Status Card */}
          <Card className="p-6 glass-card">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                {!hasScore && !isProcessing && (
                  <>
                    <AlertCircle className="h-12 w-12 text-yellow-500" />
                    <div>
                      <h3 className="text-xl font-semibold">No Credit Score Yet</h3>
                      <p className="text-muted-foreground">Submit your proof-of-data to get started</p>
                    </div>
                  </>
                )}
                {isProcessing && (
                  <>
                    <Clock className="h-12 w-12 text-primary animate-pulse-glow" />
                    <div>
                      <h3 className="text-xl font-semibold">Processing Your Data</h3>
                      <p className="text-muted-foreground">AI is analyzing your submissions</p>
                    </div>
                  </>
                )}
                {hasScore && (
                  <>
                    <CheckCircle className="h-12 w-12 text-green-500" />
                    <div>
                      <h3 className="text-xl font-semibold">Score Ready</h3>
                      <p className="text-muted-foreground">Your credit score is available</p>
                    </div>
                  </>
                )}
              </div>
              <Badge variant={hasScore ? "default" : "secondary"} className="text-sm px-4 py-2">
                {hasScore ? "Active" : "Pending"}
              </Badge>
            </div>
          </Card>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card
              className="p-6 glass-card hover:shadow-xl transition-all cursor-pointer group"
              onClick={() => navigate("/msme/submit")}
            >
              <Upload className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold mb-2">Submit Data</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Upload invoices, utility bills, or payment history
              </p>
              <Button className="w-full gradient-hero">
                Get Started
              </Button>
            </Card>

            <Card
              className="p-6 glass-card hover:shadow-xl transition-all cursor-pointer group"
              onClick={() => navigate("/msme/score")}
            >
              <TrendingUp className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold mb-2">View Score</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Check your AI-generated credit risk assessment
              </p>
              <Button variant="outline" className="w-full" disabled={!hasScore}>
                View Details
              </Button>
            </Card>

            <Card
              className="p-6 glass-card hover:shadow-xl transition-all cursor-pointer group"
              onClick={() => navigate("/msme/passport")}
            >
              <CreditCard className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold mb-2">Digital Passport</h3>
              <p className="text-sm text-muted-foreground mb-4">
                View and share your blockchain-verified NFT
              </p>
              <Button variant="outline" className="w-full" disabled={!hasScore}>
                View Passport
              </Button>
            </Card>
          </div>

          {/* Stats Overview */}
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="p-4 glass-card">
              <div className="text-2xl font-bold mb-1">0</div>
              <div className="text-sm text-muted-foreground">Submissions</div>
            </Card>
            <Card className="p-4 glass-card">
              <div className="text-2xl font-bold mb-1">-</div>
              <div className="text-sm text-muted-foreground">Credit Score</div>
            </Card>
            <Card className="p-4 glass-card">
              <div className="text-2xl font-bold mb-1">-</div>
              <div className="text-sm text-muted-foreground">Risk Level</div>
            </Card>
            <Card className="p-4 glass-card">
              <div className="text-2xl font-bold mb-1">0</div>
              <div className="text-sm text-muted-foreground">NFTs Minted</div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MSMEDashboard;

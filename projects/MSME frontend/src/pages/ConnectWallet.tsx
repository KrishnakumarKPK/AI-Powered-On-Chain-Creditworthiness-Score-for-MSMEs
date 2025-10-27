import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Loader2 } from "lucide-react";
import { toast } from "sonner";
import peraLogo from "@/assets/pera-wallet-logo.png";

const ConnectWallet = () => {
  const navigate = useNavigate();
  const [isConnecting, setIsConnecting] = useState(false);
  const [connected, setConnected] = useState(false);
  const [address, setAddress] = useState("");

  const handleConnect = () => {
    setIsConnecting(true);
    // Simulate Pera Wallet connection
    setTimeout(() => {
      const mockAddress = "ALGO" + Math.random().toString(36).substring(2, 15).toUpperCase();
      setAddress(mockAddress);
      setConnected(true);
      setIsConnecting(false);
      toast.success("Pera Wallet connected successfully!", {
        description: `Address: ${mockAddress.substring(0, 10)}...`,
      });
      // Navigate back after successful connection
      setTimeout(() => navigate(-1), 2000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center p-4">
      <Card className="glass-card w-full max-w-2xl p-8 md:p-12 animate-scale-in">
        <div className="text-center space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold gradient-text">
              Connect Your Pera Wallet
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Securely authenticate and manage your Algorand identity with Pera Wallet.
            </p>
          </div>

          {/* Pera Wallet Logo with Algorand Integration */}
          <div className="flex justify-center items-center py-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl rounded-full" />
              <div className="relative bg-card border-2 border-primary/20 rounded-3xl p-8 hover-lift transition-smooth">
                <img 
                  src={peraLogo} 
                  alt="Pera Wallet" 
                  className="w-32 h-32 md:w-40 md:h-40 object-contain"
                />
                {/* Algorand "A" Symbol Overlay */}
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-algorand-primary to-algorand-secondary rounded-full p-4 border-4 border-background shadow-xl">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                    <path d="M2 17L12 22L22 17" />
                    <path d="M2 12L12 17L22 12" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Connection Status or Button */}
          {connected ? (
            <div className="space-y-4 animate-fade-in">
              <div className="flex items-center justify-center space-x-3 text-primary">
                <CheckCircle className="w-8 h-8 animate-pulse-glow" />
                <span className="text-xl font-semibold">Connected Successfully!</span>
              </div>
              <div className="bg-muted/50 border border-primary/20 rounded-lg p-4 font-mono text-sm">
                {address}
              </div>
              <p className="text-sm text-muted-foreground">
                Redirecting you back...
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              <Button
                onClick={handleConnect}
                disabled={isConnecting}
                className="gradient-hero hover:shadow-xl hover:shadow-primary/30 text-lg px-12 py-6 h-auto transition-smooth hover-lift"
              >
                {isConnecting ? (
                  <>
                    <Loader2 className="mr-3 h-5 w-5 animate-spin" />
                    Connecting...
                  </>
                ) : (
                  <>
                    <svg className="mr-3 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                      <path d="M2 17L12 22L22 17" />
                      <path d="M2 12L12 17L22 12" />
                    </svg>
                    Connect Pera Wallet
                  </>
                )}
              </Button>

              <div className="pt-4 space-y-4">
                <div className="bg-muted/30 border border-border/50 rounded-lg p-4">
                  <p className="text-xs text-muted-foreground">
                    <span className="font-semibold block mb-2 text-foreground">What happens next?</span>
                    • Your Pera Wallet will open in a new window<br />
                    • Review and approve the connection request<br />
                    • Your wallet address will be securely linked
                  </p>
                </div>

                <p className="text-xs text-muted-foreground">
                  By connecting your wallet, you agree to our Terms of Service and Privacy Policy
                </p>
              </div>
            </div>
          )}

          {/* Back Button */}
          {!connected && (
            <Button
              variant="ghost"
              onClick={() => navigate(-1)}
              className="mt-4"
            >
              Go Back
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
};

export default ConnectWallet;

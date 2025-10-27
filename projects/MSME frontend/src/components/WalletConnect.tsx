import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface WalletConnectProps {
  variant?: "default" | "outline" | "ghost";
  className?: string;
}

const WalletConnect = ({ variant = "default", className }: WalletConnectProps) => {
  const navigate = useNavigate();
  const [connected, setConnected] = useState(false);
  const [address, setAddress] = useState("");

  const handleConnect = () => {
    navigate("/connect-wallet");
  };

  const handleDisconnect = () => {
    setConnected(false);
    setAddress("");
    toast.info("Wallet disconnected");
  };

  if (connected) {
    return (
      <Button
        variant="outline"
        className={`${className} hover-glow transition-all duration-300`}
        onClick={handleDisconnect}
      >
        <CheckCircle className="mr-2 h-4 w-4 text-primary animate-pulse-glow" />
        <span className="font-mono">{address.substring(0, 6)}...{address.substring(address.length - 4)}</span>
      </Button>
    );
  }

  return (
    <Button 
      variant={variant} 
      className={`${className} transition-smooth hover-lift hover-glow`} 
      onClick={handleConnect}
    >
      <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" />
        <path d="M2 17L12 22L22 17" />
        <path d="M2 12L12 17L22 12" />
      </svg>
      Connect Wallet
    </Button>
  );
};

export default WalletConnect;

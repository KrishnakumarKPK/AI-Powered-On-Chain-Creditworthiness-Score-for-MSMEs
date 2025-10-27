import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardSidebar from "@/components/DashboardSidebar";
import WalletConnect from "@/components/WalletConnect";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

const Settings = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("user@example.com");
  const [organization, setOrganization] = useState("Tech Solutions Ltd");
  const role = "msme"; // This should come from context/state in a real app

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Settings saved successfully!");
  };

  const handleDisconnectWallet = () => {
    toast.info("Wallet disconnected");
  };

  return (
    <div className="flex min-h-screen w-full bg-background">
      <DashboardSidebar role={role} />
      
      <main className="flex-1 ml-64 p-8">
        <div className="max-w-3xl mx-auto space-y-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Settings</h1>
            <p className="text-muted-foreground">Manage your account preferences</p>
          </div>

          {/* Account Settings */}
          <Card className="p-6 glass-card">
            <h3 className="text-xl font-semibold mb-6">Account Information</h3>
            <form onSubmit={handleSave} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="organization">Organization Name</Label>
                <Input
                  id="organization"
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                />
              </div>

              <Button type="submit" className="gradient-hero">
                Save Changes
              </Button>
            </form>
          </Card>

          {/* Wallet Settings */}
          <Card className="p-6 glass-card">
            <h3 className="text-xl font-semibold mb-6">Wallet Connection</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Algorand Wallet</p>
                  <p className="text-sm text-muted-foreground">Connect your Pera or MyAlgo wallet</p>
                </div>
                <WalletConnect />
              </div>
              
              <Separator />
              
              <Button variant="outline" onClick={handleDisconnectWallet}>
                Disconnect Wallet
              </Button>
            </div>
          </Card>

          {/* Security Settings */}
          <Card className="p-6 glass-card">
            <h3 className="text-xl font-semibold mb-6">Security</h3>
            <div className="space-y-4">
              <Button variant="outline" className="w-full">
                Change Password
              </Button>
              <Button variant="outline" className="w-full">
                Enable Two-Factor Authentication
              </Button>
            </div>
          </Card>

          {/* Danger Zone */}
          <Card className="p-6 glass-card border-destructive/50">
            <h3 className="text-xl font-semibold mb-4 text-destructive">Danger Zone</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-3">
                  Once you delete your account, there is no going back. Please be certain.
                </p>
                <Button variant="destructive">
                  Delete Account
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Settings;

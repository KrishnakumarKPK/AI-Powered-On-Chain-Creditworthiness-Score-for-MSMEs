import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import {
  Shield,
  TrendingUp,
  Lock,
  Zap,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Shield,
      title: "Decentralized Credit Scoring",
      description: "AI-powered risk assessment without traditional KYC requirements",
    },
    {
      icon: Lock,
      title: "Privacy-First Approach",
      description: "Your data stays secure with on-chain verification",
    },
    {
      icon: Zap,
      title: "Instant Verification",
      description: "Get your credit score and digital passport in minutes",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Submit Proof-of-Data",
      description: "Upload invoices, utility bills, or payment history",
    },
    {
      number: "02",
      title: "AI Score Generation",
      description: "Our AI analyzes your data and generates a credit score",
    },
    {
      number: "03",
      title: "Mint NFT Passport",
      description: "Receive a verifiable digital credit passport on Algorand",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Decentralized Credit</span>
              <br />
              For MSMEs
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get AI-powered credit scoring without KYC. Build trust with blockchain-verified digital passports.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="gradient-hero text-lg"
                onClick={() => navigate("/auth")}
              >
                Get Started as MSME
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg"
                onClick={() => navigate("/auth")}
              >
                I am a Lender
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Decentralized Credit Scoring?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 glass-card hover:shadow-xl transition-all duration-300"
              >
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How It Works
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-primary/20 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
                
                {index < steps.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-8 -right-12 h-8 w-8 text-primary/40" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 gradient-hero text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Your Credit Profile?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of MSMEs transforming their creditworthiness
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="text-lg"
            onClick={() => navigate("/auth")}
          >
            Get Started Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2025 CreditChain. Powered by Algorand Blockchain.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Shield, Zap, Globe, Users, Lock, TrendingUp } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Shield,
      title: "Blockchain Security",
      description: "Leveraging Algorand's secure blockchain for tamper-proof credit records"
    },
    {
      icon: Lock,
      title: "Privacy First",
      description: "Your data stays private with on-chain hash verification"
    },
    {
      icon: Zap,
      title: "AI-Powered",
      description: "Advanced machine learning for accurate credit assessment"
    },
    {
      icon: Globe,
      title: "Global Access",
      description: "Breaking down geographical barriers to credit"
    },
    {
      icon: Users,
      title: "MSME Focused",
      description: "Designed specifically for micro, small, and medium enterprises"
    },
    {
      icon: TrendingUp,
      title: "Growth Enabler",
      description: "Helping businesses build and prove creditworthiness"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-5xl font-bold mb-6">
              Revolutionizing Credit Scoring for <span className="gradient-text">MSMEs</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              CreditChain is bridging the gap between traditional finance and blockchain technology, 
              making credit accessible to businesses worldwide through decentralized, AI-powered scoring.
            </p>
          </div>

          {/* Mission Section */}
          <Card className="p-12 mb-16 glass-card gradient-hero text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg opacity-90 leading-relaxed">
                To democratize access to credit by creating a transparent, privacy-preserving, and 
                blockchain-verified credit scoring system that empowers MSMEs globally. We believe 
                that every business deserves a fair chance to prove their creditworthiness, regardless 
                of their location or access to traditional banking systems.
              </p>
            </div>
          </Card>

          {/* Features Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Why CreditChain?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="p-6 glass-card hover:shadow-xl transition-all">
                  <feature.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* How It Works Section */}
          <Card className="p-12 glass-card mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="space-y-8 max-w-3xl mx-auto">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full gradient-hero flex items-center justify-center text-white font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Submit Proof-of-Data</h3>
                  <p className="text-muted-foreground">
                    MSMEs upload financial documents like invoices, utility bills, or payment histories. 
                    Our system hashes these documents for on-chain verification without exposing sensitive data.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full gradient-hero flex items-center justify-center text-white font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">AI Analysis</h3>
                  <p className="text-muted-foreground">
                    Our advanced AI algorithms analyze multiple data points to generate a comprehensive 
                    credit score. The model considers payment patterns, business consistency, and risk factors.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full gradient-hero flex items-center justify-center text-white font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">NFT Passport Minting</h3>
                  <p className="text-muted-foreground">
                    The credit score is minted as an NFT on the Algorand blockchain, creating a 
                    non-transferable digital credit passport that can be verified by any lender.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full gradient-hero flex items-center justify-center text-white font-bold text-xl">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Lender Verification</h3>
                  <p className="text-muted-foreground">
                    Lenders can instantly verify the authenticity of credit passports on the blockchain, 
                    making lending decisions faster and more data-driven.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Technology Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Built on Algorand</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We chose Algorand blockchain for its unmatched speed, security, and sustainability. 
              With instant transaction finality and minimal fees, Algorand enables us to provide 
              a seamless user experience while maintaining the highest standards of blockchain security.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;

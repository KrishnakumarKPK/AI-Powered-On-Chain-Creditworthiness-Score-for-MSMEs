import DashboardSidebar from "@/components/DashboardSidebar";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, TrendingUp, TrendingDown, Minus, ExternalLink } from "lucide-react";
import { useState } from "react";

const Verified = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Mock verified MSMEs data
  const verifiedMSMEs = [
    { id: "NFT#ALG78234", name: "Tech Solutions Ltd", score: 78, risk: "Low", date: "2025-10-20", verifications: 3 },
    { id: "NFT#ALG82156", name: "Green Energy Co", score: 82, risk: "Low", date: "2025-10-19", verifications: 5 },
    { id: "NFT#ALG71234", name: "Retail Innovations", score: 71, risk: "Medium", date: "2025-10-18", verifications: 2 },
    { id: "NFT#ALG65890", name: "Food Services Inc", score: 65, risk: "Medium", date: "2025-10-17", verifications: 4 },
    { id: "NFT#ALG58123", name: "Construction Pro", score: 58, risk: "Medium", date: "2025-10-16", verifications: 1 },
    { id: "NFT#ALG85432", name: "Digital Marketing Hub", score: 85, risk: "Low", date: "2025-10-15", verifications: 6 },
  ];

  const getRiskBadge = (risk: string) => {
    const colors: Record<string, string> = {
      "Low": "bg-green-100 text-green-800",
      "Medium": "bg-yellow-100 text-yellow-800",
      "High": "bg-red-100 text-red-800",
    };
    return colors[risk] || "bg-gray-100 text-gray-800";
  };

  const getRiskIcon = (score: number) => {
    if (score >= 75) return <TrendingUp className="h-4 w-4 text-green-500" />;
    if (score >= 50) return <Minus className="h-4 w-4 text-yellow-500" />;
    return <TrendingDown className="h-4 w-4 text-red-500" />;
  };

  const filteredMSMEs = verifiedMSMEs.filter(
    (msme) =>
      msme.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      msme.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex min-h-screen w-full bg-background">
      <DashboardSidebar role="lender" />
      
      <main className="flex-1 ml-64 p-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Verified MSMEs</h1>
            <p className="text-muted-foreground">Manage your verified business portfolio</p>
          </div>

          {/* Stats Overview */}
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="p-6 glass-card">
              <div className="text-2xl font-bold mb-1 text-green-600">4</div>
              <div className="text-sm text-muted-foreground">Low Risk</div>
            </Card>
            <Card className="p-6 glass-card">
              <div className="text-2xl font-bold mb-1 text-yellow-600">2</div>
              <div className="text-sm text-muted-foreground">Medium Risk</div>
            </Card>
            <Card className="p-6 glass-card">
              <div className="text-2xl font-bold mb-1 text-primary">74</div>
              <div className="text-sm text-muted-foreground">Average Score</div>
            </Card>
            <Card className="p-6 glass-card">
              <div className="text-2xl font-bold mb-1">21</div>
              <div className="text-sm text-muted-foreground">Total Checks</div>
            </Card>
          </div>

          {/* Search and Filter */}
          <Card className="p-6 glass-card">
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by business name or passport ID..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
          </Card>

          {/* Verified MSMEs Table */}
          <Card className="glass-card">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Business Name</TableHead>
                  <TableHead>Passport ID</TableHead>
                  <TableHead>Credit Score</TableHead>
                  <TableHead>Risk Level</TableHead>
                  <TableHead>Verified On</TableHead>
                  <TableHead>Checks</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredMSMEs.map((msme) => (
                  <TableRow key={msme.id} className="hover:bg-muted/50">
                    <TableCell className="font-medium">{msme.name}</TableCell>
                    <TableCell className="font-mono text-sm">{msme.id}</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        {getRiskIcon(msme.score)}
                        <span className="font-bold">{msme.score}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={getRiskBadge(msme.risk)}>
                        {msme.risk} Risk
                      </Badge>
                    </TableCell>
                    <TableCell>{msme.date}</TableCell>
                    <TableCell>{msme.verifications}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>

          {filteredMSMEs.length === 0 && (
            <Card className="p-12 glass-card text-center">
              <p className="text-muted-foreground">No verified MSMEs found matching your search.</p>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
};

export default Verified;

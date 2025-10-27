import DashboardSidebar from "@/components/DashboardSidebar";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FileText, Clock, CheckCircle, Award } from "lucide-react";

const History = () => {
  // Mock history data
  const submissions = [
    {
      id: "SUB-001",
      date: "2025-10-20",
      type: "Invoice",
      status: "NFT Minted",
      score: 78,
      icon: Award,
      color: "text-green-500",
    },
    {
      id: "SUB-002",
      date: "2025-10-18",
      type: "Utility Bill",
      status: "Scored",
      score: 75,
      icon: CheckCircle,
      color: "text-blue-500",
    },
    {
      id: "SUB-003",
      date: "2025-10-15",
      type: "Bank Statement",
      status: "Processing",
      score: null,
      icon: Clock,
      color: "text-yellow-500",
    },
  ];

  const getStatusBadge = (status: string) => {
    const variants: Record<string, "default" | "secondary" | "outline"> = {
      "NFT Minted": "default",
      "Scored": "secondary",
      "Processing": "outline",
    };
    return variants[status] || "outline";
  };

  return (
    <div className="flex min-h-screen w-full bg-background">
      <DashboardSidebar role="msme" />
      
      <main className="flex-1 ml-64 p-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Submission History</h1>
            <p className="text-muted-foreground">Track all your data submissions and scores</p>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="p-6 glass-card">
              <FileText className="h-8 w-8 text-primary mb-3" />
              <div className="text-2xl font-bold mb-1">3</div>
              <div className="text-sm text-muted-foreground">Total Submissions</div>
            </Card>
            <Card className="p-6 glass-card">
              <CheckCircle className="h-8 w-8 text-green-500 mb-3" />
              <div className="text-2xl font-bold mb-1">2</div>
              <div className="text-sm text-muted-foreground">Completed</div>
            </Card>
            <Card className="p-6 glass-card">
              <Clock className="h-8 w-8 text-yellow-500 mb-3" />
              <div className="text-2xl font-bold mb-1">1</div>
              <div className="text-sm text-muted-foreground">Processing</div>
            </Card>
            <Card className="p-6 glass-card">
              <Award className="h-8 w-8 text-primary mb-3" />
              <div className="text-2xl font-bold mb-1">1</div>
              <div className="text-sm text-muted-foreground">NFTs Minted</div>
            </Card>
          </div>

          {/* History Table */}
          <Card className="glass-card">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Submission ID</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Document Type</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Score</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {submissions.map((submission) => {
                  const StatusIcon = submission.icon;
                  return (
                    <TableRow key={submission.id} className="hover:bg-muted/50">
                      <TableCell className="font-medium">{submission.id}</TableCell>
                      <TableCell>{submission.date}</TableCell>
                      <TableCell>{submission.type}</TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <StatusIcon className={`h-4 w-4 ${submission.color}`} />
                          <Badge variant={getStatusBadge(submission.status)}>
                            {submission.status}
                          </Badge>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        {submission.score ? (
                          <span className="font-bold text-primary">{submission.score}</span>
                        ) : (
                          <span className="text-muted-foreground">-</span>
                        )}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default History;

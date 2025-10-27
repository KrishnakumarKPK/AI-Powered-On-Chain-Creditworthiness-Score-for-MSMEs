import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardSidebar from "@/components/DashboardSidebar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, FileText } from "lucide-react";
import { toast } from "sonner";

const SubmitData = () => {
  const navigate = useNavigate();
  const [documentType, setDocumentType] = useState("");
  const [hashedData, setHashedData] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        toast.error("File size must be less than 10MB");
        return;
      }
      setSelectedFile(file);
      toast.success(`File "${file.name}" selected`);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        toast.error("File size must be less than 10MB");
        return;
      }
      const allowedTypes = ["application/pdf", "image/png", "image/jpeg", "image/jpg"];
      if (!allowedTypes.includes(file.type)) {
        toast.error("Only PDF, PNG, and JPG files are allowed");
        return;
      }
      setSelectedFile(file);
      toast.success(`File "${file.name}" selected`);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!documentType || !hashedData) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate submission
    setTimeout(() => {
      toast.success("Data submitted successfully!", {
        description: "AI is now processing your submission",
      });
      setIsSubmitting(false);
      navigate("/msme/score");
    }, 2000);
  };

  return (
    <div className="flex min-h-screen w-full bg-background">
      <DashboardSidebar role="msme" />
      
      <main className="flex-1 ml-64 p-8">
        <div className="max-w-3xl mx-auto space-y-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Submit Proof-of-Data</h1>
            <p className="text-muted-foreground">
              Upload your financial documents to generate your credit score
            </p>
          </div>

          <Card className="p-8 glass-card">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Document Type */}
              <div className="space-y-2">
                <Label htmlFor="document-type">Document Type *</Label>
                <Select value={documentType} onValueChange={setDocumentType}>
                  <SelectTrigger id="document-type">
                    <SelectValue placeholder="Select document type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="invoice">Invoice</SelectItem>
                    <SelectItem value="utility">Utility Bill</SelectItem>
                    <SelectItem value="loan-history">Loan History</SelectItem>
                    <SelectItem value="bank-statement">Bank Statement</SelectItem>
                    <SelectItem value="tax-return">Tax Return</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* File Upload */}
              <div className="space-y-2">
                <Label htmlFor="file-upload">Upload Document</Label>
                <div
                  className={`border-2 border-dashed rounded-lg p-8 text-center transition-all cursor-pointer ${
                    isDragging
                      ? "border-primary bg-primary/5 scale-[1.02]"
                      : selectedFile
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary"
                  }`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  onClick={() => document.getElementById("file-upload")?.click()}
                >
                  <Upload className={`h-12 w-12 mx-auto mb-4 transition-colors ${
                    selectedFile ? "text-primary" : "text-muted-foreground"
                  }`} />
                  {selectedFile ? (
                    <>
                      <p className="text-sm font-medium mb-2">
                        {selectedFile.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {(selectedFile.size / 1024 / 1024).toFixed(2)} MB • Click to change
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="text-sm text-muted-foreground mb-2">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-xs text-muted-foreground">
                        PDF, PNG, JPG up to 10MB
                      </p>
                    </>
                  )}
                  <Input
                    id="file-upload"
                    type="file"
                    className="hidden"
                    accept=".pdf,.png,.jpg,.jpeg"
                    onChange={handleFileChange}
                  />
                </div>
              </div>

              {/* Hashed Data */}
              <div className="space-y-2">
                <Label htmlFor="hashed-data">Document Hash / Notes *</Label>
                <Textarea
                  id="hashed-data"
                  placeholder="Enter the hash of your document or additional notes..."
                  value={hashedData}
                  onChange={(e) => setHashedData(e.target.value)}
                  rows={4}
                  required
                />
                <p className="text-xs text-muted-foreground">
                  You can manually enter the hash of your document for on-chain verification
                </p>
              </div>

              {/* Info Card */}
              <Card className="p-4 bg-primary/5 border-primary/20">
                <div className="flex items-start space-x-3">
                  <FileText className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <p className="font-medium mb-1">How it works</p>
                    <p className="text-muted-foreground">
                      Your documents are processed by our AI to generate a credit score. 
                      The hash is stored on-chain for verification without exposing sensitive data.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Submit Button */}
              <div className="flex gap-4">
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1"
                  onClick={() => navigate("/msme/dashboard")}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="flex-1 gradient-hero"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Processing..." : "Submit for Scoring"}
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default SubmitData;

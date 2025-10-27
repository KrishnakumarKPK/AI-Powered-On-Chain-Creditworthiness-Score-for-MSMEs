import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface ScoreGaugeProps {
  score: number;
  maxScore?: number;
}

const ScoreGauge = ({ score, maxScore = 100 }: ScoreGaugeProps) => {
  const percentage = (score / maxScore) * 100;
  
  const getRiskCategory = (score: number) => {
    if (score >= 75) return { label: "Low Risk", color: "text-green-600", bg: "bg-green-100" };
    if (score >= 50) return { label: "Medium Risk", color: "text-yellow-600", bg: "bg-yellow-100" };
    return { label: "High Risk", color: "text-red-600", bg: "bg-red-100" };
  };

  const category = getRiskCategory(score);
  
  const getIcon = () => {
    if (score >= 75) return <TrendingUp className="h-5 w-5" />;
    if (score >= 50) return <Minus className="h-5 w-5" />;
    return <TrendingDown className="h-5 w-5" />;
  };

  return (
    <Card className="p-8 glass-card">
      <div className="flex flex-col items-center space-y-6">
        <div className="relative w-48 h-48">
          {/* Circular gauge */}
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="96"
              cy="96"
              r="88"
              fill="none"
              stroke="hsl(var(--muted))"
              strokeWidth="12"
            />
            <circle
              cx="96"
              cy="96"
              r="88"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="12"
              strokeDasharray={`${2 * Math.PI * 88}`}
              strokeDashoffset={`${2 * Math.PI * 88 * (1 - percentage / 100)}`}
              strokeLinecap="round"
              className="transition-all duration-1000 ease-out"
            />
          </svg>
          
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className={`${category.color} mb-2`}>
              {getIcon()}
            </div>
            <div className="text-5xl font-bold">{score}</div>
            <div className="text-sm text-muted-foreground">out of {maxScore}</div>
          </div>
        </div>

        <Badge className={`${category.bg} ${category.color} px-4 py-2 text-sm font-semibold`}>
          {category.label}
        </Badge>

        <div className="w-full pt-4 border-t">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Credit Score</span>
            <span className="font-semibold">{score}/100</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ScoreGauge;

import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  Upload,
  TrendingUp,
  CreditCard,
  History,
  Settings,
  LogOut,
  Search,
  CheckCircle,
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import logo from "@/assets/creditchain-logo.png";

interface DashboardSidebarProps {
  role: "msme" | "lender";
}

const DashboardSidebar = ({ role }: DashboardSidebarProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  const msmeLinks = [
    { name: "Dashboard", path: "/msme/dashboard", icon: LayoutDashboard },
    { name: "Submit Data", path: "/msme/submit", icon: Upload },
    { name: "My Score", path: "/msme/score", icon: TrendingUp },
    { name: "Digital Passport", path: "/msme/passport", icon: CreditCard },
    { name: "History", path: "/msme/history", icon: History },
    { name: "Settings", path: "/settings", icon: Settings },
  ];

  const lenderLinks = [
    { name: "Dashboard", path: "/lender/dashboard", icon: LayoutDashboard },
    { name: "Verify NFT", path: "/lender/verify", icon: Search },
    { name: "Verified MSMEs", path: "/lender/verified", icon: CheckCircle },
    { name: "History", path: "/lender/history", icon: History },
    { name: "Settings", path: "/settings", icon: Settings },
  ];

  const links = role === "msme" ? msmeLinks : lenderLinks;

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="flex h-screen w-64 flex-col fixed left-0 top-0 border-r bg-sidebar transition-all duration-300">
      <div className="flex h-16 items-center border-b px-6">
        <Link to="/" className="flex items-center space-x-3 group">
          <img 
            src={logo} 
            alt="CreditChain Logo" 
            className="h-8 w-8 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" 
          />
          <span className="text-lg font-bold text-sidebar-foreground">CreditChain</span>
        </Link>
      </div>
      
      <ScrollArea className="flex-1 px-3 py-4">
        <div className="space-y-1">
          {links.map((link) => {
            const Icon = link.icon;
            const isActive = location.pathname === link.path;
            
            return (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "flex items-center space-x-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-300",
                  isActive
                    ? "bg-sidebar-accent text-primary shadow-md scale-105"
                    : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:translate-x-1"
                )}
              >
                <Icon className={cn(
                  "h-5 w-5 transition-transform duration-300",
                  isActive && "scale-110"
                )} />
                <span>{link.name}</span>
              </Link>
            );
          })}
        </div>
      </ScrollArea>

      <div className="border-t p-4">
        <Button
          variant="ghost"
          className="w-full justify-start text-sidebar-foreground hover:text-destructive 
                   transition-all duration-300 hover:translate-x-1"
          onClick={handleLogout}
        >
          <LogOut className="mr-3 h-5 w-5 transition-transform duration-300" />
          Logout
        </Button>
      </div>
    </div>
  );
};

export default DashboardSidebar;

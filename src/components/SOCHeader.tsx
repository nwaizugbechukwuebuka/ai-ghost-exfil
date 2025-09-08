import { useState, useEffect } from "react";
import { Shield, AlertTriangle, Activity, Eye, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const SOCHeader = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="border-b border-border bg-card shadow-cyber">
      <div className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-cyber-blue" />
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-foreground">CyberGuard SOC</h1>
              <p className="text-sm text-muted-foreground">AI Threat Simulation Platform</p>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Activity className="h-4 w-4 text-cyber-green" />
              <Badge variant="outline" className="border-cyber-green text-cyber-green">
                OPERATIONAL
              </Badge>
            </div>
            
            <div className="flex items-center space-x-2">
              <AlertTriangle className="h-4 w-4 text-cyber-amber" />
              <Badge variant="outline" className="border-cyber-amber text-cyber-amber">
                3 ALERTS
              </Badge>
            </div>

            <div className="flex items-center space-x-2">
              <Eye className="h-4 w-4 text-cyber-blue" />
              <Badge variant="outline" className="border-cyber-blue text-cyber-blue">
                MONITORING
              </Badge>
            </div>

            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4 text-foreground" />
              <span className="text-sm text-muted-foreground">2 Analysts</span>
            </div>
          </div>

          <div className="border-l border-border pl-6">
            <div className="text-right">
              <p className="text-sm font-mono text-foreground">
                {currentTime.toLocaleTimeString()}
              </p>
              <p className="text-xs text-muted-foreground">
                {currentTime.toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
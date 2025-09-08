import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Brain, 
  Database, 
  FileText, 
  Network, 
  AlertCircle, 
  Play, 
  Pause,
  RotateCcw,
  Eye
} from "lucide-react";

export const ThreatDashboard = () => {
  const [simulationActive, setSimulationActive] = useState(false);
  const [dataExfiltrated, setDataExfiltrated] = useState(0);

  const threats = [
    {
      id: 1,
      type: "AI Data Exfiltration",
      severity: "HIGH",
      status: "ACTIVE",
      description: "Employee using ChatGPT API to encode customer PII in prompts",
      timestamp: "2024-01-08 14:23:15",
      icon: Brain,
      color: "cyber-red"
    },
    {
      id: 2,
      type: "Suspicious API Calls",
      severity: "MEDIUM",
      status: "MONITORING",
      description: "Unusual large payload to OpenAI endpoint",
      timestamp: "2024-01-08 14:20:32",
      icon: Network,
      color: "cyber-amber"
    },
    {
      id: 3,
      type: "Clipboard Activity",
      severity: "LOW",
      status: "DETECTED",
      description: "High-frequency clipboard operations detected",
      timestamp: "2024-01-08 14:18:45",
      icon: FileText,
      color: "cyber-green"
    }
  ];

  const exfiltrationData = [
    { type: "Customer PII", records: 1247, size: "2.3 MB", encoded: true },
    { type: "Financial Records", records: 543, size: "1.8 MB", encoded: true },
    { type: "Intellectual Property", records: 89, size: "450 KB", encoded: false },
  ];

  const toggleSimulation = () => {
    setSimulationActive(!simulationActive);
    if (!simulationActive) {
      // Simulate data exfiltration progress
      const interval = setInterval(() => {
        setDataExfiltrated(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + Math.random() * 5;
        });
      }, 500);
    } else {
      setDataExfiltrated(0);
    }
  };

  return (
    <div className="space-y-6">
      {/* Simulation Control */}
      <Card className="border-cyber-blue bg-gradient-cyber">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Brain className="h-5 w-5 text-cyber-blue" />
            <span>AI Insider Threat Simulation</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                Simulating employee using LLM to exfiltrate sensitive data through encoded prompts
              </p>
              <Badge 
                variant="outline" 
                className={`${simulationActive ? 'border-cyber-red text-cyber-red' : 'border-cyber-green text-cyber-green'}`}
              >
                {simulationActive ? 'ATTACK IN PROGRESS' : 'SIMULATION READY'}
              </Badge>
            </div>
            <div className="flex space-x-2">
              <Button
                onClick={toggleSimulation}
                variant={simulationActive ? "destructive" : "default"}
                size="sm"
                className="bg-cyber-blue hover:bg-cyber-blue/80"
              >
                {simulationActive ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
                {simulationActive ? 'Stop' : 'Start'} Simulation
              </Button>
              <Button
                onClick={() => setDataExfiltrated(0)}
                variant="outline"
                size="sm"
                disabled={simulationActive}
              >
                <RotateCcw className="h-4 w-4 mr-2" />
                Reset
              </Button>
            </div>
          </div>
          
          {simulationActive && (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span>Data Exfiltration Progress</span>
                <span>{Math.round(dataExfiltrated)}%</span>
              </div>
              <Progress value={dataExfiltrated} className="h-2" />
            </div>
          )}
        </CardContent>
      </Card>

      {/* Active Threats */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertCircle className="h-5 w-5 text-cyber-red" />
            <span>Active Threats</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {threats.map((threat) => (
              <div key={threat.id} className="flex items-center justify-between p-4 border border-border rounded-lg bg-muted/50">
                <div className="flex items-center space-x-4">
                  <threat.icon className={`h-5 w-5 text-${threat.color}`} />
                  <div>
                    <h4 className="font-medium text-foreground">{threat.type}</h4>
                    <p className="text-sm text-muted-foreground">{threat.description}</p>
                    <p className="text-xs text-muted-foreground font-mono">{threat.timestamp}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge 
                    variant="outline" 
                    className={`border-${threat.color} text-${threat.color}`}
                  >
                    {threat.severity}
                  </Badge>
                  <Badge variant="secondary">{threat.status}</Badge>
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-2" />
                    Investigate
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Exfiltrated Data Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Database className="h-5 w-5 text-cyber-amber" />
            <span>Potentially Exfiltrated Data</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {exfiltrationData.map((data, index) => (
              <div key={index} className="p-4 border border-border rounded-lg bg-gradient-alert">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-foreground">{data.type}</h4>
                  <Badge 
                    variant={data.encoded ? "destructive" : "outline"}
                    className={data.encoded ? "bg-cyber-red" : "border-cyber-amber text-cyber-amber"}
                  >
                    {data.encoded ? 'ENCODED' : 'PLAIN TEXT'}
                  </Badge>
                </div>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p>{data.records.toLocaleString()} records</p>
                  <p>{data.size} estimated size</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
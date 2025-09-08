import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Server, 
  Shield, 
  Monitor, 
  FileSearch, 
  Activity,
  AlertCircle,
  TrendingUp,
  Clock
} from "lucide-react";

export const SIEMPanel = () => {
  const logSources = [
    {
      name: "Proxy/Firewall",
      status: "ACTIVE",
      events: 15847,
      alerts: 23,
      icon: Shield,
      color: "cyber-green"
    },
    {
      name: "EDR (Endpoint)",
      status: "ACTIVE", 
      events: 8932,
      alerts: 15,
      icon: Monitor,
      color: "cyber-green"
    },
    {
      name: "DLP/Sysmon",
      status: "ACTIVE",
      events: 4521,
      alerts: 8,
      icon: FileSearch,
      color: "cyber-green"
    },
    {
      name: "AI API Gateway",
      status: "WARNING",
      events: 2847,
      alerts: 45,
      icon: Server,
      color: "cyber-amber"
    }
  ];

  const recentLogs = [
    {
      timestamp: "2024-01-08 14:23:47",
      source: "AI Gateway",
      severity: "HIGH",
      message: "Large payload (2.3MB) to api.openai.com - User: j.smith@company.com",
      tags: ["AI_API", "LARGE_PAYLOAD", "SUSPICIOUS"]
    },
    {
      timestamp: "2024-01-08 14:23:23",
      source: "EDR",
      severity: "MEDIUM",
      message: "Clipboard accessed 47 times in 2 minutes - Host: WS-JSMITH-01",
      tags: ["CLIPBOARD", "ANOMALY", "BEHAVIORAL"]
    },
    {
      timestamp: "2024-01-08 14:22:15",
      source: "DLP",
      severity: "HIGH",
      message: "PII pattern detected in outbound data - SSN: 4 instances",
      tags: ["PII", "DATA_LOSS", "CRITICAL"]
    },
    {
      timestamp: "2024-01-08 14:21:03",
      source: "Proxy",
      severity: "LOW",
      message: "HTTPS connection to anthropic.com - Duration: 15min",
      tags: ["AI_SERVICE", "LONG_SESSION"]
    },
    {
      timestamp: "2024-01-08 14:19:45",
      source: "EDR",
      severity: "MEDIUM",
      message: "Process 'chrome.exe' consuming high memory - User: j.smith",
      tags: ["RESOURCE", "PERFORMANCE", "BROWSER"]
    }
  ];

  const detectionRules = [
    {
      id: "RULE_001",
      name: "Large AI API Payload",
      description: "Detects API calls to AI services with payload > 1MB",
      status: "ACTIVE",
      matches: 12,
      accuracy: 94
    },
    {
      id: "RULE_002", 
      name: "PII in AI Prompts",
      description: "Identifies sensitive data patterns in LLM queries",
      status: "ACTIVE",
      matches: 8,
      accuracy: 89
    },
    {
      id: "RULE_003",
      name: "Off-hours AI Usage",
      description: "Flags AI service access outside business hours",
      status: "ACTIVE", 
      matches: 3,
      accuracy: 97
    },
    {
      id: "RULE_004",
      name: "Encoded Content Detection",
      description: "Detects Base64/hex encoding in AI prompts",
      status: "TESTING",
      matches: 15,
      accuracy: 76
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "HIGH": return "cyber-red";
      case "MEDIUM": return "cyber-amber";
      case "LOW": return "cyber-green";
      default: return "foreground";
    }
  };

  return (
    <div className="space-y-6">
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="logs">Live Logs</TabsTrigger>
          <TabsTrigger value="rules">Detection Rules</TabsTrigger>
          <TabsTrigger value="hunting">Threat Hunting</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          {/* Log Sources Status */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Activity className="h-5 w-5 text-cyber-blue" />
                <span>Log Sources Status</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {logSources.map((source, index) => (
                  <div key={index} className="p-4 border border-border rounded-lg bg-muted/50">
                    <div className="flex items-center justify-between mb-3">
                      <source.icon className={`h-5 w-5 text-${source.color}`} />
                      <Badge 
                        variant="outline" 
                        className={`border-${source.color} text-${source.color}`}
                      >
                        {source.status}
                      </Badge>
                    </div>
                    <h4 className="font-medium text-foreground mb-2">{source.name}</h4>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Events:</span>
                        <span className="font-mono">{source.events.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Alerts:</span>
                        <span className="font-mono text-cyber-amber">{source.alerts}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="logs" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-cyber-blue" />
                <span>Real-time Security Events</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {recentLogs.map((log, index) => (
                  <div key={index} className="p-3 border border-border rounded-lg bg-terminal-bg font-mono text-sm">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <span className="text-terminal-text">{log.timestamp}</span>
                        <Badge variant="outline" className="text-xs">{log.source}</Badge>
                        <Badge 
                          variant="outline" 
                          className={`text-xs border-${getSeverityColor(log.severity)} text-${getSeverityColor(log.severity)}`}
                        >
                          {log.severity}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-terminal-text mb-2">{log.message}</p>
                    <div className="flex flex-wrap gap-1">
                      {log.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rules" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertCircle className="h-5 w-5 text-cyber-blue" />
                <span>Detection Rules Engine</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {detectionRules.map((rule, index) => (
                  <div key={index} className="p-4 border border-border rounded-lg bg-muted/50">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <h4 className="font-medium text-foreground">{rule.name}</h4>
                        <Badge variant="outline" className="text-xs">{rule.id}</Badge>
                        <Badge 
                          variant={rule.status === "ACTIVE" ? "default" : "secondary"}
                          className={rule.status === "ACTIVE" ? "bg-cyber-green text-background" : ""}
                        >
                          {rule.status}
                        </Badge>
                      </div>
                      <Button variant="outline" size="sm">Configure</Button>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{rule.description}</p>
                    <div className="flex items-center space-x-6 text-sm">
                      <div className="flex items-center space-x-2">
                        <TrendingUp className="h-4 w-4 text-cyber-amber" />
                        <span className="text-muted-foreground">Matches:</span>
                        <span className="font-mono text-foreground">{rule.matches}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Activity className="h-4 w-4 text-cyber-green" />
                        <span className="text-muted-foreground">Accuracy:</span>
                        <span className="font-mono text-foreground">{rule.accuracy}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="hunting" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileSearch className="h-5 w-5 text-cyber-blue" />
                <span>Threat Hunting Queries</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border border-border rounded-lg bg-terminal-bg">
                  <h4 className="font-medium text-terminal-text mb-2">Active Hunt: AI Exfiltration Patterns</h4>
                  <pre className="text-sm text-terminal-text overflow-x-auto">
{`source="proxy" dest_domain="*.openai.com" OR dest_domain="*.anthropic.com"
| eval payload_size_mb = round(bytes_out/1024/1024, 2)
| where payload_size_mb > 1
| stats count by user, payload_size_mb, dest_domain
| where count > 3`}
                  </pre>
                  <div className="flex justify-between items-center mt-3">
                    <Badge variant="outline" className="border-cyber-green text-cyber-green">
                      17 Results Found
                    </Badge>
                    <Button variant="outline" size="sm">Run Query</Button>
                  </div>
                </div>

                <div className="p-4 border border-border rounded-lg bg-terminal-bg">
                  <h4 className="font-medium text-terminal-text mb-2">Hunt: Encoded Data in Prompts</h4>
                  <pre className="text-sm text-terminal-text overflow-x-auto">
{`source="api_gateway" method="POST"
| rex field=request_body "(?<base64_content>[A-Za-z0-9+/]{20,}={0,2})"
| where isnotnull(base64_content)
| eval decoded_preview = substr(base64decode(base64_content), 1, 50)
| search decoded_preview="*SSN*" OR decoded_preview="*DOB*"`}
                  </pre>
                  <div className="flex justify-between items-center mt-3">
                    <Badge variant="outline" className="border-cyber-amber text-cyber-amber">
                      5 Suspicious Patterns
                    </Badge>
                    <Button variant="outline" size="sm">Run Query</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  User, 
  Shield, 
  FileText, 
  Phone, 
  Lock,
  Play,
  Pause
} from "lucide-react";

export const IncidentResponse = () => {
  const [incidentActive, setIncidentActive] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const playbook = [
    {
      id: 1,
      title: "Initial Assessment",
      description: "Assess scope and severity of AI-assisted data exfiltration",
      status: "completed",
      estimatedTime: "5 min",
      actions: [
        "Confirm insider threat indicators",
        "Identify affected systems and data",
        "Assess data sensitivity level"
      ]
    },
    {
      id: 2,
      title: "Containment",
      description: "Isolate affected systems and prevent further data loss", 
      status: "in-progress",
      estimatedTime: "10 min",
      actions: [
        "Isolate employee workstation",
        "Block AI service endpoints",
        "Disable user account access",
        "Preserve digital evidence"
      ]
    },
    {
      id: 3,
      title: "Investigation",
      description: "Analyze attack methods and exfiltrated data",
      status: "pending", 
      estimatedTime: "45 min",
      actions: [
        "Review AI API logs and payloads",
        "Analyze encoding/obfuscation methods",
        "Determine data exfiltration timeline",
        "Interview employee if appropriate"
      ]
    },
    {
      id: 4,
      title: "Notification",
      description: "Alert stakeholders and regulatory bodies",
      status: "pending",
      estimatedTime: "20 min", 
      actions: [
        "Notify management and legal team",
        "Contact compliance officer",
        "Prepare breach notification if required",
        "Document AI-specific attack vectors"
      ]
    },
    {
      id: 5,
      title: "Recovery",
      description: "Restore normal operations with enhanced controls",
      status: "pending",
      estimatedTime: "2 hours",
      actions: [
        "Implement AI traffic monitoring",
        "Update DLP rules for LLM queries", 
        "Enhance employee AI usage policies",
        "Deploy additional endpoint controls"
      ]
    }
  ];

  const stakeholders = [
    { name: "Sarah Chen", role: "CISO", status: "Notified", contact: "+1-555-0123" },
    { name: "Mike Rodriguez", role: "Legal Counsel", status: "Contacted", contact: "+1-555-0124" },
    { name: "Dr. Lisa Wang", role: "Compliance Officer", status: "Pending", contact: "+1-555-0125" },
    { name: "Tom Harrison", role: "HR Director", status: "Notified", contact: "+1-555-0126" }
  ];

  const evidence = [
    {
      type: "Network Logs",
      description: "API calls to OpenAI with large payloads",
      size: "2.3 MB",
      hash: "sha256:a7b9c8d2...",
      collected: true
    },
    {
      type: "Endpoint Forensics", 
      description: "Clipboard history and browser artifacts",
      size: "45 MB",
      hash: "sha256:f3e4d5c6...",
      collected: true
    },
    {
      type: "Email Communications",
      description: "Employee external communications",
      size: "1.2 MB", 
      hash: "sha256:b8c9d0e1...",
      collected: false
    },
    {
      type: "AI Chat Logs",
      description: "Reconstructed AI conversation history",
      size: "890 KB",
      hash: "sha256:c9d0e1f2...",
      collected: true
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "cyber-green";
      case "in-progress": return "cyber-amber"; 
      case "pending": return "muted-foreground";
      default: return "muted-foreground";
    }
  };

  const getStakeholderStatusColor = (status: string) => {
    switch (status) {
      case "Notified": return "cyber-green";
      case "Contacted": return "cyber-amber";
      case "Pending": return "cyber-red";
      default: return "muted-foreground";
    }
  };

  return (
    <div className="space-y-6">
      {/* Incident Overview */}
      <Card className="border-cyber-red bg-gradient-alert">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertTriangle className="h-5 w-5 text-cyber-red" />
            <span>Active Incident: INC-2024-0108-001</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <div>
              <p className="text-sm text-muted-foreground">Severity</p>
              <Badge variant="destructive" className="bg-cyber-red">CRITICAL</Badge>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Type</p>
              <p className="font-medium">AI-Assisted Data Exfiltration</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Assigned Analyst</p>
              <p className="font-medium">John Smith</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Time Since Detection</p>
              <p className="font-medium font-mono">00:23:47</p>
            </div>
          </div>
          
          <div className="mb-4">
            <p className="text-sm text-muted-foreground mb-2">Incident Summary</p>
            <Textarea 
              placeholder="Employee j.smith@company.com detected using ChatGPT API to encode and exfiltrate customer PII and financial records. Large payloads (2.3MB) sent to api.openai.com containing Base64-encoded sensitive data disguised as natural language prompts..."
              className="bg-terminal-bg border-border"
              rows={3}
            />
          </div>

          <div className="flex items-center space-x-4">
            <Button
              onClick={() => setIncidentActive(!incidentActive)}
              variant={incidentActive ? "destructive" : "default"}
              className="bg-cyber-blue hover:bg-cyber-blue/80"
            >
              {incidentActive ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
              {incidentActive ? 'Pause Response' : 'Activate Response'}
            </Button>
            <Badge variant="outline" className="border-cyber-amber text-cyber-amber">
              Response Playbook Active
            </Badge>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Response Playbook */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FileText className="h-5 w-5 text-cyber-blue" />
              <span>AI Exfiltration Response Playbook</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {playbook.map((step, index) => (
                <div key={step.id} className="p-4 border border-border rounded-lg bg-muted/50">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      {step.status === "completed" && <CheckCircle className="h-5 w-5 text-cyber-green" />}
                      {step.status === "in-progress" && <Clock className="h-5 w-5 text-cyber-amber" />}
                      {step.status === "pending" && <Clock className="h-5 w-5 text-muted-foreground" />}
                      <h4 className="font-medium text-foreground">{step.title}</h4>
                    </div>
                    <Badge 
                      variant="outline" 
                      className={`border-${getStatusColor(step.status)} text-${getStatusColor(step.status)}`}
                    >
                      {step.status.toUpperCase()}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{step.description}</p>
                  <div className="space-y-1">
                    {step.actions.map((action, actionIndex) => (
                      <div key={actionIndex} className="flex items-center space-x-2 text-sm">
                        <div className={`w-2 h-2 rounded-full ${
                          step.status === "completed" ? "bg-cyber-green" :
                          step.status === "in-progress" ? "bg-cyber-amber" : "bg-muted-foreground"
                        }`} />
                        <span className="text-muted-foreground">{action}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">ETA: {step.estimatedTime}</span>
                    {step.status === "in-progress" && (
                      <Progress value={65} className="w-24 h-2" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Stakeholder Notifications & Evidence */}
        <div className="space-y-6">
          {/* Stakeholder Notifications */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <User className="h-5 w-5 text-cyber-blue" />
                <span>Stakeholder Notifications</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {stakeholders.map((stakeholder, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg bg-muted/50">
                    <div>
                      <h4 className="font-medium text-foreground">{stakeholder.name}</h4>
                      <p className="text-sm text-muted-foreground">{stakeholder.role}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge 
                        variant="outline" 
                        className={`border-${getStakeholderStatusColor(stakeholder.status)} text-${getStakeholderStatusColor(stakeholder.status)}`}
                      >
                        {stakeholder.status}
                      </Badge>
                      <Button variant="outline" size="sm">
                        <Phone className="h-4 w-4 mr-2" />
                        Call
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Evidence Collection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Lock className="h-5 w-5 text-cyber-blue" />
                <span>Evidence Collection</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {evidence.map((item, index) => (
                  <div key={index} className="p-3 border border-border rounded-lg bg-terminal-bg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-terminal-text">{item.type}</h4>
                      <Badge 
                        variant={item.collected ? "default" : "outline"}
                        className={item.collected ? "bg-cyber-green text-background" : "border-cyber-amber text-cyber-amber"}
                      >
                        {item.collected ? "COLLECTED" : "PENDING"}
                      </Badge>
                    </div>
                    <p className="text-sm text-terminal-text mb-2">{item.description}</p>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Size: {item.size}</span>
                      <span className="font-mono">{item.hash}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
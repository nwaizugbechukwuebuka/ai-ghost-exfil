import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  DollarSign, 
  TrendingDown, 
  Users, 
  Shield, 
  AlertTriangle,
  FileText,
  Scale,
  Clock
} from "lucide-react";

export const BusinessImpact = () => {
  const financialImpact = {
    directCosts: 2500000,
    regulatoryFines: 850000,
    legalFees: 450000,
    operationalCosts: 180000,
    total: 3980000
  };

  const riskMetrics = [
    {
      category: "Financial Loss",
      risk: "HIGH",
      probability: 95,
      impact: "$3.98M",
      description: "Direct costs including fines, legal, and operational expenses",
      icon: DollarSign,
      color: "cyber-red"
    },
    {
      category: "Regulatory Compliance",
      risk: "CRITICAL", 
      probability: 90,
      impact: "GDPR/HIPAA Violations",
      description: "Customer PII exposure triggers mandatory breach notifications",
      icon: Scale,
      color: "cyber-red"
    },
    {
      category: "Reputation Damage",
      risk: "HIGH",
      probability: 85,
      impact: "15-25% Customer Loss",
      description: "Public disclosure of AI-assisted data breach",
      icon: TrendingDown,
      color: "cyber-amber"
    },
    {
      category: "Intellectual Property",
      risk: "MEDIUM",
      probability: 70,
      impact: "Trade Secret Loss",
      description: "Proprietary algorithms and business processes exposed",
      icon: Shield,
      color: "cyber-amber"
    }
  ];

  const affectedData = [
    { type: "Customer PII", records: 12470, value: "$2.1M", regulation: "GDPR, CCPA" },
    { type: "Financial Records", records: 5430, value: "$1.2M", regulation: "PCI-DSS, SOX" },
    { type: "Healthcare Data", records: 2180, value: "$650K", regulation: "HIPAA" },
    { type: "Trade Secrets", records: 89, value: "Priceless", regulation: "Corporate IP" }
  ];

  const timeline = [
    { time: "0-4 hours", event: "Immediate containment costs", cost: 50000 },
    { time: "1-3 days", event: "Forensic investigation", cost: 180000 },
    { time: "1-2 weeks", event: "Legal and compliance review", cost: 450000 },
    { time: "1-6 months", event: "Regulatory fines and penalties", cost: 850000 },
    { time: "6-12 months", event: "Customer remediation", cost: 2500000 },
    { time: "1-2 years", event: "Long-term reputation recovery", cost: 1200000 }
  ];

  const recommendedControls = [
    {
      control: "AI Traffic Monitoring",
      cost: 125000,
      risk_reduction: 60,
      priority: "IMMEDIATE"
    },
    {
      control: "Enhanced DLP for LLMs", 
      cost: 85000,
      risk_reduction: 45,
      priority: "HIGH"
    },
    {
      control: "Employee AI Training",
      cost: 25000,
      risk_reduction: 30,
      priority: "HIGH" 
    },
    {
      control: "Zero Trust Architecture",
      cost: 450000,
      risk_reduction: 70,
      priority: "MEDIUM"
    }
  ];

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "CRITICAL": return "cyber-red";
      case "HIGH": return "cyber-red";
      case "MEDIUM": return "cyber-amber";
      case "LOW": return "cyber-green";
      default: return "muted-foreground";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "IMMEDIATE": return "cyber-red";
      case "HIGH": return "cyber-amber";
      case "MEDIUM": return "cyber-blue";
      case "LOW": return "cyber-green";
      default: return "muted-foreground";
    }
  };

  return (
    <div className="space-y-6">
      {/* Executive Summary */}
      <Card className="border-cyber-red bg-gradient-alert">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertTriangle className="h-5 w-5 text-cyber-red" />
            <span>Executive Risk Assessment</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 border border-cyber-red rounded-lg">
              <DollarSign className="h-8 w-8 text-cyber-red mx-auto mb-2" />
              <p className="text-2xl font-bold text-cyber-red">
                ${(financialImpact.total / 1000000).toFixed(1)}M
              </p>
              <p className="text-sm text-muted-foreground">Total Financial Impact</p>
            </div>
            <div className="text-center p-4 border border-cyber-amber rounded-lg">
              <Users className="h-8 w-8 text-cyber-amber mx-auto mb-2" />
              <p className="text-2xl font-bold text-cyber-amber">20,169</p>
              <p className="text-sm text-muted-foreground">Affected Customers</p>
            </div>
            <div className="text-center p-4 border border-cyber-red rounded-lg">
              <Scale className="h-8 w-8 text-cyber-red mx-auto mb-2" />
              <p className="text-2xl font-bold text-cyber-red">CRITICAL</p>
              <p className="text-sm text-muted-foreground">Regulatory Risk</p>
            </div>
            <div className="text-center p-4 border border-cyber-amber rounded-lg">
              <Clock className="h-8 w-8 text-cyber-amber mx-auto mb-2" />
              <p className="text-2xl font-bold text-cyber-amber">72 hrs</p>
              <p className="text-sm text-muted-foreground">Notification Deadline</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Risk Assessment */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingDown className="h-5 w-5 text-cyber-blue" />
              <span>Risk Impact Analysis</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {riskMetrics.map((risk, index) => (
                <div key={index} className="p-4 border border-border rounded-lg bg-muted/50">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <risk.icon className={`h-5 w-5 text-${risk.color}`} />
                      <h4 className="font-medium text-foreground">{risk.category}</h4>
                    </div>
                    <Badge 
                      variant="outline" 
                      className={`border-${risk.color} text-${risk.color}`}
                    >
                      {risk.risk}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{risk.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Probability</span>
                      <span className="font-mono">{risk.probability}%</span>
                    </div>
                    <Progress value={risk.probability} className="h-2" />
                    <div className="flex justify-between text-sm">
                      <span>Impact</span>
                      <span className="font-medium">{risk.impact}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Financial Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <DollarSign className="h-5 w-5 text-cyber-blue" />
              <span>Financial Impact Breakdown</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 border border-border rounded-lg bg-cyber-red/10">
                <h4 className="font-medium text-foreground mb-3">Direct Costs</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Customer Remediation</span>
                    <span className="font-mono">${(financialImpact.directCosts / 1000000).toFixed(1)}M</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Regulatory Fines</span>
                    <span className="font-mono">${(financialImpact.regulatoryFines / 1000000).toFixed(1)}M</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Legal Fees</span>
                    <span className="font-mono">${(financialImpact.legalFees / 1000000).toFixed(1)}M</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Operational Response</span>
                    <span className="font-mono">${(financialImpact.operationalCosts / 1000).toFixed(0)}K</span>
                  </div>
                  <div className="border-t border-border pt-2 flex justify-between font-medium">
                    <span>Total</span>
                    <span className="font-mono text-cyber-red">${(financialImpact.total / 1000000).toFixed(1)}M</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-foreground mb-3">Affected Data Categories</h4>
                <div className="space-y-3">
                  {affectedData.map((data, index) => (
                    <div key={index} className="p-3 border border-border rounded-lg bg-muted/50">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-medium text-foreground">{data.type}</span>
                        <span className="font-mono text-cyber-amber">{data.value}</span>
                      </div>
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>{data.records.toLocaleString()} records</span>
                        <span>{data.regulation}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Cost Timeline */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Clock className="h-5 w-5 text-cyber-blue" />
            <span>Financial Impact Timeline</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg bg-muted/50">
                <div>
                  <h4 className="font-medium text-foreground">{item.time}</h4>
                  <p className="text-sm text-muted-foreground">{item.event}</p>
                </div>
                <div className="text-right">
                  <p className="font-mono text-lg text-cyber-red">
                    ${(item.cost / 1000000).toFixed(1)}M
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recommended Controls */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Shield className="h-5 w-5 text-cyber-blue" />
            <span>Recommended Security Controls</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {recommendedControls.map((control, index) => (
              <div key={index} className="p-4 border border-border rounded-lg bg-muted/50">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-foreground">{control.control}</h4>
                  <Badge 
                    variant="outline" 
                    className={`border-${getPriorityColor(control.priority)} text-${getPriorityColor(control.priority)}`}
                  >
                    {control.priority}
                  </Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Implementation Cost</span>
                    <span className="font-mono">${(control.cost / 1000).toFixed(0)}K</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Risk Reduction</span>
                    <span className="font-mono">{control.risk_reduction}%</span>
                  </div>
                  <Progress value={control.risk_reduction} className="h-2" />
                  <div className="text-xs text-muted-foreground">
                    ROI: ${(((financialImpact.total * control.risk_reduction / 100) - control.cost) / 1000000).toFixed(1)}M saved
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
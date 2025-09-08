import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SOCHeader } from "@/components/SOCHeader";
import { ThreatDashboard } from "@/components/ThreatDashboard";
import { SIEMPanel } from "@/components/SIEMPanel";
import { IncidentResponse } from "@/components/IncidentResponse";
import { BusinessImpact } from "@/components/BusinessImpact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SOCHeader />
      
      <main className="container mx-auto p-6">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-foreground mb-2">
            SOC Simulation: AI-Driven Insider Threat
          </h2>
          <p className="text-muted-foreground">
            Comprehensive simulation of LLM-based data exfiltration detection and response
          </p>
        </div>

        <Tabs defaultValue="dashboard" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-6">
            <TabsTrigger value="dashboard">Threat Dashboard</TabsTrigger>
            <TabsTrigger value="siem">SIEM & Logs</TabsTrigger>
            <TabsTrigger value="incident">Incident Response</TabsTrigger>
            <TabsTrigger value="impact">Business Impact</TabsTrigger>
            <TabsTrigger value="simulation">Live Simulation</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard">
            <ThreatDashboard />
          </TabsContent>

          <TabsContent value="siem">
            <SIEMPanel />
          </TabsContent>

          <TabsContent value="incident">
            <IncidentResponse />
          </TabsContent>

          <TabsContent value="impact">
            <BusinessImpact />
          </TabsContent>

          <TabsContent value="simulation">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ThreatDashboard />
              <SIEMPanel />
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Bed, Users, Activity, AlertTriangle, Clock, TrendingUp,
  Droplets, Ambulance, Brain, Heart, Baby, ArrowUpRight, ArrowDownRight, Minus
} from "lucide-react";

const stats = [
  { label: "Total Beds", value: 450, available: 127, icon: Bed, trend: "up", color: "text-secondary" },
  { label: "ICU Beds", value: 80, available: 12, icon: Activity, trend: "down", color: "text-emergency" },
  { label: "Patients Today", value: 234, available: null, icon: Users, trend: "up", color: "text-accent" },
  { label: "Ambulances Active", value: 18, available: 5, icon: Ambulance, trend: "stable", color: "text-warning" },
];

const triageQueue = [
  { id: "T-001", name: "Baby Riya (2 months)", severity: "critical", type: "Respiratory Distress", time: "2 min ago", score: 95 },
  { id: "T-002", name: "Ramesh Gupta (72)", severity: "critical", type: "Cardiac Arrest", time: "5 min ago", score: 92 },
  { id: "T-003", name: "Priya Singh (28)", severity: "high", type: "Accident - Multiple Fractures", time: "8 min ago", score: 78 },
  { id: "T-004", name: "Suresh Nair (55)", severity: "medium", type: "Chest Pain", time: "12 min ago", score: 60 },
  { id: "T-005", name: "Lakshmi Devi (65)", severity: "high", type: "Stroke Symptoms", time: "15 min ago", score: 85 },
  { id: "T-006", name: "Arjun K. (8)", severity: "low", type: "High Fever", time: "20 min ago", score: 30 },
];

const severityColors: Record<string, string> = {
  critical: "bg-emergency/10 text-emergency border-emergency/30",
  high: "bg-warning/10 text-warning border-warning/30",
  medium: "bg-accent/10 text-accent border-accent/30",
  low: "bg-success/10 text-success border-success/30",
};

const departments = [
  { name: "Emergency", patients: 42, capacity: 50, icon: AlertTriangle },
  { name: "Cardiology", patients: 28, capacity: 40, icon: Heart },
  { name: "Pediatrics", patients: 15, capacity: 30, icon: Baby },
  { name: "Neurology", patients: 22, capacity: 25, icon: Brain },
];

const trendIcon = (trend: string) => {
  if (trend === "up") return <ArrowUpRight className="w-4 h-4 text-success" />;
  if (trend === "down") return <ArrowDownRight className="w-4 h-4 text-emergency" />;
  return <Minus className="w-4 h-4 text-muted-foreground" />;
};

const HospitalDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-display font-bold text-foreground">Hospital Command Center</h1>
            <p className="text-muted-foreground text-sm">AIIMS New Delhi — Real-time Emergency Management</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs bg-success/10 text-success px-3 py-1.5 rounded-full font-medium flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" /> System Online
            </span>
            <span className="text-xs bg-muted text-muted-foreground px-3 py-1.5 rounded-full">
              <Clock className="w-3 h-3 inline mr-1" /> Last updated: just now
            </span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => (
            <Card key={stat.label} className="p-5 border border-border/50">
              <div className="flex items-center justify-between mb-3">
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
                {trendIcon(stat.trend)}
              </div>
              <div className="text-2xl font-display font-bold text-foreground">
                {stat.available !== null ? stat.available : stat.value}
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                {stat.label} {stat.available !== null && `/ ${stat.value} total`}
              </div>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Triage Queue */}
          <div className="lg:col-span-2">
            <Card className="p-5 border border-border/50">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-display font-semibold text-foreground flex items-center gap-2">
                  <Brain className="w-5 h-5 text-accent" /> AI Triage Queue
                </h2>
                <span className="text-xs text-muted-foreground">{triageQueue.length} patients</span>
              </div>
              <div className="space-y-3">
                {triageQueue.map((patient) => (
                  <div
                    key={patient.id}
                    className={`flex items-center gap-4 p-3 rounded-lg border ${severityColors[patient.severity]} transition-all hover:shadow-card`}
                  >
                    <div className="text-center min-w-[50px]">
                      <div className="text-lg font-display font-bold">{patient.score}</div>
                      <div className="text-[10px] uppercase font-semibold">{patient.severity}</div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-foreground text-sm truncate">{patient.name}</div>
                      <div className="text-xs text-muted-foreground">{patient.type}</div>
                    </div>
                    <div className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {patient.time}
                    </div>
                    <Button size="sm" variant="outline" className="text-xs rounded-full">
                      Assign
                    </Button>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Department Load */}
          <div>
            <Card className="p-5 border border-border/50">
              <h2 className="font-display font-semibold text-foreground mb-4">Department Load</h2>
              <div className="space-y-5">
                {departments.map((dept) => {
                  const percent = Math.round((dept.patients / dept.capacity) * 100);
                  return (
                    <div key={dept.name}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm font-medium text-foreground flex items-center gap-1.5">
                          <dept.icon className="w-4 h-4 text-muted-foreground" /> {dept.name}
                        </span>
                        <span className={`text-xs font-bold ${percent > 85 ? "text-emergency" : percent > 60 ? "text-warning" : "text-success"}`}>
                          {percent}%
                        </span>
                      </div>
                      <Progress
                        value={percent}
                        className="h-2"
                      />
                      <div className="text-xs text-muted-foreground mt-1">
                        {dept.patients}/{dept.capacity} patients
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>

            {/* Blood Status Mini */}
            <Card className="p-5 border border-border/50 mt-4">
              <h2 className="font-display font-semibold text-foreground mb-3 flex items-center gap-2">
                <Droplets className="w-5 h-5 text-emergency" /> Blood Bank
              </h2>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { g: "O+", u: 67, s: "ok" }, { g: "O-", u: 5, s: "low" },
                  { g: "A+", u: 45, s: "ok" }, { g: "B-", u: 3, s: "crit" },
                ].map((b) => (
                  <div key={b.g} className="text-center p-2 rounded-lg bg-muted/50">
                    <div className="text-sm font-display font-bold text-foreground">{b.g}</div>
                    <div className={`text-xs font-bold ${b.s === "crit" ? "text-emergency" : b.s === "low" ? "text-warning" : "text-success"}`}>
                      {b.u}u
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HospitalDashboard;

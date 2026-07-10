import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  QrCode, User, Heart, Pill, AlertTriangle, FileText,
  Shield, Share2, Download, Plus, Calendar, Droplets
} from "lucide-react";

const samplePatient = {
  name: "Arjun Kumar",
  age: 34,
  blood: "B+",
  aadhaar: "XXXX-XXXX-7842",
  allergies: ["Penicillin", "Sulfa drugs"],
  conditions: ["Type 2 Diabetes", "Hypertension"],
  medications: ["Metformin 500mg", "Amlodipine 5mg"],
  emergencyContact: { name: "Priya Kumar", relation: "Wife", phone: "+91 98765 43210" },
  vaccinations: ["COVID-19 (Covishield)", "Hepatitis B", "Tetanus"],
  lastVisit: "2026-03-15",
};

const HealthPassportPage = () => {
  const [showQR, setShowQR] = useState(true);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-3">
            Universal Health Identity
          </span>
          <h1 className="text-3xl font-display font-bold text-foreground mb-2">Health Passport</h1>
          <p className="text-muted-foreground">Your complete medical identity — from birth to lifelong. Works even when you can't speak.</p>
        </div>

        {/* QR Card */}
        <Card className="p-6 mb-8 bg-gradient-hero text-primary-foreground relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-primary-foreground/5 rounded-full -translate-y-10 translate-x-10" />
          <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
            <div className="w-32 h-32 bg-primary-foreground rounded-xl flex items-center justify-center shadow-elevated">
              <QrCode className="w-20 h-20 text-navy" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-display font-bold">{samplePatient.name}</h2>
              <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-2 text-sm text-primary-foreground/70">
                <span>Age: {samplePatient.age}</span>
                <span className="flex items-center gap-1"><Droplets className="w-3 h-3" /> {samplePatient.blood}</span>
                <span>Aadhaar: {samplePatient.aadhaar}</span>
              </div>
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-4">
                <Button size="sm" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 rounded-full text-xs">
                  <Share2 className="w-3 h-3 mr-1" /> Share with Doctor
                </Button>
                <Button size="sm" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 rounded-full text-xs">
                  <Download className="w-3 h-3 mr-1" /> Download PDF
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Medical Info Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          <Card className="p-5 border border-border/50">
            <h3 className="font-display font-semibold text-foreground flex items-center gap-2 mb-3">
              <AlertTriangle className="w-4 h-4 text-emergency" /> Allergies
            </h3>
            <div className="flex flex-wrap gap-2">
              {samplePatient.allergies.map((a) => (
                <span key={a} className="px-3 py-1 rounded-full bg-emergency/10 text-emergency text-sm font-medium">{a}</span>
              ))}
            </div>
          </Card>

          <Card className="p-5 border border-border/50">
            <h3 className="font-display font-semibold text-foreground flex items-center gap-2 mb-3">
              <Heart className="w-4 h-4 text-primary" /> Chronic Conditions
            </h3>
            <div className="flex flex-wrap gap-2">
              {samplePatient.conditions.map((c) => (
                <span key={c} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">{c}</span>
              ))}
            </div>
          </Card>

          <Card className="p-5 border border-border/50">
            <h3 className="font-display font-semibold text-foreground flex items-center gap-2 mb-3">
              <Pill className="w-4 h-4 text-secondary" /> Current Medications
            </h3>
            <ul className="space-y-2">
              {samplePatient.medications.map((m) => (
                <li key={m} className="text-sm text-foreground bg-secondary/5 px-3 py-2 rounded-lg">{m}</li>
              ))}
            </ul>
          </Card>

          <Card className="p-5 border border-border/50">
            <h3 className="font-display font-semibold text-foreground flex items-center gap-2 mb-3">
              <Shield className="w-4 h-4 text-success" /> Vaccinations
            </h3>
            <ul className="space-y-2">
              {samplePatient.vaccinations.map((v) => (
                <li key={v} className="text-sm text-foreground bg-success/5 px-3 py-2 rounded-lg flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-success" /> {v}
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-5 border border-border/50 md:col-span-2">
            <h3 className="font-display font-semibold text-foreground flex items-center gap-2 mb-3">
              <User className="w-4 h-4 text-warning" /> Emergency Contact
            </h3>
            <div className="flex flex-wrap gap-6 text-sm">
              <div><span className="text-muted-foreground">Name:</span> <span className="text-foreground font-medium">{samplePatient.emergencyContact.name}</span></div>
              <div><span className="text-muted-foreground">Relation:</span> <span className="text-foreground font-medium">{samplePatient.emergencyContact.relation}</span></div>
              <div><span className="text-muted-foreground">Phone:</span> <span className="text-foreground font-medium">{samplePatient.emergencyContact.phone}</span></div>
            </div>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HealthPassportPage;

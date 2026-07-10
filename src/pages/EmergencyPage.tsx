import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Phone, MapPin, Hospital, Clock, AlertTriangle, Navigation,
  Baby, Heart, Bone, Brain, Ambulance, Star, Bed
} from "lucide-react";

const emergencyTypes = [
  { icon: Heart, label: "Cardiac", color: "bg-emergency/10 text-emergency border-emergency/30" },
  { icon: Brain, label: "Stroke", color: "bg-accent/10 text-accent border-accent/30" },
  { icon: Bone, label: "Accident", color: "bg-warning/10 text-warning border-warning/30" },
  { icon: Baby, label: "Pediatric", color: "bg-secondary/10 text-secondary border-secondary/30" },
  { icon: AlertTriangle, label: "Burns", color: "bg-emergency/10 text-emergency border-emergency/30" },
  { icon: Hospital, label: "General", color: "bg-teal/10 text-teal border-teal/30" },
];

const nearbyHospitals = [
  { name: "AIIMS New Delhi", distance: "2.3 km", beds: 12, icu: 3, eta: "8 min", rating: 4.8, specialties: ["Cardiac", "Trauma", "Neuro"] },
  { name: "Safdarjung Hospital", distance: "4.1 km", beds: 28, icu: 7, eta: "14 min", rating: 4.5, specialties: ["General", "Pediatric", "Burns"] },
  { name: "Max Super Speciality", distance: "5.7 km", beds: 45, icu: 12, eta: "18 min", rating: 4.9, specialties: ["Cardiac", "Ortho", "Neuro"] },
  { name: "Fortis Hospital", distance: "7.2 km", beds: 33, icu: 9, eta: "22 min", rating: 4.7, specialties: ["Trauma", "General", "Maternity"] },
];

const EmergencyPage = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [sosActive, setSosActive] = useState(false);

  const handleSOS = () => {
    setSosActive(true);
    setTimeout(() => setSosActive(false), 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container max-w-6xl mx-auto px-4 py-8">
        {/* SOS Button */}
        <div className="text-center mb-10">
          <button
            onClick={handleSOS}
            className={`relative w-40 h-40 rounded-full bg-gradient-emergency text-primary-foreground font-display font-bold text-2xl shadow-emergency transition-all duration-300 ${
              sosActive ? "scale-110 pulse-emergency" : "hover:scale-105"
            }`}
          >
            {sosActive ? (
              <span className="flex flex-col items-center">
                <Navigation className="w-8 h-8 mb-1 animate-spin" />
                <span className="text-sm">Locating...</span>
              </span>
            ) : (
              <span className="flex flex-col items-center">
                <Phone className="w-8 h-8 mb-1" />
                SOS
              </span>
            )}
          </button>
          <p className="text-muted-foreground text-sm mt-4">
            Tap to send emergency alert with your GPS location
          </p>
        </div>

        {/* Emergency Type Selection */}
        <div className="mb-10">
          <h2 className="text-xl font-display font-semibold text-foreground mb-4">Type of Emergency</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {emergencyTypes.map((type) => (
              <button
                key={type.label}
                onClick={() => setSelectedType(type.label)}
                className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all duration-200 ${
                  selectedType === type.label
                    ? type.color + " border-current shadow-card scale-105"
                    : "bg-card border-border hover:border-muted-foreground/30"
                }`}
              >
                <type.icon className="w-6 h-6" />
                <span className="text-xs font-medium">{type.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Nearby Hospitals */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-display font-semibold text-foreground">
              <MapPin className="w-5 h-5 inline mr-2 text-primary" />
              Nearest Hospitals — Live Beds
            </h2>
            <span className="text-xs bg-success/10 text-success px-3 py-1 rounded-full font-medium flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              Live
            </span>
          </div>

          <div className="space-y-4">
            {nearbyHospitals.map((hospital, i) => (
              <Card key={hospital.name} className="p-5 hover:shadow-elevated transition-all border border-border/50">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-display font-semibold text-foreground">{hospital.name}</h3>
                      <span className="flex items-center gap-0.5 text-warning text-xs">
                        <Star className="w-3 h-3 fill-current" /> {hospital.rating}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {hospital.distance}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> ETA {hospital.eta}</span>
                    </div>
                    <div className="flex gap-2 mt-2">
                      {hospital.specialties.map((s) => (
                        <span key={s} className="text-xs bg-muted px-2 py-0.5 rounded-full text-muted-foreground">{s}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-display font-bold text-success">{hospital.beds}</div>
                      <div className="text-xs text-muted-foreground flex items-center gap-1"><Bed className="w-3 h-3" /> Beds</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-display font-bold text-emergency">{hospital.icu}</div>
                      <div className="text-xs text-muted-foreground">ICU</div>
                    </div>
                    <Button size="sm" className="bg-gradient-emergency text-primary-foreground rounded-full">
                      <Ambulance className="w-4 h-4 mr-1" /> Route
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EmergencyPage;

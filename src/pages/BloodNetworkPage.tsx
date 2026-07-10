import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Droplets, Search, MapPin, Phone, Clock, Users, AlertTriangle, Heart, Plus
} from "lucide-react";

const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

const bloodInventory = [
  { group: "A+", units: 45, status: "adequate" },
  { group: "A-", units: 8, status: "low" },
  { group: "B+", units: 52, status: "adequate" },
  { group: "B-", units: 3, status: "critical" },
  { group: "AB+", units: 22, status: "adequate" },
  { group: "AB-", units: 2, status: "critical" },
  { group: "O+", units: 67, status: "adequate" },
  { group: "O-", units: 5, status: "low" },
];

const donors = [
  { name: "Rahul S.", blood: "O-", distance: "1.2 km", lastDonation: "4 months ago", available: true },
  { name: "Meera P.", blood: "B-", distance: "2.8 km", lastDonation: "6 months ago", available: true },
  { name: "Anil K.", blood: "AB-", distance: "3.5 km", lastDonation: "3 months ago", available: true },
  { name: "Sunita D.", blood: "A-", distance: "5.1 km", lastDonation: "5 months ago", available: true },
];

const statusColors: Record<string, string> = {
  adequate: "bg-success/10 text-success",
  low: "bg-warning/10 text-warning",
  critical: "bg-emergency/10 text-emergency",
};

const BloodNetworkPage = () => {
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-1.5 rounded-full bg-emergency/10 text-emergency text-sm font-semibold mb-3">
            Real-Time Blood Network
          </span>
          <h1 className="text-3xl font-display font-bold text-foreground mb-2">
            Blood & Resource Network
          </h1>
          <p className="text-muted-foreground">
            Cross-hospital blood inventory & instant donor matching. No more shortage deaths.
          </p>
        </div>

        {/* Blood Group Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {bloodGroups.map((group) => (
            <button
              key={group}
              onClick={() => setSelectedGroup(selectedGroup === group ? null : group)}
              className={`w-14 h-14 rounded-xl border-2 font-display font-bold text-lg transition-all ${
                selectedGroup === group
                  ? "bg-emergency text-primary-foreground border-emergency scale-110 shadow-emergency"
                  : "bg-card border-border text-foreground hover:border-emergency/50"
              }`}
            >
              {group}
            </button>
          ))}
        </div>

        {/* Inventory Grid */}
        <div className="mb-10">
          <h2 className="text-xl font-display font-semibold text-foreground mb-4 flex items-center gap-2">
            <Droplets className="w-5 h-5 text-emergency" /> Live Inventory — Delhi NCR
            <span className="text-xs bg-success/10 text-success px-3 py-1 rounded-full font-medium flex items-center gap-1 ml-auto">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" /> Live
            </span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {bloodInventory
              .filter((b) => !selectedGroup || b.group === selectedGroup)
              .map((item) => (
                <Card key={item.group} className="p-4 text-center border border-border/50 hover:shadow-card transition-all">
                  <div className="text-2xl font-display font-bold text-foreground mb-1">{item.group}</div>
                  <div className="text-3xl font-display font-bold text-foreground">{item.units}</div>
                  <div className="text-xs text-muted-foreground mb-2">units available</div>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium capitalize ${statusColors[item.status]}`}>
                    {item.status}
                  </span>
                </Card>
              ))}
          </div>
        </div>

        {/* Nearby Donors */}
        <div>
          <h2 className="text-xl font-display font-semibold text-foreground mb-4 flex items-center gap-2">
            <Users className="w-5 h-5 text-secondary" /> Available Donors Near You
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {donors
              .filter((d) => !selectedGroup || d.blood === selectedGroup)
              .map((donor) => (
                <Card key={donor.name} className="p-5 border border-border/50 hover:shadow-elevated transition-all">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-foreground">{donor.name}</h3>
                        <span className="px-2 py-0.5 rounded-full bg-emergency/10 text-emergency text-xs font-bold">{donor.blood}</span>
                      </div>
                      <div className="flex gap-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {donor.distance}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {donor.lastDonation}</span>
                      </div>
                    </div>
                    <Button size="sm" className="bg-gradient-emergency text-primary-foreground rounded-full">
                      <Phone className="w-4 h-4 mr-1" /> Request
                    </Button>
                  </div>
                </Card>
              ))}
          </div>
          {selectedGroup && donors.filter((d) => d.blood === selectedGroup).length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              <AlertTriangle className="w-8 h-8 mx-auto mb-2 text-warning" />
              <p>No donors available for {selectedGroup} nearby. Expanding search radius...</p>
            </div>
          )}
        </div>

        {/* Register as Donor */}
        <Card className="mt-10 p-6 bg-gradient-teal text-primary-foreground text-center">
          <Heart className="w-10 h-10 mx-auto mb-3 heartbeat" />
          <h3 className="text-xl font-display font-bold mb-2">Become a Blood Donor</h3>
          <p className="text-primary-foreground/70 mb-4">One donation can save up to 3 lives. Register now and get notified when someone needs your blood type.</p>
          <Button className="bg-primary-foreground text-teal hover:bg-primary-foreground/90 rounded-full px-8 font-semibold">
            <Plus className="w-4 h-4 mr-2" /> Register as Donor
          </Button>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default BloodNetworkPage;

import { Heart, Phone, MapPin, Droplets, QrCode, Brain, Globe, Shield, Activity } from "lucide-react";

const features = [
  {
    icon: Activity,
    title: "Golden Hour Engine",
    description: "Real-time hospital bed & ICU availability with ambulance ETA tracking. Every second counts — we ensure none are wasted.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: QrCode,
    title: "Universal Health Passport",
    description: "QR-based digital identity from newborn to elderly. Works even when the patient is unconscious — no paperwork delays.",
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: Brain,
    title: "AI Smart Triage",
    description: "Age-aware severity scoring for newborns, children, adults & elderly. Critical patients are never lost in queues.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Droplets,
    title: "Blood & Resource Network",
    description: "Real-time cross-hospital blood inventory & donor matching. Eliminating 12,000+ preventable deaths per year.",
    color: "bg-emergency/10 text-emergency",
  },
  {
    icon: Globe,
    title: "Multilingual SOS",
    description: "One-tap emergency in 22+ Indian languages. Language should never be a barrier when life is at stake.",
    color: "bg-teal/10 text-teal",
  },
  {
    icon: Shield,
    title: "Privacy-First Architecture",
    description: "End-to-end encryption, consent-based data sharing, Aadhaar-linked verification. Your health data, your control.",
    color: "bg-warning/10 text-warning",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 px-4 bg-background" id="features">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Revolutionary Features
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            What Makes LifePulse <span className="text-gradient-hero">Unique</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            No existing app solves all these problems together. We built LifePulse from ground zero
            to address every gap in India's emergency healthcare.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative bg-card rounded-xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 border border-border/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

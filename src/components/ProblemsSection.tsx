import { Baby, User, Users, Heart } from "lucide-react";

const problems = [
  {
    icon: Baby,
    age: "Newborns",
    problem: "NICU bed unavailability causes 40% neonatal deaths in rural India",
    solution: "Real-time NICU bed tracking across 50km radius with priority ambulance dispatch",
  },
  {
    icon: User,
    age: "Children & Adults",
    problem: "Wrong triage, delayed treatment, no portable medical records",
    solution: "AI triage + QR health passport ensures instant correct treatment anywhere",
  },
  {
    icon: Users,
    age: "Pregnant Women",
    problem: "Maternal mortality from delayed referrals and blood unavailability",
    solution: "High-risk pregnancy flagging, guaranteed blood reserve, pre-registered delivery hospital",
  },
  {
    icon: Heart,
    age: "Elderly (60+)",
    problem: "Cardiac & stroke patients miss golden hour due to hospital confusion",
    solution: "One-tap SOS with auto-detected nearest cardiac/stroke center & real-time bed status",
  },
];

const ProblemsSection = () => {
  return (
    <section className="py-20 px-4 bg-muted/50" id="problems">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-emergency/10 text-emergency text-sm font-semibold mb-4">
            The Real Problems
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            From <span className="text-gradient-emergency">Birth to Old Age</span> — No One is Safe
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Every age group faces unique emergency healthcare failures. LifePulse addresses each one.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((item, index) => (
            <div
              key={item.age}
              className="bg-card rounded-xl overflow-hidden shadow-card border border-border/50 hover:shadow-elevated transition-all duration-300"
            >
              <div className="bg-gradient-emergency p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-display font-semibold text-primary-foreground">{item.age}</h3>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <span className="text-xs font-semibold text-emergency uppercase tracking-wider">Problem</span>
                  <p className="text-foreground mt-1">{item.problem}</p>
                </div>
                <div>
                  <span className="text-xs font-semibold text-success uppercase tracking-wider">LifePulse Solution</span>
                  <p className="text-muted-foreground mt-1">{item.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container max-w-4xl mx-auto">
        <div className="bg-gradient-hero rounded-2xl p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_hsl(350_80%_52%_/_0.3),_transparent_50%)]" />
          <div className="relative z-10">
            <Sparkles className="w-10 h-10 text-warning mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
              Ready to Revolutionize Emergency Healthcare?
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-8 max-w-xl mx-auto">
              Join the movement to eliminate every preventable emergency death in India.
              LifePulse is more than an app — it's a mission.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/emergency">
                <Button size="lg" className="bg-primary-foreground text-navy hover:bg-primary-foreground/90 rounded-full px-8 font-semibold">
                  Try Emergency SOS <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 rounded-full px-8 font-semibold">
                  Hospital Partner
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

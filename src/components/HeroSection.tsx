import { Heart, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-illustration.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-95" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(350_80%_52%_/_0.15),_transparent_50%)]" />

      {/* ECG line decoration */}
      <svg className="absolute bottom-0 left-0 w-full h-20 opacity-10" viewBox="0 0 1200 80">
        <path
          d="M0,40 L200,40 L220,10 L240,70 L260,20 L280,60 L300,40 L500,40 L520,5 L540,75 L560,15 L580,65 L600,40 L800,40 L820,10 L840,70 L860,20 L880,60 L900,40 L1200,40"
          fill="none"
          stroke="hsl(0 0% 100%)"
          strokeWidth="2"
          className="ecg-animate"
        />
      </svg>

      <div className="container relative z-10 max-w-6xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="slide-up">
            <div className="flex items-center gap-2 mb-6">
              <Heart className="w-5 h-5 text-primary-foreground heartbeat" />
              <span className="text-primary-foreground/80 text-sm font-medium tracking-wide uppercase">
                India's First Unified Emergency Platform
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-6">
              Every Second Counts.
              <br />
              <span className="text-warning">LifePulse</span> Saves Lives.
            </h1>

            <p className="text-primary-foreground/75 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
              From newborns to grandparents — real-time hospital beds, smart triage,
              blood network, and universal health passport. No more preventable deaths.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/emergency">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground pulse-emergency rounded-full px-8 text-base font-semibold shadow-emergency"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Emergency SOS
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 rounded-full px-8 text-base font-semibold"
                >
                  Hospital Dashboard
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-12 pt-8 border-t border-primary-foreground/10">
              {[
                { value: "30%", label: "Trauma deaths preventable" },
                { value: "12K+", label: "Blood shortage deaths/yr" },
                { value: "< 8 min", label: "Golden hour response" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl md:text-3xl font-display font-bold text-warning">
                    {stat.value}
                  </div>
                  <div className="text-primary-foreground/60 text-xs mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-center fade-in">
            <img
              src={heroImage}
              alt="LifePulse emergency healthcare platform connecting hospitals, ambulances, and patients"
              width={1280}
              height={720}
              className="float-gentle max-w-md w-full drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

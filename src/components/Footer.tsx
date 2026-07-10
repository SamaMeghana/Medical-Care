import { Activity, Heart, Github, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-navy text-primary-foreground/70 py-16 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-emergency flex items-center justify-center">
                <Activity className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-xl text-primary-foreground">
                Life<span className="text-warning">Pulse</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-sm">
              India's first unified emergency healthcare platform. From newborns to grandparents —
              every life deserves the fastest, smartest emergency response.
            </p>
          </div>
          <div>
            <h4 className="font-display font-semibold text-primary-foreground mb-4">Platform</h4>
            <div className="space-y-2 text-sm">
              <Link to="/emergency" className="block hover:text-primary-foreground transition-colors">Emergency SOS</Link>
              <Link to="/health-passport" className="block hover:text-primary-foreground transition-colors">Health Passport</Link>
              <Link to="/blood-network" className="block hover:text-primary-foreground transition-colors">Blood Network</Link>
              <Link to="/dashboard" className="block hover:text-primary-foreground transition-colors">Hospital Dashboard</Link>
            </div>
          </div>
          <div>
            <h4 className="font-display font-semibold text-primary-foreground mb-4">About</h4>
            <div className="space-y-2 text-sm">
              <span className="block">Made in India 🇮🇳</span>
              <span className="block">For every citizen</span>
              <span className="block">Open-source vision</span>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs">© 2026 LifePulse. Built to save lives. Made with <Heart className="w-3 h-3 inline text-primary" /> in India.</p>
          <div className="flex gap-4">
            <span className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full">v1.0 — MVP</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

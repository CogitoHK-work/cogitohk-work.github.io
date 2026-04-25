import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, MessageCircle, Facebook, Instagram } from "lucide-react";
import logo from "@/assets/cogito-logo.png";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <img src={logo} alt="" width={48} height={48} className="h-12 w-12 brightness-150" />
              <div>
                <div className="font-display text-xl">Cogito Education</div>
                <div className="font-zh text-sm opacity-70">夏恩教育</div>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm opacity-75 leading-relaxed">
              An indigenous Hong Kong education brand using AI-powered personalization and intimate
              small groups to help every child realize their true potential.
            </p>
            <p className="mt-4 italic text-gold/90 text-sm font-display">
              "Live yourself as light."
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-cream mb-4 tracking-wide uppercase">Explore</h4>
            <ul className="space-y-2.5 text-sm opacity-80">
              <li><Link to="/programmes" className="hover:text-gold transition-colors">Programmes</Link></li>
              <li><Link to="/advantage" className="hover:text-gold transition-colors">Cogito Advantage</Link></li>
              <li><Link to="/about" className="hover:text-gold transition-colors">About</Link></li>
              <li><Link to="/comments" className="hover:text-gold transition-colors">Parents' Comments</Link></li>
              <li><Link to="/partners" className="hover:text-gold transition-colors">Partners & Franchisees</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-cream mb-4 tracking-wide uppercase">Contact</h4>
            <ul className="space-y-2.5 text-sm opacity-80">
              <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 text-gold" /> 8128 8686</li>
              <li className="flex items-start gap-2"><MessageCircle className="h-4 w-4 mt-0.5 text-gold" /> Parents 6400 9989</li>
              <li className="flex items-start gap-2"><MessageCircle className="h-4 w-4 mt-0.5 text-gold" /> Others 9494 0994</li>
              <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 text-gold" /> cogitohk@gmail.com</li>
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-gold" /> Lam Tin, Hong Kong</li>
            </ul>
            <div className="mt-5 flex gap-3">
              <a href="https://facebook.com/cogitohk" aria-label="Facebook" className="rounded-full bg-cream/10 p-2 hover:bg-gold hover:text-ink transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Instagram" className="rounded-full bg-cream/10 p-2 hover:bg-gold hover:text-ink transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-cream/10 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs opacity-70">
          <div>© 2026 Cogito Education (Hong Kong) Ltd. All Rights Reserved. <span className="font-zh">"夏恩教育"</span> is a trademark of Cogito Education (Hong Kong) Ltd.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gold">Privacy Policy</a>
            <a href="#" className="hover:text-gold">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

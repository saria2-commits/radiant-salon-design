import { Instagram, Facebook, Heart } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="relative py-12 overflow-hidden" style={{ background: 'linear-gradient(135deg, hsl(338 70% 25% / 0.95), hsl(338 50% 15% / 0.9), hsl(38 60% 30% / 0.8))' }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center gap-6">
          <img src={logo} alt="صالون نور للتجميل" className="w-16 h-16 rounded-full" />
          <p className="text-sm text-muted max-w-md">
            صالون نور للتجميل — حيث تكتشف كل امرأة إشراقتها الداخلية. في دمشق، سوريا.
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/nuorbeauty?igsh=MXZ5enBwam9pdDAwbw=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-primary transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.facebook.com/Nour.Alashkar.26"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-primary transition-colors"
            >
              <Facebook size={20} />
            </a>
          </div>
          <div className="border-t border-muted/20 w-full pt-6">
            <p className="text-xs text-muted/60 flex items-center justify-center gap-1">
              صُنع بـ <Heart size={12} className="text-primary" /> © {new Date().getFullYear()} صالون نور للتجميل
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

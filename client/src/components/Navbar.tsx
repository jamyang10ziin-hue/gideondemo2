import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Programs", to: "programs" },
    { name: "Team", to: "team" },
    { name: "Schedule", to: "schedule" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-md py-3 shadow-lg" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <ScrollLink to="hero" smooth={true} duration={500} className="cursor-pointer group">
          <div className="font-display font-bold text-2xl md:text-3xl text-white tracking-tighter uppercase italic">
            Gideon <span className="text-primary group-hover:text-white transition-colors">Boxing</span>
          </div>
        </ScrollLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              className="text-sm font-bold uppercase tracking-widest text-white/80 hover:text-primary transition-colors cursor-pointer"
            >
              {link.name}
            </ScrollLink>
          ))}
          <ScrollLink to="contact" smooth={true} duration={500}>
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-black uppercase font-bold tracking-wider rounded-none skew-x-[-10deg]"
            >
              <span className="skew-x-[10deg]">Join Now</span>
            </Button>
          </ScrollLink>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-black border-t border-white/10 p-6 md:hidden flex flex-col gap-4 shadow-2xl">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-bold uppercase tracking-widest text-white hover:text-primary cursor-pointer py-2 border-b border-white/5"
            >
              {link.name}
            </ScrollLink>
          ))}
          <ScrollLink to="contact" smooth={true} duration={500} onClick={() => setIsMobileMenuOpen(false)}>
            <Button className="w-full bg-primary text-black hover:bg-white uppercase font-bold mt-4">
              Get Started
            </Button>
          </ScrollLink>
        </div>
      )}
    </nav>
  );
}

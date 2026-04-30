import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import logo from "../assets/logoStartupPng.png";

const navLinks = [
  { label: "Início", href: "/" },
  { label: "Sobre Nós", href: "/about" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary backdrop-blur-sm border-b border-primary/80">
      <div className="container mx-auto flex items-center justify-between h-14 px-4">
        <a
          href="#home"
          className="flex items-center gap-2 font-display text-lg font-bold text-primary-foreground"
        >
          <img src={logo} className="h-6 w-5 text-primary-foreground" />
          Flux’Água
        </a>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-primary-foreground/75 hover:text-primary-foreground transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
          <a href="/checkout">
            <Button
              size="sm"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-xs"
            >
              Começar
            </Button>
          </a>
        </div>

        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-primary border-t border-primary-foreground/20 px-4 pb-4 space-y-2 animate-fade-in">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm text-primary-foreground/75 hover:text-primary-foreground py-2"
            >
              {l.label}
            </a>
          ))}
          <Button
            size="sm"
            className="w-full bg-primary-foreground text-primary text-xs"
          >
            Começar
          </Button>
        </div>
      )}
    </nav>
  );
}


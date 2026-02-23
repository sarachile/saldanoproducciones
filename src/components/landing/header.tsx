"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/#quienes-somos", label: "Quiénes Somos" },
  { href: "/#servicios", label: "Servicios" },
  { href: "/paseos", label: "Paseos" },
  { href: "/#galeria", label: "Galería" },
  { href: "/#contacto", label: "Contacto" },
];

const Logo = () => (
    <Link href="/" className="relative h-10 w-40">
        <Image
            src="/logo.png"
            alt="Saldaño Producciones Logo"
            fill
            className="object-contain"
            priority
        />
    </Link>
);

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/90 backdrop-blur-sm border-b border-border" : "bg-transparent",
        isMenuOpen ? "bg-background" : ""
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Logo />
          <div className="flex items-center">
            <nav className="hidden md:flex gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="hidden md:block ml-6">
                <Button asChild size="sm" className="rounded-full animate-pulse-cta transition-transform hover:scale-110">
                    <Link href="/casate-en-casa">Cásate en Casa</Link>
                </Button>
            </div>
            <div className="md:hidden ml-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-background">
          <nav className="flex flex-col items-center gap-6 py-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="mt-4 rounded-full transition-transform hover:scale-110" size="lg">
                <Link href="/casate-en-casa" onClick={() => setIsMenuOpen(false)}>Cásate en Casa</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}

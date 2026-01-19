import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const SocialLink = ({ href, icon: Icon }: { href: string; icon: React.ElementType }) => (
  <Button variant="ghost" size="icon" asChild>
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Icon className="h-5 w-5 text-foreground/80 hover:text-primary transition-colors" />
    </a>
  </Button>
);

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <Link href="/" className="relative h-8 w-36">
            <Image
                src="/logo cabecera.png"
                alt="Cabera Producciones Logo"
                fill
                className="object-contain"
            />
          </Link>
          <div className="flex gap-2">
            <SocialLink href="https://facebook.com" icon={Facebook} />
            <SocialLink href="https://instagram.com" icon={Instagram} />
            <SocialLink href="https://linkedin.com" icon={Linkedin} />
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Cabera Producciones. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

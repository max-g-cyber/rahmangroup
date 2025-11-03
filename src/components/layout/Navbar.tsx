"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const NavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) => (
  <Link href={href} onClick={onClick} className="text-sm font-medium text-theme-background/80 transition-colors hover:text-white">
    {children}
  </Link>
);
const MobileNavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) => (
    <Link href={href} onClick={onClick} className="block w-full rounded-md p-3 text-base font-medium text-theme-background hover:bg-theme-primary-dark">
      {children}
    </Link>
);

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    // Re-skinned: Forest Green background
    <header className="sticky top-0 z-50 w-full border-b border-theme-primary-dark bg-theme-primary shadow-md">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-3 text-lg font-semibold" onClick={closeMenu}>
          <Image src="/logos/rg-logo.png" alt="RG Logo" width={32} height={32} />
          <span className="hidden sm:inline-block text-white">Rahman Group of Companies Ltd.</span>
        </Link>
        <nav className="hidden items-center gap-4 md:flex lg:gap-6">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/profile">Company Profile</NavLink>
          <NavLink href="/?#concerns">Sister Concerns</NavLink>
          <NavLink href="/gallery">Gallery</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center rounded-md p-2 text-theme-background hover:bg-theme-primary-dark" aria-label="Toggle main menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="absolute left-0 right-0 top-16 z-40 border-t border-theme-primary-dark bg-theme-primary/95 backdrop-blur-sm md:hidden">
          <div className="space-y-1 p-4">
            <MobileNavLink href="/" onClick={closeMenu}>Home</MobileNavLink>
            <MobileNavLink href="/profile" onClick={closeMenu}>Company Profile</MobileNavLink>
            <MobileNavLink href="/?#concerns" onClick={closeMenu}>Sister Concerns</MobileNavLink>
            <MobileNavLink href="/gallery" onClick={closeMenu}>Gallery</MobileNavLink>
            <MobileNavLink href="/contact" onClick={closeMenu}>Contact</MobileNavLink>
          </div>
        </div>
      )}
    </header>
  );
}
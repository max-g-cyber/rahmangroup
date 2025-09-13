"use client"; // Required for interactivity (mobile menu toggle)

import Link from "next/link";
import { Package2, Menu, X } from "lucide-react";
import { useState } from "react";

// Internal component for NavLinks to standardize styling
const NavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) => (
  <Link
    href={href}
    onClick={onClick}
    className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
  >
    {children}
  </Link>
);

// Internal component for Mobile NavLinks
const MobileNavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) => (
  <Link
    href={href}
    onClick={onClick}
    className="block w-full rounded-md p-3 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
  >
    {children}
  </Link>
);

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        {/* Logo / Brand Link */}
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold" onClick={closeMenu}>
          <Package2 className="h-6 w-6 text-brand" />
          <span className="hidden sm:inline-block">RAHMAN GROUP</span>
        </Link>

        {/* Desktop Navigation (Hidden on mobile) */}
        <nav className="hidden items-center gap-4 md:flex lg:gap-6">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/profile">Company Profile</NavLink>
          {/* FIX (Input 1): Changed href to /?#concerns to work globally */}
          <NavLink href="/?#concerns">Sister Concerns</NavLink>
          <NavLink href="/gallery">Gallery</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </nav>

        {/* Mobile Menu Toggle (Visible only on mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            aria-label="Toggle main menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown (Conditional Render) */}
      {isMenuOpen && (
        <div className="border-t border-gray-200 md:hidden">
          <div className="space-y-1 p-4">
            <MobileNavLink href="/" onClick={closeMenu}>Home</MobileNavLink>
            <MobileNavLink href="/profile" onClick={closeMenu}>Company Profile</MobileNavLink>
            {/* FIX (Input 1): Changed href to /?#concerns */}
            <MobileNavLink href="/?#concerns" onClick={closeMenu}>Sister Concerns</MobileNavLink>
            <MobileNavLink href="/gallery" onClick={closeMenu}>Gallery</MobileNavLink>
            <MobileNavLink href="/contact" onClick={closeMenu}>Contact</MobileNavLink>
          </div>
        </div>
      )}
    </header>
  );
}
import Link from "next/link";
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    // ADJUSTMENT: Background is maroon, text is beige
    <footer className="mt-24 bg-theme-primary py-8 text-theme-background">
      <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between px-4 md:flex-row md:px-6">
        <p className="text-sm opacity-80">
          &copy; {currentYear} Rahman Group of Companies Ltd. All rights reserved.
        </p>
        <nav className="mt-4 flex gap-4 md:mt-0">
          <Link href="/profile" className="text-sm opacity-80 hover:opacity-100">Profile</Link>
          <Link href="/contact" className="text-sm opacity-80 hover:opacity-100">Contact</Link>
          <Link href="/admin" className="text-sm opacity-80 hover:opacity-100">Admin Login</Link>
        </nav>
      </div>
    </footer>
  );
}
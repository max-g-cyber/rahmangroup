import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    // Update: Switched to light theme classes
    <footer className="mt-24 border-t border-gray-200 py-8">
      <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between px-4 md:flex-row md:px-6">
        <p className="text-sm text-gray-500">
          &copy; {currentYear} Rahman Group. All rights reserved.
        </p>
        <nav className="mt-4 flex gap-4 md:mt-0">
          <Link href="/profile" className="text-sm text-gray-500 hover:text-gray-900">Profile</Link>
          <Link href="/contact" className="text-sm text-gray-500 hover:text-gray-900">Contact</Link>
          <Link href="/admin" className="text-sm text-gray-500 hover:text-gray-900">Admin Login</Link>
        </nav>
      </div>
    </footer>
  );
}
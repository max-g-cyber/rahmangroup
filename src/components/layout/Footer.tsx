import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    // Re-skinned: Forest Green background
    <footer className="bg-theme-primary py-12 text-theme-background">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 text-sm md:grid-cols-3">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logos/rg-logo.png" alt="RG Logo" width={32} height={32} />
              <span className="font-semibold text-lg text-white">Rahman Group of Companies Ltd.</span>
            </Link>
            <p className="opacity-80">&copy; {currentYear} Rahman Group of Companies Ltd. All rights reserved.</p>
          </div>
          <div className="space-y-2 opacity-80">
            <p className="font-semibold text-white mb-2">Contact Information</p>
            <p>House # 90, Road # 17/A, Block-E, Banani, Dhaka, Bangladesh</p>
            <p>Tel: +880 2 8816488</p>
            <p>Fax: +880 2 9886294</p>
            <p>Email: info@rahmangroup.net</p>
          </div>
          <div className="space-y-2">
            <p className="font-semibold text-white mb-2">Quick Links</p>
            <Link href="/contact" className="block opacity-80 hover:opacity-100">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
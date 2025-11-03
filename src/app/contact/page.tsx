import PageHeader from "@/components/layout/PageHeader";
import { Phone, Mail, MapPin, Printer } from "lucide-react";
export default function ContactPage() {
  return (
    <>
      <PageHeader title="Contact Us" subtitle="Get in touch with our team. We are available to assist you with any inquiries." />
      <div className="py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
            <div>
              <h3 className="text-3xl font-bold text-theme-primary">Send Us a Message</h3>
              <form action="#" method="POST" className="mt-8 space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-theme-text">Full Name</label>
                  <input type="text" name="name" id="name" required className="block w-full rounded-md border-gray-300 shadow-sm focus:border-theme-primary focus:ring-theme-primary" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-theme-text">Email</label>
                  <input type="email" name="email" id="email" required className="block w-full rounded-md border-gray-300 shadow-sm focus:border-theme-primary focus:ring-theme-primary" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-theme-text">Message</label>
                  <textarea name="message" id="message" rows={6} required className="block w-full rounded-md border-gray-300 shadow-sm focus:border-theme-primary focus:ring-theme-primary" />
                </div>
                <button type="submit" className="flex w-full justify-center rounded-md border border-transparent bg-theme-accent px-6 py-3 text-base font-semibold text-white shadow-sm hover:opacity-90">
                  Send Message
                </button>
              </form>
            </div>
            <div className="rounded-lg bg-white p-8">
              <h3 className="text-3xl font-bold text-theme-primary">Our Office</h3>
              <ul className="mt-8 space-y-6 text-theme-text/90">
                <li className="flex gap-4"><MapPin className="h-6 w-6 flex-shrink-0 text-theme-primary" /><span><strong>Address:</strong><br/>House # 90, Road # 17/A, Block-E, Banani, Dhaka, Bangladesh</span></li>
                <li className="flex gap-4"><Phone className="h-6 w-6 flex-shrink-0 text-theme-primary" /><span><strong>Tel:</strong><br/>+880 2 8816488<br/>+880 2 8824173<br/>+880 2 8829089</span></li>
                <li className="flex gap-4"><Printer className="h-6 w-6 flex-shrink-0 text-theme-primary" /><span><strong>Fax:</strong><br/>+880 2 9886294</span></li>
                <li className="flex gap-4"><Mail className="h-6 w-6 flex-shrink-0 text-theme-primary" /><span><strong>Email:</strong><br/>info@rahmangroup.net<br/>rahmanov@dhaka.net</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
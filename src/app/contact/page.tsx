import PageHeader from "@/components/layout/PageHeader";
import { Phone, Mail, MapPin } from "lucide-react"; // Icons we already installed

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch with our team. We are available to assist you with any inquiries."
      />

      <div className="py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
            
            {/* Column 1: Contact Form Scaffold */}
            <div>
              <h3 className="text-3xl font-bold text-brand-dark">Send Us a Message</h3>
              <form action="#" method="POST" className="mt-8 space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-brand-dark">Full Name</label>
                  <div className="mt-1">
                    <input type="text" name="name" id="name" required className="block w-full rounded-md border-gray-300 shadow-sm focus:border-brand focus:ring-brand sm:text-sm p-3" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-brand-dark">Email</label>
                  <div className="mt-1">
                    <input type="email" name="email" id="email" required className="block w-full rounded-md border-gray-300 shadow-sm focus:border-brand focus:ring-brand sm:text-sm p-3" />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-brand-dark">Message</label>
                  <div className="mt-1">
                    <textarea name="message" id="message" rows={6} required className="block w-full rounded-md border-gray-300 shadow-sm focus:border-brand focus:ring-brand sm:text-sm p-3" />
                  </div>
                </div>
                <div>
                  {/* Styled with your 'accent' yellow (Phase 6) */}
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md border border-transparent bg-accent px-6 py-3 text-base font-semibold text-brand-dark shadow-sm hover:bg-accent-light focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Column 2: Contact Details */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-3xl font-bold text-brand-dark">Our Office</h3>
              <ul className="mt-8 space-y-6 text-gray-700">
                <li className="flex gap-4">
                  <MapPin className="h-6 w-6 flex-shrink-0 text-brand" />
                  <span>
                    <strong>Address:</strong> (Your Company Address Here)
                    <br />
                    Dhaka, Bangladesh
                  </span>
                </li>
                <li className="flex gap-4">
                  <Phone className="h-6 w-6 flex-shrink-0 text-brand" />
                  <span>
                    <strong>Phone:</strong> (Your Phone Number Here)
                  </span>
                </li>
                <li className="flex gap-4">
                  <Mail className="h-6 w-6 flex-shrink-0 text-brand" />
                  <span>
                    <strong>Email:</strong> info@rahmangroup.net (Example)
                  </span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
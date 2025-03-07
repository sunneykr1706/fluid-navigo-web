
import React from 'react';
import PageTransition from '@/components/PageTransition';
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon } from 'lucide-react';

const Contact = () => {
  return (
    <PageTransition>
      <div className="page-container">
        <section className="page-section">
          <h1 className="section-heading">Contact</h1>
          <p className="section-subheading">
            Reach out to us with any questions or inquiries.
          </p>
        </section>

        <section className="page-section">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-medium mb-6">Get in Touch</h3>
              <div className="space-y-8">
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
                      placeholder="Your email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <button
                    type="button"
                    className="px-5 py-2.5 bg-primary text-primary-foreground rounded-md transition-all duration-200 button-effect"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-6">Contact Information</h3>
              <div className="bg-card border rounded-lg p-6 shadow-sm">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPinIcon className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium">Location</h4>
                      <p className="text-muted-foreground">1234 Design Avenue, Creative District</p>
                      <p className="text-muted-foreground">San Francisco, CA 94103</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <PhoneIcon className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium">Phone</h4>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MailIcon className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-muted-foreground">hello@navigo.design</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <ClockIcon className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium">Hours</h4>
                      <p className="text-muted-foreground">Monday - Friday: 9am - 6pm</p>
                      <p className="text-muted-foreground">Saturday: 10am - 4pm</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Contact;

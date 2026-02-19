import React from 'react';
import { Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react';

export function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    const mailtoLink = `mailto:mrafisogi@gmail.com?subject=Portfolio Contact from ${name}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-darkBg transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-darkText">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-darkText">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span className="text-gray-800 dark:text-gray-200">mrafisogi@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span className="text-gray-800 dark:text-gray-200">(+91) 7975832709 / 7829171921</span>
              </div>
              <div className="flex items-center gap-4">
                <Instagram className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span className="text-gray-800 dark:text-gray-200">al_buraq_whitebeast</span>
              </div>
              <div className="flex items-center gap-4">
                <Twitter className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span className="text-gray-800 dark:text-gray-200">MdRafiSogi</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span className="text-gray-800 dark:text-gray-200">Huvina Hadagali, Karnataka, INDIA</span>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Your full name"
                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 dark:text-gray-100 transition-all duration-300"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 dark:text-gray-100 transition-all duration-300"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder="Tell me about your project or opportunity..."
                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 dark:text-gray-100 transition-all duration-300 resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-medium hover:shadow-lg transform hover:scale-[1.02]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

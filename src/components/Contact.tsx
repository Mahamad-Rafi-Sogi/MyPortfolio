import React from 'react';
import { Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-darkBg transition-colors duration-300">
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
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 focus:border-transparent text-gray-900 dark:text-gray-100 transition-colors duration-300"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 focus:border-transparent text-gray-900 dark:text-gray-100 transition-colors duration-300"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 focus:border-transparent text-gray-900 dark:text-gray-100 transition-colors duration-300"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 dark:bg-blue-700 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { Instagram, Mail, MapPin, Phone, Twitter, Copy, Check, Send, Loader2 } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const EMAIL = 'mrafisogi@gmail.com';
// To deliver messages straight to your inbox, create a free form at https://formspree.io
// and paste its endpoint below (e.g. 'https://formspree.io/f/xxxxxxx').
// While this is empty, the form gracefully falls back to opening the visitor's email client.
const FORMSPREE_ENDPOINT = '';

type SubmitStatus = 'idle' | 'sending' | 'success' | 'error';

export function Contact() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.15 });
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    if (FORMSPREE_ENDPOINT) {
      setStatus('sending');
      try {
        const res = await fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: formData,
        });
        if (res.ok) {
          setStatus('success');
          form.reset();
          setTimeout(() => setStatus('idle'), 5000);
        } else {
          setStatus('error');
        }
      } catch {
        setStatus('error');
      }
      return;
    }

    // Fallback: open the visitor's email client with a prefilled message.
    const mailtoLink = `mailto:${EMAIL}?subject=Portfolio Contact from ${name}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-darkBg transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2
          ref={ref}
          className={`text-3xl font-bold text-center mb-12 text-gray-900 dark:text-darkText ${isVisible ? 'will-reveal animate-fade-up' : 'opacity-0'}`}
        >Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-darkText">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />
                <span className="text-gray-800 dark:text-gray-200">{EMAIL}</span>
                <button
                  type="button"
                  onClick={copyEmail}
                  aria-label="Copy email address"
                  className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-md border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-green-500" /> Copied
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" /> Copy
                    </>
                  )}
                </button>
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
              disabled={status === 'sending'}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-medium hover:shadow-lg transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {status === 'sending' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" /> Sending...
                </>
              ) : (
                <>
                  Send Message <Send className="w-4 h-4" />
                </>
              )}
            </button>

            {status === 'success' && (
              <p
                role="status"
                className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400"
              >
                <Check className="w-4 h-4" /> Thanks! Your message has been sent.
              </p>
            )}
            {status === 'error' && (
              <p role="alert" className="text-sm text-red-600 dark:text-red-400">
                Something went wrong. Please email me directly at {EMAIL}.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

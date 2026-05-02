import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, MapPin, Loader2, Phone } from 'lucide-react';
import toast from 'react-hot-toast';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Pre-warm Render server when page loads (avoids cold start delay)
  useEffect(() => {
    fetch(`${API_URL}/api/health`).catch(() => {});
  }, []);

  const fetchWithTimeout = (url, options, timeout = 40000) => {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeout);
    return fetch(url, { ...options, signal: controller.signal })
      .finally(() => clearTimeout(timer));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const warmingToast = toast.loading('Sending your message...');

    try {
      const response = await fetchWithTimeout(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      toast.dismiss(warmingToast);

      if (response.ok) {
        toast.success(data.message || 'Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast.error(data.error || 'Failed to send message.');
      }
    } catch (error) {
      toast.dismiss(warmingToast);
      if (error.name === 'AbortError') {
        toast.error('Server is warming up — please try again in 30 seconds.');
      } else {
        toast.error('Network error. Please try again.');
      }
      console.error('Submit error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full pt-10 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Let's <span className="text-gradient">Connect</span></h1>
          <p className="text-xl text-textMuted max-w-2xl mx-auto">
            Ready to start your next project? Drop us a message and we'll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass p-8 md:p-10 rounded-3xl border border-white/5"
          >
            <h2 className="text-2xl font-bold text-white mb-8">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-textMuted mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-textMuted mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-textMuted mb-2">Project Details</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  rows={5}
                  className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                  placeholder="Tell us about your goals, timeline, and budget..."
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                aria-live="polite"
                className="w-full py-4 bg-primary text-background font-bold rounded-xl hover:bg-opacity-90 hover:shadow-[0_0_20px_rgba(0,255,204,0.3)] transition-all flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin mr-2" size={20} />
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-10">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <p className="text-textMuted mb-8 leading-relaxed">
                  Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-primary shrink-0 mr-4">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Email Us</h4>
                    <a href="mailto:chambion.online.com" className="text-textMuted hover:text-primary transition-colors">chambion.online.com</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-primary shrink-0 mr-4">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Office</h4>
                    <p className="text-textMuted">Chennai, India</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-primary shrink-0 mr-4">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Call Us</h4>
                    <p className="text-textMuted">9629023423<br/>70107 91192</p>
                  </div>
                </div>
              </div>

              <div className="pt-10 border-t border-white/5">
                <h4 className="text-white font-medium mb-6">Need a quicker response?</h4>
                <a 
                  href="https://wa.me/919629023423?text=Hi%20Chambion%2C%20I'm%20interested%20in%20your%20IT%20services.%20Let's%20talk!" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-[#25D366] text-white font-medium rounded-full hover:bg-opacity-90 transition-colors shadow-lg shadow-[#25D366]/20"
                >
                  <MessageCircle className="mr-2" size={20} />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

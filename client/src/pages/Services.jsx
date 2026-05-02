import { motion } from 'framer-motion';
import { Code, ShieldCheck, Database, CheckCircle2 } from 'lucide-react';
import PricingCard from '../components/PricingCard';
import CTASection from '../components/CTASection';

const Services = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="w-full pt-10">
      {/* Header */}
      <section className="py-20 text-center px-4">
        <motion.h1 
          initial="hidden" animate="visible" variants={fadeIn}
          className="text-4xl md:text-6xl font-bold text-white mb-6"
        >
          Our <span className="text-gradient">Services</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.6 }}
          className="text-xl text-textMuted max-w-2xl mx-auto"
        >
          Comprehensive technical solutions built for modern businesses.
        </motion.p>
      </section>

      {/* Web Dev Section */}
      <section className="py-20 bg-[#050505] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Code size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">High-Performance Web Development</h2>
              <p className="text-textMuted text-lg mb-8">
                We build blazingly fast, SEO-optimized web applications using the modern React ecosystem. Whether you need a corporate website, an e-commerce platform, or a complex SaaS dashboard, we deliver pixel-perfect results.
              </p>
              <ul className="space-y-3">
                {['Custom React/Next.js/Vite apps', 'Responsive, mobile-first design', 'API Integration & Backend Development', 'Performance optimization (Core Web Vitals)'].map((item, i) => (
                  <li key={i} className="flex items-center text-textMuted">
                    <CheckCircle2 className="text-primary mr-3" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <div className="glass p-8 rounded-3xl h-full min-h-[300px] flex items-center justify-center border-white/5">
               <span className="text-white/20 font-mono">{'<WebDevIllustration />'}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Accessibility Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center flex-col-reverse lg:flex-row-reverse">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-6">
                <ShieldCheck size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">WCAG Accessibility Audits</h2>
              <p className="text-textMuted text-lg mb-8">
                Digital inclusion is not optional. We conduct thorough WCAG 2.1/2.2 audits to ensure your website is usable by people with disabilities, protecting you from legal risk and expanding your market reach.
              </p>
              <ul className="space-y-3">
                {['Comprehensive manual & automated testing', 'Screen reader compatibility checks', 'Color contrast & keyboard navigation', 'Detailed remediation reports'].map((item, i) => (
                  <li key={i} className="flex items-center text-textMuted">
                    <CheckCircle2 className="text-secondary mr-3" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <div className="glass p-8 rounded-3xl h-full min-h-[300px] flex items-center justify-center border-white/5">
               <span className="text-white/20 font-mono">{'<A11yIllustration />'}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Web Scraping Section */}
      <section className="py-20 bg-[#050505] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Database size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Web Scraping & Automation</h2>
              <p className="text-textMuted text-lg mb-8">
                Transform the web into your database. We build resilient data extraction pipelines and automated workflows that gather critical business intelligence while navigating anti-bot protections.
              </p>
              <ul className="space-y-3">
                {['Custom headless browser automation', 'Data extraction & transformation', 'Scheduled scraping pipelines', 'API creation from scraped data'].map((item, i) => (
                  <li key={i} className="flex items-center text-textMuted">
                    <CheckCircle2 className="text-primary mr-3" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <div className="glass p-8 rounded-3xl h-full min-h-[300px] flex items-center justify-center border-white/5">
               <span className="text-white/20 font-mono">{'<ScrapingIllustration />'}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Simple, transparent pricing</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard 
              title="A11y Audit" 
              price="$999" 
              features={['Full Home Page Audit', 'Up to 5 Inner Pages', 'WCAG 2.1 AA Checklist', 'PDF Remediation Report']}
              delay={0.1}
            />
            <PricingCard 
              title="Web Development" 
              price="Custom" 
              features={['Custom React/Vite App', 'Tailwind CSS Styling', 'Responsive Design', 'SEO Optimization', 'Deployment Setup']}
              isPopular={true}
              delay={0.2}
            />
            <PricingCard 
              title="Data Scraper" 
              price="$1,499" 
              features={['Up to 3 Target Sites', 'Automated Daily Runs', 'Data Export (CSV/JSON)', 'Bypass Basic Anti-bot', '1 Month Support']}
              delay={0.3}
            />
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default Services;

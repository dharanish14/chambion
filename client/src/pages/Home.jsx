import { motion } from 'framer-motion';
import { ArrowRight, Code, ShieldCheck, Database } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import CTASection from '../components/CTASection';

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/20 blur-[150px] rounded-full mix-blend-screen pointer-events-none"></div>
        <div className="absolute bottom-0 left-[-100px] w-[400px] h-[400px] bg-secondary/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight mb-6">
                Building fast, accessible, and <span className="text-gradient">intelligent</span> web solutions.
              </h1>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-textMuted mb-10 max-w-2xl leading-relaxed"
            >
              Chambion is a premium IT services agency specializing in high-performance web development, WCAG-compliant accessibility audits, and robust web scraping automation.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-primary text-background font-bold rounded-full hover:bg-opacity-90 transition-all hover:shadow-[0_0_20px_rgba(0,255,204,0.4)] flex items-center"
              >
                Book Free Consultation
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link 
                to="/services" 
                className="px-8 py-4 bg-transparent text-white font-medium rounded-full hover:bg-white/5 transition-all flex items-center border border-transparent hover:border-white/10"
              >
                Explore Services
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-[#050505] relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Expertise that drives <span className="text-primary">growth</span></h2>
            <p className="text-textMuted text-lg">We deliver end-to-end technical solutions designed to scale your business and protect your digital presence.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              title="Web Development" 
              description="Custom React & Node.js applications built for speed, scalability, and exceptional user experience."
              icon={<Code size={28} />}
              delay={0.1}
            />
            <ServiceCard 
              title="Accessibility Audits" 
              description="Comprehensive WCAG 2.1/2.2 compliance testing to ensure your platform is usable by everyone."
              icon={<ShieldCheck size={28} />}
              delay={0.2}
            />
            <ServiceCard 
              title="Web Scraping" 
              description="Intelligent data extraction and automation pipelines to power your business intelligence."
              icon={<Database size={28} />}
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Why partner with Chambion?</h2>
              <p className="text-textMuted text-lg mb-8">
                We don't just write code; we build digital assets. Our approach combines cutting-edge engineering with obsessive attention to detail, ensuring every project is performant, accessible, and aligned with your business goals.
              </p>
              
              <ul className="space-y-6">
                {[
                  { title: "Performance First", desc: "Sub-second load times and optimized architectures." },
                  { title: "Inclusive Design", desc: "Accessibility built-in from day one, not as an afterthought." },
                  { title: "Modern Stack", desc: "Leveraging React, Vite, Node.js, and modern CSS ecosystems." },
                ].map((item, i) => (
                  <li key={i} className="flex">
                    <div className="mt-1 mr-4 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <div>
                      <h4 className="text-white font-medium text-lg">{item.title}</h4>
                      <p className="text-textMuted">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden glass p-2 border border-white/10 relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10"></div>
                <div className="w-full h-full bg-[#111] rounded-2xl flex items-center justify-center border border-white/5">
                  <span className="text-textMuted font-mono">{'<Illustration Placeholder />'}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>



      <CTASection />
    </div>
  );
};

export default Home;

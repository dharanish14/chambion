import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/20 blur-[120px] rounded-full z-0 pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass p-12 md:p-16 rounded-3xl border border-primary/20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to build something <span className="text-gradient">extraordinary?</span>
          </h2>
          <p className="text-lg text-textMuted mb-10 max-w-2xl mx-auto">
            Let's collaborate to bring your vision to life with fast, accessible, and cutting-edge web solutions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/contact" 
              className="w-full sm:w-auto px-8 py-4 bg-primary text-background font-semibold rounded-full hover:bg-opacity-90 transition-all hover:shadow-[0_0_20px_rgba(0,255,204,0.4)]"
            >
              Book Free Consultation
            </Link>
            <Link 
              to="/portfolio" 
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all"
            >
              View Our Work
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;

import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <div className="w-full min-h-[80vh] flex items-center justify-center pt-10 px-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center glass p-12 md:p-20 rounded-3xl border border-white/10 max-w-3xl w-full"
      >
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
          <span className="text-4xl">🚧</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Blog coming <span className="text-gradient">soon</span></h1>
        <p className="text-lg text-textMuted mb-10 max-w-xl mx-auto">
          We're currently writing deep-dive technical articles on React performance, WCAG accessibility compliance, and advanced scraping techniques. Check back soon!
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center px-6 py-3 bg-white/5 border border-white/10 text-white font-medium rounded-full hover:bg-white/10 transition-all"
        >
          <ArrowLeft className="mr-2" size={18} />
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default Blog;

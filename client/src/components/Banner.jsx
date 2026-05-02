import { useState } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Banner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 border-b border-white/10 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <div className="flex-1 flex justify-center items-center text-sm md:text-base">
          <span className="text-white font-medium mr-2">Ensure your website is accessible to everyone.</span>
          <Link to="/contact" className="text-primary hover:text-white font-bold inline-flex items-center group transition-colors">
            Get a Free Accessibility Audit
            <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <button 
          onClick={() => setIsVisible(false)}
          className="text-white/60 hover:text-white ml-4"
          aria-label="Close banner"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
};

export default Banner;

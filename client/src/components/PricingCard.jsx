import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const PricingCard = ({ title, price, features, isPopular, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`relative glass p-8 rounded-3xl border ${isPopular ? 'border-primary shadow-[0_0_30px_rgba(0,255,204,0.15)]' : 'border-white/10'}`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-background px-4 py-1 rounded-full text-sm font-bold tracking-wide">
          MOST POPULAR
        </div>
      )}
      <div className="text-center mb-8">
        <h3 className="text-xl font-medium text-white mb-2">{title}</h3>
        <div className="flex justify-center items-baseline">
          <span className="text-4xl font-bold text-white">{price}</span>
          {price !== 'Custom' && <span className="text-textMuted ml-1">/project</span>}
        </div>
      </div>
      
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="text-primary mt-1 mr-3 shrink-0" size={18} />
            <span className="text-textMuted text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Link
        to="/contact"
        className={`block w-full py-3 rounded-full text-center font-medium transition-all ${
          isPopular 
            ? 'bg-primary text-background hover:bg-opacity-90 hover:shadow-[0_0_15px_rgba(0,255,204,0.4)]' 
            : 'bg-white/5 text-white hover:bg-white/10'
        }`}
      >
        Get Started
      </Link>
    </motion.div>
  );
};

export default PricingCard;

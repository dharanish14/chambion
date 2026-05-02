import { motion } from 'framer-motion';

const ServiceCard = ({ title, description, icon, delay = 0 }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="glass p-8 rounded-2xl hover:bg-white/[0.15] transition-all duration-300 group cursor-pointer border-t border-l border-white/10"
    >
      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-textMuted leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

export default ServiceCard;

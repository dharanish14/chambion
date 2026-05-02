import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ title, category, image, onClick, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      onClick={onClick}
      className="group cursor-pointer rounded-2xl overflow-hidden bg-[#111] border border-white/5 relative"
    >
      <div className="aspect-video overflow-hidden bg-[#222] relative">
        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
           <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center text-primary transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
             <ArrowUpRight />
           </div>
        </div>
        {/* Placeholder for actual image */}
        <div className="w-full h-full flex items-center justify-center text-white/20 group-hover:scale-105 transition-transform duration-500">
          <span className="text-4xl font-bold tracking-widest uppercase opacity-20">{title.slice(0,2)}</span>
        </div>
      </div>
      <div className="p-6">
        <p className="text-primary text-sm font-medium mb-1">{category}</p>
        <h3 className="text-xl font-semibold text-white group-hover:text-primary transition-colors">{title}</h3>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

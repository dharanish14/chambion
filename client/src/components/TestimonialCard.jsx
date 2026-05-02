import { motion } from 'framer-motion';

const TestimonialCard = ({ quote, author, role, company, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="glass p-8 rounded-2xl border border-white/10 relative"
    >
      <div className="text-6xl text-primary/20 absolute top-4 left-6 font-serif">"</div>
      <p className="text-textMuted italic mb-6 relative z-10 pt-4">
        {quote}
      </p>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-background font-bold text-lg mr-4">
          {author.charAt(0)}
        </div>
        <div>
          <h4 className="text-white font-medium">{author}</h4>
          <p className="text-textMuted text-sm">{role}, <span className="text-primary/80">{company}</span></p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;

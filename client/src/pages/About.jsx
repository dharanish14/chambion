import { motion } from 'framer-motion';
import CTASection from '../components/CTASection';

const About = () => {
  return (
    <div className="w-full pt-10">
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our <span className="text-gradient">Story</span></h1>
          <p className="text-xl text-textMuted leading-relaxed mb-8">
            Founded with the belief that digital experiences should be fast, intelligent, and inclusive, Chambion is a specialized IT agency dedicated to engineering excellence.
          </p>
          <p className="text-lg text-textMuted leading-relaxed">
            We saw too many startups struggling with bloated codebases, inaccessible interfaces that alienated users, and manual processes that slowed down their growth. We built Chambion to be the antidote to average engineering. Our mission is to build digital infrastructure that not only looks beautiful but performs flawlessly under pressure.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white mb-8">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass p-8 rounded-2xl border border-white/5">
              <h3 className="text-primary text-xl font-bold mb-3">Performance Obsession</h3>
              <p className="text-textMuted">Every millisecond counts. We engineer architectures that load instantly and scale effortlessly.</p>
            </div>
            <div className="glass p-8 rounded-2xl border border-white/5">
              <h3 className="text-secondary text-xl font-bold mb-3">Universal Access</h3>
              <p className="text-textMuted">The web belongs to everyone. We build with strict adherence to WCAG standards from day one.</p>
            </div>
            <div className="glass p-8 rounded-2xl border border-white/5">
              <h3 className="text-primary text-xl font-bold mb-3">Pragmatic Automation</h3>
              <p className="text-textMuted">If it can be automated reliably, it should be. We turn manual workflows into efficient code.</p>
            </div>
            <div className="glass p-8 rounded-2xl border border-white/5">
              <h3 className="text-secondary text-xl font-bold mb-3">Transparent Partnership</h3>
              <p className="text-textMuted">No black-box development. We collaborate closely, communicating progress clearly and honestly.</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8">Tech Stack</h2>
          <div className="glass p-8 rounded-3xl border border-white/5">
            <div className="space-y-6">
              <div>
                <h4 className="text-white font-medium mb-3">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Next.js', 'Vite', 'Tailwind CSS', 'Framer Motion', 'TypeScript'].map((tech) => (
                    <span key={tech} className="px-4 py-2 bg-[#111] rounded-lg text-sm text-textMuted border border-white/5">{tech}</span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-white font-medium mb-3">Backend</h4>
                <div className="flex flex-wrap gap-2">
                  {['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'GraphQL', 'REST APIs'].map((tech) => (
                    <span key={tech} className="px-4 py-2 bg-[#111] rounded-lg text-sm text-textMuted border border-white/5">{tech}</span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-white font-medium mb-3">Tools & Automation</h4>
                <div className="flex flex-wrap gap-2">
                  {['Puppeteer', 'Playwright', 'Axe DevTools', 'Docker', 'GitHub Actions'].map((tech) => (
                    <span key={tech} className="px-4 py-2 bg-[#111] rounded-lg text-sm text-textMuted border border-white/5">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <CTASection />
    </div>
  );
};

export default About;

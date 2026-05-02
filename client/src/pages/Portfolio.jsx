import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import CTASection from '../components/CTASection';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "FinTech Analytics Dashboard",
      category: "Web Development",
      description: "A high-performance React dashboard for a financial firm, processing thousands of data points in real-time.",
      problem: "The client was using a legacy jQuery dashboard that took over 10 seconds to render large datasets, causing severe workflow bottlenecks.",
      solution: "We rebuilt the platform using React, Vite, and specialized charting libraries. We implemented virtualized lists and web workers for data processing.",
      result: "Load times reduced to under 1 second. System handles 10x more data with zero lag.",
      techStack: ["React", "Vite", "Tailwind CSS", "Recharts", "Web Workers"]
    },
    {
      id: 2,
      title: "GovPortal A11y Remediation",
      category: "Accessibility Audit",
      description: "Complete WCAG 2.1 AA audit and remediation for a local government portal.",
      problem: "The portal failed automated accessibility scans and was unusable by visually impaired citizens using screen readers.",
      solution: "Conducted a manual audit, created a 50-page remediation report, and updated the frontend components to be fully keyboard navigable and screen reader compatible.",
      result: "Achieved 100% compliance score. Zero critical a11y issues remaining.",
      techStack: ["Axe DevTools", "NVDA", "VoiceOver", "HTML5", "ARIA"]
    },
    {
      id: 3,
      title: "E-Commerce Competitor Tracker",
      category: "Web Scraping",
      description: "Automated pipeline tracking daily price changes across 5 major competitors.",
      problem: "The client was manually checking competitor prices daily, a process that was slow, error-prone, and unscalable.",
      solution: "Built a distributed scraping cluster using Puppeteer and Node.js that runs daily, circumvents bot protections, and outputs standardized data.",
      result: "Saved the client 30 hours per week and increased pricing agility by 400%.",
      techStack: ["Node.js", "Puppeteer", "MongoDB", "Express", "Cron"]
    },
    {
      id: 4,
      title: "HealthTech Patient Portal",
      category: "Web Development",
      description: "Secure, HIPAA-compliant patient portal built with React and Node.js.",
      problem: "Patients lacked a unified interface to view test results, book appointments, and message doctors securely.",
      solution: "Developed a secure React single-page application with robust authentication, end-to-end encryption for messaging, and an intuitive UI.",
      result: "Patient engagement increased by 65% in the first 3 months post-launch.",
      techStack: ["React", "Tailwind CSS", "Node.js", "PostgreSQL", "Socket.io"]
    }
  ];

  return (
    <div className="w-full pt-10">
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our <span className="text-gradient">Work</span></h1>
          <p className="text-xl text-textMuted max-w-2xl mx-auto">
            Explore a selection of our recent projects across web development, accessibility, and automation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id}
              title={project.title}
              category={project.category}
              delay={index * 0.1}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </section>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          >
            <div 
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            ></div>
            
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-[#0a0a0a] border border-white/10 rounded-3xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative z-10 shadow-2xl"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-textMuted hover:text-white hover:bg-white/10 transition-colors z-20"
              >
                <X size={20} />
              </button>
              
              <div className="p-8 sm:p-12">
                <span className="text-primary font-medium tracking-wider uppercase text-sm mb-3 block">{selectedProject.category}</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{selectedProject.title}</h2>
                <p className="text-xl text-textMuted mb-8">{selectedProject.description}</p>
                
                <div className="aspect-video bg-[#111] rounded-2xl border border-white/5 mb-10 flex items-center justify-center">
                  <span className="text-white/20 font-mono text-xl">{'<Project Image />'}</span>
                </div>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                      <span className="w-8 h-8 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center mr-3 text-sm">01</span>
                      The Challenge
                    </h3>
                    <p className="text-textMuted leading-relaxed pl-11">{selectedProject.problem}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                      <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 text-sm">02</span>
                      The Solution
                    </h3>
                    <p className="text-textMuted leading-relaxed pl-11">{selectedProject.solution}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                      <span className="w-8 h-8 rounded-full bg-secondary/10 text-secondary flex items-center justify-center mr-3 text-sm">03</span>
                      The Result
                    </h3>
                    <p className="text-textMuted leading-relaxed pl-11">{selectedProject.result}</p>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-white/10">
                  <h4 className="text-white font-medium mb-4">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {selectedProject.techStack.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-textMuted">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a href="#" className="flex-1 py-3 bg-primary text-background text-center font-bold rounded-full hover:bg-opacity-90 flex items-center justify-center transition-all">
                      Live Project <ExternalLink size={18} className="ml-2" />
                    </a>
                    <a href="#" className="flex-1 py-3 bg-white/5 border border-white/10 text-white text-center font-bold rounded-full hover:bg-white/10 flex items-center justify-center transition-all">
                      View Source <Github size={18} className="ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <CTASection />
    </div>
  );
};

export default Portfolio;

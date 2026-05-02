import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#050505] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-bold tracking-tighter text-white mb-4 block">
              Chambion<span className="text-primary">.</span>
            </Link>
            <p className="text-textMuted max-w-sm mb-6">
              Building fast, accessible, and intelligent web solutions for modern startups and enterprises.
            </p>
            <div className="flex space-x-4">
              {/* Social icons placeholders */}
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-textMuted hover:text-primary hover:bg-white/10 transition-colors">
                <span className="sr-only">Twitter</span>
                𝕏
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-textMuted hover:text-primary hover:bg-white/10 transition-colors">
                <span className="sr-only">LinkedIn</span>
                in
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-textMuted hover:text-primary hover:bg-white/10 transition-colors">
                <span className="sr-only">GitHub</span>
                gh
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-textMuted hover:text-primary transition-colors">Web Development</Link></li>
              <li><Link to="/services" className="text-textMuted hover:text-primary transition-colors">Accessibility Audits</Link></li>
              <li><Link to="/services" className="text-textMuted hover:text-primary transition-colors">Web Scraping</Link></li>
              <li><Link to="/services" className="text-textMuted hover:text-primary transition-colors">UI/UX Design</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-textMuted hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/portfolio" className="text-textMuted hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link to="/blog" className="text-textMuted hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-textMuted hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-textMuted text-sm text-center md:text-left mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Chambion. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-textMuted">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

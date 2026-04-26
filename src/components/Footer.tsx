import { Mail, Phone, ExternalLink, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 text-gray-300 border-t border-slate-700">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg">AVT AI System</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              An intelligent auditory-verbal therapy system with AI-driven learning for Sinhala-speaking hearing-impaired individuals.
            </p>
            <p className="text-xs text-gray-500">Project ID: 25-26J-121</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-blue-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/domain" className="hover:text-blue-400 transition">
                  Research Domain
                </a>
              </li>
              <li>
                <a href="/milestones" className="hover:text-blue-400 transition">
                  Milestones
                </a>
              </li>
              <li>
                <a href="/documents" className="hover:text-blue-400 transition">
                  Documents
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://silenspark.online/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition flex items-center gap-1">
                  Try the App <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <a href="/slides" className="hover:text-blue-400 transition">
                  Presentations
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-blue-400 transition">
                  Team
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-blue-400 transition">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="https://www.sliit.lk" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition flex items-center gap-1">
                  SLIIT <ExternalLink size={14} />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Get in Touch</h4>
            <div className="space-y-3 text-sm">
              <a href="mailto:lakshants500@gmail.com" className="flex items-center gap-2 hover:text-blue-400 transition">
                <Mail size={16} />
                <span>lakshants500@gmail.com</span>
              </a>
              <a href="tel:0740884483" className="flex items-center gap-2 hover:text-blue-400 transition">
                <Phone size={16} />
                <span>0740884483</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 pt-8"></div>

        {/* Bottom Section */}
        <div className="flex justify-end">
          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition text-sm font-medium"
          >
            Back to Top <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}

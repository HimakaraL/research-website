import { Mail, Phone, ExternalLink, ArrowUp, Link, MapPin } from "lucide-react";

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
                <a href="/" className="hover:text-green-400 transition">
                  Overview
                </a>
              </li>
              <li>
                <a href="/domain" className="hover:text-green-400 transition">
                  Research Domain
                </a>
              </li>
              <li>
                <a href="/milestones" className="hover:text-green-400 transition">
                  Milestones
                </a>
              </li>
              <li>
                <a href="/documents" className="hover:text-green-400 transition">
                  Documents
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold flex items-center gap-2">
              <Link size={18} className="text-gray-400" />
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="https://silenspark.online/" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition flex items-center gap-1">
                  Web Application <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a href="/slides" className="hover:text-green-400 transition">
                  Presentations
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-green-400 transition">
                  About Team
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-green-400 transition">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="https://www.sliit.lk" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition flex items-center gap-1">
                  SLIIT Website <ExternalLink size={12} />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Contact</h3>
            <div className="space-y-3 text-sm text-gray-400">
              <a href="mailto:lakshants500@gmail.com" className="flex items-center gap-2 hover:text-green-400 transition">
                <Mail size={16} />
                lakshants500@gmail.com
              </a>
              <a href="tel:0740884483" className="flex items-center gap-2 hover:text-green-400 transition">
                <Phone size={16} />
                (+94) 740 884 483
              </a>
              <p className="flex items-start gap-2 pt-1">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>
                  Faculty of Computing<br />
                  SLIIT, Malabe<br />
                  Sri Lanka
                </span>
              </p>
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
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition text-sm font-medium text-white"
          >
            Back to Top <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}

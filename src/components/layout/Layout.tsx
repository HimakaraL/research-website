import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Footer from "../Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Domain", path: "/domain" },
    { name: "Milestones", path: "/milestones" },
    { name: "Documents", path: "/documents" },
    { name: "Slides", path: "/slides" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      {/* ACADEMIC HEADER - University Branding */}
      <div className="bg-slate-900 text-white py-3 border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold">SLIIT</span>
            <span className="text-gray-300">|</span>
            <div className="flex flex-col leading-tight">
              <span className="text-xs font-medium">Faculty of Computing</span>
              <span className="text-xs text-gray-300">Research Project 25-26J-121</span>
            </div>
          </div>
          <div className="text-right text-xs text-gray-400">
            <p>Sri Lanka Institute of Information Technology</p>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* LOGO */}
          <div className="flex items-center gap-3">
            <h1 className="font-bold text-lg text-gray-900">AVT AI System</h1>
            <span className="text-xs text-gray-500 px-2 py-1 bg-gray-100 rounded">25-26J-121</span>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex gap-6 text-sm">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `relative transition ${
                    isActive
                      ? "text-blue-600 font-semibold"
                      : "text-gray-700 hover:text-blue-600"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.name}

                    {/* Animated underline */}
                    <span
                      className={`absolute left-0 -bottom-1 h-[2px] bg-blue-600 transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
            onClick={() => setOpen(!open)}
          >
            <div className="transition-transform duration-300">
              {open ? <X /> : <Menu />}
            </div>
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-6 pb-4 space-y-2 text-sm">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-lg transition ${
                    isActive
                      ? "bg-blue-50 text-blue-600 font-medium"
                      : "text-gray-700 hover:bg-gray-100"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <main className="flex-1 w-full">
        <div className="max-w-6xl mx-auto px-6 py-10">
          {children}
        </div>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
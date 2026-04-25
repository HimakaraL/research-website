import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

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
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 via-white to-slate-100">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* LOGO */}
          <h1 className="font-semibold text-sm text-gray-900 tracking-tight">
            AVT AI System - 25-26J-121
          </h1>

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
      <main className="flex-1 max-w-6xl mx-auto w-full px-6 py-10">
        {children}
      </main>
    </div>
  );
}
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Ear } from "lucide-react";
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
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-[#35A754] shadow-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* LOGO */}
          <div className="flex items-center gap-2">
            <Ear className="text-[#defa25]" size={28} />
            <h1 className="font-bold text-2xl text-[#2b2f3a] tracking-tight">SilentSpark</h1>
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
                      ? "text-[#2b2f3a] font-bold"
                      : "text-white hover:text-[#2b2f3a]"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.name}

                    {/* Animated underline */}
                    <span
                      className={`absolute left-0 -bottom-1 h-[2px] bg-[#defa25] transition-all duration-300 ${
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
            className="md:hidden p-2 rounded-lg hover:bg-[#2c8d46] transition"
            onClick={() => setOpen(!open)}
          >
            <div className="transition-transform duration-300 text-[#2b2f3a]">
              {open ? <X /> : <Menu />}
            </div>
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 bg-[#2c8d46] ${
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-6 pb-4 pt-4 space-y-2 text-sm">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-lg transition ${
                    isActive
                      ? "bg-[#2b2f3a] text-[#defa25] font-bold"
                      : "text-white hover:bg-[#227238]"
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
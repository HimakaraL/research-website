import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `block py-2 hover:text-primary ${
      isActive ? "text-primary font-semibold" : "text-gray-700"
    }`;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <h1 className="font-bold text-xl text-primary">
            Smart First Aid IoT
          </h1>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 text-sm">
            <NavLink className="hover:text-primary" to="/">
              Home
            </NavLink>
            <NavLink className="hover:text-primary" to="/domain">
              Domain
            </NavLink>
            <NavLink className="hover:text-primary" to="/milestones">
              Milestones
            </NavLink>
            <NavLink className="hover:text-primary" to="/documents">
              Documents
            </NavLink>
            <NavLink className="hover:text-primary" to="/slides">
              Slides
            </NavLink>
            <NavLink className="hover:text-primary" to="/about">
              About
            </NavLink>
            <NavLink className="hover:text-primary" to="/contact">
              Contact
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {open && (
          <div className="md:hidden bg-white border-t px-6 pb-4 space-y-2 text-sm">
            <NavLink
              onClick={() => setOpen(false)}
              className={linkClass}
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              onClick={() => setOpen(false)}
              className={linkClass}
              to="/domain"
            >
              Domain
            </NavLink>
            <NavLink
              onClick={() => setOpen(false)}
              className={linkClass}
              to="/milestones"
            >
              Milestones
            </NavLink>
            <NavLink
              onClick={() => setOpen(false)}
              className={linkClass}
              to="/documents"
            >
              Documents
            </NavLink>
            <NavLink
              onClick={() => setOpen(false)}
              className={linkClass}
              to="/slides"
            >
              Slides
            </NavLink>
            <NavLink
              onClick={() => setOpen(false)}
              className={linkClass}
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              onClick={() => setOpen(false)}
              className={linkClass}
              to="/contact"
            >
              Contact
            </NavLink>
          </div>
        )}
      </header>

      {/* Page Content */}
      <main className="flex-1 max-w-6xl mx-auto w-full px-6 py-10">
        {children}
      </main>
    </div>
  );
}

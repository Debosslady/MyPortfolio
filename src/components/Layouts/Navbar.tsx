"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavItem } from "@/hooks/types";

const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "about" },
  { label: "Process", href: "process" },
  { label: "Portfolio", href: "portfolio" },
  { label: "Services", href: "services" },
  { label: "Blog", href: "blog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-purple-900">SoftwareQueen</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          {navItems.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="hover:text-purple-900 transition">
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="bg-purple-900 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden focus:outline-none"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-white shadow-md flex flex-col items-start px-[24px] space-y-4 py-6 text-gray-700 font-medium">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="hover:text-purple-900"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="bg-purple-900 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition"
            >
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}

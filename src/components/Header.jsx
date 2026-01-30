import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 text-white font-bold flex items-center justify-center rounded-full">
            H
          </div>
          <span className="text-lg lg:text-xl font-bold text-gray-800">
            医疗健康
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 text-gray-700 font-medium">
          <a className="hover:text-blue-600 transition" href="/">
            Home
          </a>
          <a className="hover:text-blue-600 transition" href="/About">
            About
          </a>
          <a className="hover:text-blue-600 transition" href="/Services">
            Services
          </a>

          <button className="ml-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Make Appointment
          </button>
        </nav>

        {/* Mobile Button */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t shadow-md">
          <div className="flex flex-col px-6 py-6 gap-5 text-gray-700 font-medium">
            <a onClick={() => setMenuOpen(false)} href="#">
              Home
            </a>
            <a onClick={() => setMenuOpen(false)} href="#">
              About
            </a>
            <a onClick={() => setMenuOpen(false)} href="#">
              Services
            </a>
            <a onClick={() => setMenuOpen(false)} href="#">
              Pages
            </a>
            <a onClick={() => setMenuOpen(false)} href="#">
              Blog
            </a>
            <a onClick={() => setMenuOpen(false)} href="#">
              Contact
            </a>

            <button className="mt-4 bg-blue-600 text-white py-3 rounded-full text-center">
              Make Appointment
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

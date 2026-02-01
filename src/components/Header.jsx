import { useState } from "react";
import image4 from "../assets/image/image4.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#FFFFFF] border-b border-[#E0E0E0]">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo + Name */}
        <div className="flex items-center gap-3">
          <img
            src={image4}
            alt="Riverstone Hospital Logo"
            className="h-14 w-14 object-contain"
          />
          <span className="text-xl font-bold text-[#0A3D62] tracking-wide">
            Riverstone
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 font-medium text-[#2C2C2C]">
          <a href="/" className="hover:text-[#1E8F6F] transition">
            Home
          </a>
          <a href="/About" className="hover:text-[#1E8F6F] transition">
            About
          </a>
          <a href="/Services" className="hover:text-[#1E8F6F] transition">
            Services
          </a>

          <button className="ml-4 bg-[#F39C12] text-white px-5 py-2 rounded-lg font-semibold hover:bg-[#e08c0f] transition">
            Make Appointment
          </button>
        </nav>

        {/* Mobile Button */}
        <button
          className="lg:hidden text-2xl text-[#0A3D62]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#FFFFFF] border-t border-[#E0E0E0] shadow-md">
          <div className="flex flex-col px-6 py-6 gap-5 font-medium text-[#2C2C2C]">
            <a onClick={() => setMenuOpen(false)} href="/">
              Home
            </a>
            <a onClick={() => setMenuOpen(false)} href="/About">
              About
            </a>
            <a onClick={() => setMenuOpen(false)} href="/Services">
              Services
            </a>

            <button className="mt-4 bg-[#F39C12] text-white py-3 rounded-lg font-semibold hover:bg-[#e08c0f] transition">
              Make Appointment
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

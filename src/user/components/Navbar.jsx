import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "APPLY", path: "/apply" },
    { name: "CONTACT US", path: "/contact" },
    { name: "PARTNERED COLLEGES", path: "/partnered-colleges" },
  ];

  return (
    <nav className="bg-[#2f4a6d] text-white fixed w-full z-[100] shadow-md">
      
      {/* Navbar Container */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 md:py-5 flex items-center justify-between">

        {/* LEFT - LOGO */}
        <div className="flex-shrink-0">
          <Link to="/" className="text-2xl md:text-3xl font-bold whitespace-nowrap">
            <span className="text-[#3b82f6]">100</span> Transcripts
          </Link>
        </div>

        {/* CENTER - DESKTOP NAV MENU */}
        <div className="hidden lg:flex justify-center flex-1">
         <ul className="flex items-center gap-8 xl:gap-12 text-sm xl:text-base font-semibold whitespace-nowrap">

            <li><Link to="/" className="hover:text-blue-300 transition-colors uppercase">HOME</Link></li>
            <li><Link to="/about" className="hover:text-blue-300 transition-colors uppercase">ABOUT</Link></li>

            {/* SERVICES DROPDOWN */}
            <li
              className="relative cursor-pointer group"
              onMouseEnter={() => setDropdown(true)}
              onMouseLeave={() => setDropdown(false)}
            >
              <div className="flex items-center gap-1 hover:text-blue-300 transition-colors uppercase">
                SERVICES <FiChevronDown size={18} />
              </div>

              {dropdown && (
                <div className="absolute top-full left-0 bg-white text-slate-800 rounded-xl shadow-2xl w-60 py-4 mt-2 border border-slate-100 overflow-hidden">
                  <Link to="/services/credential" className="block px-6 py-3 hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium">
                    Credential Evaluation
                  </Link>
                  <Link to="/services/certificates" className="block px-6 py-3 hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium">
                    Certificates
                  </Link>
                  <Link to="/services/verification" className="block px-6 py-3 hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium">
                    Verification
                  </Link>
                </div>
              )}

            </li>

            <li><Link to="/apply" className="hover:text-blue-300 transition-colors uppercase">APPLY</Link></li>
            <li><Link to="/contact" className="hover:text-blue-300 transition-colors uppercase">CONTACT US</Link></li>
            <li><Link to="/partnered-colleges" className="hover:text-blue-300 transition-colors uppercase">PARTNERED COLLEGES</Link></li>

          </ul>
        </div>

        {/* RIGHT - DASHBOARD BUTTON (Desktop) */}
        <div className="hidden lg:flex items-center justify-end flex-shrink-0">
          <Link to="/login" className="bg-[#3b82f6] text-white px-6 py-2.5 rounded-full font-bold hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/20 active:scale-95 text-sm">
            LOGIN
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="lg:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>

      </div>

      {/* MOBILE MENU DRAWER */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#2f4a6d] border-t border-white/10 shadow-2xl animate-in slide-in-from-top duration-300">
          <ul className="flex flex-col p-6 space-y-4 font-bold tracking-tight">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.path} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 hover:text-blue-300 transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="pt-4 border-t border-white/10">
              <Link 
                to="/login" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full bg-[#3b82f6] text-center py-4 rounded-2xl shadow-lg"
              >
                LOGIN / REGISTER
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
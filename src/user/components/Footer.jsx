import React from "react";
import { Link } from "react-router-dom";
import { FiPhone, FiMail, FiMapPin, FiCheckCircle } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2f4a6d] text-white pt-16 border-t border-[#3e5d85]">

      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 pb-12 md:pb-16">

        {/* BRAND */}
        <div className="space-y-4 md:space-y-5">
          <Link to="/" className="text-xl md:text-2xl font-black tracking-tight">
            <span className="text-[#3b82f6]">100</span>{" "}
            <span className="text-white uppercase tracking-tighter">Transcripts</span>
          </Link>

          <p className="text-blue-100 text-xs md:text-sm leading-relaxed opacity-70 font-medium">
            India's most trusted partner for university transcripts and academic documents since 2016.
          </p>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:py-2 bg-[#3e5d85] rounded-lg text-white text-[10px] md:text-xs font-bold shadow-lg shadow-black/10">
            <FiCheckCircle className="text-[#60a5fa]" /> ISO 9001:2015 Certified
          </div>
        </div>

        {/* NAVIGATION */}
        <div>
          <h4 className="text-base md:text-lg font-black mb-4 md:mb-6 text-white uppercase tracking-widest text-[10px] md:text-xs opacity-50">Navigation</h4>
          <ul className="grid grid-cols-2 sm:grid-cols-1 gap-2 md:gap-3 text-xs md:text-sm font-bold">
            {[
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
              { name: "Partnered Colleges", path: "/partnered-colleges" },
              { name: "About Us", path: "/about" },
              { name: "Track Status", path: "/file-status" },
              { name: "Contact", path: "/contact" },
              { name: "Apply Now", path: "/apply" }
            ].map((link) => (
              <li key={link.name}>
                <Link to={link.path} className="hover:text-blue-300 transition text-blue-100 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-base md:text-lg font-black mb-4 md:mb-6 text-white uppercase tracking-widest text-[10px] md:text-xs opacity-50">Need Help Fast?</h4>

          <div className="space-y-3 md:space-y-4">
            <a
              href="https://wa.me/919941991402"
              className="flex items-center gap-3 p-3 md:p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition group"
            >
              <FaWhatsapp className="text-[#60a5fa] group-hover:scale-110 transition text-lg md:text-xl" />
              <span className="font-black text-[#60a5fa] text-xs md:text-sm uppercase tracking-wider">WhatsApp Support</span>
            </a>

            <a
              href="tel:+919941991402"
              className="flex items-center gap-3 p-3 md:p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl hover:bg-blue-500/20 transition group"
            >
              <FiPhone className="text-[#60a5fa] group-hover:scale-110 transition text-lg md:text-xl" />
              <span className="font-black text-[#60a5fa] text-xs md:text-sm uppercase tracking-wider">Call an Expert</span>
            </a>
          </div>
        </div>

        {/* ADDRESS + MAP */}
        <div className="space-y-4 md:space-y-5">
          <h4 className="text-base md:text-lg font-black mb-4 md:mb-6 text-white uppercase tracking-widest text-[10px] md:text-xs opacity-50">Reach Us</h4>

          <div className="flex gap-3 text-xs md:text-sm text-blue-100 font-medium">
            <FiMapPin className="text-blue-400 mt-1 shrink-0" />
            <p className="leading-relaxed opacity-80">Plot No: 801, Mathrusree Nagar, Hyderabad, 500038</p>
          </div>

          <div className="flex gap-3 text-xs md:text-sm text-blue-100 font-medium">
            <FiMail className="text-blue-400 shrink-0" />
            <p className="opacity-80">support@100transcripts.com</p>
          </div>

          {/* SMALL MAP */}
          <div className="flex justify-start">
            <div className="w-full h-32 md:w-48 md:h-32 rounded-2xl overflow-hidden border border-white/10 mt-2 shadow-2xl relative group">
              <iframe
                title="location"
                src="https://www.google.com/maps?q=Hyderabad&output=embed"
                className="w-full h-full border-0 grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition duration-700"
                loading="lazy"
              ></iframe>
              <div className="absolute inset-0 bg-blue-900/20 pointer-events-none"></div>
            </div>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-blue-200/60 gap-4 border-t border-[#3e5d85]">
        <p>© {currentYear} 100 Transcripts LLP. All rights reserved.</p>

        <div className="flex gap-6">
          <Link to="#" className="hover:text-white transition">Privacy Policy</Link>
          <Link to="#" className="hover:text-white transition">Terms of Use</Link>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
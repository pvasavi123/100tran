import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebookF, FaYoutube, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-[#1e3a5f] to-[#2f4a6d] text-gray-300 pt-16 pb-8">

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-4 gap-10">

        {/* 🔥 COMPANY INFO */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            <span className="text-green-400">100</span> Transcripts
          </h2>

          <p className="text-sm text-gray-300 leading-relaxed">
            100 Transcripts LLP delivers fast, secure Indian university
            educational documents for global organizations.
          </p>

          {/* 🔥 SOCIAL ICONS */}
          <div className="flex gap-4 mt-6 text-lg">

            <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-blue-500 transition">
              <FaFacebookF />
            </a>

            <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-red-500 transition">
              <FaYoutube />
            </a>

            <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-green-500 transition">
              <FaWhatsapp />
            </a>

            <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-blue-400 transition">
              <FaLinkedinIn />
            </a>

          </div>

          {/* VISITORS */}
          <div className="mt-6">
            <p className="text-sm text-gray-300">Visitors</p>
            <h4 className="text-lg font-semibold text-white">
              422,385+
            </h4>
          </div>
        </div>

        {/* 🔥 SERVICES */}
        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-blue-300 cursor-pointer">Credential Evaluation</li>
            <li className="hover:text-blue-300 cursor-pointer">Certificates</li>
            <li className="hover:text-blue-300 cursor-pointer">Verifications</li>
            <li className="hover:text-blue-300 cursor-pointer">Pricing</li>
          </ul>
        </div>

        {/* 🔥 COMPANY */}
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-blue-300 cursor-pointer">Careers</li>
            <li className="hover:text-blue-300 cursor-pointer">Contact Us</li>
            <li className="hover:text-blue-300 cursor-pointer">Become a Partner</li>
            <li className="hover:text-blue-300 cursor-pointer">Discussions</li>
            <li className="hover:text-blue-300 cursor-pointer">Terms & Conditions</li>
            <li className="hover:text-blue-300 cursor-pointer">Privacy, Refund & Cancellation</li>
          </ul>
        </div>

        {/* 🔥 CONTACT */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact Us</h3>

          <div className="space-y-3 text-sm">

            <p className="flex items-start gap-2">
              <MapPin size={16} className="mt-1" />
              Plot No: 801, Mathrusree Nagar, Hyderabad, 500049
            </p>

            <p className="flex items-center gap-2">
              <Phone size={16} />
              +91 994 199 1402
            </p>

            <p className="flex items-center gap-2">
              <Mail size={16} />
              support@100Transcripts.com
            </p>

          </div>
        </div>

      </div>

      {/* 🔥 BOTTOM BAR */}
      <div className="border-t border-white/20 mt-12 pt-6 text-center text-sm text-gray-300">
        © 2026 100 Transcripts LLP. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;
import React from "react";
import { motion } from "framer-motion";
import { FiClock, FiShield, FiGlobe } from "react-icons/fi";
const features = [
  {
    icon: <FiClock size={28} />,
    title: "Fast Processing",
    desc: "Quick and efficient transcript handling to save your valuable time.",
  },
  {
    icon: <FiShield size={28} />,
    title: "Secure & Reliable",
    desc: "Your documents are handled with complete safety and confidentiality.",
  },
  {
    icon: <FiGlobe size={28} />,
    title: "Worldwide Reach",
    desc: "Serving students and professionals across the globe seamlessly.",
  },
];

const WhyChoose = () => {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">

        {/* 🔥 PREMIUM HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="flex items-center justify-center gap-4">
            <span className="w-12 h-[3px] bg-[#2f4a6d]"></span>

            <p className="text-sm md:text-base font-bold uppercase text-[#2f4a6d] tracking-wider">
              Why Choose Us
            </p>

            <span className="w-12 h-[3px] bg-[#2f4a6d]"></span>
          </div>

          <h2 className="mt-4 text-3xl md:text-5xl font-black text-[#2f4a6d] tracking-tight">
            The most <span className="text-[#3b82f6]">Reliable</span> transcript partner.
          </h2>

          <p className="mt-4 text-[#2f4a6d] opacity-70 max-w-2xl mx-auto text-base font-medium">
            With years of experience and a strong pan-India network, we make
            transcript processing simple, fast, and reliable for everyone.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8">

          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="group bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* ICON */}
              <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">
                {item.icon}
              </div>

              {/* TITLE */}
              <h3 className="mt-6 text-lg font-black text-[#2f4a6d] uppercase tracking-tighter">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="mt-3 text-sm text-[#2f4a6d] opacity-60 leading-relaxed font-bold">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default WhyChoose;
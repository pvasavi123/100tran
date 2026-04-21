import React from "react";
import { Search } from "lucide-react";
import { motion } from "framer-motion";

const UniversitySearch = () => {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-white to-slate-50">

      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">

        {/* 🔥 SAME HEADING STYLE (LIKE WHO WE ARE) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center justify-center gap-4">
            <span className="w-12 h-[3px] bg-blue-600"></span>

            <p className="text-sm md:text-base font-bold uppercase text-blue-600 tracking-wider">
              Find Your University
            </p>

            <span className="w-12 h-[3px] bg-blue-600"></span>
          </div>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#2f4a6d]">
            Explore Institutions for Expert Guidance
          </h2>

          <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
            Search universities, choose services, and get your transcripts processed easily.
          </p>
        </motion.div>

        {/* 🔍 SEARCH BOX */}
        <div className="bg-white shadow-xl rounded-2xl p-6 md:p-10">
          <div className="grid md:grid-cols-4 gap-6 items-end">

            {/* STATE */}
            <div className="text-left">
              <label className="text-sm text-gray-600">Select State</label>
              <select className="w-full mt-2 px-4 py-3 rounded-xl border">
                <option>Select State</option>
              </select>
            </div>

            {/* UNIVERSITY */}
            <div className="text-left">
              <label className="text-sm text-gray-600">Select University</label>
              <select className="w-full mt-2 px-4 py-3 rounded-xl border">
                <option>First Select State</option>
              </select>
            </div>

            {/* PURPOSE */}
            <div className="text-left">
              <label className="text-sm text-gray-600">Select Purpose</label>
              <select className="w-full mt-2 px-4 py-3 rounded-xl border">
                <option>Select Purpose</option>
              </select>
            </div>

            {/* BUTTON */}
            <div>
              <button className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
                <Search size={18} />
                Search
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default UniversitySearch;
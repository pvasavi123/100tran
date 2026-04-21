import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Ravi Kumar",
    rating: 5,
    review:
      "Excellent service! The team handled my transcript process very smoothly and delivered on time.",
  },
  {
    name: "Sneha Reddy",
    rating: 5,
    review:
      "Very professional and responsive. They kept me updated throughout the process.",
  },
  {
    name: "Arjun Patel",
    rating: 5,
    review:
      "Fast processing and great support. Everything was completed perfectly.",
  },
  {
    name: "Meena Sharma",
    rating: 5,
    review:
      "Trustworthy service. The team guided me step by step.",
  },
  {
    name: "Karthik Reddy",
    rating: 5,
    review:
      "Amazing experience! Very smooth and hassle-free.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Reviews = () => {
  const scrollReviews = [...reviews, ...reviews];

  return (
    <section className="w-full py-20 bg-white overflow-hidden">

      {/* 🔥 HEADING */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-14 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-4">
            <span className="w-12 h-[3px] bg-blue-600"></span>
            <p className="text-sm font-bold uppercase text-blue-600 tracking-wider">
               Reviews
            </p>
            <span className="w-12 h-[3px] bg-blue-600"></span>
          </div>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#2f4a6d]">
            What Our Customers Say
          </h2>

          <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
            Trusted by thousands of students across India
          </p>
        </motion.div>
      </div>

      {/* 🔥 SCROLL SECTION */}
      <div className="relative flex">

        {/* (Optional) remove if you don’t want fade */}
        {/* <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" /> */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="flex animate-marquee whitespace-nowrap py-4"
        >
          {scrollReviews.map((item, index) => (
            <motion.div
              variants={itemVariants}
              key={index}
              className="mx-4 flex flex-col justify-between min-w-[280px] md:min-w-[340px] h-48 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl hover:border-blue-200 hover:-translate-y-2 transition-all duration-300 p-5"
            >
              {/* ⭐ Stars */}
              <div className="flex gap-1 text-yellow-400 mb-2">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              {/* 📝 Review */}
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                "{item.review}"
              </p>

              {/* 👤 User */}
              <div className="flex items-center gap-3 mt-4">
                <div className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold text-sm">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h4 className="font-semibold text-[#2f4a6d] text-sm">
                    {item.name}
                  </h4>
                  <p className="text-xs text-gray-400">Verified User</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Reviews;
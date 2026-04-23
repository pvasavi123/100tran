import React from "react";
import { Clock, ShieldCheck, Globe } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <Clock size={28} />,
    title: "Fast Processing",
    desc: "Quick and efficient transcript handling to save your valuable time.",
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Secure & Reliable",
    desc: "Your documents are handled with complete safety and confidentiality.",
  },
  {
    icon: <Globe size={28} />,
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
            <span className="w-12 h-[3px] bg-blue-600"></span>

            <p className="text-sm md:text-base font-bold uppercase text-blue-600 tracking-wider">
              Why Choose Us
            </p>

            <span className="w-12 h-[3px] bg-blue-600"></span>
          </div>

          

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-base">
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
              <h3 className="mt-6 text-lg font-semibold text-[#2f4a6d]">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="mt-3 text-sm text-gray-500 leading-relaxed">
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

/* Mobile Responsiveness Styles */
const WhyChooseMobileStyles = `
@media (max-width: 1024px) {
  .why-choose-section {
    padding: 3rem 1rem !important;
  }
  
  .why-choose-grid {
    grid-template-columns: repeat(2, 1fr) !important;
    gap: 1.5rem !important;
  }
  
  .why-choose-title {
    font-size: 2rem !important;
  }
  
  .why-choose-description {
    font-size: 1rem !important;
  }
}

@media (max-width: 768px) {
  .why-choose-section {
    padding: 2rem 0.5rem !important;
  }
  
  .why-choose-grid {
    grid-template-columns: 1fr !important;
    gap: 1rem !important;
  }
  
  .why-choose-title {
    font-size: 1.5rem !important;
  }
  
  .why-choose-description {
    font-size: 0.9rem !important;
  }
  
  .why-choose-card {
    padding: 1.5rem !important;
  }
  
  .feature-icon {
    width: 3rem !important;
    height: 3rem !important;
  }
  
  .feature-title {
    font-size: 1.1rem !important;
  }
  
  .feature-description {
    font-size: 0.85rem !important;
  }
}

@media (max-width: 480px) {
  .why-choose-section {
    padding: 1.5rem 0.25rem !important;
  }
  
  .why-choose-title {
    font-size: 1.25rem !important;
  }
  
  .why-choose-description {
    font-size: 0.85rem !important;
  }
  
  .why-choose-card {
    padding: 1rem !important;
  }
  
  .feature-icon {
    width: 2.5rem !important;
    height: 2.5rem !important;
  }
  
  .feature-title {
    font-size: 1rem !important;
  }
  
  .feature-description {
    font-size: 0.8rem !important;
  }
  
  .header-lines {
    width: 2rem !important;
  }
}
`;

// Inject mobile styles into the document
if (typeof window !== 'undefined') {
  const styleId = 'why-choose-mobile-styles';
  if (!document.getElementById(styleId)) {
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = WhyChooseMobileStyles;
    document.head.appendChild(style);
  }
}
import React, { useState, useLayoutEffect, useRef } from "react";
import { FiChevronDown, FiHelpCircle, FiPlus, FiMinus } from "react-icons/fi";
import gsap from "gsap";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const comp = useRef(null);

  const faqs = [
    { q: "What services does 100Transcripts LLP provide?", a: "We provide end-to-end assistance for obtaining transcripts, degree certificates, mark sheets, and medium of instruction (MOI) certificates from all Indian universities. We also handle direct delivery to evaluation bodies like WES, IEE, and ECE." },
    { q: "Can I track my application status?", a: "Yes! Once you submit your application through our portal, you will receive a unique File ID. You can use our real-time tracking tool on the 'File Status' page to monitor every step of the process." },
    { q: "Is the process secure and recognized?", a: "ABSOLUTELY. We are an ISO-certified firm and official partners with major evaluation agencies like IEE and ECE. Your documents are handled with the highest level of security and confidentiality." },
    { q: "Can I choose electronic or physical transcripts?", a: "Yes, we support both. Based on your target university or evaluation body's requirements, we can facilitate electronic delivery (E-Transcripts) or secure physical shipping via premium couriers." },
    { q: "Which evaluation agencies are supported?", a: "We support WES (Canada/USA), IQAS, CES, ICES, NASBA, PEBC, UK-NARIC/ECCTIS, Re Vera, and we are official partners of IEE, ECE, and SpanTran." },
    { q: "How do I apply for transcript services?", a: "Simply click the 'Begin Application' or 'Apply Now' button on our homepage. Follow the guided steps to provide your university details and required documents, and our team will take it from there." }
  ];

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".faq-item", {
        y: 30,
        opacity: 1, // Start solid
        stagger: 0.05,
        duration: 0.6,
        scrollTrigger: {
          trigger: ".faq-container",
          start: "top 95%",
        }
      });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={comp} className="bg-slate-50 py-16 md:py-32 px-4 md:px-8 font-['Inter',_sans-serif]">
      <div className="max-w-4xl mx-auto faq-container">
        
        {/* HEADER */}
        <div className="text-center mb-12 md:mb-20">
           <h4 className="text-[#3b82f6] font-black uppercase tracking-[0.2em] text-[10px] md:text-xs mb-3 md:mb-4">Common Questions</h4>
           <h2 className="text-2xl md:text-5xl font-black text-[#2f4a6d] leading-tight tracking-tighter">
             Questions? <span className="text-[#3b82f6]">Answers Here.</span>
           </h2>
        </div>


        {/* ACCORDION GRID */}
        <div className="space-y-3 md:space-y-4">
           {faqs.map((faq, i) => {
             const isOpen = openIndex === i;

             return (
               <div 
                key={i} 
                className={`faq-item group bg-white rounded-2xl md:rounded-[32px] border transition-all duration-500 overflow-hidden ${isOpen ? 'border-[#3b82f6] shadow-xl shadow-blue-500/5' : 'border-slate-100 shadow-sm hover:border-slate-200'}`}
               >
                 <button 
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full p-5 md:p-8 flex items-center justify-between text-left focus:outline-none"
                 >
                    <div className="flex items-center gap-4 md:gap-6">
                       <div className={`w-7 h-7 md:w-8 md:h-8 rounded-lg flex items-center justify-center transition-all ${isOpen ? 'bg-[#3b82f6] text-white' : 'bg-slate-50 text-slate-400 group-hover:bg-[#2f4a6d] group-hover:text-white'}`}>
                          {isOpen ? <FiMinus strokeWidth={3} /> : <FiPlus strokeWidth={3} />}
                       </div>
                       <h3 className={`font-black text-xs md:text-xl transition-colors ${isOpen ? 'text-[#3b82f6]' : 'text-[#2f4a6d]'}`}>
                         {faq.q}
                       </h3>
                    </div>
                    <FiChevronDown className={`text-slate-200 transition-transform duration-500 whitespace-nowrap shrink-0 ${isOpen ? 'rotate-180 text-blue-300' : 'group-hover:text-slate-400'}`} strokeWidth={3} />
                 </button>

                 <div 
                  className={`px-5 md:px-8 lg:px-20 transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] pb-6 md:pb-12 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}
                 >
                    <div className="h-px bg-slate-100 mb-4 md:mb-6" />
                    <p className="text-[#2f4a6d] text-xs md:text-base font-bold leading-relaxed opacity-70">
                      {faq.a}
                    </p>
                 </div>
               </div>
             );
           })}
        </div>

         <div className="mt-12 md:mt-20 text-center">
            <div className="inline-flex items-center gap-2 md:gap-3 p-1.5 md:p-2 bg-white rounded-full border border-slate-100 shadow-sm pr-6 md:pr-8">
               <div className="w-8 h-8 md:w-10 md:h-10 bg-[#2f4a6d] rounded-full flex items-center justify-center text-white">
                  <FiHelpCircle strokeWidth={2.5} />
               </div>
               <span className="text-[10px] md:text-xs font-black text-[#2f4a6d]">Still have questions? <a href="/contact" className="text-[#3b82f6] underline hover:text-[#2f4a6d] transition-colors">Get in touch with us</a></span>
            </div>
         </div>

      </div>
    </div>
  );
};

export default FAQSection;

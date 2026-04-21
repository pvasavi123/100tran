// import React from "react";

// const WhoWeAre = () => {
//   return (
//     <section className="w-full bg-gradient-to-b from-white to-slate-50 py-14">
//       <div className="mx-auto max-w-7xl px-6 md:px-12">

//         {/* HEADER */}
//         <div className="mb-10 text-center">
//           <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
//             Who We Are
//           </p>

//           <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#2f4a6d] leading-tight">
//             Trusted transcript support for your education & global journey
//           </h2>

//           <p className="mx-auto mt-3 max-w-2xl text-sm md:text-base text-slate-600">
//             We help students and professionals get university documents processed
//             quickly, securely, and without hassle.
//           </p>
//         </div>

//         {/* GRID */}
//         <div className="grid items-center gap-8 md:grid-cols-2">

//           {/* LEFT */}
//           <div>
//             <p className="text-base leading-7 text-slate-600">
//               At <span className="font-semibold text-[#2f4a6d]">100 Transcripts LLP</span>,
//               we provide certified transcript and document support services across India.
//               Founded in 2016, we focus on making the process fast, reliable, and stress-free.
//             </p>

//             <p className="mt-4 text-base leading-7 text-slate-600">
//               Trusted by <span className="font-semibold text-[#2f4a6d]">17,000+ applicants</span>,
//               we support applications for higher education, career growth, and immigration.
//             </p>

//             {/* FEATURES */}
//             <div className="mt-6 space-y-3">
//               {[
//                 "Official partners of IEE, ECE, SpanTran",
//                 "Support for WES, IQAS, CES, UK ENIC",
//                 "ISO-certified process across India",
//               ].map((item, i) => (
//                 <div
//                   key={i}
//                   className="flex items-start gap-3 rounded-lg bg-white px-4 py-3 shadow-sm ring-1 ring-slate-200"
//                 >
//                   <span className="text-blue-600">✔</span>
//                   <p className="text-sm text-slate-700">{item}</p>
//                 </div>
//               ))}
//             </div>

//             {/* BUTTON */}
//             <a
//               href="/about"
//               className="mt-6 inline-flex items-center rounded-lg bg-[#2f4a6d] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#1f3550]"
//             >
//               View More →
//             </a>
//           </div>

//           {/* RIGHT */}
//           <div className="relative">

//             {/* BG EFFECT */}
//             <div className="absolute -left-4 -top-4 h-20 w-20 rounded-xl bg-blue-100 blur-2xl" />
//             <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-cyan-100 blur-2xl" />

//             <div className="relative rounded-2xl border bg-white shadow-lg overflow-hidden">

//               {/* HEADER */}
//               <div className="bg-[#2f4a6d] px-5 py-4 text-white">
//                 <p className="text-xs uppercase tracking-wider text-blue-200">
//                   Visit Our Office
//                 </p>

//                 <h3 className="mt-1 text-lg font-semibold">
//                   Hyderabad Office
//                 </h3>

//                 <p className="mt-1 text-xs text-blue-100">
//                   📍 Mathrusree Nagar, Hyderabad
//                 </p>
//               </div>

//               {/* MAP */}
//               <div className="p-4">
//                 <div className="overflow-hidden rounded-xl ring-1 ring-slate-200">
//                   <iframe
//                     title="100 Transcripts Location"
//                     src="https://maps.google.com/maps?q=100%20Transcripts%20LLP%20Mathrusree%20Nagar%20Hyderabad&t=&z=13&ie=UTF8&iwloc=&output=embed"
//                     className="h-[240px] w-full border-0"
//                     loading="lazy"
//                   />
//                 </div>

//                 {/* BUTTON */}
//                 <a
//                   href="https://www.google.com/maps/place/100+Transcripts+LLP"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="mt-4 inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold text-blue-700 hover:bg-blue-100"
//                 >
//                   Open in Google Maps →
//                 </a>
//               </div>

//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhoWeAre;






import React from "react";
import { motion } from "framer-motion";

const WhoWeAre = () => {
  return (
    <section className="w-full bg-gradient-to-b from-white to-slate-100 py-14">
      <div className="mx-auto max-w-7xl px-6 md:px-12">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
 <div className="flex items-center justify-center gap-4">
  <span className="w-12 h-[3px] bg-blue-600"></span>

  <p className="text-sm md:text-base font-bold uppercase text-blue-600 tracking-wider">
    Who We Are
  </p>

  <span className="w-12 h-[3px] bg-blue-600"></span>
</div>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#2f4a6d]">
            Trusted transcript support for your education & global journey
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm md:text-base text-slate-600">
            We help students and professionals get documents processed quickly,
            securely, and without hassle.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid items-center gap-8 md:grid-cols-2">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-base leading-7 text-slate-600">
              At <span className="font-semibold text-[#2f4a6d]">100 Transcripts LLP</span>,
              we provide certified transcript and document support services across India.
              Founded in 2016, we focus on making the process fast, reliable, and stress-free.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Trusted by <span className="font-semibold text-[#2f4a6d]">17,000+ applicants</span>,
              we support applications for higher education, career growth, and immigration.
            </p>

            {/* FEATURES */}
            <div className="mt-6 space-y-3">
              {[
                "Official partners of IEE, ECE, SpanTran",
                "Support for WES, IQAS, CES, UK ENIC",
                "ISO-certified process across India",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.03 }}
                  className="flex items-start gap-3 rounded-xl bg-white/70 backdrop-blur-md px-4 py-3 shadow-sm ring-1 ring-slate-200 transition"
                >
                  <span className="text-blue-600">✔</span>
                  <p className="text-sm text-slate-700">{item}</p>
                </motion.div>
              ))}
            </div>

            {/* BUTTON */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="/about"
              className="mt-6 inline-flex items-center rounded-lg bg-[#2f4a6d] px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-[#1f3550]"
            >
              View More →
            </motion.a>
          </motion.div>

          {/* RIGHT MAP SECTION */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >

            {/* BACKGROUND GLOW */}
            <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-blue-200/40 blur-2xl" />
            <div className="absolute -bottom-6 -right-6 h-28 w-28 rounded-full bg-cyan-200/40 blur-2xl" />

            {/* GLASS CARD */}
            <div className="relative rounded-2xl border border-white/40 bg-white/70 backdrop-blur-xl shadow-xl overflow-hidden">

              {/* HEADER */}
              <div className="bg-[#2f4a6d]/90 backdrop-blur-md px-5 py-4 text-white">
                <p className="text-xs uppercase tracking-wider text-blue-200">
                  Visit Our Office
                </p>

                <h3 className="mt-1 text-lg font-semibold">
                  Hyderabad Office
                </h3>

                <p className="mt-1 text-xs text-blue-100">
                  100 Transcripts LLP, 3rd Floor, Sri Srinivasam, Plot No. 1133/1,
                    Mathrusree Nagar, Hafeezpet, Hyderabad,
                        Telangana 500049, India
                </p>
              </div>

              {/* MAP */}
              <div className="p-4">
                <div className="overflow-hidden rounded-xl">
                  <iframe
                    title="map"
                    src="https://maps.google.com/maps?q=100%20Transcripts%20LLP%20Hyderabad&output=embed"
                    className="h-[240px] w-full rounded-xl border-0"
                    loading="lazy"
                  />
                </div>

                {/* BUTTON */}
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href="https://www.google.com/maps/place/100+Transcripts+LLP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold text-blue-700 hover:bg-blue-100"
                >
                  Open in Google Maps →
                </motion.a>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
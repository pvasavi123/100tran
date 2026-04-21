import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useAnimationControls, useInView } from "framer-motion";
import {
  FiUploadCloud,
  FiCheckCircle,
  FiCreditCard,
  FiTruck,
  FiUser,
  FiMail,
  FiPhone,
  FiBook,
  FiFileText,
  FiShield,
  FiZap,
  FiClock,
  FiAward,
} from "react-icons/fi";

export default function Apply() {
  const [files, setFiles] = useState([]);
  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showCompletionMsg, setShowCompletionMsg] = useState(false);
  const formRef = useRef(null);
  const controls = useAnimationControls();
  const isInView = useInView(formRef, { once: false, amount: 0.3 });

  const handleFileChange = useCallback((e) => {
    setFiles(Array.from(e.target.files));
  }, []);

useEffect(() => {
  const interval = setInterval(() => {
    setActiveStep((prev) => {
      if (prev >= 4) {
        clearInterval(interval);
        setProgress(100);
        return 4;
      }
      const next = prev + 1;
      setProgress((next / 4) * 100);
      return next;
    });
  }, 3500);

  return () => clearInterval(interval);
}, []);

  // Handle step completion
  useEffect(() => {
    if (activeStep > 0 && !completedSteps.includes(activeStep - 1)) {
      setCompletedSteps(prev => [...prev, activeStep - 1]);
      setShowCompletionMsg(true);
      
      const timer = setTimeout(() => {
        setShowCompletionMsg(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [activeStep, completedSteps]);

  const formFields = [
    { icon: FiUser, name: "fullName", placeholder: "Full Name *", type: "text", required: true },
    { icon: FiMail, name: "email", placeholder: "Email Address *", type: "email", required: true },
    { icon: FiBook, name: "university", placeholder: "University *", type: "text", required: true },
    { icon: FiFileText, name: "college", placeholder: "College Name", type: "text" },
    { icon: FiFileText, name: "course", placeholder: "Course / Degree *", type: "text", required: true },
    { icon: FiPhone, name: "phone", placeholder: "Phone Number *", type: "tel", required: true },
    { icon: FiPhone, name: "altPhone", placeholder: "Alternate Number", type: "tel" },
  ];

  const steps = [
    {
      title: "Document Upload",
      desc: "Secure file encryption",
      icon: FiUploadCloud,
      color: "from-blue-500 via-cyan-500 to-indigo-500",
      time: "2-5 min",
    },
    {
      title: "Expert Review",
      desc: "Verified by certified team",
      icon: FiCheckCircle,
      color: "from-emerald-500 via-teal-500 to-green-500",
      time: "1-2 hrs",
    },
    {
      title: "Secure Payment",
      desc: "PCI-DSS compliant gateway",
      icon: FiCreditCard,
      color: "from-purple-500 via-pink-500 to-rose-500",
      time: "Instant",
    },
    {
      title: "Express Delivery",
      desc: "Trackable shipping",
      icon: FiTruck,
      color: "from-orange-500 via-amber-500 to-yellow-500",
      time: "3-7 days",
    },
  ];

  const handleSubmit = async () => {
    if (files.length === 0) return;

    setIsSubmitting(true);

    await controls.start({
      scale: [1, 0.98, 1],
      y: [0, -2, 0],
      transition: { duration: 0.6 },
    });

    let currentProgress = 0;
    const progressInterval = setInterval(() => {
      currentProgress += Math.random() * 6 + 2;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(progressInterval);
        setTimeout(() => {
          setIsSubmitting(false);
          setProgress(100);
        }, 1000);
      }
      setProgress(currentProgress);
    }, 120);
  };

  const Counter = ({ value }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start;
      const duration = 1200;
      const animate = (timestamp) => {
        if (!start) start = timestamp;
        const elapsed = timestamp - start;
        const pct = Math.min(elapsed / duration, 1);
        const next = value * pct;
        setCount(value >= 100 ? Number(next.toFixed(1)) : Math.floor(next));
        if (pct < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }, [value]);

    return <span>{count}</span>;
  };

  const StepIcon = ({ stepIndex, isActive, isCompleted }) => (
    <motion.div
      className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
        isCompleted 
          ? 'bg-emerald-500 border-emerald-400 shadow-lg shadow-emerald-500/25' 
          : isActive 
            ? 'bg-white/15 border border-white/20' 
            : 'bg-white/15 border border-white/20'
      }`}
      animate={{
        scale: isActive ? 1.05 : isCompleted ? 1.1 : 1,
        rotate: isCompleted ? [0, 5, -5, 0] : 0,
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {isCompleted ? (
        <FiCheckCircle className="text-white text-xl" />
     ) : (
  (() => {
    const Icon = steps[stepIndex].icon;
    return <Icon className="text-white text-lg" />;
  })()
)}
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-20 overflow-x-hidden">
      <section className="relative">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-32 -right-32 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute -bottom-32 -left-32 w-72 h-72 bg-cyan-300/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.15, 1], rotate: [360, 180, 0] }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center py-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 bg-white/85 backdrop-blur-xl px-5 py-3 rounded-2xl shadow-lg border border-white/60 mb-6"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-3 h-3 bg-emerald-500 rounded-full"
            />
            <span className="text-sm font-semibold text-slate-700">
              Bank-Level Security • GDPR Compliant
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-6xl font-black text-slate-900 mb-4 leading-tight"
          >
            Transcript <span className="text-blue-600">Application</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto"
          >
            Simple, secure, and professional processing for your documents.
          </motion.p>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            {[
              { icon: FiZap, value: 500, suffix: "+", label: "Daily Applications" },
              { icon: FiClock, value: 99.9, suffix: "%", label: "Uptime SLA" },
              { icon: FiAward, value: 50000, suffix: "+", label: "Happy Customers" },
              { icon: FiTruck, value: 7, suffix: "d", label: "Avg Delivery" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/70 backdrop-blur-xl rounded-2xl border border-white/60 shadow-md p-4 md:p-5"
              >
                <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700">
                  <item.icon />
                </div>
                <div className="text-2xl font-black text-slate-900">
                  <Counter value={item.value} />
                  <span className="text-lg font-semibold">{item.suffix}</span>
                </div>
                <p className="text-xs md:text-sm text-slate-500 mt-1">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-12 overflow-hidden bg-white/80 backdrop-blur-2xl rounded-[24px] shadow-xl border border-white/70"
          >
            <div className="lg:col-span-5 bg-slate-900 text-white p-8 lg:p-9 relative overflow-hidden">
              <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-56 h-56 bg-blue-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-56 h-56 bg-cyan-500/10 rounded-full blur-3xl" />
              </div>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/15 mb-6">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-semibold tracking-wide uppercase">
                    Live Process
                  </span>
                </div>

                <h2 className="text-3xl font-black mb-2">Application Flow</h2>
                <p className="text-slate-400 text-sm mb-8">Real-time workflow updates</p>

                {/* Completion Message */}
                <AnimatePresence>
                  {showCompletionMsg && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: 10 }}
                      className="mb-4 p-4 bg-emerald-500/20 border border-emerald-400/50 rounded-2xl backdrop-blur-sm flex items-center gap-3"
                    >
                      <motion.div
                        animate={{ 
                          scale: [1, 1.2, 1],
                          rotate: [0, 10, -10, 0]
                        }}
                        transition={{ duration: 0.6, repeat: 1 }}
                        className="w-6 h-6 bg-emerald-400 rounded-full flex items-center justify-center flex-shrink-0"
                      >
                        <FiCheckCircle className="text-white text-lg" />
                      </motion.div>
                      <span className="font-semibold text-emerald-100 text-sm">
                        You're done with this step! ✅
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="space-y-4 mb-8">
                  {steps.map((step, i) => {
                    const isActive = activeStep === i;
                    const isCompleted = completedSteps.includes(i);

                    return (
                      <motion.div
                        key={i}
                        className={`relative rounded-2xl border transition-all duration-500 overflow-hidden ${
                          isCompleted 
                            ? 'bg-gradient-to-r from-emerald-500/30 to-green-500/30 border-emerald-400/50 shadow-lg shadow-emerald-500/25'
                            : isActive
                              ? `bg-gradient-to-r ${step.color} border-white/25 shadow-lg`
                              : "bg-white/5 border-white/10 hover:bg-white/10"
                        } p-4`}
                        animate={{
                          opacity: isActive || isCompleted ? 1 : 0.6,
                          scale: isActive ? 1.01 : isCompleted ? 1.02 : 1,
                        }}
                      >
                        <div className="absolute right-4 top-4 w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center text-sm font-bold text-white">
                          {isCompleted ? '✓' : i + 1}
                        </div>

                        <div className="flex items-center gap-4 pr-8">
                          <StepIcon 
                            stepIndex={i} 
                            isActive={isActive} 
                            isCompleted={isCompleted} 
                          />
                          
                          <div className="min-w-0">
                            <h3 className={`font-bold text-base transition-colors ${
                              isCompleted ? 'text-emerald-100' : 'text-white'
                            }`}>
                              {step.title}
                            </h3>
                            <p className={`text-xs mt-1 transition-colors ${
                              isCompleted ? 'text-emerald-200/90' : 'text-slate-200/80'
                            }`}>
                              {step.desc}
                            </p>
                            <div className={`mt-2 inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] transition-all ${
                              isCompleted 
                                ? 'bg-emerald-500/20 border border-emerald-400/30 text-emerald-100 shadow-md shadow-emerald-500/25' 
                                : 'bg-white/10 text-slate-200'
                            }`}>
                              <FiClock className={`text-[10px] ${isCompleted ? 'text-emerald-300' : ''}`} />
                              {step.time}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-slate-400">
                    <FiShield className="text-blue-300" />
                    Processing Progress
                  </div>
                  <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-500"
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                  </div>
                  <div className="text-right text-sm font-bold text-white">
                    {Math.round(progress)}%
                  </div>
                </div>
              </div>
            </div>

            {/* Rest of your form remains the same */}
            <div className="lg:col-span-7 p-8 lg:p-10">
              <div className="mb-7">
                <h2 className="text-3xl font-white text-slate-900">Application Portal</h2>
                <p className="text-slate-600 mt-2 text-sm">
                  Fill in your details and upload the required documents.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                {formFields.map((field, i) => (
                  <motion.div
                    key={field.name}
                    initial={{ opacity: 0, y: 16 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: i * 0.05 }}
                  >
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      {field.placeholder}
                    </label>
                    <div className="relative">
                      <field.icon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />
                      <input
                        name={field.name}
                        type={field.type}
                        required={field.required}
                        placeholder={field.placeholder}
                        className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-400 transition-all"
                      />
                    </div>
                  </motion.div>
                ))}

                <motion.div
                  className="md:col-span-2"
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.35 }}
                >
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Document Type *
                  </label>
                  <div className="relative">
                    <select className="w-full pl-4 pr-12 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-400 transition-all appearance-none">
                      <option>Select Document Type</option>
                      <option>Official Transcripts</option>
                      <option>Medium of Instruction</option>
                      <option>Degree Certificate</option>
                      <option>Provisional Certificate</option>
                      <option>Consolidated Marksheet</option>
                    </select>
                    <svg
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.45 }}
                className="mt-6 border-2 border-dashed border-slate-200 rounded-3xl p-8 text-center bg-slate-50/80 hover:border-blue-300 transition-all"
              >
                <input
                  type="file"
                  multiple
                  id="upload"
                  onChange={handleFileChange}
                  className="hidden"
                  accept=".pdf,.jpg,.jpeg,.png"
                />

                <label htmlFor="upload" className="cursor-pointer block">
                  <div className="space-y-3">
                    <motion.div
                      animate={{ rotate: [0, 180, 360] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center shadow-lg"
                    >
                      <FiUploadCloud className="text-3xl text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">Upload Documents</h3>
                      <p className="text-sm text-slate-600 mt-1">PDF, JPG, PNG • Max 15MB per file</p>
                    </div>
                  </div>
                </label>

                <AnimatePresence>
                  {files.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-6 pt-6 border-t border-emerald-200"
                    >
                      <p className="text-sm font-semibold text-emerald-700 mb-3">
                        {files.length} file{files.length !== 1 ? "s" : ""} selected
                      </p>
                      <div className="space-y-2">
                        {files.map((file, i) => (
                          <div
                            key={i}
                            className="flex items-center justify-between px-4 py-3 rounded-2xl bg-emerald-50 border border-emerald-200 text-sm"
                          >
                            <span className="flex items-center gap-2 truncate">
                              <FiFileText className="text-emerald-600" />
                              {file.name}
                            </span>
                            <span className="text-emerald-700 text-xs whitespace-nowrap ml-3">
                              {(file.size / 1024 / 1024).toFixed(2)} MB
                            </span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.button
                onClick={handleSubmit}
                disabled={isSubmitting || files.length === 0}
                animate={controls}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="mt-6 w-full rounded-2xl py-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white font-bold text-lg shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-3">
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                    />
                    Processing... {Math.round(progress)}%
                  </span>
                ) : (
                  "Submit Application"
                )}
              </motion.button>

              <div className="mt-6 text-center text-xs text-slate-500">
                Secure upload • Encrypted processing • Support available 24/7
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
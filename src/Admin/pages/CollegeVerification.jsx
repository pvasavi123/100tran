import React, { useState } from 'react';
import { ShieldCheck, Building2, Clock, Eye, CheckCircle, X, Globe, User, Calendar, Layers } from 'lucide-react';

const CollegeVerification = () => {
  // 🔵 State to handle the View Modal
  const [selectedVerification, setSelectedVerification] = useState(null);

  const verifications = [
    {
      id: "VER-001",
      college: "Oxford Engineering",
      country: "UK",
      student: "Rahul Sharma",
      date: "2026-04-12",
      status: "Pending",
      assigned: "Manager A",
      mode: "Email",
    },
    {
      id: "VER-002",
      college: "Stanford Arts",
      country: "USA",
      student: "Anjali Priya",
      date: "2026-04-11",
      status: "Verified",
      assigned: "Manager B",
      mode: "API",
    },
    {
      id: "VER-003",
      college: "MIT Tech",
      country: "USA",
      student: "Suresh Babu",
      date: "2026-04-10",
      status: "Rejected",
      assigned: "Manager A",
      mode: "Manual",
    },
  ];

  return (
    <div className="space-y-8 relative">

      {/* 🔵 Header */}
      <header>
        <h1 className="text-2xl font-bold text-slate-800">College Verification Portal</h1>
        <p className="text-slate-500">Validation status from affiliated institutions</p>
      </header>

      {/* 🟢 Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Pending */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
              <Building2 />
            </div>
            <div>
              <h3 className="font-bold text-lg">Pending Institution Checks</h3>
              <p className="text-sm text-slate-500">12 Colleges waiting</p>
            </div>
          </div>
        </div>

        {/* Accuracy */}
        <div className="bg-[#0b2a4a] text-white p-6 rounded-2xl">
          <h3 className="text-lg">Verification Accuracy</h3>
          <div className="text-4xl font-bold text-blue-400 mt-2">99.8%</div>
          <p className="text-sm text-slate-300">System-wide score</p>
        </div>

      </div>

      {/* 📊 TABLE */}
      <div className="bg-white rounded-2xl border overflow-x-auto shadow-sm">
        <table className="w-full text-sm">

          {/* Header */}
          <thead className="bg-slate-50 text-xs uppercase text-slate-500">
            <tr>
              <th className="px-4 py-3 text-left">College</th>
              <th className="px-4 py-3 text-left">Country</th>
              <th className="px-4 py-3 text-left">Student</th>
              <th className="px-4 py-3 text-left">Request ID</th>
              <th className="px-4 py-3 text-left">Date</th>
              <th className="px-4 py-3 text-left">Mode</th>
              <th className="px-4 py-3 text-left">Assigned</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {verifications.map((item) => (
              <tr key={item.id} className="border-t hover:bg-blue-50/30 transition-colors">
                <td className="px-4 py-3 font-medium text-slate-700">{item.college}</td>
                <td className="px-4 py-3 text-slate-600">{item.country}</td>
                <td className="px-4 py-3 text-slate-600">{item.student}</td>
                <td className="px-4 py-3 text-xs text-slate-500">{item.id}</td>
                <td className="px-4 py-3 text-slate-600">{item.date}</td>
                <td className="px-4 py-3 text-slate-600">{item.mode}</td>
                <td className="px-4 py-3">
                  <select className="border rounded px-2 py-1 text-sm bg-white outline-none focus:ring-1 focus:ring-blue-500">
                    <option>{item.assigned}</option>
                    <option>Manager B</option>
                    <option>Manager C</option>
                  </select>
                </td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${
                    item.status === "Verified" ? "bg-green-100 text-green-600" : 
                    item.status === "Pending" ? "bg-yellow-100 text-yellow-600" : "bg-red-100 text-red-600"
                  }`}>
                    {item.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-right">
                  <div className="flex justify-end gap-2">
                    {/* 🔵 Trigger Modal on Click */}
                    <button 
                      onClick={() => setSelectedVerification(item)}
                      className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition"
                    >
                      <Eye size={18} />
                    </button>
                    <button className="p-2 text-green-600 hover:bg-green-100 rounded-lg transition">
                      <CheckCircle size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 🔵 VERIFICATION DETAIL MODAL */}
      {selectedVerification && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl w-full max-w-md shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
            
            {/* Modal Header */}
            <div className="bg-[#0b2a4a] p-6 text-white flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold">Verification Details</h2>
                <p className="text-xs text-blue-300 uppercase tracking-widest mt-1">{selectedVerification.id}</p>
              </div>
              <button 
                onClick={() => setSelectedVerification(null)}
                className="hover:bg-white/10 p-2 rounded-full transition"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-8 space-y-6">
              
              {/* Institution Row */}
              <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center font-bold">
                  <Building2 size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-lg">{selectedVerification.college}</h3>
                  <div className="flex items-center gap-1 text-slate-500 text-sm">
                    <Globe size={14} className="text-blue-500" /> {selectedVerification.country}
                  </div>
                </div>
              </div>

              {/* Info Grid */}
              <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Student</p>
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                    <User size={16} className="text-blue-500" /> {selectedVerification.student}
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Date</p>
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                    <Calendar size={16} className="text-blue-500" /> {selectedVerification.date}
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Mode</p>
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                    <Layers size={16} className="text-blue-500" /> {selectedVerification.mode}
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Status</p>
                  <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                    selectedVerification.status === "Verified" ? "bg-green-100 text-green-600" : "bg-yellow-100 text-yellow-600"
                  }`}>
                    {selectedVerification.status}
                  </span>
                </div>
              </div>

              {/* Assignment Footer */}
              <div className="pt-4 border-t border-slate-100">
                <button 
                  onClick={() => setSelectedVerification(null)}
                  className="w-full bg-[#0b2a4a] text-white py-3 rounded-xl font-bold hover:bg-blue-900 transition shadow-lg"
                >
                  Close View
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CollegeVerification;
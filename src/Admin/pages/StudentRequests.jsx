// // import React, { useState } from 'react';
// // import { Search, Filter, Eye, CheckCircle } from 'lucide-react';

// // const StudentRequests = () => {
// //   const [search, setSearch] = useState("");

// //   const requests = [
// //     {
// //       id: "REQ-001",
// //       name: "Rahul Sharma",
// //       email: "rahul@gmail.com",
// //       university: "JNTU Hyderabad",
// //       type: "Degree Certificate",
// //       date: "2026-04-12",
// //       status: "Pending",
// //       documents: "Uploaded",
// //       payment: "Paid",
// //       assigned: "Manager A",
// //       delivery: "Email",
// //       tracking: "TRK12345",
// //     },
// //     {
// //       id: "REQ-002",
// //       name: "Anjali Priya",
// //       email: "anjali@gmail.com",
// //       university: "Osmania University",
// //       type: "Migration Certificate",
// //       date: "2026-04-11",
// //       status: "Verified",
// //       documents: "Uploaded",
// //       payment: "Paid",
// //       assigned: "Manager B",
// //       delivery: "Courier",
// //       tracking: "TRK56789",
// //     },
// //     {
// //       id: "REQ-003",
// //       name: "Suresh Babu",
// //       email: "suresh@gmail.com",
// //       university: "Delhi University",
// //       type: "Transcript",
// //       date: "2026-04-10",
// //       status: "Rejected",
// //       documents: "Missing",
// //       payment: "Pending",
// //       assigned: "Manager A",
// //       delivery: "Email",
// //       tracking: "TRK99999",
// //     },
// //   ];

// //   // 🔍 Search Filter
// //   const filteredRequests = requests.filter(
// //     (req) =>
// //       req.name.toLowerCase().includes(search.toLowerCase()) ||
// //       req.id.toLowerCase().includes(search.toLowerCase())
// //   );

// //   return (
// //     <div className="space-y-6">

// //       {/* 🔵 Header */}
// //       <div className="flex justify-between items-center">
// //         <div>
// //           <h1 className="text-2xl font-bold text-slate-800">Student Requests</h1>
// //           <p className="text-slate-500">Manage and approve certificate applications</p>
// //         </div>

// //         <div className="flex gap-3">
// //           <button className="flex items-center gap-2 px-4 py-2 bg-white border rounded-lg text-slate-600 hover:bg-slate-50">
// //             <Filter size={18} /> Filter
// //           </button>

// //           <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
// //             Export CSV
// //           </button>
// //         </div>
// //       </div>

// //       {/* 🟡 Info Section */}
// //       {/* <div className="bg-white border border-blue-100 rounded-2xl p-6 shadow-sm">
// //         <h2 className="text-lg font-semibold text-blue-700 mb-2">
// //           Application Workflow
// //         </h2>

// //         <p className="text-slate-600 mb-4">
// //           Students submit certificate requests, upload documents, and complete payments.
// //           Admin verifies and assigns cases to employees for processing.
// //         </p>

// //         <div className="grid md:grid-cols-2 gap-3 text-sm text-slate-600">
// //           <ul>
// //             <li>✔ Upload Documents</li>
// //             <li>✔ Document Verification</li>
// //             <li>✔ Payment Processing</li>
// //           </ul>
// //           <ul>
// //             <li>✔ Case Assignment</li>
// //             <li>✔ University Processing</li>
// //             <li>✔ Final Delivery</li>
// //           </ul>
// //         </div> */}
// //       {/* </div> */}

// //       {/* 🔍 Search */}
// //       <div className="bg-white border rounded-xl p-3 flex items-center gap-2">
// //         <Search className="text-slate-400" size={20} />
// //         <input
// //           type="text"
// //           placeholder="Search by name or ID..."
// //           className="w-full outline-none"
// //           onChange={(e) => setSearch(e.target.value)}
// //         />
// //       </div>

// //       {/* 📊 Table */}
// //       <div className="bg-white rounded-2xl border overflow-x-auto">
// //         <table className="w-full text-sm">
          
// //           <thead className="bg-slate-50 text-slate-500 uppercase text-xs">
// //             <tr>
// //               <th className="px-4 py-3">Student</th>
// //               <th className="px-4 py-3">University</th>
// //               <th className="px-4 py-3">Request</th>
// //               <th className="px-4 py-3">Documents</th>
// //               <th className="px-4 py-3">Payment</th>
// //               <th className="px-4 py-3">Assigned</th>
// //               <th className="px-4 py-3">Status</th>
// //               <th className="px-4 py-3">Tracking</th>
// //               <th className="px-4 py-3">Delivery</th>
// //               <th className="px-4 py-3 text-right">Actions</th>
// //             </tr>
// //           </thead>

// //           <tbody>
// //             {filteredRequests.map((req) => (
// //               <tr key={req.id} className="border-t hover:bg-blue-50/30">

// //                 {/* Student */}
// //                 <td className="px-4 py-3">
// //                   <div className="font-medium text-slate-800">{req.name}</div>
// //                   <div className="text-xs text-slate-400">{req.email}</div>
// //                 </td>

// //                 {/* University */}
// //                 <td className="px-4 py-3">{req.university}</td>

// //                 {/* Request */}
// //                 <td className="px-4 py-3">{req.type}</td>

// //                 {/* Documents */}
// //                 <td className="px-4 py-3">
// //                   <span className={`text-xs px-2 py-1 rounded ${
// //                     req.documents === "Uploaded"
// //                       ? "bg-blue-100 text-blue-600"
// //                       : "bg-red-100 text-red-600"
// //                   }`}>
// //                     {req.documents}
// //                   </span>
// //                 </td>

// //                 {/* Payment */}
// //                 <td className="px-4 py-3">
// //                   <span className={`text-xs px-2 py-1 rounded ${
// //                     req.payment === "Paid"
// //                       ? "bg-green-100 text-green-600"
// //                       : "bg-yellow-100 text-yellow-600"
// //                   }`}>
// //                     {req.payment}
// //                   </span>
// //                 </td>

// //                 {/* Assigned */}
// //                 <td className="px-4 py-3">
// //                   <select className="border rounded px-2 py-1 text-sm">
// //                     <option>{req.assigned}</option>
// //                     <option>Manager A</option>
// //                     <option>Manager B</option>
// //                   </select>
// //                 </td>

// //                 {/* Status */}
// //                 <td className="px-4 py-3">
// //                   <span className={`text-xs px-2 py-1 rounded ${
// //                     req.status === "Verified"
// //                       ? "bg-green-100 text-green-600"
// //                       : req.status === "Pending"
// //                       ? "bg-yellow-100 text-yellow-600"
// //                       : "bg-red-100 text-red-600"
// //                   }`}>
// //                     {req.status}
// //                   </span>
// //                 </td>

// //                 {/* Tracking */}
// //                 <td className="px-4 py-3 text-xs text-slate-500">
// //                   {req.tracking}
// //                 </td>

// //                 {/* Delivery */}
// //                 <td className="px-4 py-3">{req.delivery}</td>

// //                 {/* Actions */}
// //                 <td className="px-4 py-3 text-right">
// //                   <div className="flex justify-end gap-2">
// //                     <button className="p-2 text-blue-600 hover:bg-blue-100 rounded">
// //                       <Eye size={16} />
// //                     </button>
// //                     <button className="p-2 text-green-600 hover:bg-green-100 rounded">
// //                       <CheckCircle size={16} />
// //                     </button>
// //                   </div>
// //                 </td>

// //               </tr>
// //             ))}
// //           </tbody>

// //         </table>
// //       </div>
// //     </div>
// //   );
// // };

// // export default StudentRequests;


// import React, { useState } from "react";
// import { Search, Filter, Eye, CheckCircle, Clock, XCircle, Users } from "lucide-react";

// const StudentRequests = () => {
//   const [search, setSearch] = useState("");

//   const requests = [
//     {
//       id: "REQ-001",
//       name: "Rahul Sharma",
//       email: "rahul@gmail.com",
//       university: "JNTU Hyderabad",
//       type: "Degree Certificate",
//       date: "2026-04-12",
//       status: "Pending",
//       documents: "Uploaded",
//       payment: "Paid",
//       assigned: "Manager A",
//       delivery: "Email",
//     },
//     {
//       id: "REQ-002",
//       name: "Anjali Priya",
//       email: "anjali@gmail.com",
//       university: "Osmania University",
//       type: "Migration Certificate",
//       date: "2026-04-11",
//       status: "Verified",
//       documents: "Uploaded",
//       payment: "Paid",
//       assigned: "Manager B",
//       delivery: "Courier",
//     },
//     {
//       id: "REQ-003",
//       name: "Suresh Babu",
//       email: "suresh@gmail.com",
//       university: "Delhi University",
//       type: "Transcript",
//       date: "2026-04-10",
//       status: "Rejected",
//       documents: "Missing",
//       payment: "Pending",
//       assigned: "Manager c",
//       delivery: "Email",
//     },
//   ];

//   const total = requests.length;
//   const pending = requests.filter(r => r.status === "Pending").length;
//   const verified = requests.filter(r => r.status === "Verified").length;
//   const rejected = requests.filter(r => r.status === "Rejected").length;

//   const filtered = requests.filter(
//     r =>
//       r.name.toLowerCase().includes(search.toLowerCase()) ||
//       r.id.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="p-6 space-y-6 bg-slate-100 min-h-screen">

//       {/* 🔵 Header */}
//       <div className="flex justify-between items-center">
//         <div>
//           <h1 className="text-3xl font-bold text-slate-800">Student Requests</h1>
//           <p className="text-slate-500">Manage certificates & applications</p>
//         </div>

//         <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition">
//           <Filter size={18}/> Filter
//         </button>
//       </div>

//       {/* 📊 Modern Stats */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-5">

//         <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-400 text-white shadow-lg">
//           <div className="flex justify-between">
//             <div>
//               <p className="text-sm opacity-80">Total</p>
//               <h2 className="text-3xl font-bold">{total}</h2>
//             </div>
//             <Users />
//           </div>
//         </div>

//         <div className="p-5 rounded-2xl bg-yellow-100 text-yellow-700 shadow">
//           <div className="flex justify-between">
//             <div>
//               <p className="text-sm">Pending</p>
//               <h2 className="text-3xl font-bold">{pending}</h2>
//             </div>
//             <Clock />
//           </div>
//         </div>

//         <div className="p-5 rounded-2xl bg-green-100 text-green-700 shadow">
//           <div className="flex justify-between">
//             <div>
//               <p className="text-sm">Verified</p>
//               <h2 className="text-3xl font-bold">{verified}</h2>
//             </div>
//             <CheckCircle />
//           </div>
//         </div>

//         <div className="p-5 rounded-2xl bg-red-100 text-red-700 shadow">
//           <div className="flex justify-between">
//             <div>
//               <p className="text-sm">Rejected</p>
//               <h2 className="text-3xl font-bold">{rejected}</h2>
//             </div>
//             <XCircle />
//           </div>
//         </div>

//       </div>

//       {/* 🔍 Search Bar */}
//       <div className="bg-white p-3 rounded-xl shadow flex items-center gap-3">
//         <Search className="text-gray-400"/>
//         <input
//           type="text"
//           placeholder="Search by name or ID..."
//           className="w-full outline-none"
//           onChange={(e)=>setSearch(e.target.value)}
//         />
//       </div>

//       {/* 📊 Table */}
//       <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

//         <table className="w-full text-sm">
//           <thead className="bg-slate-50 text-slate-500 text-xs uppercase">
//             <tr>
//               <th className="p-4">Student</th>
//               <th>University</th>
//               <th>Request</th>
//               <th>Documents</th>
//               <th>Payment</th>
//               <th>Status</th>
//               <th className="text-right pr-6">Actions</th>
//             </tr>
//           </thead>

//           <tbody>
//             {filtered.map((req) => (
//               <tr key={req.id} className="border-t hover:bg-slate-50 transition">

//                 <td className="p-4">
//                   <div className="font-semibold">{req.name}</div>
//                   <div className="text-xs text-gray-400">{req.email}</div>
//                 </td>

//                 <td>{req.university}</td>
//                 <td>{req.type}</td>

//                 <td>
//                   <span className={`px-2 py-1 rounded-full text-xs ${
//                     req.documents === "Uploaded"
//                       ? "bg-blue-100 text-blue-600"
//                       : "bg-red-100 text-red-600"
//                   }`}>
//                     {req.documents}
//                   </span>
//                 </td>

//                 <td>
//                   <span className={`px-2 py-1 rounded-full text-xs ${
//                     req.payment === "Paid"
//                       ? "bg-green-100 text-green-600"
//                       : "bg-yellow-100 text-yellow-600"
//                   }`}>
//                     {req.payment}
//                   </span>
//                 </td>

//                 <td>
//                   <span className={`px-2 py-1 rounded-full text-xs ${
//                     req.status === "Verified"
//                       ? "bg-green-100 text-green-600"
//                       : req.status === "Pending"
//                       ? "bg-yellow-100 text-yellow-600"
//                       : "bg-red-100 text-red-600"
//                   }`}>
//                     {req.status}
//                   </span>
//                 </td>

//                 <td className="text-right pr-6">
//                   <button className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg">
//                     <Eye size={18}/>
//                   </button>
//                 </td>

//               </tr>
//             ))}
//           </tbody>
//         </table>

//       </div>

//     </div>
//   );
// };

// export default StudentRequests;


import React, { useState } from "react";
import { Search, Filter, Eye, CheckCircle, Clock, XCircle, Users, X, MapPin, Mail, School, FileText, CreditCard, Truck, ExternalLink, FileCheck } from "lucide-react";

const StudentRequests = () => {
  const [search, setSearch] = useState("");
  const [selectedStudent, setSelectedStudent] = useState(null);
  
  // 🔵 Added States for Filter Button
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState("All");

  const requests = [
    {
      id: "REQ-001",
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      university: "JNTU Hyderabad",
      type: "Degree Certificate",
      date: "2026-04-12",
      status: "Pending",
      documents: "Uploaded",
      payment: "Paid",
      assigned: "Manager A",
      delivery: "Email",
      phone: "+91 9876543210",
      district: "Hyderabad",
      documentsList: [
        { name: "10th Marks Memo", status: "Uploaded", url: "#" },
        { name: "Inter/12th Memo", status: "Uploaded", url: "#" },
        { name: "Aadhar Card", status: "Uploaded", url: "#" }
      ]
    },
    {
      id: "REQ-002",
      name: "Anjali Priya",
      email: "anjali@gmail.com",
      university: "Osmania University",
      type: "Migration Certificate",
      date: "2026-04-11",
      status: "Verified",
      documents: "Uploaded",
      payment: "Paid",
      assigned: "Manager B",
      delivery: "Courier",
      phone: "+91 8888877777",
      district: "Rangareddy",
      documentsList: [
        { name: "Final Year Memo", status: "Uploaded", url: "#" },
        { name: "Transfer Certificate", status: "Uploaded", url: "#" }
      ]
    },
    {
      id: "REQ-003",
      name: "Suresh Babu",
      email: "suresh@gmail.com",
      university: "Delhi University",
      type: "Transcript",
      date: "2026-04-10",
      status: "Rejected",
      documents: "Missing",
      payment: "Pending",
      assigned: "Manager c",
      delivery: "Email",
      phone: "+91 9999900000",
      district: "Central Delhi",
      documentsList: [
        { name: "Degree Memo", status: "Missing", url: null }
      ]
    },
  ];

  const total = requests.length;
  const pending = requests.filter(r => r.status === "Pending").length;
  const verified = requests.filter(r => r.status === "Verified").length;
  const rejected = requests.filter(r => r.status === "Rejected").length;

  // ✅ Search + Filter Button Logic
  const filtered = requests.filter(r => {
    const matchesSearch = r.name.toLowerCase().includes(search.toLowerCase()) || r.id.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === "All" || r.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="p-6 space-y-6 bg-slate-100 min-h-screen relative">

      {/* 🔵 Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Student Requests</h1>
          <p className="text-slate-500">Manage certificates & applications</p>
        </div>

        {/* 🔵 Filter Toggle */}
        <button 
          onClick={() => setIsFilterModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
        >
          <Filter size={18}/> Filter
        </button>
      </div>

      {/* 📊 Modern Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-400 text-white shadow-lg">
          <div className="flex justify-between">
            <div><p className="text-sm opacity-80">Total</p><h2 className="text-3xl font-bold text-white">{total}</h2></div>
            <Users />
          </div>
        </div>
        <div className="p-5 rounded-2xl bg-yellow-100 text-yellow-700 shadow">
          <div className="flex justify-between">
            <div><p className="text-sm">Pending</p><h2 className="text-3xl font-bold">{pending}</h2></div>
            <Clock />
          </div>
        </div>
        <div className="p-5 rounded-2xl bg-green-100 text-green-700 shadow">
          <div className="flex justify-between">
            <div><p className="text-sm">Verified</p><h2 className="text-3xl font-bold">{verified}</h2></div>
            <CheckCircle />
          </div>
        </div>
        <div className="p-5 rounded-2xl bg-red-100 text-red-700 shadow">
          <div className="flex justify-between">
            <div><p className="text-sm">Rejected</p><h2 className="text-3xl font-bold">{rejected}</h2></div>
            <XCircle />
          </div>
        </div>
      </div>

      {/* 🔍 Search Bar */}
      <div className="bg-white p-3 rounded-xl shadow flex items-center gap-3">
        <Search className="text-gray-400"/>
        <input
          type="text"
          placeholder="Search by name or ID..."
          className="w-full outline-none"
          onChange={(e)=>setSearch(e.target.value)}
        />
      </div>

      {/* 📊 Table */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <table className="w-full text-sm text-left">
          <thead className="bg-slate-50 text-slate-500 text-xs uppercase">
            <tr>
              <th className="p-4">Student</th>
              <th>University</th>
              <th>Request</th>
              <th>Documents</th>
              <th>Payment</th>
              <th>Status</th>
              <th className="text-right pr-6">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((req) => (
              <tr key={req.id} className="border-t hover:bg-slate-50 transition">
                <td className="p-4">
                  <div className="font-semibold text-slate-700">{req.name}</div>
                  <div className="text-xs text-slate-400">{req.email}</div>
                </td>
                <td>{req.university}</td>
                <td>{req.type}</td>
                <td>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${req.documents === "Uploaded" ? "bg-blue-100 text-blue-600" : "bg-red-100 text-red-600"}`}>
                    {req.documents}
                  </span>
                </td>
                <td>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${req.payment === "Paid" ? "bg-green-100 text-green-600" : "bg-yellow-100 text-yellow-600"}`}>
                    {req.payment}
                  </span>
                </td>
                <td>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${req.status === "Verified" ? "bg-green-100 text-green-600" : req.status === "Pending" ? "bg-yellow-100 text-yellow-600" : "bg-red-100 text-red-600"}`}>
                    {req.status}
                  </span>
                </td>
                <td className="text-right pr-6">
                  <button onClick={() => setSelectedStudent(req)} className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition">
                    <Eye size={18}/>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 🔵 FILTER POPUP MODAL */}
      {isFilterModalOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[60] p-4">
          <div className="bg-white rounded-3xl w-full max-w-sm shadow-2xl overflow-hidden">
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-center border-b pb-3">
                <h2 className="text-xl font-bold text-slate-800">Filter Requests</h2>
                <button onClick={() => setIsFilterModalOpen(false)} className="hover:bg-slate-100 p-1 rounded-full"><X size={20} /></button>
              </div>
              
              <div className="space-y-3">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Status</p>
                <div className="grid grid-cols-2 gap-2">
                  {["All", "Pending", "Verified", "Rejected"].map((status) => (
                    <button
                      key={status}
                      onClick={() => setStatusFilter(status)}
                      className={`px-4 py-2 rounded-xl text-sm font-semibold transition ${
                        statusFilter === status ? "bg-blue-600 text-white shadow-md" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                      }`}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>

              <button 
                onClick={() => setIsFilterModalOpen(false)}
                className="w-full bg-slate-900 text-white py-3 rounded-xl font-bold mt-4 hover:bg-slate-800 transition"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 🔵 STUDENT INFORMATION MODAL (POPUP) */}
      {selectedStudent && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl w-full max-w-2xl shadow-2xl overflow-hidden">
            <div className="bg-blue-600 p-6 text-white flex justify-between items-center">
              <h2 className="text-xl font-bold">Request Detail View</h2>
              <button onClick={() => setSelectedStudent(null)} className="hover:bg-white/20 p-1 rounded-full"><X size={24} /></button>
            </div>

            <div className="max-h-[75vh] overflow-y-auto p-8 space-y-8">
              <div className="flex items-center gap-4 border-b pb-6">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold">
                  {selectedStudent.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800">{selectedStudent.name}</h3>
                  <div className="flex gap-4 text-xs text-slate-500 mt-1 font-medium">
                    <span className="flex items-center gap-1"><Mail size={12}/> {selectedStudent.email}</span>
                    <span className="flex items-center gap-1"><MapPin size={12}/> {selectedStudent.district}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-sm font-bold text-slate-800 flex items-center gap-2 border-l-4 border-blue-600 pl-2">Uploaded Memos</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedStudent.documentsList?.map((doc, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-200">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-white rounded-xl text-blue-600 border border-slate-100"><FileCheck size={18} /></div>
                        <div>
                          <p className="text-xs font-bold text-slate-700">{doc.name}</p>
                          <p className="text-[10px] font-bold uppercase text-green-600">{doc.status}</p>
                        </div>
                      </div>
                      <button className="text-blue-600 hover:text-blue-800 p-2 bg-blue-50 rounded-xl transition" onClick={() => window.open(doc.url, '_blank')}><ExternalLink size={16} /></button>
                    </div>
                  )) || <p className="text-slate-400 text-xs italic">No documents detailed in list.</p>}
                </div>
              </div>

              <div className="pt-6 flex gap-4">
                <button className="flex-1 bg-green-600 text-white py-3 rounded-2xl font-bold hover:bg-green-700 transition">Approve</button>
                <button className="flex-1 bg-red-50 text-red-600 py-3 rounded-2xl font-bold hover:bg-red-100 transition border border-red-100">Reject</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentRequests;
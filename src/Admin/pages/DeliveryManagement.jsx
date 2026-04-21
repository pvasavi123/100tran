import React from 'react';
import { Truck, MapPin, Package, Clock, Search, ChevronRight, Info } from 'lucide-react';

const DeliveryManagement = () => {
  const deliveries = [
    {
      id: "TRK-9908821",
      student: "Kiran Kumar",
      item: "Degree Certificate - B.Tech",
      orderDate: "Apr 12, 2026 • 10:30 AM",
      estDelivery: "Apr 18, 2026",
      status: "In Transit",
      // ✅ Added Tracking Details for the top of the timeline
      courierPartner: "BlueDart Express",
      currentLocation: "Secunderabad Sorting Facility, TS",
      history: [
        { 
          title: "Arrived at Secunderabad Hub", 
          time: "Today, 09:15 AM", 
          location: "Hyderabad, TS",
          done: true 
        },
        { 
          title: "In Transit to Destination", 
          time: "Yesterday, 11:20 PM", 
          location: "Main Dispatch Center",
          done: true 
        },
        { 
          title: "Verified & Packed by Registrar", 
          time: "Yesterday, 04:30 PM", 
          location: "University Campus",
          done: true 
        },
        { 
          title: "Request Received & Processed", 
          time: "Apr 12, 10:30 AM", 
          location: "Admin Portal",
          done: true 
        },
      ]
    },
    {
      id: "TRK-8821104",
      student: "Mohit Raj",
      item: "Migration Certificate",
      orderDate: "Apr 10, 2026 • 02:15 PM",
      estDelivery: "Delivered on Apr 14",
      status: "Delivered",
      courierPartner: "Delhivery",
      currentLocation: "Delivered",
      history: [
        { title: "Delivered to Candidate", time: "Apr 14, 05:00 PM", location: "Bangalore, KA", done: true },
        { title: "Out for Delivery", time: "Apr 14, 08:00 AM", location: "Whitefield Hub", done: true },
        { title: "Arrived at Bangalore City Hub", time: "Apr 13, 11:00 PM", location: "Nelamangala Hub", done: true },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white space-y-8 p-8 animate-in fade-in duration-700">
      
      {/* HEADER & SEARCH */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Logistics <span className="text-blue-600">Center</span></h1>
          <p className="text-slate-500 font-medium">Tracking {deliveries.length} active shipments</p>
        </div>
        
        <div className="flex items-center bg-slate-50 border border-slate-200 px-4 py-3 rounded-2xl w-full md:w-96 focus-within:border-blue-500 transition-all shadow-sm">
          <Search size={18} className="text-slate-400" />
          <input 
            type="text" 
            placeholder="Search Tracking ID..." 
            className="bg-transparent border-none focus:ring-0 text-sm text-slate-900 placeholder:text-slate-400 w-full ml-3"
          />
        </div>
      </div>

      {/* TRACKING CARDS */}
      <div className="max-w-6xl mx-auto space-y-8">
        {deliveries.map((item, i) => (
          <div key={i} className="bg-white border border-slate-200 rounded-[2rem] overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            
            {/* ITEM INFO HEADER */}
            <div className="p-6 border-b border-slate-100 bg-slate-50/50 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center border border-blue-100">
                  <Package size={24} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">ID: {item.id}</p>
                  <h3 className="text-slate-900 font-bold text-lg">{item.item}</h3>
                </div>
              </div>
              <div className="flex items-center gap-10">
                <div className="hidden lg:block text-right">
                  <p className="text-[10px] text-slate-400 font-bold uppercase">Estimated Delivery</p>
                  <p className="text-sm font-bold text-blue-600">{item.estDelivery}</p>
                </div>
                <div className={`px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest ${
                  item.status === 'Delivered' 
                  ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' 
                  : 'bg-blue-50 text-blue-600 border border-blue-100'
                }`}>
                  {item.status}
                </div>
              </div>
            </div>

            {/* TRACKING BODY */}
            <div className="p-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* RECIPIENT DETAILS */}
              <div className="lg:col-span-4 space-y-6 border-r border-slate-100 pr-8">
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                   <p className="text-[10px] text-slate-400 font-bold uppercase mb-3 tracking-widest">Recipient</p>
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center font-black text-white shadow-md">
                        {item.student[0]}
                      </div>
                      <p className="text-slate-900 font-bold">{item.student}</p>
                   </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-red-500 shrink-0 mt-1" />
                  <div>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Shipment Address</p>
                    <p className="text-sm text-slate-600 leading-relaxed mt-1 font-medium">
                      Plot No. 100, Tech Enclave,<br/>Madhapur, Hyderabad - 500081
                    </p>
                  </div>
                </div>
              </div>

              {/* TRACKING JOURNEY TIMELINE */}
              <div className="lg:col-span-8">
                {/* ✅ Added Courier & Location Summary */}
                <div className="mb-8 flex items-center justify-between p-4 bg-blue-50/50 rounded-2xl border border-blue-100/50">
                  <div className="flex items-center gap-3">
                    <Info size={16} className="text-blue-500" />
                    <div>
                      <p className="text-[10px] text-slate-400 font-bold uppercase">Courier Partner</p>
                      <p className="text-sm font-bold text-slate-800">{item.courierPartner}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-slate-400 font-bold uppercase">Last Seen At</p>
                    <p className="text-sm font-bold text-slate-800">{item.currentLocation}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-8">
                   <h4 className="text-slate-900 font-bold text-xs uppercase tracking-widest flex items-center gap-3">
                     <Clock size={16} className="text-blue-500" /> Tracking Journey
                   </h4>
                   <span className="text-[10px] text-slate-400 font-medium tracking-tight">Updated Just Now</span>
                </div>

                <div className="relative space-y-10 pl-10">
                  {/* Vertical Line */}
                  <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-slate-100"></div>
                  
                  {item.history.map((step, idx) => (
                    <div key={idx} className="relative">
                      {/* Circle Indicator */}
                      <div className={`absolute -left-[28px] top-0 w-5 h-5 rounded-full border-4 border-white z-10 shadow-sm ${
                        step.done ? 'bg-blue-600' : 'bg-slate-200'
                      }`}></div>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div>
                          <p className={`text-sm font-bold ${step.done ? 'text-slate-900' : 'text-slate-400'}`}>
                            {step.title}
                          </p>
                          <p className="text-[10px] text-slate-400 font-bold uppercase mt-0.5 tracking-wide">
                            Location: {step.location}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-[11px] font-bold text-blue-600">{step.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 pt-6 border-t border-slate-100 flex justify-end">
                  <button className="flex items-center gap-2 px-6 py-3 bg-slate-50 border border-slate-200 text-slate-600 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-100 transition-all">
                    Full Tracking Page <ChevronRight size={14} />
                  </button>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeliveryManagement;
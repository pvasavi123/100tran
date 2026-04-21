import React, { useState } from 'react';
// Added Search to the imports below
import { School, MapPin, Mail, Edit, Plus, X, Save, Search } from 'lucide-react';

const CollegeRequest = () => {
  // ✅ 1. Added the search state (This fixes the error)
  const [search, setSearch] = useState("");

  // State for List of Colleges
  const [colleges, setColleges] = useState([
    { id: 1, name: "Hyderabad Institute of Tech", location: "Hyderabad", email: "contact@hit.edu", memoPrice: 500, tcsPrice: 1200, paySlipPrice: 300 },
    { id: 2, name: "Global Engineering College", location: "Bangalore", email: "info@globaleng.com", memoPrice: 450, tcsPrice: 1100, paySlipPrice: 250 },
  ]);

  // UI States
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [isPriceModalOpen, setIsPriceModalOpen] = useState(false); 
  const [editingCollege, setEditingCollege] = useState(null); 
  
  const [formData, setFormData] = useState({ name: '', location: '', email: '', district: '', pincode: '', regType: 'Private' });

  // Open the price modal
  const handleEditClick = (college) => {
    setEditingCollege({ ...college });
    setIsPriceModalOpen(true);
  };

  // Save changes
  const saveUpdatedPrices = () => {
    setColleges(colleges.map(c => c.id === editingCollege.id ? editingCollege : c));
    setIsPriceModalOpen(false);
    setEditingCollege(null);
  };

  // Add new college
  const handleAddCollege = (e) => {
    e.preventDefault();
    const newCollege = {
      id: Date.now(),
      ...formData,
      memoPrice: 0,
      tcsPrice: 0,
      paySlipPrice: 0
    };
    setColleges([...colleges, newCollege]);
    setIsModalOpen(false);
    setFormData({ name: '', location: '', email: '', district: '', pincode: '', regType: 'Private' });
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">College Management</h1>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition"
        >
          <Plus size={18} /> Add College
        </button>
      </div>

      {/* 🔍 SEARCH Section (Kept as you requested) */}
      <div className="mb-5 flex justify-between flex-wrap gap-3">
        <input
          type="text"
          placeholder="Search partner..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-80 px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select className="px-4 py-2 border rounded-lg">
          <option>All Types</option>
          <option>University</option>
          <option>College</option>
          <option>Verification</option>
        </select>
      </div>

      {/* College List Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8 border border-gray-200">
        <table className="w-full text-left">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="p-4 font-semibold text-gray-600">College Name</th>
              <th className="p-4 font-semibold text-gray-600">Location</th>
              <th className="p-4 font-semibold text-gray-600">Email Address</th>
              <th className="p-4 font-semibold text-gray-600 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* ✅ 2. Added filtering to the map so search actually works */}
            {colleges
              .filter((college) => 
                college.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((college) => (
              <tr key={college.id} className="border-b hover:bg-gray-50 transition">
                <td className="p-4 flex items-center gap-3">
                  <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                    <School size={20} />
                  </div>
                  <span className="font-medium text-gray-700">{college.name}</span>
                </td>
                <td className="p-4 text-gray-600">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-gray-400" />
                    {college.location}
                  </div>
                </td>
                <td className="p-4 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Mail size={16} className="text-gray-400" />
                    {college.email}
                  </div>
                </td>
                <td className="p-4 text-center">
                  <button 
                    onClick={() => handleEditClick(college)}
                    className="bg-blue-50 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition flex items-center gap-2 mx-auto"
                  >
                    <Edit size={16} /> Update Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* --- MODAL FOR ADDING COLLEGE --- */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-2xl w-full max-w-lg relative shadow-2xl">
            <button 
              onClick={() => setIsModalOpen(false)} 
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
            >
              <X size={24} />
            </button>

            <h2 className="text-xl font-bold mb-6 text-gray-800 border-b pb-2">Register New College</h2>

            <form onSubmit={handleAddCollege} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">College Name</label>
                <input 
                  required 
                  type="text" 
                  placeholder="e.g. Hyderabad Institute of Technology" 
                  className="w-full border rounded-lg p-2 outline-none focus:ring-2 focus:ring-blue-500" 
                  value={formData.name} 
                  onChange={(e) => setFormData({...formData, name: e.target.value})} 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Official Email Address</label>
                <input 
                  required 
                  type="email" 
                  placeholder="admin@college.edu.in" 
                  className="w-full border rounded-lg p-2 outline-none focus:ring-2 focus:ring-blue-500" 
                  value={formData.email} 
                  onChange={(e) => setFormData({...formData, email: e.target.value})} 
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">District</label>
                  <input 
                    required 
                    type="text" 
                    placeholder="e.g. Rangareddy" 
                    className="w-full border rounded-lg p-2 outline-none focus:ring-2 focus:ring-blue-500" 
                    value={formData.district} 
                    onChange={(e) => setFormData({...formData, district: e.target.value})} 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Pincode</label>
                  <input 
                    required 
                    type="number" 
                    placeholder="500001" 
                    className="w-full border rounded-lg p-2 outline-none focus:ring-2 focus:ring-blue-500" 
                    value={formData.pincode} 
                    onChange={(e) => setFormData({...formData, pincode: e.target.value})} 
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">City / Location</label>
                <input 
                  required 
                  type="text" 
                  placeholder="e.g. Hyderabad" 
                  className="w-full border rounded-lg p-2 outline-none focus:ring-2 focus:ring-blue-500" 
                  value={formData.location} 
                  onChange={(e) => setFormData({...formData, location: e.target.value})} 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Registration Type</label>
                <select 
                  className="w-full border rounded-lg p-2 outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  value={formData.regType}
                  onChange={(e) => setFormData({...formData, regType: e.target.value})}
                >
                  <option value="Private">Private</option>
                  <option value="Government">Government</option>
                  <option value="Autonomous">Autonomous</option>
                  <option value="University">University</option>
                </select>
              </div>
              <button 
                type="submit" 
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition shadow-lg mt-4"
              >
                Save College Profile
              </button>
            </form>
          </div>
        </div>
      )}

      {/* --- MODAL FOR UPDATING PRICES --- */}
      {isPriceModalOpen && editingCollege && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-2xl w-full max-w-md shadow-2xl relative">
            <button onClick={() => setIsPriceModalOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
              <X size={24} />
            </button>
            
            <h2 className="text-xl font-bold mb-1 text-gray-800">Update Prices</h2>
            <p className="text-sm text-gray-500 mb-6 font-medium">{editingCollege.name}</p>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-1">MEMO PRICE (₹)</label>
                  <input type="number" className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500" 
                    value={editingCollege.memoPrice} onChange={(e) => setEditingCollege({...editingCollege, memoPrice: e.target.value})} />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-1">TCS PRICE (₹)</label>
                  <input type="number" className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500" 
                    value={editingCollege.tcsPrice} onChange={(e) => setEditingCollege({...editingCollege, tcsPrice: e.target.value})} />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 mb-1">PAY SLIP PRICE (₹)</label>
                <input type="number" className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500" 
                  value={editingCollege.paySlipPrice} onChange={(e) => setEditingCollege({...editingCollege, paySlipPrice: e.target.value})} />
              </div>

              <div className="pt-2 border-t border-gray-100">
                <label className="block text-xs font-bold text-blue-600 mb-1">CERTIFICATION PRICE (₹)</label>
                <input 
                  type="number" 
                  placeholder="Enter Amount"
                  className="w-full border-2 border-blue-100 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 bg-blue-50/30" 
                  value={editingCollege.certPrice || ''} 
                  onChange={(e) => setEditingCollege({...editingCollege, certPrice: e.target.value})} 
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 mb-1">CERTIFICATION TYPE</label>
                <select 
                  className="w-full border rounded-lg p-2 bg-white outline-none focus:ring-2 focus:ring-blue-500"
                  value={editingCollege.certType || 'Original'}
                  onChange={(e) => setEditingCollege({...editingCollege, certType: e.target.value})}
                >
                  <option value="Original">Original Verification</option>
                  <option value="Provisional">Provisional Certificate</option>
                  <option value="Transcript">Official Transcript</option>
                  <option value="Bonafide">Bonafide Certificate</option>
                </select>
              </div>

              <button 
                onClick={saveUpdatedPrices}
                className="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 flex items-center justify-center gap-2 transition shadow-lg mt-4"
              >
                <Save size={18} /> Save {editingCollege.name} Details
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CollegeRequest;
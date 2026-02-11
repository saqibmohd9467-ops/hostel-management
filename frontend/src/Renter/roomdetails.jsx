import React from "react";
import RenterSidebar from "./RenterSidebar";
import { BedDouble } from "lucide-react";

const RoomDetails = () => {
  const room = {
    roomNumber: "A-203",
    type: "Shared",
    rent: "₹ 5,000 / month",
  };

  return (
    <div className="min-h-screen bg-slate-100 flex">
      
      {/* Sidebar */}
      <RenterSidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 md:p-10">
        
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800 flex items-center gap-3">
            <BedDouble className="text-blue-600" size={28} />
            My Room Details
          </h1>
          <p className="text-slate-500 mt-1">
            View your current room allocation and details.
          </p>
        </div>

        {/* Card Container */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              
              <thead>
                <tr className="bg-blue-600 text-white text-left">
                  <th className="px-6 py-4 font-semibold">Room Number</th>
                  <th className="px-6 py-4 font-semibold">Type</th>
                  <th className="px-6 py-4 font-semibold">Monthly Rent</th>
                  <th className="px-6 py-4 font-semibold text-center">Action</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-200">
                <tr className="hover:bg-slate-50 transition">
                  <td className="px-6 py-4 font-medium text-slate-700">
                    {room.roomNumber}
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-600 rounded-full">
                      {room.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-600">
                    {room.rent}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button className="bg-red-500 text-white px-4 py-2 rounded-md text-xs font-medium hover:bg-red-600 transition shadow-sm">
                      Request Change
                    </button>
                  </td>
                </tr>
              </tbody>

            </table>
          </div>

        </div>

      </div>
    </div>
  );
};

export default RoomDetails;

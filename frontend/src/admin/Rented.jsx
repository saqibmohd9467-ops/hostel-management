import React from "react";
import Sidebar from "../components/AdminSidebar";

const Rented = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 md:p-10">

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Rented Rooms
          </h1>

          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition">
            + Add Rented
          </button>
        </div>

        {/* Table Card */}
        <div className="bg-white shadow-md rounded-xl overflow-hidden">

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              
              {/* Table Head */}
              <thead className="bg-gray-100 text-gray-700 uppercase text-sm">
                <tr>
                  <th className="px-6 py-4">S.No</th>
                  <th className="px-6 py-4">Room No.</th>
                  <th className="px-6 py-4">Renter Name</th>
                  <th className="px-6 py-4">Room Rent Status</th>
                  <th className="px-6 py-4 text-center">Action</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                <tr className="border-t hover:bg-gray-50 transition">
                  <td className="px-6 py-4">1</td>
                  <td className="px-6 py-4 font-medium text-gray-700">A</td>
                  <td className="px-6 py-4">B</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 text-sm font-semibold rounded-full bg-green-500 text-white">
                      Paid
                    </span>
                  </td>
                  <td className="px-6 py-4 flex gap-2 justify-center">
                    <button className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 transition">
                      Edit
                    </button>
                    <button className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition">
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>

            </table>
          </div>

          {/* Empty State Example (Optional when no data) */}
          {/* <div className="text-center py-10 text-gray-500">
            No Rented Rooms Found
          </div> */}

        </div>
      </div>
    </div>
  );
};

export default Rented;

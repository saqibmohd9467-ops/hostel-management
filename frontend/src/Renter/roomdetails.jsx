import React from "react";

const RoomDetails = () => {
  // Static room data (replace with backend data later)
  const room = {
    roomNumber: "A-203",
    type: "Shared",
    rent: "₹ 5,000 / month",
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8">
        
        {/* Heading */}
        <h2 className="text-2xl font-bold text-gray-700 mb-6">
          My Room Details
        </h2>

        {/* Room Details Table */}
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="py-3 px-4 text-left">Room Number</th>
                <th className="py-3 px-4 text-left">Type</th>
                <th className="py-3 px-4 text-left">Rent</th>
                <th className="py-3 px-4 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t hover:bg-gray-50">
                <td className="py-3 px-4">{room.roomNumber}</td>
                <td className="py-3 px-4">{room.type}</td>
                <td className="py-3 px-4">{room.rent}</td>
                <td className="py-3 px-4">
                  <button className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition">
                    Request Change
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default RoomDetails
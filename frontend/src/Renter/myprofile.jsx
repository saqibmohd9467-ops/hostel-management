import React from "react";
import { Link } from "react-router-dom";

const MyProfile = () => {
  // Static data (can be replaced with backend data later)
  const renter = {
    name: "John Doe",
    email: "john@example.com",
    phone: "9876543210",
    adhar: "1234 5678 9012",
    purpose: "Student",
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-8">
        
        {/* Top Section */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-700">
            My Profile
          </h2>

          <Link
            to="/renter/edit-profile"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Edit Profile
          </Link>
        </div>

        {/* Profile Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div>
            <p className="text-gray-500 text-sm">Full Name</p>
            <p className="text-lg font-medium text-gray-800">{renter.name}</p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Email</p>
            <p className="text-lg font-medium text-gray-800">{renter.email}</p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Phone</p>
            <p className="text-lg font-medium text-gray-800">{renter.phone}</p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Aadhaar Number</p>
            <p className="text-lg font-medium text-gray-800">{renter.adhar}</p>
          </div>

          <div className="md:col-span-2">
            <p className="text-gray-500 text-sm">Purpose of Stay</p>
            <p className="text-lg font-medium text-gray-800">{renter.purpose}</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MyProfile
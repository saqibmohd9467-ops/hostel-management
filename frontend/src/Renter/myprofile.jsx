import React, { useState } from "react";
import RenterSidebar from "./RenterSidebar";
import EditProfileForm from "./EditProfileForm";
import { User } from "lucide-react";

const MyProfile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const renter = {
    name: "John Doe",
    email: "john@example.com",
    phone: "9876543210",
    adhar: "1234 5678 9012",
    purpose: "Student",
    address: "221B Baker Street, Jaipur",
    joined: "January 2024",
  };

  return (
    <div className="min-h-screen bg-slate-100 flex">
      <RenterSidebar />

      <div className="flex-1 p-6 md:p-10">

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-slate-800 flex items-center gap-3">
            <User className="text-blue-600" size={28} />
            My Profile
          </h1>

          <button
            onClick={() => setIsEditing(true)}
            className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition shadow-sm"
          >
            Edit Profile
          </button>
        </div>

        {/* If Editing Show Form */}
        {isEditing ? (
          <EditProfileForm renter={renter} onCancel={() => setIsEditing(false)} />
        ) : (
          <div className="bg-white rounded-xl shadow-md p-8">

            {/* Profile Avatar Section */}
            <div className="flex items-center gap-6 mb-8">
              <div className="w-20 h-20 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold">
                {renter.name.charAt(0)}
              </div>
              <div>
                <h2 className="text-xl font-semibold text-slate-800">
                  {renter.name}
                </h2>
                <p className="text-slate-500">{renter.email}</p>
              </div>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <ProfileItem label="Phone" value={renter.phone} />
              <ProfileItem label="Aadhaar Number" value={renter.adhar} />
              <ProfileItem label="Purpose of Stay" value={renter.purpose} />
              <ProfileItem label="Member Since" value={renter.joined} />

              <div className="md:col-span-2">
                <ProfileItem label="Address" value={renter.address} />
              </div>

            </div>

          </div>
        )}
      </div>
    </div>
  );
};

const ProfileItem = ({ label, value }) => (
  <div>
    <p className="text-sm text-slate-500">{label}</p>
    <p className="text-lg font-medium text-slate-800">{value}</p>
  </div>
);

export default MyProfile;

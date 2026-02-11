import React from "react";
import AdminSidebar from "../components/AdminSidebar";
import {
  Users,
  BedDouble,
  Home,
} from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-slate-100 flex">
      
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 md:p-10">

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800">
            Admin Dashboard
          </h1>
          <p className="text-slate-500 mt-1">
            Overview of hostel management statistics.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Students Card */}
          <div className="bg-white rounded-xl shadow-md p-6 flex items-center justify-between hover:shadow-lg transition">
            <div>
              <p className="text-slate-500 text-sm">Total Students</p>
              <h2 className="text-3xl font-bold text-slate-800 mt-2">32</h2>
            </div>
            <div className="bg-blue-100 p-4 rounded-full">
              <Users className="text-blue-600" size={24} />
            </div>
          </div>

          {/* Total Rooms Card */}
          <div className="bg-white rounded-xl shadow-md p-6 flex items-center justify-between hover:shadow-lg transition">
            <div>
              <p className="text-slate-500 text-sm">Total Rooms</p>
              <h2 className="text-3xl font-bold text-slate-800 mt-2">52</h2>
            </div>
            <div className="bg-green-100 p-4 rounded-full">
              <BedDouble className="text-green-600" size={24} />
            </div>
          </div>

          {/* Rented Rooms Card */}
          <div className="bg-white rounded-xl shadow-md p-6 flex items-center justify-between hover:shadow-lg transition">
            <div>
              <p className="text-slate-500 text-sm">Total Rented</p>
              <h2 className="text-3xl font-bold text-slate-800 mt-2">32</h2>
            </div>
            <div className="bg-purple-100 p-4 rounded-full">
              <Home className="text-purple-600" size={24} />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Dashboard;

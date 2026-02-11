import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  User,
  BedDouble,
  CreditCard,
  MessageSquareWarning,
  Bell,
  LogOut,
} from "lucide-react";

import { FaBed, FaMoneyBillWave, FaExclamationCircle, FaBell } from "react-icons/fa";
import RenterSidebar from "./RenterSidebar";

const RenterDashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">

      <RenterSidebar/>

      {/* Main Content */}
      <div className="flex-1 p-6">

        {/* Top Bar */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-700">Dashboard</h1>
          <div className="text-gray-600">Welcome, John Doe 👋</div>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">

          <div className="bg-white p-5 rounded-lg shadow flex items-center space-x-4">
            <FaBed className="text-blue-600 text-3xl" />
            <div>
              <p className="text-gray-500">Room Number</p>
              <h3 className="text-xl font-bold">A-203</h3>
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg shadow flex items-center space-x-4">
            <FaMoneyBillWave className="text-green-600 text-3xl" />
            <div>
              <p className="text-gray-500">Pending Rent</p>
              <h3 className="text-xl font-bold">₹ 5,000</h3>
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg shadow flex items-center space-x-4">
            <FaExclamationCircle className="text-red-500 text-3xl" />
            <div>
              <p className="text-gray-500">Complaints</p>
              <h3 className="text-xl font-bold">2 Active</h3>
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg shadow flex items-center space-x-4">
            <FaBell className="text-yellow-500 text-3xl" />
            <div>
              <p className="text-gray-500">New Notices</p>
              <h3 className="text-xl font-bold">3</h3>
            </div>
          </div>

        </div>

        {/* Recent Payments */}
        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <h2 className="text-lg font-bold mb-4">Recent Payments</h2>
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="py-2">Month</th>
                <th className="py-2">Amount</th>
                <th className="py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2">January</td>
                <td className="py-2">₹ 5,000</td>
                <td className="py-2 text-green-600 font-semibold">Paid</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">February</td>
                <td className="py-2">₹ 5,000</td>
                <td className="py-2 text-red-600 font-semibold">Pending</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Complaint Status */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-bold mb-4">Complaint Status</h2>
          <div className="space-y-3">
            <div className="p-3 bg-gray-50 rounded flex justify-between">
              <span>Water leakage issue</span>
              <span className="text-yellow-600 font-semibold">In Progress</span>
            </div>
            <div className="p-3 bg-gray-50 rounded flex justify-between">
              <span>Fan not working</span>
              <span className="text-green-600 font-semibold">Resolved</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default RenterDashboard



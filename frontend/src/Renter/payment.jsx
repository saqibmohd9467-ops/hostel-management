import React from "react";
import RenterSidebar from "./RenterSidebar";
import { CreditCard } from "lucide-react";

const Payments = () => {
  const payments = [
    { month: "January", amount: "₹ 5,000", status: "Paid" },
    { month: "February", amount: "₹ 5,000", status: "Pending" },
    { month: "March", amount: "₹ 5,000", status: "Paid" },
    { month: "April", amount: "₹ 5,000", status: "Pending" },
  ];

  return (
    <div className="min-h-screen bg-slate-100 flex">
      
      {/* Sidebar */}
      <RenterSidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 md:p-10">

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800 flex items-center gap-3">
            <CreditCard className="text-blue-600" size={28} />
            Payment History
          </h1>
          <p className="text-slate-500 mt-1">
            View your monthly rent payments and current status.
          </p>
        </div>

        {/* Card Container */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              
              <thead>
                <tr className="bg-blue-600 text-white text-left">
                  <th className="px-6 py-4 font-semibold">Month</th>
                  <th className="px-6 py-4 font-semibold">Amount</th>
                  <th className="px-6 py-4 font-semibold">Status</th>
                  <th className="px-6 py-4 font-semibold text-center">Action</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-200">
                {payments.map((payment, index) => (
                  <tr
                    key={index}
                    className="hover:bg-slate-50 transition"
                  >
                    <td className="px-6 py-4 font-medium text-slate-700">
                      {payment.month}
                    </td>

                    <td className="px-6 py-4 text-slate-600">
                      {payment.amount}
                    </td>

                    <td className="px-6 py-4">
                      {payment.status === "Paid" ? (
                        <span className="px-3 py-1 text-xs font-semibold bg-green-100 text-green-600 rounded-full">
                          Paid
                        </span>
                      ) : (
                        <span className="px-3 py-1 text-xs font-semibold bg-red-100 text-red-600 rounded-full">
                          Pending
                        </span>
                      )}
                    </td>

                    <td className="px-6 py-4 text-center">
                      {payment.status === "Pending" ? (
                        <button className="bg-blue-600 text-white px-4 py-2 text-xs font-medium rounded-md hover:bg-blue-700 transition shadow-sm">
                          Pay Now
                        </button>
                      ) : (
                        <button className="bg-slate-200 text-slate-600 px-4 py-2 text-xs font-medium rounded-md cursor-not-allowed">
                          Paid
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Payments;

import React from "react";

const Payments = () => {
  // Static payment data (replace with API data later)
  const payments = [
    { month: "January", amount: "₹ 5,000", status: "Paid" },
    { month: "February", amount: "₹ 5,000", status: "Pending" },
    { month: "March", amount: "₹ 5,000", status: "Paid" },
    { month: "April", amount: "₹ 5,000", status: "Pending" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8">
        
        {/* Heading */}
        <h2 className="text-2xl font-bold text-gray-700 mb-6">
          Payment History
        </h2>

        {/* Payments Table */}
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="py-3 px-4 text-left">Month</th>
                <th className="py-3 px-4 text-left">Amount</th>
                <th className="py-3 px-4 text-left">Status</th>
                <th className="py-3 px-4 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment, index) => (
                <tr
                  key={index}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="py-3 px-4">{payment.month}</td>
                  <td className="py-3 px-4">{payment.amount}</td>
                  <td
                    className={`py-3 px-4 font-semibold ${
                      payment.status === "Paid" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {payment.status}
                  </td>
                  <td className="py-3 px-4">
                    {payment.status === "Pending" ? (
                      <button className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 transition">
                        Pay Now
                      </button>
                    ) : (
                      <button className="bg-gray-300 text-gray-700 px-3 py-1 rounded-md cursor-not-allowed">
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
  );
};

export default Payments
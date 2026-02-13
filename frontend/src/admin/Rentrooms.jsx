import React, { useState, useEffect } from "react";
import Sidebar from "../components/AdminSidebar";
import Rentroomform from "./rentroomform";

const Rentroom = () => {
  const [rentrooms, setRentrooms] = useState([]);
  const [showform, setShowform] = useState(false);
  const [sdata, setSdata] = useState({});
  const [editMode, setEditMode] = useState(false);

  // Fetch All Rent Rooms
  const getrentrooms = async () => {
    const res = await fetch("http://localhost:5000/rentroom");
    const data = await res.json();
    setRentrooms(data);
    console.log("rrr",data)
  };

  // Delete
  const deleteRentroom = async (id) => {
    await fetch(`http://localhost:5000/rentroom/${id}`, {
      method: "DELETE",
    });
    getrentrooms();
  };

  // Edit Single
  const singleRentroom = async (id) => {
    const res = await fetch(`http://localhost:5000/rentroom/${id}`);
    const data = await res.json();
    setSdata(data);
    setShowform(true);
    setEditMode(true);
  };

  useEffect(() => {
    getrentrooms();
  }, []);

  // Rent Status Logic
  const getStatus = (pending) => {
    if (pending === 0)
      return "bg-green-100 text-green-700";
    if (pending > 0)
      return "bg-red-100 text-red-700";
    return "bg-yellow-100 text-yellow-700";
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Sidebar />

      <div className="flex-1 p-8">

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Rent Room Management
          </h1>

          <button
            onClick={() => {
              setShowform(true);
              setEditMode(false);
              setSdata({});
            }}
            className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition"
          >
            + Assign Room
          </button>
        </div>

        {/* Table */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-100 text-gray-700 uppercase">
                <tr>
                  <th className="px-6 py-4">S.No</th>
                  <th className="px-6 py-4">Room</th>
                  <th className="px-6 py-4">Name</th>
                  <th className="px-6 py-4">Mobile</th>
                  <th className="px-6 py-4">Total</th>
                  <th className="px-6 py-4">Paid</th>
                  <th className="px-6 py-4">Pending</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-center">Action</th>
                </tr>
              </thead>

              <tbody>
                {rentrooms.map((x, i) => (
                  <tr
                    key={x._id}
                    className="border-t hover:bg-gray-50 transition"
                  >
                    <td className="px-6 py-4">{i + 1}</td>
                    <td className="px-6 py-4 font-medium">{x.roomno}</td>
                    <td className="px-6 py-4">{x.name}</td>
                    <td className="px-6 py-4">{x.mobile}</td>
                    <td className="px-6 py-4">₹ {x.totalrent}</td>
                    <td className="px-6 py-4">₹ {x.paidrent}</td>
                    <td className="px-6 py-4">₹ {x.pendingrent}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatus(
                          x.pendingrent
                        )}`}
                      >
                        {x.pendingrent === 0
                          ? "Paid"
                          : x.pendingrent > 0
                          ? "Pending"
                          : "Partial"}
                      </span>
                    </td>
                    <td className="px-6 py-4 flex gap-2 justify-center">
                      <button
                        onClick={() => singleRentroom(x._id)}
                        className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteRentroom(x._id)}
                        className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {rentrooms.length === 0 && (
              <div className="text-center py-12 text-gray-500">
                No Rent Records Found
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal */}
      {showform && (
        <Rentroomform
          sdata={sdata}
          isedit={editMode}
          onclose={() => {
            setShowform(false);
            getrentrooms(); // refresh after close
          }}
        />
      )}
    </div>
  );
};

export default Rentroom;

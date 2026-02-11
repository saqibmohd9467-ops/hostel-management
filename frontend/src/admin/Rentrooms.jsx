import React, { useState, useEffect } from "react";
import Sidebar from "../components/AdminSidebar";
import Rentroomform from "./rentroomform";

const Rentroom = () => {
  const [rentrooms, setrentrooms] = useState([]);
  const [showform, setshowform] = useState(false);
  const [sdata, setsdata] = useState({});
  const [editMode, seteditMode] = useState(false);

  const getrentrooms = async () => {
    const re = await fetch("http://localhost:5000/rentroom", {
      method: "GET",
      headers: { "Content-Type": "Application/json" },
    });
    const data = await re.json();
    setrentrooms(data);
  };

  const deleteStudent = async (id) => {
    const res = await fetch(`http://localhost:5000/rentroom/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "Application/json" },
    });
    await res.json();
    getrentrooms();
  };

  const singlestudent = async (id) => {
    const re = await fetch(`http://localhost:5000/student/${id}`, {
      method: "GET",
      headers: { "Content-Type": "Application/json" },
    });
    const data = await re.json();
    setsdata(data);
    setshowform(true);
    seteditMode(true);
  };

  useEffect(() => {
    getrentrooms();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 md:p-10">

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Rent Rooms
          </h1>

          <button
            onClick={() => {
              setshowform(true);
              seteditMode(false);
            }}
            className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition"
          >
            + Add Rent
          </button>
        </div>

        {/* Table Card */}
        <div className="bg-white shadow-md rounded-xl overflow-hidden">

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-100 text-gray-700 uppercase text-sm">
                <tr>
                  <th className="px-6 py-4">S.No</th>
                  <th className="px-6 py-4">Room No</th>
                  <th className="px-6 py-4">Rented By</th>
                  <th className="px-6 py-4">Total Rent</th>
                  <th className="px-6 py-4">Rent Status</th>
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
                    <td className="px-6 py-4 font-medium text-gray-700">
                      {x.roomno}
                    </td>
                    <td className="px-6 py-4">{x.rentername}</td>
                    <td className="px-6 py-4">₹ {x.paidroomrent}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 text-sm font-semibold rounded-full text-white ${
                          x.rentstatus === "pending"
                            ? "bg-orange-500"
                            : "bg-green-500"
                        }`}
                      >
                        {x.rentstatus}
                      </span>
                    </td>
                    <td className="px-6 py-4 flex gap-2 justify-center">
                      <button
                        onClick={() => singlestudent(x._id)}
                        className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 transition"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteStudent(x._id)}
                        className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
                      >
                        Delete
                      </button>
                      <button className="bg-gray-500 text-white px-3 py-1 rounded-md hover:bg-gray-600 transition">
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {rentrooms.length === 0 && (
              <div className="text-center py-10 text-gray-500">
                No Rent Records Found
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal Form */}
      {showform && (
        <Rentroomform
          sdata={sdata}
          onclose={() => setshowform(false)}
          isedit={editMode}
        />
      )}
    </div>
  );
};

export default Rentroom;

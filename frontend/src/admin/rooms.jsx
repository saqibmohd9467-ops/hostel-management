import React, { useState, useEffect } from "react";
import Sidebar from "../components/AdminSidebar";
import Roomform from "./roomform";
import { showToast } from "../components/Toast";

const Rooms = () => {
    const [rooms, setrooms] = useState([]);
    const [showform, setshowform] = useState(false);
    const [sdata, setsdata] = useState({});
    const [editMode, seteditMode] = useState(false);
    
    const getrooms = async () => {
        const re = await fetch("http://localhost:5000/room", {
            method: "GET",
            headers: { "Content-Type": "Application/json" },
        });
        const data = await re.json();
        setrooms(data);
        setshowform(false);
    };
    
    
    useEffect(() => {
        getrooms();
    }, []);

    const deleteroom = async (id) => {
        const res = await fetch(`http://localhost:5000/room/${id}`, {
            method: "DELETE",
            headers: { "Content-Type": "Application/json" },
        });
        const data = await res.json();
        showToast(data.msg, "success", "top-center")
        getrooms();
    };
    
    // getting single room data 
    const singleroom = async (id) => {
        seteditMode(true)
        const re = await fetch(`http://localhost:5000/room/${id}`, {
            method: "GET",
            headers: { "Content-Type": "Application/json" }
        })
        const data = await re.json()
        setsdata(data)
        setshowform(true)
    }

    

    return (
        <div className="min-h-screen bg-gray-100 flex">

            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 p-6 md:p-10">

                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">
                        Rooms Management
                    </h1>

                    <button
                        onClick={() => setshowform(true)}
                        className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition"
                    >
                        + Add Room
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
                                    <th className="px-6 py-4">Room No</th>
                                    <th className="px-6 py-4">Room Type</th>
                                    <th className="px-6 py-4">Room Status</th>
                                    <th className="px-6 py-4">Room Rent</th>
                                    <th className="px-6 py-4 text-center">Action</th>
                                </tr>
                            </thead>

                            {/* Table Body */}
                            <tbody>
                                {rooms.map((x, i) => (
                                    <tr
                                        key={x._id}
                                        className="border-t hover:bg-gray-50 transition"
                                    >
                                        <td className="px-6 py-4">{i + 1}</td>
                                        <td className="px-6 py-4 font-medium text-gray-700">
                                            {x.roomno}
                                        </td>
                                        <td className="px-6 py-4">{x.roomtype}</td>
                                        <td className="px-6 py-4">
                                            <span
                                                className={`px-3 py-1 text-sm font-semibold rounded-full ${x.roomstatus === "available"
                                                        ? "bg-green-500 text-white"
                                                        : "bg-red-500 text-white"
                                                    }`}
                                            >
                                                {x.roomstatus}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 font-semibold text-gray-800">
                                            ₹ {x.roomrent}
                                        </td>
                                        <td className="px-6 py-4 flex gap-2 justify-center">
                                            <button
                                                onClick={() => singleroom(x._id)}
                                                className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 transition"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => deleteroom(x._id)}
                                                className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>
                    </div>

                    {rooms.length === 0 && (
                        <div className="text-center py-10 text-gray-500">
                            No Rooms Found
                        </div>
                    )}
                </div>
            </div>

            {/* Modal Form */}
            {showform ? (
                <Roomform
                    getrooms={getrooms}
                    sdata={sdata}
                    onclose={() => setshowform(false)}
                    isedit={editMode}
                />
            ) : null}
        </div>
    );
};

export default Rooms;

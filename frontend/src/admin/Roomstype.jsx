import React, { useState, useEffect } from "react";
import Sidebar from "../components/AdminSidebar";
import Roomform from "./roomtypeform";

const Roomtype = () => {
    const [room, setroom] = useState([]);
    const [showform, setshowform] = useState(false);
    const [editMode, seteditMode] = useState(false);
    const [singledata, setsingledata] = useState({});

    const getroomtype = async () => {
        const re = await fetch("http://localhost:5000/roomtype", {
            method: "GET",
            headers: { "Content-Type": "Application/json" },
        });
        const data = await re.json();
        console.log(data);
        setroom(data);
        seteditMode(false);
        setshowform(false);
    };

    useEffect(() => {
        getroomtype();
    }, []);

    const singleroomtype = async (id) => {
        const re = await fetch(`http://localhost:5000/roomtype/${id}`, {
            method: "GET",
            headers: { "Content-Type": "Application/json" },
        });
        const data = await re.json();
        console.log(data);
        setsingledata(data);
        setshowform(true);
        seteditMode(true);
    };

    const deleteroomtype = async (id) => {
        const res = await fetch(`http://localhost:5000/roomtype/${id}`, {
            method: "DELETE",
            headers: { "Content-Type": "Application/json" },
        });
        const data = await res.json();
        console.log(data);
        getroomtype();
    };

    return (
        <div className="min-h-screen bg-gray-100 flex">

            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 p-6 md:p-10">

                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">
                        Room Types
                    </h1>

                    <button
                        onClick={() => setshowform(true)}
                        className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition"
                    >
                        + Add Room Type
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
                                    <th className="px-6 py-4">Room Type</th>
                                    <th className="px-6 py-4 text-center">Actions</th>
                                </tr>
                            </thead>

                            {/* Table Body */}
                            <tbody>
                                {room.map((x, i) => (
                                    <tr
                                        key={x._id}
                                        className="border-t hover:bg-gray-50 transition"
                                    >
                                        <td className="px-6 py-4">{i + 1}</td>
                                        <td className="px-6 py-4 font-medium text-gray-700">
                                            {x.roomtype}
                                        </td>
                                        <td className="px-6 py-4 flex gap-2 justify-center">
                                            <button
                                                onClick={() => singleroomtype(x._id)}
                                                className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 transition"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => deleteroomtype(x._id)}
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

                    {room.length === 0 && (
                        <div className="text-center py-10 text-gray-500">
                            No Room Types Found
                        </div>
                    )}
                </div>
            </div>

            {/* Modal Form */}
            {showform ? (
                <Roomform
                    onclose={() => setshowform(false)}
                    isedit={editMode}
                    singledata={singledata}
                    getroomtype={getroomtype}
                />
            ) : null}
        </div>
    );
};

export default Roomtype;

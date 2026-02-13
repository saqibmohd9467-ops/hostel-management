import { useState, useEffect } from 'react';
import rooms from './Rentrooms';
import { showToast } from '../components/Toast';

// for post data on table


const Roomform = ({ onclose, sdata, isedit, getrooms }) => {

  const [roomno, setroomno] = useState("")
  const [roomstatus, setroomstatus] = useState("available")
  const [roomrent, setroomrent] = useState("")
  const [roomtype, setroomtype] = useState("Single")

  const addroom = async (e) => {
    e.preventDefault();
    const re = await fetch("http://localhost:5000/room", {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify({
        rm: roomno,
        rt: roomtype,
        rtt: roomstatus,
        rmst: roomrent,
      })
    })
    const data = await re.json();
    showToast(data.msg, "info", "top-center")
    if (data.msg === "Room added") {
      getrooms()

    }
    // reload()
  }


  useEffect(() => {
    if (isedit && sdata) {
      setroomno(sdata.roomno)
      setroomtype(sdata.roomtype)
      setroomstatus(sdata.roomstatus)
      setroomrent(sdata.roomrent)
    }
  }, [isedit, sdata])


  const [roomtypedata, setroomtypedata] = useState([])

  const getroomtype = async () => {
    const re = await fetch("http://localhost:5000/roomtype", {
      method: "GET",
      headers: { "Content-Type": "Application/json" }
    })
    const data = await re.json()

    setroomtypedata(data)
  }

  useEffect(() => {
    getroomtype()
  }, [])


  // updating room 
  const updateroom = async () => {
    const re = await fetch("http://localhost:5000/room/" + sdata._id, {
      method: "PUT",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify({
        roomno: roomno,
        roomtype: roomtype,
        roomstatus: roomstatus,
        roomrent: roomrent,
      })
    })
    const data = await re.json()
    showToast(data.msg, "info", "top-center")
    if (data.msg === "Room Updated") {
      getrooms()
    }


  }



  return (
    <>

      <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
        <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-6 relative">

          {/* Header */}
          <div className="flex justify-between items-center border-b pb-3 mb-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Add Room
            </h2>
            <button
              onClick={onclose}
              className="text-gray-500 hover:text-red-500 text-xl font-bold"
            >
              ✕
            </button>
          </div>

          {/* Form */}
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              isedit ? updateroom(e) : addroom(e);
            }}
          >

            {/* Room Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Room Number
              </label>
              <input
                type="text"
                value={roomno}
                onChange={(e) => setroomno(e.target.value)}
                placeholder="Enter room number"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>

            {/* Room Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Select Room Type
              </label>
              <select
                value={roomtype}
                onChange={(e) => setroomtype(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              >
                <option value="">SKelect room type</option>
                {roomtypedata.map((x, i) => (
                  <option key={i} value={x.roomtype}>
                    {x.roomtype}
                  </option>
                ))}
              </select>
            </div>

            {/* Room Status */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Room Status
              </label>
              <select
                value={roomstatus}
                onChange={(e) => setroomstatus(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              >
                <option value="available">Available</option>
                <option value="occupied">Occupied</option>
              </select>
            </div>

            {/* Room Rent */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Room Rent (₹)
              </label>
              <input
                type="number"
                value={roomrent}
                onChange={(e) => setroomrent(e.target.value)}
                placeholder="Enter room rent"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              {isedit ? "Update Room" : "Add Room"}
            </button>
          </form>
        </div>
      </div>

    </>
  )
}

export default Roomform
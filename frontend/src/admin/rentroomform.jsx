import { useState, useEffect } from "react";

const Rentroomform = ({ onclose, isedit, sdata }) => {
  const [roomid, setroomid] = useState("");
  const [name, setname] = useState("");
  const [mobile, setmobile] = useState("");
  const [aadhaar, setaadhaar] = useState("");
  const [address, setaddress] = useState("");
  const [purpose, setpurpose] = useState("");
  const [totalrent, settotalrent] = useState(0);
  const [paidrent, setpaidrent] = useState(0);
  const [pendingrent, setpendingrent] = useState(0);
  const [rooms, setrooms] = useState([]);

  // Fetch rooms
  const getrooms = async () => {
    const res = await fetch("http://localhost:5000/room");
    const data = await res.json();
    // console.log(data)
    setrooms(data);
  };

  useEffect(() => {
    getrooms();
  }, []);

  // Fill data when editing
  useEffect(() => {
    if (isedit && sdata) {
      setroomid(sdata.roomid);
      setname(sdata.name);
      setmobile(sdata.mobile);
      setaadhaar(sdata.aadhaar);
      setaddress(sdata.address);
      setpurpose(sdata.purpose);
      settotalrent(sdata.totalrent);
      setpaidrent(sdata.paidrent);
      setpendingrent(sdata.pendingrent);
    }
  }, [isedit, sdata]);

  // Auto set total rent when room selected
  useEffect(() => {
    if (roomid) {
      const selectedRoom = rooms.find((r) => r._id === roomid);
      if (selectedRoom) {
        settotalrent(selectedRoom.roomrent);
      }
    }
  }, [roomid, rooms]);

  // Calculate pending rent
  useEffect(() => {
    const pending = Number(totalrent) - Number(paidrent);
    setpendingrent(pending >= 0 ? pending : 0);
  }, [paidrent, totalrent]);

  // Submit function
  const handlesubmit = async (e) => {
    alert(isedit)
    e.preventDefault();

    const url = isedit
      ? `http://localhost:5000/updaterentroom/${sdata._id}`
      : "http://localhost:5000/rentroom";

    const method = isedit ? "PUT" : "POST";

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        roomid,
        name,
        mobile,
        aadhaar,
        address,
        purpose,
        totalrent,
        paidrent,
        pendingrent,
      }),
    });

    onclose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-xl rounded-xl shadow-lg p-6">

        <h2 className="text-xl font-semibold mb-6">
          {isedit ? "Update Rent Details" : "Assign Rent Room"}
        </h2>

        <form onSubmit={handlesubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Select Room */}
          <div className="col-span-2">
            <label>Select Room No</label>
            <select
              className="w-full border p-2 rounded"
              value={roomid}
              onChange={(e) => setroomid(e.target.value)}
              disabled={isedit}
              required
            >
              <option value="">-- Select Room --</option>
              {rooms.map((room) => (
                <option key={room._id} value={room._id}>
                  Room {room.roomno}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label>Name</label>
            <input
              className="w-full border p-2 rounded"
              placeholder="Enter renter name"
              value={name}
              onChange={(e) => setname(e.target.value)}
              required
            />
          </div>

          <div>
            <label>Mobile</label>
            <input
              className="w-full border p-2 rounded"
              placeholder="Enter mobile number"
              value={mobile}
              onChange={(e) => setmobile(e.target.value)}
              required
            />
          </div>

          <div>
            <label>Aadhaar</label>
            <input
              className="w-full border p-2 rounded"
              placeholder="Enter Aadhaar number"
              value={aadhaar}
              onChange={(e) => setaadhaar(e.target.value)}
              required
            />
          </div>

          <div>
            <label>Address</label>
            <input
              className="w-full border p-2 rounded"
              placeholder="Enter address"
              value={address}
              onChange={(e) => setaddress(e.target.value)}
              required
            />
          </div>

          <div>
            <label>Purpose</label>
            <input
              className="w-full border p-2 rounded"
              placeholder="Enter purpose"
              value={purpose}
              onChange={(e) => setpurpose(e.target.value)}
              required
            />
          </div>

          {/* Total Rent (Disabled) */}
          <div>
            <label>Total Rent</label>
            <input
              className="w-full border p-2 rounded bg-gray-100"
              value={totalrent}
              disabled
            />
          </div>

          {/* Paid Rent */}
          <div>
            <label>Paid Rent</label>
            <input
              type="number"
              className="w-full border p-2 rounded"
              placeholder="Enter paid rent"
              value={paidrent}
              onChange={(e) => setpaidrent(e.target.value)}
              required
            />
          </div>

          {/* Pending Rent */}
          {/* <div className="col-span-2">
            <label>Pending Rent</label>
            <input
              className="w-full border p-2 rounded bg-gray-100"
              value={pendingrent}
              disabled
            />
          </div> */}

          <div className="col-span-2 mt-4">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded"
            >
              {isedit ? "Update Details" : "Assign Room"}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Rentroomform;

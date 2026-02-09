import { useState, useEffect } from "react";

const Rentroomform = ({ onclose, isedit, sdata }) => {
  const [roomid, setroomid] = useState("");
  const [rentername, setrentername] = useState("");
  const [address, setaddress] = useState("");
  const [mobileno, setmobileno] = useState("");
  const [aadhaar, setaadhaar] = useState("");
  const [purpose, setpurpose] = useState("");
  const [roomrent, setroomrent] = useState("");
  const [rooms, setroom] = useState([]);

  useEffect(() => {
    if (isedit && sdata) {
      setrentername(sdata.rentername);
      setroomid(sdata.roomid);
      setaddress(sdata.address);
      setmobileno(sdata.mobileno);
      setaadhaar(sdata.aadhaar);
      setpurpose(sdata.purpose);
      setroomrent(sdata.roomrent);
    }
  }, [isedit, sdata]);

  const addrentroom = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:5000/rentroom", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: roomid,
        rn: rentername,
        adh: aadhaar,
        mobile: mobileno,
        rnadrs: address,
        pp: purpose,
        roomrent,
      }),
    });
    onclose();
  };

  const updaterentroom = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:5000/updaterentroom/${sdata._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: roomid,
        rn: rentername,
        adh: aadhaar,
        mobile: mobileno,
        rnadrs: address,
        pp: purpose,
        roomrent,
      }),
    });
    onclose();
  };

  const getrentroom = async () => {
    const re = await fetch("http://localhost:5000/room");
    const data = await re.json();
    setroom(data);
  };

  useEffect(() => {
    getrentroom();
  }, []);

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-xl rounded-xl shadow-lg p-6 relative">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">
            {isedit ? "Update Rent Room" : "Assign Rent Room"}
          </h2>
          <button
            onClick={onclose}
            className="text-gray-500 hover:text-red-500 text-lg"
          >
            ✕
          </button>
        </div>

        {/* Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          <div className="col-span-2">
            <label className="form-label">Select Room</label>
            <select
              className="form-input"
              value={roomid}
              onChange={(e) => setroomid(e.target.value)}
            >
              <option value="">-- Select Room --</option>
              {rooms.map((x) => (
                <option key={x._id} value={x._id}>
                  Room {x.roomno}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="form-label">Renter Name</label>
            <input
              className="form-input"
              value={rentername}
              onChange={(e) => setrentername(e.target.value)}
              placeholder="Enter name"
            />
          </div>

          <div>
            <label className="form-label">Mobile No.</label>
            <input
              className="form-input"
              value={mobileno}
              onChange={(e) => setmobileno(e.target.value)}
              placeholder="Enter mobile"
            />
          </div>

          <div className="col-span-2">
            <label className="form-label">Address</label>
            <input
              className="form-input"
              value={address}
              onChange={(e) => setaddress(e.target.value)}
              placeholder="Enter address"
            />
          </div>

          <div>
            <label className="form-label">Aadhaar No.</label>
            <input
              className="form-input"
              value={aadhaar}
              onChange={(e) => setaadhaar(e.target.value)}
              placeholder="Enter Aadhaar"
            />
          </div>

          <div>
            <label className="form-label">Purpose</label>
            <input
              className="form-input"
              value={purpose}
              onChange={(e) => setpurpose(e.target.value)}
              placeholder="Purpose"
            />
          </div>

          <div className="col-span-2">
            <label className="form-label">Room Rent</label>
            <input
              className="form-input"
              value={roomrent}
              onChange={(e) => setroomrent(e.target.value)}
              placeholder="Enter rent"
            />
          </div>

          <div className="col-span-2 mt-4">
            <button
              onClick={isedit ? updaterentroom : addrentroom}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium"
            >
              {isedit ? "Update Room" : "Assign Room"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Rentroomform;

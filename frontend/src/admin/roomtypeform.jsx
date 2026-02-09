import { useState, useEffect } from "react"
import './dashboard.css'


const Roomform = ({ onclose, isedit, singledata, getroomtype }) => {

    // const [serialno, setserialno] = useState("")
    const [roomtype, setroomtype] = useState("")

    const addroomtype = async (e) => {
        e.preventDefault();
        const re = await fetch("http://localhost:5000/roomtype", {
            method: "POST",
            headers: { "Content-Type": "Application/json" },
            body: JSON.stringify({
                rt: roomtype
            })
        })
        const data = await re.json();
        console.log(data);
        getroomtype()
        // reload()
    }

    useEffect(() => {
        console.log(singledata);
        if (singledata) {
            setroomtype(singledata.roomtype)
            console.log(singledata);
        }
    }, [])


    const updateroomtype = async(e)=>{
        e.preventDefault()
          const re = await fetch(`http://localhost:5000/roomtype/${singledata._id}`, {
            method: "PUT",
            headers: { "Content-Type": "Application/json" },
            body:JSON.stringify({
                rt:roomtype
            })

        })
        const data = await re.json();
        console.log(data);
        getroomtype()
    }
    return (
        <>
            {/* <div className="a1new">
                <div className="hh1">{isedit ? "Edit Room Type": "Add Room Type"}</div>
                <div className="a2new" onClick={onclose}>X</div>

                <form className="rmform">

                    <label htmlFor="">Room Type</label>
                    <input value={roomtype} onChange={(e) => { setroomtype(e.target.value) }} type="text" placeholder="Enter Room Type" />

                    <button className="btt2" onClick={isedit ? updateroomtype : addroomtype}>{isedit ? "Update" : "Add"}</button>

                </form>


            </div> */}

            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
  <div className="bg-white w-[420px] rounded-xl shadow-xl p-6 relative animate-fadeIn">

    {/* Header */}
    <div className="flex items-center justify-between mb-5">
      <h2 className="text-xl font-semibold text-gray-800">
        {isedit ? "Edit Room Type" : "Add Room Type"}
      </h2>
      <button
        onClick={onclose}
        className="text-gray-400 hover:text-red-500 text-xl font-bold"
      >
        ✕
      </button>
    </div>

    {/* Form */}
    <form className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">
          Room Type
        </label>
        <input
          type="text"
          value={roomtype}
          onChange={(e) => setroomtype(e.target.value)}
          placeholder="Enter Room Type"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="button"
        onClick={isedit ? updateroomtype : addroomtype}
        className={`w-full py-2 rounded-lg text-white font-semibold transition
          ${isedit ? "bg-green-600 hover:bg-green-700" : "bg-blue-600 hover:bg-blue-700"}`}
      >
        {isedit ? "Update Room Type" : "Add Room Type"}
      </button>
    </form>
  </div>
</div>

        </>
    )
}
export default Roomform

import React from 'react'
import './dashboard.css'
import { useState, useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import Roomform from './roomform'

const Rooms = () => {

    const [rooms, setrooms] = useState([])

    const [showform, setshowform] = useState(false)
    const [sdata, setsdata] = useState({})
    const [editMode, seteditMode] = useState(false)



    const getrooms = async () => {
        const re = await fetch("http://localhost:5000/room", {
            method: "GET",
            headers: { "Content-Type": "Application/json" }
        })
        const data = await re.json()
        console.log(data)
        setrooms(data)
        setshowform(false)
    }

    useEffect(() => {
        getrooms()
    }, []);

    const deleteroom= async(id)=>{
        // alert(id)
        const res= await fetch(`http://localhost:5000/room/${id}`,{
            method:"DELETE",
            headers:{"Content-Type":"Application/json"}
        })
        const data=await res.json();
        console.log(data);
        getrooms()
 }



    return (

        <div className="a1">
            <div className="b1">
                <h1>Admin</h1><br></br>
                <Sidebar />
            </div>
            <div className="b2">
                <div className="c1">
                    <h1> Rooms</h1>

                </div>
                <div className="c2">
                    <div className="d1">
                        <button onClick={() => setshowform(true)}>Add</button>
                    </div>
                    <div className="e1">
                        <table className="tb">
                            <tbody>

                                <tr>
                                    <td>S.No</td>
                                    {/* <td>Student Name</td> */}
                                    <td>Room No</td>
                                    <td>Room Type</td>
                                    {/* <td>Address</td> */}
                                    {/* <td>Mobile No.</td> */}
                                    {/* <td>Aadhaar</td> */}
                                    <td>Room Status</td>
                                    <td>Room Rent</td>
                                    <td>Action</td>
                                </tr>
                                {
                                    rooms.map((x, i) => {
                                        return (
                                            <tr>
                                                <td>{i + 1}</td>
                                                {/* <td>{x.studentname}</td> */}
                                                <td>{x.roomno}</td>
                                                <td>{x.roomtype}</td>
                                                {/* <td>{x.address}</td> */}
                                                {/* <td>{x.mobileno}</td> */}
                                                {/* <td>{x.aadhaar}</td> */}
                                                <td>{x.roomstatus}</td>
                                                <td>{x.roomrent}</td>
                                                <td>
                                                    <button onClick={() => singleroom(x._id)}>Edit</button>
                                                    <button onClick={() => deleteroom(x._id)}>Delete</button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {
                showform ? <Roomform getrooms={getrooms} sdata={sdata} onclose={() =>
                    setshowform(false)} isedit={editMode} /> : null

            }

        </div>
    )
}

export default Rooms
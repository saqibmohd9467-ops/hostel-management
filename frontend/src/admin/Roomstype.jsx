import React from 'react'
import './dashboard.css'
import Sidebar from '../components/Sidebar'
import { useState, useEffect } from 'react'
import Roomform from './roomtypeform'

const Roomtype = () => {
    const [room, setroom] = useState([])
    const [showform, setshowform] = useState(false)
    const [editMode, seteditMode] = useState(false)


    const getroomtype = async () => {
        const re = await fetch("http://localhost:5000/roomtype", {
            method: "GET",
            headers: { "Content-Type": "Application/json" }
        })
        const data = await re.json()
        console.log(data)
        setroom(data)
        seteditMode(false)
        setshowform(false)
        // seteditMode(true)
    }

    useEffect(() => {
        getroomtype()
    }, [])

    const [singledata, setsingledata] = useState({})
    const singleroomtype = async (id) => {
        const re = await fetch(`http://localhost:5000/roomtype/${id}`, {
            method: "GET",
            headers: { "Content-Type": "Application/json" }
        })
        const data = await re.json();
        console.log(data);
        setsingledata(data)
        setshowform(true)
        seteditMode(true)
    }



    const deleteroomtype = async (id) => {
        // alert(id)
        const res = await fetch(`http://localhost:5000/roomtype/${id}`, {
            method: "DELETE",
            headers: { "Content-Type": "Application/json" }
        })
        const data = await res.json();
        console.log(data);
        getroomtype()
    }


    return (
        <div className="a1">
            <div className="b1">
                <h1>Admin</h1><br></br>
                <Sidebar />
            </div>
            <div className="b2">
                <div className="c1">
                    <h1>Room Type</h1>
                </div>
                <div className="c2">
                    <div className="d1">
                        {/* <button onClick={getroom}>Get</button>
                    <button onClick={addroom}>Post</button> */}
                        <button onClick={() => setshowform(true)}>Add</button>
                    </div>
                    <div className="e1">
                        <table className="tb">
                            <tbody>

                                <tr>
                                    <td>S.No</td>
                                    {/* <td>Room No.</td> */}
                                    <td>Room Type</td>
                                    {/* <td>Renter Name</td> */}
                                    {/* <td>Room Rent</td> */}
                                    {/* <td>Room Rent Status</td> */}
                                    <td>Action</td>
                                    <td></td>
                                </tr>
                                {
                                    room.map((x, i) => {
                                        return (
                                            <tr key={i}>
                                                <td>{i + 1}</td>
                                                {/* <td>{x.roomno}</td> */}
                                                <td>{x.roomtype}</td>
                                                {/* <td>{x.rentername}</td> */}
                                                {/* <td>{x.roomrent}</td> */}
                                                {/* <td>{x.roomrentstatus}</td> */}
                                                <td>
                                                    <button onClick={() => singleroomtype(x._id)}>Edit</button>
                                                    <button onClick={() => deleteroomtype(x._id)}>Delete</button>
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
                showform ? <Roomform onclose={() => setshowform(false)} isedit={editMode}
                    singledata={singledata}
                    getroomtype={getroomtype}
                /> : null
            }
        </div>
    )
}

export default Roomtype
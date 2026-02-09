
import React from 'react'
import './dashboard.css'
import { useState, useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import rentroomform from './rentroomform'
import Rentroomform from './rentroomform'

const Rentroom = () => {

    const [rentrooms, setrentrooms] = useState([])
    const [showform, setshowform] = useState(false)
    const [sdata, setsdata] = useState({})
    const [editMode, seteditMode] = useState(false)

    const getrentrooms = async () => {
        const re = await fetch("http://localhost:5000/rentroom", {
            method: "GET",
            headers: { "Content-Type": "Application/json" }
        })
        const data = await re.json()
        console.log(data)
        setrentrooms(data)
    }
    useEffect(() => {
        // getrentrooms()
    }, []);



    const deleteStudent = async (id) => {
        // alert(id)
        const res = await fetch(`http://localhost:5000/rentroom/${id}`, {
            method: "DELETE",
            headers: { "Content-Type": "Application/json" }
        })
        const data = await res.json();
        console.log(data);
        getrentrooms()
    }

    const singlestudent = async (id) => {
        const re = await fetch(`http://localhost:5000/student/${id}`, {
            method: "GET",
            headers: { "Content-Type": "Application/json" }
        })
        const data = await re.json();
        console.log(data);
        setsdata(data)
        setshowform(true)
        seteditMode(true)
    }
    useEffect(() => {
        getrentrooms()
    }, [])

    return (

        <div className="a1">
            <div className="b1">
                <h1>Admin</h1><br></br>
                <Sidebar />
            </div>
            <div className="b2">
                <div className="c1">
                    <h1>Rent Rooms</h1>

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
                                    <td>Room No</td>
                                    <td>Rented By</td>
                                    <td>Total Rent</td>
                                    <td>Rent Status</td>
                                    <td>Action</td>
                                </tr>
                                {
                                    rentrooms.map((x, i) => {
                                        return (
                                            <tr>
                                                <td>{i + 1}</td>
                                                <td>{x.roomno}</td>
                                                <td>{x.rentername}</td>
                                                <td>{x.paidroomrent}</td>
                                                <td>
                                                    <span className={`${x.rentstatus=="pending" ? "bg-orange-400" :" bg-green-400" } px-2 py-1 rounded-lg`}>{x.rentstatus}</span>
                                                </td>
                                                <td>
                                                    <button onClick={() => singlestudent(x._id)}>Edit</button>
                                                    <button onClick={() => deleteStudent(x._id)}>Delete</button>
                                                    <button className="ttt">View</button>
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
                showform ? <Rentroomform sdata={sdata} onclose={() =>
                    setshowform(false)} isedit={editMode} /> : null
            }

        </div>
    )
}

export default Rentroom
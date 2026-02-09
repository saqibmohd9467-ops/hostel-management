import React from 'react'
import './dashboard.css'
import Sidebar from '../components/Sidebar'

const Rented = () => {
  return (
    <>
    
     <div className="a1">
        <div className="b1">
            <h1>Admin</h1><br></br>
           <Sidebar/>
        </div>
        <div className="b2">
            <div className="c1">
                <h1>Rented</h1>
            </div>
            <div className="c2">
                <div className="d1">
                    <button>Add</button>
                </div>
                <div className="e1">
                    <table className="tb">
                        <tr>
                            <td>S.No</td>
                            <td>Room No.</td>
                            <td>Renter Name</td>
                            <td>Room Rent Status</td>
                            <td>Action</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>A</td>
                            <td>B</td>
                            <td>C</td>
                            <td>
                                <button>Edit</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                  
                    </table>
                </div>
            </div>
        </div>
        
        
    </div>
    </>
  )
}

export default Rented
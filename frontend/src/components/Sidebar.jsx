import React from 'react'
import {Link} from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
    <ul>
        <li>
            <Link to="/dashboard">
            <h2>Dashboard</h2>
            </Link>
        </li>
       
        <li>
            <Link to="/roomstypes">
            <h2>Room Type</h2>
            </Link>
        </li>
            <li>
            <Link to="/rooms">
            <h2>Rooms</h2>
            </Link>
        </li>
         <li>
            <Link to="/rentrooms">
            <h2>Rent Room</h2>
            </Link>
        </li>
        {/* <li>
            <Link to="/Rented">
            <h2>Rented</h2>
            </Link>
        </li> */}
     
    </ul>
    </>
  )
}

export default Sidebar
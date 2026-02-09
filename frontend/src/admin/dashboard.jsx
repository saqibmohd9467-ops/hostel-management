import React from 'react'
import Sidebar from '../components/Sidebar'
// import './dashboard.css'


const Dashboard = () => {

  return (
    <>
    <div className="a1">
        <div className="b1">
            <h1>Admin</h1><br></br>
            <Sidebar/>
        </div>
        <div className="b2">
            <div className="c1">
                <h1>Dashboard</h1>
            </div>
            <div className="c2">
                <div className="abc e1">
                    <div className="f1">
                        <h1>Students</h1>
                        <h2>32</h2>
                    </div>
                    <div className="f1">
                        <h1>Total Rooms</h1>
                        <h2>52</h2>
                    </div>
                    <div className="f1">
                        <h1>Total Rented</h1>
                        <h2>32</h2>
                    </div>
                </div>
            </div>
        </div>
        
        
    </div>
   
    </>
    
  )
}

export default Dashboard


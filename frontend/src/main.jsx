import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Dashboard from './admin/dashboard.jsx'
import Rentroom from './admin/Rentrooms.jsx'
// import Rooms from './admin/Roomstype.jsx'
import './index.css'
import Rented from './admin/Rented.jsx'
import Sidebar from './components/Sidebar.jsx'
import Rooms from './admin/Rooms.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Roomtype from './admin/Roomstype.jsx'
import Home from './public/Home.jsx'
import Login from './public/login.jsx'
import Signup from './public/Signup.jsx'
import About from './public/About.jsx'
import Facilities from './public/facilities.jsx'
import Contact from './public/Contact.jsx'
import RenterDashboard from './Renter/Renterdashboard.jsx'
import MyProfile from './Renter/myprofile.jsx'
import RoomDetails from './Renter/roomdetails.jsx'
import Payments from './Renter/payment.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/contact" element={<Contact />} />
         <Route path="/renter/dashboard" element={<RenterDashboard />} />
         <Route path="/myprofile" element={<MyProfile />} />
         <Route path="/roomdetails" element={<RoomDetails />} />
         <Route path="/payments" element={<Payments />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/rentrooms" element={<Rentroom />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/roomstypes" element={<Roomtype />} /> 
      </Routes>
    </BrowserRouter>
  </StrictMode>
)

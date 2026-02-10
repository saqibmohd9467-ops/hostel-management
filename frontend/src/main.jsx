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

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/rentrooms" element={<Rentroom />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/roomstypes" element={<Roomtype />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)

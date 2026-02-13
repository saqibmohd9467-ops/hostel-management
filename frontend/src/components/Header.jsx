import React from 'react'
import Login from '../public/login'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='sticky top-0 z-50'>
            <header className="bg-blue-900 text-white ">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                    {/* Logo */}
                    <div className="text-xl font-bold tracking-wide">
                        <Link to="/"> 
                            Verma Heights
                        </Link>
                    </div>

                    {/* Menu */}
                    <nav className="hidden md:flex space-x-8 text-sm font-medium">
                        {/* <a href="#" >Home</a> */}
                        <Link to="/" className="hover:text-slate-300">Home</Link>
                        <Link to="/about" className="hover:text-slate-300">About</Link>
                        <Link to="/facilities" className="hover:text-slate-300">Facilities</Link>
                        <Link to="/contact" className="hover:text-slate-300">Contact</Link>
                    </nav>

                    {/* Auth Buttons */}
                    <div className="flex space-x-3">
                        <Link to="/login" className="px-4 py-2 text-sm rounded-md border border-slate-400 hover:bg-slate-800">
                            Login
                        </Link>
                        <Link to="/signup" className="px-4 py-2 text-sm rounded-md bg-blue-600 hover:bg-blue-700">
                            Sign Up
                        </Link>
                    </div>
                </div>

            </header >
        </div >
    )
}

export default Header
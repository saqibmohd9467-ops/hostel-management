import React from 'react'
import Login from '../public/login'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <header className="bg-slate-900 text-white">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                    {/* Logo */}
                    <div className="text-xl font-bold tracking-wide">
                        Verma Heights
                    </div>

                    {/* Menu */}
                    <nav className="hidden md:flex space-x-8 text-sm font-medium">
                        <a href="#" className="hover:text-slate-300">Home</a>
                        <a href="#" className="hover:text-slate-300">About</a>
                        <a href="#" className="hover:text-slate-300">Facilities</a>
                        <a href="#" className="hover:text-slate-300">Contact</a>
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
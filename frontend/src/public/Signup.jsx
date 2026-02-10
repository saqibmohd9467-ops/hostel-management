import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Signup = () => {
    return (
        <>
            <Header />
            <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center px-4">

                <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">

                    {/* Logo / Title */}
                    <div className="text-center mb-6">
                        <h1 className="text-2xl font-bold text-slate-800">
                            Verma Heights
                        </h1>
                        <p className="text-sm text-slate-500 mt-1">
                            Create your account
                        </p>
                    </div>

                    {/* Signup Form */}
                    <form className="space-y-5">

                        {/* Full Name */}
                        <div>
                            <label className="block text-sm font-medium text-slate-700">
                                Full Name
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your full name"
                                className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-slate-700">
                                Email Address
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm font-medium text-slate-700">
                                Password
                            </label>
                            <input
                                type="password"
                                placeholder="Create a password"
                                className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label className="block text-sm font-medium text-slate-700">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                placeholder="Confirm your password"
                                className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>

                        {/* Terms */}
                        <div className="flex items-center space-x-2 text-sm">
                            <input type="checkbox" className="rounded" />
                            <span>
                                I agree to the{" "}
                                <a href="#" className="text-blue-600 hover:underline">
                                    Terms & Conditions
                                </a>
                            </span>
                        </div>

                        {/* Signup Button */}
                        <button
                            type="submit"
                            className="w-full py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition"
                        >
                            Sign Up
                        </button>
                    </form>

                    {/* Login Redirect */}
                    <p className="text-center text-sm text-slate-600 mt-6">
                        Already have an account?{" "}
                        <Link to="/login" className="text-blue-600 font-medium hover:underline">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
            <Footer />>
        </>
    )
}

export default Signup
